// Control Photo

openlinkModal.forEach(clickPhoto => {
    clickPhoto.addEventListener("click", addPhotoClass)
})

function addPhotoClass(e) {
    const clickedModal = e.currentTarget

    const photoClass = [...clickedModal.classList].find(cls =>
        cls.startsWith("photo-")
    )

    galleryPhotos.classList.add(photoClass)
}
