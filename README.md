<p>
<details>
<summary>Code explanations</summary>

Index.html Explanation [code](index.html)

    First, it sets the languange to English with <html lang="en">

    <meta charset="UTF-8"> does Character Encoding. It makes sure that the website can display all the characters correctly.

    <title>Time Grid</title> makes the title of the website appears in the browser tab.

    <link rel="stylesheet" href="style.css"> links the website to the style.css file.
	
	<img class="logo" src="locknkeygreen.png" id="logo"/> adds the site logo.

    <div class="main-container"> creates a container for the time slots.

    <div class="time-slot"> creates a time slot.

    <div class="time-slot">9:00</div> creates a time slot with the text "9:00" in it.
    same to 24:00

    <input type="date" class="date-picker"> creates a date picker.

    <script src="script.js"></script> links the website to the script.js file.
    
Style.css Explanation [code](style.css)

    In the body it sets the font, centers the content on the page, and sets the background color.

    in .time-grid it makes the display a grid, and sets the columns and gap between them.
    also defines the width and max-width of the grid.
    border radius is set to 8px, which defines how round the corners are.

    in .time-slot it makes the display to a flexbox, centers the content and sets the background color and border.

	in .logo it defines the logo and how it works.
	the logo will always be on the top-left, and, when hovered over, changes the mouse to have a question mark, and makes it bigger.
	additionally, if clicked, it will shrink, and play a plushie squish sound, before growing back into regular size.
	boop the logo, why don't you? XD

Script.js Explanation [code](script.js)

    first it waits for the page to load.
    then it selects all the time slots and the modal, the script adds an listener that waits for a click on the time slots.
    when a time slot is clicked it opens the modal.
    then when the user clicks outside the modal it closes it.

	The program retrieves the user-selected day from the datePicker element.
    After that, the program reads from the browser's localStorage if there are already reservations,
    if nothing is found in localStorage, an empty array is used.

	also, in the addition of the logo,
	seeks out the logo and lockSound,
	and waits for a click
	when clicked, it will play a sound,
	trigger an animation,
	and start a sound cooldown
	once cooldown is over,
	the sound may play again on next click

</details>

<details><summary>How the program works?</summary>

    The program works by using the browser's LocalStorage to store the reservations.
    When the page is loaded, the program checks if there are any reservations in the LocalStorage.
    If there are, the program will display them in the time grid.
    If there are no reservations, the program will display an empty time grid.

    1. Download .ZIP file
    2. Extract the .ZIP file
    3. Open file explorer, and navigate to the extracted folder
    4. Double click index.html file
    
    When you doble click and open the file, it will open in your browser, and you can use it.

    **5. Select a date, and a time slot.**
    **6. Fill in the form, and click the submit button.**
    7. The time slot will be marked as reserved, and the form will be reset.
    8. The reservation will be saved in the browser´s LocalStorage.
    
    If you refresh the page, the reservation will still be there.

    9. If you click the delete button, the reservation will be deleted.
    10. If you click the logo, it will play a sound.

</details>



<details><summary>Funni Dropdown</summary>

![soder](https://github.com/user-attachments/assets/aeff229a-49ce-41d2-ab0f-9bfaf93ec03e)

</details>
</p>
