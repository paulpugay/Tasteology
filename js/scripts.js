/* Modal Pop Up */

const openlinkModal = document.querySelectorAll(".linkModal")
const containerModal = document.querySelector(".background-overlay")
const contentModal = document.querySelector(".modal-dialog-box")
const closerModal = document.querySelector(".closeButton")
const galleryPhotos = document.querySelector(".gallery-photos")

// Show Modal

openlinkModal.forEach(modal => {
    modal.addEventListener("click", addShowClass)
})


function addShowClass() {
    containerModal.classList.add("show")
    contentModal.classList.add("show")
}

// remove class
closerModal.addEventListener("click", removeShowClass)
containerModal.addEventListener("click", removeShowClass)

function removeShowClass() {
    if (
        containerModal.classList.contains("show") ||
        contentModal.classList.contains("show")
    ) {
        containerModal.classList.remove("show")
        contentModal.classList.remove("show")
        galleryPhotos.classList.remove("photo-1", "photo-2", "photo-3")
    }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    containerModal.classList.remove("show")
    contentModal.classList.remove("show")
    galleryPhotos.classList.remove("photo-1", "photo-2", "photo-3")
  }
})


