Vue.component('app-header', {
  props: ['title'],
  template: '<header><div class="fesc-logo"><img src="images/fesc-logo.png" alt="FESC Logo"></div><div class="fesc-text"><h2>{{ title }}</h2></div></header>'
});