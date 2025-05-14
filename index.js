function addTerm() {
  term = document.getElementById("searchTerm");
}
function downloadHtml() {
  var blob = new Blob([document.getElementById("outputText").innerText], { type: "html" });
  var fileURL = URL.createObjectURL(blob);
  var downloadLink = document.createElement('a');
  downloadLink.href = fileURL;
  alert(fileURL);
  downloadLink.download = "example.html";
  downloadLink.target = "download"
  downloadLink.innerText = "Download as html"
  document.getElementById("div2").appendChild(downloadLink);
  downloadLink.click();
  //window.location.href=fileURL;
  //window.open(fileURL);
}
