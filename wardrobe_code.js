/*
 *
 * Code by CloudWolf.
 *
 */

var GenderID;
var BaseHatID, HatID;
var GlassesID;
var BaseGlassesColourID, GlassesColourID;
var ShirtID;
var BaseShirtColourID, ShirtColourID;
var GloveID;
var TrouserID;
var BaseTrouserColourID, TrouserColourID;
var ShoeID;
var BaseShoeColourID, ShoeColourID;

//Displays values on page.
function display() {
    var out = '<table class="results" width="100%">';

    out += '<tbody>';
    out += '<thead>';
    out += '<tr><th colspan="2" class="header">ID Values</th></tr>';
    out += '<thad>';
    out += '<tr><th>Hat</th><td>' + HatID + '</td></tr>';
    out += '<tr><th>Glasses</th><td>' + GlassesID + '</td></tr>';
    out += '<tr><th>Glasses Colour</th><td>' + GlassesColourID + '</td></tr>';
    out += '<tr><th>Shirt Type</th><td>' + ShirtID + '</td></tr>';
    out += '<tr><th>Shirt Colour</th><td>' + ShirtColourID + '</td></tr>';
    out += '<tr><th>Glove</th><td>' + GloveID + '</td></tr>';
    out += '<tr><th>Pant Type</th><td>' + TrouserID + '</td></tr>';
    out += '<tr><th>Pant Colour</th><td>' + TrouserColourID + '</td></tr>';
    out += '<tr><th>Shoe Type</th><td>' + ShoeID + '</td></tr>';
    out += '<tr><th>Shoe Colour</th><td>' + ShoeColourID + '</td></tr>';
    out += '</tbody>';

    out += '</table>';

    $('#Results').html(out);
}

//Cuts down on repeated code.
function addOpt(select, text) {
    $('#' + select).append($("<option/>", {
        text:text
    }));
}

//Tests gender and generates the other drop downs appropriately.
function genderTest(index) {
    var names = ['hat', 'hatcolour', 'glasses', 'glassescolour', 'shirt', 'shirtcolour', 'glove', 'trouser', 'trousercolour', 'shoe', 'shoecolour'];
    for (var i = 0; i < names.length; i++) {
        $('#' + names[i]).html('');
    }
    var dis = ['hatcolour', 'glassescolour', 'shirtcolour', 'trousercolour', 'shoecolour'];
    for (var j = 0; j < dis.length; j++) {
        $('#' + dis[j]).attr('disabled', 'true')
    }

    //Resets IDs to defaults.
    HatID = 0;
    GlassesID = 0;
    GlassesColourID = 0;
    ShirtID = 0;
    ShirtColourID = 0;
    GloveID = 0;
    TrouserID = 0;
    TrouserColourID = 0;
    ShoeID = 0;
    switch (index) {
        //Male
        case 0:
            GenderID = 0;
            generateMaleHatList();
            generateMaleGlassesList();
            generateMaleShirtList();
            generateMaleGlovesList();
            generateMaleTrouserList();
            generateMaleShoeList();
            break;
        //Female
        case 1:
            GenderID = 1;
            generateFemaleHatList();
            generateFemaleGlassesList();
            generateFemaleShirtList();
            generateFemaleGlovesList();
            generateFemaleTrouserList();
            generateFemaleShoeList();
            break;
    }

    ShoeColourID = 0;
}

