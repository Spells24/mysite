app.config(function ($stateProvider) {

    // Register our *projects* state.
    $stateProvider.state('projects', {
        url: '/projects',
        controller: 'ProjectsController',
        templateUrl: 'js/projects/projects.html'
    });

});

app.controller('ProjectsController', function ($scope, FullstackPics) {

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);

});