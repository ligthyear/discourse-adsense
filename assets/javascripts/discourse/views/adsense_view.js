
(function() {

var ADS_COUNT = 0

function __reload_gads (){
    if (ADS_COUNT !== 0) {
        ADS_COUNT -= 1;
        return;
    }

    ADS_COUNT = 3;
    var ads = document.getElementById("adsense_loader");
    if (ads){
        // clear the old element and its state
        ads.remove();
        for (key in window) {
            if (key.indexOf("google") !== -1){
                window[key] = undefined;
            }
        }
    }
    window.adsbygoogle = [];
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.id="adsense_loader";
    ga.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
}

Discourse.AdsenseView = Discourse.View.extend({
  didInsertElement: function() {
    __reload_gads();
    this.$("ins").each(function(idx, e) {
            adsbygoogle.push({element: e});
        });
  }
});

__reload_gads();

})();