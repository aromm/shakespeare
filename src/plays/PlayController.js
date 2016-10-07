
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
      'Hamlet': 'Ham',
      'Henry VI': '', // name
      'Henry VIII': 'H8',
      'Julius Caesar':'JC',
      'King John': 'Jn',
      'King Lear': 'Lr',
      'Love\'s Labour\'s Lost': 'LLL',
      'Macbeth': 'Mac',
      'Measure for Measure': 'MM',
      'Merchant of Venice': 'MV',
      'Merry Wives of Windsor': 'Wiv',
      'Midsummer Night\'s Dream': 'MND',
      'Much Ado about Nothing': 'Ado',
      'Othello': 'Oth',
      'Pericles': 'Per',
      'Richard II': 'R2',
      'Richard III': 'R3',
      'Romeo and Juliet': 'Rom',
      'Taming of the Shrew': 'Shr',
      'Tempest': 'Tmp',
      'Timon of Athens': 'Tim',
      'Titus Andronicus': 'Tit',
      'Troilus and Cressida': 'Tro',
      'Twelfth Night': 'TN',
      'Two Gentlemen of Verona': 'TGV',
      'Winter\'s Tale': 'WT'
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
    self.dict = dict;


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


/**
   * Plays DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
function NavBarService($q){
    var features = [
      {
        name: 'Summary',
        avatar: 'svg-1'
      },
      {
        name: 'Visualizations',
        avatar: 'svg-2'
      },
      {
        name: 'Character List',
        avatar: 'svg-3'
      },
      {
        name: 'Reader',
        avatar: 'svg-4',
      }
    ];

    // Promise-based API
    return {
      loadAllFeatures : function() {
        // Simulate async nature of real remote calls
        console.log(features);
        return $q.when(features);
      }
    };
  }
