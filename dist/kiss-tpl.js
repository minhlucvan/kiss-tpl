'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = kiss;
function kiss(tpl) {
    // Use raw literal sections: we don’t want
    // backslashes (\n etc.) to be interpreted
    var raw = tpl.raw;

    var result = '';

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    args.forEach(function (subst, i) {
        var lit = raw[i];

        if (Array.isArray(subst)) {
            subst = subst.join('');
        }

        result += lit;
        result += subst;
    });

    result += raw[raw.length - 1];

    return result;
}