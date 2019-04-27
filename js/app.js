
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
    aboutContainOut();
    projectsContainOut();
    potlatchContainOut();
    bannerNameIn();
});

//ABOUT ME
document.querySelector(".m_about").addEventListener("click",function(){
    bannerNameOut();
    projectsContainOut();
    potlatchContainOut();
    aboutContainIn();
});

//PROJECTS
document.querySelector(".m_projects").addEventListener("click",function(){
    bannerNameOut();
    aboutContainOut();
    potlatchContainOut();
    projectsContainIn();
});

//POTLATCH
document.querySelector(".m_potlatch").addEventListener("click",function(){
    bannerNameOut();
    aboutContainOut();
    projectsContainOut();
    potlatchContainIn();
});


//---------------------------------------------------------------
//FUNCTIONS
//aboutContain functions
function aboutContainOut(){
    document.querySelector(".about_contain").classList.add("fadeOut");
    document.querySelector(".about_contain").classList.add("hidden");
}

function aboutContainIn(){
    document.querySelector(".about_contain").classList.add("fadeIn");
    document.querySelector(".about_contain").classList.remove("fadeOut");
    document.querySelector(".about_contain").classList.remove("hidden");
}

//bannerName functions
function bannerNameOut(){
    document.querySelector(".banner_name").classList.add("fadeOut");
    document.querySelector(".banner_name").classList.add("hidden");
}

function bannerNameIn(){
    document.querySelector(".banner_name").classList.add("fadeIn");
    document.querySelector(".banner_name").classList.remove("fadeOut");
    document.querySelector(".banner_name").classList.remove("hidden");
}

//projectsContain functions
function projectsContainOut(){
    document.querySelector(".projects_contain").classList.add("fadeOut");
    document.querySelector(".projects_contain").classList.add("hidden");
}

function projectsContainIn(){
    document.querySelector(".projects_contain").classList.add("fadeIn");
    document.querySelector(".projects_contain").classList.remove("fadeOut");
    document.querySelector(".projects_contain").classList.remove("hidden");
}

//potlatchContain functions
function potlatchContainOut(){
    document.querySelector(".potlatch_contain").classList.add("fadeOut");
    document.querySelector(".potlatch_contain").classList.add("hidden");
}

function potlatchContainIn(){
    document.querySelector(".potlatch_contain").classList.add("fadeIn");
    document.querySelector(".potlatch_contain").classList.remove("fadeOut");
    document.querySelector(".potlatch_contain").classList.remove("hidden");
}