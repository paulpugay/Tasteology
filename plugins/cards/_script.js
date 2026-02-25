
// card click log
const photolink = document.querySelectorAll(".photo-link")
const textlink = document.querySelectorAll(".text-link")

photolink.forEach(click => {
    click.addEventListener("click", showClick)
})


// Image Page Link

function showClick(e) {
    const clickPlog = e.currentTarget

    const photoLog = [...clickPlog.classList].find(cls =>
        cls.startsWith("pagelink-")
    )

    console.log(photoLog + " photo link is clicked!")
}


// Text Title Page Link

textlink.forEach(click => {
    click.addEventListener("click", showtextClick)
})

function showtextClick(e) {
    const clickPlog = e.currentTarget

    const linkLog = [...clickPlog.classList].find(cls =>
        cls.startsWith("pagelink-")
    )

    console.log( linkLog + " text link is clicked!")
}

