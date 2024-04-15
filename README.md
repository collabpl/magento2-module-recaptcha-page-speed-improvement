# Magento 2 Recaptcha Page Speed Improvement

The Collab_RecaptchaPageSpeedImprovement is a simple Magento 2 module which improves PageSpeed Insights score 
by lazy loading reCaptcha script only after user interaction with the website. Loader is triggered after one 
of the following events:
- 'touchstart', 
- 'mouseover', 
- 'wheel', 
- 'scroll', 
- 'keydown'

## Basic usage
Mixin works automatically on every page where reCaptcha is used just right after installation.

## Installation details
```bash
composer req collab/module-recaptcha-page-speed-improvement
bin/magento setup:upgrade
```
