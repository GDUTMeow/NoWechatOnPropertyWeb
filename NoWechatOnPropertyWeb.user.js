// ==UserScript==
// @name         我不要用微信打开 GDUT 总务处！
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  绕过广东工业大学微信UA检测
// @author       GamerNoTitle
// @match        http://hqgl.gdut.edu.cn/wechat/*
// @run-at       document-start
// @grant        none
// @icon         https://www.gdut.edu.cn/favicon.ico
// @iconURL      https://www.gdut.edu.cn/favicon.ico
// ==/UserScript==

(function () {
    "use strict";

    // 覆盖浏览器UA检测
    Object.defineProperty(navigator, "userAgent", {
        value:
            "Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36 MicroMessenger/8.0.25.2200(0x28001951)",
        configurable: false,
        writable: false,
    });

    // 覆盖原网站的检测函数
    window.isWeiXin = function () {
        return true;
    };
})();
