(function () {
    //
    const navList = document.querySelector('.igp-menu__nav')
    const mobileMenu = document.querySelector('.igp-menu__mobile')

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
        navList.classList.toggle('active')
    })

    document.querySelectorAll('.igp-menu__navli').forEach(n => n.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
        navList.classList.remove('active')
    }))

    // 
    const cookies = document.querySelector('[ma-igpCook]')
    const cookiesButton = document.querySelector('[ma-igpCookBtn]')

    cookiesButton.addEventListener('click', () => {
        return cookies.remove('[ma-igpCookBtn]')
    })

    //
    if (document.addEventListener) {
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            return false;
        });
    } else {
        document.attachEvent("oncontextmenu", function (e) {
            e = e || window.event;
            e.returnValue = false;
            return false;
        });
    }
})()