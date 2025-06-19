// On page load, trigger fade-in
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
// Animate bars when scrolled into view
const bars = document.querySelectorAll('[data-bar]');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const percent = entry.target.getAttribute('data-bar');
      entry.target.style.width = percent + '%';
    }
  });
}, { threshold: 0.5 });

bars.forEach(bar => barObserver.observe(bar));
// Quote zoom in/out animation
const quote = document.getElementById('floating-quote');
const quoteObserver = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    quote.classList.remove('opacity-0', 'scale-90');
    quote.classList.add('opacity-100', 'scale-100');
  } else {
    quote.classList.remove('opacity-100', 'scale-100');
    quote.classList.add('opacity-0', 'scale-125');
  }
}, { threshold: 0.5 });

quoteObserver.observe(quote);