//Tests the hat type and generates the hat colour drop down appropriately.
function hatTest(index) {
    //Clears any previous options
    var hatColorLabel = $('#hatcolourlabel');
    var hatColor = $('#hatcolour');

    hatColorLabel.html("Hat Colour:");
    hatColor.html("");
    hatColor.removeAttr('disabled');

    //Male
    if (GenderID == 0) {
        switch (index) {
            //None
            case 0:
                BaseHatID = 0, HatID = 0; //Base ID marks the starting point of the colour range. Final ID is set here in case they decide to keep the first option without changing it first.
                hatColor.attr('disabled', 'true');
                addOpt("hatcolour", "");
                break;

            //Category 1 (Cap)
            case 1:
                BaseHatID = 1, HatID = 1;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Newsie (Black)");
                addOpt("hatcolour", "Flat (Brown)");
                break;

            //Category 2 (Street Wrangler)
            case 2:
                BaseHatID = 2, HatID = 2;
                hatColor.attr('disabled', 'true');
                addOpt("hatcolour", "None");
                break;

            //Category 3 (Beanie)
            case 3:
                BaseHatID = 4, HatID = 4;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Knit (Purple)");
                addOpt("hatcolour", "Barrelhead Street (Black)");
                break;

            //Category 4 (Beret)
            case 4:
                BaseHatID = 6, HatID = 6;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Commando (Teal)");
                addOpt("hatcolour", "Machello (Black)");
                break;

            //Category 5 (Fedora)
            case 5:
                BaseHatID = 8, HatID = 8;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Normal (Grey)");
                addOpt("hatcolour", "Archer (Cream)");
                break;

            //Category 6 (Bandana)
            case 6:
                BaseHatID = 10, HatID = 10;
                addOpt("hatcolour", "Black");
                addOpt("hatcolour", "Blue");
                addOpt("hatcolour", "Red");
                break;

            //Category 7 (Baseball Cap)
            case 7:
                BaseHatID = 23, HatID = 23;
                addOpt("hatcolour", "Black");
                addOpt("hatcolour", "White");
                addOpt("hatcolour", "Grey");
                addOpt("hatcolour", "Red");
                break;

            //Category 8 (Event Items)
            case 8:
                BaseHatID = 14, HatID = 14;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Assassin's Mask");
                addOpt("hatcolour", "Green Holiday Hat");
                addOpt("hatcolour", "Red Holiday Hat");
                addOpt("hatcolour", "Black Celebration Hat");
                addOpt("hatcolour", "Gold Celebration Hat");
                addOpt("hatcolour", "Silver Celebration Hat");
                addOpt("hatcolour", "Official Beta Cap");
                addOpt("hatcolour", "Security Cap");
                addOpt("hatcolour", "Blue Sky Cap");
                break;

            //Category 9 (Quest Items)
            case 9:
                BaseHatID = 27, HatID = 27;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Red Eye Beret");
                addOpt("hatcolour", "Black Formal Hat");
                addOpt("hatcolour", "White Formal Hat");
                addOpt("hatcolour", "Patcher's Hat");
                addOpt("hatcolour", "Patcher's Bandana");
                addOpt("hatcolour", "Patcher's Headgear");
                addOpt("hatcolour", "Industrial Hat");
                addOpt("hatcolour", "Elite Commando Helmet");
                addOpt("hatcolour", "SSR Helmet");
                addOpt("hatcolour", "Earpiece");
                addOpt("hatcolour", "Faded Sleepwalker Bandana");
                addOpt("hatcolour", "Worn Sleepwalker Bandana");
                addOpt("hatcolour", "Threadbare Sleepwalker Bandana");
                addOpt("hatcolour", "Wireframe Earpiece");
                addOpt("hatcolour", "Gas Mask");
                addOpt("hatcolour", "Cyherite Bandana");
                addOpt("hatcolour", "Scrapper's Earring");
                addOpt("hatcolour", "Accelerated Captain's Beret");
                addOpt("hatcolour", "Executable Skullcap");
                addOpt("hatcolour", "Executable Header");
                addOpt("hatcolour", "Executable Mask");
                addOpt("hatcolour", "Omega's Headgear");
                break;
        }
    }
    //Female
    else {
        switch (index) {
            //None
            case 0:
                BaseHatID = 0, HatID = 0;
                hatColor.attr('disabled', 'true');
                addOpt("hatcolour", "");
                break;

            //Category 1 (Cowboy Hat)
            case 1:
                BaseHatID = 1, HatID = 1;
                addOpt("hatcolour", "Black");
                addOpt("hatcolour", "White");
                break;

            //Category 2 (Masks)
            case 2:
                BaseHatID = 2, HatID = 2;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Ninja");
                addOpt("hatcolour", "BDSM");
                break;

            //Category 3 (Fedora)
            case 3:
                BaseHatID = 5, HatID = 5;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Archer (Brown)");
                addOpt("hatcolour", "Panama (White)");
                break;

            //Category 4 (Cabbie Cap)
            case 4:
                BaseHatID = 7, HatID = 7;
                addOpt("hatcolour", "Black");
                addOpt("hatcolour", "Cherry");
                break;

            //Category 5 (Beret)
            case 5:
                BaseHatID = 9, HatID = 9;
                addOpt("hatcolour", "Black");
                addOpt("hatcolour", "Purple");
                break;

            //Category 6 (Bandana)
            case 6:
                BaseHatID = 11, HatID = 11;
                addOpt("hatcolour", "Blue");
                addOpt("hatcolour", "Red");
                addOpt("hatcolour", "Black");
                break;

            //Category 7 (Baseball Cap)
            case 7:
                BaseHatID = 24, HatID = 24;
                addOpt("hatcolour", "Black");
                addOpt("hatcolour", "White");
                addOpt("hatcolour", "Grey");
                addOpt("hatcolour", "Red");
                break;

            //Category 7 (Event Items)
            case 8:
                BaseHatID = 14, HatID = 14;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Assassin's Mask");
                addOpt("hatcolour", "Green Holiday Hat");
                addOpt("hatcolour", "Red Holiday Hat");
                addOpt("hatcolour", "Black Celebration Hat");
                addOpt("hatcolour", "Gold Celebration Hat");
                addOpt("hatcolour", "Silver Celebration Hat");
                addOpt("hatcolour", "Official Beta Cap");
                addOpt("hatcolour", "Security Cap");
                addOpt("hatcolour", "Blue Sky Cap");
                break;

            //Category 9 (Quest Items)
            case 9:
                BaseHatID = 28, HatID = 28;
                hatColorLabel.html("Hat Sub-Type:");
                addOpt("hatcolour", "Red Eye Beret");
                addOpt("hatcolour", "Black Formal Hat");
                addOpt("hatcolour", "White Formal Hat");
                addOpt("hatcolour", "Patcher's Hat");
                addOpt("hatcolour", "Patcher's Bandana");
                addOpt("hatcolour", "Patcher's Headgear");
                addOpt("hatcolour", "Industrial Hat");
                addOpt("hatcolour", "Elite Commando Helmet");
                addOpt("hatcolour", "SSR Helmet");
                addOpt("hatcolour", "Earpiece");
                addOpt("hatcolour", "Faded Sleepwalker Bandana");
                addOpt("hatcolour", "Worn Sleepwalker Bandana");
                addOpt("hatcolour", "Threadbare Sleepwalker Bandana");
                addOpt("hatcolour", "Wireframe Earpiece");
                addOpt("hatcolour", "Gas Mask");
                addOpt("hatcolour", "Cyherite Bandana");
                addOpt("hatcolour", "Scrapper's Earring");
                addOpt("hatcolour", "Accelerated Captain's Beret");
                addOpt("hatcolour", "Executable Skullcap");
                addOpt("hatcolour", "Executable Header");
                addOpt("hatcolour", "Executable Mask");
                addOpt("hatcolour", "Omega's Headgear");
                break;
        }
    }
}

//Assigns the correct hat DB ID based on selection.
function hatColourTest(index) {
    HatID = BaseHatID + index;

    //Fix for gap in male Caps.
    if (GenderID == 0 && BaseHatID == 1 && index == 1) {
        HatID += 1;
    }
    //Fix for gap in female Cowboy Hats.
    else if (GenderID == 1 && BaseHatID == 1 && index == 1) {
        HatID += 2;
    }
    //Fix for gap in female Event Items.
    else if (GenderID == 1 && BaseHatID == 14 && index > 5) {
        HatID += 1;
    }
}

