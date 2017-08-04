$(document).ready(function(){
  var $updateButton =$('#update');
  var $backButton = $('#back')
  feedCount=0;

  


function updateTweets(tweetArr, index){
    var $tweetFeed = $('.tweetFeed');
    $tweetFeed.html('');

    index = index || tweetArr.length-1;
    while(index > 0){
      var tweet = tweetArr[index];
      var $tweet = $('<div class="username"></div>');
      $tweet.html('<p><p>@'+'<a href="#" class="byUsername">'+tweet.user+'</a>'+ ': ' + tweet.message + '['+tweet.created_at.toLocaleDateString()+']');

      $tweet.appendTo($tweetFeed);
      index -= 1;
    }    

}

updateTweets(streams.home);

  $('#update').on('click', function(){
      updateTweets(streams.home);      
  })

  $(document).on('click', '.byUsername', function(name){
      var userArr = streams.users;
      var name = name.target.innerHTML;

      updateTweets (userArr[name]);          
  });

    $('#back').on('click', function(){      
      updateTweets(streams.home, 0);
  })

});



//streams.home is an array of all tweets from all the users you're following.
//streams.users is an object with properties for each user.
//streams.users.shawndrost has all of shawndrost's tweets


