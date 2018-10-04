let aboutPage = document.querySelector(".aboutPage");

document.getElementById("myLeftSidenav").onclick = function() {
  location.href = "about.html";
  aboutPage.classList.add("moveToRight");
};

//Menu letters //

js: $(document).ready(function() {
  console.log("ready!");

  $(".wrapper-letters").hover(function() {
    setTimeout(function() {
      $("#m").addClass("animate-letter");
    }, 100);
    setTimeout(function() {
      $("#e").addClass("animate-letter");
    }, 300);
    setTimeout(function() {
      $("#n").addClass("animate-letter");
    }, 500);
    setTimeout(function() {
      $("#u").addClass("animate-letter");
    }, 700);

    setTimeout(function() {
      setTimeout(function() {
        $("#m").removeClass("animate-letter");
      }, 0);
      setTimeout(function() {
        $("#e").removeClass("animate-letter");
      }, 200);
      setTimeout(function() {
        $("#n").removeClass("animate-letter");
      }, 400);
      setTimeout(function() {
        $("#u").removeClass("animate-letter");
      }, 600);
    }, 900);
  });
});

js: $(document).ready(function() {
  console.log("ready!");

  $(".wrapper-letters_name").hover(function() {
    setTimeout(function() {
      $("#l").addClass("animate-letter_name");
    }, 100);
    setTimeout(function() {
      $("#o").addClass("animate-letter_name");
    }, 300);
    setTimeout(function() {
      $("#r").addClass("animate-letter_name");
    }, 500);
    setTimeout(function() {
      $("#e3").addClass("animate-letter_name");
    }, 700);
    setTimeout(function() {
      $("#l1").addClass("animate-letter_name");
    }, 900);
    setTimeout(function() {
      $("#e1").addClass("animate-letter_name");
    }, 1100);
    setTimeout(function() {
      $("#i").addClass("animate-letter_name");
    }, 1300);
    setTimeout(function() {
      $("#h").addClass("animate-letter_name");
    }, 1500);
    setTimeout(function() {
      $("#e2").addClass("animate-letter_name");
    }, 1700);
    setTimeout(function() {
      $("#c").addClass("animate-letter_name");
    }, 1900);
    setTimeout(function() {
      $("#k").addClass("animate-letter_name");
    }, 2100);
    setTimeout(function() {
      $("#m1").addClass("animate-letter_name");
    }, 2300);
    setTimeout(function() {
      $("#a").addClass("animate-letter_name");
    }, 2500);
    setTimeout(function() {
      $("#n1").addClass("animate-letter_name");
    }, 2700);
    setTimeout(function() {
      $("#n2").addClass("animate-letter_name");
    }, 2900);

    setTimeout(function() {
      setTimeout(function() {
        $("#l").removeClass("animate-letter_name");
      }, 0);
      setTimeout(function() {
        $("#o").removeClass("animate-letter_name");
      }, 200);
      setTimeout(function() {
        $("#r").removeClass("animate-letter_name");
      }, 400);
      setTimeout(function() {
        $("#e3").removeClass("animate-letter_name");
      }, 600);
      setTimeout(function() {
        $("#l1").removeClass("animate-letter_name");
      }, 800);
      setTimeout(function() {
        $("#e1").removeClass("animate-letter_name");
      }, 1000);
      setTimeout(function() {
        $("#i").removeClass("animate-letter_name");
      }, 1200);
      setTimeout(function() {
        $("#h").removeClass("animate-letter_name");
      }, 1400);
      setTimeout(function() {
        $("#e2").removeClass("animate-letter_name");
      }, 1600);
      setTimeout(function() {
        $("#c").removeClass("animate-letter_name");
      }, 1800);
      setTimeout(function() {
        $("#k").removeClass("animate-letter_name");
      }, 2000);
      setTimeout(function() {
        $("#m1").removeClass("animate-letter_name");
      }, 2200);
      setTimeout(function() {
        $("#a").removeClass("animate-letter_name");
      }, 2400);
      setTimeout(function() {
        $("#n1").removeClass("animate-letter_name");
      }, 2700);
      setTimeout(function() {
        $("#n2").removeClass("animate-letter_name");
      }, 2900);
    }, 3100);
  });
});

//main nav//
function openNav() {
  document.getElementById("mySidenav").style.height = "100vh";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}

function open() {
  sidenav.classList.add("sidenav");
}
//left nav//

function openLNav() {
  document.getElementById("myLeftSidenav").style.width = "15vw";
  document.querySelector(".Lnav").style.width = "-30vw";
  console.log("here");
}

function closeLNav() {
  document.getElementById("myLeftSidenav").style.width = "0";
  document.querySelector(".Lnav").style.width = "15vw";
}

//right nav//

function openRNav() {
  document.getElementById("myRightSidenav").style.width = "15vw";
  document.querySelector(".Rnav").style.width = "0";
  console.log("I'm left here");
}

function closeRNav() {
  document.getElementById("myRightSidenav").style.width = "0";
  document.querySelector(".Rnav").style.width = "15vw";
  console.log("close me");
}

//Menu letters //

js: $(document).ready(function() {
  console.log("ready!");

  $(".wrapper-letters").hover(function() {
    setTimeout(function() {
      $("#m").addClass("animate-letter");
    }, 100);
    setTimeout(function() {
      $("#e").addClass("animate-letter");
    }, 300);
    setTimeout(function() {
      $("#n").addClass("animate-letter");
    }, 500);
    setTimeout(function() {
      $("#u").addClass("animate-letter");
    }, 700);

    setTimeout(function() {
      setTimeout(function() {
        $("#m").removeClass("animate-letter");
      }, 0);
      setTimeout(function() {
        $("#e").removeClass("animate-letter");
      }, 200);
      setTimeout(function() {
        $("#n").removeClass("animate-letter");
      }, 400);
      setTimeout(function() {
        $("#u").removeClass("animate-letter");
      }, 600);
    }, 900);
  });
});

function hvr(dom, action) {
  if (action == "in") {
    $(dom)
      .find("[col=g]")
      .css("display", "none");
    $(dom)
      .find("[col=b]")
      .css("display", "inline-block");
  } else {
    $(dom)
      .find("[col=b]")
      .css("display", "none");
    $(dom)
      .find("[col=g]")
      .css("display", "inline-block");
  }
}
