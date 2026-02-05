<p>
<details>
<summary>Code explanations</summary>

Index.html Explanation [code](index.html)

    First it sets the languange to English with <html lang="en">

    <meta charset="UTF-8"> does Charachter Encoding, it makes sure that the website can display all the characters correctly.

    <title>Time Grid</title> makes the title of the website appears in the browser tab.

    <link rel="stylesheet" href="style.css"> links the website to the style.css file.

    <div class="main-container"> creates a container for the time slots.

    <div class="time-slot"> creates a time slot.

    <div class="time-slot">9:00</div> creates a time slot with the text "9:00" in it.
    same to 24:00

    <input type="date" class="date-picker"> creates a date picker.

    <script src="script.js"></script> links the website to the script.js file.
    
Style.css Explanation [code](style.css)

    In the body it sets the font, centers the content on the page and sets the background color.

    in .time-grid it makes the display to a grid, sets the columns and gap between them.
    also defines the width and max-width of the grid.
    borader radius is set to 8px. which defines how round the corners are

    in .time-slot it makes the display to a flexbox, centers the content and sets the background color and border.

script.js Explanation [code](script.js)

    first it waits for the page to load
    then it selects all the time slots and the modal, the script adds an lisener that waits for a click on the time slots
    when a time slot is clicked it opens the modal
    then when the user clicks outside the modal
    then when the user clicks outside the modal it closes it

    The program retrieves the user-selected day from the datePicker element.
    After that, the program reads from the browser's localStorage if there are already reservations,
    if nothing is found in localStorage, an empty array is used.






</details>

<details><summary>Cool Dropdown #2</summary>

Coming soon

</details>
</p>
