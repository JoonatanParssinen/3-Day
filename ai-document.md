# Project Documentation: Simple Booking System

This project is a single-page web application for booking time slots. It allows users to select a date and time, fill in reservation details, and save them locally. It includes basic validation, visual feedback, and a simple admin-like debug view.

## File Structure

- **index.html**: Main structure containing the time grid, calendar selection, booking modal, logo, and debug area.
- **style.css**: Dark-themed styling for all elements, including the modal, responsive grid, animations (logo, toast), and interactive states.
- **script.js**: Logic for booking flow, local storage management, form validation, and "Easter egg" interactivity.
- **README.md**: User-provided explanations of code blocks.
- **locknkeygreen.png**: Project logo.
- **boop.wav**: Sound effect for logo interaction.

## Features & Implementation

### 1. Booking Flow
- **Calendar**: User must first select a date using the `<input type="date">` element.
    - *Validation*: If a user tries to click a time slot without a date, an alert appears.
    - *Reaction*: Changing the date immediately refreshes the grid (`updateGrid()`) to show availability for that specific day.
- **Time Selection**: A grid of options (9:00 - 17:00).
    - *Interaction*: Clicking an available slot opens the modal.
    - *State*: Booked slots have the `.reserved` class (greyed out, unclickable).
- **Reservation Details (Modal)**:
    - **Inputs**: Full Name, Phone Number, Email, Player Amount (Dropdown 1-5), Extra Details.
    - **Validation**: All fields are required. Empty fields turn red upon submission attempt.
    - **Submission**: On success:
        1. Data is saved to `localStorage` key `bookings`.
        2. A "Submit Successful" toast notification appears (bottom right).
        3. Modal closes and inputs are cleared.
        4. Grid refreshes to mark the new slot as reserved.

### 2. Debug & Admin View
- **Display**: A list of all bookings is rendered in the `#debug-info` container below the grid.
- **Content**: Shows Date/Time, Name, Contact info, Player count, and Details.
- **Management**: Each record has a red **Delete** button. Clicking it removes the booking from `localStorage` and immediately frees up the time slot.

### 3. UI/UX Design
- **Theme**: Dark mode aesthetic (grey/black backgrounds, green accents `#3fff72`).
- **Responsive Grid**: Time slots use `grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))` to adjust to screen size.
- **Feedback**:
    - Hover effects on slots and buttons.
    - Active click scale animations (`transform: scale(0.95)`).
    - Toast notification with fade-in/out animations.

### 4. Easter Egg (Logo)
- **Top Left Logo**: A fixed position logo (`.logo`).
- **Interactivity**: 
    - Hover: Scales up (1.3x).
    - Click: Plays `boop.wav` (with 1s cooldown) and triggers a heartbeat animation (`clickZoom`).
    - *Note*: This logic is handled in a separate `DOMContentLoaded` listener in `script.js`.

## Technical Details

### Local Storage Schema
The `bookings` key in `localStorage` stores an array of objects:
```json
[
  {
    "date": "2023-10-27",
    "time": "10:00",
    "Full Name": "John Doe",
    "Phone Number": "123456",
    "Email Address": "test@test.com",
    "Player Amount": "3",
    "Extra Details?": "None"
  }
]
```

### Key Functions
- `updateGrid()`: The core sync function. Reads selection, fetches storage, updates slot classes (`.reserved`), and re-renders the debug list.
- **Event Delegation**: Used for the delete buttons in the debug view to handle dynamic elements efficiently.
