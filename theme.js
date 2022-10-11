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
    LOCAL_STORAGE_COLOR_HREF:'pink-room-color-href',
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

setTimeout(() => {
    const drag = document.getElementById('drag'); // 标题栏
    const themeStyle = document.getElementById('themeStyle'); // 当前主题引用路径
    if (drag && themeStyle) {
        const THEME_ROOT = new URL(themeStyle.href).pathname.replace('theme.css', ''); // 当前主题根目录
        /* 通过颜色配置文件列表生成完整 URL 路径 */
        const colors_href = [];
        window.theme.colors.forEach(color => colors_href.push(`${THEME_ROOT}${color}`));
        window.theme.iter = window.theme.Iterator(colors_href);
        var color_href = localStorage.getItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF);
        if (color_href) { // 将迭代器调整为当前配色
            for (let i = 0; i < window.theme.colors.length; ++i) {
                if (window.theme.iter.next().value === color_href) break;
            }
        }
        else { // 迭代器第一个为当前配色
            color_href = window.theme.iter.next().value;
            localStorage.setItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
        }

        /* 加载配色文件 */
        window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);

        const button_change_color = document.createElement('button'); // 切换主题颜色按钮
        button_change_color.id = window.theme.IDs.BUTTON_TOOLBAR_CHANGE_COLOR;
        button_change_color.className = 'toolbar__item b3-tooltips b3-tooltips__sw';
        button_change_color.ariaLabel = '切换主题颜色';
        button_change_color.innerHTML = `<svg><use xlink:href="#iconTheme"></use></svg>`;
        button_change_color.addEventListener('click', e => {
            color_href = window.theme.iter.next().value;
            localStorage.setItem(window.theme.IDs.LOCAL_STORAGE_COLOR_HREF, color_href);
            window.theme.updateStyle(window.theme.IDs.STYLE_COLOR, color_href);
        });
        // REF [JS DOM 编程复习笔记 -- insertAdjacentHTML（九） - 知乎](https://zhuanlan.zhihu.com/p/425616377)
        drag.insertAdjacentElement('afterend', button_change_color);
        drag.insertAdjacentHTML('afterend', `<div class="protyle-toolbar__divider"></div>`);

    }
}, 0);