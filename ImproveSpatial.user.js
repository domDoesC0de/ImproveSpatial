// ==UserScript==
// @name         ImproveSpatial
// @namespace    https://app.spatial.chat/
// @version      0.2
// @description  No avatar decoraction, video/avatar as rectangle
// @author       dom
// @match        https://app.spatial.chat/s/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spatial.chat
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Hide avatar decoration
    GM_addStyle("img[class^=_host_]{ display: none; }");

    // Remove border radius to make the video/avatar a rectangle
    GM_addStyle("div.remote-audio-indicator { border-radius: 0 !important; }");
    GM_addStyle("div.user-initials { border-radius: 0 !important; }");
    GM_addStyle("video.local-video-track { border-radius: 0 !important; }");
    GM_addStyle("div.tracks.video { border-radius: 0 !important; }");
    GM_addStyle("div.sound-circle { border-radius: 0 !important; }");

})();