const ids = ["inputColumns","inputRows","inputBombs","inputPackage"];
const args = ["columns","rows","bombs","emojis"];

function loadStuff() {
  const labels = ["Columns","Rows","Bombs","Package types"];
  
  document.querySelectorAll("input[type=range]").forEach(input => { input.addEventListener("input", function() {
    document.querySelector(`label[for="${this.id}"]`).innerHTML = labels[ids.indexOf(this.id)] + ": " + this.value;
  });
});
}

function play() {
  let link = "";
  ids.forEach((val,i) => { link += args[i] + "=" + document.getElementById(val).value + "&" });
  link += "name=Custom";
  window.location.href = `http://bombox.neocities.org/game?${link}`;
  }