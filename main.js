document.body.onload = () => {
    nbr = 5;
    p = 0;
    let container = document.getElementById("container")
    let slide1 = document.getElementsByClassName("slide1")
    let precedent = document.getElementById("precedent")
    let suivant = document.getElementById("suivant")

    container.style.width = (30 * nbr) + "rem"
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "slide";
        div.innerHTML = slide1
        
        
        container.appendChild(div);
    }
};
