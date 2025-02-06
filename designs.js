//imports useful elements, and assigns them to variables
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var toggle = document.getElementById("gridToggle");
var save = document.getElementById("saveArt");

function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function (evt) {
                cell.style.backgroundColor = color.value;
                cell.addEventListener("contextmenu", function (evt) {
                    evt.preventDefault();
                    cell.style.backgroundColor = "white";
                })
            })
        }
    }
}

toggle.addEventListener("click", function () {
    var elementsTd = document.getElementsByTagName("td");
    var elementsTr = document.getElementsByTagName("tr");
    for (var i = 0; i < elementsTd.length; ++i) {
        elementsTd[i].classList.toggle("off");
    }
    for (var j = 0; j < elementsTr.length; ++j) {
        elementsTr[j].classList.toggle("off");
    }
});

sizePicker.addEventListener("submit", function (evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});

save.addEventListener("click", function (evt) {
    evt.preventDefault();
    html2canvas(canvas).then(canvas => {
        document.body.appendChild(canvas)
    });
});

// Toggle Code For Click:

// toggle.addEventListener("click", function () {
//     var elementsTd = document.getElementsByTagName("td");
//     var elementsTr = document.getElementsByTagName("tr");
//     for (var i = 0; i < elementsTd.length; ++i) {
//         elementsTd[i].classList.toggle("off");
//     }
//     for (var j = 0; j < elementsTr.length; ++j) {
//         elementsTr[j].classList.toggle("off");
//     }
// });