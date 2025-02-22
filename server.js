const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider (e.g., Gmail, Outlook)
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password'  // Replace with your email's password
    }
});

// Handle password reset email
app.post('/reset-password', (req, res) => {
    const { username } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'admin@mfcmp.co.za',
        subject: 'Password Reset Request',
        text: `A password reset has been requested for the following username: ${username}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send('Failed to send email.');
        } else {
            res.status(200).send('Password reset email sent.');
        }
    });
});

// Handle registration email
app.post('/register', (req, res) => {
    const { username, company, email } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'admin@mfcmp.co.za',
        subject: 'Registration Request',
        text: `A new registration has been requested:\n\nUsername: ${username}\nCompany: ${company}\nEmail: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send('Failed to send email.');
        } else {
            res.status(200).send('Registration email sent.');
        }
    });
});

// Start the server
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));