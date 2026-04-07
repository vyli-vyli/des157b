(function() {
    'use strict';

    const button = document.querySelector("button");
    const header = document.querySelector("header img"); 
    const desktopHeader = document.querySelector("#dayDesktopHeader"); 
    const body = document.querySelector("body");
    const banner = document.querySelector("#banner button img");
    const bannerRays = document.querySelector("#banner #outsiderays");
    const sections = document.querySelectorAll("section")
    let mode = "light";
    const footer = document.querySelector("footer"); 

    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.className = 'switch';

            header.src = "images/mobile_logo_night.svg"
            banner.src = "images/moon.png"
            desktopHeader.srcset = "images/desktop_logo_night.svg"
            bannerRays.src = "images/small_stars.png"

            footer.innerHTML = `<p>✨💫 DESIGN & CODE BY <a href="mailto:&#118;&#121;&#108;&#105;&#064;&#117;&#099;&#100;&#097;&#118;&#105;&#115;&#046;&#101;&#100;&#117;">VICKY LI</a> 💫✨ </p>`;
            
            mode = 'dark';
        } else {
            body.removeAttribute('class');

            header.src = "images/mobile_logo.svg"
            desktopHeader.srcset = "images/desktop_logo.svg"
            banner.src = "images/sun_base.png"
            bannerRays.src = "images/sun_rays.png"
            
            footer.innerHTML = `<p>☀️🌻DESIGN & CODE BY <a href="mailto:&#118;&#121;&#108;&#105;&#064;&#117;&#099;&#100;&#097;&#118;&#105;&#115;&#046;&#101;&#100;&#117;">VICKY LI</a> 🌻☀️ </p>`;

            mode = 'light'
        }
    })
})()