Vue.component('app-header', {
  props: ['title'],
  template: '<header><div class="fesc-logo"><img src="images/fesc-logo.png" alt="FESC Logo"></div><div class="fesc-text"><h2> {{ title }} </h2></div></header>'
})

Vue.component('app-footer', {
  template: '<footer><div class="social"><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Check+this+out"></a><iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdaxnac.github.io%2Fsocial-media%2F&layout=button_count&size=small&mobile_iframe=false&width=69&height=20&appId" width="69" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></div><div class="copy">Copyright &copy; 2018 Florida Energy Systems Consortium. All Rights Reserved.</div></footer>'
})

var app = new Vue ({
  el: '#app'
})