//Tests the glasses type and generates the glasses colour drop down appropriately.
function glassesTest(index) {
    //Clears any previous options
    var glassesColorLabel = $('#glassescolourlabel');
    var glassesColor = $('#glassescolour');

    glassesColorLabel.html("Glasses Colour:");
    glassesColor.html("");
    glassesColor.removeAttr('disabled');

    //Male
    if (GenderID == 0) {
        switch (index) {
            //None
            case 0:
                GlassesID = 0;
                GlassesColourID = 0; //Base ID marks the starting point of the colour range. Final ID is set here in case they decide to keep the first option without changing it first.
                glassesColor.attr('disabled', 'true');
                addOpt("glassescolour", "");
                break;

            //Category 1 (Code Launchers)
            case 1:
                glassesColorLabel.html("Glasses Sub-Type:");
                GlassesID = 2;
                GlassesColourID = 0;
                generateMaleCodeLauncherGlasses();
                break;

            //Category 2 (Praveas)
            case 2:
                GlassesID = 3;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMalePraveaGlasses();
                break;

            //Category 3 (Rifters)
            case 3:
                GlassesID = 4;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleRifterGlasses();
                break;

            //Category 4 (Blockers)
            case 4:
                GlassesID = 5;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleBlockerGlasses();
                break;

            //Category 5 (Sectors)
            case 5:
                GlassesID = 6;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleSectorGlasses();
                break;

            //Category 6 (Treas)
            case 6:
                GlassesID = 8;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleTreasGlasses();
                break;

            //Category 7 (Silver Shard)
            case 7:
                GlassesID = 9;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleSilverShardGlasses();
                break;

            //Category 8 (Emerena)
            case 8:
                GlassesID = 10;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleEmerenaGlasses();
                break;

            //Category 9 (Voids)
            case 9:
                GlassesID = 16;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleVoidGlasses();
                break;

            //Category 10 (?)
            case 10:
                GlassesID = 12;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateMaleUnknownGlasses();
                break;

            //Category 11 (Unique)
            case 11:
                GlassesID = 4;
                GlassesColourID = 8;
                glassesColorLabel.html("Glasses Sub-Type:");
                generateMaleUniqueGlasses();
                break;

        }
    }
    //Female
    else {
        switch (index) {
            //None
            case 0:
                GlassesID = 0;
                GlassesColourID = 0; //Base ID marks the starting point of the colour range. Final ID is set here in case they decide to keep the first option without changing it first.
                glassesColor.attr('disabled', 'true');
                addOpt("glassescolour", "");
                break;

            //Category 1 (Code Launchers)
            case 1:
                glassesColorLabel.html("Glasses Sub-Type:");
                GlassesID = 7;
                GlassesColourID = 0;
                generateFemaleCodeLauncherGlasses();
                break;

            //Category 2(Delaco)
            case 2:
                glassesColor.attr('disabled', 'true');
                GlassesID = 1;
                GlassesColourID = 0;
                addOpt("glassescolour", "Black");
                break;

            //Category 3 (Avea Sunglasses)
            case 3:
                GlassesID = 1;
                BaseGlassesColourID = 1, GlassesColourID = 1;
                generateFemaleAveaGlasses();
                break;

            //Category 4 (Brezza Sunglasses)
            case 4:
                glassesColor.attr('disabled', 'true');
                GlassesID = 3;
                GlassesColourID = 0;
                addOpt("glassescolour", "Black");
                break;

            //Category 5 (Reactor Sunglasses)
            case 5:
                GlassesID = 5;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateFemaleReactorGlasses();
                break;

            //Category 6 (N'wing Sunglasses)
            case 6:
                GlassesID = 6;
                BaseGlassesColourID = 0, GlassesColourID = 0;
                generateFemaleNWingGlasses();
                break;

            //Category 7 (Uniques)
            case 7:
                GlassesID = 1;
                GlassesColourID = 9;
                glassesColorLabel.html("Glasses Sub-Type:");
                generateFemaleUniqueGlasses();
                break;

        }
    }
}

//Assigns the correct glasses DB ID based on selection.
function glassesColourTest(index) {
    GlassesColourID = BaseGlassesColourID + index;

    //IDs for scattered male launchers.
    var glasses = $('#glasses');
    if (GenderID == 0 && glasses.val() == "Code Launcher") {
        switch (index) {
            case 0:
                GlassesID = 2;
                GlassesColourID = 0;
                break;
            case 1:
                GlassesID = 7;
                GlassesColourID = 0;
                break;
            case 2:
                GlassesID = 1;
                GlassesColourID = 0;
                break;
        }
    }
    //IDs for scattered male uniques
    if (GenderID == 0 && glasses.val() == "Unique Glasses") {
        if (index >= 1 && index <= 3) {
            GlassesID = 5;
            GlassesColourID = 24 + index - 1;
        }
        else if (index >= 7 && index <= 8) {
            GlassesID = 14;
            GlassesColourID = index - 7;
        }
        else if (index >= 9 && index <= 12) {
            GlassesID = 15;
            GlassesColourID = index - 9;
        }
        else if (index > 12) {
            GlassesID = 18;
            GlassesColourID = index - 13;
        }
        else {
            switch (index) {
                case 0:
                    GlassesID = 4;
                    GlassesColourID = 8;
                    break;
                case 4:
                    GlassesID = 9;
                    GlassesColourID = 8;
                    break;
                case 5:
                    GlassesID = 11;
                    GlassesColourID = 0;
                    break;
                case 6:
                    GlassesID = 13;
                    GlassesColourID = 0;
                    break;
                case 12:
                    GlassesID = 17;
                    GlassesColourID = 0;
                    break;
            }
        }
    }
    //IDs for scattered female launchers.
    if (GenderID == 1 && glasses.val() == "Code Launcher") {
        switch (index) {
            case 0:
                GlassesID = 7;
                GlassesColourID = 0;
                break;
            case 1:
                GlassesID = 2;
                GlassesColourID = 0;
                break;
            case 2:
                GlassesID = 4;
                GlassesColourID = 0;
                break;
        }
    }
    //IDs for scattered female uniques
    if (GenderID == 1 && glasses.val() == "Unique Glasses") {
        if (index >= 1 && index <= 3) {
            GlassesID = 5;
            GlassesColourID = 8 + index - 1;
        }
        else if (index >= 6 && index <= 7) {
            GlassesID = 10;
            GlassesColourID = index - 6;
        }
        else if (index >= 8 && index <= 10) {
            GlassesID = 11;
            GlassesColourID = index - 8;
        }
        else if (index > 12) {
            GlassesID = 13;
            GlassesColourID = index - 13;
        }
        else {
            switch (index) {
                case 0:
                    GlassesID = 1;
                    GlassesColourID = 9;
                    break;
                case 4:
                    GlassesID = 8;
                    GlassesColourID = 0;
                    break;
                case 5:
                    GlassesID = 9;
                    GlassesColourID = 0;
                    break;
                case 11:
                    GlassesID = 12;
                    GlassesColourID = 0;
                    break;
                case 12:
                    GlassesID = 1;
                    GlassesColourID = 8;
                    break;
            }
        }
    }
}

