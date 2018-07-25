function showMessage() {
  alert( 'Привет всем присутствующим!' );
}

showMessage();
console.log("доступ разрешен")
var year = prompt('Сколько вам лет ?', '');
if (year < 18) {
  alert( 'доступ запрещен..' );
} else if (year > 100) {
  alert( 'Это не правда..' );
} 

if (confirm("Вы подписанны на рассылку?")) {
	alert("доступ разрешен"); 
}

else  {
  alert("доступ запрещен")
}


