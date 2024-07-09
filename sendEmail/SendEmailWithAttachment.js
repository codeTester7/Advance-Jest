// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var fs = require("fs");
// var path = require("path");
// var nodemailer = require("nodemailer");
// var html_to_text_1 = require("html-to-text");
// // Define the base directory where your script is located
// var baseDir = 'C:\\Users\\Manikanta N B\\OneDrive - Quarks Technosoft Private Limited\\Desktop\\Project1\\sendEmail';
// // Path to your Jest HTML report
// var reportFilePath = path.resolve(baseDir, 'reports', 'jest_html_reporters.html');
// try {
//     // Read the HTML content
//     var htmlContent = fs.readFileSync(reportFilePath, 'utf8');
//     // Convert HTML to plain text
//     var plainTextContent = (0, html_to_text_1.htmlToText)(htmlContent, {
//         wordwrap: 130
//     });
//     // Email configuration
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'manimahi758@gmail.com',
//             pass: '9902422602@nbmvjp'
//         }
//     });
//     // Email options
//     var mailOptions = {
//         from: 'manimahi758@gmail.com',
//         to: 'callmemahi9@gmail.com',
//         subject: 'Jest Test Report',
//         text: plainTextContent, // Plain text body
//         html: htmlContent, // HTML content (optional)
//         attachments: [
//             {
//                 filename: 'jest_html_reporters.html',
//                 content: htmlContent, // Attach the HTML file content
//                 encoding: 'utf8'
//             }
//         ]
//     };
//     // Send email
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log('Error sending email:', error);
//         }
//         else {
//             console.log('Email sent:', info.response);
//         }
//     });
// }
// catch (error) {
//     console.error('Error reading Jest HTML report file:', error);
// }


const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { htmlToText } = require('html-to-text');

// Define the base directory where your script is located
const baseDir = 'C:\\Users\\Manikanta N B\\OneDrive - Quarks Technosoft Private Limited\\Desktop\\Project1\\sendEmail';

// Path to your Jest HTML report
const reportFilePath = path.resolve(baseDir, 'reports', 'jest_html_reporters.html');

try {
    // Read the HTML content
    const htmlContent = fs.readFileSync(reportFilePath, 'utf8');

    // Convert HTML to plain text
    const plainTextContent = htmlToText(htmlContent, {
        wordwrap: 130
    });

    // Email configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'manimahi758@gmail.com',
            pass: '9902422602@nbmvjp'
        }
    });

    // Email options
    const mailOptions = {
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
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

} catch (error) {
    if (error.code === 'ENOENT') {
        console.error('File not found:', reportFilePath);
    } else {
        console.error('Error reading Jest HTML report file:', error);
    }
}


