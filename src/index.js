export default function kiss(tpl, ...args) {
    // Use raw literal sections: we don’t want
    // backslashes (\n etc.) to be interpreted
    let raw = tpl.raw;

    let result = '';

    args.forEach((subst, i) => {
        let lit = raw[i];

        if (Array.isArray(subst)) {
            subst = subst.join('');
        }

        result += lit;
        result += subst;
    });
    
    result += raw[raw.length-1];

    return result;
}