const images = document.querySelectorAll('.images'),
      headings = document.querySelectorAll('.heading');

images.forEach(image =>{
  image.addEventListener('click', (e) =>{
    image.classList.toggle('box-active')

    if(e.target === image.firstElementChild){
      if(image.nextElementSibling.classList.contains('box-active')){
        image.nextElementSibling.classList.remove('box-active')
      }
    }
    if(e.target === image.lastElementChild){
      if(image.previousElementSibling.classList.contains('box-active')){
        image.previousElementSibling.classList.remove('box-active')
      }
    }

    // headings.forEach(heading =>{
    //   heading.classList.toggle('letter-active')
    // })
  })
})