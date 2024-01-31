Splitting();

const projectPageDom = {
    header: {
        navItem: document.querySelectorAll('.project_page .nav_item'),
        get chars() {
            return document.querySelectorAll('.project_page .main_title-one .word .char')
        },
        mainText: document.querySelectorAll('.project_page .main_subtitle p')
    },

    projects: {
        projectBox: document.querySelectorAll('.project_box'),
        projectBoxMobile: document.querySelectorAll('.project_box_mobile')
    },

    footer: {
        projectFooter: document.querySelector('.project_page .footer'),
        footerLink: document.querySelector('.footer .next_link a'),
        get chars() {
            return document.querySelectorAll('.project_page .footer_title h1 .word .char')
        }
    }
}

// PAGE ANIMATION START

if (window.innerWidth > 576) {
    const pageHeaderTl = new TimelineMax();


    pageHeaderTl.from(projectPageDom.header.navItem, 1.5, {
        delay: 0.5,
        stagger: 0.3,
        opacity: 0,
        ease: Expo.easeInOut
    })
        .from(projectPageDom.header.chars, 0.5, {
            stagger: 0.054,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=2')

        .from(projectPageDom.header.mainText, 0.5, {
            stagger: 0.2,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=2');

} else {
    const pageHeaderTl = new TimelineMax();


    pageHeaderTl.from(projectPageDom.header.chars, 0.5, {
        stagger: 0.054,
        y: '100%',
        opacity: 0,
        ease: Expo.easeInOut
    }, '-=2')

        .from(projectPageDom.header.mainText, 0.5, {
            stagger: 0.2,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=2');
}




// PAGE ANIMATION END

// PROJECTS SECTION ANIMATIONS START

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onEnter'
    }
});


projectPageDom.projects.projectBox.forEach((element) => {
    var timeline = new TimelineMax();

    timeline.set(element.querySelector('.block_img'), { visibility: "visible" })

        .set(element.querySelector('.block_right .block_img'), { visibility: "visible" })

        .to(element.querySelector('.img_overlay1'), {
            duration: 1.4,
            ease: Power2.easeInOut,
            height: '0%'
        })
        .from(element.querySelector('.img_1'), {
            duration: 1.4,
            scale: 1.4,
            ease: Power2.easeInOut
        }, '-=1.4')

        .to(element.querySelector('.img_overlay2'), {
            duration: 1.4,
            ease: Power2.easeInOut,
            height: '0%'
        }, '-=2')
        .from(element.querySelector('.img_2'), {
            duration: 1.4,
            scale: 1.4,
            delay: -1.4,
            ease: Power2.easeInOut
        })

    // .from(element.querySelector('.block_left p'), {
    //     duration: 1.5,
    //     y: '100%',
    //     opacity: 0,
    //     ease: Power2.easeInOut,
    //     delay: -1
    // })

    // .from(element.querySelector('.block_right p'), {
    //     duration: 1.5,
    //     y: '-100%',
    //     opacity: 0,
    //     ease: Expo.easeOut,
    //     delay: -1
    // });

    var projectScene = new ScrollMagic.Scene({
        triggerElement: element
    })

        .setTween(timeline)
        // .addIndicators()
        .addTo(controller);

});





// PROJECTS SECTION ANIMATIONS END  

// FOOTER SECTION ANIMATIONS START

const footerTl = new TimelineMax();

footerTl.set(document.querySelector('.project_page .footer_img'), { visibility: "visible" })
    .from(projectPageDom.footer.footerLink, {
        duration: 1.5,
        y: '-100%',
        opacity: 0,
        ease: Expo.easeOut,
    })

    .from(projectPageDom.footer.chars, 0.5, {
        stagger: 0.024,
        y: '100%',
        opacity: 0,
        ease: Expo.easeInOut
    })

    .to(document.querySelector('.footer_img .img_overlay'), {
        duration: 1.4,
        ease: Power2.easeInOut,
        height: '0%'
    }, '-=1')
    .from(document.querySelector('.footer_img img'), {
        duration: 1.4,
        scale: 1.4,
        delay: -1.4,
        ease: Power2.easeInOut
    }, '-=1')


var footerScene = new ScrollMagic.Scene({
    triggerElement: projectPageDom.footer.projectFooter
})

    .setTween(footerTl)
    // .addIndicators()
    .addTo(controller);

// FOOTER SECTION ANIMATIONS END

// .from('.mobile_menu a', 1.5, {
//     stagger: 0.3,
//     opacity: 0,
//     ease: Expo.easeInOut
// })
