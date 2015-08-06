// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.controller('SelectCtrl', function($scope, $ionicScrollDelegate) {
 	$scope.rightList = [];
	$scope.lastArray = {};
  var ciList = ['测试','测试1','测试','测试','测试1','测试','测试','测试1','测试','测试','测试1','测试','测试','测试1','测试', '呵呵', '恩恩','哦','A','b'];
	for(var i = 0; i<ciList.length; i++){
		var obj = ciList[i];
		var pinYinFirstChar = codefans_net_CC2PY(obj)[0].toUpperCase();
		if(pinYinFirstChar.charCodeAt() < 65 || pinYinFirstChar.charCodeAt() > 90)
			pinYinFirstChar = '#';
		if($scope.lastArray.hasOwnProperty(pinYinFirstChar)){
				$scope.lastArray[pinYinFirstChar].push(obj);
		}
		else{
			var arr = [];
			arr.push(obj);
			$scope.rightList.push(pinYinFirstChar);
			$scope.lastArray[pinYinFirstChar] = arr;
		}
	}
	console.log($scope.lastArray);
	$scope.rightList.sort();
	var headerHeightFlag = true,
		centerDiv = document.getElementById('centerDiv'),
		rightList = document.getElementById('rightList'),
		headerHeight = rightList.getBoundingClientRect().top;
	if($scope.rightList.length > 0)
		firstChar = $scope.rightList[0];
	$scope.onRelease = function(){
		rightList.style.backgroundColor = '#FFFFFF';
		centerDiv.style.opacity = 0;
	};
	$scope.onDrag = function(){
		var currentIndex = Math.ceil((event.gesture.center.pageY - headerHeight)/16) - 1;
		rightList.style.backgroundColor = '#CCCCCC';
		centerDiv.style.opacity = 1;
		if(currentIndex <= 0)
			$scope.selectChar = firstChar;
		else
			$scope.selectChar = $scope.rightList[currentIndex];
		var top = document.getElementById(firstChar).getBoundingClientRect().top;
		var element = document.getElementById($scope.selectChar);
		if (element != null) {
		    var current = element.getBoundingClientRect().top;
		    if (current - top - headerHeight < 0)
		        $ionicScrollDelegate.scrollTo(0, -(current - top));
		    else
		        $ionicScrollDelegate.scrollTo(0, current - top);
		}
	};
});
