var app = angular.module('app',['ngAnimate','ngMessages','ui.bootstrap','ngMaterial']);

app.controller("main_ctrl",['$scope','$http',function($scope,$http){
    var vm =  this;
    vm.loader = false;
    vm.portals = {
        business: {
            name:'business',
            url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c706b32c0ef04d218bee42f16b7cb2f4',
            news:[]
        },
        techcrunch: {
            name:'techcrunch',
            url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c706b32c0ef04d218bee42f16b7cb2f4',
            news:[]
        },
        apple: {
            name:'apple',
            url: 'https://newsapi.org/v2/everything?q=apple&from=2018-03-20&to=2018-03-20&sortBy=popularity&apiKey=c706b32c0ef04d218bee42f16b7cb2f4',
            news:[]
        },
        wallstreet: {
            name:'wallstreet',
            url: 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c706b32c0ef04d218bee42f16b7cb2f4',
            news:[]
        }
    }

    vm.get_news = function(attr){
        vm.loader = true;
        if(vm.portals[attr].news.length == 0){
            $http.get(vm.portals[attr].url)
                .then(function(res){
                    vm.loader = false;
                    console.log(res)
                    vm.portals[attr].news = res.data.articles;
                },function(err){ vm.loader = false; console.log(err)})
        }
        else vm.loader = false;
    }

    vm.refresh = function(attr){
        console.log("REFRESH")
        vm.loader = true;
        $http.get(vm.portals[attr].url)
            .then(function(res){
                vm.loader = false;
                console.log(res)
                vm.portals[attr].news = res.data.articles;
            },function(err){ vm.loader = false; console.log(err)})
    }
    $scope.x = function(event,target){
        console.log(event,target)
        alert("Hello");
    }

}])