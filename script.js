document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  
  /*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills()
{
let itemClass = this.parentNode.className


for (i = 0; i < skillsContent.length; i++)
{
    skillsContent[i].className = 'skills__content skills__close'
}
if (itemClass === 'skills__content skills__close')
{
    this.parentNode.className = 'skills__content skills__open'
}

}

skillsHeader.forEach((el) =>
{
el.addEventListener('click', toggleSkills)
})