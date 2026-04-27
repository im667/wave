<template>
  <div v-if="result" class="w-full max-w-4xl animate-fade-in-up space-y-24 md:space-y-32 mt-16 md:mt-24 pb-40">
    
    <section class="text-center space-y-8">
      <div class="inline-flex items-center justify-center gap-2 px-5 py-2 border border-[#D49A99]/40 bg-[#D49A99]/10 rounded-full text-[10px] md:text-xs font-medium text-[#D49A99] tracking-[0.2em] uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(212,154,153,0.1)]">
        <span class="w-1.5 h-1.5 rounded-full bg-[#D49A99] animate-pulse"></span>
        {{ formData.name }}님을 위한 1:1 고유 기운 처방전
      </div>
      
      <div class="text-[#E8DCC4] text-lg md:text-xl font-light tracking-wide -mt-2">
        {{ formData.name }}님은 <strong class="text-[#D49A99] font-medium">'{{ result.ilju || '해당' }}일주'</strong>입니다.
      </div>

      <h2 class="text-3xl md:text-5xl font-light text-[#F7F2EB] tracking-tight break-keep leading-[1.3]">
        "{{ result.title || '당신의 잃어버린 에너지를 찾았습니다' }}"
      </h2>
      <p class="text-[#B5A598] text-sm md:text-base max-w-2xl mx-auto leading-loose px-4 font-light break-keep">
        {{ result.basic_analysis_core_energy || result.basic_analysis?.core_energy }}<br><br>
        <span class="italic opacity-60 text-[10px] md:text-xs">*본 분석 리포트는 외부 유출을 엄격히 금합니다.</span>
      </p>
    </section>

    <div class="w-px h-24 bg-gradient-to-b from-transparent via-[#D49A99]/40 to-transparent mx-auto"></div>

    <section class="space-y-12">
      <div class="text-center space-y-4 mb-12">
        <h3 class="text-xl md:text-2xl font-light text-[#F7F2EB] tracking-tight">당신의 관계가 엇갈려야만 했던 <strong class="text-[#D49A99] font-medium">명리학적 이유</strong></h3>
        <p class="text-[#B5A598] text-sm font-light">타고난 기질에 맞는 고유 진동을 먼저 찾아야 합니다.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div class="bg-[#120D1A] border border-[#2A1F2D] rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between hover:border-[#D49A99]/30 transition-all duration-500 shadow-xl">
          <div>
            <h4 class="text-[#D49A99] font-medium text-sm md:text-base mb-6 tracking-widest uppercase flex items-center gap-2">
              <span class="text-lg">🕯️</span> 타고난 운명의 결
            </h4>
            <p class="text-[#E8DCC4] text-sm md:text-base leading-loose mb-10 font-light break-keep">
              <strong class="font-medium text-[#F7F2EB]">{{ result.shinsal_analysis_primary_shinsal_name || result.shinsal_analysis?.primary_shinsal?.name }}</strong>의 기운을 타고난 당신. <br>
              {{ result.shinsal_analysis_primary_shinsal_description || result.shinsal_analysis?.primary_shinsal?.description }}
            </p>
          </div>
          <div class="p-6 bg-[#D49A99]/5 rounded-2xl border border-[#D49A99]/10 text-xs md:text-sm text-[#D49A99] leading-relaxed font-light">
            <strong class="font-medium">💡 기질 승화법:</strong> {{ result.shinsal_analysis_primary_shinsal_handling_method || result.shinsal_analysis?.primary_shinsal?.handling_method }}
          </div>
        </div>

        <div class="bg-gradient-to-br from-[#2A1A21] to-[#1A121F] border border-[#D49A99]/40 rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between shadow-[inset_0_0_50px_rgba(212,154,153,0.05)]">
          <div>
            <h4 class="text-[#E8DCC4] font-medium text-sm md:text-base mb-6 tracking-widest uppercase flex items-center gap-2">
              <span class="text-lg">🥀</span> 엇갈림의 근본적 원인
            </h4>
            <p class="text-[#E8DCC4] text-sm md:text-base leading-loose mb-10 font-light break-keep">
              {{ currentInterestData?.deficiency?.weakness || '타고난 에너지의 불균형이 상대와의 파동을 어긋나게 만들었습니다.' }}
            </p>
          </div>
          <div class="text-xs md:text-sm text-[#D49A99] font-light bg-[#D49A99]/10 p-6 rounded-2xl border border-[#D49A99]/20 leading-relaxed italic">
            "{{ currentInterestData?.deficiency?.fatal_flaw || '무의식적인 방어기제를 해제해야 합니다.' }}"
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-12 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[#D49A99]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="text-center space-y-4 mb-16 relative z-10">
        <h3 class="text-2xl md:text-3xl font-light text-[#F7F2EB] tracking-tight">결핍된 에너지를 채우는 <strong class="text-[#D49A99] font-medium">나만의 고유 진동수</strong></h3>
        <p class="text-[#B5A598] text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto break-keep">
          모든 만물은 고유의 진동수(Hz)를 가집니다. 당신의 사주에 부족한 기운을 정확한 수치의 소리 파동으로 변환하여, 무의식 깊은 곳에서부터 상대와의 연결고리를 다시 생성합니다.
        </p>
      </div>
      
      <div class="relative z-10 overflow-hidden bg-gradient-to-br from-[#120D1A] to-[#25161F] p-10 md:p-16 rounded-[3.5rem] border-2 border-[#D49A99]/60 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-[0_40px_100px_rgba(212,154,153,0.2)] group">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D49A99]/15 via-transparent to-transparent animate-pulse-slow"></div>

        <div class="relative z-10 w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#D49A99]/5 border border-[#D49A99]/40 flex items-center justify-center shrink-0 shadow-[inset_0_0_40px_rgba(212,154,153,0.2)] group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 rounded-full border border-[#D49A99]/20 animate-ping opacity-30" style="animation-duration: 3s;"></div>
          <div class="flex items-end justify-center gap-2.5 w-20 h-16">
            <div class="w-2.5 bg-gradient-to-t from-[#8C6070] to-[#D49A99] rounded-full animate-wave shadow-[0_0_10px_rgba(212,154,153,0.8)]" style="height: 50%"></div>
            <div class="w-2.5 bg-gradient-to-t from-[#8C6070] to-[#D49A99] rounded-full animate-wave shadow-[0_0_10px_rgba(212,154,153,0.8)]" style="height: 100%; animation-delay: 0.2s"></div>
            <div class="w-2.5 bg-gradient-to-t from-[#8C6070] to-[#D49A99] rounded-full animate-wave shadow-[0_0_10px_rgba(212,154,153,0.8)]" style="height: 70%; animation-delay: 0.4s"></div>
            <div class="w-2.5 bg-gradient-to-t from-[#8C6070] to-[#D49A99] rounded-full animate-wave shadow-[0_0_10px_rgba(212,154,153,0.8)]" style="height: 40%; animation-delay: 0.1s"></div>
            <div class="w-2.5 bg-gradient-to-t from-[#8C6070] to-[#D49A99] rounded-full animate-wave shadow-[0_0_10px_rgba(212,154,153,0.8)]" style="height: 80%; animation-delay: 0.3s"></div>
          </div>
        </div>

        <div class="relative z-10 text-center md:text-left flex-1 space-y-6">
          <div class="inline-flex items-center gap-2.5 bg-[#D49A99]/20 px-4 py-1.5 rounded-full border border-[#D49A99]/40 shadow-[0_0_15px_rgba(212,154,153,0.2)]">
            <span class="w-2 h-2 rounded-full bg-[#D49A99] animate-pulse"></span>
            <p class="text-[10px] md:text-xs text-[#F7F2EB] font-bold tracking-[0.2em] uppercase">Private Frequency Generated</p>
          </div>
          <h4 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F7F2EB] via-[#D49A99] to-[#8C6070] tracking-tighter drop-shadow-xl">
            {{ calculatedFrequency.hz }}
          </h4>
          <p class="text-[#E8DCC4] text-base md:text-lg font-light leading-relaxed break-keep pr-2">
            <span v-html="calculatedFrequency.reasoning"></span>
          </p>
        </div>
      </div>
    </section>

    <section v-if="currentInterestData?.prescription" class="space-y-12 px-2">
      <div class="text-center space-y-3">
        <h3 class="text-sm md:text-base font-medium text-[#8C6070] tracking-[0.3em] uppercase">개운을 극대화하는 일상 처방</h3>
        <p class="text-[#B5A598] text-xs md:text-sm font-light">개운 효과를 높이기 위해 아래의 기운을 곁에 두십시오.</p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="item in subPrescriptions" :key="item.label" class="bg-[#120D1A] py-10 px-6 rounded-[2rem] border border-[#2A1F2D] flex flex-col items-center text-center gap-6 hover:border-[#D49A99]/50 transition-all duration-300 hover:-translate-y-2 group shadow-lg">
          <div v-if="item.type === 'color'" class="w-16 h-16 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.8)] border-2 border-white/20" :style="{ backgroundColor: item.value }"></div>
          <div v-else class="w-16 h-16 rounded-full bg-gradient-to-br from-[#2A1F2D] to-[#120D1A] shadow-inner border border-white/5 flex items-center justify-center text-2xl font-light text-[#D49A99] group-hover:scale-110 transition-transform duration-300">
            {{ item.value }}
          </div>
          <div>
            <p class="text-[10px] text-[#8C6070] font-bold tracking-widest uppercase mb-2">{{ item.label }}</p>
            <h4 class="text-[#F7F2EB] font-light text-base">{{ item.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <div class="w-px h-20 bg-gradient-to-b from-transparent via-[#D49A99]/30 to-transparent mx-auto"></div>

    <section v-if="Object.keys(currentInterestData?.sub_solutions || {}).length > 0" class="bg-[#120D1A] rounded-[3.5rem] p-10 md:p-14 border border-[#2A1F2D] shadow-2xl">
      <h3 class="font-light text-[#D49A99] text-center text-xl md:text-2xl mb-12">마지막으로 전하는 {{ formData.mainInterest }} 조언</h3>
      <div class="space-y-6">
        <div v-for="(solution, key) in currentInterestData.sub_solutions" :key="key" 
             class="p-8 rounded-[2.5rem] transition-all duration-500 border"
             :class="isHighlighted(key) ? 'bg-[#38232F]/60 border-[#D49A99]/50 shadow-lg scale-[1.02]' : 'bg-[#0E0A14] border-[#2A1F2D] hover:border-[#D49A99]/40 opacity-70 hover:opacity-100'">
          <div class="flex items-center gap-3 mb-4">
            <span v-if="isHighlighted(key)" class="w-2 h-2 rounded-full bg-[#D49A99] animate-pulse"></span>
            <span class="block text-[#8C6070] text-[11px] md:text-xs font-bold tracking-widest uppercase">{{ key }}</span>
          </div>
          <p class="text-base md:text-lg text-[#E8DCC4] font-light leading-relaxed break-keep">{{ solution }}</p>
        </div>
      </div>
    </section>

    <div class="mt-32 pt-24 pb-20 border-t border-[#2A1F2D] text-center space-y-14 relative">
      <div v-if="!isWtpConfirmed" class="space-y-12 animate-fade-in max-w-2xl mx-auto px-4">
        
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D49A99]/10 via-transparent to-transparent pointer-events-none animate-pulse-slow z-0"></div>
        
        <div class="space-y-6 relative z-10">
          <h3 class="text-3xl md:text-[2.75rem] font-bold text-[#F7F2EB] leading-[1.3] tracking-tight">
            {{ formData.name }}님만을 위해 완성된<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#D49A99] to-[#F7F2EB]">사주 분석 리포트 +<br> 개운 주파수</span>
          </h3>
          <p class="text-[#B5A598] text-base md:text-lg font-light leading-relaxed break-keep px-4">
            모든 분석이 끝났습니다. 이제 방금 도출된 <strong class="text-white">{{ calculatedFrequency.hz }}</strong> 나에게 딱 맞는 주파수로 기운의 혼선을 정리하세요.
          </p>
        </div>
        
      <div class="relative group px-2 sm:px-4 z-10">
          <div class="absolute -inset-2 bg-gradient-to-r from-[#D49A99] via-[#F7F2EB] to-[#D49A99] rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 group-hover:blur-3xl transition duration-700 animate-gradient-x"></div>
          
          <button @click="isWtpConfirmed = true" class="relative w-full py-6 md:py-8 px-2 bg-gradient-to-r from-[#F7F2EB] via-[#E8DCC4] to-[#D49A99] text-[#120D1A] font-black rounded-[1.5rem] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 sm:gap-4 md:gap-5 overflow-hidden">
            <div class="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 animate-shine"></div>
            <span class="text-[15px] sm:text-lg md:text-2xl whitespace-nowrap tracking-tight">평생 소장 고해상도 주파수 받기 (₩2,900)</span>
            <span class="text-xl sm:text-2xl md:text-3xl animate-bounce-x shrink-0">→</span>
          </button>
        </div>
        
        <p class="text-[#8C6070] text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium relative z-10">
          *더 디테일한 분석결과와 맞춤형 고유 주파수를 이메일로 보내드립니니다.
        </p>
      </div>

      <div v-else class="animate-fade-in max-w-xl mx-auto px-4 relative z-10">
        <div class="p-8 md:p-12 bg-[#120D1A] rounded-[3rem] border-2 border-[#D49A99] text-left relative overflow-hidden shadow-[0_0_80px_rgba(212,154,153,0.2)]">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#D49A99]/15 rounded-full blur-3xl"></div>
          
          <h4 class="text-[#D49A99] font-bold text-2xl md:text-3xl mb-4 tracking-tight">사전 예약하고 무료 샘플을 받으세요.</h4>
          <p class="text-[#B5A598] text-sm md:text-base font-light leading-relaxed mb-8 break-keep">
            현재 기연당은 서비스 준비 중입니다. <strong class="text-[#E8DCC4]">아래 이메일을 남겨주시면 3분 샘플 주파수를 무료로 발송</strong>해 드립니다.
          </p>
          
          <div class="space-y-6 relative z-10">
            <input v-model="email" type="email" placeholder="자주 쓰시는 이메일을 남겨주세요" class="w-full bg-[#0E0A14] border-2 border-[#2A1F2D] rounded-2xl p-5 md:p-6 text-[#F7F2EB] font-light text-base focus:border-[#D49A99] outline-none transition-all placeholder-[#4A3B4E]" />
            
            <label class="flex items-start gap-3 cursor-pointer group px-2">
              <div class="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-[#2A1F2D] bg-[#0E0A14] transition-all group-hover:border-[#D49A99]/50 shrink-0"
                   :class="{ 'bg-gradient-to-br from-[#D49A99] to-[#8C6070] border-[#D49A99]': agreeTerms }">
                <svg v-if="agreeTerms" class="w-3.5 h-3.5 text-[#120D1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <input type="checkbox" v-model="agreeTerms" class="hidden" />
              <span class="text-[#B5A598] text-xs md:text-sm font-light leading-snug">
                사전예약 및 맞춤 맞춤형 고유 주파수 발송을 위한 <NuxtLink to="/terms" target="_blank" class="text-[#D49A99] font-medium underline underline-offset-4 decoration-[#D49A99]/40 hover:decoration-[#D49A99] hover:text-[#F7F2EB] transition-colors">개인정보 수집 및 제3자 제공</NuxtLink>에 동의합니다.
              </span>
            </label>

            <button 
              @click="submitLead" 
              :disabled="!email.includes('@') || !agreeTerms || isSubmitting" 
              class="w-full h-18 md:h-20 bg-gradient-to-r from-[#F7F2EB] to-[#D49A99] text-[#120D1A] text-lg font-black rounded-2xl disabled:opacity-20 disabled:cursor-not-allowed transition-all hover:shadow-[0_15px_40px_rgba(212,154,153,0.3)] active:scale-95 flex justify-center items-center"
            >
              {{ isSubmitting ? '주파수 만드는 중...' : '이메일로 맞춤형 주파수 샘플 받기' }}
            </button>
          </div>
        </div>
      </div>

      <div class="pt-8 relative z-10 flex justify-center">
        <button @click="shareLink" class="inline-flex items-center gap-3 text-[#D49A99] text-base md:text-lg font-medium hover:text-[#F7F2EB] transition-all group border border-transparent hover:border-[#D49A99]/30 bg-[#D49A99]/5 hover:bg-[#D49A99]/10 px-8 py-4 rounded-full shadow-sm hover:shadow-[0_0_15px_rgba(212,154,153,0.1)]">
          <svg class="w-6 h-6 opacity-80 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          기연당 공유하기
        </button>
      </div>
      </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  result: { type: Object, required: true },
  formData: { type: Object, required: true }
})
const isSubmitting = ref(false)
const isWtpConfirmed = ref(false)
const email = ref('')
const agreeTerms = ref(false)

