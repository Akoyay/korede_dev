/* =========================================
   KOREDEDEV OFFICIAL WEBSITE
   script.js
   PART 1
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SELECT ELEMENTS
    ===================================== */

    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav ul li a");
    const revealElements = document.querySelectorAll(
        ".about, .skills, .why, .featured, .cta, .services-page, .process, .contact, .portfolio-hero, .featured-project, .portfolio-card"
    );

    const form = document.querySelector("form");

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");



    /* =====================================
       STICKY NAVBAR
    ===================================== */

    function navbarScroll(){

        if(!header) return;

        if(window.scrollY > 40){

            header.style.padding = "0";

            header.style.background = "rgba(13,17,23,.95)";

            header.style.backdropFilter = "blur(18px)";

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.35)";

        }

        else{

            header.style.background =
                "rgba(13,17,23,.70)";

            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", navbarScroll);

    navbarScroll();



    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const currentPage =
        window.location.pathname.split("/").pop();

    navLinks.forEach(link=>{

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if(href === currentPage ||

            (currentPage==="" && href==="index.html")){

            link.classList.add("active");

        }

    });



    /* =====================================
       SCROLL REVEAL
    ===================================== */

    revealElements.forEach(el=>{

        el.style.opacity="0";

        el.style.transform="translateY(50px)";

        el.style.transition=
            "opacity .8s ease, transform .8s ease";

    });

    const reveal = ()=>{

        revealElements.forEach(el=>{

            const top = el.getBoundingClientRect().top;

            const visible =
                window.innerHeight-120;

            if(top<visible){

                el.style.opacity="1";

                el.style.transform="translateY(0)";

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();



    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    document.querySelectorAll('a[href^="#"]')
    .forEach(anchor=>{

        anchor.addEventListener("click",e=>{

            const target =
                document.querySelector(
                    anchor.getAttribute("href")
                );

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });



    /* =====================================
       MOBILE MENU
    ===================================== */

    if(menuToggle && navMenu){

        menuToggle.addEventListener("click",()=>{

            navMenu.classList.toggle("show");

            menuToggle.classList.toggle("open");

        });

        navLinks.forEach(link=>{

            link.addEventListener("click",()=>{

                navMenu.classList.remove("show");

                menuToggle.classList.remove("open");

            });

        });

    }


     /* =====================================
   CONTACT FORM → WHATSAPP
===================================== */

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name =
            form.querySelector('input[type="text"]').value.trim();

        const email =
            form.querySelector('input[type="email"]').value.trim();

        const message =
            form.querySelector("textarea").value.trim();

        if(!name || !email || !message){

            alert("Please fill in all fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){

            alert("Please enter a valid email address.");

            return;

        }

        const whatsappMessage = encodeURIComponent(

    `Hello KoredeDEV,

    My name is: ${name}

    Email: ${email}

    Project Details:
    ${message}`

        );

        window.open(

            `https://wa.me/2347039329092?text=${whatsappMessage}`,

            "_blank"

        );

        form.reset();

    });

    }


    /* =====================================
       BUTTON RIPPLE EFFECT
    ===================================== */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transition=".35s";

        });

    });



    /* =====================================
       CARD HOVER EFFECT
    ===================================== */

    const cards=document.querySelectorAll(

        ".skill-card, .project-card, .portfolio-card, .why-card, .service-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.background=

            `radial-gradient(circle at ${x}px ${y}px,
            rgba(45,140,255,.12),
            #161B22 70%)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background="#161B22";

        });

    });



    /* =====================================
       HERO IMAGE PARALLAX
    ===================================== */

    const heroImage=document.querySelector(".hero-image img");

    window.addEventListener("mousemove",(e)=>{

        if(!heroImage) return;

        const x=(window.innerWidth/2-e.clientX)/45;

        const y=(window.innerHeight/2-e.clientY)/45;

        heroImage.style.transform=

            `translate(${x}px,${y}px)`;

    });



    /* =====================================
       FADE HERO ON SCROLL
    ===================================== */

    const hero=document.querySelector(".hero");

    window.addEventListener("scroll",()=>{

        if(!hero) return;

        hero.style.opacity=

            1-window.scrollY/700;

    });



    /* =====================================
       PROJECT CARD ANIMATION
    ===================================== */

    const projects=document.querySelectorAll(

        ".project-card, .portfolio-card"

    );

    projects.forEach(project=>{

        project.addEventListener("mouseenter",()=>{

            project.style.transition=".35s";

        });

    });
    

    /* =====================================
   LOADING SCREEN
===================================== */

const loader = document.getElementById("loader");

window.addEventListener("load",()=>{

    setTimeout(()=>{

        if(loader){

            loader.classList.add("loader-hide");

        }

    },1200);

});



    /* =====================================
       CONSOLE MESSAGE
    ===================================== */

    console.log(

`%c
KoredeDEV Official Website

Website Loaded Successfully.

Designed & Developed by Akorede.
`,
"color:#2D8CFF;font-size:15px;font-weight:bold;"
);

});