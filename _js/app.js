var IonicDocsModule = angular.module('ionic-docs', ['ngAnimate'])

.controller('DocsMainCtrl', [function($scope) {

}])
.controller('DocsCtrl', ['$scope', '$timeout', function($scope, $timeout) {

  // $scope.scrollTo = function(h2) {
  //   // simple anchor scroll (replace with animated scrollTo?...)
  //   window.location.hash = '#' + h2;
  // };
  //
  // $scope.expand = function(slug) {
  //   setTimeout(checkOffset,210);
  //   if ($scope.expanded == slug) {
  //     return $scope.expanded = '';
  //   }
  //   return $scope.expanded = slug;
  // };
  //
  // $('body').scrollspy({target: '#index'});
  // var indexList = $('#index');
  // var docsEnd = $('#docs-end');
  // $(document).scroll(function() {
  //   checkOffset();
  // });
  // function checkOffset() {
  //   if (indexList.offset().top + indexList.height() >=
  //       docsEnd.offset().top - 10) {
  //     indexList[0].classList.add('bottom');
  //   }
  //   if ($(document).scrollTop() + window.innerHeight <
  //       docsEnd.offset().top + 100) {
  //     indexList[0].classList.remove('bottom'); // restore when you scroll up
  //   }
  //
  // }
}]);
