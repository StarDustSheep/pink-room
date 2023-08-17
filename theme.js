// REF https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus/blob/main/theme.js
window.theme = {};

/* 颜色配置文件列表 */
window.theme.colors = [
    'config/橙色系界面.css',
    'config/蓝色系界面.css',
    'config/绿色系界面.css',
];

/* DOM 节点 ID */
window.theme.IDs = {
    STYLE_COLOR: 'custom-id-style-theme-color',
    BUTTON_TOOLBAR_CHANGE_COLOR: 'custom-id-button-toolbar-change-color',
    LOCAL_STORAGE_COLOR_HREF: 'pink-room-color-href',
};

/* 循环迭代器 */
window.theme.Iterator = function* (items) {
    // REF [ES6中的迭代器(Iterator)和生成器(Generator) - 小火柴的蓝色理想 - 博客园](https://www.cnblogs.com/xiaohuochai/p/7253466.html)
    for (let i = 0; true; i = (i + 1) % items.length) {
        yield items[i];
    }
}

/**
 * 加载样式文件
 * @params {string} href 样式地址
 * @params {string} id 样式 ID
 */
window.theme.loadStyle = function (href, id = null) {
    let style = document.createElement('link');
    if (id) style.id = id;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = href;
    document.head.appendChild(style);
}

/**
 * 更新样式文件
 * @params {string} id 样式文件 ID
 * @params {string} href 样式文件地址
 */
window.theme.updateStyle = function (id, href) {
    let style = document.getElementById(id);
    if (style) {
        style.setAttribute('href', href);
    }
    else {
        window.theme.loadStyle(href, id);
    }
}

/**简单判断目前思源是否是手机模式 */
function isPhone() {
    return document.getElementById("toolbarName") != null && document.getElementById("toolbar") == null;
}

setTimeout(() => {
    let drag = document.getElementById('drag'); // 标题栏
    if (isPhone()) drag = document.getElementById('toolbarName'); // 手机端的标题栏不太一样
    const themeStyle = document.getElementById('themeStyle'); // 当前主题引用路径
    if (drag && themeStyle) {
        const THEME_ROOT = new URL(themeStyle.href).pathname.replace('theme.css', ''); // 当前主题根目录
        /* 通过颜色配置文件列表生成完整 URL 路径 */
        const colors_href = [];
        window.theme.colors.forEach(color => colors_href.push(`${THEME_ROOT}${color}`));
        window.theme.iter = window.theme.Iterator(colors_href);
        var color_href = window.siyuan?.storage[window.theme.IDs.LOCAL_STORAGE_COLOR_HREF];
        if (!color_href) {
            localStorage.getItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF);
        }
        if (color_href) { // 将迭代器调整为当前配色
            for (let i = 0; i < window.theme.colors.length; ++i) {
                if (window.theme.iter.next().value === color_href) break;
            }
        }
        else { // 迭代器第一个为当前配色
            color_href = window.theme.iter.next().value;
            localStorage.setItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
            setLocalStorageVal(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
        }

        /* 加载配色文件 */
        window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);

        if (isPhone()) {
            // 如果是手机端，就直接给标题栏塞个图标，不然样式不对
            const doc = new DOMParser().parseFromString(`<svg id="${window.theme.IDs.BUTTON_TOOLBAR_CHANGE_COLOR}" class="toolbar__icon"><use xlink:href="#iconTheme"></use></svg>`, 'text/html')
            const svg_change_color = doc.getElementById(window.theme.IDs.BUTTON_TOOLBAR_CHANGE_COLOR)
            svg_change_color.addEventListener('click', e => {
                color_href = window.theme.iter.next().value;
                localStorage.setItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
                setLocalStorageVal(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
                window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);
            });
            drag.insertAdjacentElement('afterend', svg_change_color);
            return;
        }

        const button_change_color = document.createElement('button'); // 切换主题颜色按钮
        button_change_color.id = window.theme.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
        button_change_color.className = 'toolbar__item b3-tooltips b3-tooltips__sw';
        button_change_color.ariaLabel = '切换主题颜色';
        button_change_color.innerHTML = `<svg><use xlink:href="#iconTheme"></use></svg>`;
        button_change_color.addEventListener('click', e => {
            color_href = window.theme.iter.next().value;
            localStorage.setItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
            setLocalStorageVal(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
            window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);
        });
        // REF [JS DOM 编程复习笔记 -- insertAdjacentHTML（九） - 知乎](https://zhuanlan.zhihu.com/p/425616377)
        drag.insertAdjacentElement('afterend', button_change_color);
        drag.insertAdjacentHTML('afterend', `<div class="protyle-toolbar__divider"></div>`);

    }
}, 0);

/**
 * 发送API请求
 * @param {*} data 
 * @param {*} url 
 * @returns 
 */
async function postRequest(data, url){
    let result;
    await fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            "Authorization": "Token ",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        result = response.json();
    });
    return result;
}
/**
 * 设置LocalStorage
 * @param {*} ikey 
 * @param {*} ival 
 */
async function setLocalStorageVal(ikey, ival) {
    let url = "/api/storage/setLocalStorageVal";
    let response = await postRequest({app: getAppId(), key: ikey, val: ival}, url);
    if (window.top.siyuan.storage != undefined) {
        window.top.siyuan.storage[ikey] = ival;
    }
    function getAppId() {
        let wsurl = window.top.siyuan.ws.ws.url;
        let appIdMatchResult = wsurl.match(new RegExp(`(\\?app=|&app=)[^&]+`, "g"));
        if (appIdMatchResult.length == 1){
            return appIdMatchResult[0].substring(5);
        }else if (appIdMatchResult.length > 1) {
            console.warn("正则获取appId错误", appIdMatchResult);
            return appIdMatchResult[0].substring(5);
        }else {
            console.error("正则获取appId错误", appIdMatchResult);
            return "";
        }
    }
}

// 看板娘 功能测试中……
// function loadScript(url, type = 'module') {
//     let script = document.createElement('script');
//     script.setAttribute('type', type);
//     script.setAttribute('src', url);
//     document.head.appendChild(script);
// }
// loadScript("D:/创作/stevenjoezhang - live2d-widget-master/autoload.js");

// function loadScript(url, type = 'module') {
//     let script = document.createElement('script');
//     script.setAttribute('type', type);
//     script.setAttribute('src', url);
//     document.head.appendChild(script);
// }
// loadScript("D:/创作/fghrsh - live2d_demo-master/assets/autoload.js")