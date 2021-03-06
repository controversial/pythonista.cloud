function magicfyPreTags(searchIn) {
  // Little snippet I wrote to magicfy whitespace in pre > code blocks.
  // Removes leading and trailing newlines, and normalizes indentation.
  toStrip = searchIn.getElementsByClassName("magic-indent");
  for (var i = 0; i < toStrip.length; i++) {
    var elem = toStrip[i].getElementsByTagName("code")[0];
    var lines = elem.innerHTML.replace(/^\n+|\n+$/g,"").split("\n");
    var ilevel = lines[0].match(/^\s*/)[0].length;
    var out = "";
    for (var k = 0; k < lines.length; k++)
      out += lines[k].slice(ilevel) + (k < lines.length-1 ? "\n":"");
    elem.innerHTML = out;
  }
}


window.onload = function () {
  // Set up globals
  vex.defaultOptions.className = 'vex-theme-plain';

  // Initialize particleground
  particleground(document.getElementById("particles"), {
    dotColor: '#99e0cf',
    lineColor: '#99e0cf'
  });
  magicfyPreTags(document);

  // Bind buttons
  document.getElementById("submit").onclick = function() {
    vex.dialog.alert("Package submission is coming soon!");
  };
  document.getElementById("log-in").onclick = function() {
    console.log(1);
    vex.dialog.alert("GitHub login is coming soon!");
  };
};