//Tests the shirt type and generates the shirt colour drop down appropriately.
function shirtTest(index) {
    //Clears any previous options
    BaseShirtColourID = 0;
    ShirtColourID = 0;
    var shirtColorLabel = $('#shirtcolourlabel');
    var shirtColor = $('#shirtcolour');

    shirtColorLabel.html("Shirt Colour:");
    shirtColor.html("");
    shirtColor.removeAttr('disabled');

    //Male
    if (GenderID == 0) {
    }
    //Female
    else {
        switch (index) {
            //None
            case 0:
                ShirtID = 0;
                shirtColor.attr('disabled', 'true');
                addOpt("shirtcolour", "");
                break;

            //Category 1 (Sif Piped Dresses)
            case 1:
                ShirtID = 1;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleSifPipedShirtList();
                break;

            //Category 2 (Sif Snakeskin Dresses)
            case 2:
                ShirtID = 1;
                BaseShirtColourID = 4, ShirtColourID = 4;
                generateFemaleSifSnakeShirtList();
                break;

            //Category 3 (Masselli Short Dresses)
            case 3:
                ShirtID = 1;
                BaseShirtColourID = 16, ShirtColourID = 16;
                generateFemaleMasselliShortShirtList();
                break;

            //Category 4 (Avera Shell Leather Dresses)
            case 4:
                ShirtID = 1;
                BaseShirtColourID = 24, ShirtColourID = 24;
                generateFemaleAveraShellShirtList();
                break;

            //Category 5 (Shuriken Tunics)
            case 5:
                ShirtID = 2;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleShurikenShirtList();
                break;

            //Category 6 (Blossom Tunics)
            case 6:
                ShirtID = 2;
                BaseShirtColourID = 4, ShirtColourID = 4;
                generateFemaleBlossomShirtList();
                break;

            //Category 7 (Dragon Tunics)
            case 7:
                ShirtID = 2;
                BaseShirtColourID = 14, ShirtColourID = 14;
                generateFemaleDragonShirtList();
                break;

            //Category 8 (Clasped Tunics)
            case 8:
                ShirtID = 2;
                BaseShirtColourID = 23, ShirtColourID = 23;
                generateFemaleClaspedShirtList();
                break;

            //Category 9 (Metro Catsuit)
            case 9:
                ShirtID = 3;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleMetroCatShirtList();
                break;

            //Category 10 (Razorgirl Half Shirts)
            case 10:
                ShirtID = 4;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleRazorHalfShirtList();
                break;

            //Category 11 (G-Met Short Shirts)
            case 11:
                ShirtID = 4;
                BaseShirtColourID = 8, ShirtColourID = 8;
                generateFemaleGMetHalfShirtList();
                break;

            //Category 12 (Metro Reinforced Halfs)
            case 12:
                ShirtID = 4;
                BaseShirtColourID = 17, ShirtColourID = 17;
                generateFemaleMetroHalfShirtList();
                break;

            //Category 13 (Quest Halfs)
            case 13:
                ShirtID = 4;
                BaseShirtColourID = 32, ShirtColourID = 32;
                generateFemaleQuestHalfShirtList();
                break;

            //Category 14 (Faux Corsets)
            case 14:
                ShirtID = 5;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleFauxCorsetShirtList();
                break;

            //Category 15 (Silk Collars)
            case 15:
                ShirtID = 5;
                BaseShirtColourID = 2, ShirtColourID = 2;
                generateFemaleSilkCollarShirtList();
                break;

            //Category 16 (Maris Vests)
            case 16:
                ShirtID = 5;
                BaseShirtColourID = 7, ShirtColourID = 7;
                generateFemaleMarisVestShirtList();
                break;

            //Category 17 (Lotus Sleeveless)
            case 17:
                ShirtID = 6;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleLotusSLessShirtList();
                break;

            //Category 18 (Avera Sleeveless)
            case 18:
                ShirtID = 6;
                BaseShirtColourID = 4, ShirtColourID = 4;
                generateFemaleAveraSLessShirtList();
                break;

            //Category 19 (Butterfly Leather)
            case 19:
                ShirtID = 6;
                BaseShirtColourID = 16, ShirtColourID = 16;
                generateFemaleButterflyLeatherShirtList();
                break;

            //Category 20 (Arasiki Leather)
            case 20:
                ShirtID = 6;
                BaseShirtColourID = 24, ShirtColourID = 24;
                generateFemaleArasikiLeatherShirtList();
                break;

            //Category 21 (Anniversary)
            case 21:
                ShirtID = 6;
                BaseShirtColourID = 32, ShirtColourID = 32;
                generateFemaleAnniShirtList();
                break;

            //Category 22 (Crush Tankini)
            case 22:
                ShirtID = 7;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleCrushTankShirtList();
                break;

            //Category 23 (Blackbee Tankini)
            case 23:
                ShirtID = 7;
                BaseShirtColourID = 4, ShirtColourID = 4;
                generateFemaleBeeTankShirtList();
                break;

            //Category 24 (Velvet Tankini)
            case 24:
                ShirtID = 7;
                BaseShirtColourID = 16, ShirtColourID = 16;
                generateFemaleVelTankShirtList();
                break;

            //Category 25 (Shimmer Tankini)
            case 25:
                ShirtID = 7;
                BaseShirtColourID = 24, ShirtColourID = 24;
                generateFemaleShiTankShirtList();
                break;

            //Category 26 (Signet Midriff Blouse)
            case 26:
                ShirtID = 8;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleSignetBlouseShirtList();
                break;

            //Category 27 (Spider Midriff Blouse)
            case 27:
                ShirtID = 8;
                BaseShirtColourID = 5, ShirtColourID = 5;
                generateFemaleSpiderBlouseShirtList();
                break;

            //Category 28 (Consular)
            case 28:
                ShirtID = 8;
                BaseShirtColourID = 16, ShirtColourID = 16;
                generateFemaleConsularBlouseShirtList();
                break;

            //Category 29 (Contrast Blouse)
            case 29:
                ShirtID = 8;
                BaseShirtColourID = 24, ShirtColourID = 24;
                generateFemaleContrastBlouseShirtList();
                break;

            //Category 30 (Streta Zippered)
            case 30:
                ShirtID = 9;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleStretaZipShirtList();
                break;

            //Category 31 (Blake Corset)
            case 31:
                ShirtID = 10;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleBlakeCorsetShirtList();
                break;

            //Category 32 (Braela Leather)
            case 32:
                ShirtID = 10;
                BaseShirtColourID = 10, ShirtColourID = 10;
                generateFemaleBraelaLeatherShirtList();
                break;

            //Category 33 (Arasiki Corset)
            case 33:
                ShirtID = 10;
                BaseShirtColourID = 21, ShirtColourID = 21;
                generateFemaleArasikiCorsetShirtList();
                break;

            //Category 34 (Under Armour)
            case 34:
                ShirtID = 10;
                BaseShirtColourID = 32, ShirtColourID = 32;
                generateFemaleUnderArmourShirtList();
                break;

            //Category 35 (Milleri Creme Dress)
            case 35:
                ShirtID = 11;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleMilleriCremeShirtList();
                break;

            //Category 36 (Kitten Dress)
            case 36:
                ShirtID = 11;
                BaseShirtColourID = 10, ShirtColourID = 10;
                generateFemaleKittenDressShirtList();
                break;

            //Category 37 (Fade Dress)
            case 37:
                ShirtID = 11;
                BaseShirtColourID = 21, ShirtColourID = 21;
                generateFemaleFadeDressShirtList();
                break;

            //Category 38 (Blackbee Sleeveless Catsuit)
            case 38:
                ShirtID = 12;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleBlackBeeSleevelessShirtList();
                break;

            //Category 39 (Sif Fighting Dress)
            case 39:
                ShirtID = 13;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleSifFightingShirtList();
                break;

            //Category 40 (Richland Fighting Dress)
            case 40:
                ShirtID = 13;
                BaseShirtColourID = 10, ShirtColourID = 10;
                generateFemaleRichlandFightingShirtList();
                break;

            //Category 41 (Arasiki Vinyl Dress)
            case 41:
                ShirtID = 13;
                BaseShirtColourID = 21, ShirtColourID = 21;
                generateFemaleArasikiVinylShirtList();
                break;

            //Category 42 (Arasiki Sleeveless Vinyl Dress)
            case 42:
                ShirtID = 14;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleArasikiSLVinylShirtList();
                break;

            //Category 43 (Sif Yeoman)
            case 43:
                ShirtID = 15;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleSifYeomanShirtList();
                break;

            //Category 44 (Switchblade Corset)
            case 44:
                ShirtID = 15;
                BaseShirtColourID = 16, ShirtColourID = 16;
                generateFemaleSwitchCorsetShirtList();
                break;

            //Category 45 (Masseli Moon V-Neck)
            case 45:
                ShirtID = 16;
                BaseShirtColourID = 0, ShirtColourID = 0;
                generateFemaleMoonVShirtList();
                break;

            //Category 46 (Maselli Leather Sleeveless)
            case 46:
                ShirtID = 17;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleMaselliSLShirt();
                break;

            //Category 47 (Sif Open Corset)
            case 47:
                ShirtID = 18;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleSifOpenShirt();
                break;

            //Category 48 (Knight Leather V-Neck)
            case 48:
                ShirtID = 19;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleKnightVShirt();
                break;

            //Category 49 (Razorgirl Motorcycle)
            case 49:
                ShirtID = 20;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleRazorCycleShirt();
                break;

            //Category 50 (Trooper Sleeveless)
            case 50:
                ShirtID = 21;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleTrooperSLShirt();
                break;

            //Category 51 (Gis)
            case 51:
                ShirtID = 22;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleGiShirt();
                break;

            //Category 52 (Holiday Corsets)
            case 52:
                generateFemaleHolCorsetShirt();
                break;

            //Category 53 (Ninja Gis)
            case 53:
                ShirtID = 26;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleRobeShirt();
                break;

            //Category 54 (Robes)
            case 54:
                ShirtID = 27;
                ShirtColourID = 0, BaseShirtColourID = 0;
                generateFemaleNinjaGiShirt();

                break;

            //Category 55 (Misc Special)
            case 55:
                generateFemaleMiscShirt();
                break;

        }
    }
    switch (index) {
        //None
        case 0:
            ShirtID = 0; //Model ID for the specific name category.
            shirtColor.attr('disabled', 'true');
            addOpt("shirtcolour", "");
            break;

        //Category 1 (Yoshi Dragon Shirts)
        case 1:
            ShirtID = 1;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleYoshiDragonShirtList();
            break;

        //Shirt Colours - Gonna be putting these categories in functions so I can collapse them in NP++.

        //Category 2 (Barrelhead Shirts)
        case 2:
            ShirtID = 1;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMaleBarrelheadShirtList();
            break;

        //Category 3 (Ivora Silk Shortsleeve Shirts)
        case 3:
            ShirtID = 1;
            BaseShirtColourID = 16, ShirtColourID = 16;
            generateMaleIvoraSilkShirtList();
            break;


        //Category 4 (Streta Silk Shortsleeve Shirts)
        case 4:
            ShirtID = 1;
            BaseShirtColourID = 24, ShirtColourID = 24;
            generateMaleStretaSilkShirtList();
            break;

        //Category 5 (T-Shirts)
        case 5:
            ShirtID = 2;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleTShirtList();
            break;

        //Category 6 (Yoshi Ringbuckle)
        case 6:
            ShirtID = 2;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMaleRingbuckleShirtList();
            break;

        //Category 7 (Baal Plastene)
        case 7:
            ShirtID = 2;
            BaseShirtColourID = 16, ShirtColourID = 16;
            generateMalePlasteneShirtList();
            break;

        //Category 8 (Anniversary Shirts)
        case 8:
            ShirtID = 2;
            BaseShirtColourID = 33, ShirtColourID = 33;
            generateAnniversaryShirtList();
            break;

        //Category 9 (Unhappy G-Met T-shirt)
        case 9:
            ShirtID = 3;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleUnhappyShirtList();
            break;

        //Category 10 (Happy G-Met T-Shirt)
        case 10:
            ShirtID = 3;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMaleHappyShirtList();
            break;

        //Category 11 (Special T-Shirts)
        case 11:
            ShirtID = 2;
            ShirtColourID = 32;
            generateMaleSpecialShirtList();
            break;

        //Category 12 (Dress Shirt)
        case 12:
            ShirtID = 4;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleDressShirtList();
            break;

        //Category 13 (Avero Pizzaz Shirt)
        case 13:
            ShirtID = 4;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMalePizzazShirtList();
            break;

        //Category 14 (Misene Fancer Shirt)
        case 14:
            ShirtID = 4;
            BaseShirtColourID = 16, ShirtColourID = 16;
            generateMaleMiseneFancerShirtList();
            break;

        //Category 15 (Machello Dragon Shirt)
        case 15:
            ShirtID = 4;
            BaseShirtColourID = 24, ShirtColourID = 24;
            generateMaleFancerShirtList();
            break;

        //Category 16 (Avero Vests)
        case 16:
            ShirtID = 5;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleAveroVestShirtList();
            break;

        //Category 17 (Misene Pocketed Vests)
        case 17:
            ShirtID = 5;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMalePocketedVestShirtList();
            break;

        //Category 18 (Misene Patterned Vests)
        case 18:
            ShirtID = 5;
            BaseShirtColourID = 16, ShirtColourID = 16;
            generateMaleMisenePatternedVestShirtList();
            break;

        //Category 19 (Machello Patterned Vests)
        case 19:
            ShirtID = 5;
            BaseShirtColourID = 24, ShirtColourID = 24;
            generateMaleMachelloPatternedVestShirtList();
            break;

        //Category 20 (Special Vests)
        case 20:
            ShirtID = 5;
            BaseShirtColourID = 32, ShirtColourID = 32;
            shirtColorLabel.html("Shirt Sub-Type:");
            generateMaleSpecialVestShirtList();
            break;

        //Category 21 (G-Met Long)
        case 21:
            ShirtID = 6;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleGMetLongShirtList();
            break;

        //Category 22 (Long Sleeved T-Shirts)
        case 22:
            ShirtID = 7;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleLongSleevedShirtList();
            break;

        //Category 23 (Yoshi Streetshirts)
        case 23:
            ShirtID = 7;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMaleYoshiStreetShirtList();
            break;

        //Category 24 (Under Armour)
        case 24:
            ShirtID = 7;
            BaseShirtColourID = 32, ShirtColourID = 32;
            generateMaleUnderArmourShirtList();
            break;

        //Category 25 (Sleeveless)
        case 25:
            ShirtID = 8;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleSleevelessShirtList();
            break;

        //Category 26 (Plastene Shirts)
        case 26:
            ShirtID = 8;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMalePlasteneSleevelessShirtList();
            break;

        //Category 27 (Polystene Shirts)
        case 27:
            ShirtID = 8;
            BaseShirtColourID = 16, ShirtColourID = 16;
            generateMalePolysteneSleevelessShirtList();
            break;

        //Category 28 (Baal Bucklevest Shirts)
        case 28:
            ShirtID = 8;
            BaseShirtColourID = 25, ShirtColourID = 25;
            generateMaleBucklevestShirtList();
            break;

        //Category 29 (Special Sleeveless)
        case 29:
            ShirtID = 8;
            BaseShirtColourID = 32, ShirtColourID = 32;
            generateMaleSpecialSleevelessShirtList();
            break;

        //Category 30 (Sad G-Met Sleeveless)
        case 30:
            ShirtID = 9;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleSadGMetSleevelessShirtList();
            break;

        //Category 31 (Happy G-Met Sleeveless)
        case 31:
            ShirtID = 9;
            BaseShirtColourID = 8, ShirtColourID = 8;
            generateMaleHappyGMetSleevelessShirtList();
            break;

        //Category 32 (Suits)
        case 32:
            ShirtID = 10;
            BaseShirtColourID = 0, ShirtColourID = 0;
            generateMaleSuitShirtList();
            break;

        //Category 33 (Special Suits)
        case 33:
            ShirtID = 10;
            BaseShirtColourID = 32, ShirtColourID = 32;
            generateMaleSpecialSuitShirtList();
            break;

    }
}

