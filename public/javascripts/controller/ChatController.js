app.controller('ChatController', ['$scope',($scope) =>{
    $scope.onLineList = [];
    $scope.activeTab = 2;
    $scope.changeTab = tab =>{
            $scope.activeTab = tab;
    };

    const socket = io.connect("http://localhost:3000");

    socket.on('onlineList', users => {
        $scope.onlineList = users;
        $scope.$apply();
    });

}]);