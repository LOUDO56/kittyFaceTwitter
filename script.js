let tweetsAdded = [];

function addMewing() {
    const tweets = document.querySelectorAll('div[data-testid="tweetText"]')

    for(const tweetContainer of tweets) {
        if(!tweetsAdded.includes(tweetContainer)) {
           try {  
               const kittyEmojiContainer = document.createElement('span');
               const tweetText = tweetContainer.querySelector('span').textContent.split(' ');
               const lastWordTweet = tweetText[tweetText.length - 1];
               if(lastWordTweet[lastWordTweet.length - 1] === "."){
                   console.log(lastWordTweet);
                   tweetText[tweetText.length - 1] = lastWordTweet.substring(0, lastWordTweet.length - 1);
                   tweetContainer.querySelector('span').textContent = tweetText.join(' ');
               }
               kittyEmojiContainer.textContent = ' :3';
               tweetContainer.appendChild(kittyEmojiContainer);
                tweetsAdded.push(tweetContainer);
           } catch (error) {
                null;
           }
        }
    }
}

const observer = new MutationObserver(() => {
    const url = location.href;
    if (url.includes("x.com")) {
        addMewing();
    }
});


observer.observe(document, { subtree: true, childList: true });