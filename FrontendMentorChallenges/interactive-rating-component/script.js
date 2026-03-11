
const allSpans = document.querySelectorAll(".rating span")
console.log(allSpans)
let ratingTall = 0

allSpans.forEach(element => {
    element.addEventListener("click", function () {
        fjernActiveFraAlle()
        element.classList.add("active")
        ratingTall = element.textContent
        console.log("Nå er ratingtall", ratingTall)
    })
})

function fjernActiveFraAlle() {
    allSpans.forEach(element => {
        element.classList.remove("active")
    })
}

document.querySelector("button").addEventListener("click", function () {
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "flex"
    document.getElementById("ratingTall").innerHTML = ratingTall
})
