Twitter.TweetsController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,
  itemController: 'tweet',
  actions: {
    save: function() {
      tweets.addObject({
        id: (tweets.length +1).toString(),
        user: this.userName,
        body: this.userTweet,
        date: Date.now().toString(),
        dateShow: (new Date()).toString(),
        comments: []
      });
    }
  }
});
