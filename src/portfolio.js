const displayPetPhoto = async () => {
    const response = await fetch('http://localhost:8000/wp-json/wp/v2/media?search=pets')
    const petPictures = await response.json()
    console.log(petPictures)
    const container = document.querySelector('#pets')

    petPictures.forEach((picture) => {
        const photoWrapper = document.createElement('div')
        const photo = document.createElement('img')
        photo.setAttribute('src', picture.guid.rendered)
        photoWrapper.classList.add('portfolio__piece')
        photo.classList.add('portfolio__piece--image')
        photoWrapper.appendChild(photo)
        container.appendChild(photoWrapper)
    });


    
    
}


const displayMaternityPhoto = async () => {
    const response = await fetch('http://localhost:8000/wp-json/wp/v2/media?search=maternity')
    const maternityPictures = await response.json()
    console.log(maternityPictures)
    const container = document.querySelector('#maternity')

    maternityPictures.forEach((picture) => {
        const photoWrapper = document.createElement('div')
        const photo = document.createElement('img')
        photo.setAttribute('src', picture.guid.rendered)
        photoWrapper.classList.add('portfolio__piece')
        photo.classList.add('portfolio__piece--image')
        photoWrapper.appendChild(photo)
        container.appendChild(photoWrapper)
    });



}

const displayPortraitPhoto = async () => {
    const response = await fetch('http://localhost:8000/wp-json/wp/v2/media?search=portrait')
    const portraitPictures = await response.json()
    console.log(portraitPictures)
    const container = document.querySelector('#portrait')

    portraitPictures.forEach((picture) => {
        const photoWrapper = document.createElement('div')
        const photo = document.createElement('img')
        photo.setAttribute('src', picture.guid.rendered)
        photoWrapper.classList.add('portfolio__piece')
        photo.classList.add('portfolio__piece--image')
        photoWrapper.appendChild(photo)
        container.appendChild(photoWrapper)
    });



}
export { displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto }


