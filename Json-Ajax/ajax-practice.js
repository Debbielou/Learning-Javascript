$(document).ready(function() {
    $('#btn').click(function() {
        $('#test').load("data.txt", function(response, status, xhr) {
            if (status === "error") {
                var msg = "Sorry but there was an error: ";
                $("#test").html(msg + xhr.status + " " + xhr.statusText);
            } else {
                $("#test").html(response);
            }
        });
    });
});