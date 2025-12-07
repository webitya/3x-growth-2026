# Hero Enquiry Form Setup Guide

## Overview
The homepage hero section now features an enquiry form instead of the dashboard card. The form collects lead information and sends dual emails using nodemailer.

## Features
- ✅ Custom glassmorphism styled form
- ✅ Custom dropdown for service selection
- ✅ Form validation
- ✅ Loading states
- ✅ Success/Error messages
- ✅ Dual email sending (thank you to user + lead notification to admin)

## Environment Setup

### 1. Create `.env.local` file
Create a `.env.local` file in the root directory with the following variables:

```env
USER_EMAIL=your-email@gmail.com
APP_PASSWORD=your-app-password-here
```

### 2. Get Gmail App Password
1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Paste it as `APP_PASSWORD` in `.env.local`

### 3. Update USER_EMAIL
Replace `your-email@gmail.com` with your actual Gmail address in `.env.local`

## Form Fields
- **Name** (required)
- **Email** (required)
- **Phone** (required)
- **Company Name** (optional)
- **Service** (required) - Custom dropdown with options:
  - Sales Strategy
  - Lead Generation
  - Sales Training
  - Consulting
- **Description** (optional)

## Email Functionality

### Admin Email (Lead Notification)
Sent to `USER_EMAIL` with:
- Professional HTML template
- All form data
- Timestamp
- Formatted layout

### User Email (Thank You)
Sent to the user's email with:
- Personalized greeting
- Inquiry summary
- Next steps information
- Contact button
- Professional branding

## API Endpoint
- **Route**: `/api/send-enquiry`
- **Method**: POST
- **Body**: JSON with form data
- **Response**: Success/Error status

## Testing
1. Fill out the form with valid data
2. Click "Send Enquiry"
3. Check for success message
4. Verify both emails are received

## Troubleshooting
- **Emails not sending**: Check `.env.local` configuration
- **App password error**: Regenerate app password in Google Account
- **Form not submitting**: Check browser console for errors

## Files Created/Modified
- `src/components/homepage/EnquiryForm.jsx` - Form component
- `src/app/api/send-enquiry/route.js` - API endpoint
- `src/components/homepage/HomepageHero.jsx` - Updated to use EnquiryForm
- `env.example.txt` - Environment variable template
