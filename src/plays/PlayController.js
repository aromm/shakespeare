  

  angular
       .module('playModule')
       .controller('PlayController', [
          'navBarService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          PlayController])
       .service('navBarService', ['$q', NavBarService]);

  var dict = {
    'All\'s Well That Ends Well': 'AWW',
    'Antony and Cleopatra': 'Ant',
    'As You Like It': 'AYL',
    'Coriolanus': 'Cor',
    'Cymbeline': 'Cym',
    'Comedy of Errors': 'Err',
    'Henry IV': 'H4',
    'Henry V': 'H5',
    'Hamlet': 'Ham'
  }


  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function PlayController( navBarService, $scope) {
    var self = this;

    self.selected     = null;
    self.featureLinks = [ ];
    self.selectLink   = selectLink;
    //self.getPlayInfo  = getPlayInfo;
    self.getSpeakFrequency = getSpeakFrequency;
    self.play = $scope.play;


    // Load all registered users

    navBarService
          .loadAllFeatures()
          .then( function( features ) {
            self.features    = [].concat(features);
            //self.selected = features[0];
          });



    // *********************************
    // Internal methods
    // *********************************

    $scope.init = function() {
      console.log("in init");
      var name = play["name"];
      var fileName = dict[name];
      console.log(fileName);
      var playName, playSummary, playChars;
      $.getJSON("../assets/AWW.json", function(data) {
        console.log("JSON Data: " + data);
        $.each(data, function(key, val) {
            console.log(key + "value:: " + val);
            playName = data.name;
            playChars = data.characters;
            playSummary = data.summary;
        })
        .done(function() {
          console.log("second success");
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      });

    }
    //$scope.init();
    /**
     * Select the current avatars
     * @param menuId
     */
    function selectLink ( feature ) {
      self.selected = angular.isNumber(feature) ? $scope.features[feature] : feature;
    }



/**
     * We get 'play' value from clicking a play in the left navbar
     * This function reads play info from a JSON file
     */
      

    

    /**
     * We need to know which play page we're on to get value of 'play'
     * This function gets the appropriate visualization and loads it into the webpage
     */
    function getSpeakFrequency ( play ) {

    }

  }
