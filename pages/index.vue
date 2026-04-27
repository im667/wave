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
              유튜브의 양산형 주파수,<br>효과 있었나요?<br/>
              <span class="text-[#D49A99] font-light italic mt-2 block text-2xl md:text-4xl">내 사주에 맞는 주파수를 찾아보세요.</span>
            </h1>
            <p class="text-[#B5A598] text-sm md:text-base font-light leading-relaxed break-keep">
              나와 맞지않는 주파수는 운의 흐름을 교란시킵니다. 사주에<br> 예를 들어 '물(水)'이 넘치는 사람에게 물의 주파수가 섞이면, 물길은 거세지고 운은 떠내려갑니다. <br class="hidden md:block"><br class="hidden md:block">
              역술인의 사주 분석과 뇌파 연구진의 사운드 테라피(FFR)를 결합하여, 당신의 어긋난 기운을 정확히 메워 개운 방법을 찾아드립니다.
            </p>
            <button @click="scrollToForm" class="hidden md:flex mt-4 px-8 py-4 bg-gradient-to-r from-[#F7F2EB] to-[#D49A99] text-[#120D1A] font-bold rounded-2xl shadow-[0_10px_40px_rgba(212,154,153,0.3)] transition-all hover:scale-[1.02] active:scale-95 items-center gap-3 tracking-wide">
              (무료)나에게 딱 맞는 주파수 찾기 <span class="text-xl font-light">→</span>
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
                <h4 class="text-[#F7F2EB] font-medium text-lg mb-1 tracking-wide">고유 주파수 맞추는 중</h4>
                <p class="text-[#B5A598] text-[10px] md:text-xs mb-8 font-light italic">Re-aligning your energy...</p>
              </div>
            </div>
          </div>
        </div>

        <button @click="scrollToForm" class="md:hidden w-full mb-16 px-8 py-5 bg-gradient-to-r from-[#F7F2EB] to-[#D49A99] text-[#120D1A] font-bold rounded-2xl shadow-[0_10px_40px_rgba(212,154,153,0.3)] active:scale-95 flex justify-center items-center tracking-wide">
          내 운명의 진짜 주파수 찾기
        </button>

        <div class="max-w-4xl mx-auto mb-20 space-y-12 bg-[#120D1A]/50 border border-[#2A1F2D] rounded-[3rem] p-8 md:p-14 shadow-xl">
          <div class="text-center space-y-4">
            <h3 class="text-2xl md:text-3xl font-light text-[#F7F2EB] tracking-tight">
              나에게 딱 맞는, <strong class="text-[#D49A99] font-medium">명리학에 맞춘 세타파</strong>
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
          <div class="bg-[#120D1A]/90 border border-[#2A1F2D] rounded-[2.5rem] p-6 sm:p-10 md:p-12 backdrop-blur-2xl shadow-2xl transition-all duration-500"
               :class="{ 'border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.1)]': showErrors && missingFields.length > 0 }">
            <div class="text-center mb-12">
              <h3 class="text-2xl md:text-3xl font-light text-[#F7F2EB] mb-3 tracking-tight">내 사주에 부족한 점, 좋은 것들을 찾아드려요.</h3>
              <p class="text-[#D49A99] text-xs md:text-sm font-light">정확한 사주 분석을 위해 아래 정보를 입력해 주세요.</p>
            </div>
            
            <div class="space-y-12">
              <div class="space-y-5" :class="{ 'p-4 rounded-3xl bg-red-500/5 border border-red-500/30': showErrors && missingFields.includes('interest') }">
                <label class="block text-[10px] font-bold tracking-[0.2em] text-[#8C6070] uppercase">1. 운세 선택</label>
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
                <input v-model="formData.name" type="text" placeholder="이름 입력" 
                  :class="['w-full bg-transparent border-b px-2 py-4 outline-none transition-colors text-sm font-light placeholder-[#4A3B4E]', 
                           showErrors && missingFields.includes('name') ? 'border-red-400/80 bg-red-400/5 text-red-200' : 'border-[#2A1F2D] focus:border-[#D49A99] text-[#F7F2EB]']" />
              </div>

              <div class="space-y-2">
                <label class="block text-[10px] font-bold tracking-[0.2em] text-[#8C6070] uppercase">3. 생년월일 (양력 기준)</label>
                <div class="grid grid-cols-3 gap-4">
                  <input v-model="formData.birthYear" @input="enforceLimits" type="text" inputmode="numeric" placeholder="YYYY" 
                    :class="['bg-transparent border-b text-center py-4 outline-none text-sm font-light placeholder-[#4A3B4E] transition-colors',
                             showErrors && missingFields.includes('birthYear') ? 'border-red-400/80 bg-red-400/5 text-red-200' : 'border-[#2A1F2D] focus:border-[#D49A99] text-[#F7F2EB]']" />
                  <input v-model="formData.birthMonth" @input="enforceLimits" type="text" inputmode="numeric" placeholder="MM" 
                    :class="['bg-transparent border-b text-center py-4 outline-none text-sm font-light placeholder-[#4A3B4E] transition-colors',
                             showErrors && missingFields.includes('birthMonth') ? 'border-red-400/80 bg-red-400/5 text-red-200' : 'border-[#2A1F2D] focus:border-[#D49A99] text-[#F7F2EB]']" />
                  <input v-model="formData.birthDay" @input="enforceLimits" type="text" inputmode="numeric" placeholder="DD" 
                    :class="['bg-transparent border-b text-center py-4 outline-none text-sm font-light placeholder-[#4A3B4E] transition-colors',
                             showErrors && missingFields.includes('birthDay') ? 'border-red-400/80 bg-red-400/5 text-red-200' : 'border-[#2A1F2D] focus:border-[#D49A99] text-[#F7F2EB]']" />
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex justify-between items-center pr-2">
                  <label class="block text-[10px] font-bold tracking-[0.2em] text-[#8C6070] uppercase mt-2">4. 태어난 시간</label>
                  
                  <div class="flex items-center gap-1 bg-[#0A0710] border border-[#2A1F2D] rounded-xl p-1 shadow-inner">
                    <button @click="formData.isTimeUnknown = false" 
                      :class="!formData.isTimeUnknown ? 'bg-gradient-to-br from-[#D49A99] to-[#8C6070] text-[#120D1A] font-bold shadow-[0_2px_10px_rgba(212,154,153,0.3)]' : 'text-[#8C6070] font-light hover:text-[#D49A99]/80'" 
                      class="px-3 md:px-4 py-1.5 text-[10px] md:text-xs rounded-lg transition-all duration-300 w-[72px] md:w-24 text-center">
                      정확히 앎
                    </button>
                    <button @click="formData.isTimeUnknown = true" 
                      :class="formData.isTimeUnknown ? 'bg-[#2A1F2D] text-[#E8DCC4] font-medium shadow-md' : 'text-[#8C6070] font-light hover:text-[#E8DCC4]/80'" 
                      class="px-3 md:px-4 py-1.5 text-[10px] md:text-xs rounded-lg transition-all duration-300 w-[72px] md:w-24 text-center">
                      잘 모름
                    </button>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-4 transition-all duration-500" 
                     :class="formData.isTimeUnknown ? 'opacity-20 pointer-events-none grayscale blur-[1px]' : 'opacity-100'">
                  <select v-model="formData.ampm" class="bg-transparent border-b border-[#2A1F2D] text-center py-4 text-[#F7F2EB] outline-none focus:border-[#D49A99] text-sm font-light appearance-none cursor-pointer">
                    <option value="AM" class="bg-[#120D1A]">오전</option><option value="PM" class="bg-[#120D1A]">오후</option>
                  </select>
                  <input v-model="formData.hour" @input="enforceLimits" type="text" inputmode="numeric" placeholder="HH" 
                    :class="['bg-transparent border-b text-center py-4 outline-none text-sm font-light placeholder-[#4A3B4E] transition-colors',
                             showErrors && !formData.isTimeUnknown && missingFields.includes('hour') ? 'border-red-400/80 bg-red-400/5 text-red-200' : 'border-[#2A1F2D] focus:border-[#D49A99] text-[#F7F2EB]']" />
                  <input v-model="formData.minute" @input="enforceLimits" type="text" inputmode="numeric" placeholder="MM" 
                    :class="['bg-transparent border-b text-center py-4 outline-none text-sm font-light placeholder-[#4A3B4E] transition-colors',
                             showErrors && !formData.isTimeUnknown && missingFields.includes('minute') ? 'border-red-400/80 bg-red-400/5 text-red-200' : 'border-[#2A1F2D] focus:border-[#D49A99] text-[#F7F2EB]']" />
                </div>
              </div>

              <div v-if="showErrors && missingFields.length > 0" class="mt-8 text-center animate-fade-in-up">
                <div class="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-2xl text-xs md:text-sm font-light break-keep leading-relaxed max-w-sm">
                  <span class="animate-pulse shrink-0">⚠️</span> 
                  정확한 파동 계산을 위해 붉게 표시된 정보를 마저 채워주세요.
                </div>
              </div>

              <button @click="startAnalysis" 
                :class="missingFields.length === 0 
                  ? 'bg-gradient-to-r from-[#F7F2EB] via-[#E8DCC4] to-[#D49A99] text-[#120D1A] shadow-[0_15px_40px_rgba(212,154,153,0.2)] hover:scale-[1.02]' 
                  : 'bg-[#1A121F] text-[#4A3B4E] border border-[#2A1F2D] cursor-pointer hover:bg-[#24192B]'" 
                class="w-full py-6 md:py-7 mt-6 font-black rounded-[1.5rem] active:scale-95 transition-all duration-500 text-lg md:text-xl tracking-wide overflow-hidden relative group flex items-center justify-center">
                <div v-if="missingFields.length === 0" class="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:animate-shine"></div>
                <span>지금 내 운세 진단하기 (무료)</span>
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
import { ref, reactive, computed, nextTick } from 'vue' // 🌟 nextTick 추가됨

