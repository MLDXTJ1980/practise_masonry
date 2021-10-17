$(function() {
    $("#gallery-wrapper").pinterest_grid({
        no_columns: 4,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 700,
    })
    $(".white-panel").hover(
        function() {
            $(this).siblings("article").stop().fadeTo(300, 0.3)
        },
        function() {
            $(this).siblings("article").stop().fadeTo(300, 1)
        }
    )
})