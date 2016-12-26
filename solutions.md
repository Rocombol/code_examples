

Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задает вопрос confirm и возвращает его результат

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}


/*---------------------------------------------------------------------*/

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
/*---------------------------------------------------------------------*/
Напишите функцию pow(x,n), которая возвращает x в степени n. 
function pow(x, n) {
    var result = x;

    for(var i = 1; i < n; i++) {
      result *= x;
    }

    return result;
  }
  
  var x = prompt("x?", '');
  var n = prompt("n?", '');

  if (n <= 1) {
    alert('Степень ' + n +
      'не поддерживается, введите целую степень, большую 1'
    );
  } else {
    alert( pow(x, n) );
  }

/*---------------------------------------------------------------------*/
Напишите функцию sumTo(n), которая для данного n вычисляет сумму 
Решение с использованием цикла:
function sumTo(n) {
  var sum = 0;
  for(var i=1; i<=n; i++) {
    sum += i;
  }
  return sum;
}

alert( sumTo(100) );


/*---------------------------------------------------------------------*/
Решение через рекурсию:
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n-1);
}

alert( sumTo(100) );


/*---------------------------------------------------------------------*/
Решение по формуле: sumTo(n) = n*(n+1)/2:
function sumTo(n) {
  return n*(n+1)/2;
}

alert( sumTo(100) );

/*---------------------------------------------------------------------*/
Задача — написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.

function factorial(n) {
  return (n!=1) ? n*factorial(n-1) : 1;
}

alert( factorial(5) ); // 120


/*---------------------------------------------------------------------*/

Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. Пример работы:
function fib(n) { /* ваш код */ }

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77)); // 5527939700884757


Последовательное вычисление (идея)
var a = 1, b = 1; // начальные значения
var c = a + b; // 2

/* переменные на начальном шаге:
a  b  c
1, 1, 2
*/
Теперь следующий шаг, присвоим a и b текущие 2 числа и получим новое следующее в c:

a = b, b = c; 
c = a + b;

/* стало так (еще число):
      a  b  c
1, 1, 2, 3, 5
*/
P.S. Этот подход к вычислению называется динамическое программирование снизу-вверх.

Последовательное вычисление (код)

function fib(n) {
  var a = 1, b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }          
  return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77)); // 5527939700884757

/*---------------------------------------------------------------------*/

Функции являются модальными, т.е. не позволяют посетителю 
взаимодействовать со страницей до ответа.
var userName = prompt("Введите имя?", "Василий");
var smokes = confirm("Вы хотите чаю?");

alert( "Посетитель: " + userName);
alert( "Чай: " + smokes);
*----------------------------------------------------------------------------------*
Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом,
 например:
ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке



function ucFirst(str) {
  var newStr = str.charAt(0).toUpperCase();

  for(var i=1; i<str.length; i++) {
    newStr += str.charAt(i);
  }

  return newStr;
}

alert( ucFirst("вася") );
еще вариант


var str = prompt("Введите строоку " , "").toLowerCase();
if(str == undefined || str == ""){
 	alert("Строка не введена");
}else{
	checkSpam();
}
function checkSpam() {
	if(~str.indexOf("viagre") || ~str.indexOf("xxx")){
		return alert("true");
	}else{
		return alert("false");
	}
}

Еще вариант


function ucFirst(str) {
	if(str === undefined || str === ""){
		 alert("Пустая строка");
	}else{
		 return	alert(str.charAt(0).toUpperCase() + str.slice(1));
	}	
}
ucFirst("вася");

*----------------------------------------------------------------------------------*
Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит ‘viagra’ or ‘XXX’.
Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false


function checkSpam(str) {
  str = str.toLowerCase();
       
  return str.indexOf('viagra') >= 0 || str.indexOf('xxx') >= 0;
}
еще вариант:
function checkSpam(str){
       if ( ~str.toUpperCase().toLowerCase().indexOf("viagra") || ~str.toUpperCase().toLowerCase().indexOf("xxx") ){
           return true;
       }
       return false;
   }
    alert(checkSpam("buy ViAgra now"));
    alert(checkSpam("XxX"));
    alert(checkSpam("wrong word"));

*----------------------------------------------------------------------------------*
Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. 
Как только получаем очередную позицию — начинаем следующий поиск со следующей.

Пример такого цикла:
var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке 
var target = "Иа";         // цель поиска

var pos = 0;
while(true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break; 

  alert(foundPos); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}

*----------------------------------------------------------------------------------*

var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке 
var target = "Иа";         // цель поиска


var pos = -1;
while ( (pos = str.indexOf(target, pos+1)) != -1) {
  alert(pos);
}
*---------------------------------------------------------------------------------------------------*

Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, 
и если она превосходит maxlength — заменяет конец str на '…', так чтобы ее длина стала равна maxlength.

Результатом функции должна быть (при необходимости) усечённая строка.
Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
 
truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...';
    // итоговая длина равна maxlength
  }

  return str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

Еще вариант:

function checkSpam(spamornot){
  var newStr=spamornot.toLowerCase();
  if(newStr.indexOf("xxx")||newStr.indexOf("viarga")){
    return true;
    }
    else{
      return false;
    }
}
var newText = prompt("Введите проверяемый текст", "");
alert(checkSpam(newText));

Еще  вариант

function checkMaxlength(maxlength) {
  var str = prompt('Please input massage with length less than 5','');
  if (str.length > maxlength) {
    alert(str.substr(0, maxlength) + '...');
    return str.substr(0, maxlength) + '...';
  }
  alert(str);
  return str;
}
checkMaxlength(5);


/*---------------------------------------------------------------------*/
Напишите функцию getDecimal(num), которая возвращает десятичную часть положительного числа:
function getDecimal(x) {
  var decimal = x.slice( x.indexOf(".") + 1 );
  if (decimal.length > 6) {
    return (decimal.charAt(6) >= 5) ? "0." + (+decimal.slice(0, 6) + 1) : "0." + decimal.slice(0, 6);
  }
  return "0." + decimal;
}
alert( getDecimal( prompt("Введи число:", "") ) );
/*---------------------------------------------------------------------*/

function getDecimal(num) {
  return num - Math.floor(num);
}

alert( getDecimal(12.5) ); // 0.5
alert( getDecimal(6.25) ); // 0.25
/*---------------------------------------------------------------------*/
function getDecimal(num) {
  return +(num % 1).toFixed(6);
}

alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(1.3) ); // 0.3 
alert( getDecimal(1.4) ); // 0.4
/*---------------------------------------------------------------------*/

Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит ‘viagra’ or ‘XXX’.

function checkSpam(str) {
  str = str.toLowerCase();
       
  return str.indexOf('viagra') >= 0 || str.indexOf('xxx') >= 0;
}

/*---------------------------------------------------------------------*/
Подскажите, в JS есть преобразование числа в строку заданной длинны, т.е. с дополнением в начало пробелов или нулей. 
Например 123:7 -> "0000123". Т.е. аналог форматированного вывода Pascal или C но для строк.

function addZeros(num, length) {
    var result = '';
    num = num.toString();
    for (i = 1; i < length - num.length; i++) {
        result += '0';
    }
    return result + num;
}
alert(addZeros(18, 5) ) // "0055"


чтобы он позволял пользователю округлять с требуемой точностью числа.

      var x = prompt("Введите число, а мы его округлим", "");
      var n = prompt("Сколько знаков после запятой нужно оставить?", "");
      
      if ( !(x === null || n === null) ) {
        for (var e = 1, i = 0; i < n; i++) {
          e *= 10;
        }
        alert("Округленное число -- " + (Math.round( x * e ) / e));
      } else {
        alert("Не хотите, как хотите");
      }	


/*---------------------------------------------------------------------*/
Функция проверки на число

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/*---------------------------------------------------------------------*/

Хак с упорядочеванием чисельных ключей:

var codes = {
  "+255": "Танзания", // передаём 255 в виде строки, чтобы браузер сохранил порядок
  "+7": "Россия", 
  "+38": "Украина",
  "+1": "США"
};

for (var key in codes ) {
  var value = codes[key];
  var id = +key; // ..если нам нужно именно число, преобразуем: "+255" -> 255
 
  alert( id + ": " + value ); // 255, 7, 38, 1 во всех браузерах
}

/*---------------------------------------------------------------------*/

Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. 
Например:

