(function() {
    "use strict"; 

    const sound = document.querySelector("#sound");
    const backgroundmusic = new Audio("music/backgroundmusic.mp3");
    const sfx = new Audio("music/soundeffect.mp3"); 

    backgroundmusic.loop = true; 
    
    sound.addEventListener("click", function() {
        if (backgroundmusic.paused) {
            backgroundmusic.play(); 
        } else {
            backgroundmusic.pause(); 
        }
    }); 

    function spawnFood() {
        let selectedImage; 
        let foodWidth; 

        if (Math.random() < 0.2) {
            selectedImage = "images/lemon.png"; 
            foodWidth = 300; 
        } else {
            selectedImage = "images/fish.png"; 
            foodWidth = 100; 
        }

        const $food = $(`<img src="${selectedImage}" class ="food" alt="food">`); 

        const maxX = $(window).width() - foodWidth; 
        const maxY = $(window).height() - foodWidth; 
        const randomX = Math.floor(Math.random() * maxX); 
        const randomY = Math.floor(Math.random() * maxY); 

        $food.css({
            left: randomX, 
            top: randomY, 
            position: "absolute",
            width: foodWidth + "px"
        })

        $("body").append($food); 

        $food.draggable( {
            revert: "invalid"
        }); 
    }

    $("#cat").droppable({
        accept: ".food", 
        tolerance: "fit", 
        drop: function(event, ui) {
            sfx.currentTime = 0;
            sfx.play(); 

            const droppedFood = ui.draggable.attr("src"); 

            if (droppedFood.includes("lemon.png")) {
                document.querySelector("#cat").src = "images/cat_reaction.png";
                setTimeout(function() {
                    document.querySelector("#cat").src = "images/cat.png"; 
                }, 800); 
            } 

            ui.draggable.remove(); 
            spawnFood();
        }
    }); 

    spawnFood(); 

    document.addEventListener("DOMContentLoaded", (event) => {

        gsap.registerPlugin(SplitText)
        let split = new SplitText("#credits", {
            type: "words"
        });

        var tl = gsap.timeline({repeat: -1}); 

        tl.from(split.words, {
            y: 30, 
            autoAlpha: 0, 
            stagger: 0.05, 
            ease: "back.out(1.7)"
        }) 

        .to ({}, {duration: 2})
        .to(split.words, {
            y: -30, 
            autoAlpha: 0, 
            stagger: 0.05
        })

    });    

}) (); 