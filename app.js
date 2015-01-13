var app = angular.module('expensesApp', []); 

app.controller('ExpensesViewController', ['$scope', function($scope) {
  $scope.expense = {
    description: 'food',
    amount: 10
  };

  $scope.phrase = 'this sky is blue';
}])
