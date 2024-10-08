

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const headers = document.querySelectorAll(".fixed_header");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  headers.forEach((header) => {
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scrolling down
      header.style.top = "0";
      header.style.opacity = "1"; // Use decimal value for opacity
    } else if (scrollTop < lastScrollTop && scrollTop <= 200) {
      // Scrolling up
      header.style.top = "-60px";
      header.style.opacity = "0"; // Use decimal value for opacity
    }
  });

  lastScrollTop = scrollTop;
});



var pageLoader = document.getElementById("page_loader");

function preloader() {
  window.scrollTo(0, 0)
  pageLoader.style.display = 'none';
}

// GSAP animation
const tl = gsap.timeline();

tl.from("header nav .links_nav li a", {
  opacity: 0,
  top: -60,
  stagger: 0.3,
  duration: 1,
  ease: "elastic.out(1,0.4)",
},"anim")

tl.from("header nav .main_logo",{
  left: -150,
  duration: 1,
  ease: "elastic.out(1,0.4)",
},"anim")

tl.from(".banner_content h1 span",{
  transform: 'translateY(100px)',
  duration: .8,
  ease: "elastic.out(1,0.4)",
},"same-anim")

tl.from(".portfolio_head",{
  transform: 'translateY(100px)',
  duration: .8,
  opacity: 0,
  ease: "elastic.out(1,0.4)",
},"same-anim");

tl.from(".port_ban-img img",{
  transform: 'translateY(100px)',
  duration: .8,
  scale: 0,
  ease: "elastic.out(1,0.4)",
},"same-anim");

tl.from(".serv_hero-img img",{
  transform: 'translateY(100px)',
  duration: .8,
  x: 200,
  opacity: 0,
  ease: "elastic.out(1,0.4)",
},"same-anim");

tl.from(".serv_banner-head",{
  transform: 'translateY(100px)',
  duration: .8,
  x: -200,
  opacity: 0,
  ease: "elastic.out(1,0.4)",
},"same-anim");

tl.from(".banner_content p",{
  transform: 'scale(0)',
  duration: 1,
  ease: "elastic.out(1,0.4)",
},"same-anim")

tl.from(".banner_content .banner_btns .right_btn",{
  transform: 'translateX(20px)',
  opacity: 0,
  duration: .6,
  ease: "elastic.out(1,0.4)",
},"same-anim")

tl.from(".banner_content .banner_btns .left_btn",{
  transform: 'translateX(-20px)',
  opacity: 0,
  duration: .6,
  ease: "elastic.out(1,0.4)",
},"same-anim")

gsap.from(".our_servicess .our_img img", {
  opacity: 0,
  x: -200,
  duration: .8,
  scrollTrigger: {
    trigger: ".our_img img", 
    start: "top 90%",
    // markers: true
  }
});

gsap.from(".our_servicess .our_ani", {
  opacity: 0,
  x: 200,
  stagger: 0.3,
  duration: .8,
  scrollTrigger: {
    trigger: ".our_ani", 
    start: "top 90%",
    // markers: true
  }
});


gsap.from(".our_servicess-heading", {
  opacity: 0,
  x: 200,
  duration: .8,
  scrollTrigger: {
    trigger: ".our_servicess-heading", 
    start: "top 90%",
    markers: false
  }
});

gsap.from(".our_servicess-para", {
  opacity: 0,
  x: 200,
  duration: .8,
  scrollTrigger: {
    trigger: ".our_servicess-para", 
    start: "top 90%",
    markers: false
  }
});

gsap.from(".choose_ser-heading", {
  opacity: 0,
  x: 200,
  duration: .8,
  scrollTrigger: {
    trigger: ".choose_ser-heading", 
    start: "top 90%",
    markers: false
  }
});

gsap.from(".choose_ser-para", {
  opacity: 0,
  x: -200,
  duration: .8,
  scrollTrigger: {
    trigger: ".choose_ser-para", 
    start: "top 90%",
    markers: false
  }
});

gsap.from(".review_cont-head", {
  opacity: 0,
  x: -200,
  duration: .8,
  scrollTrigger: {
    trigger: ".review_cont-head", 
    start: "top 90%",
    markers: false
  }
});

