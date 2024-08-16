function mostrarmenu() {
    let nav = document.getElementById("navbar");
    let itens = document.getElementById("itens");
    if (itens.style.display == "none") {
            itens.style.display = "block";
            nav.style.height = "230px";
    } else {
            itens.style.display = "none";
            nav.style.height = "100px";
    }
}