// 🔥 어떤 형태의 데이터(JSON / Supabase Flatten)가 들어와도 완벽하게 찾아내는 초강력 스캐너
const currentInterestData = computed(() => {
  if (!props.result) return {};
  
  const interest = props.formData?.mainInterest || '연애운';
  const getVal = (key) => props.result[`tuning_by_interest_${interest}_${key}`];
  
  const subSolutions = {};

  // 1. Supabase 컬럼명이 훼손되었을 경우를 대비한 정규식 스캐너 (특수문자, 공백 완전 무시)
  Object.keys(props.result).forEach(k => {
    // 키값에서 특수문자, 공백, 괄호 전부 제거한 순수 한글/영문만 추출
    const normalizedKey = String(k).replace(/[^a-zA-Z가-힣]/g, '');
    const normalizedInterest = String(interest).replace(/[^a-zA-Z가-힣]/g, '');

    // 'subsolutions'와 '연애운(관심사)'가 순수 텍스트에 포함되어 있다면 무조건 캐치!
    if (normalizedKey.includes('subsolutions') && normalizedKey.includes(normalizedInterest)) {
      let val = props.result[k];

      if (val && String(val).trim() !== '') {
        let label = '맞춤 조언';
        
        // 어떤 조언인지 파악하여 예쁜 UI 라벨로 강제 복구
        if (normalizedKey.includes('끊어진')) label = '끊어진 인연과의 재회';
        else if (normalizedKey.includes('도화') || normalizedKey.includes('새로운')) label = '새로운 인연(도화) 끌어당김';
        else if (normalizedKey.includes('부부') || normalizedKey.includes('현재')) label = '현재 연인/부부 관계 개선';
        else if (normalizedKey.includes('매출') || normalizedKey.includes('사업')) label = '사업 매출 및 금전운 상승';
        else if (normalizedKey.includes('자산')) label = '안정적인 자산 축적';
        else if (normalizedKey.includes('투자') || normalizedKey.includes('횡재')) label = '투자 수익 및 횡재운';
        else if (normalizedKey.includes('취업') || normalizedKey.includes('이직')) label = '원하는 직장 취업 및 이직';
        else if (normalizedKey.includes('시험') || normalizedKey.includes('자격증')) label = '중요한 시험 및 자격증 합격';
        else if (normalizedKey.includes('승진') || normalizedKey.includes('명예')) label = '직장 내 승진 및 명예';

        subSolutions[label] = val;
      }
    }
  });

  // 2. 만약 위 로직으로도 못 찾았다면, CSV 원본 헤더명으로 하드코딩 다이렉트 검색 (최후의 보루)
  if (Object.keys(subSolutions).length === 0) {
    if (interest === '연애운') {
      if (props.result['tuning_by_interest_연애운_sub_solutions_끊어진 인연과의 재회']) subSolutions['끊어진 인연과의 재회'] = props.result['tuning_by_interest_연애운_sub_solutions_끊어진 인연과의 재회'];
      if (props.result['tuning_by_interest_연애운_sub_solutions_새로운 인연(도화) 끌어당김']) subSolutions['새로운 인연(도화) 끌어당김'] = props.result['tuning_by_interest_연애운_sub_solutions_새로운 인연(도화) 끌어당김'];
      if (props.result['tuning_by_interest_연애운_sub_solutions_현재 연인/부부 관계 개선']) subSolutions['현재 연인/부부 관계 개선'] = props.result['tuning_by_interest_연애운_sub_solutions_현재 연인/부부 관계 개선'];
    } else if (interest === '재물운') {
      if (props.result['tuning_by_interest_재물운_sub_solutions_사업 매출 및 금전운 상승']) subSolutions['사업 매출 및 금전운 상승'] = props.result['tuning_by_interest_재물운_sub_solutions_사업 매출 및 금전운 상승'];
      if (props.result['tuning_by_interest_재물운_sub_solutions_안정적인 자산 축적']) subSolutions['안정적인 자산 축적'] = props.result['tuning_by_interest_재물운_sub_solutions_안정적인 자산 축적'];
      if (props.result['tuning_by_interest_재물운_sub_solutions_투자 수익 및 횡재운']) subSolutions['투자 수익 및 횡재운'] = props.result['tuning_by_interest_재물운_sub_solutions_투자 수익 및 횡재운'];
    } else if (interest === '직업운') {
      if (props.result['tuning_by_interest_직업운_sub_solutions_원하는 직장 취업 및 이직']) subSolutions['원하는 직장 취업 및 이직'] = props.result['tuning_by_interest_직업운_sub_solutions_원하는 직장 취업 및 이직'];
      if (props.result['tuning_by_interest_직업운_sub_solutions_중요한 시험 및 자격증 합격']) subSolutions['중요한 시험 및 자격증 합격'] = props.result['tuning_by_interest_직업운_sub_solutions_중요한 시험 및 자격증 합격'];
      if (props.result['tuning_by_interest_직업운_sub_solutions_직장 내 승진 및 명예']) subSolutions['직장 내 승진 및 명예'] = props.result['tuning_by_interest_직업운_sub_solutions_직장 내 승진 및 명예'];
    }
  }

  // 3. 그럼에도 빈 값이라면 화면이 날아가지 않도록 강제 디버깅 메시지 출력
  if (Object.keys(subSolutions).length === 0) {
    subSolutions['데이터 베이스 컬럼 매칭 오류'] = "Supabase DB에 연애운(sub_solutions) 컬럼 데이터가 비어있거나, 헤더 이름이 완전히 삭제되었습니다. DB를 확인해주세요.";
  }

  return {
    deficiency: {
      weakness: getVal('deficiency_weakness'),
      fatal_flaw: getVal('deficiency_fatal_flaw')
    },
    prescription: {
      color: {
        name: getVal('prescription_color_name'),
        hex_code: getVal('prescription_color_hex_code')
      },
      number: {
        lucky_numbers: getVal('prescription_number_lucky_numbers')
      },
      power_item: {
        name: getVal('prescription_power_item_name'),
        material_type: getVal('prescription_power_item_material_type')
      },
      space: {
        favorable: getVal('prescription_space_favorable')
      }
    },
    sub_solutions: subSolutions
  };
});

