<template>
  
  <div class="min-h-screen bg-[#010312] text-slate-100 overflow-hidden relative font-sans leading-relaxed selection:bg-purple-900/40 pb-20 md:pb-0">
    
    <div class="absolute inset-0 z-0 pointer-events-none opacity-100">
      <div class="absolute inset-0 bg-radial-at-c from-purple-800/30 via-[#010312]/70 to-[#010312]"></div>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="80" height="80">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#a855f7" stroke-width="1.2" opacity="0.4"/>
            <circle cx="0" cy="0" r="1.8" fill="#e9d5ff" opacity="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#meshPattern)"/>
      </svg>
    </div>

    <main class="relative z-10 max-w-5xl mx-auto px-5 pt-20 pb-24 md:pt-32 flex flex-col items-center">
      
      <div class="mb-20 text-center animate-fade-in-up">
        <div class="mb-6 flex flex-col items-center gap-2">
          <div class="px-4 py-1 border border-purple-500/20 bg-purple-500/10 rounded-full text-[10px] md:text-xs font-semibold text-purple-300 tracking-[0.2em] uppercase backdrop-blur-sm">
            명리학과 파동 역학의 결합, 『밝은주파수』
          </div>
        </div>
        
        <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-100 mb-8 leading-[1.35] break-keep">
          당신의 끌어당김이 늘 공허했던 이유,<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-700">타고난 기운과 맞지 않는 소리를 들었기 때문입니다.</span>
        </h1>
        <p class="text-slate-400 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed break-keep">
          세상에 똑같은 사주팔자가 없듯, 당신을 일깨우는 주파수도 달라야 합니다. 당신이 태어난 순간의 명식(命式)을 짚어내어, 지금 가장 간절한 곳에 생기를 불어넣는 단 하나의 맞춤형 파동 앱을 곧 선보입니다.
        </p>
      </div>

      <div class="w-full max-w-4xl bg-gradient-to-r from-slate-900/0 via-slate-900/60 to-slate-900/0 py-16 mb-24 border-y border-slate-800/50 animate-fade-in-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-8 text-slate-200 tracking-tight">아무리 애를 써도 풀리지 않는 답답함</br>내게 맞는 파동을 찾아야합니다.</h2>
        <p class="text-slate-400 text-base md:text-lg max-w-2xl mx-auto text-center font-light leading-loose break-keep">
          남들이 다 효과를 봤다는 확언 명상 음악, 주파수들...<br/> 억지로 따라 하며 오히려 마음이 더 초조해지지 않던가요?<br/><br/>
          내 사주에 불(火)이 모자란지, 물(水)이 넘치는지도 모른 채 무작정 듣는 잡음은 오히려 당신의 기운을 흩어지게 만듭니다. <strong class="text-purple-300 font-medium">이제 오직 당신의 영혼과 공명하는 맑은 파동을 찾으셔야 합니다.</strong>
        </p>
      </div>

      <div class="w-full mb-32 animate-fade-in-up" style="animation-delay: 0.4s;">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4">내 손안의 운명 조율기</h2>
          <p class="text-slate-400 text-sm md:text-base">곧 출시될 『밝은주파수』 앱으로 운의 흐름을 틔우는 과정</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div class="w-full max-w-[280px] h-[560px] bg-[#020512] rounded-[40px] border-[8px] border-slate-800/80 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden flex flex-col items-center pt-12 pb-6 px-5">
            <div class="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20"></div> 
            <div class="text-purple-400 text-xs tracking-widest uppercase mb-6 font-mono">Step 1. 命式 풀이</div>
            <div class="w-24 h-24 rounded-full border border-purple-500/30 flex items-center justify-center mb-6 relative">
              <div class="absolute inset-0 border-[3px] border-transparent border-t-purple-500 rounded-full animate-spin"></div>
              <span class="text-3xl">🌌</span>
            </div>
            <h4 class="text-lg font-bold mb-2">타고난 기운 진단</h4>
            <p class="text-center text-xs text-slate-400 mb-8 break-keep">사주팔자 여덟 글자에 담긴<br/>오행의 조화와 결핍을 짚어봅니다.</p>
            <div class="w-full space-y-3">
              <div class="flex justify-between text-xs"><span class="text-slate-500">화(火) 기운</span><span class="text-red-400">부족 (보완 필요)</span></div>
              <div class="w-full h-1.5 bg-slate-800 rounded-full"><div class="w-[12%] h-full bg-red-500 rounded-full shadow-[0_0_10px_red]"></div></div>
              <div class="flex justify-between text-xs mt-3"><span class="text-slate-500">수(水) 기운</span><span class="text-blue-400">과잉 (설기 필요)</span></div>
              <div class="w-full h-1.5 bg-slate-800 rounded-full"><div class="w-[85%] h-full bg-blue-500 rounded-full"></div></div>
            </div>
          </div>

          <div class="w-full max-w-[280px] h-[560px] bg-gradient-to-b from-[#1a0b2e] to-[#020512] rounded-[40px] border-[8px] border-slate-800/80 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative overflow-hidden flex flex-col items-center pt-12 pb-6 px-5 transform md:-translate-y-6">
            <div class="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20"></div>
            <div class="text-purple-300 text-xs tracking-widest uppercase mb-10 font-mono">운명의 조율</div>
            <div class="flex items-end gap-1.5 h-24 mb-10 opacity-80">
              <div class="w-2 bg-purple-500 rounded-full animate-[bounce_1s_infinite_ease-in-out]" style="height: 40%"></div>
              <div class="w-2 bg-purple-400 rounded-full animate-[bounce_1s_infinite_ease-in-out_0.2s]" style="height: 80%"></div>
              <div class="w-2 bg-purple-300 rounded-full animate-[bounce_1s_infinite_ease-in-out_0.4s]" style="height: 100%"></div>
              <div class="w-2 bg-purple-400 rounded-full animate-[bounce_1s_infinite_ease-in-out_0.6s]" style="height: 60%"></div>
              <div class="w-2 bg-purple-500 rounded-full animate-[bounce_1s_infinite_ease-in-out_0.8s]" style="height: 30%"></div>
            </div>
            <h4 class="text-xl font-bold mb-1">재물운(財運)을 여는 파동</h4>
            <p class="text-center text-xs text-purple-400 mb-8">432Hz + 세타파 (6.5Hz)</p>
            <div class="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)] cursor-pointer">
              <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="mt-6 text-[10px] text-slate-500">맑고 왜곡 없는 주파수 공명 중</div>
          </div>

          <div class="w-full max-w-[280px] h-[560px] bg-[#020512] rounded-[40px] border-[8px] border-slate-800/80 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden flex flex-col pt-12 pb-6 px-5">
            <div class="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20"></div>
            <div class="text-purple-400 text-xs tracking-widest uppercase mb-6 font-mono text-center">오늘의 처방</div>
            <div class="bg-slate-900/80 rounded-2xl p-4 mb-4 border border-slate-800">
              <h5 class="text-sm font-bold text-white mb-2">오늘의 운(運)의 흐름</h5>
              <p class="text-[11px] text-slate-400 break-keep">날이 서 있는 금(金)의 기운이 강합니다. 재물운은 길하나 마음이 예민해질 수 있습니다.</p>
            </div>
            <div class="bg-purple-900/20 rounded-2xl p-4 border border-purple-500/20">
              <h5 class="text-sm font-bold text-purple-300 mb-2">맞춤 주파수 처방</h5>
              <p class="text-[11px] text-slate-300 mb-3 break-keep">마음의 날을 세우는 대신 부드럽게 재물을 품을 수 있도록, 따뜻한 세타파를 곁들입니다.</p>
              <button class="w-full py-2 bg-purple-600/30 text-purple-200 text-xs font-bold rounded-lg border border-purple-500/50">지금 마음 달래기</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-xl mb-28 z-20 group animate-fade-in-up scroll-mt-24" id="waitlist" style="animation-delay: 0.6s;">
        <div class="p-px rounded-3xl bg-gradient-to-b from-slate-700/80 via-purple-600/50 to-[#010312] shadow-[0_0_80px_-15px_rgba(168,85,247,0.4)] transition-all duration-500">
          <div class="bg-[#04081b] rounded-[23px] p-6 md:p-10 border border-slate-800/60 backdrop-blur-xl">
            <div class="text-center mb-8">
              <span class="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase animate-pulse">
                사전 예약 및 파동 진단
              </span>
              <h3 class="text-2xl font-semibold text-slate-100 mb-2 tracking-tight">나만의 주파수 처방전 받기</h3>
              <p class="text-slate-400 text-xs md:text-sm leading-relaxed break-keep">
                당신이 태어난 시간과 지금 가장 간절히 바라는 소망을 알려주세요.<br class="hidden md:block"/>
                앱 정식 출시 전, 당신의 운명을 조율할 샘플 파동을 먼저 다듬어 보내드리겠습니다.
              </p>
            </div>
            
          <form @submit.prevent="submitForm" class="space-y-5">
              
              <div class="grid grid-cols-2 gap-3">
                <button 
                  v-for="cat in goalCategories" :key="cat.id"
                  type="button"
                  @click="selectMainCategory(cat.id)"
                  :class="[
                    'px-4 py-3.5 rounded-xl border transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2',
                    selectedMainCategory === cat.id 
                      ? 'bg-purple-600/20 border-purple-500 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                      : 'bg-[#010312]/50 border-slate-800 text-slate-500 hover:border-slate-700'
                  ]"
                >
                  <span class="text-base">{{ cat.icon }}</span>
                  {{ cat.label }}
                </button>
              </div>

              <div v-if="selectedMainCategory" class="p-4 bg-purple-900/10 border border-purple-500/20 rounded-xl transition-all duration-300 animate-fade-in-up" style="animation-duration: 0.4s;">
                <p class="text-[11px] text-purple-300 mb-3 text-center tracking-wide">어떤 기운을 더 구체적으로 채우고 싶으신가요?</p>
                <div class="flex flex-wrap gap-2 justify-center">
                  <button 
                    v-for="sub in currentSubs" :key="sub.id"
                    type="button"
                    @click="formData.focus = sub.id"
                    :class="[
                      'px-3 py-1.5 rounded-full text-xs transition-all duration-300 border',
                      formData.focus === sub.id
                        ? 'bg-purple-500 border-purple-400 text-white shadow-md shadow-purple-500/30'
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    ]"
                  >
                    {{ sub.label }}
                  </button>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3 pt-2">
                <input v-model="formData.name" type="text" placeholder="이름 (홍길동)" class="bg-[#010312]/90 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none text-slate-200 px-4 h-14 rounded-xl transition-all text-sm" required />
                <select v-model="formData.gender" class="bg-[#010312]/90 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none text-slate-200 px-4 h-14 rounded-xl transition-all text-sm appearance-none" required>
                  <option value="" disabled selected>성별 선택</option>
                  <option value="female">여성</option>
                  <option value="male">남성</option>
                </select>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="relative">
                  <input v-model="formData.birthYear" ref="yearRef" @input="onYearInput" type="text" placeholder="YYYY" maxlength="4" class="w-full bg-[#010312]/90 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none text-slate-200 px-4 h-14 rounded-xl transition-all text-sm text-center tracking-wider" required />
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none">년</span>
                </div>
                <div class="relative">
                  <input v-model="formData.birthMonth" ref="monthRef" @input="onMonthInput" type="text" placeholder="MM" maxlength="2" class="w-full bg-[#010312]/90 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none text-slate-200 px-4 h-14 rounded-xl transition-all text-sm text-center tracking-wider" required />
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none">월</span>
                </div>
                <div class="relative">
                  <input v-model="formData.birthDay" ref="dayRef" @input="onDayInput" type="text" placeholder="DD" maxlength="2" class="w-full bg-[#010312]/90 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none text-slate-200 px-4 h-14 rounded-xl transition-all text-sm text-center tracking-wider" required />
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none">일</span>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select v-model="formData.birthTimeType" class="w-full bg-[#010312]/90 border border-slate-700 focus:border-purple-500 outline-none text-slate-200 px-4 h-14 rounded-xl transition-all text-sm appearance-none">
                  <option value="known">태어난 시간 알림</option>
                  <option value="unknown">모릅니다 (기본 기운 조율)</option>
                </select>
                
                <div v-if="formData.birthTimeType === 'known'" class="grid grid-cols-3 gap-2">
                  <select v-model="formData.ampm" class="bg-[#010312]/90 border border-slate-700 focus:border-purple-500 outline-none text-slate-200 text-center h-14 rounded-xl transition-all text-sm appearance-none">
                    <option value="" disabled selected>선택</option>
                    <option value="AM">오전</option>
                    <option value="PM">오후</option>
                  </select>
                  <select v-model="formData.hour" class="bg-[#010312]/90 border border-slate-700 focus:border-purple-500 outline-none text-slate-200 text-center h-14 rounded-xl transition-all text-sm appearance-none">
                    <option value="" disabled selected>시</option>
                    <option v-for="h in 12" :key="h" :value="h">{{ h }}시</option>
                  </select>
                  <div class="relative">
                    <input v-model="formData.minute" @input="onMinuteInput" type="text" placeholder="00" maxlength="2" class="w-full bg-[#010312]/90 border border-slate-700 focus:border-purple-500 outline-none text-slate-200 text-center h-14 rounded-xl transition-all text-sm" />
                    <span class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none">분</span>
                  </div>
                </div>
                
                <div v-else class="flex items-center justify-center bg-[#010312]/50 border border-slate-800/80 rounded-xl h-14 text-slate-500 text-xs tracking-wide">
                  (기본 기운으로 대체됩니다)
                </div>
              </div>

              <div class="relative group pt-1">
                <input v-model="formData.email" type="email" placeholder="앱 출시 알림과 처방 파동을 받아보실 이메일" class="w-full bg-[#010312]/90 border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none text-slate-100 px-5 h-14 rounded-xl transition-all text-sm placeholder:text-slate-500 shadow-inner" required />
                <div class="absolute bottom-0 left-5 right-5 h-px bg-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-center opacity-100"></div>
              </div>
              
              <div class="flex items-start gap-2.5 mt-4 px-1">
                <div class="flex items-center h-5">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    v-model="agreeTerms"
                    class="w-4 h-4 border border-slate-700 rounded bg-[#010312] accent-purple-500 cursor-pointer focus:ring-purple-500/50" 
                  />
                </div>
                <label for="terms" class="text-[11px] md:text-xs text-slate-400 leading-tight cursor-pointer">
                  맞춤형 주파수 조율 및 샘플 발송을 위한 
                  <a href="/terms" target="_blank" class="text-purple-400 underline underline-offset-2 hover:text-purple-300">개인정보 수집·이용 및 제3자 제공</a>에 동의합니다. (필수)
                </label>
              </div>

              <button type="submit" :disabled="!isFormValid || loading" class="w-full h-14 mt-4 bg-slate-100 hover:bg-white disabled:opacity-30 text-slate-900 font-bold rounded-xl transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 group overflow-hidden cursor-pointer disabled:cursor-not-allowed">
                <span v-if="loading" class="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                <span class="relative block overflow-hidden">
                  <span class="block transition-transform duration-300 group-hover:-translate-y-full">
                    {{ loading ? '기운을 짚어보고 맑은 파동을 엮는 중입니다...' : '내 사주 보내기 및 샘플 파동 신청' }}
                  </span>
                  <span class="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-purple-900 font-extrabold text-[15px]">
                    무료 샘플 수신 및 앱 사전예약
                  </span>
                </span>
              </button>
            </form>

            <p v-if="success" class="mt-6 text-purple-300 text-sm font-medium animate-pulse text-center p-3 rounded-lg bg-purple-900/30 border border-purple-500/30">
              ✨ 당신을 위한 운명의 조율이 완료되었습니다. 기입하신 이메일을 확인해주세요!
            </p>
          </div>
        </div>
      </div>

      <div class="w-full max-w-4xl pt-24 border-t border-slate-800/40 relative pb-10">
        <div class="text-center mb-16 animate-fade-in-up" style="animation-delay: 0.8s;">
          <h2 class="text-2xl font-semibold tracking-tight text-slate-200 mb-6">수천 년의 명리학,</br> 파동 과학과 만나다.</h2>
          <p class="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed break-keep">
            사주는 미신이 아니라 고도화된 동양의 통계학입니다. 우리는 오랜 세월 검증된 명리의 이치를, 현대 뇌과학의 뇌파 동조 현상과 접목하여 당신의 운명을 조율합니다.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style="animation-delay: 1.0s;">
          <div class="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 hover:border-purple-600/40 transition-colors">
            <h4 class="text-lg font-semibold text-slate-200 mb-4 tracking-tight">01. 뇌파 동조와 기운의 변화</h4>
            <p class="text-slate-400 text-sm leading-relaxed mb-6 font-light break-keep">
              아무 주파수나 듣는다고 삶이 바뀌지 않습니다. 『밝은주파수』 앱은 사주 분석으로 도출된 당신의 '결핍'을 정확한 Hz 대역으로 들려주어, 무의식의 깊은 곳(세타파 상태)에서부터 긍정적인 끌어당김을 유도합니다.
            </p>
            <p class="text-[10px] text-slate-500 font-mono">* Oster, G. (1973). "Auditory beats in the brain". Scientific American.</p>
          </div>
          <div class="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 hover:border-purple-600/40 transition-colors">
            <h4 class="text-lg font-semibold text-slate-200 mb-4 tracking-tight">02. 맑은 파동과 세포의 공명</h4>
            <p class="text-slate-400 text-sm leading-relaxed mb-6 font-light break-keep">
              탁한 기운은 운을 밀어냅니다. 손실 압축된 영상 플랫폼의 탁한 음원 대신,</br> 24bit 이상의 순수한 무손실 파동을 당신에게 온전히 전달하여 정확하고 맑은 공명을 제공합니다.
            </p>
            <p class="text-[10px] text-slate-500 font-mono">* Bartel, L. et al. (2014). "Vibroacoustic disease and healing". Rehab Research.</p>
          </div>
        </div>
      </div>

    </main>

    <footer class="relative z-10 pb-24 pt-16 text-center border-t border-slate-800/60 bg-[#010312]">
      <p class="text-slate-500 text-xs tracking-[0.4em] uppercase font-bold mb-3">
        『밝은주파수』 App &copy; 2026
      </p>
      <p class="text-slate-600 text-[11px] tracking-widest lowercase italic">
        decoding destiny through high-resolution mobile wave synthesis
      </p>
    </footer>

    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm pointer-events-none">
      <button 
        @click="scrollToForm"
        class="w-full h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-[0_10px_30px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2 font-bold text-white tracking-wide border border-purple-400/40 hover:scale-[1.02] active:scale-[0.98] transition-transform pointer-events-auto overflow-hidden relative group"
      >
        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
        <span class="text-lg">✨</span>
        <span>(무료) 맞춤형 주파수 샘플 받기</span>
      </button>
    </div>

  </div>

</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const goalCategories = [
  {
    id: 'success', label: '성공/재물운', icon: '💰',
    subs: [
      { id: 'wealth', label: '재물운' }, { id: 'exam', label: '합격운' },
      { id: 'promotion', label: '승진운' }, { id: 'fame', label: '명예운' }
    ]
  },
  {
    id: 'love', label: '애정/인연운', icon: '💖',
    subs: [
      { id: 'new_love', label: '새로운 인연' }, { id: 'couple', label: '커플 애정운' },
      { id: 'crush', label: '짝사랑운' }, { id: 'reunion', label: '재회운' }
    ]
  },
  {
    id: 'focus', label: '학업/몰입운', icon: '🧠',
    subs: [
      { id: 'study', label: '학업 성취' }, { id: 'work', label: '업무 능률' },
      { id: 'creative', label: '창의력 발현' }, { id: 'clear_mind', label: '잡념 제거' }
    ]
  },
  {
    id: 'energy', label: '긍정에너지', icon: '✨',
    subs: [
      { id: 'calm', label: '심신 안정' }, { id: 'overcome', label: '우울/불안 극복' },
      { id: 'harmony', label: '대인관계 조화' }, { id: 'protection', label: '액운 퇴치' }
    ]
  }
]

const selectedMainCategory = ref(null)

const currentSubs = computed(() => {
  const category = goalCategories.find(c => c.id === selectedMainCategory.value)
  return category ? category.subs : []
})

const selectMainCategory = (id) => {
  selectedMainCategory.value = id
  formData.focus = '' 
}

// 폼 데이터 구조 개편 (이름 추가, 생년월일/시간 분리)
const formData = reactive({
  name: '',
  gender: '',
  focus: '', 
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  birthTimeType: 'known',
  ampm: '',
  hour: '',
  minute: '',
  email: ''
})

const agreeTerms = ref(false)
const loading = ref(false)
const success = ref(false)

// [기능 추가] 인풋 참조 및 자동 포커스 이동 로직
const yearRef = ref(null)
const monthRef = ref(null)
const dayRef = ref(null)

const onYearInput = (e) => {
  formData.birthYear = e.target.value.replace(/[^0-9]/g, '')
  if (formData.birthYear.length === 4) monthRef.value?.focus()
}
const onMonthInput = (e) => {
  formData.birthMonth = e.target.value.replace(/[^0-9]/g, '')
  if (formData.birthMonth.length === 2) dayRef.value?.focus()
}
const onDayInput = (e) => {
  formData.birthDay = e.target.value.replace(/[^0-9]/g, '')
}
const onMinuteInput = (e) => {
  formData.minute = e.target.value.replace(/[^0-9]/g, '')
}

// [기능 추가] 폼 유효성 검사 (버튼 활성화 조건)
const isFormValid = computed(() => {
  if (!formData.name || !formData.gender || !formData.email || !formData.focus || !agreeTerms.value) return false
  if (formData.birthYear.length !== 4 || !formData.birthMonth || !formData.birthDay) return false
  
  if (formData.birthTimeType === 'known') {
    if (!formData.ampm || !formData.hour || !formData.minute) return false
  }
  return true
})

// [기능 추가] 실제 API 통신 로직 적용
const submitForm = async () => {
  if (!isFormValid.value || loading.value) return;
  
  loading.value = true;
  success.value = false;
  
  try {
    // 1. 생년월일 조합 (YYYY-MM-DD)
    const formattedDate = `${formData.birthYear}-${formData.birthMonth.padStart(2, '0')}-${formData.birthDay.padStart(2, '0')}`;
    
    // 2. 시간 조합 (24시간제로 변환: HH:MM)
    let formattedTime = "12:00"; // 모를 경우 기본값
    if (formData.birthTimeType === 'known') {
      let h = parseInt(formData.hour);
      if (formData.ampm === 'PM' && h !== 12) h += 12;
      if (formData.ampm === 'AM' && h === 12) h = 0;
      formattedTime = `${h.toString().padStart(2, '0')}:${formData.minute.padStart(2, '0')}`;
    }

    // 3. 백엔드로 데이터 전송
    const response = await $fetch('/api/prescribe', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        birthDate: formattedDate,
        birthTime: formattedTime,
        focus: formData.focus // 원하는 기운 (옵션)
      }
    });

    if (response.success) {
      success.value = true;
      // 폼 초기화 (원하시면 주석 해제)
      // Object.assign(formData, { name: '', email: '', ... }) 
    } else {
      alert(`요청에 실패했습니다: ${response.message || response.error}`);
    }
  } catch (error) {
    console.error('API Error:', error);
    alert('서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.');
  } finally {
    loading.value = false;
  }
}

const scrollToForm = () => {
  const formElement = document.getElementById('waitlist')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
.bg-radial-at-c {
  background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
}
.color-scheme-dark {
  color-scheme: dark;
}
.break-keep {
  word-break: keep-all;
}
</style>