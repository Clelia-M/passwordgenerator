# 🤐 Password-Generator

## Table of Contents
- [Scope](#scope-of-project)
- [Workflow](#workflow)
- [Final result](#final-results)

# Scope of the project
Application that an employee can use to generate a random password based on criteria they’ve selected. Created by modifying a given starter code.

# Workflow
1. **Function to prompt user for password options:** the code begins by prompting the user for the length of the password and storing the length in a variable. It then checks if the length is a number between 10 and 64 as per the challenge's instructions. It also prompts the user to try again if the length is not correct. Next, the function prompts the user to confirm if they want special characters, numbers, lowercase or uppercase characters and stores them. The code also ensures that at least one character type is selected. If not, it prompts the user to select at least one. Finally, the function stores the length chosen and the options in regards to the different characters.

2. **Function for getting a random element from an array:** the function declares a variable and assigns it the value of a random index for the array. Next, it declares a new variable and assigns it the value of the element at the randIndex in the array. Finally, it returns the value of this random element.  

3. **Function to generate password with user input:** the function is written to generate a password based on the user's options stored in the first function. It begins by declaring an empty array for the result. Next, it includes several conditional statements that add the carachters to the result using concat method. Next, a for loop go through the options obejct to create a password. And, it calls the getRandom function to select a random character from the result array. Once the for loop is completed the result array is transformed in a string using the join method and put in the correct length using the slice method.

## Link to deployed Application
[Password Generator](https://clelia-m.github.io/passwordgenerator/)

## Final Results
![Password Generator result](https://github.com/Clelia-M/passwordgenerator/blob/22d615de67c3d80705089b17070385c0aca26370/Password%20Generator_final%20results.png)
