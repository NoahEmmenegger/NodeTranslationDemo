const translations = require('../translation/translations.json')

module.exports = {
    translate(key, lan, variables = {}) {
        if (!key || !lan) {
            return "MISSING_KEY_OR_LAN";
        }
        let keyValue = translations[key];
        if (!keyValue) {
            return "MISSING_TRANSLATION";
        }
        let value = keyValue[lan];
        if (!value) {
            return "MISSING_TRANSLATION_FOR_LANGUAGE";
        }

        if (Object.keys(variables).length > 0) {
            Object.keys(variables).forEach(variable => {
                value = value.replace(`{${variable}}`, variables[variable])
            })
        }

        return value;
    }
}