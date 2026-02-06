document.addEventListener('DOMContentLoaded', () => {
    const timeSlots = document.querySelectorAll('.time-slot');
    const modal = document.querySelector('.modal-overlay');
    const modalContainer = document.querySelector('.modal-container');

    let selectedSlot = null;
    const datePicker = document.querySelector('.date-picker');
    const debugInfo = document.getElementById('debug-info');

    function updateGrid() {
        const date = datePicker.value;
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        const reservedTimes = bookings
            .filter(b => b.date === date)
            .map(b => b.time);

        timeSlots.forEach(slot => {
            if (reservedTimes.includes(slot.textContent)) {
                slot.classList.add('reserved');
            } else {
                slot.classList.remove('reserved');
            }
        });

        // Update debug info with all bookings
        debugInfo.innerHTML = bookings.map((b, index) =>
            `<div style="border-bottom: 1px solid #444; padding: 5px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <strong>Date & Time: ${b.date} ${b.time}</strong><br>
                    Name: ${b['Full Name'] || 'N/A'}<br>
                    Phone: ${b['Phone Number'] || 'N/A'}<br>
                    Email: ${b['Email Address'] || 'N/A'}<br>
                    Players: ${b['Player Amount'] || 'N/A'}<br>
                    Details: ${b['Extra Details?'] || 'N/A'}
                </div>
                <button class="delete-btn" data-index="${index}" style="background-color: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px;">Delete</button>
            </div>`
        ).join('');
    }

    // Event delegation for delete buttons
    debugInfo.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
            bookings.splice(index, 1);
            localStorage.setItem('bookings', JSON.stringify(bookings));
            updateGrid();
        }
    });

    datePicker.addEventListener('change', updateGrid);
    // Initial load
    updateGrid();

    timeSlots.forEach(slot => {
        slot.addEventListener('click', (e) => {
            if (!datePicker.value) {
                alert("Please select a date first");
                return;
            }
            if (e.target.classList.contains('reserved')) return;
            selectedSlot = e.target;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    const submitBtn = document.querySelector('.submit-btn');
    const toast = document.getElementById('toast');
    const inputs = document.querySelectorAll('.modal-input');
    const selects = document.querySelectorAll('select.modal-input'); // Selects need special handling if included in generic query

    submitBtn.addEventListener('click', () => {
        let allFilled = true;
        let data = {};

        // Add date and time to data
        data['date'] = datePicker.value;
        data['time'] = selectedSlot ? selectedSlot.textContent : '';

        if (!data['date']) {
            alert("Please select a date first");
            return;
        }

        // Generic input handling
        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#3fff72';
                // Use placeholder as key, fallback for select which has no placeholder attribute usually visible in JS value
                // For select, we can use a custom attribute or just 'Player Amount' hardcoded if we knew index
                // But the user's select has no placeholder attribute in HTML (it has a default option)
                // Let's rely on placeholder for inputs, and handle select specifically if needed
                let key = input.getAttribute('placeholder');
                if (!key && input.tagName === 'SELECT') {
                    key = 'Player Amount';
                }
                if (key) {
                    data[key] = input.value;
                }
            }
        });

        if (allFilled) {
            // Save to localStorage
            let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
            bookings.push(data);
            localStorage.setItem('bookings', JSON.stringify(bookings));

            // Show Toast
            toast.className = "toast show";
            setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);

            // Close modal and reset
            modal.style.display = 'none';
            inputs.forEach(input => input.value = '');

            // Refresh UI
            updateGrid();
        }
    });
});






// for the logo :3
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const sound = document.getElementById('lockSound');
    let lastSoundTime = 0;
    const soundCooldown = 1000;

    logo.addEventListener('click', () => {
        const now = Date.now();

        if (now - lastSoundTime > soundCooldown) {
            sound.currentTime = 0;
            sound.play();
            lastSoundTime = now;
        }

        logo.classList.add('clicking');
        logo.addEventListener('animationend', () => {
            logo.classList.remove('clicking');
        }, { once: true });
    });
});