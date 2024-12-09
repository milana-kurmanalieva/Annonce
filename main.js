const fashionSlides = document.querySelector('.slides');
const fashionSlide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 1;
const slideCount = fashionSlide.length;

const firstClone = fashionSlide[0].cloneNode(true);
const lastClone = fashionSlide[slideCount - 1].cloneNode(true);

fashionSlides.appendChild(firstClone);
fashionSlides.insertBefore(lastClone, fashionSlide[0]);

fashionSlides.style.transform = `translateX(-${currentIndex * 100}%)`;

const updateSlider = () => {
  fashionSlides.style.transition = 'transform 0.5s ease-in-out';
  const offset = -currentIndex * 100;
  fashionSlides.style.transform = `translateX(${offset}%)`;
};

nextBtn.addEventListener('click', () => {
  if (currentIndex >= slideCount) {
    currentIndex = 0;
    fashionSlides.style.transition = 'none';
    fashionSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
    setTimeout(() => {
      currentIndex++;
      updateSlider();
    }, 0);
  } else {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex <= 0) {
    currentIndex = slideCount;
    fashionSlides.style.transition = 'none';
    fashionSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
    setTimeout(() => {
      currentIndex--;
      updateSlider();
    }, 0);
  } else {
    currentIndex--;
    updateSlider();
  }
});

const scrollToTopButton = document.querySelector('.button__to__top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeMenu = document.getElementById('closeMenu');

    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        burgerMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    } else {
        burgerMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    }
}



