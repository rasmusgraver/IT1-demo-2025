
const allUnreads = document.querySelectorAll(".boks.unread")

allUnreads.forEach(unread => {

    unread.addEventListener("click", function () {
        unread.classList.remove("unread")
    })

})

