$(document).ready(function () {
    $('#gender').change(function () {
        genderTest($("#gender option:selected").index());
        display();
    });

    $('#hat').change(function () {
        hatTest($("#hat option:selected").index());
        display();
    });
    $('#hatcolour').change(function () {
        hatColourTest($("#hatcolour option:selected").index());
        display();
    });
    $('#glasses').change(function () {
        glassesTest($("#glasses option:selected").index());
        display();
    });
    $('#glassescolour').change(function () {
        glassesColourTest($("#glassescolour option:selected").index());
        display();
    });
    $('#shirt').change(function () {
        shirtTest($("#shirt option:selected").index());
        display();
    });
    $('#shirtcolour').change(function () {
        shirtColourTest($("#shirtcolour option:selected").index());
        display();
    });
    $('#glove').change(function () {
        gloveTest($("#glove option:selected").index());
        display();
    });
    $('#trouser').change(function () {
        trouserTest($("#trouser option:selected").index());
        display();
    });
    $('#trousercolour').change(function () {
        trouserColourTest($("#trousercolour option:selected").index());
        display();
    });
    $('#shoe').change(function () {
        shoeTest($("#shoe option:selected").index());
        display();
    });
    $('#shoecolour').change(function () {
        shoeColourTest($("#shoecolour option:selected").index());
        display();
    });

    $('#gender').attr('selectedIndex', 0);
    genderTest(0);
    display();
});
