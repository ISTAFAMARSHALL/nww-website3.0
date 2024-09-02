require('dotenv').config();
// const sgMail = require('@sendgrid/mail');

import sgMail from "@sendgrid/mail"

const SG_API_KEY = process.env.SENDGRID_API_KEY


async function sendEmail({ to, from, subject, text, html }) {

  await sgMail.setApiKey(SG_API_KEY);

  try {
    const msg = {
      to,
      from,
      subject,
      text,
      html,
    };
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('Error response body:', error.response.body);
    }
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      fullName,
      cellNumber,
      email,
      linkedIn,
      goals,
    } = req.body;

    // Validation: Ensure no required fields are blank
    if (
      !fullName ||
      !cellNumber ||
      !email ||
      !linkedIn ||
      !goals 
    ) {
      return res.status(400).json({ message: 'All fields are required. Please fill out the entire form.' });
    }

    try {
      await sendEmail({
        to: 'istafamarshall@gmail.com', // Place email you want this email sent to here
        from: 'istafamarshall@me.com', // Use the email address you've verified
        subject: 'More Than a Lunch Sign up Request Form',
        text: `Potention Attendee Request Submission Form ${fullName}`,
        html: `
          <h3>New Leadership Lunch Form Submission</h3>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <br></br>
            <li><strong>Cell Number:</strong> ${cellNumber}</li>
            <br></br>
            <li><strong>Email:</strong> ${email}</li>
            <br></br>
            <li><strong>LinkedIn Profile URL:</strong> ${linkedIn}</li>
            <br></br>
            <li><strong>Goals for Attending:</strong> ${goals}</li>
          </ul>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