const phase = ref(1) 
const loading = ref(false)
const result = ref(null) 
const showErrors = ref(false) // 폼 에러 노출 여부 상태

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

// 🌟 입력값 글자수 및 한계치 강제 조정 함수
const enforceLimits = () => {
  let y = String(formData.birthYear).replace(/[^0-9]/g, '');
  if (y.length > 4) y = y.slice(0, 4);
  formData.birthYear = y;

  let m = String(formData.birthMonth).replace(/[^0-9]/g, '');
  if (m.length > 2) m = m.slice(0, 2);
  if (parseInt(m) > 12) m = '12';
  formData.birthMonth = m;

  let d = String(formData.birthDay).replace(/[^0-9]/g, '');
  if (d.length > 2) d = d.slice(0, 2);
  if (parseInt(d) > 31) d = '31';
  formData.birthDay = d;

  let h = String(formData.hour).replace(/[^0-9]/g, '');
  if (h.length > 2) h = h.slice(0, 2);
  if (parseInt(h) > 12) h = '12';
  formData.hour = h;

  let min = String(formData.minute).replace(/[^0-9]/g, '');
  if (min.length > 2) min = min.slice(0, 2);
  if (parseInt(min) > 59) min = '59';
  formData.minute = min;
}

// 🌟 폼 검증 로직
const missingFields = computed(() => {
  const missing = [];
  if (!formData.name.trim()) missing.push('name');
  if (!formData.mainInterest || !formData.subInterest) missing.push('interest');
  if (!formData.birthYear || String(formData.birthYear).length !== 4) missing.push('birthYear');
  const m = parseInt(formData.birthMonth);
  if (isNaN(m) || m < 1 || m > 12) missing.push('birthMonth');
  const d = parseInt(formData.birthDay);
  if (isNaN(d) || d < 1 || d > 31) missing.push('birthDay');
  if (!formData.isTimeUnknown) {
    const h = parseInt(formData.hour);
    if (isNaN(h) || h < 1 || h > 12) missing.push('hour');
    const min = parseInt(formData.minute);
    if (isNaN(min) || min < 0 || min > 59) missing.push('minute');
    if (String(formData.minute).trim() === '') missing.push('minute');
  }
  return missing;
});

