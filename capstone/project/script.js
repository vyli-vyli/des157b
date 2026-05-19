(function() {

    "use strict"; 

    document.addEventListener("DOMContentLoaded", (event) => {

        gsap.registerPlugin(SplitText)
        let split = new SplitText("#title h1", {
            type: "chars"
        });

        var tl = gsap.timeline({repeat: -1}); 

        tl.from(split.chars, {
            duration: 0.1, 
            opacity: 0, 
            stagger: 0.25, 
            ease: "power1.in"
        }) 

        .to ({}, {duration: 3})

        .to (split.chars, {
            duration: 0.1, 
            opacity: 0, 
            stagger: {
                each: 0.25, 
                from: "end" 
            }, 
            ease: "power1.out",
        }) 

        .to ({}, {duration: 3})

        const textElement = document.querySelector("#title h1");
        textElement.insertAdjacentHTML('afterend', '<span class="typing-cursor"></span>');

    });    

}) (); 