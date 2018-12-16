/*rem适配*/
document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 100 + 'px';
<!--解决移动端0.3ms延迟-->
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}
if (!window.Promise) {
  document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' + '>' + '<' + '/' + 'script>');
}
