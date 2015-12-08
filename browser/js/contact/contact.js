app.config(function ($stateProvider) {

    // Register our *contact* state.
    $stateProvider.state('contact', {
        url: '/contact',
        controller: 'ContactController',
        templateUrl: 'js/contact/contact.html'
    });

});

app.controller('ContactController', function ($scope, FullstackPics) {

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);

});