var menu = {
    width: 200,  
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

Решение
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) { 
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for(var key in obj) {
    if (isNumeric( obj[key] )) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

alert("menu width="+menu.width+" height="+menu.height+" title="+menu.title);


И еще:

var menu = {    
  width: 200, 
  height: 300,
  title: "My menu"
};
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function multiplyNumeric(obj) {
  for ( var key in obj ) {
  isNumeric(obj[key]) ? obj[key]*= 2 : false;
}
  return obj;
}
multiplyNumeric(menu);


И еще с созданием нового оъбекта:
var menu = {    
  width: 200, 
  height: 300,
  title: "My menu"
};
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function multiplyNumeric(obj) {
  var obj2 = {};
  for ( var key in obj ) {
  isNumeric(obj[key]) ? obj2[key] = obj[key]*2 : obj2[key] = obj[key];
}
  return obj2;
}
multiplyNumeric(menu); 

И еще

var menu = {    
  width: 200, 
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj){

for(var key in obj) {
if(Number(obj[key])) {
obj[key] *= 2;
}
}
return obj;
}
multiplyNumeric(menu)
alert("menu width="+menu.width+" height="+menu.height+" title="+menu.title);

/*---------------------------------------------------------------------*/
Пример если мы сами вводим свойство:
  var user = {};
  
  var prop1 = prompt('Введите свойство 1','');
  user[prop1] = prompt('Введите значение 1','');
  
  var prop2 = prompt('Введите свойство 2','');
  user[prop2] = prompt('Введите значение 2','');
  
  var prop3 = prompt('Введите свойство 3','');
  user[prop3] = prompt('Введите значение 3','');
  
  
  
  for(var key in user) {
    alert( key + ': ' + user[key] );
  }

/*---------------------------------------------------------------------*/
                              1.1
/*---------------------------------------------------------------------*/

Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
Выводит сумму всех значений массива:
var array=[]
do {
  var i=+prompt('Enter the number','');	
  array.unshift(i);
} while(isNaN(i)||i!=""||i!=0);
var summa = function(m) {
for(var s = 0, k = array.length; k; s += array[--k]);
return s;
};
alert(summa(array));

И еще

var array=[]
do {
  var i=+prompt('Enter the number','');	
  array.unshift(i);
} while(isNaN(i)||i!=""||i!=0);
var sum=0;
for (var i=0;i<array.length;i++){
 sum+=array[i];
}
alert(sum);

и еще

var numbers = [];
while(true) {
  var value = +prompt("Введите число", '');
  if (!value) break; // '', NaN или null (отмена)
  numbers.push(value);
}
var sum = 0;
for(var i=0; i<numbers.length; i++) {
  sum += numbers[i];
}
alert(sum);


и еще
var Arr = [];
while(true){
var pushTo = +prompt('Введите число..','');
if(pushTo == null || pushTo == "" || isNaN(pushTo)) {
break;
} 
Arr.push(pushTo);
var sum = 0;
for ( var i = 0 , x = Arr.length; i < x ; i++ ){
sum += Arr[i];
}
}

alert(sum);
</script>

/*---------------------------------------------------------------------*/
Сумма елементов массива
var numbers=[1,2,3,4,5,6,7,8,9]
var sum=0;
for(var i=0; i<numbers.length; i++) {
  sum += numbers[i];
}
alert(sum);
/*---------------------------------------------------------------------*/

Сумма значений номеров элементов массива

var sum = 0;
for (i=0; i<arr.length; i++) { 
    sum += i;
}
/*---------------------------------------------------------------------*/
Копия Массива
var a = [];
for(var i=0; i<arr.length; i++) a[i] = arr[i];

/*---------------------------------------------------------------------*/
Перебор всех элементов объекта
var menu = {    
  width: 200, 
  height: 300,
  title: "My menu"
};
for(var key in menu){
  alert("Ключ: " + key + " значение:" + menu[key])
}

/*---------------------------------------------------------------------*/
Перебор всех элементов массива:
var=[];
for (var i=0; i<arr.length; i++){
  alert(arr[i])
}
2 ой вариант записи
var=[];
for(var i= arr.length-1;i>=0;i--){
  alert(arr[i]) 
}

/*---------------------------------------------------------------------*/
Создайте функцию find(arr, value), которая 
ищет в массиве arr значение value и возвращает его 
номер, если найдено, или -1, если не найдено.

arr = [ "test", 2, 1.5, false ];
find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2
find(arr, 0); // -1
Мой вариант: 
  function find(arr, value){
        var pos=0;   
        while(true) {
        var foundPos = arr.indexOf(value, pos);
        return (foundPos ==-1)?foundPos:foundPos; 
       }
     }
var los=['lost',815,4815162342]
alert(find(los,4815162342))

еще
function find(array, value) {

  for(var i=0; i<array.length; i++) {
    if (array[i] == value) return i;
  }
   
  return -1;
}
и еще
Однако, в нем ошибка, т.к. сравнение == не различает 0 и false.
Поэтому лучше использовать ===. Кроме того, в современном стандарте JavaScript существует встроенная 
фунция Array#indexOf, которая работает именно таким образом. Имеет смысл ей воспользоваться, 
если браузер ее поддерживает.

function find(array, value) {
  if (array.indexOf) { // если метод существует
    return array.indexOf(value);
  }
  for(var i=0; i<array.length; i++) {
    if (array[i] === value) return i;
  }  
  return -1;
}
var arr = ["a", -1, 2, "b"];
var index = find(arr, -1);
alert(index);
И еще
Но еще лучшим вариантом было бы определить 
find по-разному в зависимости от поддержки браузером метода indexOf:
// создаем пустой массив и проверяем поддерживается ли indexOf
if ( [].indexOf ) { 

  var find = function(array, value) {
    return array.indexOf(value);
  }

} else {
  var find = function(array, value) {
    for(var i=0; i<array.length; i++) {
      if (array[i] === value) return i;
    }
   
    return -1;
  }

}
var los=[ "test", 0, 1.5, false ];
var per=find(los,false)
alert(per)
Этот способ - лучше всего, т.к. не требует при каждом запуске find проверять поддержку indexOf.
/*---------------------------------------------------------------------*/
Создайте фунцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, 
который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ? arr[i] ? b.
Функция не должна менять arr.
var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился


И еще
function filterRange(arr, a, b) {
    var result = [];
	for(var i=0; i<arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
	}
	return result;
}
var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);
alert(filtered);


/*----------------------------------------------------------------------------------------------*/
Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
Пусть p=2, это первое простое число.
Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2p, 3p, 4p и т.д.
В случае p=2 это будут 4,6,8....
Поменять значение p на первое незачеркнутое число после p.
Повторить шаги 3-4 пока p2 < n.
Все оставшиеся незачеркнутыми числа - простые.
Посмотрите также анимацию алгоритма.

Реализуйте «Решето Эратосфена» в JavaScript. Найдите все простые числа до 100 и выведите их сумму.

//Алгоритм "по шагам".


// шаг 1
var arr = [];

for (var i=2; i<100; i++) {
  arr[i] = true
}

// шаг 2
var p = 2;

do {
  // шаг 3
  for (i=2*p; i<100; i+=p) {
    arr[i] = false;
  }

  // шаг 4
  for (i=p+1; i<100; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p*p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i=0; i<arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

alert(sum);
и еще
alert(SimpleNum(prompt('Введите верхний предел для поиска простых чисел', '100')));

function SimpleNum (n) {
 for (var src = [2];src.length<=n-2;) {
 	src.push(src.length+2);
 }

 var p = 2;
 outer : for (var y = 1;;y++) {

 	if (src[y]%p==0) src[y] = undefined;

 	if (y==n-2) {

 		for (y=p-1;y<n-2;y++) {

 			if (src[y]!==undefined) {
 				 
 				p = src[y];
 
 				y = p-2;

 				continue outer; 
 			}

 		}
 		break outer;

 	}
 }

 for (var res = 0,y=0;y<n-2;y++) {

 	if (src[y]!==undefined) res+=src[y];

 }
 return res;
}
и еще
function promptIntG1() {
    for (;;) {
        var max = +prompt("Enter interger greater than 1 please", "");
        if ((max > 1) && ((max ^ 0) === max)) return max;
    }
}

function arrPrimes(num) {
    var primeSet = [];
    var mask = [];
    for (var i = 2; i <= num; i++) {
        if (i <= Math.sqrt(num)) {
            if (mask[i]) continue;
            primeSet.push(i);
            for (var j = i; j <= num; j += i) mask[j] = true;
        }
        if (!mask[i]) primeSet.push(i);
    }
    return primeSet;
}

function sumArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var numMax = promptIntG1();
var date = new Date();
var primes = arrPrimes(numMax);
var delta = new Date() - date;

alert(primes.length.toLocaleString() + " Рrimes up to  " + numMax.toLocaleString() +
    "  ( " + delta.toLocaleString() + " ms ): \n" + primes.join(", ") +
    "\n\nThe Sum of these Primes:  " + sumArr(primes).toLocaleString());


/*---------------------------------------------------------------------*/
а входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача — найти непрерывный подмассив arr, сумма элементов которого максимальна.

Ваша функция должна возвращать только эту сумму.

Например:

1
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
2
getMaxSubSum([2, -1, 2, 3, -9]) = 6
3
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
4
getMaxSubSum([-2, -1, 1, 2]) = 3
5
getMaxSubSum([100, -9, 2, -3, 5]) = 100
6
getMaxSubSum([1, 2, 3]) = 6 (неотрицательные - берем всех)
Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:

getMaxSubSum([-1, -2, -3]) = 0

Подсказка
// Начиная с -1:
-1
-1 + 2
-1 + 2 + 3
-1 + 2 + 3 + (-9)
-1 + 2 + 3 + (-9) + 11

// Начиная с 2:
2
2 + 3
2 + 3 + (-9)
2 + 3 + (-9) + 11

// Начиная с 3:
3
3 + (-9)
3 + (-9) + 11

// Начиная с -9
-9
-9 + 11

// Начиная с -11
-11

Решение:
function getMaxSubSum(arr) {
  var maxSum = 0; // если совсем не брать элементов, то сумма 0

  for(var i=0; i<arr.length; i++) {
    var sumFixedStart = 0;
    for(var j=i; j<arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

/*---------------------------------------------------------------------*/

function getMaxSubSum(arr) {
  var maxSum = 0, partialSum = 0;
  for (var i=0; i<arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}


alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5

/*---------------------------------------------------------------------*/
Напишите функцию unique(strings), которая возвращает 
массив, содержащий только уникальные элементы arr.

Решение перебором

function unique(arr) {
  var result = [];

  nextInput:
  for(var i=0; i<arr.length; i++) {
    var str = arr[i];                      // для каждого элемента
    for(var j=0; j<result.length; j++) {   // ищем, был ли он уже?
      if (result[j] == str) continue nextInput; // если да, то следующий
    }
    result.push(str);
  }
 
  return result;
}

var strings = ["кришна", "кришна", "харе", "харе", 
  "харе", "харе", "кришна", "кришна", "8-()"];

alert( unique(strings) ); // кришна, харе, 8-()


Решение с объектом (быстрое)
function unique(arr) {
  var obj = {};

  for(var i=0; i<arr.length; i++) {
    var str = arr[i];

    obj[str] = true; // запомнить строку в виде свойства объекта (ключа)

  }
 
  return Object.keys(obj); // или собрать ключи перебором для IE<9
}

var strings = ["кришна", "кришна", "харе", "харе", 
  "харе", "харе", "кришна", "кришна", "8-()"];

alert( unique(strings) ); // кришна, харе, 8-()


Вариант функиции для IE 8--

function unique(arr) {
	var obj = {};
	for(var i = 0; i < arr.length; i++) {
		obj[arr[i]] = true;
	}
	if(Object.keys) {
		return Object.keys(obj);
	} else {
		var newArr = [];
		for(var key in obj) newArr.push(key);
		return newArr;
	}
}


/*---------------------------------------------------------------------*/
Количество свойств в объекте
Одного метода, который вернул бы количество свойств нет.
 Кросс-браузерный способ — это сделать цикл по свойствам и посчитать:
function getKeysCount(obj) {
  var counter = 0;
  for (var key in obj) {
    counter++;
  }
  return counter;
}

/*---------------------------------------------------------------------*/
Вид функции проверки на пустоту

function isEmpty(obj) {
  for (var key in obj) {
    return false; // если цикл хоть раз сработал, то объект не пустой => false
  }
  // дошли до этой строки - значит цикл не нашёл ни одного свойства => true
  return true;
}

/*---------------------------------------------------------------------*/

В объекте есть свойство className, которое содержит список «классов» - слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open');  // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className);  // "open menu new me"

Решение
 var obj={className:'open menu'}
 function addClass(obj,cls){
 	for (var key in obj){
 		var arr=obj[key];
 	
 	if ((arr.indexOf(cls))>0){
 		return obj.className
 	}
 	else{
 		return obj.className=obj[key]+' '+cls;
 	}
  }
}
alert(addClass(obj,'menu'))
alert(addClass(obj,'new'))
alert(addClass(obj,'way'))
alert(obj.className)

И еще

function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for(var i=0; i<classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить
   
  obj.className = classes.join(' '); // и обновить свойство
}

var obj = { className: 'open menu' };

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className)   // open menu new me
/*---------------------------------------------------------------------*/
Как поместить значения свойства из объекта в массив? В данном случае open menu еще и разные элементы массива
var obj = { className: 'open menu' };
var classes = obj.className ? obj.className.split(' ') : [];
создаётся переменная куда заносится значение, зависящие от условия если obj.className равно истине (true) 
то выполняем строку кода obj.className.split(' ') если false то строку []. то есть в первом случае obj.className.split(' ') –
здесь создаем массив из строки obj.className, а массив разбиваем по пробелам или во втором случае создаем пустой массив []. 

/*---------------------------------------------------------------------*/
Перенос значения из переменной classes в объект obj в свойство className (заменяет зачение которое было до этого)
 var obj = { className: 'open mymenu' };
 var classes=['door beauty deer']   
 obj.className = classes.join(' '); 
 alert(obj.className);

/*---------------------------------------------------------------------*/
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.

Решение:
 function camelize(str) {
  var arr = str.split('-');
  for(var i=1; i<arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}
alert(camelize("list-sryle-type"))

And one

var str = 'list-style-type';
       var newStr = '';

          function camelize (str) { 
            
                    my:
                    for (i=0;i<str.length;i++) {
                        if (str.charAt(i) === '-') {
                          i = i+1
                          newStr += str.charAt(i).toUpperCase(); continue my;
                          }

                        newStr += str.charAt(i);
                        }
		return newStr;
                     
          };

          camelize(str);
          alert(str = newStr);
And one

function camelize( str ) {
    for( var i=0; i<str.length; ++i )      
        if( str[i] == '-' ) {           
             str = str.substring( 0, i ) + str[++i].toUpperCase() + str.slice( ++i );   
        }   
    return str;
}

alert( camelize( 'background-image') );








/*---------------------------------------------------------------------*/
function camelize(str) {	
	var arrStr = str.split('-');
	var newArr = [];	

  newArr[0] = arrStr[0];

	for (var j = 1; j < arrStr.length; j++) {	
	newArr[j] = arrStr[j].charAt(0).toUpperCase();
		for (var i = 1; i < arrStr[j].length; i++) {
		newArr[j] += arrStr[j].charAt(i);
		}
	}
  return newArr.join('');
}
alert(camelize('list-style-type'))

/*---------------------------------------------------------------------*/
У объекта есть свойство className, которое хранит список «классов» - слов, разделенных пробелами:

var obj = {
  className: 'open menu'
}
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = { className: 'my menu menu' };
removeClass(obj, 'menu');
alert(obj.className); // 'my'
Лишних пробелов после функции образовываться не должно.

Решение (НЕ корректно обрабатывает дублирования значения ключа в строке)

function remuveClass(obj,cls){
	var classes = obj.className ? obj.className.split(' ') : [];
	for(var i=0; i<classes.length; i++) {
    if (classes[i] == cls) 
    classes.splice(i,1);
  }
  obj.className = classes.join(' ');

}
var obj={className:'menu new lever romambararamamberu'}

remuveClass(obj,'menu')
alert(obj.className)

Решение ( С корректной обработкой  дублирования значения ключа, другой метод перебора)

function remuveClass(obj,cls){
	var classes = obj.className.split(' ')
	for(var i=classes.length-1;i>=0;i--) {
    if (classes[i] == cls) 
    classes.splice(i,1);
  }
  obj.className = classes.join(' ');

}
var obj={className:'menu my menu my menu'}

remuveClass(obj,'menu')
alert(obj.className)

и еще

function removeClass(obj, cls) {
  var classes = obj.className.split(' ');
 
  for(i=0; i<classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс  

      i--; // (*)

    }
  }
  obj.className = classes.join(' ');
	
}

var obj = { className: 'open menu menu' }

removeClass(obj, 'blabla'); 
removeClass(obj, 'menu')
alert(obj.className)   // open

/*---------------------------------------------------------------------*/

Создайте функцию filterRangeInPlace(arr, a, b), 
которая получает массив с числами arr 
и удаляет из него все числа вне диапазона a..b.
То есть, проверка имеет вид a ? arr[i] ? b. 
Функция должна менять сам массив и ничего не возвращать.

Например:
arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert(arr); // массив изменился: остались [3, 1]
Решение: (не совсем корректно т.к массив изменен)
function filterRangeInPlace(arr,a,b){
  for(var i=arr.length-1;i>=0;i--) {
    if (arr[i]>=a && arr[i]<= b) {
      arr.push(arr[i])
    }    
     arr.splice(i,1)    
  }
 } 
arr=[1,2,3,4,5,6,7,8,9,10];
filterRangeInPlace(arr,1,5)
alert(arr)
и еще

function filterRangeInPlace(arr, a, b) {
    for(var i = 0; i<arr.length; i++) {
        var val  = arr[i];
        if (val < a || val > b) {
            arr.splice(i--, 1);
        }
    }
}
var arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);
And one

arr = [5, 3, 8, 1];

  function filterRangeInPlace(arr, a, b) {
    for ( var i = 0; i< arr.length; i++ ) {
       (a <= arr[i] && arr[i] <= b) ? true : arr.splice(i,1);
      }
}

filterRangeInPlace(arr, 1, 4);
alert(arr); // 3, 1




/*---------------------------------------------------------------------*/
Сортировка елементов массива как чисел с помощью метода .sort() и 
функции compareNumeric(a,b)

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
var arr = [15,4,8,42,16,23];

alert(arr.sort(compareNumeric));//4,8,15,16,23,42
или  еще вариант


function compareNumeric(a,b){
  return a-b;
}
var arr = [15,4,8,42,16,23];

alert(arr.sort(compareNumeric));

/*---------------------------------------------------------------------*/

Как отсортировать массив чисел в обратном порядке?

var arr = [ 5, 2, 1, -10, 8];

// отсортируйте?

alert(arr);  // 8, 5, 2, 1, -10

Решение
var arr = [ 5, 2, 1, -10, 8];

function compareReversed(a, b) {
  return b - a;
}

arr.sort(compareReversed);

alert(arr);

/*---------------------------------------------------------------------*/
Используйте функцию sort для того, чтобы «перетрясти» элементы массива 
в случайном порядке.
var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

alert(arr); // элементы в случайном порядке, например [3,5,1,2,4]

Решение
function compareNumeric(a, b) {
  if (Math.random(a) > Math.random(b)) return  1
  if (Math.random(a) > Math.random(b)) return  -1
}
var arr = [1,2,3,4,5,6];

alert(arr.sort(compareNumeric));

и еще
var arr = [1, 2, 3, 4, 5];
function compareRandom(a, b) { 
  return Math.random() - 0.5;
}
arr.sort(compareRandom);
alert(arr); // элементы в случайном порядке, например [3,5,1,2,4]
/*---------------------------------------------------------------------*/
Напишите код, который отсортирует массив объектов people по полю age.
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6
Решение
// Наша функция сравнения
function compareAge(personA, personB) {
  return personA.age - personB.age;
}


// проверка
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

// вывести
for(var i=0; i<people.length; i++) {
  alert(people[i].name); // Вовочка Маша Вася
}

/*---------------------------------------------------------------------*/
Сортировка по возрастанию:

var points = [40,100,1,5,25,10];
points.sort(function(a,b){return a-b});

Результат:

1,5,10,25,40,100

Сортировка по убыванию:

var points = [40,100,1,5,25,10];
points.sort(function(a,b){return b-a});

Результат:

100,40,25,10,5,1


Сортировка по алфавиту по убыванию:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

Результат:

Orange,Mango,Banana,Apple

Случай с объектом как в нашем случае:

Пример (один в один как в нашем случае)

var homes = [
    {
        "h_id": "3",
        "city": "Dallas",
        "state": "TX",
        "zip": "75201",
        "price": "162500"
    }, {
        "h_id": "4",
        "city": "Bevery Hills",
        "state": "CA",
        "zip": "90210",
        "price": "319250"
    }, {
        "h_id": "5",
        "city": "New York",
        "state": "NY",
        "zip": "00010",
        "price": "962500"
    }];
Решение 1:

// a and be are object elements of your array
function mycomparator(a,b) {
  return parseInt(a.price) - parseInt(b.price);
}
homes.sort(mycomparator);

Решение 2:
То-же что и выше но более кратко.

homes.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price) } );

Еще пример
var items = [
  { name: 'Corovik', value: 21 },
  { name: 'Boris', value: 37 },
  { name: 'And', value: 45 },
  { name: 'Zed', value: -12 },
  { name: 'Oland', value: 37}
];
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

for(var i=0; i<items.length; i++) {
  alert(items[i].name); // Zed, Corovik, Boris, Oland, And
}

/*---------------------------------------------------------------------*/
Данный список называеться- Односвязный список
это структура данных, которая состоит из элементов,
каждый из которых хранит ссылку на следующий.
Последний элемент может не иметь ссылки, либо она равна null.
var list = {
  value: 1,  next: {
    value: 2, next: {
      value: 3, next: {
        value: 4, next: null
      }
    }
  }
};

Напишите функцию printList(list), которая выводит элементы списка по очереди

function printList(list) {
  var tmp = list;

  while(tmp) {
    alert( tmp.value );
    tmp = tmp.next;
  }
  
}
printList(list);
идет цикл, на каждой итерации которого переменно tmp присваивается значение tmp.next и получается, что на первой итерации tmp == list,
 потом идет присваивание tmp = tmp.next, значит tmp теперь равно list.next и получается что в алерте уже выведется list.next.value.
Потом идет опять присваивание tmp = tmp.next, а в tmp у нас уже list.next и получаем такое присваивание tmp = list.next.next 
и в алерте выведется list.next.next.value 
ну и так далее пока tmp не станер равно null.

B еще обьяснялка

Условие while(tmp) проверяет tmp на истинность. В первом случае tmp будет равен объекту list, 
а объекты в логическом контексте всегда true. 
После первой итерации в tmp уже будет свойство list.next(так как tmp = tmp.next) 
значение которого так же будет объект, а как я уже писал любой объект даёт true. 
Последнее значение не объект, а null поэтому выходим из цикла, так как условие будет false.

Цикл с помощью переменной tmp(вот здесь: tmp = tmp.next) заходит в объекты
последовательно:
С начало tmp == list - объект, if будет true
Далее tmp == list.next - значение этого свойства - объект, в if - true
Потом tmp == list.next.next - значение этого свойства - объект, в if - true
И в конце list.next.next.next – значение этого свойства будет null таким образом выходим из цикла.

P/S.
В код можно добавить:
alert( 'if: ' + !!tmp + '\nзначение tmp: ' + ((tmp !== null) ? tmp : 'null') );
после
tmp = tmp.next;
и тогда можно будет увидеть тип значения и результат if


/*---------------------------------------------------------------------*/
Напишите функцию printReverseList(list), которая выводит элементы списка 
в обратном порядке, используя рекурсию.
Для списка выше она должна выводить 4,3,2,1.
var list = {
  value: 1,  next: {
    value: 2, next: {
      value: 3, next: {
        value: 4, next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

printReverseList(list);

/*---------------------------------------------------------------------*/
Напишите printReverseList(list) без использования рекурсии
function printReverseList(list) {
  var arr = [];
  var tmp = list;

  while(tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for( var i = arr.length-1; i>=0; i-- ) {
    alert( arr[i] );
  }
}

printReverseList(list);

/*---------------------------------------------------------------------*/
Коллекция уникальных элементов
Рассмотрим задачу — есть коллекция строк, и нужно быстро проверять: есть ли в ней какой-то элемент. 
Массив для этого не подходит из-за медленного indexOf. Но подходит объект! 
Доступ к свойству объекта осуществляется очень быстро, так что можно 
сделать все элементы ключами объекта и проверять, есть ли уже такой ключ.
Например, организуем такую проверку для коллекции строк "div", "a" и "form":

var store = { }; // объект для коллекции

var items = ["div", "a", "form"];

for(var i=0; i<items.length; i++) {
  var key = items[i]; // для каждого элемента создаём свойство
  store[ key ] = true; // значение здесь не важно
}

if ("div" in store){
  alert ("Свойство существует")
}

/*---------------------------------------------------------------------*/

Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке.
Например:

воз - зов
корсет - костер - сектор
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

var arr = ["воз","корсет", "ЗОВ","костер", "сектор"];
 
alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

Решение (просто гениально :-) I love JS! And web )
 
function aclean(arr) {
  // этот объект будем использовать для уникальности
  var obj = {};

  for(var i=0; i<arr.length; i++) {
    // разбить строку на буквы, отсортировать и слить обратно

    var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)


    obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
  }

  var result = [];

  // теперь в obj находится для каждого ключа ровно одно значение
  for(var key in obj) result.push(obj[key]);

  return result;
}

var arr = ["воз", "корсет", "ЗОВ", "костер", "сектор"];

alert( aclean(arr) );

Еще вариант решения

var arr = ["воз", "торс", "ворс", "корсет", "ЗОВ", "костер", "сектор"];

function aСlean(mas2){
    var mas1=reConstruct(mas2);
    for(var i=0;i<mas1.length;i++){
        for(var j=i+1;j<mas1.length;j++){
            if(mas1[i]==mas1[j]){mas1.splice(i,1);
                mas2.splice(i,1);
                j--;}
        }
    }
    return mas2;
}

function reConstruct(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var oneWordArray = arr[i].toLowerCase().split("").sort();
        var result=oneWordArray.join("");
        newArr.push(result);
    }
    return newArr;
}
aСlean(arr);
var reСlean=aСlean(arr);
alert(reСlean);

И еще вариант но он не подходит так как сумма кодов слов с разными буквами может быть одной и той же

var annagrams = ["воз", "корсет", "ЗОВ", "сектор"];

aclear(annagrams);

function aclear(arr) {
	var copy = arr.concat(); //копируем наш массив
	var numbers = []; //создаем массив для числовых значений кодов символов
	for (var i = 0; i < copy.length; i++) {
		numbers[i] = 0;
		for (var j = 0; j < copy[i].length; j++) {
			numbers[i] += copy[i].toLowerCase(j).charCodeAt(j); //в numbers записываем сумму числовых значений кодов символов
		};
		console.log(numbers[i]);
	};
	var obj = {}; //используем объект чтобы отобрать уникальные элементы
	for (var i = 0; i < numbers.length; i++) {
		var str = numbers[i];
		obj[str] = i;
	};
	for (key in obj) {
		alert(arr[obj[key]]); //выводим найденные уникальные элементы
	};
}

И еще вариант с 3 функциями
var arr = ["воз", "корсет", "ЗОВ", "костер", "сектор"];

// Фунация сравнения длины двух элементов массива
function compareElementsLength(elem1, elem2) {
    if (elem1.length === elem2.length) return true;
    
    return false;
}

// Функция, которая определяет, являются ли элементы массива анаграммами
function findAnagrams(elem1, elem2) {
    var str1 = elem1.toLowerCase().split('').sort().join('');
    var str2 = elem2.toLowerCase().split('').sort().join('');
    
    if (str1 === str2) return true;
    
    return false;
}

// Результирующая функция
function aclean(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            // Сравниваем длину элементов и смотрим, не сравниваем ли мы
            // элемент с самим собой
            if (compareElementsLength(arr[i], arr[j]) && (i !== j) ) {
                // Если длина элементов совпала, то смотрим, являются ли
                // они анаграммами. Если являются, то удаляем второй
                // элемент из массива
                if ( findAnagrams(arr[i], arr[j]) ) arr.splice(j--, 1);
            }
        }
    }
    // возвращаем очищенный от анаграмм массив
    return arr;
}

alert( aclean(arr) );

/*---------------------------------------------------------------------*/
Напишите код для генерации случайного целого числа между min и max, 
включая min,max как возможные значения.Любое число из интервала min..max 
должно иметь одинаковую вероятность.

var min = 1, max = 3;
var rand = min - 0.5 + Math.random()*(max-min+1)
rand = Math.round(rand);

alert(rand);

Решение с floor

var min=5, max=10;

var rand = min + Math.random()*(max+1-min); 
rand = rand^0; // округление битовым оператором

alert(rand);

/*---------------------------------------------------------------------*/

 function letterInWord(letter, str) {        
            for (var i=0; i<str.length; i++) {
                if (str[i] === letter) {
                    return true;
                }
            }
            return false;
        }
                
        function compareLetters(str1, str2) {
            if (str1.length != str2.length) {
                return false
            }
            for (var i=0; i<str1.length; i++) {
                if (!(letterInWord(str1[i].toLowerCase(), str2.toLowerCase()))){
                    return false;
                }                
            }
            return true;
        }
            
        function aclean(arr) {
            var workingArr = arr.slice(0);            
            for (var i=0; i<workingArr.length; i++){
                for (var j=1; j<workingArr.length; j++){
                    if (compareLetters(workingArr[i], workingArr[j])) {                        
                        workingArr.splice(i, 1);
                    }
                }                
            }                        
            return workingArr;
        }
                   
        var arr = ["воз", "корсет", "ЗОВ", "костер", "сектор"];
        alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,сектор"

/*------------------------------------------------------------------------------*/
Сам не пойму как работает данный код, поравильно или нет
      "use strict"

      var arr = ["воз","корсет", "ЗОh", "костер"];

      for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        console.log(word);
        for (var j = i + 1; j < arr.length; j++) {
          if (word.length === arr[j].length) {
            for (var y = 0; y < word.length; y++) {
              if (arr[j].toLowerCase().indexOf(word.charAt(y).toLowerCase()) !== -1) {
                var match = true;
              } else {
                match = false;
                break;
              }
            }
            if (match === true) {
              arr.splice(j, 1);
              j--;
            }
          }

        }
      }

      alert(arr);
/*--------------------------------------------------------------------------------*/
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате ‘пн’, ‘вт’, … ‘вс’.

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'

Решение

var date=new Date(2014,10,16)
function getWeekDay(date){
  var days=["вс","пн","вт","ср","чт","пт","сб"]
   var ipad=date.getDay() 
   return days[ipad]
}
alert(getWeekDay(date))

И еще
function getWeekDay(date) {
  var days = ['вс','пн','вт','ср','чт','пт','сб'] ;

  return days[ date.getDay() ];
}

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // 'вт'

/*-------------------------------------------------------------------------------*/
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье - номер 7.

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );      // вторник, выведет 2


