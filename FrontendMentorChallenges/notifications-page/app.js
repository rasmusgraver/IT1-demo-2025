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

    if (antall == 0) {
        counterElm.style.display = "none"
    } else {
        counterElm.style.display = "inline"
    }
}

// MERK: Start med å oppdatere counter så den er rett fra start:
updateCounter()
