/**
 * Created by Hugh on 2015/3/17.
 * 浏览器参数操作类
 */
var ExplorerHelper = {
    /**
     * 该对象用于判断系统，系统版本，浏览器，苹果设备等等功能。
     */
    _version_value: false,
    _ua: navigator.userAgent.toLocaleLowerCase(),
    /**
     * 用于判断系统
     */
    android: function () {
        /**
         * 该方法用于判断是否为安卓平台，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/(android)\s+([\d.]+)/);
        //如果是fierfox浏览器(不带android版本号)
        regular_result = this.firefox() ? this._ua.match(/(android)/) : regular_result;
        var os_boolean = !!regular_result;
        if (!this._version_value && os_boolean) {
            this._version_value = regular_result[2];
        }
        this.android = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    ios: function () {
        /**
         * 该方法用于判断是否为iOS平台，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/.*os\s([\d_]+)/),
            os_boolean = !!regular_result;
        if (!this._version_value && os_boolean) {
            this._version_value = regular_result[1].replace(/_/g, '.');
        }
        this.ios = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    ipod: function () {
        /**
         * 该方法用于判断是否为ipod设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/(ipod).*os\s([\d_]+)/),
            os_boolean = !!regular_result;
        if (!this._version_value && os_boolean) {
            this._version_value = regular_result[2].replace(/_/g, '.');
        }
        this.ipod = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    ipad: function () {
        /**
         * 该方法用于判断是否为ipad设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/(ipad).*os\s([\d_]+)/),
            os_boolean = !!regular_result;
        if (!this._version_value && os_boolean) {
            this._version_value = regular_result[2].replace(/_/g, '.');
        }
        this.ipad = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    iphone: function () {
        /**
         * 该方法用于判断是否为iphone设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/(iphone);.*os\s([\d_]+)/),
            os_boolean = !!regular_result;
        if (!this._version_value && os_boolean) {
            this._version_value = regular_result[2].replace(/_/g, '.');
        }
        this.iphone = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    windowPhone: function () {
        /**
         * 该方法用于判断是否为windows phone设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/windows phone/),
            os_boolean = !!regular_result;
        this.windowPhone = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    kindle: function () {
        /**
         * 该方法用于判断是否为kindle设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/kindle\/([\d.]+)/),
            os_boolean = !!regular_result;
        if (!this._version_value && os_boolean) {
            this._version_value = regular_result[1];
        }
        this.kindle = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    /**
     * 用于判断手机品牌
     */
    samsung: function () {
        /**
         * 该方法用于判断是否为三星设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('samsung') > -1 || this._ua.indexOf('sm-') > -1 || this._ua.indexOf('gt-') > -1 || this._ua.indexOf('gt_') > -1 || this._ua.indexOf('sch_') > -1 || this._ua.indexOf('sc_') > -1 || this._ua.indexOf('sph_') > -1 || this._ua.indexOf('galaxy nexus') > -1) {
            return true;
        } else {
            return false;
        }
    },
    sony: function () {
        /**
         * 该方法用于判断是否为索尼设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('l50t') > -1 || this._ua.indexOf('l35h') > -1 || this._ua.indexOf('st25i') > -1 || this._ua.indexOf('l36h') > -1 || this._ua.indexOf('lt22i') > -1 || this._ua.indexOf('walkman') > -1) {
            return true;
        } else {
            return false;
        }

    },
    kliton: function () {
        /**
         * 该方法用于判断是否为凯利通设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('kliton') > -1) {
            return true;
        } else {
            return false;
        }
    },
    vivo: function () {
        /**
         * 该方法用于判断是否为vivo设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('vivo') > -1) {
            return true;
        } else {
            return false;
        }
    },
    oppo: function () {
        /**
         * 该方法用于判断是否为oppo设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('r819t') > -1 || this._ua.indexOf('r821t') > -1 || this._ua.indexOf('x909') > -1 || this._ua.indexOf('x9007') > -1 || this._ua.indexOf('t29') > -1) {
            return true;
        } else {
            return false;
        }
    },
    Pantech: function () {
        /**
         * 该方法用于判断是否为泛泰设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('im-a') > -1) {
            return true;
        } else {
            return false;
        }
    },
    Amazon: function () {
        /**
         * 该方法用于判断是否为亚马逊设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('kfthwi') > -1) {
            return true;
        } else {
            return false;
        }
    },
    Hisense: function () {
        /**
         * 该方法用于判断是否为海信设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('hs-t958') > -1 || this._ua.indexOf('e601m') > -1) {
            return true;
        } else {
            return false;
        }
    },
    GIONEE: function () {
        /**
         * 该方法用于判断是否为金立设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('gionee') > -1 || this._ua.indexOf('gn') > -1 || this._ua.indexOf('e6t') > -1) {
            return true;
        } else {
            return false;
        }
    },
    Haier: function () {
        /**
         * 该方法用于判断是否为海尔设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('haier') > -1) {
            return true;
        } else {
            return false;
        }
    },
    lg: function () {
        /**
         * 该方法用于判断是否为LG设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('lg') > -1) {
            return true;
        } else {
            return false;
        }
    },
    TCL: function () {
        /**
         * 该方法用于判断是否为TCL设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('tcl') > -1) {
            return true;
        } else {
            return false;
        }
    },
    huawei: function () {
        /**
         * 该方法用于判断是否为华为设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('huawei') > -1 || this._ua.indexOf('h60-l01') > -1 || this._ua.indexOf('honor h30-l01') > -1) {
            return true;
        } else {
            return false;
        }
    },
    Chrome_mobile: function () {
        /**
         * 该方法用于判断是否为谷歌设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('nexus') > -1) {
            return true;
        } else {
            return false;
        }
    },
    htc: function () {
        /**
         * 该方法用于判断是否为HTC设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('htc') > -1 || this._ua.indexOf('htl21') > -1) {
            return true;
        } else {
            return false;
        }
    },
    moto: function () {
        /**
         * 该方法用于判断是否为摩托设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('mot-') > -1) {
            return true;
        } else {
            return false;
        }
    },
    mi: function () {
        /**
         * 该方法用于判断是否为mi手机，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('mi') > -1 || this._ua.indexOf('hm') > -1) {
            return true;
        } else {
            return false;
        }
    },
    nokia: function () {
        /**
         * 该方法用于判断是否为nokia设备，在联想设备上所有的浏览器都包含nokia，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('nokia') > -1) {
            return true;
        } else {
            return false;
        }
    },
    lenovo: function () {
        /**
         * 该方法用于判断是否为lenovo设备，在联想设备上所有的浏览器都包含lenovo，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('lenovo') > -1) {
            return true;
        } else {
            return false;
        }
    },
    coolpad: function () {
        /**
         * 该方法用于判断是否为酷派设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('coolpad') > -1) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 用于判断浏览器类型
     */
    uc: function () {
        /**
         * 该方法用于判断是否为UC内核的浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         * @tip    该函数只在安卓平台能正常判断，慎用！
         */
        var regular_result = this._ua.match(/uc/),
            os_boolean = !!regular_result;
        return os_boolean;
    },
    baidu: function () {
        /**
         * 该方法用于判断是否为baidu浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('baidu') > -1 || this._ua.indexOf('flyflow') > -1) {
            return true;
        } else {
            return false;
        }
    },
    opera: function () {
        /**
         * 该方法用于判断是否为opera设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('opera') > -1 || this._ua.indexOf('opr') > -1 || this._ua.indexOf('oupeng') > -1) {
            return true;
        } else {
            return false;
        }
    },
    _360browser: function () {
        /**
         * 该方法用于判断是否为360浏览器设备，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('360browser') > -1 || this._ua.indexOf('360se') > -1) {
            return true;
        } else {
            return false;
        }
    },
    firefox: function () {
        /**
         * 该方法用于判断是否为firefox浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/firefox/),
            os_boolean = !!regular_result;
        return os_boolean;
    },
    qq: function () {
        /**
         * 该方法用于判断是否为qq浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('mqqbrowser') > -1) {
            return true;
        } else {
            return false;
        }
    },
    MSIE: function () {
        /**
         * 该方法用于判断是否为MSIE浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('msie') > -1) {
            return true;
        } else {
            return false;
        }
    },
    LBBROWSER: function () {
        /**
         * 该方法用于判断是否为猎豹浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('lbbrowser') > -1 || this._ua.indexOf('liebao') > -1) {
            return true;
        } else {
            return false;
        }
    },
    miui: function () {
        /**
         * 该方法用于判断是否为miui浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('miuibrowser') > -1) {
            return true;
        } else {
            return false;
        }
    },
    chrome: function () {
        /**
         * 该方法用于判断是否为chrome浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        if (this._ua.indexOf('chrome') > -1) {
            return true;
        } else {
            return false;
        }
    },
    safari: function () {
        /**
         * 该方法用于判断是否为safari浏览器，如果是返回ture 否 返回 false
         * window下safari浏览器无法判断
         * @return ture或者false
         */
        var regular_result = this._ua.match(/version.*safari/),
            os_boolean = false;
        if (this.ios() || this.ipad() || this.iphone() || this.ipod())
            os_boolean = !!regular_result;
        this.safari = function () {
            return os_boolean;
        };
        return os_boolean;
    },
    silk: function () {
        /**
         * 该方法用于判断是否为silk浏览器，如果是返回ture 否 返回 false
         * @return ture或者false
         */
        var regular_result = this._ua.match(/silk/),
            os_boolean = !!regular_result;
        this.silk = function () {
            return os_boolean;
        };
        return os_boolean;
    },

    version: function () {
        /**
         * 该方法返回系统的版本
         * @return 系统版本号例如 5.5.1
         */
        if (this.android() || this.ios())
            return this._version_value;
        else
            return 0;
    },
    getSystem: function (ua) {
        /**
         * 根据系统类型返回客户设备类型。
         */
        if (!ua)
            return undefined;
        this._ua = ua;
        var type = "other";
        if (this._ua.indexOf("nt 5.0") > -1) {
            type = "win2000";
        } else if (this._ua.indexOf("nt 5.1") > -1) {
            type = "winxp";
        } else if (this._ua.indexOf("nt 5.2") > -1) {
            type = "win2003";
        } else if (this._ua.indexOf("nt 6.0") > -1) {
            type = "vista";
        } else if (this._ua.indexOf("nt 6.1") > -1) {
            type = "win7";
        } else if (this._ua.indexOf("nt 6.2") > -1) {
            type = "win8";
        } else if (this._ua.indexOf("windows phone") != -1 || this._ua.indexOf("win32") != -1) {
            type = "windows phone";
        } else if ((this._ua.indexOf("iphone") > -1) || (this._ua.indexOf("ipod") > -1)) {
            type = "ios";
        } else if (this._ua.indexOf("android") != -1) {
            type = "android";
        } else if (this._ua.indexOf("nokia") != -1) {
            type = "nokia";
        } else if (this._ua.indexOf("macintosh") != -1 || this._ua.indexOf("mac os x") != -1) {
            type = "mac";
        } else if (this._ua.indexOf("linux") != -1) {
            type = "linux";
        }
        return type;
    },
    getOs: function (ua) {
        /**
         * 该方法用于获取浏览器类型
         *
         */
        if (!ua)
            return undefined;
        this._ua = ua;
        var type = 'other';
        if (this.silk()) {
            type = 'silk';
        } else if (this._360browser()) {
            type = '360';
        } else if (this.LBBROWSER()) {
            type = 'liebao';
        } else if (this.baidu()) {
            type = 'baidu';
        } else if (this.uc()) {
            type = 'uc';
        } else if (this.opera()) {
            type = 'opera';
        } else if (this.qq()) {
            type = 'qq';
        } else if (this.firefox()) {
            type = 'firefox';
        } else if (this.miui()) {
            type = 'miui';
        } else if (this.chrome()) {
            type = 'chrome';
        } else if (this.safari()) {
            type = 'safari';
        } else if (this.MSIE()) {
            type = 'IE';
        }
        return type;
    },
    getBrand: function (ua) {
        /**
         * 该方法用于手机类型
         *
         */
        if (!ua)
            return undefined;
        this._ua = ua;
        var type = "other";
        if (this.samsung()) {
            type = "samsung";
        } else if (this.lg()) {
            type = "lg";
        } else if (this.huawei()) {
            type = "huawei";
        } else if (this.htc()) {
            type = "htc";
        } else if (this.lenovo()) {
            type = "lenovo";
        } else if (this.ipod()) {
            type = "ipod";
        } else if (this.ipad()) {
            type = "ipad";
        } else if (this.iphone()) {
            type = "iphone";
        } else if (this.coolpad()) {
            type = "coolpad";
        } else if (this.mi()) {
            type = "mi";
        } else if (this.nokia()) {
            type = "nokia";
        } else if (this.oppo()) {
            type = "oppo";
        } else if (this.sony()) {
            type = "sony";
        } else if (this.Pantech()) {
            type = "Pantech";
        } else if (this.kliton()) {
            type = "kliton";
        } else if (this.vivo()) {
            type = "vivo";
        } else if (this.Amazon()) {
            type = "Amazon";
        } else if (this.Hisense()) {
            type = "Hisense";
        } else if (this.GIONEE()) {
            type = "GIONEE";
        } else if (this.Haier()) {
            type = "Haier";
        } else if (this.Chrome_mobile()) {
            type = "Chrome";
        } else if (this.moto()) {
            type = "moto";
        } else if (this.TCL()) {
            type = "TCL";
        }
        return type;
    },
    getBrowserVersion: function (ua) {
        /**
         * 该方法用于获取浏览器版本
         *
         */
        if (!ua)
            return undefined;
        this._ua = ua;
        var retval = "";
        var regStr_ie = /msie [\d.]+;/gi;
        var regStr_ff = /firefox\/[\d.]+/gi
        var regStr_chrome = /chrome\/[\d.]+/gi;
        var regStr_saf = /safari\/[\d.]+/gi;
        var regStr_uc = /ucbrowser\/[\d.]+/gi;
        var regStr_miui = /miuibrowser\/[\d.]+/gi;
        var regStr_opr = /opr\/[\d.]+/gi;
        var regStr_mqq = /mqqbrowser\/[\d.]+/gi;
        //IE
        if (this._ua.indexOf("msie") > 0) {
            retval = this._ua.match(regStr_ie);
        }
        //uc
        else if (this.uc()) {
            retval = this._ua.match(regStr_uc);
        }
        //opr
        else if (this.opera()) {
            retval = this._ua.match(regStr_opr);
        }
        //miui
        else if (this.miui()) {
            retval = this._ua.match(regStr_miui);
        }
        //uc
        else if (this.qq()) {
            retval = this._ua.match(regStr_mqq);
        }
        //firefox
        else if (this._ua.indexOf("firefox") > 0) {
            retval = this._ua.match(regStr_ff);
        }
        //Chrome
        else if (this._ua.indexOf("chrome") > 0) {
            retval = this._ua.match(regStr_chrome);
        }
        //Safari 过滤andriod
        else if (this.safari() && this._ua.indexOf("safari") > 0 && this._ua.indexOf("chrome") < 0) {
            retval = this._ua.match(regStr_saf);
        }
        var verinfo = (retval + "").replace(/[^0-9.]/ig, "");
        return verinfo;
    },
    getBrowserKernel: function (ua) {
        /**
         * 该方法用于获取浏览器内核
         *
         */
        if (!ua)
            return undefined;
        this._ua = ua;
        type = 'other';
        if (this._ua.indexOf('trident') > -1) { //IE内核
            type = "trident";
        } else if (this._ua.indexOf('presto') > -1) { //opera内核
            type = "presto";
        } else if (this._ua.indexOf('applewebkit') > -1) { //苹果、谷歌内核
            type = "webKit";
        } else if (this._ua.indexOf('gecko') > -1 && this._ua.indexOf('khtml') == -1) { //火狐内核
            type = "gecko";
        }
        return type;
    },
    getClientType: function (ua) {
        /**
         * 该方法用于判断是手机还是PC
         *
         */
        if (!ua)
            return 2;
        this._ua = ua;
        var type = this.getSystem(this._ua);
        if (type == "linux" || type == "android" || type == "ios" || type == "nokia") {
            return 2;
        } else {
            return 1;
        }
    },
    getExplorerInfo: function (ua) {
        if (ua) {
            this._ua = ua.toLocaleLowerCase();
            var params = {
                system: this.getSystem(this._ua),
                explorer: this.getOs(this._ua),
                explorerversion: this.getBrowserVersion(this._ua),
                explorekernel: this.getBrowserKernel(this._ua),
                brand: this.getBrand(this._ua),
                usermac: '',
                param: ua
            }
            return params;
        } else
            return undefined;
    }
}
module.exports = ExplorerHelper;