function getLocalDay(date) {

  var day = date.getDay();

  if ( day == 0 ) { // день 0 становится 7
    day = 7; 
  }
  
  return day;
}

alert( getLocalDay(new Date(2014,10,17)) );  // 7
    
/*-------------------------------------------------------------------------------*/

Какое число месяца было 100 дней назад? Какой день недели?

Используйте JavaScript, чтобы вывести эту информацию. 
День недели выводите двухбуквенном виде, т.е. одно значение из (пн, вт, ср, …,вс).

function getWeekDay(date) {
  var days = ['вс','пн','вт','ср','чт','пт','сб'] ;

  return days[ date.getDay()];
}
var date = new Date(2014, 10, 17);
date.setDate( date.getDate() - 100 );
alert(date)
alert( getWeekDay(date) );  

И еще

Создадим текущую дату и вычтем 100 дней:

var d = new Date;
d.setDate( d.getDate() - 100 );

alert( d.getDate() ); 

var dayNames = ['вс','пн','вт','ср','чт','пт','сб'];
alert( dayNames[d.getDay()] );

Объект Date авто-исправит себя и выдаст правильный результат.

Обратите внимание на массив с именами дней недели. «Нулевой» день — воскресенье.

/*-------------------------------------------------------------------------------*/
Напишите функцию getLastDayInMonth(year, month), которая возвращает последний день месяца.

