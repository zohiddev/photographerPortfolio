// LOADING ANIMATION START

function endAnimation() {

    gsap.to('.loading_text .word .char', {
        duration: 0.5,
        stagger: 0.054,
        opacity: 0,
        ease: Expo.easeInOut
    })

    gsap.to('.loading', {
        dealy: 0.5,
        duration: 1,
        top: '-120%',
        ease: Expo.easeOut
    })

};

function startAnimation() {

    gsap.to('.loading', {
        duration: 1,
        top: 0,
        ease: Expo.easeOut
    })

    gsap.to('.loading_text .word .char', {
        duration: 0.5,
        stagger: 0.054,
        opacity: 1,
        ease: Expo.easeInOut
    })



}

window.onload = () => {
    const transition_el = document.querySelector('.loading');
    const activeLinks = document.querySelectorAll('.active_link');
    const activeImages = document.querySelectorAll('.active_img');


    setTimeout(() => {
        endAnimation();
    }, 500);

    for (let i = 0; i < activeLinks.length; i++) {
        const activeLink = activeLinks[i];



        activeLink.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target.href;
            console.log(e.target)
            console.log(target)

            startAnimation();

            setTimeout(() => {
                window.location.href = target;
            }, 2000);

        })
    }

    for (let i = 0; i < activeImages.length; i++) {
        const activeImage = activeImages[i];



        activeImage.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target.getAttribute('href');
            console.log(e.target.href)
            console.log(target)

            startAnimation();

            setTimeout(() => {
                window.location.href = target;
            }, 2000);

        })
    }
}

// LOADING ANIMATION END

