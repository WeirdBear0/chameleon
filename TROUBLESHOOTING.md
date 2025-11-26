# Troubleshooting RSVP Form Submission Issues

If you're getting "Failed to submit RSVP" errors, check the following:

## Common Issues and Solutions

### 1. Google Apps Script Not Authorized
**Symptoms:** Form fails immediately or shows authorization errors

**Solution:**
1. Go to https://script.google.com/
2. Open your project
3. Click "Run" on the `doPost` function (or any function)
4. Authorize the script when prompted
5. Grant all requested permissions

### 2. Spreadsheet Permissions
**Symptoms:** Script runs but can't write to sheet

**Solution:**
1. Open your Google Sheet
2. Click "Share" button
3. Make sure the Google account that owns the script has edit access
4. Or make the sheet accessible to "Anyone with the link" (if appropriate)

### 3. Deployment Settings
**Symptoms:** CORS errors or 403 Forbidden errors

**Solution:**
1. Go to your Google Apps Script project
2. Click "Deploy" > "Manage deployments"
3. Click the edit icon (pencil) next to your deployment
4. Verify:
   - **Execute as:** "Me" (your email)
   - **Who has access:** "Anyone" (important!)
5. Click "Deploy" to save changes
6. Copy the new URL if it changed

### 4. Script Errors
**Symptoms:** Script fails silently or returns errors

**Solution:**
1. Open your Google Apps Script project
2. Click "Run" > "test" (or run the test function)
3. Check the "Execution log" for any errors
4. Common errors:
   - Wrong Spreadsheet ID → Check the ID in the script matches your sheet
   - Missing columns → Make sure your sheet has headers in row 1
   - Permission denied → Authorize the script

### 5. Network/CORS Issues
**Symptoms:** Request fails with CORS errors in browser console

**Solution:**
- The code now uses `no-cors` mode which should handle this
- If still having issues, verify the deployment is set to "Anyone" access
- Check browser console for specific error messages

### 6. Testing the Script Directly

You can test if your Google Apps Script is working by:

1. **Using the test function:**
   - In Google Apps Script, click "Run" > "test"
   - Check the execution log for success/errors

2. **Using curl (command line):**
   ```bash
   curl -X POST "YOUR_SCRIPT_URL" \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","numberOfGuests":1,"photoConsent":"No","timestamp":"2024-01-01T00:00:00.000Z"}'
   ```

3. **Using a browser extension:**
   - Install "REST Client" or similar extension
   - Make a POST request to your script URL with JSON body

### 7. Check Browser Console

Open your browser's developer console (F12) and look for:
- Network errors
- CORS errors
- JavaScript errors
- Console.log messages showing the submission data

### 8. Verify Sheet Structure

Make sure your Google Sheet has these exact column headers in row 1:
- Column A: `Timestamp`
- Column B: `Name`
- Column C: `Email`
- Column D: `Number of Attendees`
- Column E: `Photo/Video Consent`

### 9. Check Script URL

Verify the URL in `src/signup.js` matches your deployed script URL:
- Should start with: `https://script.google.com/macros/s/...`
- Should end with: `/exec`
- Not `/dev` (that's for development mode)

### 10. Redeploy the Script

If nothing else works, try redeploying:
1. Make a small change to the script (add a comment)
2. Click "Deploy" > "Manage deployments"
3. Click edit (pencil icon)
4. Change version to "New version"
5. Click "Deploy"
6. Update the URL in your React app if it changed

## Still Having Issues?

1. Check the browser console for specific error messages
2. Check Google Apps Script execution logs
3. Verify the sheet is receiving data (even if the form shows an error)
4. Try submitting the form and immediately checking your Google Sheet

## Quick Verification Checklist

- [ ] Google Apps Script is authorized
- [ ] Spreadsheet ID is correct in the script
- [ ] Sheet has correct column headers
- [ ] Deployment is set to "Anyone" access
- [ ] Script URL in React app is correct
- [ ] No errors in browser console
- [ ] No errors in Google Apps Script execution log

