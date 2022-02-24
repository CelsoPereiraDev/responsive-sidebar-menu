/* ===== SHOW NAVBAR =====*/
const showNavbar = (toggleId, navId, bodyId,headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)


    //  VALIDATE THAT ALL VARIABLES EXIST
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // SHOW NAVBAR
            nav.classList.toggle('show')
            // CHANGE ICON
            toggle.classList.toggle('bx-x')
            // ADD PADDING TO BODY
            bodypd.classList.toggle('body-pd')
            //ADD PADDING TO HEADER
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

/* ===== LINK ACTIVE =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if (linkColor){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))