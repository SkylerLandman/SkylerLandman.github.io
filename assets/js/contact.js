function contact() {
    var script_url ="https://script.google.com/macros/s/AKfycbzHITJKgkRjK2yYvrRvcOEjc0sMmzL_H41vM0bHmth-gFjugzDxu7uMaAjHRTk8POCXyQ/exec";

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var url = script_url + "?callback=thanks&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    }) 
}

function thanks(e) {
    alert("Thanks, I'll get back to you as soon as I can. <3 ");
}