Параметры:

year — 4-значный год, например 2012.
month — месяц от 0 до 11.
Например, getLastDayInMonth(2012, 1) = 29 (високосный год, февраль).

Решение:
function getLastDayInMonth(year,month){
    var date=new Date();
    date.setFullYear(year,month+1,0);
      return date.getDate()
}
alert(getLastDayInMonth(2015,5))

/*-------------------------------------------------------------------------------*/
Напишите код, который выводит:

Сколько секунд прошло с начала сегодняшнего дня.
Сколько осталось до конца дня.
Скрипт должен работать в любой день, т.е. в нём не должно быть конкретного значения сегодняшней даты.

Кол-во секунд прошедшего дня
var date = new Date();
alert( date.getHours()*3600+date.getMinutes()*60+date.getSeconds())
Кол-во секунд до конца дня 

var date = new Date();
alert( 86400-(date.getHours()*3600+date.getMinutes()*60+date.getSeconds()))

И еще вариант

Первая часть.

Для вывода достаточно сгенерировать date, соответствующий началу дня, т.е. «сегодня» 00 часов 00 минут 00 секунд.

Разница между текущей датой и началом дня — это количество миллисекунд от начала дня. Его можно легко перевести в секунды:

var now = new Date();

// создать объект из текущей даты, без часов-минут-секунд
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

var diff = now - today; // разница в миллисекундах
alert( Math.round(diff / 1000) ); // перевести в секунды
Вторая часть
Для получения оставшихся до конца дня секунд нужно из «завтра 00ч 00мин 00сек» вычесть текущее время.

Чтобы сгенерировать «завтра», нужно увеличить текущий день на 1:
var now = new Date();

// создать объект из даты, без часов-минут-секунд
var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

var diff = tomorrow - now; // разница в миллисекундах
alert(tomorrow)
alert( Math.round(diff / 1000) ); // перевести в секунды
/*-------------------------------------------------------------------------------*/
Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

Например:

var d = new Date(2011, 0, 30); // 30 января 2011
alert( formatDate(d) ); // '30.01.11'
P.S. Обратите внимание, ведущие нули должны присутствовать, 
то есть 1 января 2011 должно быть 01.01.11, а не 1.1.11.


function formatDate(date){
var yearday=date.toString();
var month=date.getMonth();
if(month>=0&&month<=10){
   month=month+1
}
if (month=='0'){
  month='01';
}
if (month<10){
  month='0'+month;
}
var format=(yearday.slice(8,10)+'.'+month+'.'+yearday.slice(13,16));

return format
}

var d=new Date(2014,10, 28)
alert(formatDate(d));

И еще

function formatDate(date) {

  var dd = date.getDate()
  if ( dd < 10 ) dd = '0' + dd;

  var mm = date.getMonth()+1
  if ( mm < 10 ) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if ( yy < 10 ) yy = '0' + yy;

  return dd+'.'+mm+'.'+yy;
}

var d = new Date(2011, 0, 30);  // 30 Jan 2011
alert( formatDate(d) );  // '30.01.11'


/*-------------------------------------------------------------------------------*/

Напишите функцию formatDate(date), которая форматирует дату date так:

-Если со времени date прошло менее секунды, то возвращает "только что".
-Иначе если со времени date прошло менее минуты, то "n сек. назад".
-Иначе если прошло меньше часа, то "m мин. назад".
-Иначе полная дата в формате "дд.мм.гг чч:мм".

Например:

function formatDate(date) { /* ваш код */ }

alert( formatDate( new Date(new Date - 1) ) ); // "только что"

alert( formatDate( new Date(new Date - 30*1000) ) ); // "30 сек. назад"

alert( formatDate( new Date(new Date- 5*60*1000) ) ); // "5 мин. назад"

