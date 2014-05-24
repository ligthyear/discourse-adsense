(function() {

  Handlebars.registerHelper('adsenseBlock', function(width, height, slotid) {
    var currentUser = Discourse.User.current();
    if ((currentUser) && ( currentUser.get('trust_level') > Discourse.SiteSettings.adsense_through_trust_level )) {
        return "";
    }

    var position = slotid.replace('_mobile', '');
    if (Discourse.SiteSettings["adsense_show_" + position]) {
      return new Handlebars.SafeString('<div class="adsense adsense_' + slotid.trim() + '">' +
        '<ins class="adsbygoogle" style="display:inline-block; width:' +
        width + 'px; height:'+ height + 'px; " data-ad-client="' + Discourse.SiteSettings.adsense_publisher_code.trim() + 
        '" data-ad-slot="' + Discourse.SiteSettings['adsense_ad_slot_' + slotid.trim()] + '"></ins>' +
        '</div>'
      );
    }
    return "";
  });

})();
