// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Hide all accordion content on page load
accordionItems.forEach(item => {
  const content = item.querySelector('.accordion-content');
  content.style.display = 'none';
});

// Add click event listener to each accordion header
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const icon = item.querySelector('.accordion-icon');
  header.addEventListener('click', () => {
    // Toggle the active class on the clicked accordion item
    item.classList.toggle('active');

    // Toggle the display of the accordion content
    const content = item.querySelector('.accordion-content');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';

    // Toggle the rotation of the accordion icon
    icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
  });
});