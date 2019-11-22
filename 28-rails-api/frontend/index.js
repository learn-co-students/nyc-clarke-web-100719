const container = document.getElementById('container');
const getTweets = document.getElementById('get-tweets')

function renderTweet(tweet){
    let tweetHTML = `
         <div class="tweet">
            <h3>${tweet.content} by: <span>${tweet.user}</span></h3>
            <div class="response">
                <span>${tweet.likes} 💗</span>
                <span>${tweet.retweets} Retweet</span>
            </div>
        </div>
    `
    container.insertAdjacentHTML('beforeend', tweetHTML)
}

getTweets.addEventListener('click', function(e){
    e.preventDefault();
    fetch('http://localhost:3000/api/v1/tweets')
        .then(function(res) { return res.json()})
        .then(function(data){
            data.forEach(renderTweet)
        })
})

