// background img start

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// background img end

// CURSOR START

// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");


var cursor = document.querySelector(".cursor"),
    follower = document.querySelector(".cursor-follower"),
    links = document.querySelectorAll('a');
images = document.querySelectorAll('img');

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// yellow circle

for (let i = 0; i <= links.length - 1; i++) {
    links[i].addEventListener("mouseenter", function () {
        cursor.classList.add("active");
        follower.classList.add("active");
    });

    links[i].addEventListener("mouseleave", function () {
        cursor.classList.remove("active");
        follower.classList.remove("active");
    });

}

for (let i = 0; i <= images.length - 1; i++) {
    images[i].addEventListener("mouseenter", function () {
        cursor.classList.add("active_img");
        follower.classList.add("active_img");
    });

    images[i].addEventListener("mouseleave", function () {
        cursor.classList.remove("active_img");
        follower.classList.remove("active_img");
    });

}

// CURSOR END

// MENU START

const burger_btn = document.querySelector('.burger_btn');
const close_menu = document.querySelector('.close_menu');
const nav_links = document.querySelectorAll('.mobile_nav-link');

burger_btn.addEventListener('click', () => {
    gsap.to('.mobile_nav', 0.5, {
        top: 0,
        display: 'block',
        ease: Power2.easeOut
    })
})

close_menu.addEventListener('click', () => {
    gsap.to('.mobile_nav', 0.5, {
        top: '-100%',
        display: 'none',
        ease: Power2.easeOut
    })
})

nav_links.forEach(element => {
    element.addEventListener('click', () => {
        gsap.to('.mobile_nav', 0.5, {
            top: '-100%',
            display: 'none',
            ease: Power2.easeOut
        })
    })
});

// MENU END