//Assigns the correct shirt DB ID based on selection.
function shirtColourTest(index) {
    ShirtColourID = BaseShirtColourID + index;

    //Male Fixes
    var shirt = $('#shirt');
    if (GenderID == 0) {
        //Fix for gap in Yoshi Ringbuckle Streetshirts.
        if (ShirtID == 2 && BaseShirtColourID == 8 && index > 7) {
            ShirtColourID += 14;
        }
        //Workaround for scattered special Ts
        else if (shirt.val() == "Special Shirts") {
            switch (index) {
                case 0:
                    ShirtID = 2;
                    ShirtColourID = 32;
                    break;
                case 1:
                    ShirtID = 2;
                    ShirtColourID = 55;
                    break;
                case 2:
                    ShirtID = 1;
                    ShirtColourID = 32;
                    break;
                case 3:
                    ShirtID = 11;
                    ShirtColourID = 0;
                    break;
            }
        }
        //Fix for gap in Long Sleeved Shirts.
        else if (ShirtID == 7 && BaseShirtColourID == 0 && index > 7) {
            ShirtColourID += 8;
        }
        //Fix for gap in Yoshi Streetshirts.
        else if (ShirtID == 7 && BaseShirtColourID == 8 && index > 7) {
            ShirtColourID += 8;
        }
        //Fix for gap in Polystene Sleeveless Shirts.
        else if (ShirtID == 8 && BaseShirtColourID == 16 && index > 8) {
            ShirtColourID += 4;
        }
    }
    //Female Fixes
    else if (GenderID == 1) {
        //Fix for gap in Sif Piped Dresses.
        if (ShirtID == 1 && BaseShirtColourID == 0 && index > 3) {
            ShirtColourID += 4;
        }
        //Fix for gap in Sif Snakeskin Dresses.
        else if (ShirtID == 1 && BaseShirtColourID == 4 && index > 3) {
            ShirtColourID += 4;
        }
        //Fix for gap in Shuriken Tunics.
        else if (ShirtID == 2 && BaseShirtColourID == 0 && index > 3) {
            ShirtColourID += 3;
        }
        //Fix for gap in Blossom Tunics.
        else if (ShirtID == 2 && BaseShirtColourID == 4 && index > 2) {
            ShirtColourID += 4;
        }
        //Fix for gap in G-Met Short Shirts.
        else if (ShirtID == 4 && BaseShirtColourID == 0 && index > 7) {
            ShirtColourID += 5;
        }
        //Fix for gap in Silk Shirts.
        else if (ShirtID == 5 && BaseShirtColourID == 2 && index > 4) {
            ShirtColourID += 11;
        }
        //Fix for gap in Faux Corset Shirts.
        else if (ShirtID == 5 && BaseShirtColourID == 0 && index > 1) {
            ShirtColourID += 21;
        }
        //Fix for gap in Lotus Sleeveless Shirts.
        else if (ShirtID == 6 && BaseShirtColourID == 0 && index > 3) {
            ShirtColourID += 4;
        }
        //Fix for gap in Avera Sleeveless Shirts.
        else if (ShirtID == 6 && BaseShirtColourID == 4 && index > 3) {
            ShirtColourID += 4;
        }
        //Fix for gap in Crush Tankini Shirts.
        else if (ShirtID == 7 && BaseShirtColourID == 0 && index > 3) {
            ShirtColourID += 4;
        }
        //Fix for gap in Blackbee Tankini Shirts.
        else if (ShirtID == 7 && BaseShirtColourID == 4 && index > 3) {
            ShirtColourID += 4;
        }
        //Fix for gap in Signet Blouse Shirts.
        else if (ShirtID == 8 && BaseShirtColourID == 0 && index > 4) {
            ShirtColourID += 6;
        }
        //Fix for gap in Spider Blouse Shirts.
        else if (ShirtID == 8 && BaseShirtColourID == 5 && index > 5) {
            ShirtColourID += 3;
        }
        //Fix for gap in Richland Fighter Shirts.
        else if (ShirtID == 13 && BaseShirtColourID == 10 && index > 10) {
            ShirtColourID += 9;
        }
        //Fix for scattered Holiday Corsets.
        else if (shirt.val() == "Holiday Corset") {
            switch (index) {
                case 0:
                    ShirtID = 23;
                    ShirtColourID = 0;
                    break;
                case 1:
                    ShirtID = 24;
                    ShirtColourID = 0;
                    break;
                case 2:
                    ShirtID = 25;
                    ShirtColourID = 0;
                    break;
            }
        }
        //Fix for scattered special items.
        else if (shirt.val() == "Misc Special") {
            $('#shirtcolourlabel').html("Shirt Sub-Type:");
            switch (index) {
                case 0:
                    ShirtID = 10;
                    ShirtColourID = 32;
                    break;
                case 1:
                    ShirtID = 16;
                    ShirtColourID = 32;
                    break;
                case 2:
                    ShirtID = 28;
                    ShirtColourID = 0;
                    break;
            }
        }
    }
}

