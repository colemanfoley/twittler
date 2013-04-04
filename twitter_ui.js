var draw = function(){
  var news_feed = $("#news_feed");
  news_feed.html("");
  
  for(var i = window.streams.home.length - 1; i >= 0; i-- ){
    var tweet = window.streams.home[i];
    tweet.created_at = moment(tweet.created_at).fromNow();
    news_feed.append("<span class='name'>" + tweet.user + "</span>" + ": " + tweet.message + " <div class='time'>" + tweet.created_at + "<div><br>");
  }
}

setTimeout(draw, 100);

var drawUser = function(user_choice){
  var user = $("#user");
  user.html("");
  for(var i = streams.users[user_choice].length - 1; i >= 0; i-- ){
     var tweet = streams.users[user_choice][i];
     tweet.created_at = moment(tweet.created_at).fromNow();
     user.append("<span class='name'>" + tweet.user + "</span>" + ": " + tweet.message + " <div class='time'>" + tweet.created_at + "<div><br>");
   }
   return user_choice;
 }

 $(document).ready(function(){
    $('input[type=radio]').click(function(){
        drawUser(this.id);
    });

    $("#refresh_news_feed").click(function(e){
      draw();
    })

    $("#refresh_user_feed").click(function(e){
      var current_user = $('input:checked').attr("id");
      drawUser(current_user);
    })      

 });