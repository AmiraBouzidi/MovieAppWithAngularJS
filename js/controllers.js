var url="http://"+this.location.host+"/";
//var url="http://"+"192.168.31.108:5001"+"/";
var moviecatControllers = angular.module('moviecatControllers', []);
moviecatControllers.service('imdbService', function(){
    this.MoviesInfo= function(imbdID){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", "http://www.omdbapi.com/?i="+imbdID+"&plot=full&r=json", false );
      xmlHttp.send( null );
      return JSON.parse(xmlHttp.responseText);
    };
    this.SetUniqueId= function(UniqueID){
      return UniqueID;
    };


});
moviecatControllers.controller('movieListCtrl', ['$scope', '$http','imdbService',
  function ($scope, $http, imdbService) {
      $http.get(url+"movies").success(function(data) {
      $scope.movies = data;
      $scope.MoviesInfo1= function(imbdID){
        $scope.info= imdbService.MoviesInfo(imbdID);
            console.log($scope.imbdID);
      }
      $scope.urlPoster=url+"img/";
      $scope.SetUnique1= function(uniqueID){
      if(  $scope.ChoosenForInfo== imdbService.SetUniqueId(uniqueID))
        {$scope.ChoosenForInfo = '999'}
      else
        {$scope.ChoosenForInfo = imdbService.SetUniqueId(uniqueID)}
          console.log($scope.ChoosenForInfo);
        }
      });
  }]);

moviecatControllers.controller('serieListCtrl', ['$scope', '$http','imdbService',
  function ($scope, $http,imdbService) {
      $http.get(url+"series").success(function(data) {
      $scope.series = data;
      $scope.MoviesInfo1= function(imbdID){
        $scope.info= imdbService.MoviesInfo(imbdID);
            console.log($scope.imbdID);
      }
      $scope.urlPoster=url+"img/";
      $scope.SetUnique1= function(uniqueID){
      if(  $scope.ChoosenForInfo== imdbService.SetUniqueId(uniqueID))
        {$scope.ChoosenForInfo = '999'}
      else
        {$scope.ChoosenForInfo=imdbService.SetUniqueId(uniqueID)}
          console.log($scope.ChoosenForInfo);
        }
      });
  }]);
  moviecatControllers.controller('newMovieListCtrl', ['$scope', '$http','imdbService',
      function ($scope, $http,imdbService) {
          $http.get(url+"new_movies").success(function(data) {
          $scope.downloads =data;
          $scope.MoviesInfo1= function(imbdID){
            $scope.info= imdbService.MoviesInfo(imbdID);
                console.log($scope.imbdID);
          }
          $scope.urlPoster=url+"img/";
          $scope.SetUnique1= function(uniqueID){
          if(  $scope.ChoosenForInfo== imdbService.SetUniqueId(uniqueID))
            {$scope.ChoosenForInfo='3'}
          else
            {$scope.ChoosenForInfo=imdbService.SetUniqueId(uniqueID)}
            console.log($scope.ChoosenForInfo);
            }

        });

  }]);

  moviecatControllers.controller('newSerieListCtrl', ['$scope', '$http','imdbService',
      function ($scope, $http,imdbService) {
          $http.get(url+"new_series").success(function(data) {
          $scope.downloads =data;
          $scope.MoviesInfo1= function(imbdID){
            $scope.info= imdbService.MoviesInfo(imbdID);
                console.log($scope.imbdID);
          }
          $scope.urlPoster=url+"img/";
          $scope.SetUnique1= function(uniqueID){
          if(  $scope.ChoosenForInfo== imdbService.SetUniqueId(uniqueID))
            {$scope.ChoosenForInfo='3'}
          else
            {$scope.ChoosenForInfo=imdbService.SetUniqueId(uniqueID)}
            console.log($scope.ChoosenForInfo);
            }

        });

  }]);

moviecatControllers.controller('downloadMovieListCtrl', ['$scope', '$http','$routeParams','imdbService',
    function ($scope, $http,$routeParams,imdbService) {
        $http.get(url+"search/movie/"+$routeParams.id).success(function(data) {
        $scope.downloads =data;
        $scope.MoviesInfo1= function(imbdID){
          $scope.info= imdbService.MoviesInfo(imbdID);
              console.log($scope.imbdID);
        }
        $scope.urlPoster=url+"img/";
        $scope.SetUnique1= function(uniqueID){
        if(  $scope.ChoosenForInfo== imdbService.SetUniqueId(uniqueID))
          {$scope.ChoosenForInfo='3'}
        else
          {$scope.ChoosenForInfo=imdbService.SetUniqueId(uniqueID)}
          console.log($scope.ChoosenForInfo);
          }

      });

}]);


moviecatControllers.controller('downloadSerieListCtrl', ['$scope', '$http','$routeParams','imdbService',
    function ($scope, $http,$routeParams,imdbService) {
        $http.get(url+"search/serie/"+$routeParams.id).success(function(data) {
        $scope.downloads =data;
        $scope.MoviesInfo1= function(imbdID){
          $scope.info= imdbService.MoviesInfo(imbdID);
              console.log($scope.imbdID);
        }
        $scope.urlPoster=url+"img/";
        $scope.SetUnique1= function(uniqueID){
        if(  $scope.ChoosenForInfo== imdbService.SetUniqueId(uniqueID))
          {$scope.ChoosenForInfo='3'}
        else
          {$scope.ChoosenForInfo=imdbService.SetUniqueId(uniqueID)}
            console.log($scope.ChoosenForInfo);
        }
      });
}]);
