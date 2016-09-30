import assign from 'object-assign';
declare const require: Function;

export default function getLocale(props, context, component) {
    let locale = null;
    if (context && context.antLocale && context.antLocale[component]) {
        locale = context.antLocale[component];
    } else {
        locale = require('./locale/zh_CN');
    }
    // 统一合并为完整的 Locale
    const result = assign({}, locale, props.locale);
    result.lang = assign({}, locale.lang, props.locale.lang);
    return result;
}