alert( formatDate( new Date(new Date - 86400*1000) ) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
Решение

function formatDate(date){

var dd = date.getDate()

if ( dd < 10 ) dd = '0' + dd;

var mm = date.getMonth()+1

if ( mm < 10 ) mm = '0' + mm;

var yy = date.getFullYear() % 100;

if ( yy < 10 ) yy = '0' + yy;

var hh=date.getHours();

var mi=date.getMinutes();

var day= dd+'.'+mm+'.'+yy+' '+hh+':'+mi;

if ((new Date()-date)<30 ){

return("Just now")

}

if ((new Date()-date)<60000){

return((new Date().getSeconds()-date.getSeconds())+" seconds ago")

}

if ((new Date()-date)<3600000){

return((new Date().getMinutes()-date.getMinutes())+" minutes ago")

}

if ((new Date()-date)<=86400000){

return day;

}

}

alert( formatDate( new Date(new Date - 1) ) );

alert( formatDate( new Date(new Date - 30*1000) ) );

alert( formatDate( new Date(new Date- 5*60*1000) ) )

alert( formatDate( new Date(new Date - 86400000) ) )

and one


function formatDate(date) {
  var diff = new Date() - date; // разница в миллисекундах
  
  if (diff < 1000) { // прошло менее 1 секунды
    return 'только что';
  }

  var sec = Math.floor( diff / 1000 ); // округлить diff до секунд
  
  if (sec < 60) {
    return sec + ' сек. назад';
  }
  
  var min = Math.floor( diff / 60000 ); // округлить diff до минут
  if (min < 60) {
    return min + ' мин. назад';   
  }

  // форматировать дату, с учетом того, что месяцы начинаются с 0
  var d = date;
  d = ['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(), '0'+d.getHours(),'0'+d.getMinutes() ];
  for(var i=0; i<d.length; i++) {
    d[i] = d[i].slice(-2);
  }

  return d.slice(0,3).join('.')+' '+d.slice(3).join(':');
}

alert( formatDate( new Date( new Date - 1) ) ); // только что 

alert( formatDate( new Date( new Date - 30*1000) ) ); // 30 сек. назад

alert( formatDate( new Date( new Date- 5*60*1000) ) ); // 5 мин. назад

alert( formatDate( new Date( new Date - 86400*1000) ) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"



/*-------------------------------------------------------------------------------*/

Функция с вызовом на месте - это объявление функции за которым сразу же идет ее вызов. 

(function() {
    alert('hello, world!'); 
})();
В этой части мы объявляем функцию:

(function() {
    alert('hello, world!'); 
})

В этой части вызвали ее:

()

/*-------------------------------------------------------------------------------*/
Слово "правильно" не совсем корректно. Просто интерпретатор идет сверху вниз и исполняет написанные команды.
 Причем функции, объявленные как Function Declaration и объявления переменных с var
(просто объявления, без каких-либо действий) 
читаются до начала исполнения кода. 
Вот тут как раз функции и "главнее" чем var. А потом начинает выполнятся код сверху-вниз. 
В процессе выполнения, естественно все может поменяться:

/*-------------------------------------------------------------------------------*/

Функиции созданные внутри функции
Внимание на параметр в виде объекта

function sayHi(person) {
  
  var message = makeMessage(person);
  alert( message );
  alert(typeof person);
  // ----- вспомогательные функции -----

  function getHello(age) {
    return age >= 18 ? 'Здравствуйте' : 'Привет';
  }

  function makeMessage(person) {
    return getHello(person.age) + ', ' + person.name;
  }  
}

sayHi({
  name: 'Петька',
  age: 17
}); // привет, Петька

/*-------------------------------------------------------------------------------*/

В примере ниже makeCounter создает функцию, которая считает свои вызовы:

function makeCounter() {
  var currentCount = 0;
    
  return function() {
    currentCount++;
    return currentCount;
  };
}

var counter = makeCounter();

// каждый вызов увеличивает счётчик
counter(); 
counter(); 
alert( counter() ); // 3


/*-------------------------------------------------------------------------------*/
Добавим счётчику аргумент, который, если передан, устанавливает значение:

function makeCounter() {
  var currentCount = 0;
    
  return function(newCount) {
    if (newCount !== undefined) { // есть аргумент?
      currentCount = +newCount; // сделаем его новым значением счётчика
      // вернём текущее значение, счётчик всегда возвращает его (это удобно)
      return currentCount;
    }

    currentCount++;
    return currentCount;
  };
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter(3) ); // 3
alert( counter() ); // 4



/*-------------------------------------------------------------------------------*/
Функция  возвращает  объект. Обратить внимание на то как можно к ней обратитться снизу - через точку и название  свойства объеката.
function makeCounter() {
  var currentCount = 0;
    
  return {
    getNext: function() {  
      return ++currentCount;
    },
 
    set: function(value) {  
      currentCount = value;
    },

    reset: function() {
      currentCount = 0;
    }
  };
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
counter.set(5); 
alert( counter.getNext() ); // 2

counter.reset();
alert( counter.getNext() ); // 1


/*-------------------------------------------------------------------------------*/

function makeCounter() {
  var currentCount = 0;
    
  // возвращаемся к функции
  function counter() {  
    return ++currentCount;
  }

  // ...и добавляем ей методы!
  counter.set = function(value) {  
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 0;
  };

  return counter;
}

var counter = makeCounter();


alert( counter() ); // 1
alert( counter() ); // 2

counter.reset();
alert( counter() ); // 1

/*-------------------------------------------------------------------------------*/
Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

Да, именно так, через двойные скобки (это не опечатка). Например:

sum(1)(2) = 3
sum(5)(-1) = 4

Чтобы вторые скобки в вызове работали - первые должны возвращать функцию.

Эта функция должна знать про a и уметь прибавлять a к b. Вот так:

  function sum(a) {

  return function(b) { 
    return a + b;  // возьмет a из внешнего LexicalEnvironment
  };

}

alert( sum(1)(2) );
alert( sum(5)(-1) );

/*-------------------------------------------------------------------------------*/

Да много чего дается. Для начала - преобразование типов. Могут поспрашивать по фреймверкам, 
но это уже более специфично. 
Могут спросить по паттернам проектирования(декоратор, фабрика, фасад, синглтон и прочие).
Но обычно основополагающими вещами
при принятии решений являются аккаунт на гитхабе/битбакете или собственные проекты.
Могут спросить в каких командах работал и что делал.

/*-------------------------------------------------------------------------------*/

Создайте функцию filter(arr, func), которая получает массив arr и 
возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: inBetween(a,b) — «между a,b», inArray([...]) — «в массиве [...]».
Использование должно быть таким:
filter(arr, inBetween(3,6)) — выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) — выберет только элементы, совпадающие с одним из значений массива.
Пример, как это должно работать:



/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];

alert( filter(arr, function(a) { return a % 2 == 0 }) ); // 2,4,6



alert( filter(arr, inArray([1,2,10])) ); // 1,2


Решение 1
function filter(arr, func) {
  var result = [];

  for(var i=0; i<arr.length; i++) {
    var val  = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert( filter(arr, function(a) { return a % 2 == 0; }) ); // 2, 4, 6

/*-------------------------------------------------------------------------------*/
alert( filter(arr, inBetween(3,6)) ); // 3,4,5,6

Решение

function filter(arr, func) {
  var result = [];

  for(var i=0; i<arr.length; i++) {
    var val  = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}


function inBetween(a, b) {
  return function(x) {
    return x >=a && x <= b;
  };
}


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert( filter(arr, inBetween(3,9)) ); // 3,4,5,6

/*-------------------------------------------------------------------------------*/
function filter(arr, func) {
  var result = [];

  for(var i=0; i<arr.length; i++) {
    var val  = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}


function inArray(arr) {
  return function(x) {
    return arr.indexOf(x) != -1;
  };
}


var arr = [1, 2, 3, 4, 5, 6, 7];
alert( filter(arr, inArray([1,2,10])) ); // 1,2


/*-------------------------------------------------------------------------------*/

В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения.
 Его функционал состоит из двух возможностей:
1.	Добавить значение в буфер.
2.	Получить текущее содержимое.
Задача — реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
•	Создание объекта: var buffer = makeBuffer();.
•	Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) 
добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() — возвращает его.
Вот пример работы:
function makeBuffer() { /* ваш код */ }

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания'); 
buffer(' Использовать'); 
buffer(' Нужно!'); 

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!


Решение

	function makeBuffer(){
		var bufferValue='';

		return function(newValue){
			if (newValue===undefined) {
			return bufferValue;
		  }
		 return bufferValue+=newValue;
		};
	};
	var buffer=makeBuffer();
    buffer(0); 
	buffer(1); 
	buffer(0); 
	alert( buffer() ); //
И еще
function makeBuffer() {
    var arr = new Array();
    return function (param) {
        if (param !== undefined) arr.push(param);
        return arr.join("");
    };
};
var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert(buffer());
/*-------------------------------------------------------------------------------*/

Будет ли работать доступ к переменной name через замыкание в примере ниже?
Удалится ли переменная name из памяти при выполнении delete donkey.sayHi? 
Если нет — можно ли к name как-то обратиться после удаления donkey.sayHi?
А если присвоить donkey.sayHi = donkey.yell = null — останется ли name в памяти?

var makeDonkey = function() {
   var name = "Ослик Иа";

   return {
       sayHi: function() {
         alert(name);
       },
       yell: function() {
         alert('И-а, и-а!');
       }
   };
}

var donkey = makeDonkey();
donkey.sayHi();
Решение
1.	Да, будет работать, благодаря ссылке [[Scope]] на внешний объект переменных, которая будет присвоена функциям sayHi и yell при создании объекта.
2.	Нет, name не удалится из памяти, поскольку несмотря на то, что sayHi больше нет, есть ещё функция yell, которая также ссылается на внешний объект переменных. Этот объект хранится целиком, вместе со всеми свойствами.
При этом, так как функция sayHi удалена из объекта и ссылок на нее нет, то больше к переменной name обращаться некому. Получилось, что она «застряла» в памяти, хотя, по сути, никому не нужна.
3.	Если и sayHi и yell удалить, тогда, так как больше внутренних функций не останется, удалится и объект переменных вместе с name.
Разьяснение к 3 пункту

Переменной name присваивается значение при вызове функции makeDonkey. Функция makeDonkey возращает объект с двумя методами, ссылка на который присваивается переменной donkey, а переменная name при этом попадает в замыкание. Но если удалить оба метода из этого созданного объекта, то вместе с ними удалятся и замыкания, которые они создали т.к. замыкание происходит из-за того, что функции ссылаются на внешний объект переменных, в котором и сохраняется name. Если удалить обе функции, то ссылаться на этот внешний объект будет некому, а объект на которые нет ни одной ссылки удаляется из памяти сборщиком мусора. Естественно если потом опять вызвать функцию makeDonkey, то она создаст новый объект и новое замыкание, в котором будет новая переменная name.


/*-------------------------------------------------------------------------------*/
Здесь в переменную g записывается не ссылка на функцию f, а результат ее вызова. В данном случае, этим результатом является локальная функция g(), имеющая доступ ко всем локальным переменным и функциям, объявленным внутри f.
/*-------------------------------------------------------------------------------*/
Почему в данном примере функция вызывается с двумя парными скобками getFunc()();
var a = 1;
function getFunc() {
  var a = 2;
  var func = new Function('', 'alert(a)');  
  return func;
}
getFunc()(); // 1, из window

Потому что getFunc() возвращает код функции func, вот тут: return func.
(код функции - это я так образно говорю, на самом деле возвращается анонимная функция и ссылка на неё лежит в переменной func)
Получается когда вы вызываете getFunc() вам возвращается код функции func, а не её результат, так как при возврате через return функция func возвращается без скобок.
И теперь вы можете вызвать функцию func так как ссылку на нее вам вернула функция getFunc() так же через скобки: getFunc()()
Так если просто вызвать alert( getFunc() ) то вы увидите как раз код функции func.
p/s.
Функция - это значение: learn.javascript.ru/function-i... 
Особенно важная тема там это: Копирование функций.
/*-------------------------------------------------------------------------------*/

Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:
function makeArmy() {

  var shooters = [];

  for(var i=0; i<10; i++) {
    var shooter = function() { // функция-стрелок
      alert(i); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

Что происходит в этом коде
Функция makeArmy делает следующее:
1.	Создаёт пустой массив shooter:
var shooters = [];
2.	В цикле заполняет массив элементами через shooter.push.
При этом каждый элемент массива — это функция, так что в итоге после цикла массив будет таким:

shooters = [
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); },
  function () { alert(i); }
];

1.	Вызов army[5]() — это получение элемента массива (им будет функция) на позиции 5, и тут же — её запуск.
2.	Почему ошибка
3.	Вначале разберемся, почему все стрелки выводят одно и то же значение.
4.	В функциях-стрелках shooter отсутствует переменная i. Когда такая функция вызывается, то i она берет из внешнего LexicalEnvironment…
5.	Каким будет значение i?
6.	К моменту вызова army[0](), функция makeArmy уже закончила работу. Цикл завершился, последнее значение было i=10.
7.	В результате все функции shooter получают одно и то же, последнее, значениеi=10.
8.	Попробуйте исправить проблему самостоятельно
Есть несколько способов исправить ситуацию.
1.	Первый способ исправить код - это привязать значение непосредственно к функции-стрелку:
function makeArmy() {
  var shooters = [];
 for(var i=0; i<10; i++) {
    var shooter = function me() {
      alert( me.i ); 
    };
    shooter.i = i;
    shooters.push(shooter);    
  }
  return shooters; 
}
var army = makeArmy();
army[0](); // 0
army[1](); // 1

На alert( me.i ) ничего не создается, там идет код тела функции ( alert(me.i) ), этот код будет выполнен в момент запуска функции, т.е. уже когда будут вызываться функции из массива. me - это имя самой функции (объекта функции), доступное через NFE. Т.е. в алерте функция будет обращаться сама к себе и в своем объекте искать свойство i. А вот ниже уже идет присваивание shooter.i = i; Вот оно как раз и записывается в объект функции свойство i равное текущему значению счетчика цикла i. Потому что shooter - это ссылка на функцию (и соответственно объект функции) из внешнего кода, а me - это ссылка уже изнутри функции.

Другое, более продвинутое решение —- использовать дополнительную функцию для того, чтобы «поймать» текущее значение i:
function makeArmy() {
  var shooters = []
  for(var i=0; i<10; i++) {
    var shooter = (function(x) {
      return function() {
        alert( x ); 
      };

    })(i);
    shooters.push(shooter);   
  }

  return shooters; 
}
var army = makeArmy();
army[0](); // 0
army[1](); // 1
Посмотрим выделенный фрагмент более внимательно, чтобы понять, что происходит:
var shooter = (function(x) {
  return function() {
    alert( x ); 
  };
})(i);
Функция shooter создана как результат вызова промежуточного функционального выражения function(x), которое объявляется — и тут же выполняется, получая x = i.
Так как function(x) тут же завершается, то значение x больше не меняется. Оно и будет использовано в возвращаемой функции-стрелке.
Для красоты можно изменить название переменной x на i, суть происходящего при этом не изменится:
var shooter = (function(i) {
  return function() {
    alert( i ); 
  };
})(i);
В момент создания функции, она запоминает контекст (лексическое окружение) в котором была создана (объект LexicalEnvironment) и получает ссылку на него ([[Scope]]). Таким образом, функция может обращаться к другим функциям и переменным созданым в своем лексическом окружении.
var shooter = (function(x) {
    return function() {
        alert( x ); 
    };
})(i);
В данном случае каждая внутренняя функция, попадающая в массив shooter, получает свое уникальное лексическое окружение и сохраняет на него ссылку в [[Scope]]. Переменная x берется из этого окружения, которая получает текущее значение i в момент своего создания, так как функция-обертка вызывается на месте.




3 Еще один забавный способ - обернуть весь цикл во временную функцию:
function makeArmy() {
  var shooters = [];
  for(var i=0; i<10; i++) (function(i) {
    var shooter = function() {
      alert( i ); 
    };
    shooters.push(shooter); 
  })(i);
  return shooters; 
}
var army = makeArmy();
army[0](); // 0
army[1](); // 1


И еще варианты
  function makeArmy() {
          var arr = [];
          function arrNum(x) {
              var shooter = function() {
                  alert(x);
              };
              arr.push(shooter);
          }
          for (var i = 0; i < 10; i++) {
              arrNum(i);
          }
          return arr;
      }
      var army = makeArmy();
      army[0]();
      army[5]();

И еще
			function makeArmy() {
				var shooters = [];
				function help(callMe) {
					for(var key in callMe) {
						if(callMe[key] == true) return key;
					}
				}	
				for(var i=0; i<10; i++) {
					var shooter = function callMe() {
					alert(help(callMe)); 
					};
					shooter[i] = true;
					shooters.push(shooter);
				}			
				return shooters;
			}
			var army = makeArmy();
			army[0](); 
			army[5]()

Еще что-то наподобие
// Эта функция возвращает функцию, которая всегда возвращает v 
function makeArmy(v) {
 return function shooter () { 
 	alert(v) }; 
 } 
// Создать массив функций-констант: 
var shooters = []; 
for(var i = 0; i < 10; i++){
	shooters[i] = makeArmy(i);
} 


// Функция в элементе массива с индексом 5 возвращает 5. 
shooters[5]() // => 5




/*-------------------------------------------------------------------------------*/
var NFESupport = (function() {
  var NFETest = {};
  //создаем функцию c NFE
  var test = function NFETest(){ return NFETest };
  //передаем ссылку на нее в другую переменную
  var newFuncVar = test;
  test = null;
  //пробуем запустить функцию по NFE имени
  try {
    NFETest();
  } catch(e) {
    //если при запуске функции произошла ошибка
    //и функция правильно ссылается на объект то NFE работает
    if (newFuncVar() === newFuncVar) return true;
  }
  //если вполнение дошло до сюда, то NFE не работает
  return false;
})();
//выводим результат
alert(NFESupport);

/*-------------------------------------------------------------------------------*/
Функция с буфером
function makeBuffer() {
  var buff = [];
  return function (val) {
   if (val !== undefined) {
   buff.push(val);
   } else {
     return buff;
     }
  }
}

var buffer = makeBuffer();

buffer('Замыкания'); 
buffer(' Использовать'); 
buffer(' Нужно!'); 

alert( buffer() );
/*-------------------------------------------------------------------------------*/
Про Модули:
Ну вот мы делаем тут наши замечательные задачи, и практически в каждой встречаются переменные arr, obj и т.д. Представьте себе большой проект. Вы уверены, что когда будете придумывать очередную переменную для изменения поведения какого-нибудь слайдера в сто десятый раз, что эта переменная уже где-то не использовалась ранее и не хранит ли она что-то полезное, что может понадобиться другой функции? Конечно глобальные переменные можно и нужно использовать как можно реже и прятать их замыканиях. Но тогда точно такая же проблема появляется для названий функций. А если над проектом трудится несколько человек? Что каждый раз нужно проглядывать весь код, чтобы случайно чего-то не испортить? Вот для этого и нужны модули. Логика на уровне модуля описывается функциями, переменные прячутся в замыканиях, а потом весь модуль оформляется и это скрывает все что есть в модуле от остальных модулей. Модули становятся независимыми. Остаются только "хвосты" - свойства модулей, которые мы специально оставили, чтобы ими управлять. Поэтому ошибка на уровне модуля в нем и останется, а не вызовет "каскадный резонанс" всего скрипта :)

Самый простой вариант использования модуля - это изолировать какой-то самодостаточный код от всего остального кода. Предположим вы нарисовали такую красивую карусель. Вы ее разработали, она замечательно у вас крутится на пустой страничке, и теперь ее надо добавить на какую-то существую страницу. Помимо переноса html и css, необходимо также перенести и ваш javascript. Но на этой страничке уже есть какой-то код. Чтобы случайно не перезаписать уже существующие переменные и функции при совпадении имен, вы оборачиваете весь свой javascript в анонимную функцию и создаете модуль. Ваш модуль полностью самодостаточен, кнопки управления каруселью завязаны на ваш html, ничего внутрь вашего модуля передавать не надо и получать другому коду от него тоже нечего. Поэтому ваша функция-обертка ничего не возвращает, как в первом варианте главы про модули.
Другой случай, это создание библиотеки. К примеру, вы написали несколько полезных и удобных для вас функций. Естественно вы захотите их использовать и в дальнейших проектах. Можно просто их копировать как есть, но опять же нужно следить, чтобы таких названий функций у вас не встречалось больше одного раза. Гораздо удобнее сделать библиотеку - создать функцию-обертку и вернуть в ней объект содержащий ваши функции, как это было описано в последнем примере. Обращаться к таким функциям всегда удобно. Если имя вашей библиотеки MyLib, а искомой функции searchInArray(), то вызвать такую функцию можно MyLib.searchInArray(). В дальнейшем можно расширять эту библиотеку, добавляя новые функции, исправляя ошибки в существующих, увеличивая производительность и т.д. Делать это в рамках библиотеки гораздо удобнее, чем заботиться о всех функциях по отдельности.
Еще более сложный вариант применения модулей - это выделить какой-то существенный логический блок вашей программы и завернуть его в модуль. В данном случае модуль может содержать и некие данные, и методы, их обрабатывающие. Это очень похоже на объект, только гибче. Хорошей иллюстрацией правильного применения такого модуля является выражение, которое звучит примерно так: "не надо управлять ногами собаки, покажите куда ей идти, и она сама управится со своими ногами". Как и в случае с библиотекой, ваша функция-обертка возвращает объект с функциями. Но в этом случае деятельность функций направлена не наружу, а внутрь модуля. Вы отдаете высокоуровневые приказы модулю. К примеру, хотите маршрут до ближайшего кафе от текущего места расположения и вызываете MyMod.getRouteToNearestCafe(). А MyMod сам уже заботится о том, чтобы получить координаты того, где вы сейчас находитесь, где находится ближайшее кафе и возвращает готовый маршрут, в общем занят всей низкоуровневой работой.
Дальше-больше, модули могут общаться между собой через методы объекта, который возвращает функция-обертка (это то что я назвал "хвостами" :-) ). При этом сами модули могут делиться на подмодули, а те на еще более мелкие подмодули, если это необходимо. Получается древовидная структура. Преимущества от такого подхода (при разумном использовании конечно) очевидны - такие модули легче поддерживать, легче переносить из проекта в проект, программа легче читается. Это при условии, что имена у модулей осмыслены, они не занимаются несвойственными им задачами, и соблюдается четкая иерархическая структура (не лезут через голову начальства к подмодулям другого модуля к примеру).


значит модуль это функция обертка в нутри которой другие функции изолированные от всего остального к которым можно обратиться только через модуль, например
var MyLibrary = (function() {
function helper() { ... }
return {
createMenu: function() { ... },
createDialog: function() { ... }
};
})();
// использование
MyLibrary.createMenu();
где
var MyLibrary
переменная для обращение к модулю, а
MyLibrary.createMenu();
вызов метода которой записан в модуле?


Правильно. При этом, если вам не нужно обращаться к модулю из внешнего кода, то правильнее будет, чтобы функция-обертка ничего не возвращала. Тогда такой код будет полностью защищен от внешнего влияния.
/*-------------------------------------------------------------------------------*/
хороший пример кода который дает легко понять замыкания(на мой взгляд)
function makeAdder(x) {
return function(y) {
return x + y;
};
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
/*-------------------------------------------------------------------------------*/
Создайте счётчик, который вместо замыкания использует статическую переменную для хранения currentCount.
Код счётчика, работающий через замыкание (для переделки):
function makeCounter() {
  // currentCount можно считать "статической переменной" счётчика  
  var currentCount = 0; 

  return function() {
    currentCount++;
    return currentCount;
  };
}

Важно: счётчики должны быть независимыми:
var c1 = makeCounter();
var c2 = makeCounter();

alert( c1() ); // 1
alert( c2() ); // 1
alert( c1() ); // 2

Решение
function makeCounter() {
  return function f() {
    if (!f.currentCount) {
      f.currentCount = 0;
    }

    return ++f.currentCount;
  };
}

var c1 = makeCounter();
var c2 = makeCounter();

alert( c1() ); // 1
alert( c2() ); // 1
alert( c1() ); // 2 
Побочный эффект — текущее значение счётчика теперь доступно снаружи через свойство функции:
var counter = makeCounter();

counter();
alert( counter.currentCount ); // 1

Принцым работы:

1) Создается функция makeCounter типа Function Declaration
2) Когда выполнение основного кода доходит до var c1 = makeCounter(), запускается makeCounter
3) сразу после запуска она возвращает функцию f() которая присваивается переменной c1. То есть переменной c1 присваивается результат работы makeCounter(), - функция f() (но она еще не выполняется, а просто присваивается).
4) При этом внутренняя функция имеет имя f, то есть по - сути является локальной переменной функции makeCounter (это объясняет независимость счетчиков: f - локальная переменная, а значит создается заново при каждом присвоении makeCounter() какой - либо переменной).
5) Теперь по - сути у нас c1 ссылается на f(), которая при запуске ( c1() ); меняется свойство currentCount функции f.

