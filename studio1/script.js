(function() {
    "use strict"; 

    console.log("reading js");

    const mainVideo = document.querySelector("#mainVideo");
    const fs = document.querySelector("#icon"); 
    const video1 = document.querySelector("#video1"); 
    const video2 = document.querySelector("#video2"); 
    const video3 = document.querySelector("#video3");

    const intervalID = setInterval(checkTime, 1000); 
    const fadeIn = {
        start: [0, 2, 5], 
        stop: [10], 
        line: [video1, video2, video3]
    }; 

    let replaced = false; 
    let compilation = null; 

    const newVideo = `
        <div id="text">
            <p>"The best part about pictures is that even when the people in the photo change, the memory it contains never will."</p>
            <p>-Andy Warhol</p>
        </div>

        <video class="hidden" id="compilation" preload="metadata" muted playsinline>

            <source src="media/compilation.webm" type="video/webm">
            <source src="media/compilation.mp4" type="video/mp4">

            <p>Your browser doesn't support HTML5 video. Here is a <a href="media/compilation.mp4">link to the video</a>.</p>

        </video>`; 

    fs.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen(); 
        } else {
            document.exitFullscreen(); 
        }
    }); 

    function checkTime() {
        for (let i = 0; i < fadeIn.start.length; i++) {
            if (fadeIn.start[i] < video1.currentTime) {
                fadeIn.line[i].className = "showing";
            }; 

            if (fadeIn.line[i].paused) {
            fadeIn.line[i].play();
            }; 
        }; 

        if (!replaced && video1.currentTime >= 8.5) {
            replaced = true; 
            mainVideo.classList.add("fade-out");
            clearInterval(intervalID); 
        };

        // if (compilation && compilation.currentTime >= 18.5) {
        //     document.querySelector("html").className = "ending"; 
        // }; 
    }; 

    mainVideo.addEventListener("animationend", function(event) {

        if (event.animationName === "fadeOut") {
            mainVideo.innerHTML = newVideo;

            mainVideo.classList.remove("fade-out");
            mainVideo.classList.add("new");

            setTimeout(function() {
                const text = document.querySelector("#text");
                if (text) {
                    
                    setTimeout(function() {
                        if (text) {
                            text.remove(); 
                            compilation = document.querySelector("#compilation"); 
                            compilation.load(); 
                            compilation.classList.remove("hidden");
                            compilation.play(); 
                            
                        }; 
                    }, 1000); 
                }; 
            }, 3000);
            
        }; 
    });

}) (); 