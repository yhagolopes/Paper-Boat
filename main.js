function addIntro() {
    let hiddenDiv = document.getElementById("show");
    hiddenDiv.style.display = "block";
}

document.getElementById("intro").addEventListener("click", addIntro);