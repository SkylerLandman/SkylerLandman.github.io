function contact() {
    var script_url ="https://script.google.com/macros/s/AKfycbzpdLIPOCokp3pGiZVfIYk3thKh132E5ztJEb-SU2KIzbQCviDdlRGrG-YWaNtZ5s6c/exec";

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
