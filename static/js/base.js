/**
 * Created with JetBrains PhpStorm.
 * User: M.Bagher
 * Date: 7/15/13
 * Time: 2:39 AM
 * To change this template use File | Settings | File Templates.
 */
$(function() {

    $( "#accordion" ).accordion();



    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#autocomplete" ).autocomplete({
        source: availableTags
    });



    $( ".button" ).button();
    $( "#radioset" ).buttonset();
    $( "#nav-bar" ).buttonset();



    $( "#tabs" ).tabs();



    $( "#dialog" ).dialog({
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                }
            },
            {
                text: "Cancel",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });

    // Link to open the dialog
    $( "#dialog-link" ).click(function( event ) {
        $( "#dialog" ).dialog( "open" );
        event.preventDefault();
    });



    $( "#datepicker" ).datepicker({
        inline: true
    });



    $( "#slider" ).slider({
        range: true,
        values: [ 17, 67 ]
    });

    $( "#remember-check" ).button();
//    $( "#rem" ).button();


    $( "#progressbar" ).progressbar({
        value: 20
    });

//    $("input:text, input:password")
//        .button()
//        .css({
//            'font' : 'inherit',
//            'color' : 'inherit',
//            'text-align' : 'right',
//            'outline' : 'none',
//            'cursor' : 'text',
//            'background-color': '#ffffff'
//        })
//        .hover({
//            'background-color': '#ffffff'
//        })
//        .focus({
//            'background-color': 'red'
//        })
//    ;

    // Hover states on the static widgets
    $( ".ui-icon" ).hover(
        function() {
            $( this ).addClass( "ui-state-hover" );
        },
        function() {
            $( this ).removeClass( "ui-state-hover" );
        }
    );

    $( "#forget-pass" ).dialog({
        title:"بازنشانی رمز عبور",
        autoOpen: false,
        width:500,
        resizable:false,
        modal:true,
        show: {
            effect: "blind",
            duration: 1000,
            resizable:false
        },
        hide: {
            effect: "blind",
            duration: 1000
        }
    });
    $( "#sign-up-form" ).dialog({
        title:"ثبت نام",
        autoOpen: false,
        width:500,
        resizable:false,
        modal:true,
        show: {
            effect: "blind",
            duration: 1000,
            resizable:false
        },
        hide: {
            effect: "blind",
            duration: 1000
        }
    });
    $("#setting").dialog({
        title:"ثبت نام",
        autoOpen: false,
        width:600,
        resizable:false,
        modal:true,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 1000
        }
    });

    $( "#set-close" ).click(function() {
        $( "#setting" ).dialog("close");
    });
    $( "#forget-link" ).click(function() {
        $( "#forget-pass" ).dialog("open");
    });
    $( "#sign-up-link" ).click(function() {
        $( "#sign-up-form" ).dialog("open");
    });
    $( "#radio3" ).click(function() {
        $( "#setting" ).dialog("open");
    });

    $( "#reset-done" ).click(function() {

    });

    $(".ui-notification-bottomleft").notification({
        stack: "above"
    });
    $("button#set-close").click(function(){
        $(".ui-notification-bottomleft").notification("create", {
            title: "پیغام سیستم",
            content: "صحیح است."
        });
    });
    $("#check1").button();
    $("#check2").button();

    $(".ui-notification-container").notification();

    $("button#reset-done").click(function(){
        $( "#forget-pass" ).dialog("close");
        $(".ui-notification-container").notification("create", {
                title: "پیغام سیستم",
                content: "برای بازنشانی رمز عبور به میل خود مراجعه کنید"
            },
            {
                show: {
                    effect: 'blind',
                    options: {},
                    speed: 750,
                    callback: function(){}
                },
                hide: {
                    effect: 'clip',
                    options: {},
                    speed: 750,
                    callback: function(){}
                }
            });

    });

    $("button#send").click(function(){
        $( "#sign-up-form" ).dialog("close");
        setTimeout(continue1, 1000)
    });
    var tooltips = $( "[title]" ).tooltip({
        show: {
            effect: "fade",
            delay: 550
        }    });

    $( ".word" ).tooltip({
        show: {
            effect: "slideDown",
            delay: 250
        }
    });
    $( "#selectable" ).selectable();
    $( "#selectable1" ).selectable();

});

function continue1(){
    $(".ui-notification-container").notification("create", {
            title: "پیغام سیستم",
            content: "یک نامه حاوی لینک فعالسازی به رایانامه شما ارسال شده است."
        },
        {
            show: {
                effect: 'blind',
                options: {},
                speed: 750,
                callback: function(){}
            },
            hide: {
                effect: 'clip',
                options: {},
                speed: 750,
                callback: function(){}
            }
        });


}

function go_next(){
    if(document.getElementById("st-1").style.display!="none"){
        $( "#st-1" ).fadeOut(500);
        $( "#st-2").effect( 'slide', 1000 );
    }
}function go_prev(){
    if(document.getElementById("st-2").style.display!="none"){
        $( "#st-2" ).fadeOut(500);
        $( "#st-1").effect( 'slide', {direction : "right"} , 1000 );
    }
}