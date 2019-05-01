$(document).ready(function(){
    $(window).resize(function() {
        var width = $(window).width();
            if (width >= 768) {
                if($(".about_contain").hasClass("hidden") == false){
                    $(".about_contain .page_contain_text").addClass("wt_center");
                    $(".page_contain_text").css({
                        marginLeft: "unset"
                    });
                }
            }
            else if (width < 768) {
                if($(".about_contain").hasClass("hidden") == false){
                    $(".about_contain .page_contain_text").removeClass("wt_center");
                    $(".page_contain_text").css({
                        marginLeft: "7.5%"
                    });
                }
            }
    });	
});


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
    artworkContainOut();
    potlatchContainOut();
    ambergrisContainOut();
    bioContainOut();
    pressContainOut();
    bannerNameIn();
});

//ABOUT ME
document.querySelector(".m_about").addEventListener("click",function(){
    bannerNameOut();
    projectsContainOut();
    artworkContainOut();
    potlatchContainOut();
    ambergrisContainOut();
    bioContainOut();
    pressContainOut();
    aboutContainIn();
});

//PROJECTS
document.querySelector(".m_projects").addEventListener("click",function(){
    bannerNameOut();
    aboutContainOut();
    artworkContainOut();
    potlatchContainOut();
    ambergrisContainOut();
    bioContainOut();
    pressContainOut();
    projectsContainIn();
});

//ARTWORKS
document.querySelector(".m_artwork").addEventListener("click",function(){
    bannerNameOut();
    aboutContainOut();
    projectsContainOut();
    potlatchContainOut();
    ambergrisContainOut();
    bioContainOut();
    pressContainOut();
    artworkContainIn();
});

//POTLATCH
document.querySelector(".m_potlatch").addEventListener("click",function(){
    bannerNameOut();
    aboutContainOut();
    projectsContainOut();
    artworkContainOut();
    ambergrisContainOut();
    bioContainOut();
    pressContainOut();
    potlatchContainIn();
});

//AMBERGRIS
document.querySelector(".m_ambergris").addEventListener("click",function(){
    bannerNameOut();
    aboutContainOut();
    projectsContainOut();
    artworkContainOut();
    potlatchContainOut();
    bioContainOut();
    pressContainOut();
    ambergrisContainIn();
});

//BIO
// document.querySelector(".m_bio").addEventListener("click",function(){
//     bannerNameOut();
//     aboutContainOut();
//     projectsContainOut();
//     potlatchContainOut();
//     ambergrisContainOut();
//     pressContainOut();
//     bioContainIn();
// });

//PRESS
document.querySelector(".m_press").addEventListener("click",function(){
    bannerNameOut();
    aboutContainOut();
    projectsContainOut();
    artworkContainOut();
    potlatchContainOut();
    ambergrisContainOut();
    bioContainOut();
    pressContainIn();
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

//artworkContain functions
function artworkContainOut(){
    document.querySelector(".artwork_contain").classList.add("fadeOut");
    document.querySelector(".artwork_contain").classList.add("hidden");
}

function artworkContainIn(){
    document.querySelector(".artwork_contain").classList.add("fadeIn");
    document.querySelector(".artwork_contain").classList.remove("fadeOut");
    document.querySelector(".artwork_contain").classList.remove("hidden");
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

//ambergrisContain functions
function ambergrisContainOut(){
    document.querySelector(".ambergris_contain").classList.add("fadeOut");
    document.querySelector(".ambergris_contain").classList.add("hidden");
}

function ambergrisContainIn(){
    document.querySelector(".ambergris_contain").classList.add("fadeIn");
    document.querySelector(".ambergris_contain").classList.remove("fadeOut");
    document.querySelector(".ambergris_contain").classList.remove("hidden");
}

//bioContain functions
function bioContainOut(){
    document.querySelector(".bio_contain").classList.add("fadeOut");
    document.querySelector(".bio_contain").classList.add("hidden");
}

function bioContainIn(){
    document.querySelector(".bio_contain").classList.add("fadeIn");
    document.querySelector(".bio_contain").classList.remove("fadeOut");
    document.querySelector(".bio_contain").classList.remove("hidden");
}

//pressContain functions
function pressContainOut(){
    document.querySelector(".press_contain").classList.add("fadeOut");
    document.querySelector(".press_contain").classList.add("hidden");
}

function pressContainIn(){
    document.querySelector(".press_contain").classList.add("fadeIn");
    document.querySelector(".press_contain").classList.remove("fadeOut");
    document.querySelector(".press_contain").classList.remove("hidden");
}



$(window).resize(function() {
	var width = $(window).width();
		if (width >= 768) {
			if($(".about_contain").hasClass("hidden") == false){
                $(".about_contain .page_contain_text").addClass("wt_center");
                $(".page_contain_text").css({
                    marginLeft: "unset"
                });
            }
        }
        else if (width < 768) {
            if($(".about_contain").hasClass("hidden") == false){
                $(".about_contain .page_contain_text").removeClass("wt_center");
                $(".page_contain_text").css({
                    marginLeft: "7.5%"
                });
            }
        }
});	