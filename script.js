// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.primary-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Contact form -> opens the visitor's email client with the details filled in.
  const form = document.getElementById('repair-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const device = data.get('device') || '';
      const service = data.get('service') || '';
      const contact = data.get('contact') || '';
      const details = data.get('details') || '';

      if (!name || !contact || !details) {
        status.textContent = 'Fill in your name, contact info, and a description before sending.';
        status.style.color = '#e0a15c';
        return;
      }

      const subject = `Repair request: ${device || 'device'} — ${name}`;
      const body =
        `Name: ${name}\n` +
        `Device: ${device}\n` +
        `Service needed: ${service}\n` +
        `Contact info: ${contact}\n\n` +
        `Details:\n${details}`;

      const mailto = `mailto:REPLACE_WITH_EMAIL@corecoderepairs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      status.textContent = 'Opening your email app with the request filled in — send it to submit.';
      status.style.color = '';
    });
  }
});
