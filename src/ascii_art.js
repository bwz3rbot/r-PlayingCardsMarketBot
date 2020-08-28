const figlet = require('figlet')
const colors = require('colors')
const dateFormat = require('dateformat')
const date = new Date();

const formattedDate = dateFormat(date)

const REDDIT_USER = process.env.REDDIT_USER


// Display Username

const displayUsername = function () {

    pause = true
    figlet.text('u/'+REDDIT_USER, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.green)
    });




}


// Display Date
const displayDateTime = function () {
    figlet.text(formattedDate, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.magenta)
    });
}


// Display App Name
const displayAppName = function () {
    figlet.text('Snoo Reaper', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.green)
    });

}

// Display Sub Name
const followingWhichSub = function (subreddit) {
   
    figlet.text('r/' + subreddit, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.magenta)
    });


}


// Run Marquee
function displayMarquee(sub) {

    displayUsername()

    displayDateTime()

    displayAppName()

    followingWhichSub(sub)



}






module.exports = {
    displayMarquee: displayMarquee
}