//Tests the glove type and generates the glove colour drop down appropriately.
function gloveTest(index) {
    GloveID = index;
}

//Tests the trouser (pant) type and generates the trouser (pant) colour drop down appropriately.
function trouserTest(index) {
    //Clears any previous options
    var pantColorLabel = $('#trousercolourlabel');
    var pants = $('#trousercolour');

    pantColorLabel.html("Pant Colour:");
    pants.html("");
    pants.removeAttr('disabled');

    //Male
    if (GenderID == 0) {
        switch (index) {
            //None
            case 0:
                TrouserID = 0;
                TrouserColourID = 0;
                pants.attr('disabled', 'true');
                addOpt("trousercolour", "");
                break;

            //Category 1 (Plain Slacks)
            case 1:
                TrouserID = 1;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMalePlainSlackTrousers();
                break;

            //Category 2 (Barret Fauxskin)
            case 2:
                TrouserID = 2;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleFauxskinTrousers();
                break;

            //Category 3 (Arasiki Leather Pants)
            case 3:
                TrouserID = 3;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleArasikiLeatherTrousers();
                break;

            //Category 4 (Misene Pinstripes)
            case 4:
                TrouserID = 4;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMalePinstripeTrousers();
                break;

            //Category 5 (Ivora Slacks)
            case 5:
                TrouserID = 5;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleIvoraSlackTrousers();
                break;

            //Category 6 (Derin Sheen)
            case 6:
                TrouserID = 6;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleDerinSheenTrousers();
                break;

            //Category 7 (Hosh Chap Pants)
            case 7:
                TrouserID = 7;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleHoshChapPantTrousers();
                break;

            //Category 8 (Barrelhead Cargo Shorts)
            case 8:
                TrouserID = 8;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleCargoShortTrousers();
                break;

            //Category 9 (Barrelhead Panel Shorts)
            case 9:
                TrouserID = 9;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMalePanelShortTrousers();
                break;

            //Category 10 (Barrelhead Cargo Pants)
            case 10:
                TrouserID = 10;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleCargoPantTrousers();
                break;

            //Category 11 (Baal Strapped)
            case 11:
                TrouserID = 11;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleStrappedTrousers();
                break;

            //Category 12 (Baal Reinforced)
            case 12:
                TrouserID = 12;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleReinforcedTrousers();
                break;

            //Category 13 (Hosh Riding Pants)
            case 13:
                TrouserID = 13;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleHoshRidingTrousers();
                break;

            //Category 14 (Derin Canvas)
            case 14:
                TrouserID = 14;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateMaleCanvasTrousers();
                break;

            //Category 15 (Hosh Chaps)
            case 15:
                TrouserID = 15;
                TrouserColourID = 0;
                pants.attr('disabled', 'true');
                addOpt("trousercolour", "Black");
                break;

            //Category 16 (Misc)
            case 16:
                TrouserID = 3;
                TrouserColourID = 19;
                pantColorLabel.html("Pant Sub-Type:");
                generateMaleMiscTrousers();
                break;

        }
    }
    //Female
    else {
        switch (index) {
            //None
            case 0:
                TrouserID = 0;
                TrouserColourID = 0;
                pants.attr('disabled', 'true');
                addOpt("trousercolour", "");
                break;

            //Category 1 (Baal Vinyl)
            case 1:
                TrouserID = 1;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateFemaleVinylTrousers();
                break;

            //Category 2 (Misene Pinstripes)
            case 2:
                TrouserID = 1;
                BaseTrouserColourID = 15, TrouserColourID = 15;
                generateFemalePinstripeTrousers();
                break;

            //Category 3 (Arasiki Bucklepants)
            case 3:
                TrouserID = 1;
                BaseTrouserColourID = 23, TrouserColourID = 23;
                generateFemaleBuckleTrousers();
                break;

            //Category 4 (Croc Pants)
            case 4:
                TrouserID = 2;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateFemaleCrocTrousers();
                break;

            //Category 5 (Kell Shiny)
            case 5:
                TrouserID = 2;
                BaseTrouserColourID = 4, TrouserColourID = 4;
                generateFemaleShinyTrousers();
                break;

            //Category 6 (Sweepers)
            case 6:
                TrouserID = 2;
                BaseTrouserColourID = 16, TrouserColourID = 16;
                generateFemaleSweeperTrousers();
                break;

            //Category 7 (Zipperpants)
            case 7:
                TrouserID = 2;
                BaseTrouserColourID = 24, TrouserColourID = 24;
                generateFemaleZipperTrousers();
                break;

            //Category 8 (Vinyl Cargo)
            case 8:
                TrouserID = 3;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateFemaleVinylCargoTrousers();
                break;

            //Category 9 (Paramil Cargos)
            case 9:
                TrouserID = 3;
                BaseTrouserColourID = 16, TrouserColourID = 16;
                generateFemaleParaCargoTrousers();
                break;

            //Category 10 (Satin Cargos)
            case 10:
                TrouserID = 4;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateFemaleSatinCargoTrousers();
                break;

            //Category 11 (Baal Satin)
            case 11:
                TrouserID = 4;
                BaseTrouserColourID = 16, TrouserColourID = 16;
                generateFemaleBaalSatinCargoTrousers();
                break;

            //Category 12 (Dread Skirt)
            case 12:
                TrouserID = 5;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateFemaleDreadSkirtTrousers();
                break;

            //Category 13 (Pearl Skirt)
            case 13:
                TrouserID = 5;
                BaseTrouserColourID = 16, TrouserColourID = 16;
                generateFemalePearlSkirtTrousers();
                break;

            //Category 14 (Tress Skirt)
            case 14:
                TrouserID = 6;
                BaseTrouserColourID = 0, TrouserColourID = 0;
                generateFemaleTressSkirtTrousers();
                break;

            //Category 15 (Grapp Skirt)
            case 15:
                TrouserID = 6;
                BaseTrouserColourID = 16, TrouserColourID = 16;
                generateFemaleGrappSkirtTrousers();
                break;

        }
    }
}

