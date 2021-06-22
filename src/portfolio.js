const displayPetPhoto = async () => {
    try{
        const response = await fetch('http://api.chloemedranophotography.com/wp-json/wp/v2/media?search=pets')
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

    }catch(error){
        console.log("No data")
    }
 
}


const displayMaternityPhoto = async () => {
    try{
        const response = await fetch('http://api.chloemedranophotography.com/wp-json/wp/v2/media?search=maternity')
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
    }catch(error){
        console.log("There's no data")
    }

    



}

const displayPortraitPhoto = async () => {
    try{
        const response = await fetch('http://api.chloemedranophotography.com/wp-json/wp/v2/media?search=portrait')
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

    }catch(error){
        console.log("No data")
    }
    



}
export { displayPetPhoto, displayMaternityPhoto, displayPortraitPhoto }


