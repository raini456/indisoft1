var app = angular.module("mainApp", ['ngRoute']);
angular.element(function () {
    angular.bootstrap(document, ['mainApp']);
});
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'indexCtrl'
                })
                .when('/home', {
                    templateUrl: 'html/main.html',
                    controller: 'mainCtrl'
                })
                .when("/schwerpunkte", {
                    templateUrl: 'html/taetigkeitsschwerpunkte.html',
                    controller: 'schwerpunkteCtrl'
                })
                .when("/leistungen", {
                    templateUrl: 'html/leistungen.html',
                    controller: 'leistungenCtrl'
                })
                .when("/miete", {
                    templateUrl: 'html/mietrecht.html',
                    controller: 'mietrechtCtrl'
                })
                .when("/familie", {
                    templateUrl: 'html/familienrecht.html',
                    controller: 'familienrechtCtrl'
                })
                .when("/verkehr", {
                    templateUrl: 'html/verkehrsrecht.html',
                    controller: 'verkehrsrechtCtrl'
                })/**/
                .when("/taetigkeitsschwerpunkte_weitere", {
                    templateUrl: 'html/taetigkeitsschwerpunkte_weitere.html',
                    controller: 'weitereCtrl'
                })
                .when("/team", {
                    templateUrl: 'html/team.html',
                    controller: 'teamCtrl'
                })
                .when("/rechtsprechung", {
                    templateUrl: 'html/rechtsprechung.html',
                    controller: 'rechtsprechungCtrl'
                })
                .when("/email", {
                    templateUrl: 'html/email.html',
                    controller: 'emailCtrl'
                })
                .when("/fall", {
                    templateUrl: 'html/fall.html',
                    controller: 'fallCtrl'
                })
                .when("/kontakt", {
                    templateUrl: 'html/email.html',
                    controller: 'emailCtrl'
                })
                .when("/anfahrt", {
                    templateUrl: 'html/anfahrt.html',
                    controller: 'anfahrtCtrl'
                })
                .when("/impressum", {
                    templateUrl: 'html/impressum.html',
                    controller: 'impressumCtrl'
                })
                .when("/datenschutz", {
                    templateUrl: 'html/datenschutz.html',
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
app.controller('sliderCtrl', function () {        
    var no=0;
    $('li').click(function(){
        $('li').removeClass('active');
        $(this).addClass('active');
        no=$(this).attr('data-slide-to');        
        $('.img0').css({
            backgroundImage:'url(assets/images/team'+no+'.jpg)'
        }).fadeIn('slow');
    });
    $('.carousel-control-next').click(function(){
        no++;        
        no<6?no=no:no=0;
        $('.img0').css({
            backgroundImage:'url(assets/images/team'+no+'.jpg)'
        }).fadeIn('slow');
        $('li').removeClass('active');
        $('#slidePic'+ no).addClass('active');      
    });
    $('.carousel-control-prev').click(function(){
        no--;        
        no>-1?no=no:no=5;
        $('.img0').css({
            backgroundImage:'url(assets/images/team'+no+'.jpg)'
        }).fadeIn('slow');
        $('li').removeClass('active');
        $('#slidePic'+ no).addClass('active');     
    });
    
});
app.controller('rechtsprechungCtrl', function ($scope) {
    $scope.openFall = function () {
        $('#fall').slideToggle(200);
        $('#neuestes').slideUp(200);
        $('#praxis').slideUp(200);

    };
    $scope.openNeuestes = function () {
        $('#neuestes').slideToggle(200);
        $('#fall').slideUp(200);
        $('#praxis').slideUp(200);

    };
    $scope.openPraxis = function () {
        $('#praxis').slideToggle(200);
        $('#fall').slideUp(200);
        $('#neuestes').slideUp(200);
    };
});
app.controller('indexCtrl', function ($scope) {

    $scope.siteWidth = window.innerWidth;

    //$scope.siteWidth = window.innerWidth;               
});
app.controller('asideLeftCtrl', function ($scope) {
    $('#liKanzlei').mouseover(function () {
        $('#ulKanzlei').slideDown('slow');
    });
    $('#liHome, #liIhrRecht').mouseover(function () {
        $('#ulKanzlei').slideUp('slow');
    });
    $('.liUlKanzlei').click(function () {
        $('#ulKanzlei').slideUp('slow');
    });
});
app.controller('mainCtrl', function ($scope) {
    
});
app.controller('schwerpunkteCtrl', function ($scope) {});
app.controller('familienrechtCtrl', function ($scope) {});
app.controller('mietrechtCtrl', function ($scope) {});
app.controller('verkehrsrechtCtrl', function () {
    $('#btnTest').click(function(){
        console.log("HIH");
    });
});

app.controller('weitereCtrl', function ($scope) {});
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