Проверка наличия LE у данной функции
Немного переписал код:

function makeCounter() {

//Проверка:
alert(u); // ввёл новую переменную. alert выдаст undefined, т.к. u определена до выполнения makeCounter (см. строку ниже), но на этом этапе кода ещё не инициализирована

var u=5; //инициализация u (Флэнаган называет инициализацией именно присвоение значения, а не объявление переменной, как некоторые пишут)

alert(f); //переменную u выше я ввёл специально, дабы показать: если переменная или FD выявлены на этапе сканирования ф-ции (до исполнения), ошибка не генерируется. Однако этот алерт не сработает: "Uncaught ReferenceError: f is not defined". Выходит, на этапе скана f обнаружена не была.
return function f() {
if (!f.currentCount) {
f.currentCount = 0;
}
return ++f.currentCount;
}; 
};
makeCounter();
Мне кажется, причина в этом: "Если же function идёт в составе более сложного выражения, то он считает, что это Function Expression." В данном случае выражение сложное ввиду присутствия return. Так что, если быть точнее, это, похоже, NFE.
Поправьте кто-то, если не прав.

Счетчики независимы так как:





/*-------------------------------------------------------------------------------*/
var sayHi = (function() {
var count = 0; // статическая переменная
return function() {
count++;
alert("Привет " + count);
};
})();
sayHi(); // Привет 1
sayHi(); // Привет 2


Ты используешь Function Expression с вызовом "на месте"!!! Результат присваиваешь в sayHi - это внутренняя возвращаемая функция - та, которая увеличивает счетчик и выводит его значение. Когда ты пишешь: sayHi(), то ты вызываешь не "наружную" ф-цию, а вложенную. Соответственно sayHi все время ссылается на "временный объект переменных" и он никуда не девается.
Собственно, классический пример использования замыкания.
P.S. Вот если бы в конце кода не было скобок вызова на месте, тогда другое дело.
/*-------------------------------------------------------------------------------*/
Как в функции отличить отсутствующий аргумент от undefined?
function f(x) { 
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0
Решение
Узнать количество реально переданных аргументов можно по значению arguments.length:
function f(x) {
  alert(arguments.length ? 1 : 0);
}

f(undefined);
f();

/*-------------------------------------------------------------------------------*/
Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2 ,3) = 6
sum(1, 2, 3, 4) = 10
Решение
function sum() {
  var result = 0;

  for(var i=0; i<arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

alert( sum() ); // 0
alert( sum(1) ); // 1
alert( sum(1, 2) ); // 3
alert( sum(1, 2, 3) ); // 6
alert( sum(1, 2, 3, 4) ); // 10
/*-------------------------------------------------------------------------------*/
Вариант рекурсией
function makeClone(obj) {
	var arg = arguments;

	function copyArg(n) {		

	for(key in arg[n]) {
	obj[key] = arg[n][key];
	}

	return (n > 1) ? copyArg(n-1) : obj;
	}

	return copyArg(arg.length-1);
}
/*-------------------------------------------------------------------------------*/
При объявлении функции ты задаешь ее параметры, при вызове передаешь ей аргументы.
/*-------------------------------------------------------------------------------*/
Гибкость JS
Круглые скобки означают, что необходимо выполнить код функции, на который ссылается переменная (т.е. имя функции). Если бы было записано getFunc(), то результатом ее выполнения был бы возврат (return) функции func. Так как именно это и делает функция getFunc. А нам же нужен результат этой функции func, для этого мы добавляем еще одни круглые скобки, и получаем исполнение того, что вернула getFunc. Вообще синтаксис Javascript очень гибкий. Всегда смотрите что возвращает та или иная функция или конструкция. К примеру следующая запись вполне себе правильная:
func1()[1]()()[key]();
Она означает исполни функцию func1, которая вернет тебе массив. В нем возьми элемент 1, это будет функция. Исполни ее, она вернет тебе код другой функции. Исполни и ту функцию тоже. Эта функция вернет тебе объект. В этом объекте под ключом, хранящимся в переменной key, есть код функции. Вот ее тоже надо выполнить и вернуть ее результат. Все, можно выдохнуть :)

/*-------------------------------------------------------------------------------*/
Есть объект «лестница» ladder:
var ladder = {
  step: 0,
  up: function() {  // вверх по лестнице
    this.step++;
  },
  down: function() {  // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert(this.step);
  }
};
Сейчас работать с ним скучно:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Модифицируйте код, чтобы вызовы можно было делать цепочкой, вот так:
ladder.up().up().down().up().down().showStep();  // 1
Такой подход используется, например, во фреймворке jQuery.
Решение состоит в том, чтобы каждый раз возвращать текущий объект. Это делается добавлением return this в конце каждого метода:
var ladder = {
  step: 0,
  up: function() { 
    this.step++; 
    return this;
  },
  down: function() { 
    this.step--; 
    return this;
  },
  showStep: function() { 
    alert(this.step); 
    return this;
  }
}

ladder.up().up().down().up().down().showStep();  // 1

Здесь тонкий юмор. Функция может что-то считать (в данном случае она меняет какое-то свойство объекта ladder) и что-то возвращать (и не обязательно, то что посчитала). Здесь функция возвращает свой же объект ladder, получается: 
ladder.up().up().down().up().down().showStep().
 После выполнения ladder.up() возвращается ladder, дальше выполняется следующий ladder.up(), который тоже возвращает ladder и так далее по цепочке до конца.

/*-------------------------------------------------------------------------------*/
Напишите функцию-конструктор Summator, которая создает объект с двумя методами:
•	sum(a,b) возвращает сумму двух значений
•	run() запрашивает два значения при помощи prompt и выводит их сумму, используя метод sum.
В итоге вызов new Summator().run() должен спрашивать два значения и выводить их сумму, вот так:
Следует ли в вызове run сохранять введённые значения как свойства объекта?
При этом метод sum() будет без параметров, и обращения в нём будут к this.a, this.b.
Ответ на вопрос
Если a,b будут свойствами — то объект Summator получит «состояние». Их можно будет использовать в других функциях этого же объекта.
В данном случае это, скорее, полезно. С другой стороны, поток управления примитивнее, проще, если a,b — локальные переменные. А проще — это хорошо.
Окончательный выбор делается в зависимости от дальнейших планов. Если имеет смысл сохранить эти переменные как состояние и использовать, то пусть будут свойства.
Код  решение
function Summator() {

  this.sum = function(a, b) {
    return a + b;
  };

  this.run = function() {
    var a = +prompt('a?', 0); // преобразовать в число при вводе данных
    var b = +prompt('b?', 0);
    alert( "sum=" + this.sum(a,b) );
  };
}
new Summator().run();




Объяснение
 Если бы локальная переменная была объявлена непосредственно в теле конструктора, тогда да - все функции внутри конструктора имели бы к ней доступ, так же, как и к св-ву объекта. Но a и b, как локальные переменные, объявлены внутри вложенной ф-ции в конструкторе. Внутри метода. И тогда получается, что доступ к ним имеет только эта функция-метод. А другие, соседние функции-методы, не имеют. В отличии от св-в объекта. К ним имеют доступ все методы.

Еще вариант

function Summator() {
  this.run=function(){
    this.a=+prompt('a',0);
    this.b=+prompt('b',0);
    alert(this.sum())
  }
    this.sum=function(){
    return this.a+this.b;  
  }
}
  new Summator().run();

/*-------------------------------------------------------------------------------*/
Создайте объект calculator с тремя методами:
•	readValues() запрашивает prompt два значения и сохраняет их как свойства объекта
•	sum() возвращает сумму двух значений
•	mul() возвращает произведение двух значений
var calculator = { 
  ... ваш код...
}

calculator.readValues();
alert( calculator.sum() );
alert( calculator.mul() );

Решение
var calculator = {
  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  readValues: function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}

calculator.readValues();
alert( calculator.sum() );
alert( calculator.mul() );
/*-------------------------------------------------------------------------------*/


/*-------------------------------------------------------------------------------*/
Есть объект «лестница» ladder:
var ladder = {
  step: 0,
  up: function() {  // вверх по лестнице
    this.step++;
  },
  down: function() {  // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert(this.step);
  }
};
Сейчас работать с ним скучно:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Модифицируйте код, чтобы вызовы можно было делать цепочкой, вот так:
ladder.up().up().down().up().down().showStep();  // 1
Такой подход используется, например, во фреймворке jQuery.
Решение
var ladder = {
  step: 0,
  up: function() { 
    this.step++; 
    return this;
  },
  down: function() { 
    this.step--; 
    return this;
  },
  showStep: function() { 
    alert(this.step); 
    return this;
  }
}

ladder.up().up().down().up().down().showStep();  // 1
/*-------------------------------------------------------------------------------*/
Возможны ли такие функции A и B в примере ниже, что соответствующие 
объекты a,b равны (см. код ниже)?
Решение
function A() { ... }
function B() { ... }

var a = new A;
var b = new B;

alert( a == b ); // true
Если да — приведите пример кода с такими функциями.

Решение
Да, возможны.
Они должны возвращать одинаковый объект. При этом если функция возвращает объект, то this не используется.
Например, они могут вернуть один и тот же объект obj, определённый снаружи:
var obj = {};

function A() { return obj; }
function B() { return obj; }

var a = new A;
var b = new B;

alert( a == b ); // true

/*-------------------------------------------------------------------------------*/
Напишите функцию-конструктор Summator, которая создает объект с двумя методами:
•	sum(a,b) возвращает сумму двух значений
•	run() запрашивает два значения при помощи prompt и выводит их сумму, используя метод sum.
В итоге вызов new Summator().run() должен спрашивать два значения и выводить их сумму, вот так: tutorial/intro/object/summator2New.html
Следует ли в вызове run сохранять введённые значения как свойства объекта?
При этом метод sum() будет без параметров, и обращения в нём будут к this.a,this.b.
Решение. (Ответ на вопрос)
Если a,b будут свойствами — то объект Summator получит «состояние». Их можно будет использовать в других функциях этого же объекта.
В данном случае это, скорее, полезно. С другой стороны, поток управления примитивнее, проще, если a,b — локальные переменные. А проще — это хорошо.
Окончательный выбор делается в зависимости от дальнейших планов. Если имеет смысл сохранить эти переменные как состояние и использовать, то пусть будут свойства.
Решение код 




function Summator() {

  this.sum = function(a, b) {
    return a + b;
  };

  this.run = function() {
    var a = +prompt('a?', 0); // преобразовать в число при вводе данных
    var b = +prompt('b?', 0);
    alert( "sum=" + this.sum(a,b) );
  };
}

new Summator().run();
/*-------------------------------------------------------------------------------*/
Напишите функцию-конструктор Adder(startingValue).
Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
Более формально, объект должен:
•	Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
•	Метод addInput() вызывает prompt, принимает число и прибавляет его к свойству value.
•	Метод showValue() выводит текущее значение value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода addInput(), с учетом начального значенияstartingValue.
По ссылке ниже вы можете посмотреть работу кода:
var adder = new Adder(1); // начальное значение 1
adder.addInput(); // прибавит ввод prompt к текущему значению
adder.addInput(); // прибавит ввод prompt к текущему значению
adder.showValue(); // выведет текущее значение



Решение
function Adder(startingValue) {
  this.value = startingValue;

  this.addInput = function() {
    this.value += +prompt('Сколько добавлять будем?', 0);
  };

  this.showValue = function() {
    alert(this.value);
  };
}

var adder = new Adder(1);
adder.addInput();
adder.addInput();
adder.showValue();
/*-------------------------------------------------------------------------------*/
Можно ли из this.sayHi получить доступ к name из User и при этом обойтись без переименований?
function User(name) {
 
  this.sayHi = function(name) {
    // ваш код... ?
  }
}
Решение
Нет, нельзя.
Локальная переменная полностью перекрывает внешнюю, обращение к ней становится невозможным.

/*-------------------------------------------------------------------------------*/
Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
1.	Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус-.
Пример использования:
var calc = new Calculator;
 
alert(calc.calculate("3 + 7")); // 10
2.	Второй шаг — добавить метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
Например, добавим операции умножить *, поделить / и возвести в степень**:
var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) { return a * b; });
powerCalc.addMethod("/", function(a, b) { return a / b; });
powerCalc.addMethod("**", function(a, b) { return Math.pow(a, b); });

