"use client";
import { useEffect } from 'react';

export default function Contact() {
  
  // This safely loads your tracking/resizing script on the client-side
  useEffect(() => {
    const runPbFormScript = function() {
      if(window.__pbFormResize) return;
      window.__pbFormResize=1;
      var fitFrames=[];
      function applyFit(f){f.style.height=window.innerHeight+'px';}
      function pbGtag(id){
        window.dataLayer=window.dataLayer||[];
        if(!window.gtag){window.gtag=function(){window.dataLayer.push(arguments);};}
        window.__pbGtag=window.__pbGtag||{};
        if(!window.__pbGtag[id]){
          window.__pbGtag[id]=1;
          var s=document.createElement('script');
          s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);
          document.head.appendChild(s);
          window.gtag('js',new Date());window.gtag('config',id);
        }
      }
      function pbFbq(pid){
        if(!window.fbq){
          (function(f,b,e,v){if(f.fbq)return;var n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];var t=b.createElement(e);t.async=true;t.src=v;var s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        }
        window.fbq('init',pid);
      }
      window.addEventListener('resize',function(){for(var i=0;i<fitFrames.length;i++)applyFit(fitFrames[i]);});
      window.addEventListener('message',function(e){
        if(!e.data||!e.data.type)return;
        var fs=document.querySelectorAll('iframe[data-pb-form]');
        var f=null;
        for(var i=0;i<fs.length;i++){if(fs[i].contentWindow===e.source){f=fs[i];break;}}
        if(!f)return;
        if(e.data.type==='pb-form-resize'&&typeof e.data.height==='number'){
          var idx=fitFrames.indexOf(f);
          if(e.data.height===-1){if(idx<0)fitFrames.push(f);applyFit(f);}
          else{if(idx>=0)fitFrames.splice(idx,1);f.style.height=Math.max(0,e.data.height)+'px';}
        }else if(e.data.type==='pb-form-scroll'){
          try{f.scrollIntoView({behavior:'smooth',block:'start'});}catch(_){f.scrollIntoView();}
        }else if(e.data.type==='pb-form-conversion'){
          var d=e.data;
          window.dataLayer=window.dataLayer||[];
          window.dataLayer.push({event:'pb-form-submitted',formId:d.event&&d.event.formId,formName:d.event&&d.event.formName});
          if(d.mode!=='gtm'){
            if(d.google&&/^AW-[0-9]{6,15}$/i.test(d.google.id)){pbGtag(d.google.id);window.gtag('event','conversion',{send_to:d.google.sendTo});}
            if(d.meta&&/^[0-9]{10,20}$/.test(d.meta.pixelId)){pbFbq(d.meta.pixelId);window.fbq('track','Lead');}
          }
        }else if(e.data.type==='pb-form-redirect'&&e.data.url&&/^https?:\/\//i.test(e.data.url)){
          setTimeout(function(){window.location.href=e.data.url;},600);
        }
      });
    };
    runPbFormScript();
  }, []);

  return (
    <main>
      <h1>Get In Touch</h1>
      <p style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
        Please fill out the form below to begin planning your next unforgettable event.
      </p>
      
      <iframe 
        data-pb-form="" 
        src="https://aosentertainment.planningbeats.com/form/c4e27211-c857-456c-8f23-c82b83d5afc7" 
        title="Enquiry form" 
        loading="lazy" 
        width="100%" 
        height="1430" 
        style={{ border: 'none', display: 'block', background: 'transparent' }} 
        scrolling="no" 
        allowTransparency="true"
      ></iframe>
    </main>
  );
}
