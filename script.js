$(document).ready(function () {
    $('.stadsfietsDames').on('click', function () {
        $('.maat43').hide().next().hide();
        $('.maat50').show().next().show();
        $('.maat57').show().next().show();
        $('.maat61').hide().next().hide();
        $('.geenMaat').hide().next().hide();
    });

    $('.stadsfietsHeren').on('click', function () {
        $('.maat43').hide().next().hide();
        $('.maat50').show().next().show();
        $('.maat57').show().next().show();
        $('.maat61').show().next().show();
        $('.geenMaat').hide().next().hide();
    });

    $('.elec-fietsDames').on('click', function () {
        $('.maat43').show().next().show();
        $('.maat50').show().next().show();
        $('.maat57').show().next().show();
        $('.maat61').hide().next().hide();
        $('.geenMaat').hide().next().hide();
    });

    $('.elec-fietsHeren').on('click', function () {
        $('.maat43').hide().next().hide();
        $('.maat50').show().next().show();
        $('.maat57').show().next().show();
        $('.maat61').show().next().show();
        $('.geenMaat').hide().next().hide();
    });

    $('.vouwfiets').on('click', function () {
        $('.maat43').hide().next().hide();
        $('.maat50').hide().next().hide();
        $('.maat57').hide().next().hide();
        $('.maat61').hide().next().hide();
        $('.geenMaat').show().next().show();
    });
});