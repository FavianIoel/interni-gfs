
$(document).ready(function () {
    $("td").click(function () {
        $(this).hide();
    });

    $('th').click(function () {
        $("td").show();
    })
});