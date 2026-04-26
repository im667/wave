<template>
  <div class="min-h-screen bg-[#0E0A14] text-[#E8DCC4] font-sans selection:bg-[#D49A99]/30 overflow-x-hidden relative pb-20 md:pb-0">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#4A2535]/20 rounded-full blur-[150px] animate-breathe"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#241C35]/30 rounded-full blur-[120px] animate-breathe-slow"></div>
    </div>

    <main class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-14 md:pt-20 pb-24 flex flex-col items-center">
      
      <div v-if="phase === 1" class="w-full">
        
        <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 animate-fade-in-up">
          <div class="text-center md:text-left space-y-6 md:space-y-8 w-full">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D49A99]/30 bg-[#D49A99]/5 rounded-full text-[10px] md:text-xs font-light text-[#D49A99] tracking-widest uppercase">
              <span class="w-1.5 h-1.5 rounded-full bg-[#D49A99]"></span> 명리학의 공명을 찾는 서비스 : 기연당
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F2EB] leading-[1.35] break-keep">
              간절히 듣던 유튜브 주파수,<br>오히려 인연이 더 멀어지는<br/>
              <span class="text-[#D49A99] font-light italic mt-2 block text-2xl md:text-4xl">느낌이 들진 않으셨나요?</span>
            </h1>
            <p class="text-[#B5A598] text-sm md:text-base font-light leading-relaxed break-keep">
              사주에 '물(水)'이 넘치는 사람이 물의 파동을 들으면, 인연은 더 떠내려가기 마련입니다. 저희 팀은 이 안타까운 사실을 해결하고 싶었습니다.<br class="hidden md:block"><br class="hidden md:block">
              역술인의 사주 분석과 뇌파 연구진의 사운드 테라피(FFR)를 결합하여, 당신의 어긋난 기운을 정확히 메워줄 단 하나의 파동을 찾아드립니다.
            </p>
            <button @click="scrollToForm" class="hidden md:flex mt-4 px-8 py-4 bg-gradient-to-r from-[#F7F2EB] to-[#D49A99] text-[#120D1A] font-bold rounded-2xl shadow-[0_10px_40px_rgba(212,154,153,0.3)] transition-all hover:scale-[1.02] active:scale-95 items-center gap-3 tracking-wide">
              내 운명의 진짜 주파수 찾기 <span class="text-xl font-light">→</span>
            </button>
          </div>

          <div class="relative mx-auto w-[240px] md:w-[280px] h-[480px] md:h-[560px] bg-[#0A0710] border-[4px] border-[#2A1F2D] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center pt-8 pb-6 px-4">
            <div class="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/80 rounded-full z-20"></div>
            <div class="w-full h-full flex flex-col items-center justify-center relative">
              <div class="text-[#D49A99]/70 text-[9px] tracking-[0.3em] uppercase mb-8 font-light">1:1 Frequency Healing</div>
              <div class="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mb-8">
                <div class="absolute inset-0 bg-[#D49A99]/5 rounded-full blur-2xl animate-pulse"></div>
                <div class="w-full h-full rounded-full border border-[#D49A99]/20 flex items-center justify-center relative z-10">
                  <div class="w-3/4 h-3/4 rounded-full border border-[#D49A99]/40 flex items-center justify-center">
                    <div class="w-1/2 h-1/2 bg-gradient-to-tr from-[#D49A99] to-[#8C6070] rounded-full blur-sm animate-breathe"></div>
                  </div>
                </div>
              </div>
              <div class="text-center w-full z-10">
                <h4 class="text-[#F7F2EB] font-medium text-lg mb-1 tracking-wide">마음의 파동을 맞추는 중</h4>
                <p class="text-[#B5A598] text-[10px] md:text-xs mb-8 font-light italic">Re-aligning your energy...</p>
              </div>
            </div>
          </div>
        </div>

        <button @click="scrollToForm" class="md:hidden w-full mb-16 px-8 py-4 bg-gradient-to-r from-[#F7F2EB] to-[#D49A99] text-[#120D1A] font-bold rounded-2xl shadow-[0_10px_40px_rgba(212,154,153,0.3)] active:scale-95 flex justify-center items-center tracking-wide">
          내 운명의 진짜 주파수 찾기
        </button>

        <div class="max-w-4xl mx-auto mb-20 space-y-12 bg-[#120D1A]/50 border border-[#2A1F2D] rounded-[3rem] p-8 md:p-14 shadow-xl">
          <div class="text-center space-y-4">
            <h3 class="text-2xl md:text-3xl font-light text-[#F7F2EB] tracking-tight">
              막연한 위로가 아닌, <strong class="text-[#D49A99] font-medium">검증된 과학과 데이터</strong>
            </h3>
            <p class="text-[#B5A598] text-sm md:text-base font-light break-keep max-w-2xl mx-auto leading-relaxed">
              기연당은 수만 건의 사주 데이터와 뇌파 동조(FFR) 논문을 바탕으로, 당신의 무의식에 직접 닿는 실질적인 해결책을 제시합니다.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-4 text-center">
              <div class="w-14 h-14 mx-auto rounded-full bg-[#D49A99]/10 flex items-center justify-center text-2xl border border-[#D49A99]/30">📜</div>
              <h4 class="text-[#D49A99] font-medium text-sm md:text-base">오행 데이터 진단</h4>
              <p class="text-[#B5A598] text-xs md:text-sm font-light leading-relaxed px-2">생년월일에 담긴 60갑자를 분석하여, 당신의 관계를 방해하고 있는 기운을 짚어냅니다.</p>
            </div>
            <div class="space-y-4 text-center">
              <div class="w-14 h-14 mx-auto rounded-full bg-[#D49A99]/10 flex items-center justify-center text-2xl border border-[#D49A99]/30">🧠</div>
              <h4 class="text-[#D49A99] font-medium text-sm md:text-base">임상 심리 사운드</h4>
              <p class="text-[#B5A598] text-xs md:text-sm font-light leading-relaxed px-2">스트레스 호르몬을 낮추고 심리적 안정감을 유도하는 바이노럴 비트 원리를 당신의 사주에 맞게 적용합니다.</p>
            </div>
            <div class="space-y-4 text-center">
              <div class="w-14 h-14 mx-auto rounded-full bg-[#D49A99]/10 flex items-center justify-center text-2xl border border-[#D49A99]/30">🎧</div>
              <h4 class="text-[#D49A99] font-medium text-sm md:text-base">나만의 주파수 매칭</h4>
              <p class="text-[#B5A598] text-xs md:text-sm font-light leading-relaxed px-2">단 0.1Hz 단위로 세밀하게 조율된 당신만의 파동을 생성해, 꽉 막힌 기운을 뚫을 진동을 만듭니다.</p>
            </div>
          </div>
        </div>

        <div class="w-full max-w-2xl mx-auto z-20 group scroll-mt-24" id="form-section">
          <div class="bg-[#120D1A]/90 border border-[#2A1F2D] rounded-[2.5rem] p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-2xl">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-light text-[#F7F2EB] mb-3 tracking-tight">조심스럽게, 당신의 이야기를 들려주세요.</h3>
              <p class="text-[#D49A99] text-xs md:text-sm font-light">가장 정확한 진단과 처방을 위해 아래 정보가 필요합니다.</p>
            </div>
            
            <div class="space-y-12">
              <div class="space-y-5">
                <label class="block text-[10px] font-bold tracking-[0.2em] text-[#8C6070] uppercase">1. 지금 가장 아프고 간절한 부분</label>
                <div class="grid grid-cols-3 gap-3">
                  <button v-for="cat in goalCategories" :key="cat.id" @click="selectMainCategory(cat.id)"
                    :class="['relative p-4 rounded-2xl border transition-all duration-500 text-xs md:text-sm flex flex-col items-center justify-center gap-2 font-medium',
                      formData.mainInterest === cat.id ? 'bg-gradient-to-br from-[#38232F] to-[#1A121F] border-[#D49A99] text-[#F7F2EB] shadow-[0_0_20px_rgba(212,154,153,0.2)]' : 'bg-[#0E0A14] border-[#2A1F2D] text-[#B5A598] hover:border-[#D49A99]/40'
                    ]">
                    <span v-if="cat.isHot" class="absolute -top-2.5 -right-2 bg-gradient-to-r from-[#D49A99] to-[#C07E81] text-[9px] px-2.5 py-0.5 rounded-full text-white shadow-lg z-20 tracking-wider">가장 많이 찾음</span>
                    <span class="text-2xl">{{ cat.icon }}</span>
                    {{ cat.label }}
                  </button>
                </div>

                <div v-if="formData.mainInterest" class="pt-4 animate-fade-in space-y-3">
                  <p class="text-[#8C6070] text-[10px] font-medium tracking-widest text-center">조금 더 구체적인 상황을 선택해 주시겠어요?</p>
                  <div class="flex flex-col gap-2">
                    <button v-for="sub in currentSubs" :key="sub.label" @click="formData.subInterest = sub.label"
                      :class="['w-full p-4 rounded-xl border text-sm font-light transition-all text-left px-5', 
                        formData.subInterest === sub.label ? 'bg-[#D49A99]/10 border-[#D49A99] text-[#F7F2EB]' : 'bg-[#0E0A14] border-[#2A1F2D] text-[#B5A598] hover:bg-[#1A121F]']">
                      <span v-if="formData.subInterest === sub.label" class="mr-2">✨</span>
                      {{ sub.label }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <label class="block text-[10px] font-bold tracking-[0.2em] text-[#8C6070] uppercase">2. 부르기 편한 이름 (가명도 좋습니다)</label>
                <input v-model="formData.name" type="text" placeholder="이름 입력" class="w-full bg-transparent border-b border-[#2A1F2D] px-2 py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] transition-colors text-sm font-light placeholder-[#4A3B4E]" />
              </div>

              <div class="space-y-2">
                <label class="block text-[10px] font-bold tracking-[0.2em] text-[#8C6070] uppercase">3. 생년월일 (양력 기준)</label>
                <div class="grid grid-cols-3 gap-4">
                  <input v-model="formData.birthYear" type="number" placeholder="YYYY" class="bg-transparent border-b border-[#2A1F2D] text-center py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] text-sm font-light placeholder-[#4A3B4E]" />
                  <input v-model="formData.birthMonth" type="number" placeholder="MM" class="bg-transparent border-b border-[#2A1F2D] text-center py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] text-sm font-light placeholder-[#4A3B4E]" />
                  <input v-model="formData.birthDay" type="number" placeholder="DD" class="bg-transparent border-b border-[#2A1F2D] text-center py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] text-sm font-light placeholder-[#4A3B4E]" />
                </div>
              </div>

              <div class="space-y-2">
                <div class="flex justify-between items-center pr-2">
                  <label class="block text-[10px] font-bold tracking-[0.2em] text-[#8C6070] uppercase">4. 태어난 시간</label>
                  <label class="flex items-center gap-2 text-[10px] text-[#B5A598] cursor-pointer">
                    <input type="checkbox" v-model="formData.isTimeUnknown" class="w-3.5 h-3.5 rounded-sm border-[#2A1F2D] accent-[#D49A99] bg-[#0E0A14]" />
                    <span class="font-light">시간을 잘 모릅니다 (표준 파동으로 대체)</span>
                  </label>
                </div>
                <div class="grid grid-cols-3 gap-4 transition-opacity duration-300" :class="{ 'opacity-20 pointer-events-none': formData.isTimeUnknown }">
                  <select v-model="formData.ampm" class="bg-transparent border-b border-[#2A1F2D] text-center py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] text-sm font-light appearance-none">
                    <option value="AM">오전</option><option value="PM">오후</option>
                  </select>
                  <input v-model="formData.hour" type="number" placeholder="HH" class="bg-transparent border-b border-[#2A1F2D] text-center py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] text-sm font-light placeholder-[#4A3B4E]" />
                  <input v-model="formData.minute" type="number" placeholder="MM" class="bg-transparent border-b border-[#2A1F2D] text-center py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] text-sm font-light placeholder-[#4A3B4E]" />
                </div>
              </div>

              <button @click="startAnalysis" :disabled="!isFormValid" class="w-full h-18 md:h-20 mt-6 bg-gradient-to-r from-[#F7F2EB] via-[#E8DCC4] to-[#D49A99] disabled:opacity-20 text-[#120D1A] font-black rounded-[1.5rem] shadow-[0_15px_40px_rgba(212,154,153,0.2)] active:scale-95 transition-all text-lg tracking-wide overflow-hidden relative group">
                <div class="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:animate-shine"></div>
                <span>나만의 주파수 진단 시작하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="phase === 1.5" class="w-full h-[60vh] flex flex-col items-center justify-center space-y-12 animate-fade-in">
        <div class="relative w-48 h-48 flex items-center justify-center">
          <div class="absolute inset-0 border-[1px] border-[#D49A99]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div class="absolute inset-4 border-[1px] border-dashed border-[#D49A99]/40 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
          <div class="absolute inset-10 border-[2px] border-[#D49A99]/60 rounded-full shadow-[0_0_30px_rgba(212,154,153,0.3)] animate-pulse-slow"></div>
          <div class="text-4xl opacity-80">🌌</div>
        </div>
        
        <div class="text-center space-y-4">
          <h3 class="text-2xl font-light text-[#F7F2EB] tracking-tight">전문가가 당신의 명식을 짚어보는 중입니다</h3>
          <div class="h-6">
            <p class="text-[#D49A99] text-sm md:text-base font-light transition-all duration-300 animate-pulse">
              {{ loadingSteps[currentLoadingStep] }}
            </p>
          </div>
        </div>

        <div class="w-64 h-1 bg-[#2A1F2D] rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-[#8C6070] to-[#D49A99] transition-all duration-[800ms] ease-out" :style="{ width: `${((currentLoadingStep + 1) / loadingSteps.length) * 100}%` }"></div>
        </div>
      </div>

      <GiyeondangResult 
        v-if="phase === 2 && result" 
        :result="result" 
        :formData="formData" 
      />
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const phase = ref(1) 
const loading = ref(false)
const result = ref(null) 

const loadingSteps = ref([
  '입력하신 생년월일로 60갑자 명식을 세우고 있습니다...',
  '역술인이 사주 원국의 오행 불균형을 진단합니다...',
  '에너지의 틈을 메울 뇌파 동조(FFR) 알고리즘을 가동합니다...',
  '불안을 잠재울 바이노럴 비트를 수식으로 매칭 중...',
  '마침내, 당신만의 고유한 파동 연산이 완료되었습니다.'
]);
const currentLoadingStep = ref(0);

const goalCategories = [
  { id: '연애운', label: '연애/재회', icon: '🥀', isHot: true, subs: [{ label: '이미 끊어진 인연과의 간절한 재회' }, { label: '내게 꼭 맞는 새로운 인연과의 만남' }, { label: '멀어진 현재 연인과의 잦은 다툼 해결' }] },
  { id: '재물운', label: '재물/사업', icon: '🕯️', subs: [{ label: '사업 매출 상승 및 금전운 트임' }, { label: '투자 수익 및 생각지 못한 횡재운' }] },
  { id: '직업운', label: '직업/학업', icon: '🖋️', subs: [{ label: '원하던 직장 취업 및 안정적인 이직' }, { label: '중요한 시험 및 자격증 무사 합격' }] }
]

const formData = reactive({
  name: '', mainInterest: '', subInterest: '', birthYear: '', birthMonth: '', birthDay: '',
  isTimeUnknown: true, ampm: 'AM', hour: '', minute: ''
})

const currentSubs = computed(() => goalCategories.find(c => c.id === formData.mainInterest)?.subs || [])
const selectMainCategory = (id) => { formData.mainInterest = id; formData.subInterest = ''; }

const isFormValid = computed(() => {
  return formData.name && formData.mainInterest && formData.subInterest && formData.birthYear;
})

const scrollToForm = () => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })

