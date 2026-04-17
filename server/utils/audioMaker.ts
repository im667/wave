import ffmpeg from 'fluent-ffmpeg'
import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import path from 'path'
import fs from 'fs'

// FFmpeg 엔진 경로 설정
ffmpeg.setFfmpegPath(ffmpegPath.path)

/**
 * @param frequency 도출된 처방 주파수
 * @param baZi 사용자의 사주 명식 (예: ["甲子", "丙寅", "壬辰", "癸卯"])
 * @param name 사용자 이름 (파일명 개인화용)
 */
export const generateFrequencyAudio = async (frequency: number, baZi: string[], name: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 1. 파일명에 이름과 주파수를 박아넣어 소장 가치를 높임
    const safeName = name || 'User';
    const outputFileName = `Resonance_${safeName}_${frequency}Hz_${Date.now()}.mp3`
    const outputPath = path.resolve(`./public/outputs/${outputFileName}`)

    // 출력 폴더 체크
    if (!fs.existsSync(path.resolve('./public/outputs'))) {
      fs.mkdirSync(path.resolve('./public/outputs'), { recursive: true })
    }

    console.log(`[연성] 명식(${baZi.join(' ')}) 기반 ${frequency}Hz 순수 파동 생성 중...`)

    // 2. 외부 소스 없이 순수 주파수(Sine Wave)를 3분(180초)간 생성
    ffmpeg()
      .input(`sine=f=${frequency}:d=180`) 
      .inputFormat('lavfi')
      .complexFilter([
        // 단순 기계음이 아닌 미세한 진동(vibrato)을 추가하여 테라피 효과 부여
        'vibrato=f=5:d=0.1' 
      ])
      .audioBitrate('192k')
      .on('end', () => resolve(outputFileName))
      .on('error', (err) => reject(err))
      .save(outputPath)
  })
}