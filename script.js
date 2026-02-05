document.addEventListener('DOMContentLoaded', () => {
    const timeSlots = document.querySelectorAll('.time-slot');
    const modal = document.querySelector('.modal-overlay');
    const modalContainer = document.querySelector('.modal-container');

    // Add three text fields to the modal container
    modalContainer.innerHTML = `
        <div style="padding: 20px; display: flex; flex-direction: column; gap: 10px;">
            <input type="text" placeholder="Etu- ja sukunimi">
            <input type="text" placeholder="Puhelinnumero">
            <input type="text" placeholder="Sähköpostiosoite">
        </div>
    `;

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
