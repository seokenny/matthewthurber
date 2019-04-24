
document.querySelector(".mobile_nav_button").addEventListener("click",function(){
    document.querySelector(".mobile_nav_menu").classList.remove("hidden");
    document.querySelector(".mobile_nav_menu").classList.remove("slideOutRight");
    document.querySelector(".mobile_nav_menu").classList.add("slideInRight");
});

document.querySelector(".mobile_nav_menu").addEventListener("click",function(){
    document.querySelector(".mobile_nav_menu").classList.remove("slideInRight");
    document.querySelector(".mobile_nav_menu").classList.add("slideOutRight");
});

//HOMEPAGE
document.querySelector(".m_home").addEventListener("click",function(){
    document.querySelector(".page_contain").classList.add("fadeOut");
    document.querySelector(".page_contain").classList.add("hidden");
    document.querySelector(".banner_name").classList.add("fadeIn");
    document.querySelector(".banner_name").classList.remove("fadeOut");
    document.querySelector(".banner_name").classList.remove("hidden");
});

//ABOUT ME
document.querySelector(".m_about").addEventListener("click",function(){
    document.querySelector(".banner_name").classList.add("fadeOut");
    document.querySelector(".banner_name").classList.add("hidden");
    document.querySelector(".page_contain").classList.add("fadeIn");
    document.querySelector(".page_contain").classList.remove("fadeOut");
    document.querySelector(".page_contain").classList.remove("hidden");
});