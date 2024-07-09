import * as fs from 'fs';
import * as path from 'path';
import * as nodemailer from 'nodemailer';
import { htmlToText } from 'html-to-text';

// Define the base directory where your script is located
const baseDir: string = 'C:\\Users\\Manikanta N B\\OneDrive - Quarks Technosoft Private Limited\\Desktop\\Project1\\sendEmail';

// Path to your Jest HTML report
const reportFilePath: string = path.resolve(baseDir, 'reports', 'jest_html_reporters.html');

try {
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
      user: 'manimahi758@gmail.com',
      pass: '9902422602@nbmvjp'
    }
  });

  // Email options
  const mailOptions: nodemailer.SendMailOptions = {
    from: 'manimahi758@gmail.com',
    to: 'callmemahi9@gmail.com',
    subject: 'Jest Test Report',
    text: plainTextContent,  // Plain text body
    html: htmlContent,       // HTML content (optional)
    attachments: [
      {
        filename: 'jest_html_reporters.html',
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

} catch (error) {
  console.error('Error reading Jest HTML report file:', error);
}
