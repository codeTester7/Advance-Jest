
import * as fs from 'fs';
import * as nodemailer from 'nodemailer';

async function sendEmail() {
  try {
    // Read the HTML file content
    const htmlContent = fs.readFileSync('reports\\jest_html_reporters.html', 'utf-8');

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
      html: htmlContent
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);

    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
