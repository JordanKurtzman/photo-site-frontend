import Glide from "@glidejs/glide"

const glideHero = new Glide('.hero', {
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4500,
    focusAt: '2',
    startAt: 2,
    perView: 1,
});


export { glideHero, Glide }