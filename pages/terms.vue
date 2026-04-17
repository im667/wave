<template>
  <div class="min-h-screen bg-[#010312] text-slate-300 p-8 md:p-20 font-sans relative overflow-hidden">
    
    <div class="absolute inset-0 z-0 pointer-events-none opacity-30">
      <div class="absolute inset-0 bg-radial-at-c from-purple-900/20 to-transparent"></div>
    </div>

    <div class="max-w-3xl mx-auto relative z-10">
      <nav class="mb-12">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors group"
        >
          <span class="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span class="text-sm tracking-tighter font-medium">돌아가기</span>
        </NuxtLink>
      </nav>

      <header class="mb-12">
        <h1 class="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          개인정보 수집·이용 및 제3자 제공 동의서
        </h1>
        <p class="text-slate-500 text-sm italic font-mono">Resonance Frequency Lab / Last Updated: 2026. 04. 18</p>
      </header>

      <div class="space-y-10 text-sm md:text-base leading-relaxed text-slate-400 border-t border-slate-800/60 pt-10">
        <section>
          <h2 class="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            1. 개인정보 수집 항목 및 목적
          </h2>
          <div class="bg-slate-900/40 rounded-2xl p-6 border border-slate-800/40">
            <p class="mb-4">『밝은주파수』 서비스는 고유 파동 처방 및 앱 사전예약을 위해 아래의 최소 정보를 수집합니다.</p>
            <ul class="list-disc list-inside space-y-2 ml-2 text-slate-500">
              <li>수집 항목: 성별, 생년월일, 태어난 시간, 이메일 주소</li>
              <li>이용 목적: 사주 명식 분석을 통한 맞춤형 주파수 생성 및 발송, 서비스 런칭 알림</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            2. 제3자 제공 동의
          </h2>
          <p>
            원활한 주파수 리포트 전송을 위해 아래와 같이 외부 서비스에 최소한의 데이터를 제공할 수 있습니다. 
            해당 데이터는 발송 목적 외에 절대 사용되지 않습니다.
          </p>
          <ul class="list-disc list-inside mt-4 space-y-2 text-slate-500">
            <li>제공 받는 자: Supabase (데이터 보관), Resend (이메일 발송 시스템)</li>
            <li>제공 항목: 이메일, 생성된 주파수 데이터</li>
          </ul>
        </section>

        <section>
          <h2 class="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            3. 보유 및 이용 기간
          </h2>
          <p class="bg-purple-900/10 text-purple-200/80 p-5 rounded-2xl border border-purple-500/20">
            수집된 정보는 서비스 제공 목적이 달성되거나 사용자가 동의를 철회할 경우 지체 없이 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 안전하게 보관됩니다.
          </p>
        </section>
      </div>

      <footer class="mt-20 pt-10 border-t border-slate-900 flex justify-center">
        <NuxtLink 
          to="/" 
          class="px-8 py-3 bg-slate-100 text-slate-950 font-bold rounded-full hover:bg-white transition-all shadow-lg shadow-white/5 active:scale-95"
        >
          내용을 확인했습니다
        </NuxtLink>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.bg-radial-at-c {
  background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
}
</style>