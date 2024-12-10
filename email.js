function mail(form) {
    var name = form.name.value;
    var comment = form.comment.value;
    var warning = ""
    for (i = 0; i < form.city.length; i++) {
        if (form.city[i].checked)
            city += " " + form.city[i].value;
    }
    var str = "mailto:tomas.esquivel@ice.com?subject=Pre-Qualification Reqeust&body=";
    if (name.length > 0) {
        str += "Hi my name is " + name + ", ";
    } else {
        warning += "Name is required"
    }
    if (comment.length > 0) {
        str += "%0D%0A" + comment + "."
    }

    if (warning.length > 0) {
        alert(warning)
    } else {
        str += "%0D%0ARegards,%0D%0A" + name;
        document.getElementById('send').href = str;
    }
}
