# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for the RSVP form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it something like "Chameleon RSVP Responses"
4. In the first row (A1 to E1), add these column headers:
   - **A1**: Timestamp
   - **B1**: Name
   - **C1**: Email
   - **D1**: Number of Attendees
   - **E1**: Photo/Video Consent

## Step 2: Get Your Spreadsheet ID

1. Look at the URL of your Google Sheet
2. It will look like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
11pbFFjwhNHimGPT72ph6Wsf1_fmMVpuOlfXnhaJoX2w
3. Copy the `SPREADSHEET_ID` part (the long string of letters and numbers)

## Step 3: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click **"New Project"**
3. Delete any default code in the editor
4. Copy the entire contents of `google-apps-script.js` file
5. Paste it into the Google Apps Script editor
6. Replace `'YOUR_SPREADSHEET_ID'` with your actual Spreadsheet ID from Step 2
7. Click **"Save"** (or press Ctrl+S / Cmd+S)
8. Give your project a name like "RSVP Form Handler"

## Step 4: Deploy as Web App

1. Click **"Deploy"** in the top right
2. Select **"New deployment"**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **"Web app"**
5. Configure the deployment:
   - **Description**: "RSVP Form Handler" (or any description)
   - **Execute as**: **"Me"** (your email)
   - **Who has access**: **"Anyone"** (important for the form to work)
6. Click **"Deploy"**
7. You may be prompted to authorize the script:
   - Click **"Authorize access"**
   - Choose your Google account
   - Click **"Advanced"** > **"Go to [Project Name] (unsafe)"**
   - Click **"Allow"**
8. Copy the **Web App URL** that appears (it will look like: `https://script.google.com/macros/s/...`)

## Step 5: Configure Your React App

### Option A: Using Environment Variables (Recommended for Production)

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add this line:
   ```
   REACT_APP_GOOGLE_SCRIPT_URL=your_web_app_url_here
   ```
3. Replace `your_web_app_url_here` with the Web App URL from Step 4
https://script.google.com/macros/s/AKfycbwK3o2a6Z2j-oIREUeCPci8sn_2hfivO983GkU9DX6pHN1X3gfAR59fZjTfTaln13ZY/exec
4. Restart your development server if it's running

### Option B: Direct Configuration (For Testing)

1. Open `src/signup.js`
2. Find the line: `const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL || '';`
3. Replace it with:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'your_web_app_url_here';
   ```
4. Replace `your_web_app_url_here` with your Web App URL

## Step 6: Test the Integration

1. Start your React app (`npm start`)
2. Navigate to the signup page
3. Fill out the form and submit
4. Check your Google Sheet - you should see a new row with the submitted data

## Troubleshooting

### Form submits but data doesn't appear in sheet
- Verify the Spreadsheet ID is correct
- Make sure the sheet has the correct column headers in row 1
- Check that the script has permission to access the sheet

### "Failed to submit RSVP" error
- Verify the Web App URL is correct
- Make sure the deployment is set to "Anyone" access
- Check the browser console for detailed error messages

### CORS errors
- The script uses `no-cors` mode, which is normal for Google Apps Script
- The data should still be sent successfully even if you see CORS warnings

## Security Notes

- The Web App URL will be visible in your React app's code
- Anyone with the URL can potentially submit data to your sheet
- Consider adding validation or rate limiting in the Google Apps Script if needed
- For production, you may want to add additional security measures

## Updating the Script

If you need to update the script:
1. Make your changes in Google Apps Script
2. Click **"Deploy"** > **"Manage deployments"**
3. Click the edit icon (pencil) next to your deployment
4. Change the version to "New version"
5. Click **"Deploy"**
6. The same URL will work with the updated script


