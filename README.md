# Conditional Question Flow System

## Overview

The Conditional Question Flow System is a dynamic web application designed to streamline the collection of user information by presenting relevant questions based on previous responses. This ensures a more efficient and tailored data collection process. The system also gathers detailed address and real estate information, adjusting questions based on whether the user owns their primary residence and other real estate properties.

## Features

1. **Dynamic Question Flow**
   - Subsequent questions are determined based on the user's responses to initial queries.
   - Only relevant questions are presented, ensuring a streamlined user experience.

2. **User Authentication**
   - Secure login and registration system to protect user data.

3. **Comprehensive Data Collection**
   - Collects personal information, partner information (if applicable), children information, primary residence details, other real estate details, and real estate value.

4. **Navigation Buttons**
   - Each page includes "Next" and "Previous" buttons for easy navigation.
   - The first page does not have a "Previous" button.
   - The last page (Preview page) does not have a "Next" button.

5. **Preview Page**
   - At the end of the questionnaire, users can review all their answers on a summary page.
   - Only the questions that satisfy the conditions are displayed.

## How to Use

### Getting Started

1. **Login/Register**

   - Navigate to `/login` to log in with your credentials.
   - Navigate to `/register` to create a new account.

2. **Complete the Questionnaire**

   - Start the questionnaire from the root path `/`.
   - Fill out your personal information.
   - Navigate through the pages using the "Next" and "Previous" buttons.
   - Review your answers on the preview page and submit the form.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/conditional-question-flow.git
   cd conditional-question-flow

   	2.	Install Dependencies
    npm install

    Running the Application

	3.	Run the Development Server
    npm run serve

    tests here

    Project Structure
    conditional-question-flow/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ChildrenInformation.vue
│   │   ├── NavigationButtons.vue
│   │   ├── OtherRealEstate.vue
│   │   ├── PartnerInformation.vue
│   │   ├── PersonalInformation.vue
│   │   ├── PrimaryResidence.vue
│   │   ├── PreviewPage.vue
│   │   ├── RealEstateValue.vue
│   ├── views/
│   │   ├── Login.vue
│   │   ├── Register.vue
│   ├── App.vue
│   ├── main.js
├── tests/
│   ├── unit/
│   │   ├── PersonalInformation.spec.js
├── cypress/
│   ├── integration/
│   │   ├── personal_information_spec.js
│   ├── plugins/
│   │   ├── index.js
│   ├── support/
│   │   ├── commands.js
│   │   ├── index.js
├── .gitignore
├── babel.config.js
├── cypress.json
├── jest.config.js
├── package.json
├── README.md

Contact

For any questions or support, please contact ashleye.romano@gmail.com.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements

Special thanks to the LYKAS team for the opportunity to create this project.


Known Bugs/Future Improvements
-previous buttons don't work
-css could be better 
-login and register have to be entered into the http address to access
-login is only a simulation, could be implemented with api call
-readme needs some markdown translation
-testing unfinished
-not deployed to cloud