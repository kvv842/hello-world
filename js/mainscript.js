function initiate() {
    var bt = document.formdata.btAdd;
    var input = document.formdata.input;
    var result = document.getElementById("div-result");

    if (bt == null || input == null || result == null) {
        throw "Не найден один из элементов для корректной работы."
    }

    bt.onclick = function () {
        var val = input.value.trim();
        if (val != "") {
            addText(val);
            input.value = null;
        }
        else {
            console.log("пустой текст3");
        }
    }

    function addText(text) {
        var elem = document.createElement("p");
        elem.textContent = text;
        result.appendChild(elem);
    }
}

window.addEventListener("load", initiate, false);
