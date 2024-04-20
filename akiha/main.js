const popup = document.querySelectorAll(".popup");

popup.forEach(p => {
    window.addEventListener("scroll", function() {
        /* if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          p.classList.add("visible");
          console.log('en alt')
        } else {
          p.classList.remove("visible");
        } */

        if (window.innerWidth <= 600) {
            if (window.scrollY >= 8000) { 
                p.classList.add("visible");
            } else {
                p.classList.remove("visible");
            }
        } else {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                p.classList.add("visible");
                console.log('en alt')
            } else {
                p.classList.remove("visible");
            }
        }
    });
});


const audio = document.querySelectorAll(".audio");
const no = document.querySelectorAll(".no");

no.forEach(n => {
    n.addEventListener("click", function() {
        console.log('butona tıkladın');
        audio.forEach(a => {
            a.play();
            console.log('audio çalışıyor');
        });
    });
});

const srn = document.querySelector(".s-right-new");
const hide = document.querySelector(".hide");

if(window.innerWidth > 800) {
    srn.style.visibility = "hidden";
    srn.style.display = "none";
    document.body.style.overflow = "hidden";
    hide.style.visibility = "hidden";
    hide.style.display = "none";
}


