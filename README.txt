LAB2 PORTFOLIO

 D,f
 LAB2 
 2026-11-03

ABOUT THE PROJECT

This project is a continuation of my Lab1 personal portfolio. In Lab2, I have worked on improving my website by adding JavaScript to make it more interactive.

My portfolio introduces me, shows my interests and future goals, and gives visitors the opportunity to leave feedback through a form.

The main focus of this assignment is to learn how JavaScript works with HTML and CSS, especially when validating information entered into a form.

TECHNOLOGIES I USED
HTML5 – Used to build the structure of the website.
CSS – Used for the design, colours and layout.
JavaScript – Used to validate the feedback form and add interactive features.
PROJECT STRUCTURE
index.html – Main portfolio page.
styles.css – Website design and responsive layout.
script.js – JavaScript code for the feedback form.
image/ – Images used on the website.
README.txt – Project information and documentation.
.gitignore – Files that should not be included in the Git repository.

IMPLEMENTED FEATURES

Grade 3 – Feedback Form

I added a feedback form to my portfolio using HTML, CSS and JavaScript.

The form contains:

name
Email
Topic of interest
Comments
Submit button
Clear button

JAVASCRIPT FUNCTIONALITY

I used JavaScript to make the feedback form interactive and check the information entered by visitors.

The form includes:

Checking that the name contains at least 2 characters.
Checking that the email address has a valid format.
Making sure that a topic is selected.
Checking that comments contain at least 5 characters.
Checking the website address if one is entered.
A live character counter that updates while typing.
Error messages when information is missing or incorrect.
Red borders for invalid fields.
Green borders for valid fields.
Automatically removing the thank you message after 4 seconds.
A clear button that resets the form and removes the error messages.

The form is checked directly in the browser using JavaScript. It does not send information to a server or email address.

DESIGN AND RESPONSIVE LAYOUT

I decided to keep the original design from Lab 1 and build on it rather than change the whole website.

I continued using my seed colour (#2A9D8F) together with dark green details.

I added some styling to the feedback form to make it easier to use, including:

Visible focus effects when clicking on form fields.
Different border colours for valid and invalid fields.
Buttons with hover effects.
Clear error and success messages.
Responsive layouts for desktop and mobile screens.

HOW TO RUN THE PROJECT
Download or clone the project from GitHub.
Open the project folder.
Open index.html in a web browser.
Navigate to the Contact section.
Enter information into the feedback form.
Try submitting the form with both incorrect and correct information.


TESTING

I tested the feedback form with different types of information to check that the validation works correctly.

Some of the things I tested were:

Submitting the form without filling in the fields.
Entering an incorrect email address.
Entering a name with fewer than 2 characters.
Trying to submit without selecting a topic.
Writing comments shorter than 5 characters.
Entering a website address.
Submitting the form with correct information.
Checking that the Clear button resets the form.
Checking that the character counter updates while typing.
Checking that the thank you message disappears after 4 seconds.

GIT REPOSITORY

GitHub repository:

https://github.com/DF19CODE/Lab2-portfolio.git

REFLECTION

During this assignment, I learned more about JavaScript and how it can be used to make a website interactive.

I learned how to work with functions, event listeners, conditions and DOM manipulation. I also got more experience connecting JavaScript with HTML elements.

One problem I had during this assignment was connecting the HTML elements to my JavaScript code. Some IDs were different, which caused errors and made my form stop working. I fixed this by checking the HTML and JavaScript files and making sure the IDs matched. 

The part I feel most confident explaining is the feedback form validation and the character counter. I understand how JavaScript checks the information and displays messages when someone enters something incorrectly.

If I had more time, I would like to improve the design and add more interactive features to my portfolio.