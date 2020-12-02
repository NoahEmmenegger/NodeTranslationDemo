const { translate } = require("./src/service/translationService");

console.log(`Translation: "${translate('placeholders', 'en', {"name": "Noah", "color": "red"})}"`);