// 🔥 절대 멈추거나 튕기지 않는 초강력 분석 로직
const startAnalysis = async () => {
  if (!isFormValid.value) return;
  
  // 1. 상태 변경 (로딩 시작)
  loading.value = true;
  phase.value = 1.5; 
  currentLoadingStep.value = 0;
  
  // 2. 🔥 가장 핵심: Vue가 로딩 화면을 먼저 DOM에 그리도록 0.05초 강제 대기
  await new Promise(resolve => setTimeout(resolve, 50));
  
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 3. 로딩 텍스트 애니메이션 시작
  const loadingInterval = setInterval(() => {
    if (currentLoadingStep.value < loadingSteps.value.length - 1) {
      currentLoadingStep.value++;
    }
  }, 800);
  
  try {
    // 4. API 호출 시간 측정 시작
    const startTime = Date.now();
    
    // API 통신 (백엔드로 데이터 전송)
    const response = await $fetch('/api/analyze-viral', { method: 'POST', body: formData });
    
    // 5. 로딩창 심리적 유지 시간 계산 (최소 4초 보장)
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < 4000) {
      await new Promise(resolve => setTimeout(resolve, 4000 - elapsedTime));
    }

    clearInterval(loadingInterval);

    // 6. 결과 화면으로 완벽하게 전환
    if (response) {
      result.value = response.data || response;
      phase.value = 2; 
      
      // 전환 직후 스크롤을 맨 위로
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }

  } catch (error) {
    clearInterval(loadingInterval);
    console.error("❌ API 상세 에러:", error);
    
    const exactError = error.data?.statusMessage || error.message || '알 수 없는 서버 오류';
    alert(`🚨 [오류 발생]\n이유: ${exactError}\n\n입력하신 데이터를 확인하시거나 잠시 후 다시 시도해주세요.`);
    
    phase.value = 1; // 에러 시 다시 폼으로 복귀
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-breathe { animation: breathe 8s ease-in-out infinite alternate; }
.animate-breathe-slow { animation: breathe 12s ease-in-out infinite alternate; }
@keyframes breathe { 0% { opacity: 0.5; transform: scale(1); } 100% { opacity: 0.8; transform: scale(1.05); } }
.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.animate-pulse-slow { animation: pulse 3s infinite alternate; }
@keyframes pulse { 0% { opacity: 0.3; } 100% { opacity: 1; } }
.animate-shine { animation: shine 2.5s infinite; }
@keyframes shine { 0% { left: -100%; } 20% { left: 100%; } 100% { left: 100%; } }
</style>