gsap.utils.toArray('.web_services-box div').forEach((box, i) => {
  // Define a responsive delay
  let delayValue = window.innerWidth < 768 ? i * 0 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    y: 200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top 95%",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});


gsap.utils.toArray('.choose_cont div').forEach((box, i) => {
  // Define a responsive delay
  let delayValue = window.innerWidth < 768 ? i * 0 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    y: 200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top 95%",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});


gsap.utils.toArray('.client_cont div').forEach((box, i) => {
  // Define a responsive delay
  let delayValue = window.innerWidth < 768 ? i * 0 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    y: 200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});


gsap.utils.toArray('.footer_gsap').forEach((box, i) => {
  let delayValue = window.innerWidth < 768 ? i * 0.2 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    x: -200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});


gsap.utils.toArray('.work_cont > div').forEach((box, i) => {
  let delayValue = window.innerWidth < 768 ? i * 0.2 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    y: 200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});


gsap.utils.toArray('.contact_cont .contact_left-ani').forEach((box, i) => {
  let delayValue = window.innerWidth < 768 ? i * 0.2 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    x: -200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});


gsap.utils.toArray('.contact_cont .contact_right-ani').forEach((box, i) => {
  let delayValue = window.innerWidth < 768 ? i * 0.2 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    x: 200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});

gsap.utils.toArray('.contact_bottom-ani').forEach((box, i) => {
  let delayValue = window.innerWidth < 768 ? i * 0.2 : i * 0.3; // Shorter delay for mobile
  
  gsap.from(box, {
    opacity: 0,
    y: 200,
    duration: 0.8,
    delay: delayValue,
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      markers: false, // Disable markers for production
      toggleActions: "play none none none"
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitches = document.querySelectorAll('.switches');
  
  // Debugging
  console.log('Script loaded');
  console.log('Number of toggle switches:', toggleSwitches.length);

  // Load saved state from localStorage on every page
  const savedState = localStorage.getItem('toggleState');
  if (savedState !== null) {
    const isChecked = JSON.parse(savedState);
    toggleSwitches.forEach((toggle) => {
      toggle.checked = isChecked;
    });
    document.body.classList.toggle('active-switch', isChecked);
  }

  toggleSwitches.forEach((toggle) => {
    toggle.addEventListener('change', function() {
      const isChecked = this.checked;
      // alert('checked');
      document.body.classList.toggle('active-switch', isChecked);
      
      toggleSwitches.forEach((otherToggle) => {
        if (otherToggle !== this) {
          otherToggle.checked = isChecked;
        }
      });

      localStorage.setItem('toggleState', JSON.stringify(isChecked));
    });
  });
});



 
let rotateCircle = document.querySelectorAll(".rotate_circle svg");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  rotateCircle.forEach((rotateCircle) => {
    rotateCircle.style.transform = `rotate(${scrollY}deg)`;
  });
})


// let currentScroll = 0;
// let scrollText = document.querySelectorAll(".marque_part");
// let isScrollingDown = true;
// let star = document.querySelectorAll(".marque_star");

// let tween = gsap.to(".marque_part", {
//   xPercent: -100,
//   repeat: -1,
//   duration: 15,
//   ease: "linear"
// }).totalProgress(0.5);

// gsap.set(".infinite_scroll-text", {xPercent: -0});

// window.addEventListener("scroll", ()=> {
//   if(window.pageYOffset > currentScroll) {
//     isScrollingDown = true;
//   } else {
//     isScrollingDown = false;
//   }

//   gsap.to(tween, {
//     timeScale: isScrollingDown ? 1 : -1,
//   });

//   star.forEach((star)=> {
//     if(isScrollingDown) {
//       star.classList.remove("active");
//     }else {
//       star.classList.add("active")
//     }
//   });
//   currentScroll = window.pageYOffset;
// })


const accordionHeaders = document.querySelectorAll('.menu_drop-links');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
        const accordionItem = this.parentElement;
        const accordionContent = accordionItem.querySelector('.menu_drop-liks_list-mob');

        // Close other open accordion items
        document.querySelectorAll('.menu-item-mob').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                const otherContent = item.querySelector('.menu_drop-liks_list-mob'); // Fix this selector
                if (otherContent) {
                    otherContent.style.maxHeight = '0';
                }
            }
        });

        // Toggle the clicked accordion item
        accordionItem.classList.toggle('active');

        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0';
        }
    });
});

// custom cursor 
const cursors = document.querySelectorAll('.cursor');

cursors.forEach(cursor => {
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;");
    });

    document.addEventListener('click', e => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });
});


// menu toggle 
let menuBtn = document.querySelectorAll('.meu-btn');
let closeBtn = document.querySelectorAll('.close-btn-menu');
let menuList = document.querySelectorAll('.navlink-mob-cont');

menuBtn.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        menuList.forEach((menuList) => {
            menuList.classList.add('active');
        });
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        menuList.forEach((menuList) => {
            menuList.classList.remove('active');
        });
        document.body.style.overflow = '';
    });
});


