const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        // IMG ANIMATION
        if(entry.target.classList.contains('ImgAnimation')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('ImgAnimation2')
            } else {
                entry.target.classList.remove('ImgAnimation2')
            }
        }
        // SMOTH OPACITY ANIMATION
        if(entry.target.classList.contains('OpacityAnimation')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        }
    })
})

const hiddenElements = document.querySelectorAll('.ANIMATION')
hiddenElements.forEach((el) => observer.observe(el))