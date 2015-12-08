app.config(function ($stateProvider) {

    // Register our *blog* state.
    $stateProvider.state('blog', {
        url: '/blog',
        controller: 'BlogController',
        templateUrl: 'js/blog/blog.html'
    });

});

app.controller('BlogController', function ($scope, FullstackPics) {

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);

});