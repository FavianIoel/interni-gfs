// Problem : It looks gross in smaller devices
//Solution: To hide the text links and swap them out with a more appropriAte navigation bar


//CREATE a select and  append to #menu
var $select = $("<select></select>");
$("#menu").append($select);


// cycle over menu links
$("#menu a").each(function () {
    var $anchor = $(this);


    //Create an otion
    var $option = $("<option></option>");

    //Deal with selected  option depending on current page.
    if($anchor.parent().hasClass('selected')) {
        $option.prop("selected", true) ;
    }

    // option's value is the href
    $option.val($anchor.attr("href"));


    //option's text  is the tex of link
    $option.text($anchor.text());


    //append option to select
    $select.append($option);

});

// Bind change listner to the select
$select.change(function () {

    // go to select's location
    window.location = $select.val();

});


