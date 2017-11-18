var a, h;
var i = 1;

var button = document.getElementById('licz');

button.addEventListener('click', function() {
  var triangle1Area = getTriangleArea();
  console.log('Pole trójkąta ' + triangle1Area);
});

function getTriangleArea (a, h) {
	alert('obliczam pole trójkąta numer '+ i++);

	a = prompt("wpisz wartosc dla a ");
	h = prompt("wpisz wartość dla h ");

	if ( ( a <= 0 )  || ( h <= 0 ) ) {
    return 'nie mogło zostać obliczone, ponieważ a lub h jest nieprawidłowe';
	}
	else {
	  return 'wynosi ' + (a*h/2);
	}
}