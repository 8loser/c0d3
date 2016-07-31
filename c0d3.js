String.prototype.c0d3 = function () {
    var str = this.toString();
    $.ajax({
        url: 'c0d3.json'
        , dataType: 'json'
        , async: false
        , success: function (data) {
            $.each(data, function (key, val) {
                str = str.replace(key, val);
            });
        }
    });
    //Or this can do too
    /*
    $.ajaxSettings.async = false;
    $.getJSON("c0d3.json", function (data) {
        $.each(data, function (key, val) {
            str = str.replace(key, val);
        });
    });
    $.ajaxSettings.async = true;
    */
    return str;
};
