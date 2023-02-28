// The Post url to send the embed to. This is where you should paste your webhook link.
var POST_URL = "Discord Webhook link here";

// onSubmit function that should be triggered when a new form is submitted.
function onSubmit(e) {
  // Get the form object
  var form = FormApp.getActiveForm();
  // Get all of the form's responses
  var allResponses = form.getResponses();
  // Get the latest response submitted to the form
  var latestResponse = allResponses[allResponses.length - 1];
  // Get an array containing all the responses to each question
  var response = latestResponse.getItemResponses();
  // Current items array to use in embed
  var items = [];
  // Current number characters being used in the current embed
  var currentEmbedCharacterNum = 0
  // Tracks part number for multi-embed responses
  var partNumber = 1;
  // Leave this null. This is used to keep track of the thread_id in future.
  var thread_id = null;

  // For loop to iterate through responses
  for (var i = 0; i < response.length; i++) {
    // Get the question text
    var question = response[i].getItem().getTitle();
    // Get the answer text
    var answer = response[i].getResponse();
    // If the answer is over a certain number of characters, break it into multiple parts.
    try {
      var parts = answer.match(/[\s\S]{1,1024}/g) || [];
    } catch (e) {
      var parts = answer;
    }

    // If the answer text is blank, skip this iteration.
    if (answer == "") {
      continue;
    }

    if (question.length > 256){
      question = question.substring(0, 220) + "...";
    } 

    // For loop to iterate through the parts of an answer
    for (var j = 0; j < parts.length; j++) {
      // Add the number of characters in a part to the total character count of this embed
      currentEmbedCharacterNum += parts[j].length + question.length;
      // If the total character count with this part included pushes the total over 5000 (Discord Embeds have a character limit)
      if (currentEmbedCharacterNum >= 5000){
        // Send the embed
        if(thread_id == null){
          thread_id = sendEmbed(items, thread_name);
        } else{
            sendFollowupEmbed(items, thread_id, partNumber, thread_name);
            partNumber += 1;
        }
        // Wait a second so Discord doesn't get overwhelmed with requests
        Utilities.sleep(50)
        // Reset the character count and items array
        currentEmbedCharacterNum = 0;
        items = [];
      }

      // If there are multiple parts to an answer, add a (cont.) to the names.
      if (j == 0) {
        items.push({
          "name": question,
          "value": parts[j],
          "inline": false
        });
      } else {
        items.push({
          "name": question.concat(" (cont.)"),
          "value": parts[j],
          "inline": false
        });
      }
    }
  }
  // Send an embed to the webhook.
  if(thread_id == null){
    thread_id = sendEmbed(items);
  } else{
    sendFollowupEmbed(items, thread_id, partNumber);
    partNumber += 1;
  }
};

// Function to send an embed to the webhook url.
function sendEmbed(items){
  // Package the embed options into a variable
  var options = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
    },
    "payload": JSON.stringify({
        "thread_name" : "A nice thread name here",
        "embeds": [{
            "title": "Some nice title here",
            "color": 33023, // This is optional, you can look for decimal colour codes at https://convertingcolors.com/
            "fields": items,
            "footer": {
            "text": "Some footer here"
            }
        }]
    })
  };


  var waitURL = POST_URL+"?wait=true";
  // Post the data to the webhook.
  var response = UrlFetchApp.fetch(waitURL, options);
  var data = JSON.parse(response.getContentText());

  return data["channel_id"]
}



function sendFollowupEmbed(items, thread_id, part){
  var options = {
      "method": "post",
      "headers": {
        "Content-Type": "application/json",
      },
          "payload": JSON.stringify({
            "content": "",
              "embeds": [{
                "title": "Some nice embed title here (" + part + ")",
                "color": 33023, // This is optional, you can look for decimal colour codes at https://convertingcolors.com/
                "fields": items,
                "footer": {
                  "text": "Some embed footer here"
                }
              }]
          })
  };

  var followupURL = POST_URL + "?thread_id="+ thread_id
  UrlFetchApp.fetch(followupURL, options);
};