var result = powerCalc.calculate("2 ** 3");
alert(result); // 8

/*-------------------------------------------------------------------------------*/
•	Поддержка скобок и более сложных математических выражений в этой задаче не требуется.
•	Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
•	Предусмотрите обработку ошибок. Какая она должна быть - решите сами.
Решение:
function isNumeric(n) {
return !isNaN(parseFloat(n)) && isFinite(n);
}

function Calculator() {
//объект способный распознавать только вычитание и сложение
//вызов метода осуществляется так: methods["-"](2,4);
var methods = {
"-": function(a, b) {
return a - b;
},
"+": function(a, b) {
return a + b;
}
};
this.calculate = function(str) {
//разбираем приходящую строку типа "2 + 3" на сроки "2","+","3"
var split = str.split(' '), 
a = split[0],
op = split[1],
b = split[2]
//проверяем, чтобы пользователь не вводил чушь
if(!methods[op] || !isNumeric(a) || !isNumeric(b)) {
return NaN;
}
//так как переменная op(операция), содержит строку (типа "+"), то обратиться
//к свойству объекта возможно только через квадратные скобки: methods["+"]
//и передаем параметры a и b
return methods[op](+a, +b);
}
//добавляет новый метод к methods,
//в зависимости от того, которое ввел пользователь (например "/") и 
//сразу присваиваем этому методу функцию, которую также ввел пользователь
//func(function(a, b) {return a / b})
this.addMethod = function(name, func) {
methods[name] = func;
};
}
var calc = new Calculator;
calc.addMethod("*", function(a, b) {
return a * b;
});
calc.addMethod("/", function(a, b) {
return a / b;
});
calc.addMethod("**", function(a, b) {
return Math.pow(a, b);
});
var result = calc.calculate("2 ** 3");
alert(result); // 8
Объяснение:
- Создаеться   объект с двумя методами.
-Этот метод будет записан в создаваемый конструктором объект при вызове конструктора с new. На этот новосозданный объект будет указывать this.
- Строчка  return methods[op](+a, +b):  берется объект methods, у него по ключу, который лежит в свойстве op, выбирается нужный метод и вызывается с аргументами +a и +b и результат возвращается из функции. Т.е. если допустим в функцию calculate передали строку "1 + 5", то это строка разбирается в массив по пробелам и получается массив из 3 элементов: ['1', '+', '5']. Средний элмент массива присваивается переменной op = '+', а переменным a и b присваиваются крайние элементы массива (a = '1', b = '5')
Ну и получается method[op] == method['+'] == та функция, которая присвоена свойству '+' у объекта methods. Собственно эта функция потом вызывается и ей передаются аргументы +a и +b т.е. 1 и 5. Внутри этой функции эти аргументы складываются и она возвращает их сумму, которую return и вернет. 


Можно объявить несколько переменных используя один var, если перечислять их через запятую. Например:
var a = 5;
var b = 10;
аналогично:
var a = 5, b = 10;
Еще вариант
		function Calculator() {
			this['+'] = function(a, b) {
				return a + b;
			}
			this['-'] = function(a, b) {
				return a - b;
			}
			this.addMethod = function(name, func) {
				this[name] = func;
			}
				
			this.calculate = function(str) {
				var arr = str.split(' '); //разобрали строку на массив
					
				return this[ arr[1] ](+arr[0], +arr[2]);
			}
				
		}
		
		var calc = new Calculator;
		alert(calc.calculate("3 + 7")); // 10
			
		var powerCalc = new Calculator;
		
      	powerCalc.addMethod("*", function(a, b) { return a * b; });
		powerCalc.addMethod("/", function(a, b) { return a / b; });
		powerCalc.addMethod("**", function(a, b) { return Math.pow(a, b); });
		alert(powerCalc.calculate('2 ** 3'));




Еще вараинт
function Calculator() {
    var arrName = [],
        arrFunc = [];
  this.calculate = function(str) {
    var arr = str.split(' ');
    var a = +arr[0],
        b = +arr[2],
        operation = arr[1],
        result;
    if ( operation == '+' ) {
      return a + b;
    }
    for (var i = 0; i < arrName.length; i++) {
      if ( operation == arrName[i]) {
        return arrFunc[i](a, b);
      }
    }
    return alert('Для начала добавьте функцию ' + '"' + arr[1] + '"');
  }
  this.addMethod = function(name, func) {
    arrName.push(name);
    arrFunc.push(func);
  }
}
Еще варинат
      // пишем функцию, которая создаст сам калькулятор
      function Calculator() {
          this.calculate = function(str) {
              var arr = str.split(' ');
            
              if ( isNumeric(arr[0]) && this[arr[1]] && isNumeric(arr[2]) ) {
                  return this[arr[1]](+arr[0], +arr[2]);
              } else {
                  return 'Данные для вычислений введены неправильно!!!\n' +
                          'В качестве аргументов при вызове метода ".calculate"\n' +
                          'вы можете использовать только формат \'число пробел ' +
                          'оператор пробел число\'\n' +
                          'к примеру ".calculate(\'2 + 3\')"';
              }
          };

          function isNumeric(n) {
              return !isNaN(parseFloat(n)) && isFinite(n);
          }

          this.addMethod = function(name, func) {
              this[name] = func;
          }
      }

      // создаём объект powerCalc с методами калькулятора
      var powerCalc = new Calculator();

      // учим наш калькулятор делать различные вычисления (заносим новые операторы)
      powerCalc.addMethod("+", function(a, b) { return a + b; });
      powerCalc.addMethod("-", function(a, b) { return a - b; });
      powerCalc.addMethod("*", function(a, b) { return a * b; });
      powerCalc.addMethod("/", function(a, b) { return a / b; });
      powerCalc.addMethod("**", function(a, b) { return Math.pow(a, b); });

      // пользуемся
      alert( powerCalc.calculate('2 / 3') );
/*-------------------------------------------------------------------------------*/
Еще вариант
function Calculator(arr,obj) {
obj = {
      '+': function(a,b){return a+b;},
      '-': function(a,b){return a-b;}
    }; 
  this.calculate = function(str){
  arr = str.split(' ');
    if(obj[arr[1]] == undefined)return 'я такого не умею'; 
      return obj[arr[1]](+arr[0],+arr[2]);
  };
 
  this.addMethod = function(name, func){
    obj[name] = func;
    };
}
  var calc = new Calculator;
  alert(calc.calculate("7 + 3"));
  alert(calc.calculate("7 * 3"));
  calc.addMethod('*', function(a,b) { return a * b; });
  alert(calc.calculate("7 * 3"));




Еще вариант!

	 function Calculator() {
	 	var cal = {
	 	 "+" : function(a,b) {
	 	 	return a + b;
	 	 },
	 	 "-" : function(a,b) {
	 	 	return a - b;
	 	 }
	 	}

	 	this.calculate = function(str) {
	 		var arr = str.split(" ");
	 		var result = +arr[0];
	 		for (var i = 1; i < arr.length; i++) {
	 			for (key in cal) {
	 				if (key == arr[i]) {
	 					result = cal[key](result, +arr[i+1]);
	 					continue;
	 				}
	 			}
	 		}
	 		return result;
	 	}
	 	this.addMethod = function(name, func) {
	 		cal[name] = func;
	 	}
	 	this.strInput = function() {
	 		var str = prompt("Enter:","");
	 		alert(this.calculate(str));
	 	}
	 }
	 var calc = new Calculator;
 	 alert(calc.calculate("3 + 7 - 5 + 2 + 4 - 1")); // 10
 	 calc.addMethod("*", function(a, b) { return a * b; });
 	 calc.addMethod("/", function(a, b) { return a / b; });
 	 calc.addMethod("**", function(a, b) { return Math.pow(a, b); });
 	 alert(calc.calculate("3 * 3 ** 2 / 3"));
 	 calc.strInput();
/*-------------------------------------------------------------------------------*/
function Animal() {

  var dog = "puppy";
  this.name = function(){
    var a = "little " + dog;
    return a;
  }
  this.canWalk = "dog"; 
}
var animal = new Animal();
alert(animal.name());

1)Автоматически создается новый, пустой объект.
2)Специальное ключевое слово this получает ссылку на этот объект.
3)Функция выполняется. Как правило, она модифицирует this, добавляет методы, свойства.
4)Возвращается this.

Создаётся объект animal и при выполнение функции конструктора Animal он выглядит так: animal = {name: function, canWalk: "dog"} и при этом, так как метод name, изначально в функции конструктора ссылался на переменную var dog из внешней LExicalEvironment, то в функции Animal произошло замыкание. Тем самым при создание объекта и выполнение функции(пункт 3) в объекте метод name имеет через SCOPE переменную var dog = "puppy"

Я всё правильно понимаю ? если нет, то был бы очень признателен, если бы Вы описали всё происходящее опираясь на эти 4 пункта...
Заранее благодарен
/*-------------------------------------------------------------------------------*/
function BigAnimal() {
this.name = 'Мышь';
return 'Годзилла'; // ...
}
var obj = new BigAnimal;
Т.е. при вызове функции через new создается пустой объект и функция выполняется с this ссылающимся на этот пустой объект. Это просто новый пустой объект. Соответственно т.к. this будет ссылаться на этот новый созданный пустой объект, то this.name = 'Мышь' создаст свойство name в этом пустом объекте и задаст ему значение 'Мышь'. Соответственно на выходе получится новый объект со свойством name равным 'Мышь' и в переменной obj будет хранится ссылка на него (объект).
А при обычной вызове ( BigAnimal() ) никаких объектов не создается и this будет равен глобальному объекту wIndow. Соответственно при таком вызове функции будет создано свойство window.name равное 'Мышь'. По сути мы таким образом создадим глобальную переменную name.

