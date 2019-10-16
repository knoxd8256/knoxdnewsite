let collList = document.getElementsByTagName("button");
for (let coll in collList) {
    collList[coll].addEventListener("click", () => collList[coll].nextElementSibling.classList.toggle("show"));
}