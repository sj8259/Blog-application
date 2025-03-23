# Hacker Nights Blog

A minimalist blog application with a dark, high-contrast theme inspired by late-night coding sessions.

## Description

Hacker Nights Blog is a simple, lightweight blog application built with Node.js, Express.js, and EJS. It features a dark, high-contrast theme that's easy on the eyes during those late-night coding sessions. The application allows users to create, read, update, and delete blog posts.

## Features

- **Post Creation**: Create new blog posts with a title and content
- **Post Viewing**: View all posts on the home page with previews
- **Post Management**: Edit and delete existing posts
- **Responsive Design**: Optimized for both desktop and mobile devices
- **High Contrast Theme**: Dark theme with high contrast colors for better readability

## Technical Stack

- **Backend**: Node.js with Express.js
- **Frontend**: EJS templating engine
- **Styling**: Custom CSS with responsive design
- **Data Storage**: In-memory storage (posts will not persist between server restarts)

## Installation

1. Clone the repository:

2. Install dependencies:

3. Start the server:

4. Open your browser and navigate to:
http://localhost:3000



## Project Structure

hacker-nights-blog/
├── index.js # Main server file
├── package.json # Project dependencies
├── public/ # Static files
│ └── css/ # CSS stylesheets
│ └── hacker-nights.css # Dark theme stylesheet
└── views/ # EJS templates
├── home.ejs # Home page template
├── compose.ejs # New post form template
├── post.ejs # Single post view template
├── edit.ejs # Edit post form template
└── partials/ # Reusable template parts
├── header.ejs # Header partial
└── footer.ejs # Footer partial



