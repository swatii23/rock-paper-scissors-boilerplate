document.getElementById("rock-button").addEventListener("click", () => {
    gestureImage(1);
    generateCompImage();
});
document.getElementById("paper-button").addEventListener("click", () => {
    gestureImage(2);
    generateCompImage();
});
document.getElementById("scissor-button").addEventListener("click", () => {
    gestureImage(3);
    generateCompImage();
});

function gestureImage(id) {
    console.log("clicked " + id);
    document.getElementById("placeholder1").style.display = "none";
    const images = document.getElementsByClassName("p1");
    for(let i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }
    document.getElementById(id).style.display = "inherit";
}

function generateCompImage() {
    const images = document.getElementsByClassName("p2");
    let ind = Math.floor(Math.random() * images.length);
    document.getElementById("placeholder2").style.display = "none";
    for(let i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }
    document.getElementById(ind+4).style.display = "inherit";
}