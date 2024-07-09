"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var nodemailer = require("nodemailer");
var html_to_text_1 = require("html-to-text");
// Path to your Jest HTML report
var reportFilePath = path.resolve(__dirname, './reports/test-report.html');
// Read the HTML content
var htmlContent = fs.readFileSync(reportFilePath, 'utf8');
// Convert HTML to plain text
var plainTextContent = (0, html_to_text_1.htmlToText)(htmlContent, {
    wordwrap: 130
});
// Email configuration
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});
// Email options
var mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Jest Test Report',
    text: plainTextContent, // Plain text body
    html: htmlContent, // HTML content (optional)
    attachments: [
        {
            filename: 'test-report.html',
            content: htmlContent, // Attach the HTML file content
            encoding: 'utf8'
        }
    ]
};
// Send email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('Error sending email:', error);
    }
    else {
        console.log('Email sent:', info.response);
    }
});