//Assigns the correct trouser (pant) DB ID based on selection.
function trouserColourTest(index) {
    TrouserColourID = BaseTrouserColourID + index;

    //Fix for scattered male specials.
    if (GenderID == 0 && $('#trouser').selectedIndex == 16) {
        if (index >= 0 && index <= 4) {
            TrouserID = 3;
            TrouserColourID = 19 + index;
        }
        else if (index >= 5 && index <= 6) {
            TrouserID = 15;
            TrouserColourID = 1 + index - 5;
        }
        else {
            switch (index) {
                case 7:
                    TrouserID = 16;
                    TrouserColourID = 0;
                    break;
            }
        }
    }
    //Fix for gap in croc pants
    else if (GenderID == 1 && TrouserID == 2 && BaseTrouserColourID == 0 && index > 3) {
        TrouserColourID += 4;
    }
    //Fix for gap in kell shiny pants
    else if (GenderID == 1 && TrouserID == 2 && BaseTrouserColourID == 4 && index > 3) {
        TrouserColourID += 4;
    }
    /*IDs for scattered female uniques
     else if(GenderID == 1 && $('#trouser').selectedIndex == 0)
     {
     if (index >= 0 && index <= 2)
     {
     ShoeID=1;
     ShoeColourID=8+index;
     }
     else if (index >= 4 && index <= 7)
     {
     ShoeID=4;
     ShoeColourID = 10+index-4;
     }
     else if (index >= 9 && index <= 12)
     {
     ShoeID=11;
     ShoeColourID = index-9;
     }
     else
     {
     switch(index)
     {
     case 3:
     ShoeID = 3;
     ShoeColourID = 8;
     break;
     case 8:
     ShoeID = 8;
     ShoeColourID = 8;
     break;
     case 13:
     ShoeID = 5;
     ShoeColourID = 2;
     break;
     }
     }
     }*/
}