const scrollToForm = () => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })

// 🌟 시작 버튼 로직
const startAnalysis = async () => {
  if (missingFields.value.length > 0) {
    showErrors.value = true;
    const formEl = document.getElementById('form-section');
    if(formEl) {
      const y = formEl.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    return;
  }
  
  showErrors.value = false;
  loading.value = true;
  phase.value = 1.5; 
  currentLoadingStep.value = 0;
  
  await new Promise(resolve => setTimeout(resolve, 50));
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const loadingInterval = setInterval(() => {
    if (currentLoadingStep.value < loadingSteps.value.length - 1) {
      currentLoadingStep.value++;
    }
  }, 800);
  
  try {
    const startTime = Date.now();
    const response = await $fetch('/api/analyze-viral', { method: 'POST', body: formData });
    
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < 4000) {
      await new Promise(resolve => setTimeout(resolve, 4000 - elapsedTime));
    }

    clearInterval(loadingInterval);

    if (response) {
      result.value = response.data || response;
      phase.value = 2; 
      
      // 🌟 스크롤 씹힘 방지: 렌더링 후 최상단 이동
      await nextTick(); 
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
    }

  } catch (error) {
    clearInterval(loadingInterval);
    console.error("❌ API 상세 에러:", error);
    const exactError = error.data?.statusMessage || error.message || '알 수 없는 서버 오류';
    alert(`🚨 [오류 발생]\n이유: ${exactError}\n\n입력하신 데이터를 확인하시거나 잠시 후 다시 시도해주세요.`);
    phase.value = 1; 
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