Here's the updated README with the correct version specifications for `yarn` compared to `npm`:

---

# More Than Just A Lunch - Web Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App Locally](#running-the-app-locally)
  - [API Integration](#api-integration)
    - [Adding a Verified Email Address](#adding-a-verified-email-address)
- [Deployment](#deployment)
  - [Deploying to Vercel](#deploying-to-vercel)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction

Welcome to **More Than Just A Lunch**, a vibrant platform designed to foster connections and promote meaningful events. This web application is your gateway to discovering our mission, exploring upcoming events, and engaging with a community that believes in the power of gathering around a meal.

## Features

- **Dynamic Image Slideshow**: Captivating visuals on the homepage that set the tone for the experience.
- **Impactful Messaging**: A strong, clear message that resonates with the values of our community.
- **Easy Navigation**: Quick access to event registration, information about our mission, and user testimonials.
- **Email Integration**: Seamless communication through our integration with the SendGrid API.

## Technologies Used

- **Next.js**: A powerful React framework for building modern web applications.
- **React**: A JavaScript library for crafting interactive user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for sleek and responsive designs.
- **SendGrid**: A robust email API service for handling all our communication needs.
- **Vercel**: A platform for smooth deployment and scaling of our web application.

## Getting Started

### Prerequisites

Ensure your development environment is ready with the following tools:

- Node.js (v14.x or later)
- npm (v9.6.7 or later) or yarn (v1.22.19 or later)
- Git

### Installation

1. **Set Node Version**:
   Before installing dependencies, set your Node.js version to 18.17.0 using nvm:
   ```bash
   nvm use 18.17.0
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

### Running the App Locally

1. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory of the project and add the following environment variable:
   ```bash
   SENDGRID_API_KEY=your-sendgrid-api-key
   ```

2. **Start the Development Server**:
   Using npm:
   ```bash
   npm run dev
   ```
   Or using yarn:
   ```bash
   yarn dev
   ```
   The app should now be accessible at `http://localhost:3000`.

### API Integration

This application leverages **SendGrid** for email communication. Here’s how to set it up:

1. **Create a SendGrid Account**:
   - Sign up at [SendGrid](https://sendgrid.com/).
   - Once signed up, navigate to the API keys section in your SendGrid dashboard.

2. **Generate an API Key**:
   - Create an API key with appropriate permissions.
   - Add the API key to your `.env.local` file:
     ```bash
     SENDGRID_API_KEY=your-sendgrid-api-key
     ```

3. **Integrate the API Key**:
   - The `SENDGRID_API_KEY` environment variable will be used in your Next.js API routes to enable email sending functionality.

#### Adding a Verified Email Address

For SendGrid to send emails on your behalf, you need to add a verified sender email address in the `send-email.js` file. Here’s how to do it:

1. **Verify Your Email Address**:
   - In your SendGrid dashboard, navigate to "Sender Authentication" and follow the steps to verify your sender email address.

2. **Update the `send-email.js` File**:
   - Locate the `send-email.js` file in your Next.js project under the `/pages/api/` directory.
   - Modify the email sending code as follows:
     ```javascript
     import sendEmail from '@sendgrid/mail';

     sendEmail.setApiKey(process.env.SENDGRID_API_KEY);

     export default async function handler(req, res) {
       try {
         await sendEmail({
           to: 'someEmailAnyEmail@me.com', // Place the email you want this email sent to here
           from: 'your-verified-email@example.com', // Use the email address you've verified
           subject: 'More Than a Lunch Sign up Request Form',
           text: 'Thank you for signing up for More Than a Lunch!',
           html: '<strong>Thank you for signing up for More Than a Lunch!</strong>',
         });
         res.status(200).json({ message: 'Email sent successfully' });
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Failed to send email' });
       }
     }
     ```

3. **Test the Email Sending**:
   - Run your application locally and ensure that emails are being sent successfully using your verified email address.

## Deployment

### Deploying to Vercel

1. **Sign Up or Log In to Vercel**:
   - Visit [Vercel](https://vercel.com/) and sign up or log in.

2. **Connect Your GitHub Repository**:
   - From the Vercel dashboard, click on "New Project" and import your GitHub repository.

3. **Configure Environment Variables**:
   - In the Vercel dashboard, navigate to your project settings and add your environment variables, including the `SENDGRID_API_KEY`.

4. **Deploy**:
   - Once connected and configured, click "Deploy".
   - Vercel will build and deploy your application, and you’ll be provided with a live URL.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.

## Contributing

We welcome contributions! Whether it’s a bug fix, a new feature, or an improvement, feel free to submit a Pull Request or open an Issue.

## Contact

For inquiries or support, please reach out to Istafa at istafamarshall@me.com.

---

**More Than Just A Lunch** is more than an application; it's a movement that brings people together. With this platform, we hope to continue fostering connections and creating memorable experiences around the table. Thank you for being part of our journey!

---

This version of the README includes the correct version specifications for `npm` and `yarn`, along with detailed instructions on how to set the Node.js version, use npm v9.6.7 or later, and add a verified email address to your SendGrid integration.# nww-website3.0
