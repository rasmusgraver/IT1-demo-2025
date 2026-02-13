// Globale variable:
let doorOpened = false

// Finn vinnertallet:
const vinnertall = Math.floor(Math.random() * 3)
console.log("Vinnertallet er", vinnertall)

// Add event listener (click) på hver dør:
const allDoors = document.querySelectorAll(".door")
console.log(allDoors)

// "Ta tak i" vinnerdøren:
const vinnerDoor = allDoors[vinnertall]
console.log(vinnerDoor)

// Bytt ut bildet til en ferrari:
const goatImg = vinnerDoor.querySelector(".goat")
goatImg.src = "media/ferrari.png"

// Gå igjennom hver dør med en forEach:
allDoors.forEach(door => {
    door.addEventListener("click", klikk)
})

function klikk(event) {
    console.log("Du klikket på en dør!")
    // Se hva som finnes på denne eventen:
    console.log(event)

    // Åpne døren - bare dersom du ikke har åpnet noen dør enda
    if (doorOpened == false) {
        const door = event.target
        door.src = "media/open.png"
        doorOpened = true

        const goatImg = door.nextElementSibling
        if (goatImg.src.includes("ferrari")) {
            document.body.style.backgroundColor = "green"
        }
    }
}


