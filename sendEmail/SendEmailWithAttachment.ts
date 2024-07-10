
import { log } from 'console';
import * as fs from 'fs';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

async function sendEmail() {
  try {
    // Read the HTML file content
    const reportFilePath = path.join(__dirname, 'jest_html_reporters.html')
    const htmlContent = fs.readFileSync(reportFilePath, 'utf-8');
    console.log(htmlContent)

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'demo80824@gmail.com',
        pass: 'izsf ftlt vrus cmen'
      }
    });

    // Setup email data
    let mailOptions = {
      from: 'demo80824@gmail.com',
      to: 'callmemahi9@gmail.com',
      subject: 'Test Report',
      html: '<p>Please find the attached test report.</p>',
      attachments: [{
      filename: 'jest_html_reporters.html',
      content: htmlContent, // Attachment content
      contentType: 'text/html'
      }],
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);

    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
