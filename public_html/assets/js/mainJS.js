var app = angular.module("mainApp", ['ngRoute']);
angular.element(function () {
    angular.bootstrap(document, ['mainApp']);
});
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'kanzlei/main.html',
                    controller: 'indexCtrl'
                })
                .when('/home', {
                    templateUrl: 'html/main.html',
                    controller: 'mainCtrl'
                })
                .when("/gebiete", {
                    templateUrl: 'kanzlei/gebiete.html',
                    controller: 'gebieteCtrl'
                })
                .when("/person", {
                    templateUrl: 'kanzlei/person.html',
                    controller: 'personCtrl'
                })                
                .when("/email", {
                    templateUrl: 'kanzlei/email.html',
                    controller: 'emailCtrl'
                })
                .when("/anfahrt", {
                    templateUrl: 'kanzlei/anfahrt.html',
                    controller: 'anfahrtCtrl'
                })
                .when("/impressum", {
                    templateUrl: 'kanzlei/impressum.html',
                    controller: 'impressumCtrl'
                })
                .when("/datenschutz", {
                    templateUrl: 'kanzlei/datenschutz.html',
                    controller: 'datenschutzCtrl'
                })
                .otherwise({
                    redirectTo: 'html/main.html'
                });
    }]);
app.controller('mainCtrl', function () {

});
app.controller('indexCtrl', function ($scope) {});
app.controller('headerCtrl', function ($scope) {
    $('#banner').change(function () {
        var logoWidth = $('#banner').height() * 0.9;
        var logoHeight = logoWidth * 1.7;

        $('#logo').css({
            width: "'" + logoWidth + "'", //logoWidth,
            height: "'" + logoHeight + "'"//logoHeight
        });
    });    
    $('#sandwich').click(function () {
        $('.linkSandwich').css({
            display:'none'
        });
        $('#asideLeft').slideToggle('slow');
    });
});
app.controller('asideLeft', function ($scope) {
    $scope.toggleKontakt = function () {
        $('#toggleKontakt').toggle(200);
        $('#toggleKanzlei').hide(200);
    };
    $scope.toggleKanzlei = function () {
        $('#toggleKanzlei').toggle(200);
        $('#toggleKontakt').hide(200);
    };
    $scope.slideUp = function () {
        $('#toggleKanzlei').slideUp(200);
        $('#toggleKontakt').slideUp(200);
    };
    $('.aAsideNav').click(function () {
        var screenWidth = $(window).width() + 17;
        if (screenWidth <= 767) {
            $('#asideLeft').slideUp('slow');
            $('.linkSandwich').css({
                display:'block'
            });
        }
    });   
});

app.controller('gebieteCtrl', function () {
    $('.familienrecht').click(function(){
        $('#familienrecht').slideDown('slow');
        $('#arbeitsrecht, #erbrecht, #verkehrsrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.arbeitsrecht').click(function(){
        $('#arbeitsrecht').slideDown('slow');
        $('#familienrecht, #erbrecht, #verkehrsrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.erbrecht').click(function(){
        $('#erbrecht').slideDown('slow');
        $('#familienrecht, #arbeitsrecht, #verkehrsrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.verkehrsrecht').click(function(){
        $('#verkehrsrecht').slideDown('slow');
        $('#arbeitsrecht, #erbrecht, #familienrecht, #mietrecht, #sozialrecht').slideUp('slow');
    });
    $('.mietrecht').click(function(){
        $('#mietrecht').slideDown('slow');
        $('#verkehrsrecht, #arbeitsrecht, #erbrecht, #familienrecht, #sozialrecht').slideUp('slow');
    });
    $('.sozialrecht').click(function(){
        $('#sozialrecht').slideDown('slow');
        $('#mietrecht, #verkehrsrecht, #arbeitsrecht, #erbrecht, #familienrecht').slideUp('slow');
    });
});
app.controller('emailCtrl', function ($scope) {
    $('#dataCheck').change(function () {
        if (document.getElementById('dataCheck').checked == true) {
            $("#inputSubmit").slideDown('slow');
        } else {
            $("#inputSubmit").slideUp('slow');
        }
    });

});
app.controller('fallCtrl', function ($scope) {});
app.controller('praxisCtrl', function ($scope) {});
app.controller('anfahrtCtrl', function ($scope) {});
app.controller('impressumCtrl', function ($scope) {});
app.controller('datenschutzCtrl', function ($scope) {});
app.controller('leistungenCtrl', function ($scope) {});
app.controller('teamCtrl', function ($scope) {
    $scope.changePic1 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team1.jpg")'
        });
        $('.label1').css({
            backgroundColor: 'orange'
        });
        $('.label2, .label3, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic2 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team2.jpg")'
        });
        $('.label2').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label3, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic3 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team3.jpg")',
            transition: 'opacity 2s ease-in-out'
        });
        $('.label3').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic4 = function () {
        $('#picTeam').fadeIn(300).css({
            backgroundImage: 'url("assets/team4.jpg")'
        });
        $('.label4').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic5 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team5.jpg")'
        });
        $('.label5').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label4, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic6 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team6.jpg")'
        });
        $('.label6').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label4, .label5').css({
            backgroundColor: '#efefef'
        });
    };
});
