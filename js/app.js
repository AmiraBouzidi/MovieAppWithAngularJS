
//var url="http://"+this.location.host+"/";
var url="http://"+"192.168.31.108:5000"+"/";
var moviecatApp = angular.module('moviecatApp', ['ngRoute', 'moviecatControllers']);

moviecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partials/movie-list.html',
        controller: 'movieListCtrl'
      }).
      when('/series', {
        templateUrl: 'partials/serie-list.html',
        controller: 'serieListCtrl'
      }).
      when('/downloadMovie/:id', {
        templateUrl: 'partials/download-movie-list.html',
        controller: 'downloadMovieListCtrl'
      }).
      when('/downloadSerie/:id', {
        templateUrl: 'partials/download-serie-list.html',
        controller: 'downloadSerieListCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });

  }]);

moviecatApp.run( function($rootScope) {

  $rootScope.PlayID = function(id) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url+"play/"+id, true );
    xmlHttp.send();
  }
  $rootScope.DeleteID = function(id) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url+"delete/"+id, true );
    xmlHttp.send();
  }
  $rootScope.CommandAction = function(action) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url+action, true );
    xmlHttp.send();
  }
  $rootScope.downloadMovieOrSerie = function ( torrentObjectId,type)
	{
					var xmlhttp;
					xmlhttp=new XMLHttpRequest();
					var playUrl =url+type;
					xmlhttp.onreadystatechange=function()
					  {
  					  if (xmlhttp.readyState==4 && xmlhttp.status==200)
						      {		console.log( JSON.parse(xmlhttp.responseText));	}
					  }
					xmlhttp.open("POST",playUrl,true);
					xmlhttp.send( JSON.stringify( torrentObjectId));

	}
  $rootScope.SendPoster = function ( posterUrl ,imbdID)
  {
          var xmlhttp;
          xmlhttp=new XMLHttpRequest();
          var playUrl =url+"imgp";
          xmlhttp.onreadystatechange=function()
            {
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
                    { console.log( JSON.parse(xmlhttp.responseText));}
            }

          xmlhttp.open("POST",playUrl,true);
          xmlhttp.send(JSON.stringify({"url":posterUrl, "id":imbdID}));

  }
});
