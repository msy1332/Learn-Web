let ThemeButton = document.querySelectorAll(".top_nav .theme .button");
let theme = "light";
initTheme();

ThemeButton.forEach(function(btn){
    dom.addEventListener('click',function(){
        switchTheme();
    })
})

/**
 * 
 * @param {string} theme 
 * @returns {void} 无返回值 
 * @description 切换主题
 */
function switchTheme()
{
    // theme
    localStorage.setItem("theme",theme);
    document.body.class = theme;
}


/**
 * 
 * @returns {string} 获取当前主题
 */
function initTheme()
{
    theme = localStorage.getItem("theme");
    if(theme)
    {
        localStorage.setItem("theme","light");
        theme = "light";
    }
}