// 유저가 선택한 세부 상황에 맞춰 카드를 빛나게 강조해주는 하이라이트 로직
const isHighlighted = (label) => {
  if (!props.formData?.subInterest || !label) return false;
  const keywords = String(label).split(' ').filter(w => w.length > 1);
  return keywords.some(word => String(props.formData.subInterest).includes(word));
};

const calculatedFrequency = computed(() => {
  try {
    const ilju = props.result?.ilju || '갑자';
    const interest = props.formData?.mainInterest || '연애운';

    const stems = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
    const branches = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];

    let stemChar = ilju.charAt(0);
    if (!stems.includes(stemChar)) stemChar = '갑';
    let branchChar = ilju.charAt(1);
    if (!branches.includes(branchChar)) branchChar = '자';

    const stemIndex = stems.indexOf(stemChar);

    const baseHzMap = {
      '연애운': { base: 639, name: '하트 차크라 (무의식적 인력 활성화)' },
      '재물운': { base: 852, name: '제3의 눈 (직관력과 풍요)' },
      '직업운': { base: 741, name: '넥 차크라 (명료한 판단과 성취)' }
    };
    const target = baseHzMap[interest] || baseHzMap['연애운'];

    const stemOffset = (stemIndex - 4.5) * 1.8; 
    const masterHz = (target.base + stemOffset).toFixed(1);

    let subHz = 432;
    let subDesc = '';
    
    if (['인', '묘'].includes(branchChar)) {
      subHz = 396;
      subDesc = '목(木)의 불안함을 따뜻하게 감싸 안는 396Hz';
    } else if (['사', '오'].includes(branchChar)) {
      subHz = 528;
      subDesc = '화(火)의 섣부름을 다독이고 기적을 여는 528Hz';
    } else if (['신', '유'].includes(branchChar)) {
      subHz = 417;
      subDesc = '금(金)의 뾰족함을 녹이고 유연함을 주는 417Hz';
    } else if (['해', '자'].includes(branchChar)) {
      subHz = 174;
      subDesc = '수(水)의 깊은 우울감을 걷어내고 위로하는 174Hz';
    } else {
      subHz = 432;
      subDesc = '토(土)의 기운을 우주 자연의 안정감으로 동기화하는 432Hz';
    }

    return {
      hz: `${masterHz}Hz + ${subHz}Hz`,
      reasoning: `명식 분석 결과, ${props.formData?.name || '고객'}님의 사주에는 현재 기운의 불균형이 존재합니다. 이 결핍이 자꾸만 인연을 밀어내는 보이지 않는 원인이었죠.<br><br>이를 부드럽게 교정하기 위해, 관계 회복을 돕는 <strong class="text-[#F7F2EB]">${target.name} 대역(${masterHz}Hz)</strong>을 메인으로 설정했습니다. 여기에 당신의 상처를 다독여 줄 <strong class="text-[#F7F2EB]">[${subDesc}]</strong> 파동을 입체적으로 결합하여, 듣는 것만으로도 무의식이 치유되는 바이노럴 비트를 완성했습니다.`
    };
  } catch (e) {
    return { 
      hz: "639.0Hz + 432Hz", 
      reasoning: '"하트 차크라 대역을 기준으로 조율된 639Hz를 메인으로 설정하고, 운에 깊은 안정감을 만드는 <strong class="text-[#F7F2EB]">[432Hz]</strong> 진동을 결합하여 개운을 돕습니다."'
    };
  }
});

