let player = 1;

////////////////////////////////////////////////////////////////////////


// basic game logic
$(".board").click(function() {

	let selectedSquare = $(this);

	if( selectedSquare.hasClass("X") || selectedSquare.hasClass("O") ) {
		alert("Already selected, select another square");
	} else if(player === 1) {
    selectedSquare.addClass("X").text("X").css("background", "#37c162");
    if(checkForWin("X") ) {
      $("h3").append("Player 1 wins!");
      $(".board").off();
    } else {
      player = 2;
    }
  } else {
    selectedSquare.addClass("O").text("O").css("background", "#387ce0");
    if(checkForWin("O") ) {
      $("h3").append("Player 2 wins!");
      $(".board").off();
    }
    player = 1;
  }
});

////////////////////////////////////////////////////////////////////////

let checkForWin = function(input) {
  // check for horizontal win
  if( $(".square1").hasClass(input) && $(".square2").hasClass(input) && $(".square3").hasClass(input) ) {
    return true;
  } else if( $(".square4").hasClass(input) && $(".square5").hasClass(input) && $(".square6").hasClass(input) ) {
    return true;
  } else if ( $(".square7").hasClass(input) && $(".square8").hasClass(input) && $(".square9").hasClass(input) ) {
    return true;
  // check for vertical win
  } else if( $(".square1").hasClass(input) && $(".square4").hasClass(input) && $(".square7").hasClass(input) ) {
  return true;
  } else if( $(".square2").hasClass(input) && $(".square5").hasClass(input) && $(".square8").hasClass(input) ) {
  return true;
  } else if( $(".square3").hasClass(input) && $(".square6").hasClass(input) && $(".square9").hasClass(input) ) {
  return true;
  // check for diagonal win
  } else if( $(".square1").hasClass(input) && $(".square5").hasClass(input) && $(".square9").hasClass(input) ) {
  return true;
  } else if( $(".square3").hasClass(input) && $(".square5").hasClass(input) && $(".square7").hasClass(input) ) {
  return true;
  } else {
  return false;
  }
};

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////

// Game Reset

$("button").click(function(){
  location.reload(true);
});





















// previous things I tried that didn't really work the way I wanted them to work

// let player1 = true;
// let Player2 = true;
//
// /////////////////////////////////////////////////////////
//
// let square1 = $("#square1");
// let square2 = $("#square2");
// let square3 = $("#square3");
// let square4 = $("#square4");
// let square5 = $("#square5");
// let square6 = $("#square6");
// let square7 = $("#square7");
// let square8 = $("#square8");
// let square9 = $("#square9");

/////////////////////////////////////////////////////////

// to switch between users

// let player1reset = function() {
//   player1 = true;
// };
//
// let player2reset = function() {
//   player2 = true;
// };
//
// /////////////////////////////////////////////////////////
//
// let checkForWin = function() {
//   if( square1 === square2 && square1 === square3 ){
//   alert("you win");
//   }
// };


/////////////////////////////////////////////////////////

// let checkRow = function() {
//   if()
// };
// checkRow();

/////////////////////////////////////////////////////////

// let playGame = function() {
//   $(".board").click(function() {
//     $(this).off();
//     if(player1) {
//       $(this).html("X");
//       player1 = false;
//       checkForWin();
//       player2reset();
//     } else {
//       $(this).html("O");
//       player2 = false;
//       checkForWin();
//       player1reset();
//     }
//   })
// };
// playGame();

/////////////////////////////////////////////////////////
// let player1 = "X";
// let player2 = "O";
// let turn = 0;
//

//
// let playGame = function() {
//   $(".board").click(function() {
//     if(square1.hasClass("O") && square2.hasClass("O") && square3.hasClass("O") ||
//        square4.hasClass("O") && square5.hasClass("O") && square6.hasClass("O") ||
//        square7.hasClass("O") && square8.hasClass("O") && square9.hasClass("O") ||
//        square1.hasClass("O") && square4.hasClass("O") && square7.hasClass("O") ||
//        square2.hasClass("O") && square5.hasClass("O") && square8.hasClass("O") ||
//        square3.hasClass("O") && square6.hasClass("O") && square9.hasClass("O") ||
//        square1.hasClass("O") && square5.hasClass("O") && square9.hasClass("O") ||
//        square3.hasClass("O") && square5.hasClass("O") && square7.hasClass("O") ||
//      ){
//
//      }
//   });
// };
