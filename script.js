//Lab 2 Ingenieria de software
//Operaciones sobre numeros complejos
//@author Adalid Flores Gomez
//@version 1.0
//@date 2024-02-29

function performOperation() {
  var real1 = parseFloat(document.getElementById("real1").value);
  var img1 = parseFloat(document.getElementById("img1").value);
  var real2 = parseFloat(document.getElementById("real2").value);
  var img2 = parseFloat(document.getElementById("img2").value);

  var x = new Complex(real1, img1);
  var y = new Complex(real2, img2);

  var z = x.add(y);
  document.getElementById("additionResult").innerHTML = "Addition: " + z.toString();

  z = x.subtraction(y);
  document.getElementById("subtractionResult").innerHTML = "Subtraction: " + z.toString();

  z = x.multiplication(y);
  document.getElementById("multiplicationResult").innerHTML = "Multiplication: " + z.toString();
}

function Complex(r, i) {
  this.real = r;
  this.img = i;
}

Complex.prototype.add = function(other) {
  return new Complex(this.real + other.real, this.img + other.img);
};

Complex.prototype.subtraction = function(other) {
  return new Complex(this.real - other.real, this.img - other.img);
};

Complex.prototype.multiplication = function(other) {
  return new Complex(this.real * other.real - this.img * other.img, this.real * other.img + this.img * other.real);
};

Complex.prototype.toString = function() {
  return this.real + " + " + this.img + "i";
};