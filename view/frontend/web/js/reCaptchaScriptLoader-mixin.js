define(["mage/utils/wrapper"],function(t){return function(e){return e.addReCaptchaScriptTag=t.wrapSuper(e.addReCaptchaScriptTag,()=>{let e,a;{var r=["touchstart","mouseover","wheel","scroll","keydown"];let t=()=>{r.forEach(e=>window.removeEventListener(e,t)),e=document.createElement("script"),a=document.getElementsByTagName("script")[0],e.async=!0,e.src="https://www.google.com/recaptcha/api.js?onload=globalOnRecaptchaOnLoadCallback&render=explicit",a.parentNode.insertBefore(e,a)};r.forEach(e=>window.addEventListener(e,t,{once:!0,passive:!0}))}}),e}});