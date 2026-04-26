import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js' // 🌟 파일 업로드에 성공했던 그 클라이언트 호출
import { generateFrequencyAudio } from '../utils/audioMaker'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  const rsKey = process.env.RESEND_API_KEY || config.resendApiKey
  const sbUrl = (process.env.SUPABASE_URL || config.supabaseUrl) as string
  const sbKey = (process.env.SUPABASE_KEY || config.supabaseKey) as string

  const resend = new Resend(rsKey)
  
  // 🌟 오디오 연성할 때 썼던 확실한 권한의 클라이언트를 여기서도 똑같이 씁니다.
  const supabase = createClient(sbUrl, sbKey)

  try {
    const body = await readBody(event)
    const { email, name, focus, resultData, birthDate, birthTime } = body 

    if (!email || !resultData) {
      throw createError({ statusCode: 400, statusMessage: "필수 데이터가 누락되었습니다." })
    }

    const recipe = {
      baseHz: focus === '재물운' ? 852.0 : focus === '직업운' ? 741.0 : 639.2,
      subHz: 432.0, 
      offset: 6.0
    }

    // 1. MP3 연성
    const audioUrl = await generateFrequencyAudio({
      recipe,
      ilju: resultData.ilju,
      name,
      sbUrl,
      sbKey
    })

    // 2. 🌟 DB 기록 (실패하면 바로 터지도록 강력한 방어벽 설정)
    const { data: insertData, error: dbError } = await supabase
      .from('leads')
      .insert([
        {
          email: email,
          name: name || '고객',
          birth_date: birthDate || '', 
          birth_time: birthTime || '', 
          target_element: resultData.ilju || '', 
          frequency: `${recipe.baseHz}Hz + ${recipe.subHz}Hz`, 
          focus: focus || '일반'
        }
      ])
      .select() // 인서트 된 결과를 가져오라고 강제함

    if (dbError) {
      console.error("📍 Leads 테이블 Insert 치명적 오류:", dbError)
      // 🚨 에러가 나면 프론트엔드로 에러 메시지를 집어 던집니다!
      throw createError({ statusCode: 500, statusMessage: `DB 기록 실패: ${dbError.message}` })
    }

    console.log(`[DB 기록 완벽 성공] ${name}님 데이터 저장 완료:`, insertData)

    // 3. 메일 발송
    await resend.emails.send({
      from: '기연당 | GIYEONDANG <master@makefrequency.com>',
      to: email,
      subject: `[기연당] ${name}님, 당신의 엇갈린 주파수를 교정할 운명 처방전이 도착했습니다.`,
      html: `
        <div style="background-color: #0E0A14; padding: 60px 20px; font-family: 'Apple SD Gothic Neo', sans-serif; color: #F7F2EB; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid rgba(212, 154, 153, 0.2); border-radius: 24px; padding: 50px 40px; background-color: #0E0A14;">
            
            <div style="margin-bottom: 40px;">
              <h1 style="color: #D49A99; font-weight: 200; letter-spacing: 0.4em; font-size: 14px; margin: 0;">GIYEONDANG</h1>
              <div style="width: 30px; height: 1px; background-color: #D49A99; margin: 20px auto; opacity: 0.3;"></div>
            </div>

            <div style="margin-bottom: 40px;">
              <h2 style="font-weight: 300; font-size: 22px; color: #F7F2EB; line-height: 1.5; word-break: keep-all;">
                "${resultData.title || name + '님의 운명적 주파수'}"
              </h2>
              <p style="font-size: 14px; color: #D49A99; font-weight: 300; margin-top: 10px;">
                ${name}님의 ${resultData.ilju}일주 명식 해독 결과
              </p>
            </div>

            <div style="background: rgba(255,255,255,0.03); padding: 25px; border-radius: 16px; margin-bottom: 30px; text-align: left;">
              <p style="color: #D49A99; font-size: 13px; margin-bottom: 12px; font-weight: bold; letter-spacing: 0.05em;">[심층 명리 진단]</p>
              <p style="color: #B5A598; line-height: 1.8; font-size: 14px; margin: 0; font-weight: 300;">
                ${resultData.basic_analysis_core_energy}
              </p>
            </div>

            <div style="margin-bottom: 40px; text-align: left;">
              <h3 style="font-size: 15px; color: #D49A99; font-weight: 400; margin-bottom: 15px; letter-spacing: 0.05em;">◈ ${focus} 개인별 최적화 처방</h3>
              <div style="font-size: 13px; line-height: 1.8; color: #E8DCC4; background: rgba(212, 154, 153, 0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(212, 154, 153, 0.1);">
                <p style="margin: 8px 0;">• <strong style="color: #D49A99;">에너지 결합:</strong> ${resultData[`tuning_by_interest_${focus}_deficiency_weakness`] || '기운의 불균형 감지'}</p>
                <p style="margin: 8px 0;">• <strong style="color: #D49A99;">치명적 약점:</strong> ${resultData[`tuning_by_interest_${focus}_deficiency_fatal_flaw`] || '무의식적 방어기제'}</p>
                <p style="margin: 8px 0;">• <strong style="color: #D49A99;">개운 리추얼:</strong> ${resultData[`tuning_by_interest_${focus}_prescription_color_reasoning`] || '고유 파동을 통한 에너지 교정'}</p>
              </div>
            </div>

            <div style="text-align: center; border: 1px solid rgba(212, 154, 153, 0.4); padding: 40px 30px; border-radius: 20px; background: rgba(212, 154, 153, 0.03); margin-bottom: 40px;">
              <p style="font-size: 10px; color: #8C6070; letter-spacing: 0.2em; font-weight: bold; margin-bottom: 15px;">PERSONAL MASTERING HZ</p>
              <div style="font-size: 34px; color: #D49A99; font-weight: 600; margin-bottom: 25px; letter-spacing: -0.02em;">
                ${recipe.baseHz}Hz + ${recipe.subHz}Hz
              </div>
              <a href="${audioUrl}" style="display: inline-block; background: linear-gradient(135deg, #E8DCC4 0%, #D49A99 100%); color: #0E0A14; padding: 20px 40px; text-decoration: none; border-radius: 12px; font-weight: 800; font-size: 16px; box-shadow: 0 15px 35px rgba(212, 154, 153, 0.25);">
                프라이빗 세션 입장하기
              </a>
            </div>

            <div style="background-color: rgba(255, 255, 255, 0.03); padding: 25px; border-radius: 15px; text-align: left; margin-bottom: 40px;">
              <h4 style="color: #D49A99; margin: 0 0 15px; font-size: 13px; letter-spacing: 0.05em;">⚠️ 주파수 청취 지침 (The Ritual)</h4>
              <ul style="padding: 0; margin: 0; list-style: none; font-size: 12px; color: #B5A598; line-height: 2; font-weight: 300;">
                <li>• 좌우 뇌파 동조를 위해 반드시 <strong>이어폰 또는 헤드폰</strong>을 착용하세요.</li>
                <li>• 가급적 조명을 모두 끄고, 가장 편안한 자세로 눈을 감으세요.</li>
                <li>• 파동이 전두엽을 지나 척추까지 흐르는 감각에 집중하십시오.</li>
              </ul>
            </div>

            <div style="margin-top: 50px; font-size: 10px; color: #4A3B4E; letter-spacing: 0.1em; line-height: 1.6;">
              © 2026 GIYEONDANG. All Rights Reserved.<br>
              본 메일은 개인화된 분석 리포트를 포함하고 있어 타인에게 재발송이 불가합니다.
            </div>

          </div>
        </div>`
    })

    return { success: true }

  } catch (error: any) {
    console.error("🔥 최종 발송 프로세스 실패:", error.message)
    // 에러를 그대로 던져서 프론트(화면) 알림창에 내용이 뜨게 만듭니다.
    return { success: false, error: error.message || error.statusMessage }
  }
})