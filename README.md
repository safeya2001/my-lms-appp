Edusion Learning Platform Project 

Project Overview 

This project is an interactive web application built with the ReactJS library, aiming to create a comprehensive educational platform. The application focuses on presenting educational content in an attractive way and includes various sections such as popular courses, categories, FAQs, and more. 

 

 

 

Key Features 

Homepage: Displays an engaging "Hero" section with an introduction to the platform. 

About Us: Detailed information about the platform and its goals. 

Course Categories: A browseable list of the main educational categories available. 

Popular Courses: Displays the most in-demand courses. 

Video Section: A dedicated section for a promotional video about the platform. 

FAQs: An interactive section to answer frequently asked questions. 

Partners Section: Showcases partner companies and organizations. 

Multiple Routes (React Router): Uses react-router-dom for navigation between different pages like the home page, "About" page, and "Courses" page. 

 

 

Technologies Used 

React: A JavaScript library for building user interfaces. 

React Router: For managing application routes (URLs). 

CSS: For styling and component design. 

Tailwind CSS: Included via CDN for faster styling. 

Lucide React: An icon library for React. 



 

 

Getting Started 

Prerequisites 

Make sure you have Node.js and npm installed on your machine. 

Installation and Running 

Clone the repository: 

Bash 

git clone <your_project_repo_link_here> 
cd <your_project_folder_name> 
 

Install the necessary dependencies: 

Bash 

npm install 
 

Run the application: 

Bash 

npm start 
 

The application will run in development mode and will automatically open in your browser at http://localhost:3000. 

 

Folder Structure 

The project's folder structure follows the standard design for React applications: 

my-project/ 
├── node_modules/ 
├── public/ 
│   ├── index.html 
│   └── ... 
├── src/ 
│   ├── components/ 
│   │   ├── AboutSection.jsx 
│   │   ├── CourseCategories.jsx 
│   │   ├── PopularCourses.jsx 
│   │   ├── FAQs.jsx 
│   │   ├── ... 
│   ├── style/ 
│   │   ├── global.css 
│   │   ├── HeroSection.css 
│   │   ├── PopularCourses.css 
│   │   ├── ... 
│   ├── App.js 
│   ├── index.js 
│   └── ... 
├── .gitignore 
├── package.json 
└── README.md 
 

 

 
