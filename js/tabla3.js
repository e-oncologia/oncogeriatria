function mostrarA() {
  var x1 = document.getElementById("flotante1");
  if (x1.style.display === "none") {
    x1.style.display = "block";
    cerrarB();
    cerrarC();
    cerrarD();
    cerrarE();
  } else {
    x1.style.display = "none";
  }
  var x2 = document.getElementById("flotante2");
  if (x2.style.display === "none") {
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
  }
  var x3 = document.getElementById("flotante3");
  if (x3.style.display === "none") {
    x3.style.display = "block";
  } else {
    x3.style.display = "none";
  }
}

function cerrarA() {
  div = document.getElementById("flotante1");
  div.style.display = "none";
  div = document.getElementById("flotante2");
  div.style.display = "none";
  div = document.getElementById("flotante3");
  div.style.display = "none";
}

function mostrarB() {
  var x4 = document.getElementById("flotante4");
  if (x4.style.display === "none") {
    x4.style.display = "block";
    cerrarA();
    cerrarC();
    cerrarD();
    cerrarE();
  } else {
    x4.style.display = "none";
  }
  var x5 = document.getElementById("flotante5");
  if (x5.style.display === "none") {
    x5.style.display = "block";
  } else {
    x5.style.display = "none";
  }
  var x6 = document.getElementById("flotante6");
  if (x6.style.display === "none") {
    x6.style.display = "block";
  } else {
    x6.style.display = "none";
  }
}

function cerrarB() {
  div = document.getElementById("flotante4");
  div.style.display = "none";
  div = document.getElementById("flotante5");
  div.style.display = "none";
  div = document.getElementById("flotante6");
  div.style.display = "none";
}

function mostrarC() {
  var x7 = document.getElementById("flotante7");
  if (x7.style.display === "none") {
    x7.style.display = "block";
    cerrarA();
    cerrarB();
    cerrarD();
    cerrarE();
  } else {
    x7.style.display = "none";
  }
  var x8 = document.getElementById("flotante8");
  if (x8.style.display === "none") {
    x8.style.display = "block";
  } else {
    x8.style.display = "none";
  }
  var x9 = document.getElementById("flotante9");
  if (x9.style.display === "none") {
    x9.style.display = "block";
  } else {
    x9.style.display = "none";
  }
}

function cerrarC() {
  div = document.getElementById("flotante7");
  div.style.display = "none";
  div = document.getElementById("flotante8");
  div.style.display = "none";
  div = document.getElementById("flotante9");
  div.style.display = "none";
}

function mostrarD() {
  var x7 = document.getElementById("flotante10");
  if (x7.style.display === "none") {
    x7.style.display = "block";
    cerrarA();
    cerrarB();
    cerrarC();
    cerrarE();
  } else {
    x7.style.display = "none";
  }
  var x8 = document.getElementById("flotante11");
  if (x8.style.display === "none") {
    x8.style.display = "block";
  } else {
    x8.style.display = "none";
  }
  var x9 = document.getElementById("flotante12");
  if (x9.style.display === "none") {
    x9.style.display = "block";
  } else {
    x9.style.display = "none";
  }
}
function cerrarD() {
  div = document.getElementById("flotante10");
  div.style.display = "none";
  div = document.getElementById("flotante11");
  div.style.display = "none";
  div = document.getElementById("flotante12");
  div.style.display = "none";
}

function mostrarE() {
  var x7 = document.getElementById("flotante13");
  if (x7.style.display === "none") {
    x7.style.display = "block";
    cerrarA();
    cerrarB();
    cerrarC();
    cerrarD();
  } else {
    x7.style.display = "none";
  }
  var x8 = document.getElementById("flotante14");
  if (x8.style.display === "none") {
    x8.style.display = "block";
  } else {
    x8.style.display = "none";
  }
  var x9 = document.getElementById("flotante15");
  if (x9.style.display === "none") {
    x9.style.display = "block";
  } else {
    x9.style.display = "none";
  }
}
function cerrarE() {
  div = document.getElementById("flotante13");
  div.style.display = "none";
  div = document.getElementById("flotante14");
  div.style.display = "none";
  div = document.getElementById("flotante15");
  div.style.display = "none";
}
