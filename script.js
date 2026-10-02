// RAMA TRAVELS - editable website interactions
const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress');
const heroCar = document.querySelector('.hero-car');

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${Math.min(100, (scrollY / max) * 100)}%`;
  nav.classList.toggle('scrolled', scrollY > 20);

  // Scroll-driven driving effect: the car subtly moves with page position.
  if (heroCar) {
    const travel = Math.min(130, scrollY * 0.18);
    heroCar.style.transform = `translateX(${travel}px)`;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min(i * 50, 250)}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('open');
});

document.querySelectorAll('.nav nav a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav').classList.remove('open'));
});

function setBookingValue(field, value) {
  const el = document.querySelector(`[name="${field}"]`);
  if (el) el.value = value;
}

document.querySelectorAll('.choose-car').forEach(btn => {
  btn.addEventListener('click', () => {
    setBookingValue('vehicle', btn.dataset.car);
    document.querySelector('#booking').scrollIntoView({behavior:'smooth'});
  });
});

document.querySelectorAll('.package-book').forEach(btn => {
  btn.addEventListener('click', () => {
    setBookingValue('trip', '3–4 Day Package');
    const notes = document.querySelector('[name="notes"]');
    notes.value = `Package requested: ${btn.dataset.package}`;
    document.querySelector('#booking').scrollIntoView({behavior:'smooth'});
  });
});

document.querySelector('#bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const v = Object.fromEntries(data.entries());

  const message =
`🚗 *RAMA TRAVELS — NEW BOOKING REQUEST*

👤 Name: ${v.name}
📞 Phone: ${v.phone}
📅 Travel Date: ${v.date}
⏰ Pickup Time: ${v.time}
📍 From: ${v.from}
🏁 To: ${v.to}
🚘 Vehicle: ${v.vehicle}
🔄 Trip Type: ${v.trip}
📝 Additional Requirements: ${v.notes || 'None'}

Please confirm availability and fare.`;

  // WhatsApp number: 9450627994 (India +91)
  const url = `https://wa.me/919450627994?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});
