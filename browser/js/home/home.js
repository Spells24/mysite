app.config(function ($stateProvider) {

    // Register our *home* state.
    $stateProvider.state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'js/home/home.html'
    });

});

app.controller('HomeController', function ($scope, FullstackPics) {

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);

});