//Tests the shoe type and generates the shoes colour drop down appropriately.
function shoeTest(index) {
    //Clears any previous options
    var shoeColorLabel = $('#shoecolourlabel');
    var shoeColor = $('#shoecolour');

    shoeColorLabel.html("Shoe Colour:");
    shoeColor.html("");
    shoeColor.removeAttr('disabled');

    //Male
    if (GenderID == 0) {
        switch (index) {
            //None
            case 0:
                ShoeID = 0;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "");
                break;

            //Category 1 (Lucien Dress)
            case 1:
                ShoeID = 1;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Black");
                break;

            //Category 2 (Skaver Short)
            case 2:
                ShoeID = 2;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Black");
                break;

            //Category 3 (Skaver Long)
            case 3:
                ShoeID = 3;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateMaleSkaverShoes();
                break;

            //Category 4 (Hosh)
            case 4:
                ShoeID = 4;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Black");
                break;

            //Category 5 (Avero)
            case 5:
                ShoeID = 5;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Leopard");
                break;

            //Category 6 (Air Hecklers)
            case 6:
                ShoeID = 6;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Sky");
                break;

            //Category 7 (Larn)
            case 7:
                ShoeID = 7;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Brown");
                break;

            //Category 8 (NPC)
            case 8:
                ShoeID = 8;
                ShoeColourID = 0;
                shoeColorLabel.html("Shoe Sub-Type:");
                generateMaleNPCShoes();
                break;

            //Category 9 (Leather Dada)
            case 9:
                ShoeID = 26;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateMaleLeatherDadaShoes();
                break;

            //Category 10 (Two Tone Dada)
            case 10:
                ShoeID = 27;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateMaleTTDadaShoes();
                break;

            //Category 11 (Striped Dada)
            case 11:
                ShoeID = 29;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateMaleSDadaShoes();
                break;

            //Category 12 (Sawoosh)
            case 12:
                ShoeID = 30;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Black");
                break;

            //Category 13 (Hassel)
            case 13:
                ShoeID = 31;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Black");
                break;

            //Category 14 (Uniques)
            case 14:
                ShoeID = 1;
                ShoeColourID = 1;
                shoeColorLabel.html("Shoe Sub-Type:");
                generateMaleUniqueShoes();
                break;

        }
    }
    //Female
    else {
        switch (index) {
            //None
            case 0:
                ShoeID = 0;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "");
                break;

            //Category 1 (Kovach)
            case 1:
                ShoeID = 1;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleKovachShoes();
                break;

            //Category 2 (Arasiki)
            case 2:
                ShoeID = 1;
                BaseShoeColourID = 4, ShoeColourID = 4;
                generateFemaleArasikiShoes();
                break;

            //Category 3 (Yozomaki)
            case 3:
                ShoeID = 2;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleYozoShoes();
                break;

            //Category 4 (Skaver Low)
            case 4:
                ShoeID = 3;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleSkaverLowShoes();
                break;

            //Category 5 (Arasiki Short)
            case 5:
                ShoeID = 3;
                BaseShoeColourID = 9, ShoeColourID = 9;
                generateFemaleArasikiShortShoes();
                break;

            //Category 6 (Avero Snake)
            case 6:
                ShoeID = 4;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleAveroSnakeShoes();
                break;

            //Category 7 (Avero Open)
            case 7:
                ShoeID = 5;
                ShoeColourID = 0;
                shoeColor.attr('disabled', 'true');
                addOpt("shoecolour", "Black");
                break;

            //Category 8 (Lambda Sneakers)
            case 8:
                ShoeID = 6;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleLambdaShoes();
                break;

            //Category 9 (Avero Heeled)
            case 9:
                ShoeID = 7;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleAveroHeeledShoes();
                break;

            //Category 10 (Hosh Leather)
            case 10:
                ShoeID = 8;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleHoshShoes();
                break;

            //Category 11 (Dada Short)
            case 11:
                ShoeID = 9;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleDadaShortShoes();
                break;

            //Category 12 (NPC Only Strapped Boots)
            case 12:
                ShoeID = 10;
                BaseShoeColourID = 0, ShoeColourID = 0;
                generateFemaleNPCShoes();
                break;

            //Category 13 (Misc Special)
            case 13:
                ShoeID = 1;
                ShoeColourID = 8;
                shoeColorLabel.html("Shoe Sub-Type:");
                generateFemaleSpecialShoes();
                break;
        }
    }
}

//Assigns the correct shoe DB ID based on selection.
function shoeColourTest(index) {
    ShoeColourID = BaseShoeColourID + index;

    //Fix for scattered male NPC Onlys
    var shoe = $('#shoe');
    if (GenderID == 0 && shoe.selectedIndex == 8) {
        ShoeColourID = 0;
        if (index <= 1) {
            ShoeID = index + 8;
        }
        else if (index <= 8) {
            ShoeID = index + 10;
        }
        else if (index == 14) {
            ShoeID = 28;
        }
        else {
            ShoeID = index + 12;
        }
    }
    //IDs for scattered male uniques
    else if (GenderID == 0 && shoe.selectedIndex == 14) {
        if (index >= 0 && index <= 1) {
            ShoeID = 1;
            ShoeColourID = 1 + index;
        }
        else if (index >= 3 && index <= 4) {
            ShoeID = 10 + index - 3;
            ShoeColourID = 0;
        }
        else if (index >= 5 && index <= 7) {
            ShoeID = 19;
            ShoeColourID = index - 5;
        }
        else if (index >= 9 && index <= 12) {
            ShoeID = 33;
            ShoeColourID = index - 9;
        }
        else {
            switch (index) {
                case 2:
                    ShoeID = 4;
                    ShoeColourID = 1;
                    break;
                case 8:
                    ShoeID = 20;
                    ShoeColourID = 0;
                    break;
                case 13:
                    ShoeID = 34;
                    ShoeColourID = 0;
                    break;
            }
        }
    }
    //IDs for scattered female uniques
    else if (GenderID == 1 && shoe.selectedIndex == 13) {
        if (index >= 0 && index <= 2) {
            ShoeID = 1;
            ShoeColourID = 8 + index;
        }
        else if (index >= 4 && index <= 7) {
            ShoeID = 4;
            ShoeColourID = 10 + index - 4;
        }
        else if (index >= 9 && index <= 12) {
            ShoeID = 11;
            ShoeColourID = index - 9;
        }
        else {
            switch (index) {
                case 3:
                    ShoeID = 3;
                    ShoeColourID = 8;
                    break;
                case 8:
                    ShoeID = 8;
                    ShoeColourID = 8;
                    break;
                case 13:
                    ShoeID = 5;
                    ShoeColourID = 2;
                    break;
            }
        }
    }
}

