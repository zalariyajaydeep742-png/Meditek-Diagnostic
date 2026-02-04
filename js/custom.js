document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 16); // Approximately 60 frames per second

    function updateCounter() {
      if (current < target) {
        current += increment;
        if (current > target) {
          current = target;
        }
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target; // Ensure it ends exactly on target
      }
    }
    updateCounter();
  });
});