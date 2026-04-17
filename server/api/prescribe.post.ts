// @ts-expect-error: 타입 무시
import pkg from 'lunar-javascript'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { generateFrequencyAudio } from '../utils/audioMaker'

const { Solar } = pkg

const config = useRuntimeConfig()
const resend = new Resend(config.resendApiKey)
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

// 🌟 [추가됨] 한자를 한글로 변환하여 '일주' 이름을 뽑아주는 함수
function getIljuName(dayPillar: string) {
  const map: Record<string, string> = {
    '甲':'갑', '乙':'을', '丙':'병', '丁':'정', '戊':'무', '己':'기', '庚':'경', '辛':'신', '壬':'임', '癸':'계',
    '子':'자', '丑':'축', '寅':'인', '卯':'묘', '辰':'진', '巳':'사', '午':'오', '未':'미', '申':'신', '酉':'유', '戌':'술', '亥':'해'
  }
  const korean = dayPillar.split('').map(c => map[c] || c).join('')
  return `${korean}`
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { birthDate, birthTime, email, name, focus } = body

    // 1. 만세력 변환
    const date = new Date(birthDate)
    const [hour, minute] = (birthTime || "12:00").split(':').map(Number)
    const solar = Solar.fromYmdHms(date.getFullYear(), date.getMonth() + 1, date.getDate(), hour, minute, 0)
    const eightChar = solar.getLunar().getEightChar()
    const myeongsik = [eightChar.getYear(), eightChar.getMonth(), eightChar.getDay(), eightChar.getTime()]

    // 2. 일주 한글명 추출 (예: 丁亥 -> 정해일주)
    const iljuHanja = String(myeongsik) // 3번째 기둥이 '일주(나)'를 뜻합니다.
    const iljuKorean = getIljuName(iljuHanja)

    // 3. 오행 분석
    const { scores, missingElement } = calculateFiveElements(myeongsik)
    const freq = getFrequency(missingElement)

    // 4. DB 저장
    const { error: dbError } = await supabase
      .from('leads')
      .insert([{ 
        name, email, birth_date: birthDate, birth_time: birthTime, 
        target_element: missingElement, frequency: freq, focus 
      }])
    if (dbError) console.error('[DB 에러]', dbError.message)

    // 5. 오디오 생성
    const hostUrl = getRequestURL(event).origin
    const outputFileName = await generateFrequencyAudio(freq, myeongsik, name)
    const audioUrl = `${hostUrl}/outputs/${outputFileName}`
    

    // 6. 🌟 [업그레이드] 프리미엄 이메일 발송
    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      // 메일이 겹쳐서 '...' 으로 접히는 것을 방지하기 위해 제목에 고유시간 추가
      subject: `[밝은주파수] ${name}님의 ${iljuKorean} 맞춤 파동 처방전`,
      html: `
        <div style="background-color: #010312; padding: 40px 10px; font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0f172a; border-radius: 20px; overflow: hidden; border: 1px solid #334155; box-shadow: 0 10px 40px rgba(147, 51, 234, 0.15);">
            
            <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border-bottom: 1px solid #1e293b;">
              <span style="color: #c084fc; font-size: 12px; font-weight: bold; letter-spacing: 3px;">명리학 × 파동역학</span>
              <h1 style="color: #ffffff; margin: 15px 0 0 0; font-size: 26px; font-weight: 800; letter-spacing: -1px;">운명을 조율하는 파동</h1>
            </div>

            <div style="padding: 40px 30px;">
              <p style="font-size: 16px; color: #e2e8f0; line-height: 1.7; margin-bottom: 30px; word-break: keep-all;">
                안녕하세요, <strong>${name}</strong>님.<br/>
                입력하신 생년월일시를 바탕으로 정밀 분석된 사주 명식과, 당신만을 위한 맞춤형 주파수 처방전이 완성되었습니다.
              </p>

              <div style="background-color: #1e293b; border-left: 4px solid #a855f7; padding: 25px; border-radius: 0 12px 12px 0; margin-bottom: 35px;">
                <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 18px;">📊 타고난 기운 진단</h3>
                
                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 15px;">
                  ▶ 당신의 본질: <strong style="color: #e2e8f0; font-size: 17px; background-color: rgba(168, 85, 247, 0.2); padding: 2px 6px; border-radius: 4px;">${iljuKorean} (${iljuHanja})</strong>
                </p>
                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 15px;">
                  ▶ 전체 명식: <span style="color: #cbd5e1;">${myeongsik.join(' ')}</span>
                </p>
                <p style="margin: 0; color: #94a3b8; font-size: 15px;">
                  ▶ 현재 필요한 기운: <strong style="color: #38bdf8;">'${missingElement}' (보완 필요)</strong>
                </p>
              </div>

              <div style="margin-bottom: 40px;">
                <h3 style="color: #ffffff; font-size: 18px; margin-bottom: 15px; display: flex; align-items: center;">
                  <span style="margin-right: 8px;">✨</span> 오늘의 처방: ${freq}Hz
                </h3>
                <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; word-break: keep-all;">
                  남들이 다 듣는 기성품 명상 음악이 아닌, <strong>${name}</strong>님의 결핍된 '${missingElement}' 기운을 채워주기 위해 특별히 연성된 순수 파동입니다. 조용한 공간에서 눈을 감고 이 소리에 집중해 보세요. 흩어졌던 기운이 정렬되는 것을 느끼실 수 있습니다.
                </p>
              </div>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 20px;">
                <tr>
                  <td align="center">
                    <a href="${audioUrl}" style="display: inline-block; padding: 20px 30px; background-color: #9333ea; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 50px; border: 1px solid #c084fc; text-align: center;">
                      [내 사주 기반 주파수 샘플 다운로드]
                    </a>
                  </td>
                </tr>
              </table>

            </div>
            
            <div style="background-color: #0f172a; padding: 30px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="font-size: 13px; color: #64748b; margin: 0 0 10px 0; line-height: 1.6;">
                본 앱이 정식 출시되면 <strong>${email}</strong>로 가장 먼저 소식을 전해드리겠습니다.<br/>
                당신의 맑은 운을 응원합니다.
              </p>
              <p style="font-size: 11px; color: #475569; margin: 0; letter-spacing: 1px;">
                © 2026 밝은주파수 RESONANCE
              </p>
            </div>

          </div>
        </div>
      `
    })

    if (emailResult.error) throw new Error(emailResult.error.message)
    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
})

