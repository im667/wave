<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// 🌟 앱 전체에 픽셀을 강제로 주입합니다
useHead({
  script: [
    {
      // innerHTML 대신 children을 사용하는 것이 Nuxt3 안전 규격입니다
      children: `
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
      `,
      type: 'text/javascript'
    }
  ],
  noscript: [
    {
      children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1274013358237613&ev=PageView&noscript=1" />`
    }
  ]
})
</script>