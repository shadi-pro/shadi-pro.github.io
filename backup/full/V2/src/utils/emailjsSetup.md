# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Verify your email

## 2. Get Your Credentials
1. Go to Dashboard → Email Services
2. Add a service (Gmail recommended)
3. Authorize your email
4. Note your Service ID

## 3. Create Email Template
1. Go to Dashboard → Email Templates
2. Click "Create New Template"
3. Design your template with variables:
   - {{from_name}}
   - {{from_email}}
   - {{message}}
4. Note your Template ID

## 4. Get Public Key
1. Go to Dashboard → Integration
2. Copy your Public Key

## 5. Update ContactForm.js
Replace these values in ContactForm.js:
- serviceID: 'your_service_id'
- templateID: 'your_template_id'
- publicKey: 'your_public_key'
- to_email: 'your-email@example.com'