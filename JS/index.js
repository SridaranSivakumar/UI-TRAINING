var clickedShape = " ";
let shapes = {
    circle: {
        circleSymbol: function () {
            document.querySelector(".next").style.display = "block";
            document.querySelector(".circleSymbol").style.display = "block";
            clickedShape = "circle";
        },
        calCircle: function () {
            document.querySelector(".startPage").style.display = "none";
            document.querySelector(".midPage").style.display = "block";
            document.querySelector(".calculateCircle").style.display = "block";
        },
        circleFormula: function () {
            let radius = parseInt(document.querySelector("#input").value[0]);
            calculation.circle(radius);
            document.querySelector(".midPage").style.display = "none";
            document.querySelector(".endPage").style.display = "block";
            document.querySelector(".circleFormula").style.display = "block";
            document.querySelector(".circleStartAgain").addEventListener("click", () => {
                window.location.reload(true);
            });
        }
    },
    triange: {
        triangleSymbol: function () {
            document.querySelector(".next").style.display = "block";
            document.querySelector(".triangleSymbol").style.display = "block";
            

        },
        calTriangle: function () {
            document.querySelector(".startPage").style.display = "none";
            document.querySelector(".midPage").style.display = "block";
            document.querySelector(".calculateTriangle").style.display = "block";
        },
        triangleFormula: function () {
            let side = parseInt(document.querySelector("#tinput").value[0]);
            calculation.triange(side);
            document.querySelector(".midPage").style.display = "none";
            document.querySelector(".endPage").style.display = "block";
            document.querySelector(".triangleFormula").style.display = "block";
            document.querySelector(".triangleStartAgain").addEventListener("click", () => {
                window.location.reload(true);
            });
        }
    },
    square: {
        squareSymbol: function () {
            document.querySelector(".next").style.display = "block";
            document.querySelector(".squareSymbol").style.display = "block";
            clickedShape = "square";
        },
        calSquare: function () {
            document.querySelector(".startPage").style.display = "none";
            document.querySelector(".midPage").style.display = "block";
            document.querySelector(".calculateSquare").style.display = "block";
        },
        squareFormula: function () {
            let side = parseInt(document.querySelector("#sinput").value[0]);
            calculation.square(side);
            document.querySelector(".midPage").style.display = "none";
            document.querySelector(".endPage").style.display = "block";
            document.querySelector(".squareFormula").style.display = "block";
            document.querySelector(".squareStartAgain").addEventListener("click", () => {
                window.location.reload(true);
            });
        }
    }
}
let calculation = {
    circle: (radius) => {
        document.querySelector(".Radius").innerHTML = radius + " cm";
        document.querySelector(".Area").innerHTML = ((22 / 7) * radius * radius).toFixed(2) + " sq cm";
        document.querySelector(".Perimeter").innerHTML = (2 * (22 / 7) * radius).toFixed(2) + " cm";
    },
    triange: (side) => {
        document.querySelector(".tSide").innerHTML = side + " cm";
        document.querySelector(".tArea").innerHTML = ((0.433) * side * side).toFixed(2) + " sq cm";
        document.querySelector(".tPerimeter").innerHTML = (3 * side).toFixed(2) + " cm";
    },
    square: (side) => {
        console.log(side);
        document.querySelector(".sSide").innerHTML = side + " cm";
        document.querySelector(".sArea").innerHTML = (side * side).toFixed(2) + " sq cm";
        document.querySelector(".sPerimeter").innerHTML = (4 * side).toFixed(2) + " cm";
    }
}
console.log(clickedShape)
document.querySelector(".circle").addEventListener("click", () => { shapes.circle.circleSymbol() });
document.querySelector(".triangle").addEventListener("click", () => { shapes.triange.triangleSymbol() });
document.querySelector(".square").addEventListener("click", () => { shapes.square.squareSymbol() });
document.querySelector(".next").addEventListener("click", () => {
    if (clickedShape == "circle") {
        shapes.circle.calCircle();
        document.querySelector(".circleBtn").addEventListener("click", () => {
            shapes.circle.circleFormula();
        });
    } else if (clickedShape == "triangle") {
        shapes.triange.calTriangle();
        document.querySelector(".triangleBtn").addEventListener("click", () => {
            shapes.triange.triangleFormula();
        });
    } else if (clickedShape == "square") {
        shapes.square.calSquare();
        document.querySelector(".squareBtn").addEventListener("click", () => {
            shapes.square.squareFormula();
        });
    }
});