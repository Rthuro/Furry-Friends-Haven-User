//pop up dropdown
function selOpt() {
    selEl = document.querySelector('#s1');
    op = selEl.value;
    document.querySelector('.op').textContent = op;
}

//pop up name //c1
function displayText() {
  var others = document.getElementById('showAddLiveOthers');
  var textBox = document.getElementById('addLiveOthersDiv');

  if (others.checked) {
    textBox.style.display = "block";
  } else {
    textBox.style.display = "none";
  }
}
var radios = document.getElementsByName('addLive');
for (var i = 0; i < radios.length; i++) {
  radios[i].onclick = displayText;
}
displayText();

//pop up name //c2
function displayText() {
  var c2others = document.getElementById('c2showAddLiveOthers');
  var c2textBox = document.getElementById('c2addLiveOthersDiv');

  if (c2others.checked) {
    c2textBox.style.display = "block";
  } else {
    c2textBox.style.display = "none";
  }
}
var c2radios = document.getElementsByName('c2addLive');
for (var i = 0; i < c2radios.length; i++) {
  c2radios[i].onclick = displayText;
}
displayText();