const ids = ["inputColumns","inputRows","inputBombs","inputPackage"];
const args = ["columns","rows","bombs","emojis"];
const hints = 3

function loadStuff() {
  const labels = ["Columns","Rows","Bombs","Package types"];
  
  document.querySelectorAll("input[type=range]").forEach(input => { input.addEventListener("input", function() { document.querySelector(`label[for="${this.id}"]`).innerHTML = labels[ids.indexOf(this.id)] + ": " + this.value; });
});
}

function play() {
  let link = "";
  let hint = "";

  ids.forEach((val,i) => { link += args[i] + "=" + document.getElementById(val).value + "&" });
  for (let i = 0; i < hints; i++) { hint += document.getElementById(`inputHint${i+1}`).value.replace(true,1).replace(false,0) + "&"}
  link += hint
  link += "name=Custom";
  window.location.href = `/game.html?${link}`;
  }