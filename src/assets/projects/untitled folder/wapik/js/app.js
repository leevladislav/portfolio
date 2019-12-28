function openNav() {
    document.getElementById("mobile-nav").style.width = "300px";
    $('.mob_menu_bg').addClass('show');
}


function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
    $('.mob_menu_bg').removeClass('show');
}