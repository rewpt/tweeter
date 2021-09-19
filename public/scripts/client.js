
$(document).ready(function() {
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  const createTweetElement = (tweet) => {
    const markup = `<article>
          <div class = display-head-container>
            <div class = "left-head">
            <img class = "user-icon" src=${tweet.user.avatars} alt="DP">
              <h2 class = "user-name"> ${tweet.user.name} </h2>
            </div>
            <div class = "right-head">
              <h2 class = "user-tag">${tweet.user.handle}</h2>
            </div>
          </div>
          <p class = "tweet-content">${escape(tweet.content.text)}</p>
          <div class = "tweet-footer">
            <div class = "left-footer">
              <h3>${timeago.format(tweet.created_at)}</h3>
            </div>
            <div class = "right-footer">
              <i class="report-icon far fa-flag"></i>
              <i class="retweet-icon fas fa-retweet"></i>
              <i class="like-icon far fa-heart"></i>
            </div>
          </div>
        </article>`;
    
    return markup;
  };

  const renderTweets = function(tweets) {
    const tweetContainer = $('#tweets-container');
    tweetContainer.empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      tweetContainer.prepend($tweet);
    }
  };

  const loadTweets = function() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: function(data) {
        renderTweets(data);
      }
    });
  };
  loadTweets();

  $('form').on('submit', function(event) {
    event.preventDefault();
    const txtErr =  $('#text-error');
    txtErr.hide();
    const txtSubmit = $("#tweet-text").val();
    if (!txtSubmit || txtSubmit.length === 0) {
      txtErr.text("Your tweet must be at least 1 character");
      txtErr.slideDown("medium");
      
      
      return;
    }
    if (txtSubmit.length > 140) {
      txtErr.text("Your tweet must be less than 140 characters");
      txtErr.slideDown("medium");
      return;
    }
    const serializedData = $(this).serialize();
    $.post("/tweets", serializedData)
      .then(loadTweets());
    $("#tweet-text").val('');
  });

  
});