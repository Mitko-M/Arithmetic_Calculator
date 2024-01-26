const input = document.querySelector("#calc-input");

function Calculate() {
    if(document.querySelector("#calc-input").value !== "") {
        const input = document.querySelector("#calc-input");
        let numberAndAcctions = input.value.split(" ");

        let sum = Number(numberAndAcctions[0]);

        for(let i = 1; i < numberAndAcctions.length; i+=2) {
            switch(numberAndAcctions[i]) {
                case "+":
                    sum += Number(numberAndAcctions[i + 1]);
                    break;
                case "-":
                    sum -= Number(numberAndAcctions[i + 1]);
                    break;
                case "/":
                    sum /= Number(numberAndAcctions[i + 1])
                    break;
                case "*":
                    sum *= Number(numberAndAcctions[i + 1])
                    break;

            }
        }

        input.value += " = " + sum;
        document.getElementById("clear").hidden = false;
    }
}

function addNum(id) {
    const input = document.querySelector("#calc-input")
    
    if(!isNaN(id)) {
        input.value += id;
    }
    else {
        input.value += " " + id + " ";
    }
    document.getElementById("back-space").hidden = false;
}

function InputClear() {
    document.querySelector("#calc-input").value = "";
    document.getElementById("clear").hidden = true;
    document.getElementById("back-space").hidden = true;
}

function BackSpace() {
    const input = document.querySelector("#calc-input")

    if(input.value === "") {
        document.getElementById("clear").hidden = true;
        document.getElementById("back-space").hidden = true;
    }

    input.value = input.value.replace(input.value[input.value.length - 1], "");
}