app.directive('navbar', function ($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'Blog', state: 'blog' },
                { label: 'Projects', state: 'projects' },
                { label: 'Contact', state: 'contact' }
            ];

        }

    };

});
