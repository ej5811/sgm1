angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('withFamilyWithFriend.page1', {
    url: '/feeds',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page23', {
    url: '/groupFeeds',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page23.html',
        controller: 'page23Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page2', {
    url: '/summary',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page3', {
    url: '/items',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page4', {
    url: '/groups',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page5', {
    url: '/chat',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page6', {
    url: '/community',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend', {
    url: '/side-menu21',
    templateUrl: 'templates/withFamilyWithFriend.html',
    controller: 'withFamilyWithFriendCtrl'
  })

  .state('withFamilyWithFriend.page7', {
    url: '/notify',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page7.html',
        controller: 'page7Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page8', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page8.html',
        controller: 'page8Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page9', {
    url: '/joinUs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page9.html',
        controller: 'page9Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page10', {
    url: '/findPassword',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page11', {
    url: '/inoutItems',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page11.html',
        controller: 'page11Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page13', {
    url: '/fundItems',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page13.html',
        controller: 'page13Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page12', {
    url: '/budget',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page12.html',
        controller: 'page12Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page14', {
    url: '/setting',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page14.html',
        controller: 'page14Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page15', {
    url: '/exportExcel',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page15.html',
        controller: 'page15Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page17', {
    url: '/feedback',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page17.html',
        controller: 'page17Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page16', {
    url: '/termsPrivacy',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page16.html',
        controller: 'page16Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page18', {
    url: '/copyright',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page18.html',
        controller: 'page18Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.myFamily', {
    url: '/groupsDetail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myFamily.html',
        controller: 'myFamilyCtrl'
      }
    }
  })

  .state('withFamilyWithFriend.page22', {
    url: '/invite',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page22.html',
        controller: 'page22Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page20', {
    url: '/addMembers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page20.html',
        controller: 'page20Ctrl'
      }
    }
  })

  .state('withFamilyWithFriend.page21', {
    url: '/feedDetail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page21.html',
        controller: 'page21Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/feeds')


});