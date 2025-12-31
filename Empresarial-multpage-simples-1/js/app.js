angular.module('routerApp', ['ui.router']);

angular.module('routerApp').config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/home');

$stateProvider

    // inicio
    .state('home', {

        url: '/home',
        templateUrl: 'partial-home.html'
    })

    .state('contatos',{

        url: '/contatos',
        templateUrl: 'contatos.html'        
    })  

    .state('empresa',{

        url: '/empresa',
        templateUrl: 'empresa.html'        
    }) 
    
    .state('nossoTrabalho',{

        url: '/nossotrabalho',
        templateUrl: 'nossoTrabalho.html'        
    }) 

});





