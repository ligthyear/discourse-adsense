# name: Discourse Adsense
# about: Adds Adsense to Discourse
# version: 0.7
# author: DiscourseHosting.com
# minimum Discourse version: v0.9.9.3

register_asset "javascripts/ad_views.js"

register_asset "javascripts/injectors/discovery_injector.js.erb", :template_injector
register_asset "javascripts/injectors/topic_injector.js.erb", :template_injector

register_css <<CSS

.adsense {
  text-align: center;
  padding: 3px;
  margin-bottom: 10px;
}

CSS
