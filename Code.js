//wk1-2 countdown timer should run countdown from 10 to blastoff
function startcountdown() {
    var countdown = 10;
    //the countdowntimer should display 10
    document.getElementById("countdowntimer").innerHTML = countdown;
    countdown = countdown - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //the countdowntimer should display 9
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //the countdowntimer should display 8
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //the countdowntimer should display 7
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //the countdowntimer should display 6
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //the countdowntimer should display 5
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //the countdowntimer should display 4
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //the countdowntimer should display 3
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //the countdowntimer should display 2
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //the countdowntimer should display 1
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //the countdowntimer should display Blastoff!!!
        document.getElementById("countdowntimer").innerHTML = "Blastoff!!!";
    }, 10000);
}

//function to play Craps Game and give random numbers to Die
function playgameofCraps() {
    console.log("playgameofCraps has started");
    //Setting up controls for what Die1 will do
    var Die1;
    Die1 = Math.ceil(Math.random() * 6);
    //gives Die1 the max roll of up to 6 by rounding up to whole number
    document.getElementById("Die1Results").innerHTML = "The value of Die1: " + Die1;
    //Setting up controls for what Die2 will do
    var Die2;
    Die2 = Math.ceil(Math.random() * 6);
    //gives Die2 the max roll of up to 6 by rounding up to whole number
    document.getElementById("Die2Results").innerHTML = "The value of Die2: " + Die2;
    //Setting up Results for what happens when Die1 and Die2 are rolled
    var dieSum = Die1 + Die2;
    document.getElementById("sumResults").innerHTML = "The Sum of Die1 plus Die2 is: " + dieSum;
    //Setting up Rules for Craps Game
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("crapsGameResults").innerHTML = "CRAPS! YOU LOSE!!!";
        // gives the results of what happens if Die1 plus Die2 roll (dieSum == 7 || dieSum == 11)
    } else if (Die1 == Die2 && Die2 % 2 ==0) {
       document.getElementById("crapsGameResults").innerHTML = "Hooray!! Galactic Doubles! Interstellar Win!!!";
       // gives the results of what happens if Die1 plus Die2 roll (Die1 == Die2 && Die2 % 2 ==0) because we gave the code for when Die1 plus Die2 roll even doubles
    } else {
        document.getElementById("crapsGameResults").innerHTML = "Please Try Again!!!";
        // gives the results of what happens if Die1 plus Die2 roll something other than (dieSum == 7 || dieSum == 11) or (Die1 == Die2 && Die2 % 2 ==0) to keep trying
    }
}