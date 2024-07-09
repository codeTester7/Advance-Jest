import * as fs from 'fs';
import * as path from 'path';
import * as nodemailer from 'nodemailer';
import { htmlToText } from 'html-to-text';

// Path to your Jest HTML report
const reportFilePath: string = path.resolve('../reports/jest_html_reporters.html');

// Read the HTML content
const htmlContent: string = fs.readFileSync(reportFilePath, 'utf8');

// Convert HTML to plain text
const plainTextContent: string = htmlToText(htmlContent, {
  wordwrap: 130
});

// Email configuration
const transporter: nodemailer.Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Email options
const mailOptions: nodemailer.SendMailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Jest Test Report',
  text: plainTextContent,  // Plain text body
  html: htmlContent,       // HTML content (optional)
  attachments: [
    {
      filename: 'test-report.html',
      content: htmlContent,  // Attach the HTML file content
      encoding: 'utf8'
    }
  ]
};

// Send email
transporter.sendMail(mailOptions, function(error: Error | null, info: nodemailer.SentMessageInfo){
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
