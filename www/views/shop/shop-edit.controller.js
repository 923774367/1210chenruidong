(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      name:'陈瑞栋',
      ab:'',
      name1:'陈瑞栋',
      phone:'15659793685',
      phone1:'15659793685',
      createTime:'2017-9-28 15:30:00',
      email:'923774367@qq.com',
      hylx:'111'

    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
