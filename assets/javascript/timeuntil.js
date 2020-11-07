$(document).ready(function() {
    let count = new Countdown(new Date(2021, 5, 25), new Date(Date.now()));

    count.countdown(function(obj) {
        $("#days").text(obj.days);
        $("#hours").text(obj.hours);
        $("#min").text(obj.minutes);
        $("#seconds").text(obj.seconds);
    });
});

