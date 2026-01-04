// اختر كل الأيقونات
const scrollElements = document.querySelectorAll('.animate-icon');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const hideScrollElement = (element) => {
  element.classList.remove('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 50)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el); // إعادة الانيميشن عند النزول أو الصعود
    }
  });
};

// استمع لحدث التمرير
window.addEventListener('scroll', handleScrollAnimation);

// نفذ أول مرة عند تحميل الصفحة
handleScrollAnimation();
