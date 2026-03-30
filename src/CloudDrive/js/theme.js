let ThemeButton = document.querySelectorAll(".top_nav .theme button"); // 注意：通过querySelectorAll来获取的Dom元素是一个 NodeList的伪数组
let currentTheme = "light"; // 当前主题
initTheme(); // 初始化主题

// 通过 forEach循环来遍历dom集合并给点击事件绑定一个处理函数
ThemeButton.forEach(function(btn){  
    btn.addEventListener('click',function(){
        switchTheme();
    })
})

/**
 * 
 * @returns {void} 无返回值 
 * @description 切换主题
 */
function switchTheme()
{
    currentTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(currentTheme);
}


/**
 * 
 * @returns {string} 初始化主题
 */
function initTheme()
{
    currentTheme = localStorage.getItem("theme");
    if(!currentTheme) currentTheme = "light";
    setTheme(currentTheme);
}

/**
 * 
 * @param {string} theme 
 * @description 设置主题
 */
function setTheme(theme)
{
    if(typeof(theme) === "string" && theme === "light" || theme === "dark")
    {
        document.body.className  = theme;
        localStorage.setItem("theme",theme);
        currentTheme = theme;
    }
    else
    {
        throw Error("No theme!!");
    }
}