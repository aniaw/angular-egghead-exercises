var calcApp = angular.module("calcApp", []);

calcApp.controller("SumCtrl", function ($scope) {
    this.firstNumberSum = 5;
    this.secondNumberSum = 2;

    this.addition = function (a, b) {
        this.sum = a + b;
    };

    return $scope.SumCtrl = this;

});

calcApp.controller("SubCtrl", function ($scope) {
    this.firstNumberSub = 12;
    this.secondNumberSub = 1;

    this.subtraction = function (a, b) {
        this.sub = a - b;
    };
    return $scope.SubCtrl = this;

});

calcApp.controller("MultiCtrl", function ($scope) {
    $scope.firstNumberMult = 12;
    $scope.secondNumberMult = 2;

    $scope.multiplication = function (a, b) {
        $scope.multi = a * b;
    };
});

calcApp.controller("DivideCtrl", function ($scope) {
    $scope.firstNumberDiv = 15;
    $scope.secondNumberDiv = 5;

    $scope.divide = function (a, b) {
        $scope.divid = a / b;
    };
});

calcApp.directive("multi", function () {
    return{
        restrict: "E",
        scope: {
            a: "@",
            b: "@",
            solve: "&"
        },
        template: ' <div class="btn btn-info" ng-click="solve({a : a, b: b})">Multiple</div>'

    }
});

calcApp.directive("divide", function () {
    return{
        restrict: "A",
        scope: {
            a: "@",
            b: "@",
            solve: "&"
        },
        template: '<div class="btn btn-default" ng-click="solve({a : a, b: b})">Divide</div>'
    }
});