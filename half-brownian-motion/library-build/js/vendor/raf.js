(function (e) {
    var t = 0,
        n = ["ms", "moz", "webkit", "o"];
    for (var r = 0; r < n.length && !e.requestAnimationFrame; ++r) e.requestAnimationFrame = e[n[r] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n[r] + "CancelAnimationFrame"] || e[n[r] + "CancelRequestAnimationFrame"];
    e.requestAnimationFrame || (e.requestAnimationFrame = function (n, r) {
        var i = (new Date).getTime(),
            s = Math.max(0, 16 - (i - t)),
            o = e.setTimeout(function () {
                n(i + s)
            }, s);
        return t = i + s, o
    }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    })
})(this);