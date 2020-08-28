# r/PlayingCardsMarketBot

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)


## About <a name = "about"></a>

This bot was created specifcally for r/PlayingCardsMarket. If you attempt to run it on any other sub, it will not work, and will possibly break your user flairs. The bot takes votes from buyers who have dealt with a seller, either successfully, or unsuccessfully, and updates the sellers' user flair. It takes the current values it finds within the user flair (Positive: ?? Negative: ?? Neutral: ??) and increments them according to a user directive when summoned.


## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the bot up and running on your local machine.


## Prerequisites

Make sure you have the correct version of NodeJS for your system. You can find the download here(https://nodejs.org/en/download/)

You'll have to create a new account for your bot before you move any further.\
And you'll have to grant the account permissions on your subreddit.\
Once the account is created, log in, go to this url(reddit.com/prefs/apps), and fill out the form to create a new script app.


<img src='https://i.imgur.com/yq8akJ7.png'>

## Installing

Now that you've set up your bot account, granted it permissions on your subreddit, and created a script app, it's time to download the source code and paste in your environment variables.

Download the .zip file containing the source code on this page. Unzip it and save it to your computer somewhere. Now open up the pw.envEXAMPLE file.\
Also have open reddit.com/prefs/apps as you'll need to copy/paste the items you'll find there.\
<strong>USER_AGENT</strong> is just a name that the server will identify your bot by. It can be whatever you want.\
<strong>CLIENT_ID</strong> and <strong>CLIENT_SECRET</strong> are fround in prefs/apps.\
<strong>REDDIT_USER</strong> is your bots username.\
<strong>REDDIT_PASS</strong> is its password.\
<strong>MASTER_SUB</strong> is the subreddit it will work on.




    USER_AGENT=''
    CLIENT_ID=''
    CLIENT_SECRET=''
    REDDIT_USER=''
    REDDIT_PASS=''
    MASTER_SUB=''


now remove the EXAMPLE from the end of the filename.

> pw.envEXAMPLE = pw.env

Now go back to your terminal and cd into the folder. Run this command to install the dependencies required to run a reddit bot in JavaScript.

> npm install

Give it a minute to finish installing the dependencies. . . Then:


> node src/app.js


## Usage <a name = "usage"></a>


When a user calls the bot, it will receive a mention in its inbox and will respond accordingly.\
It checks the post it was summoned from, gets the user and updates their user flair by incrementing the current values.\
A user can summon the bot by calling its username, then passing in a directive\

Requests must be formatted as:
```
u/SnootyScraper !positive
u/SnootyScraper !negative
u/SnootyScraper !neutral
```
The request and response will be logged in the terminal for you to review, along with the date and time and the user who requested the bot.\
Mentions will also be saved in the bots account, under <em>saved</em>.



Just keep a terminal open with it running.

As long as your internet is connected, it should continuously scan for mentions every 20 seconds.
