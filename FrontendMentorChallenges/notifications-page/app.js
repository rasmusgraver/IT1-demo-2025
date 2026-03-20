const allUnreads = document.querySelectorAll(".boks.unread")
allUnreads.forEach(unread => {
    unread.addEventListener("click", function () {
        unread.classList.toggle("unread")
        updateCounter()
    })
})

const markAll = document.getElementById("markall")
markAll.addEventListener("click", function () {
    allUnreads.forEach(unread => {
        unread.classList.remove("unread")
    })
    updateCounter()
})

function updateCounter() {
    const counterElm = document.getElementById("counter")
    const antall = document.querySelectorAll(".boks.unread").length
    counterElm.innerHTML = antall
}
