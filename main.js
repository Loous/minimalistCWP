const d = document;

const $menu = d.querySelector(".menu"),
    $sliceMenu = d.querySelector(".sliceMenu");

function sliceMenu(){
    $menu.addEventListener("click", (e) => {
        if(innerWidth <= 900){
            $sliceMenu.classList.toggle("on");
            $menu.classList.toggle("menuX");

        }
        
    })

}

d.addEventListener("DOMContentLoaded", (e) => {
    sliceMenu();

})








































































































