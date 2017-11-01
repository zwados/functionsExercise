alert('obliczam pole trójkąta');
var a = prompt("wpisz wartosc dla a ");
	h = prompt("wpisz wartość dla h ");

function getTriangleArea (a, h) {
	if ( ( a <= 0 )  || ( h <= 0 ) ) {
		console.log("Nieprawidłowe dane");
	}
	else {
	return (a*h/2);
	}
}
console.log(getTriangleArea(a, h));

var 
	triangle1Area = getTriangleArea(10, 6);
	triangle2Area = getTriangleArea(12, 8);
	triangle3Area = getTriangleArea(14, 10);

console.log(triangle1Area),
console.log(triangle2Area),
console.log(triangle3Area);