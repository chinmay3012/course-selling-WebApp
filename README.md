MongoDB and Mongoose Integration Project
This repository contains a Node.js project that integrates MongoDB with Mongoose for database management. It defines schemas and models for users, admins, courses, and purchases, enabling efficient data handling and storage.

Features
User Management: Schema and model for storing user information, including email, password, first name, and last name.
Admin Management: Schema and model for storing admin information, similar to user management.
Course Management: Schema and model for storing course details such as title, description, price, image URL, and creator ID.
Purchase Management: Placeholder schema for purchase-related data (to be implemented).
Technologies Used
Node.js: Backend runtime environment.
MongoDB: NoSQL database for storing application data.
Mongoose: ODM (Object Data Modeling) library for MongoDB.

Installation
Clone the repository:
git clone https://github.com/username/repository-name.git

Navigate to the project directory:
cd repository-name

Install dependencies:
npm install

Usage
Set up a .env file in the root directory with the following variable:

MONGO_URL=<your-mongodb-connection-string>
Run the application:

node db.js

Project Structure
db.js: Contains the database connection and schema definitions for users, admins, courses, and purchases.
Models
User Model
email: Unique email address of the user.
password: Password for authentication.
firstName: First name of the user.
lastName: Last name of the user.
Admin Model
email: Unique email address of the admin.
password: Password for authentication.
firstName: First name of the admin.
lastName: Last name of the admin.
Course Model
title: Title of the course.
description: Description of the course.
price: Price of the course.
imageUrl: URL of the course image.
creatorId: ObjectId referencing the creator of the course.
Purchase Model
Placeholder schema for purchase-related data.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

License
This project is licensed under the MIT License. See the LICENSE file for details.