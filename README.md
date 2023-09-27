# Basic Password Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |
| JavaScript| [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)|  
| Git | [https://git-scm.com/](https://git-scm.com/)     |   

## Description 

[Visit the Deployed Site](https://jacastro619.github.io/password-generator/)

In this password generator project, I was tasked with creating a function in an existing JavaScript file to provide functionality for the password generator app. The function I created is executed when the 'generate password' button is clicked. The password generator will then ask a series of questions to determine which characters the user would like the password generator to include. Once the password generator receives the responses, it will provide a password based on the accepted criteria of the user. The generated password will appear in the secure password box.

## Usage 

- The Generate Password button: Clicking the 'Generate Password' button will activate a series of questions to determine what your password will contain.

<div style="text-align:center">

![Generate password button screenshot](./Assets/generate%20button.JPG)

</div>

------

- Character Length Prompt: After the generate button has been clicked on, a prompt window will appear asking the user to type the number of characters the password will have. Note: The password must be a chracter length between 8 and 128.

<div style="text-align:center">

![character length prompt screenshot](./Assets/length%20box.JPG)

</div>

------

- Password Criteria Confirmations: Once the user determines the length of the password, a series of confirmation prompts will appear in the order of the images below. If the user wishes to include the type of character defined in the confirmation window, select "Okay" otherwise select "Cancel"

<div style="text-align:center">

![uppercase confirmation box screenshot](./Assets/uppercase%20box.JPG)

------

![lowercase confirmation box screenshot](./Assets/lowercase%20box.JPG)

------

![numbers confirmation box screenshot](./Assets/number%20box.JPG)

------

![special confirmation box screenshot](./Assets/special%20box.JPG)

------
</div>

- Once at least one of the confirmation windows was accepted, a password containing the accepted criteria will be populated in the password box as in the image below.

<div style="text-align:center">

![password example screenshot](./Assets/password%20example.JPG)

</div>

## Learning Points 

I learned a lot during the duration of completing this project. Applying logic in a function to accomplish a given task was a great way to learn different aspects of JavaScript. Understanding 'scope' and how it matters when calling functions or referencing variables was a crucial part of this project. I was able to learn how to use 'prompt()', 'confirm()', and 'alert()' properly, and store the user's response in a variable that I can reference later in the function. I was also able to properly use 'string' and 'array' methods to accomplish the desired output of my function. I was able to take what I learned in a short amount of time and apply it to complete this project successfully, using my new skills that will continue to grow.

## Author Info

Created by Jorge Castro, a student at UC Berkeley Full Stack Coding Academy. For more information go to https://bootcamp.berkeley.edu/coding/

- [Portfolio](https://jacastro619.github.io/my-portfolio/)

- [LinkedIn](https://www.linkedin.com/in/jorge-castro-2a9545177/)

- [GitHub](https://github.com/Jacastro619)

