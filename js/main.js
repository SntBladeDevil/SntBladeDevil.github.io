$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$('#backToSignPage').click(function () {
    window.location.replace("../index.html");
});


$('#loginToInsert').click(function () {
    window.location.replace("./sites/1.html");
});
