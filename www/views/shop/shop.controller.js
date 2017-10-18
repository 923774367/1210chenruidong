(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'陈瑞栋',
        ab:'',
        name1:'陈瑞栋',
        phone:'15659793685',
        phone1:'15659793685',
        createTime:'2017-9-28 15:30:00',
        email:'923774367@qq.com',
        hylx:'111'
      });
    });
  }])
})();
