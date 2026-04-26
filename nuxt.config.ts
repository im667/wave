// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase','@nuxtjs/tailwindcss'],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false // 테스트 중 귀찮은 로그인 리다이렉트 방지
  },
  build: {
    transpile: ['lunar-javascript']
  }
  
})