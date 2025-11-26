/**
 * Google Apps Script for RSVP Form to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Click "New Project"
 * 3. Delete the default code and paste this entire file
 * 4. Replace 'YOUR_SPREADSHEET_ID' with your actual Google Sheet ID
 *    (You can find this in the URL of your Google Sheet:
 *     https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
 * 5. Create a Google Sheet with the following columns in row 1:
 *    - Timestamp
 *    - Name
 *    - Email
 *    - Number of Attendees
 *    - Photo/Video Consent
 * 6. Click "Deploy" > "New deployment"
 * 7. Click the gear icon next to "Select type" and choose "Web app"
 * 8. Set "Execute as" to "Me"
 * 9. Set "Who has access" to "Anyone"
 * 10. Click "Deploy"
 * 11. Copy the Web App URL and use it as your REACT_APP_GOOGLE_SCRIPT_URL
 * 12. Click "Authorize access" and grant permissions
 */

// Replace this with your Google Sheet ID
const SPREADSHEET_ID = '11pbFFjwhNHimGPT72ph6Wsf1_fmMVpuOlfXnhaJoX2w';

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name || '',
      data.email || '',
      data.numberOfGuests || '',
      data.photoConsent || 'No'
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'RSVP submitted successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle OPTIONS request for CORS preflight
function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional: Test function to verify the script works
function test() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    numberOfGuests: 2,
    photoConsent: 'Yes'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

