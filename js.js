window.onload = function () {

    var numColors = 6;
    var colors = generateRandomColors(numColors);
    var squares = document.querySelectorAll(".squares");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.textContent = pickedColor;

    var message = document.querySelector("#message");
    var titleColor = document.querySelector("#title");

    var resetBtn = document.querySelector("#reset");
    var easyBtn = document.querySelector("#easy");
    var hardBtn = document.querySelector("#hard");




    resetBtn.addEventListener("click", function () {
        colors = generateRandomColors(numColors);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        }
        titleColor.style.background = "#00ff90";
        message.textContent = "";
        resetBtn.textContent = "New Game";
    });

    easyBtn.addEventListener("click", function () {
        hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
        numColors = 3;
        colors = generateRandomColors(numColors);
        pickedColor = pickColor();

        for (var i = 0; i < squares.length; i++) {
            //проверяет если есть в масиве колорс, тру, тогда цвет, если нет, убирает!!!
            if (colors[i]) {
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }


        titleColor.style.background = "#00ff90";
        message.textContent = "";
        resetBtn.textContent = "New Game";
    });

    hardBtn.addEventListener("click", function () {
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
        numColors = 6;
        colors = generateRandomColors(numColors);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        titleColor.style.background = "#00ff90";
        message.textContent = "";
        resetBtn.textContent = "New Game";
    });



    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];

        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;

            if (clickedColor === pickedColor) {
                message.textContent = "You win";
                changeColor(pickedColor);
                resetBtn.textContent = "Play Again";
                easyBtn.classList.remove("selected");
                hardBtn.classList.remove("selected");


            } else {
                this.style.background = "#232323";
                message.textContent = "Try Again";

            }
        });
    }

    function changeColor(color) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = color;
        }
    }

    function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function randomRGBa() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    function generateRandomColors(num) {
        var colorsRandom = [];

        for (var i = 0; i < num; i++) {
            var color = randomRGBa();
            colorsRandom.push(color);
        }
        return colorsRandom;
    }


};



