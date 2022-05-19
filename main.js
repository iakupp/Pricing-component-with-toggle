function check() {
    var checkBox = document.querySelector(".checkbox");
    var annualy = document.getElementsByClassName("annualy");
    var monthly = document.getElementsByClassName("monthly");
    for (var i = 0; i < annualy.length; i++) {
      if (checkBox.checked == true) {
        monthly[i].style.display = "flex";
        annualy[i].style.display = "none";
      } else if (checkBox.checked == false) {
        monthly[i].style.display = "none";
        annualy[i].style.display = "flex";
      }
    }
  }
  check();   