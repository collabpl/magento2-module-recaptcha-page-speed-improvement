define([
    'mage/utils/wrapper'
], function (wrapper) {
    'use strict';

    return function (reCaptchaLoader) {
        reCaptchaLoader.addReCaptchaScriptTag = wrapper.wrapSuper(reCaptchaLoader.addReCaptchaScriptTag,  () => {
            let element, scriptTag;

            (events => {
                const loadRecaptchaJs = () => {
                    events.forEach(type => window.removeEventListener(type, loadRecaptchaJs))
                    element = document.createElement('script');
                    scriptTag = document.getElementsByTagName('script')[0];

                    element.async = true;
                    element.src = 'https://www.google.com/recaptcha/api.js' +
                        '?onload=globalOnRecaptchaOnLoadCallback&render=explicit';

                    scriptTag.parentNode.insertBefore(element, scriptTag);
                };
                events.forEach(type => window.addEventListener(type, loadRecaptchaJs, {once: true, passive: true}))
            })(['touchstart', 'mouseover', 'wheel', 'scroll', 'keydown'])
        });

        return reCaptchaLoader;
    };
});
