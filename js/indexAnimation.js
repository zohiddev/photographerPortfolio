Splitting();

const Dom = {
    index: {
        header: {
            navItem: document.querySelectorAll('.nav_item'),
            get chars() {
                return document.querySelectorAll('.main_title .word .char')
            },
            mainOverlay: document.querySelector('.main_caption .img_overlay'),
            mainImg: document.querySelector('.main_caption img'),
            mainText: document.querySelectorAll('.main_caption p'),

        },
        projects: {
            projectBox: document.querySelectorAll('.project_box')

        },

        quote: {
            quoteSection: document.querySelector('.quote'),
            quoteText: document.querySelector('.quote_text'),
            get chars() {
                return document.querySelectorAll('.quote_title .word .char')
            },
            quoteLink: document.querySelector('.quote a')
        },

        about: {
            aboutSection: document.querySelector('.about'),
            get chars() {
                return document.querySelectorAll('.about_title h1 .word .char')
            },
            get words() {
                return document.querySelectorAll('.about_text p .word')
            }

        },

        contact: {
            contactSection: document.querySelector('.contact'),
            get chars() {
                return document.querySelectorAll('.contact_title .word .char')
            },
            contactLink: document.querySelector('.contact a')

        }
    },
}


// PAGE ANIMATION START

if (window.innerWidth > 576) {

    const headerTl = new TimelineMax();
    gsap.set('.main_img', { visibility: "visible" })

    headerTl.from(Dom.index.header.navItem, 1.5, {
        delay: 0.5,
        stagger: 0.3,
        opacity: 0,
        ease: Expo.easeInOut
    })
        .from(Dom.index.header.chars, 0.5, {
            stagger: 0.054,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=2')

        .to(Dom.index.header.mainOverlay, {
            duration: 1.4,
            ease: Power2.easeInOut,
            height: '0%'
        }, '-=2')

        .from(Dom.index.header.mainImg, {
            duration: 1.4,
            scale: 1.4,
            // delay: -1.4,
            ease: Power2.easeInOut
        }, '-=2')

        .from(Dom.index.header.mainText, 0.5, {
            stagger: 0.2,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=1.5');

} else {

    const headerTl = new TimelineMax();
    gsap.set('.main_img', { visibility: "visible" })


    headerTl.from(Dom.index.header.chars, 0.5, {
        stagger: 0.054,
        y: '100%',
        opacity: 0,
        ease: Expo.easeInOut
    }, '-=2')

        .to(Dom.index.header.mainOverlay, {
            duration: 1.4,
            ease: Power2.easeInOut,
            height: '0%'
        }, '-=2')

        .from(Dom.index.header.mainImg, {
            duration: 1.4,
            scale: 1.4,
            // delay: -1.4,
            ease: Power2.easeInOut
        }, '-=2')

        .from(Dom.index.header.mainText, 0.5, {
            stagger: 0.2,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=1.5');


}




// PAGE ANIMATION END

// PROJECTS SECTION ANIMATIONS START

// gsap.registerPlugin(ScrollTrigger);


var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onEnter'
    }
});
// console.log(Dom.index.projects.projectBox);

Dom.index.projects.projectBox.forEach((element) => {
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

        .to(element.querySelector('.block_title p'), {
            duration: 1.5,
            y: '100%',
            opacity: 1,
            ease: Power2.easeInOut,
            delay: -1
        })

        .to(element.querySelector('.block_right p'), {
            duration: 1.5,
            y: '-100%',
            opacity: 1,
            ease: Power2.easeOut,
            delay: -1
        });

    var projectScene = new ScrollMagic.Scene({
        triggerElement: element
    })

        .setTween(timeline)
        // .addIndicators()
        .addTo(controller);

});



// PROJECTS SECTION ANIMATIONS END


// QUOTE SECTION ANIMATIONS START

const quoteTl = new TimelineMax();

quoteTl.from(Dom.index.quote.quoteText, 0.5, {
    y: '100%',
    opacity: 0,
    ease: Expo.easeInOut
}, '-=1.5')

    .from(Dom.index.quote.chars, 0.5, {
        stagger: 0.054,
        y: '100%',
        opacity: 0,
        ease: Expo.easeInOut
    }, '-=2')

    .from(Dom.index.quote.quoteLink, 0.5, {
        y: '100%',
        opacity: 0,
        ease: Expo.easeInOut
    }, '-=1.5');

var quoteScene = new ScrollMagic.Scene({
    triggerElement: Dom.index.quote.quoteSection
})

    .setTween(quoteTl)
    // .addIndicators()
    .addTo(controller);

// QUOTE SECTION ANIMATIONS END

if (window.innerWidth > 576) {
    // ABOUT SECTION ANIMATIONS START

    const aboutTl = new TimelineMax();

    aboutTl.set(document.querySelector('.about_right .block_img'), { visibility: "visible" })
        .set(document.querySelector('.about_right .about_img'), { visibility: "visible" })
        .from(Dom.index.about.chars, 0.5, {
            stagger: 0.024,
            y: '100%',
            opacity: 0,
            ease: Power2.easeInOut
        })

        .from(Dom.index.about.words, 0.5, {
            stagger: 0.024,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=3')


        .to(document.querySelector('.about_right .block_img .img_overlay'), {
            duration: 1.4,
            ease: Power2.easeInOut,
            height: '0%'
        }, '-=3')
        .from(document.querySelector('.about_right .block_img img'), {
            duration: 1.4,
            scale: 1.4,
            ease: Power2.easeInOut
        }, '-=3')

        .to(document.querySelector('.about_right .about_img .img_overlay'), {
            duration: 1.4,
            ease: Power2.easeInOut,
            height: '0%'
        }, '-=3')
        .from(document.querySelector('.about_right .about_img img'), {
            duration: 1.4,
            scale: 1.4,
            ease: Power2.easeInOut
        }, '-=3');

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: Dom.index.about.aboutSection
    })

        .setTween(aboutTl)
        // .addIndicators()
        .addTo(controller);

    // ABOUT SECTION ANIMATIONS END
} else {
    // ABOUT SECTION ANIMATIONS START

    const aboutTl = new TimelineMax();

    aboutTl.from(Dom.index.about.chars, 0.5, {
        stagger: 0.024,
        y: '100%',
        opacity: 0,
        ease: Power2.easeInOut
    })

        .from(Dom.index.about.words, 0.5, {
            stagger: 0.024,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=3')


    var aboutScene = new ScrollMagic.Scene({
        triggerElement: Dom.index.about.aboutSection
    })

        .setTween(aboutTl)
        // .addIndicators()
        .addTo(controller);

    // ABOUT SECTION ANIMATIONS END
}

// CONTACT SECTION ANIMATIONS START

const contactTl = new TimelineMax();

// const titleBefore = CSSRulePlugin.getRule('.contact_title:before');
// const linkBefore = CSSRulePlugin.getRule('.contact a:before');


contactTl.from(Dom.index.contact.chars, 0.5, {
    stagger: 0.024,
    y: '200%',
    opacity: 0,
    ease: Expo.easeInOut
})

    .from(Dom.index.contact.contactLink, 1.5, {
        bottom: '100%',
        opacity: 0,
        ease: Expo.easeInOut
    }, '-=1')

    // .from(titleBefore, 1.5, {
    //     height: '0%',
    //     width: 0,
    //     opacity: 0,
    //     ease: Expo.easeInOut
    // })

    // .from(linkBefore, 1.5, {
    //     width: '0%',
    //     height: 0,
    //     opacity: 0,
    //     ease: Expo.easeInOut
    // }, '-=1')

    .from('.footer_item', 1.5, {
        stagger: 0.3,
        opacity: 0,
        ease: Expo.easeInOut
    }, '-=2')


var contactScene = new ScrollMagic.Scene({
    triggerElement: Dom.index.contact.contactSection
})

    .setTween(contactTl)
    // .addIndicators()
    .addTo(controller);

        // CONTACT SECTION ANIMATIONS END


        // from('.mobile_menu a', 1.5, {
        //     stagger: 0.3,
        //     opacity: 0,
        //     ease: Expo.easeInOut
        // })
        //     .