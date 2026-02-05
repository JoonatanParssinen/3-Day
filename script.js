document.addEventListener('DOMContentLoaded', () => {
    const timeSlots = document.querySelectorAll('.time-slot');
    const modal = document.querySelector('.modal-overlay');

    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
