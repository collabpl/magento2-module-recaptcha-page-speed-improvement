/**
 * @category  Collab
 * @package   Collab\RecaptchaPageSpeedImprovement
 * @author    Marcin Jędrzejewski <m.jedrzejewski@collab.pl>
 * @copyright 2024 Collab
 * @license   MIT
 */

var config = {
    config: {
        mixins: {
            'Magento_ReCaptchaFrontendUi/js/reCaptchaScriptLoader': {
                'Collab_RecaptchaPageSpeedImprovement/js/reCaptchaScriptLoader-mixin': true
            }
        }
    }
}
