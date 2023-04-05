"use strict";

function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text2");
    var text2 = document.getElementsByClassName("text1");
    var text3 = document.getElementsByClassName("text4");
    var text4 = document.getElementsByClassName("text3");
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked == true) {
          text3[i].style.display = "block";
          text4[i].style.display = "none";
        } else if (checkBox.checked == false) {
          text3[i].style.display = "none";
          text4[i].style.display = "block";
        }
      }
  }
  check();
  