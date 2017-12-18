var app = angular.module('myApp',[]);
app.controller("myCtrl",["$scope","Mailto",function($scope,Mailto){

	$scope.username="satish kumar";
			var recepient = "satish.dawala@ojas-it.com";
var options = {
	cc: "cc.this.person@dontgohere.com",
	bcc: "bcc.this.person@dontgohere.com",
	subject: "Angular-mailto Email",
	body: "Hi Stefan,\nThis is an email pre-populated from angular-mailto..!!"
};

$scope.href = Mailto.url(recepient, options);
}]);

