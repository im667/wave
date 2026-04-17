import ffmpeg from 'fluent-ffmpeg'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import path from 'path'
import fs from 'fs'
import os from 'os' // 임시 폴더 사용을 위해 추가
import { createClient } from '@supabase/supabase-js'

ffmpeg.setFfmpegPath(ffmpegPath.path)

export const generateFrequencyAudio = async (
  frequency: number, 
  baZi: string[], 
  name: string,
  sbUrl: string, // Supabase 연동을 위해 추가
  sbKey: string  // Supabase 연동을 위해 추가
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const supabase = createClient(sbUrl, sbKey)
    const safeName = encodeURIComponent(name || 'User')
    const fileName = `Resonance_${safeName}_${frequency}Hz_${Date.now()}.mp3`
    
    // 클라우드 서버의 안전한 임시 폴더(/tmp) 경로 사용
    const tmpFilePath = path.join(os.tmpdir(), fileName)

    console.log(`[연성] ${fileName} 임시 생성 시작...`)

    ffmpeg()
      .input(`sine=f=${frequency}:d=180`) 
      .inputFormat('lavfi')
      .complexFilter(['vibrato=f=5:d=0.1'])
      .audioBitrate('192k')
      .on('end', async () => {
        try {
          console.log(`[업로드] Supabase Storage로 전송 중...`)
          
          // 1. 임시 폴더에 만들어진 MP3 파일 읽기
          const fileBuffer = fs.readFileSync(tmpFilePath)

          // 2. Supabase 'audio_outputs' 버킷에 업로드
          const { error: uploadError } = await supabase.storage
            .from('audio_outputs')
            .upload(fileName, fileBuffer, {
              contentType: 'audio/mp3',
              upsert: false
            })

          if (uploadError) throw uploadError

          // 3. 영구적인 공개 다운로드 URL 발급
          const { data: urlData } = supabase.storage
            .from('audio_outputs')
            .getPublicUrl(fileName)

          // 4. 서버 용량 확보를 위해 임시 파일 삭제
          fs.unlinkSync(tmpFilePath)
          
          console.log(`[완료] 클라우드 업로드 성공: ${urlData.publicUrl}`)
          resolve(urlData.publicUrl) // 🌟 파일명이 아닌 최종 URL을 바로 반환!

        } catch (error) {
          console.error('[업로드 에러]', error)
          reject(error)
        }
      })
      .on('error', (err) => {
        console.error('[오디오 생성 에러]', err)
        reject(err)
      })
      .save(tmpFilePath)
  })
}