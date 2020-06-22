let endPoint = `https://restcountries.eu/rest/v2/all`;
let options = {
    method: "GET",
    // headers: {
    //     "Content-type": "applications/json",
    // },
};

fetch(endPoint, options)
    .then((response) => response.json())
    .then((results) => {
        results.map((results) => {
            let text = document.createElement("h2");
            let addText = document.createTextNode(results.name);
            text.appendChild(addText);
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.setAttribute("src", results.flag);
            let display = document.getElementById("display");
            li.appendChild(img);
            li.appendChild(text);
            display.appendChild(li);
        });
    });
