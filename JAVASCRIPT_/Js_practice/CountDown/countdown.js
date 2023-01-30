var x = setInterval(function () {
    var year = new Date().getFullYear();
    var Christmas = new Date("December 25,2022" );
    var today = new Date().getTime();

    var timeLeft = Christmas - today;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("ball").innerHTML = + days + "<br> days ";
    document.getElementById("countdown").innerHTML =
        "There are only <br>" +
        days +
        " days " +
        hours +
        " hours " +
        minutes +
        " minutes " +
        seconds +
        " seconds " +
        "<br> until Christmas";
}, 1000);
