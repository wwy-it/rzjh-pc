/**
 * 保留位数 
 * @public
 */
function digit(val, num) {
    if (val === 0 || val === "0") {
        return 0
    } else if (val === "" || val === undefined || val === null) {
        return ""
    } else {
        let v = Number(val)
        if (!isNaN(v)) {
            return v.toFixed(num)
        } else {
            return val
        }
    }
}

/**
 * 千位符分割
 *  @public
 */
function format(val, num) {
    num = num || 0
    val = digit(val, num)

    if (val === 0 || val === "0") {
        return 0
    } else if (val === "") {
        return ""
    } else {
        let v = Number(val)
        if (!isNaN(v)) {
            let reg = /\d(?=(?:\d{3})+\b)/g
            return (val + '').replace(reg, '$&,')
        } else {
            return val
        }
    }
}


function threeFetch(search, options) {
    // 请求行url
    let host = "http://39.106.184.170:7000"
    let url = search.indexOf("://") == -1 ? (host + search) : search
        // 请求头请求体
    const init = {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        credentials: "include"
    }
    Object.assign(init, options)
    init.headers.append("Authorization", localStorage.getItem('token'))
        //fetch
    return new Promise(function(resolve, reject) {
        fetch(url, init)
            .then(function(res) {
                resolve(res)
            })
    })
}


/**时间戳转时间* @private*/
function toTime(timestamp, item) {
    var date = timestamp > 10000000000 ? new Date(timestamp) : new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    var D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    let YMD = Y + "-" + M + "-" + D
    let hms = h + ":" + m + ":" + s
    let dateTime = YMD + " " + hms

    return { Y: Y, M: M, D: D, h: h, m: m, s: s, YMD: YMD, hms: hms, dateTime: dateTime }

}

/**时间联动效果 用于快速新增窗口等页面的“下单优先级”与时间匹配*/
function changeTime(value) {
    const time = new Date()
    if (value === 0) {} else if (value === 1) {
        time.setHours(15)
        time.setMinutes(0)
        time.setSeconds(0)
    } else if (value === 2) {
        time.setDate(time.getDate() + 7)
        time.setHours(15)
        time.setMinutes(0)
        time.setSeconds(0)
    }
    const t = this.$toTime(time.getTime())
    return t.Y + "-" + t.M + "-" + t.D + " " + t.h + ":" + t.m + ":" + t.s
}
export {
    digit,
    toTime
}