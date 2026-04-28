(function() {
    
    "use strict"; 

    let globalData; 

    async function getData() {
        const candiesEaten = await fetch ("data.json"); 
        const data = await candiesEaten.json(); 
        const mobile = window.matchMedia("(max-width: 650px)").matches; 

        globalData = data.data_points; 

        if (mobile) {
            document.querySelector("#picker").innerHTML = createList(globalData);
        } else {
            document.querySelector("#list").innerHTML = outputHTML(globalData); 
        }
    }

    function createList(data) {
        let html =`<option>-time-</option>`; 
        const dataPoints = Object.keys(data); 
        dataPoints.forEach(function(eachPoint) {
            html += `<option value="${eachPoint}">${data[eachPoint].time}</option>`
        }); 

        return html; 

    }

    document.querySelector("#picker").addEventListener("change", function() {
        const newValue = this.value; 
        if (this.value !== "") {
            updateInterface(newValue, globalData); 
        }
    }); 

    document.querySelector("#result").addEventListener("click", function() {
        const timePicked = document.querySelector("#picker").value; 

        if (timePicked === "" || !globalData) return; 

        const candy = globalData[timePicked].gummy_candy_eaten.toString(); 
        const mood = globalData[timePicked].mood; 

        if (this.innerText === candy) {
            this.innerHTML = `<p>${mood}</p>`; 
        } else {
            this.innerHTML = `<p>${candy}</p>`; 
        }
    })

    function updateInterface(value, jsonData) {
        let html = `<p>`; 
        html += `${jsonData[value].gummy_candy_eaten}`; 
        html += `</p>`; 

        document.querySelector("#result").innerHTML = html;
    }

    function outputHTML(data) {

        let html = `<div id="times"><h2>times</h2>`; 
            for (let point of data) {
                html += `<div><p>${point.time}</p></div>`; 
            }
        html += `</div>`; 

        html += `<div id="candies"><h2>candies + mood</h2>`; 
            for (let point of data) {
                html += `<div><p>${point.gummy_candy_eaten}</p></div>`;
            }
        html += `</div>`; 
        

        return html; 
    }

    document.querySelector("#list").addEventListener("click", function(e) {
        const allCandies = document.querySelectorAll("#candies p"); 

        for (let i = 0; i < allCandies.length; i++) {

            if (e.target === allCandies[i]) {
                
                const candy = globalData[i].gummy_candy_eaten.toString(); 
                const mood = globalData[i].mood; 

                if (e.target.innerText === candy) {
                    e.target.innerText = mood; 
                } else {
                    e.target.innerText = candy; 
                }

                break; 
            }
        }
    })

    getData();

})(); 