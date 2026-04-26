import { calculateFourPillars } from 'manseryeok';
import { serverSupabaseClient } from '#supabase/server'; // Nuxt Supabase 모듈 사용 가정

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { birthYear, birthMonth, birthDay, isTimeUnknown, ampm, hour, minute } = body;

  try {
    // 1. 태어난 시간 파싱
    let finalHour = 12;
    let finalMinute = 0;
    if (!isTimeUnknown && hour && minute) {
      finalHour = parseInt(hour, 10);
      if (ampm === 'PM' && finalHour < 12) finalHour += 12;
      if (ampm === 'AM' && finalHour === 12) finalHour = 0;
      finalMinute = parseInt(minute, 10);
    }

    // 2. 만세력 라이브러리 계산
    const userSaju = calculateFourPillars({
    year: parseInt(birthYear),
    month: parseInt(birthMonth),
    day: parseInt(birthDay),
    hour: isTimeUnknown ? 12 : (ampm === 'PM' ? parseInt(hour) + 12 : parseInt(hour)),
    minute: isTimeUnknown ? 0 : parseInt(minute)
  });

    // const sajuObj = userSaju.toObject();
    const iljuKorean = userSaju.toObject().day.replace('일주', '').trim();

    console.log(`🔍 [API] 일주 추출 완료: ${iljuKorean}`);

    // 🔥 핵심: 로컬 JSON 파일이 아닌 Supabase에서 일주 데이터 검색
    const supabase = await serverSupabaseClient(event);
    
    const { data: resultData, error: dbError } = await supabase
      .from('giyeon_db') // Supabase에 만든 테이블 이름
      .select('*')
      .eq('ilju', iljuKorean)
      .single();

    if (dbError || !resultData) {
      throw new Error(`'${iljuKorean}' 데이터를 DB에서 찾을 수 없습니다.`);
    }

    // 4. 결과 반환
    return resultData;

  } catch (error: any) {
    console.error('❌ API Error:', error.message);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || '사주 분석 중 서버 오류가 발생했습니다.'
    });
  }
});