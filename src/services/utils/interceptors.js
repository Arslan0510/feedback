export const removeEmptyStrings = obj => {
    const _obj = { ...obj };
    Object.keys(_obj).forEach(key => {
        if (_obj[key]) return;
        _obj[key] = undefined;
    });
    return _obj;
}