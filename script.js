function Rotate() {
    var element = document.getElementById('back-btn');

    if (element.className === "normal") {
        element.className = "rotate";
    }
    else if ( element.className === "rotate") {
        element.className = 'normal';
    }
}