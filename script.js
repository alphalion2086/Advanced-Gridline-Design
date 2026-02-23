const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();

    formMessage.textContent = `Thanks, ${name || 'there'}! Your message has been received.`;
    contactForm.reset();
  });
}