const getItemIcon = (type) => {
  if (!type) return '✨';
  const t = String(type).toLowerCase();
  if (t.includes('wood')) return '🥀';
  if (t.includes('stone') || t.includes('토')) return '🏺';
  if (t.includes('metal')) return '🗝️';
  if (t.includes('water')) return '💧';
  if (t.includes('fire')) return '🕯️';
  return '✨';
}

const subPrescriptions = computed(() => {
  const p = currentInterestData.value?.prescription;
  if (!p) return [];
  return [
    { label: 'Color', name: p.color?.name || '로즈 골드', value: p.color?.hex_code || '#D49A99', type: 'color' },
    { label: 'Number', name: '운의 숫자', value: p.number?.lucky_numbers || '3, 8', type: 'text' },
    { label: 'Object', name: p.power_item?.name || '나무 소재', value: getItemIcon(p.power_item?.material_type), type: 'text' },
    { label: 'Space', name: p.space?.favorable || '따뜻한 공간', value: '🚪', type: 'text' }
  ];
});

const submitLead = async () => {
  if (!email.value || !agreeTerms.value) return;

  isSubmitting.value = true;
  
  try {
    const year = props.formData?.birthYear || '';
    const month = props.formData?.birthMonth || '';
    const day = props.formData?.birthDay || '';
    const birthDate = year && month && day ? `${year}-${month}-${day}` : '';

    const isUnknown = props.formData?.isTimeUnknown;
    const ampm = props.formData?.ampm || '';
    const hour = props.formData?.hour || '';
    const minute = props.formData?.minute || '';
    const birthTime = isUnknown ? '모름' : (hour ? `${ampm} ${hour}:${minute}` : '');

    await $fetch('/api/prescribe', {
      method: 'POST',
      body: {
        email: email.value, 
        name: props.formData?.name || '무명씨',
        focus: props.formData?.mainInterest || '일반',
        resultData: props.result,
        birthDate: birthDate,
        birthTime: birthTime
      }
    });

    alert("이메일을 발송해드렸습니다. 3분 뒤 메일함을 확인해 주세요.");
    
  } catch (err) {
    console.error("메일 발송 실패 상세:", err);
    alert("발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
  } finally {
    isSubmitting.value = false;
  }
}

// 🌟 바이럴을 위한 공유하기 로직 (모바일/데스크톱 모두 지원)
const shareLink = async () => {
  const shareData = {
    title: '기연당(GIYEONDANG) - 무료 1:1 사주 맞춤 처방',
    text: '어긋난 인연의 기운을 맞춰줄 당신만의 주파수를 찾아보세요.',
    url: window.location.origin // 메인 페이지(루트 도메인)로 연결
  };

  // 모바일 환경 (Web Share API 지원 시 카톡, 인스타 등 네이티브 창 띄움)
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('공유 취소 또는 에러', err);
    }
  } 
  // 데스크톱 환경 (Web Share API 미지원 시 클립보드에 링크 복사)
  else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      alert('기연당 링크가 복사되었습니다. 친구에게 전달해보세요!');
    } catch (err) {
      alert('링크 복사에 실패했습니다. 주소창의 링크를 복사해주세요.');
    }
  }
}

</script>

<style scoped>
.animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in { animation: fadeIn 0.8s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.animate-pulse-slow { animation: pulse 4s ease-in-out infinite alternate; }
@keyframes pulse { 0% { opacity: 0.4; } 100% { opacity: 0.8; transform: scale(1.05); } }
.animate-wave { animation: wave 1.5s ease-in-out infinite alternate; }
@keyframes wave { 0% { height: 20%; opacity: 0.3; } 100% { height: 100%; opacity: 1; } }
.animate-gradient-x { background-size: 200% 200%; animation: gradientX 3s ease infinite; }
@keyframes gradientX { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
.animate-shine { animation: shine 3s infinite; }
@keyframes shine { 0% { left: -100%; } 20% { left: 100%; } 100% { left: 100%; } }
.animate-bounce-x { animation: bounceX 1.5s infinite; }
@keyframes bounceX { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
</style>