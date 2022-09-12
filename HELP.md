# Help!
This file outlines common issues encountered by users of the library and potential fixes for those issues.

This file will be updated with more frequently seen issues as they are reported.

---

### Request failed for https://discord.com returned code 400.
This issue is normally due to the embed content, such as the colour, text, title, any attachments etc.
Fixes for this issue:
- Make sure the title isn't an excessive length
- Try changing the colour value or format (decimal/Hex) 
- Check that the Webhook URL is valid
 
---
 
### Cannot read property 'length' of null onSubmit
This issue often occurs when trying to test the webhook via the "Run" button in Apps Script. 
You should not use the Run button to test your webhook, please submit a response as if you were a real respondant.
