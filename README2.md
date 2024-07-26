# dynamic-question-flow
ui design to collect user info that simple, efficient. *(done as an employment proposal to LYKAS)


# Dynamic Question Flow System

## Project Overview
This project is a dynamic question flow system designed to collect user information efficiently. The system presents questions based on the user's previous answers, ensuring that only relevant questions are displayed. The focus is on gathering personal, partner, children, and real estate information in a structured manner.

## Features
- **User Authentication**: Secure login system.
- **Dynamic Question Flow**: Questions adjust based on user responses.
- **Conditional Rendering**: Specific questions appear only when relevant.
- **Responsive UI**: User-friendly and mobile-compatible interface.
- **Data Persistence**: Answers are saved in local storage for continuity.

## Technologies Used
- **Vue.js**: For building the dynamic front-end.
- **Vue Router**: For handling multi-page navigation.
- **HTML & JavaScript**: Basic web technologies.

## Setup Instructions

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Basic knowledge of Vue.js and JavaScript.

### Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/ashleyer/dynamic-question-flow.git
   cd dynamic-question-flow
   ```

2. **Open in VS Code**:
   ```sh
   code .
   ```

3. **  **:

4. **   **:

5. **Start a Local Server**:
   - Open terminal and run:
     ```sh
     python -m http.server 8000
     ```
   - Open your browser and go to `http://localhost:8000`.

## Usage

### User Interaction Flow

1. **Personal Information**:
   - User provides their full legal name, birth year, and marital status.
   - Conditional question on whether the user has children.

2. **Partner Information**:
   - If the user is not single, they provide their partner's information.

3. **Children Information**:
   - If the user has children, they provide details about their children.

4. **Primary Residence Information**:
   - User indicates if they own their primary residence.
   - If yes, additional questions about mailing address and real estate value.

5. **Other Real Estate Information**:
   - User indicates if they own other real estate.
   - If yes, they provide the value of the real estate.
   - If no, they are asked about future real estate plans and financial goals.

6. **Preview Page**:
   - All collected answers are displayed for review.
   - User can go back and edit any section.

### Navigation
- **Next Button**: Moves to the next relevant question or section.
- **Previous Button**: Goes back to the previous question or section.
- **Preview Page**: Displays all answers for review and editing.

## Development Notes

### Project Structure
```
dynamic-question-flow/
├── index.html
└── app.js
```

### Key Components
- **PersonalInfo**: Handles personal details.
- **ChildrenInfo**: Collects information about children.
- **ResidenceInfo**: Gathers primary residence details.
- **ResidenceValue**: Collects residence value information.
- **OtherRealEstate**: Gathers information about other real estate properties.
- **FutureRealEstate**: Asks about future real estate plans.
- **FinancialGoals**: Collects information about financial goals.
- **Preview**: Displays all collected information for review.

## Contributing
- Fork the repository.
- Create a new branch for your feature: `git checkout -b feature-name`.
- Commit your changes: `git commit -m 'Add some feature'`.
- Push to the branch: `git push origin feature-name`.
- Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact
For any questions or feedback, please contact [ashleye.romano@gmail.com](mailto:ashleye.romano@gmail.com).