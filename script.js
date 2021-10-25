const images = document.querySelectorAll('.demo-2__gallery__figure')
const frame = document.querySelector('.demo-2__gallery')

frame.style.width = images.length * 100 + 'rem';

images.forEach(image => {
    image.addEventListener('click', e => {
        console.log('this is a project')
    })
})