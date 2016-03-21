/**
 * Created by favian on 04.03.2016.
 */

//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3, When button pressed
$("button").click(function () {
    //3.1, Show spoiler and add a click event
    $(this).prev().show().click(function () {
        // if the spoiler is clicked, hide it, and then show the button
        // since the button is the next html element after the spoiler, we select it with .next()
        $(this).hide().next().show();
    });
    //3.2, Hide the button instead of removing it
    $(this).hide();
});

