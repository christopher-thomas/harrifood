(function () {

    document.addEventListener("DOMContentLoaded", function () {

        var menuOpen = document.getElementById("main-menu-open");
        var menuClose = document.getElementById("main-menu-close");
        var menu = document.getElementById("main-menu");

        menuOpen.addEventListener('click', function(){

            // If menu doesn't have the open class, apply it
            if(!menu.className.match(/\open\b/)){

                menu.className = menu.className.concat(" open");

            }

        });

        menuClose.addEventListener('click', function(){

            // If menu has the open class, remove it
            if(menu.className.match(/\open\b/)){

                menu.className = menu.className.replace(" open", "");

            }

        });

    });

}())


