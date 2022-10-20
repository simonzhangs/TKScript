// ==UserScript==
// @name         个人网页助手（虎牙简洁版、知乎简洁版、bilibili）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  个人自动脚本
// @author       simonzhangs、松本松
// @match        https://bbs.tampermonkey.net.cn/
// @match        https://www.huya.com/*
// @match        https://zhuanlan.zhihu.com/*
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        unsafeWindow
// @grant        GM_addStyle
// @require      https://scriptcat.org/lib/513/1.2.1/ElementGetter.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let elmGetter = null;
    if(!elmGetter) {
        elmGetter = new ElementGetter();
    }

    // huya 直播纯净版（移除无效栏目）start

    elmGetter.get('.room-core-r',undefined,2000).then(item => {
        if(item) {item.style.display = 'none';}
    })

    GM_addStyle(`
         #J_liveListHeader,#J_listAdx,
         .duya-header-ad,
         #J_hyHdNavItemCloudGame,J_hyHdNavItemGame,
         .sidebar-banner,sidebar-bottom
         {display: none !important}
    `)

    elmGetter.get('#J_listAdx',undefined).then(item => {
        //if(item) {item.style.display = 'none';}
    })
    elmGetter.get('#J_liveListHeader').then(item => {
        //if(item) {item.style.display = 'none';}
    })


    const roomSideBar = document.querySelector('.room-core-r');
    const roomFooter = document.querySelector('.room-footer');
    const roomBgImg = document.querySelector('#J_spbg') || document.querySelector('.special-bg');

    if(roomSideBar) {
        //roomSideBar.style.display = 'none';
    }
    if(roomFooter){
        roomFooter.style.display = 'none';
    }
    if(roomBgImg){
        roomBgImg.style.display = 'none';
    }
    // 虎牙直播栏目上方推荐
    const boxRecom = document.querySelector('.box-recom');
    if(boxRecom){
        boxRecom.remove();
    }

    // 虎牙右侧帮助栏目
    window.onload = function(){
        // onload 文档加载完成后，才有DOM节点（此DOM节点依赖js加载后才会呈现）
        let selectorStr = '.helperbar-root--12hgWk_4zOxrdJ73vtf1YI';
        const helperBar = document.querySelector(selectorStr);
        if(helperBar){
            helperBar.style.display = 'none';
        }
        const playerGiftWrap = document.querySelector('#player-gift-wrap');
        if(playerGiftWrap){
            playerGiftWrap.style.display = 'none';
        }
        const roomHdR = document.querySelector('#J_roomHeader > #J_roomHdR');

        if(roomHdR) {
            roomHdR.style.display = 'none';
        }

        const zhihuBtn = document.querySelector('.Modal-closeButton');
        zhihuBtn.click();
    }

    // huya 直播纯净版（移除无效栏目）end

    // bilibili
    GM_addStyle(`
    #live_recommand_report,#right-bottom-banner,
    .left-loc-entry,.v-popover-wrap > .download-client-trigger__icon,
    .v-popover-wrap > default-entry,
    .video-page-special-card-small,
    .live-sidebar-ctnr
    {display:none}
    `)


})();