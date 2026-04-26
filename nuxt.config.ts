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
  },
  app: {
    head: {
      script: [
        {
          type: 'text/javascript',
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e);
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1274013358237613');
            fbq('track', 'PageView');
          `
        }
      ],
      noscript: [
        {
          innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1274013358237613&ev=PageView&noscript=1" />`
        }
      ]
    }
  }
})