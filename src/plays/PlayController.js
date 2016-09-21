  var dict = {
    'All\'s Well That Ends Well': 'AWW',
    'Antony and Cleopatra': 'Ant'
    'As You Like It': 'AYL',
    'Coriolanus': 'Cor',
    'Cymbeline': 'Cym',
    'Comedy of Errors': 'Err',
    'Henry IV': 'H4',
    'Henry V': 'H5',
    'Hamlet': 'Ham'
  }

  angular
       .module('playModule')
       .controller('PlayController', [
          'featureService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          PlayController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function PlayController( featureService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected     = null;
    self.featureLinks = [ ];
    self.selectLink   = selectLink;
    self.getPlayInfo  = getPlayInfo;
    self.getSpeakFrequency = getSpeakFrequency;

    // Load all registered users

    featureService
          .loadAllFeatures()
          .then( function( features ) {
            self.features    = [].concat(features);
            self.selected = features[0];
          });



    // *********************************
    // Internal methods
    // *********************************

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
    function getPlayInfo ( play ) {
      var fileName = dict.play;
      var playName, playSummary, playChars;
      $.getJSON(fileName+".json", function(data) {
        console.log("JSON Data: " + data);
        $.each(data, function(key, val) {
            console.log(key + "value:: " + val);
            playName = data.name;
            playChars = data.characters;
            playSummary = data.summary;
        });
      });

    }

    /**
     * We need to know which play page we're on to get value of 'play'
     * This function gets the appropriate visualization and loads it into the webpage
     */
    function getSpeakFrequency ( play ) {

    }

  }
