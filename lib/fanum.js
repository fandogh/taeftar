var _fanum_map = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};

module.exports = function (num) {
    return Array.prototype.map.call('' + num, function (x) {
        if (x >= '0' && x <= '9')
            return _fanum_map[x];
        return x;
    }).join('')
};