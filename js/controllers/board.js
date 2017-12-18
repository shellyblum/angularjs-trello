app.controller("boardCtrl", function($scope, lists) {

    this.$onInit = function () {
        $scope.data = lists.getData();
        // $scope.editInput = function() {
        //     $scope.title.css('background-color','white');
        // }
        $scope.editNewCard = false;
        $scope.showCard = function() {
            $scope.editNewCard = true;
        }
        $scope.hideCardEdit = function() {
            $scope.editNewCard = false;
        }
    }
})