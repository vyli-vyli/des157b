(function() {
    
    "use strict"; 

    let globalData; 

    async function getData() {
        const candiesEaten = await fetch ("data.json"); 
        const data = await candiesEaten.json(); 
        globalData = data.data_points; 
        document.querySelector("#picker").innerHTML = createList(globalData);
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
            this.innerHTML = `<p>${mood}</p<`; 
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

    getData();

})(); 