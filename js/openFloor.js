function openFloor(floorName) {
    var i;
    var x = document.getElementsByClassName("floor");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(floorName).style.display = "block";  
  }