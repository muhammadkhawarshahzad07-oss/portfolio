 AOS.init({ duration: 1000 });

  /* Typing effect */
  const texts = ["System Support Analyst", "Enterprise Network Specialist", "Retail IT Operations Expert"];
  let textIndex = 0, charIndex = 0, isDeleting = false, currentText = "";

  function typeWriter() {
    if (textIndex < texts.length) {
      if (!isDeleting && charIndex <= texts[textIndex].length) {
        currentText = texts[textIndex].substring(0, charIndex++);
      } else if (isDeleting && charIndex >= 0) {
        currentText = texts[textIndex].substring(0, charIndex--);
      }
      document.getElementById("typing").textContent = currentText;

      if (charIndex === texts[textIndex].length) {
        isDeleting = true;
        setTimeout(typeWriter, 1500);
        return;
      }
      if (charIndex === 0) {
        isDeleting = false;
        textIndex++;
      }
    }
    if (textIndex === texts.length) textIndex = 0;
    setTimeout(typeWriter, 100);
  }
  typeWriter();

  /* Animate skill bars */
  const skills = document.querySelectorAll(".skill-fill");
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.getAttribute("style").match(/width:\s*(\d+)%/)[1] + "%";
      }
    });
  }, { threshold: 0.5 });

  skills.forEach(skill => skillObserver.observe(skill));

/* Profile image scroll effect */

window.addEventListener("scroll", function () {

  const profilePic = document.getElementById("profilePic");

  if (window.scrollY > 120) {
    profilePic.classList.add("small");
  } else {
    profilePic.classList.remove("small");
  }

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target + "+";
    }
  };
  updateCounter();
});


/* Active menu highlight */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});

document.getElementById("darkToggle").onclick = function(){
  document.body.classList.toggle("dark-mode");
};

window.addEventListener("load", ()=>{
  document.getElementById("loader").style.display="none";
});
/* Hire Form Success Message */

const hireForm = document.getElementById("hireForm");

if(hireForm){
  hireForm.addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("successMsg").style.display = "block";

    hireForm.reset();
  });
}
