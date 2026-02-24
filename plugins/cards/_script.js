
// card click log
const photolink = document.querySelectorAll(".photo-link")
const textlink = document.querySelectorAll(".text-link")

photolink.forEach(click => {
    click.addEventListener("click", showClick)
})

textlink.forEach(click => {
    click.addEventListener("click", showtextClick)
})


function showClick() {
    console.log("Photo is Clicked!")
}

function showtextClick() {
    console.log("Link is Clicked!")
}