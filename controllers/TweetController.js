Twitter.TweetController = Ember.ObjectController.extend({
  actions: {
    addComment: function() {
      var tweet = this.get('model');
      tweet.comments.addObject({
            id: tweet.comments.length + 1,
            commenter: this.commenter,
            userComment: this.userComment
      });
    }
  }

});