Объект при создании пустой! И он заполняется функцией конструктором. И в новый объект попадают только те методы и свойства которые были переданы через this конструктора:
function Test() {
  this.a = 5;
  var b = 10;
  function method1() {
    return 'method1';
  }
  this.method2 = function() {
    return 'method2';
  }
}
Test.method3 = function() {
  return 'method3';
}
//
var obj = new Test;
alert(obj.a); //5, свойство в объекте
alert(obj.b); //undefined, свойства в объекте нет
alert(obj.method1); //undefined, метода в объекте нет
alert(obj.method2); //код функции, метода в объекте есть
alert(obj.method3); //undefined, метода в объекте нет

В данном случае  переменная b и функция method1 после выполнения функции Test удалятся. А вот функция Test.method3 будет доступна как свойство функции-конструктора т.к. сама функция-конструктор - это тоже объект.
/*-------------------------------------------------------------------------------*/
Здравствуйте, есть такой вопрос:
функция в js есть объект.
this ссылается на контекст, в котором он вызван.
тогда почему в следующем коде alert выводит Window а не Object?
function n() {
function g() {
alert(this);
}
g();
}
n();
Это очень частая ошибка. Функции это действительно полноценные объекты, которые в своём prototype имеют ссылку на Object. 
Чтобы доказать, что функция это объект, просто присвойте в неё в качестве свойства что-нибудь, например, другую функцию.
function n() { }
n.g = function() {
alert(this);
}
n.g();
This всегда ссылается на объект, который при вызове метода идет перед точкой.
В этом случае всё будет впорядке. А вот любые вложенные в функции функции(прошу прощения за такой оборот) будут ссылаться на объект window. В стандарте ecmascript 5, то есть в строгом режиме, в this даже не будет передан объект window.
/*-------------------------------------------------------------------------------*/
Скажите: функции, которая является свойством объекта, будут доступны переменные из функции, которая является другим его свойством?
ну, скажем
var obj = {
sumTo: function () {...var n=...},
check: function () {...}
}
будет ли check "видеть" n?

Ответ: Нет!
/*-------------------------------------------------------------------------------*/
Объект arguments передается в slice в качестве контекста (т.е. внутри slice this будет ссылкой на объект arguments), а не аргументов. Аргументы в slice вообще не передаются.
Ну вот если представить, что slice без аргументов работает как-то так:
function slice() {
  var sorceArr = this;
  var newArr = [];
  for(var i = 0; i < sorceArr.length; i++) {
    newArr.push(sorceArr[i]);
  }
  return newArr;
}

Конечно, нативная реализация может отличаться, но смысл работы примерно такой. Т.е. функция берет массив из которого будет копировать элементы (в данном случае это sorceArr) не из переданных аргументов, а из this. Поэтому получается когда мы вызываем функцию так: [1,2,3].slice() то this внутри функции slice будет ссылаться на этот массив [1,2,3] (т.к. функция вызывается как метод) и поэтому в новый массив (newArr) будут скопированы элементы этого массив [1,2,3]. Но вызов через call позволяет задать функции любой контекст, т.е. любое значение this. И поэтому если сделать так:

var arr1 = [5,6,7];
var arr2 = [1,2,3].slice.call(arr1);
alert(arr2);

то мы сделаем this внутри slice ссылкой на массив arr1 и поэтому slice скопирует именно элементы массива arr1 ( [5,6,7] ), а не того массив у котрого оно было вызвано ( [1,2,3] ) потому что с помощью call мы жестко задали значение this внутри slice.
Точно так же можно задать this равным объекту arguments. Ведь arguments это объект с числовыми свойствами и свойством length, поэтому для нашей функции slice не будет разницы что это не массив. Можно даже создать свой подобный объект и натравить на него этот slice:
var obj = {
  0: 'aaa',
  1: 1,
  2: 'bbb',
  3: 'ccc',
  4: 5,
  length: 5
};
//функцию slice была объявлена выше
var test = slice.call(obj);
alert(test);

как видим в новый массив всё отлично скопировалось т.к. нашей функции по барабану массив там или объект с числовыми свойствами, главное чтобы было свойство length и числовые свойства были проставлены верно. Таким же образом оно обработает и arguments т.к. это точно такой же объект с числовыми свойствами и свойством length. Т.е. вызов через call позволяет задать this равный нужному нам объекту, а пустой массив нужен для того, чтобы "одолжить" у него эту самую функцию slice.
P.S. В 3 части учебника будет объяснено за счет чего вообще возможно такое "одалживание" и откуда у пустого массива она вообще берется.

/*-------------------------------------------------------------------------------*/
Напишите функцию f, которая будет обёрткой вокруг другой функции g. Функция f обрабатывает первый аргумент сама, а остальные аргументы передаёт в функцию g, сколько бы их ни было.

Например:
function f() { /* ваш код */ }

function g(a, b, c) { 
  alert( a + b + (c || 0) );
}

f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
f("тест2", 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"
Решение
function f(a) {
  alert(a);
  var args = [].slice.call(arguments, 1);
  g.apply(this, args);
}

function g(a, b, c) { 
  alert( a + b + (c || 0) );
}

f("тест", 1, 2); 
f("тест2", 1, 2, 3);

Код функции f не должен зависеть от количества аргументов

Что-то не могу понять, в функцию g нужно передать аргументы ф-ии f, почему передается this?
function f(a, b) {
   g.apply(this, arguments);
}
 Для чего служит This при выполнении g.apply(this, args), ведь наша функция создана в глобальном объекте
Коротко, this нам не нужен как таковой в этой задаче.нам нужно передать массив аргументов и для этого используем метод apply. а синтаксис метода имеет обязательный параметр "контекст вызова". Поэтому указываем просто this. This в этой задаче для g будет таким же как для f т.е. глобальный объект
/*-------------------------------------------------------------------------------*/

Еще пояснение
1. Если f не явл-ся методом объекта.
function g (o, p)  {alert('Work of g: '+o+', '+p)}    

function f (a, b) {
    g.apply(this, arguments);
}
f(1,2);   //при вызове f сработает вызов g в контексте this (в данном случае это
 window, что легко проверить, подставив window вместо this). На экран выведет:
 "Work of g: 1, 2", т.е. g вызвалась с арг-тами f в контексте window.
2. Если f явл-ся методом объекта.
function g (o,p)  {alert('Work of g: '+o+' '+p+' '+this.u)}  
    
    var obj = {
      u: 9,
      f: function (a, b) {
           g.apply(this, arguments);
         }
      }
    obj.f(1,2);   //контекст this в данном случае - это obj, т.к. f - метод 
этого объекта. Кроме того, g вызывается не в режиме обычной ф-ции, а в 
контексте объекта obj, как если бы она была его методом, т.е. строку 
g.apply(this, arguments); можно воспринимать как 
obj.g( arguments ).

// Можно заметить в теле g запись this.u. Т.к. g вызывается не в обычном 
режиме, а в контексте объекта (obj.g( arguments )), то запись this.u 
так же корректна, как и obj.u, что говорит о передаче в g текущего 
контекста.
/*-------------------------------------------------------------------------------*/

В apply первый аргумент контекст с которым будет вызвана функция. В данном случае в качестве контекста передается контекст функции f. Второй аргумент в apply - это массив (или массивоподобный объект) аргументов, с которыми будет вызвана функция. В данном случае передается массивоподобный объект arguments, который содержим аргументы функции f. Таким образом функция g будет вызвана в том же контексте, что и функция f и в нее будут переданы аргументы функции f.
/*-------------------------------------------------------------------------------*/

Было бы намного понятнее написать, что this это всегда ссылка на объект, который вызвал функцию, если явным образом не указанно другое - call или apply. 
/*-------------------------------------------------------------------------------*/
var args = [].slice.call(arguments, 1);
Объяснение
var arr1 = [1,2,3,4,5];
arr1.slice(1) // 2,3,4,5 - все элементы, кроме первого.
var arr2 = []; // создаем пустой массив.
arr2.slice(); //возвратит пустой массив, т.к. arr2 - пустой.
//Теперь вся соль.
arr2.slice.call(arr1, 1) // возвращает 2,3,4,5, благодаря call c контекстом первого(!!!) массива. Здесь метод slice массива 2 не берет в расчет содержимое этого самого второго массива, а берет из массива 1, благодаря вызову call с контекстом arr1.
var args = [].slice.call(arguments, 1); - создается переменная, которая приравнивается к пустому массиву, к массиву тут же применяется его метод копирования элементов slice, но копируется содержимое не из контекста это пустого массива (он же пустой!, там нечего копировать), а из псевдомассива arguments. А содержимое из arguments берется благодаря вызову call.
 И еще
call() ссылается на объект в своем первом аргументе - arguments, то есть работает с этим объектом и возвращает его и параметр 1 методу slice. 
Slice получил объект arguments и будет работать с ним, но начиная с 1-го индекса, а не с нулевого. Считай, что он пишется как [].slice( 1 ).
/*-------------------------------------------------------------------------------*/
Вызовы (1) и (2) в примере ниже работают не так, как (3) и (4):
"use strict"
var obj, f;
obj = {
  go: function() { alert(this); }
};
obj.go();            // (1) object
 (obj.go)();          // (2) object
 (f = obj.go)();      // (3) undefined
 (obj.x || obj.go)(); // (4) undefined
Решение
1.	Обычный вызов функции в контексте объекта.
2.	То же самое, скобки ни на что не влияют.
3.	Здесь не просто вызов obj.method(), а более сложный вызов вида (выражение).method(). Такой вызов работает, как если бы он был разбит на две строки:
f = obj.go; // сначала вычислить выражение
f();             // потом вызвать то, что получилось
5.	При этом f() выполняется как обычная функция, без передачи this.
6.	Здесь также слева от точки находится выражение, вызов аналогичен двум строкам.
В спецификации это объясняется при помощи специального внутреннего типа Reference Type.
Если подробнее — то obj.go() состоит из двух операций:
1.	Сначала получить свойство obj.go.
2.	Потом вызвать его как функцию.
Но откуда на шаге 2 получить this? Как раз для этого операция получения свойства obj.go возвращает значение особого типа Reference Type, который в дополнение к свойству go содержит информацию об obj. Далее, на втором шаге, вызов его при помощи скобок () правильно устанавливает this.
Любые другие операции, кроме вызова, превращают Reference Type в обычный тип, в данном случае — функцию go (так уж этот тип устроен).
Поэтому получается, что (a = obj.go) присваивает в переменную a функцию go, уже без всякой информации об объектеobj.
Аналогичная ситуация и в случае (4): оператор ИЛИ || делает из Reference Type обычную функцию.

/*-------------------------------------------------------------------------------*/
Каким будет результат? Почему?

arr = ["a", "b"];
arr.push( function() { alert(this); } )
arr[2]();  // ?
Решение
Вызов arr[2]() — это обращение к методу объекта obj[method](), в роли obj выступает arr, а в роли метода: 2.
Поэтому, как это бывает при вызове функции как метода, функция arr[2] получит this = arr и выведет массив:

/*-------------------------------------------------------------------------------
Как это работает?
var arr = [1, 2, 3, 4, 5];
var largest = Math.max.apply(Math, arr);
alert(largest);
Первый аргумент в apply - это контекст с которым будет вызвана функция, в данном случае функция Math.max. Второй аргумент apply - это массив, каждый элемент которого будет передан функции как отдельный аргумент. Т.к. при обычном запуске ( Math.max(num1, num2) ) контекст равен Math (т.к. Math идет до точки перед max), то в apply мы так же передаем контекст Math. На самом деле это не особо влияет на результат, там можно любой контекст передать, не думаю, что там внутри this вообще используется, но так сохраняется контекст по умолчанию. 
var largest = Math.max.apply(Math, arr);
аналогичен такому вызову:
var largest = Math.max(1, 2, 3, 4, 5);



/*-------------------------------------------------------------------------------*/
function f(a, b) {
   g.apply(this, arguments);
}
 в этой функции в g передаются аргументы функции f a и b
/*-------------------------------------------------------------------------------*/
function f(a, b) {
g.apply(this, arguments);
}
Здесь this что обозначает и чем она служит?
То-же, что и везде - контекст вызова.
А означает это, что при выполнении(вызове) функции f будет запущена(вызвана) другая функция - g. Причем запущена будет в том-же контексте, что и функция f. И с теми-же аргументами, что и функция f.
Если f будет вызвана само по себе, ну вот так: f(), то this не важен, не используется что-ли(даже не знаю, как правильнее написать), не при делах короче:) Там все равно везде Глобальный Объект в контексте вызова.
Другое дело если f будет вызвана как метод какого-либо объекта, тогда в this будет ссылка на этот объект. И функция g будет вызвана также, как метод этого-же объекта.
/*-------------------------------------------------------------------------------*/
Значением this является объект, в контексте которого вызван метод
Переменная this определяется в момент вызова функции, а не в момент определения 
/*-------------------------------------------------------------------------------*/
Иногда встаёт задача — скопировать в существующий объект свойства из одного или нескольких других

function copy(dst) {
  for (var i=1; i<arguments.length; i++) {
    var obj = arguments[i];
    for (var key in obj) {
      dst[key] = obj[key];
    }
  }
  return dst;
}
var user = { 
  name: "Вася",
};

var male = {
 gender:"Man",	
};
copy(user, male); 

alert(user.gender);//man














