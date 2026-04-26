import ffmpeg from 'fluent-ffmpeg'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import path from 'path'
import fs from 'fs'
import os from 'os'
import { createClient } from '@supabase/supabase-js'

ffmpeg.setFfmpegPath(ffmpegPath.path)

interface AudioTask {
  recipe: { baseHz: number; subHz: number; offset: number };
  ilju: string;
  name: string;
  sbUrl: string;
  sbKey: string;
}

export const generateFrequencyAudio = async (task: AudioTask): Promise<string> => {
  return new Promise((resolve, reject) => {
    const supabase = createClient(task.sbUrl, task.sbKey)
    
    // 🌟 에러 해결 핵심: 한글('정해')을 제거하고 ASCII 문자로만 파일명 구성
    const fileName = `giyeondang_session_${Date.now()}.mp3`
    const tmpFilePath = path.join(os.tmpdir(), fileName)

    console.log(`[최종 연성] 파일명: ${fileName} 생성 및 업로드 시도...`)

    ffmpeg()
      .input(`sine=f=${task.recipe.baseHz}:r=44100:d=180`)
      .inputFormat('lavfi')
      .input(`sine=f=${task.recipe.baseHz + task.recipe.offset}:r=44100:d=180`)
      .inputFormat('lavfi')
      .input(`sine=f=${task.recipe.subHz}:r=44100:d=180`)
      .inputFormat('lavfi')
      .complexFilter([
        '[0:a]aresample=44100,aformat=sample_rates=44100:channel_layouts=mono[a0]',
        '[1:a]aresample=44100,aformat=sample_rates=44100:channel_layouts=mono[a1]',
        '[2:a]aresample=44100,aformat=sample_rates=44100:channel_layouts=mono,volume=0.3,asplit=2[s1][s2]',
        '[a0][s1]amix=inputs=2:duration=first[l]',
        '[a1][s2]amix=inputs=2:duration=first[r]',
        '[l][r]amerge=inputs=2[out]'
      ])
      .map('[out]')
      .audioCodec('libmp3lame')
      .audioBitrate('192k')
      .on('end', async () => {
        try {
          const fileBuffer = fs.readFileSync(tmpFilePath)

          // 🌟 버킷 이름 'audio_outputs'가 대시보드와 정확히 일치하는지 마지막으로 확인해주세요!
          const { error: uploadError } = await supabase.storage
            .from('audio_outputs')
            .upload(fileName, fileBuffer, {
              contentType: 'audio/mp3',
              upsert: true
            })

          if (uploadError) {
            console.error('[Supabase 상세 에러]', uploadError)
            throw uploadError
          }

          const { data: urlData } = supabase.storage
            .from('audio_outputs')
            .getPublicUrl(fileName)

          if (fs.existsSync(tmpFilePath)) fs.unlinkSync(tmpFilePath)
          
          console.log(`[연성 성공] 공개 URL: ${urlData.publicUrl}`)
          resolve(urlData.publicUrl)
        } catch (error) {
          reject(error)
        }
      })
      .on('error', (err) => {
        reject(err)
      })
      .save(tmpFilePath)
  })
}