/**
 * 부족한 오행 기운을 치유 주파수(Hz)로 매핑하는 함수
 */
function getFrequency(element: string): number {
  const freqs: Record<string, number> = {
    "목": 417, "화": 528, "토": 396, "금": 852, "수": 741
  }
  return freqs[element] || 528
}

/**
 * 8글자를 분석하여 5행의 기운을 수치화하는 공식
 */
function calculateFiveElements(baZi: string[]) {
  const scores: Record<string, number> = { 
    "목": 0, "화": 0, "토": 0, "금": 0, "수": 0 
  }

  const mapping: Record<string, string> = {
    '甲': '목', '乙': '목', '寅': '목', '卯': '목',
    '丙': '화', '丁': '화', '巳': '화', '午': '화',
    '戊': '토', '己': '토', '辰': '토', '戌': '토', '丑': '토', '未': '토',
    '庚': '금', '辛': '금', '申': '금', '酉': '금',
    '壬': '수', '癸': '수', '亥': '수', '子': '수'
  }

  // 1. 점수 합산
  baZi.forEach((pillar, pillarIndex) => {
    if (!pillar) return
    pillar.split('').forEach((char, charIndex) => {
      const element = mapping[char]
      if (element && scores[element] !== undefined) {
        let weight = 1
        if (pillarIndex === 2 && charIndex === 0) weight = 2 // 일간 가중치
        if (pillarIndex === 1 && charIndex === 1) weight = 2 // 월지 가중치
        scores[element] += weight
      }
    })
  })

  // 2. 가장 부족한 오행 도출 (타입 에러 완벽 차단)
  let missingElement = "목"
  let minScore = 9999

  // 복잡한 reduce 대신 직관적인 Object.entries 반복문 사용
  for (const [element, score] of Object.entries(scores)) {
    if (score < minScore) {
      minScore = score
      missingElement = element
    }
  }

  return { scores, missingElement }
}