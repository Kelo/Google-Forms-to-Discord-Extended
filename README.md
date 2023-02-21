# Google Forms to Discord (Webhook)

### Having issues?
Maybe this will help: [HELP.md](https://github.com/Kelo/Google-Forms-to-Discord-Extended/blob/master/HELP.md)

###### Just a heads up that the 1st part of this README.md, including the images, is sourced from the original repo.

![THIS](https://pillow.s-ul.eu/6ev89Z6J)

# Basic Setup

1) Create a [Google Form](https://docs.google.com/forms/u/0/) for use with this script
2) Make the form however you'd like.

3) Go to the Script editor.

![script editor](https://pillow.s-ul.eu/iLfUuy9l.png)

4) Paste the contents of `script.gs`.

5) Open Discord and make a channel where you'd like the responses to be sent.
6) Create a webhook and copy the URL. Replace `WEBHOOKURL` at the top of the script with the URL you copied.

![Create a new Webhook.](https://pillow.s-ul.eu/9G6CaZ7P)
![Copy Webhook URL.](https://pillow.s-ul.eu/fcfrn7vt)

7) Add a trigger by selecting Current project's triggers in the Edit menu, and creating a new trigger using the settings given below.

![trigger settings](https://user-images.githubusercontent.com/44692189/58762106-1236f880-856e-11e9-9a97-e275ffea9d65.jpg)

8) Submit a test response to make sure it works.


# Additional Options

In this section, we will outline the multiple different customizations that you can add to your webhook. You can use any combination of the options displayed below.

## Forums Support
With the addition of Discord's new [Forum channels](https://discord.com/blog/forum-channels-space-for-organized-conversation), there is the ability to direct your google form responses into individual threads or the same singular thread!


#### New Forum channel thread for each response

_There is a script for keeping extended responses in a singular thread: [forum_script.gs](https://github.com/Kelo/Google-Forms-to-Discord-Extended/blob/master/forum_script.gs)._

`thread_name` can be used to specify the name of the thread you want to generate.

```javascript
{
  "thread_name" : "THREAD TITLE GOES HERE",
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields" : items,
    "color": 16711680
  }]
}

```

#### Same Forum channel thread for each response
`thread_id` can be used to specify the thread you want all responses to go into.

```javascript
{
  "thread_id" : 1234 //Your thread id goes here! ,
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields" : items,
    "color": 16711680
  }]
}

```
-----

## Cosmetics 
#### Colour
This option will allow you to set a colour to your embed. The colour option requires a numerical input instead of hexadecimal, I recommend using this site to convert between hex and decimal https://www.spycolor.com/.
> Putting `0` as the colour value will make the bar transparent.

E.g. Red in Hexadecimal is #FF0000. As a decimal, this would be translated into 16711680.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields" : items,
    "color": 16711680
  }]
}
```

#### Author
This option adds an author block to the embed. The author block (object) includes three values:
  * name - the name field.
  * url - allows for a hyperlink to be attached to the name.
  * icon_url - avatar displayed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "author": {
      "name": "AUTHOR NAME CHANGE THIS IN SCRIPT",
      "url": "URL CHANGE THIS IN SCRIPT",
      "icon_url": "ICON URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

#### URL
This option binds a url link to the title of your embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "url": "URL CHANGE THIS IN SCRIPT"
  }]
}
```

#### Description
Displays a description for the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "description": "DESCRIPTION CHANGE THIS IN SCRIPT"
  }]
}
```

#### Image
Displays an image inside of the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "image": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

#### Thumbnail
Allows for a thumbnail to be displayed in the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "thumbnail": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

#### Tag a user
Allows you to put in a content message that will actually ping a user. ```<@user id here>``` E.g. ```<@123123123>```
```javascript
{
  "content" : "<@user id here>"
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "thumbnail": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

#### Tag a role
Allows you to put in a content message that will actually ping a role. ```<@&role id here>``` E.g. ```<@&123123123>```
```javascript
{
  "content" : "<@&role id here>"
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "thumbnail": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

#### Footer icon
An optional customization you can make to footer text, is to add an icon image which will be displayed next to it.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "footer": {
      "text": "BOTTOM TEXT CHANGE THIS IN SCRIPT",
      "icon_url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```
