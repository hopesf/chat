app.controller('ChatController', ['$scope',($scope) =>{
    $scope.onlineList = [];
    $scope.activeTab = 2;

    $scope.changeTab = tab =>{
            $scope.activeTab = tab;
    };


    const socket = io.connect("http://localhost:3000");
}]);