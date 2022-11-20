document.querySelectorAll('.faq__item').forEach(function (faqDropdownWrapper) {
  const faqDropdownButton = faqDropdownWrapper.querySelector('.faq__link');
  const faqDropdownText = faqDropdownWrapper.querySelector('.faq__subitems');
  const faqDropdownButtonArrow = faqDropdownWrapper.querySelector('.faq__arrow');
  faqDropdownButton.addEventListener('click', function (e) {
    e.stopPropagation();
    faqDropdownText.classList.toggle('faq__subitems-visible');
    faqDropdownButton.classList.toggle('active');
    faqDropdownButtonArrow.classList.toggle('active');
  });
  document.addEventListener('click', function (e) {
    if (e.target !== faqDropdownButton) {
      faqDropdownText.classList.remove('faq__subitems-visible');
      faqDropdownButton.classList.remove('active');
      faqDropdownButtonArrow.classList.remove('active');
    }
  })
})