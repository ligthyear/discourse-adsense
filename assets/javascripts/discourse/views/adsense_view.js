Discourse.AdsenseView = Discourse.View.extend({
  didInsertElement: function() {
    if(typeof adsbygoogle !== "undefined"){
      try {
        adsbygoogle.push({});
      } catch (e) {}
    }

  }
});