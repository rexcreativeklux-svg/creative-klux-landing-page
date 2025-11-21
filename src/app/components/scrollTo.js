// utils/scrollTo.js
export default function scrollToSection(id, behavior = 'smooth') {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector('header');
  const headerOffset = header ? header.offsetHeight : 0;
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset - 20; // 20 px gap

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
}