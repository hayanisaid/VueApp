
ready: function() {
2 // GET request
3 this.$http({url: '/someUrl', method: 'GET'})
4 .then(function (response) {
5 // success callback
6 }, function (response) {
7 // error callback
8 });
9 }