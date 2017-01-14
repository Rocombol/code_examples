/*-----------------------------------------------------------------------------------*/
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

alert(randomInteger(5, 10));

/*-----------------------------------------------------------------------------------*/
function max(array) {
    return Math.max.apply(null, array);
}
/*-----------------------------------------------------------------------------------*/
function max(array) {
    return Math.min.apply(null, array);
}
/*-----------------------------------------------------------------------------------*/
dublicate_in_array.html
var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort();
var results = [];
for (var i = 0; i < arr.length; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}
console.log(results);

/*-----------------------------------------------------------------------------------*/
< !doctype html >
    < html lang = "en" >
    < head >
    < meta charset = "utf-8" >
    < title > append demo < /title>

< style >
    table {
        border - collapse: collapse;
        border: 2 px solid black;
    }
td {
    padding: 20 px;
    text - align: center;
} < /style> < /head >

< body >
    < table border = "1" >
    < tr >
    < td colspan = "4" > Test Table < /td> < /tr > < tr >
    < td colspan = "2" > < /td> < td rowspan = "3" > < /td > < td > < /td> < /tr > < tr >
    < td rowspan = "2" > < /td> < td > < /td > < td > < /td> < /tr > < tr >
    < td > < /td> < td > < /td > < /tr> < /table > < /body> < /html >
    /*-----------------------------------------------------------------------------------*/
    //D Arrays
    var n = 5,
        m = 5;
var mas = [];
for (var i = 0; i < m; i++) {
    mas[i] = [];
    for (var j = 0; j < n; j++) {
        mas[i][j] = j;
    }
}
console.log(mas);

/*-----------------------------------------------------------------------------------*/
< !DOCTYPE html >

    < html >
    < head >
    < title > Untitled < /title> < meta charset = "utf-8" > < style type = "text/css
" > < /style>


< /head>

< body >
    < div id = "myDynamicMarix" > < /div> < script >

function numberMatrix() {
    var myTableDiv = document.getElementById("myDynamicMarix");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (var j = 0; j < 5; j++) {
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(j == i ? 1 : j < i ? 2 : 3));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}
numberMatrix()

< /script> < /body > < /html>
/*-----------------------------------------------------------------------------------*/
< !doctype html >
    < html lang = "en" >

    < head >
    < meta charset = "utf-8" >
    < title > append demo < /title> < style >
table {
    border - collapse: collapse;
    border: 2 px solid black;
}

td {
    padding: 20 px;
    text - align: center;
}

< /style < /style > < /head>

< body >

    < script >
    function createTable(tableData) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function(rowData) {
            var row = document.createElement('tr');

            rowData.forEach(function(cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        document.body.appendChild(table);
    }

createTable([
    ["1", "1", "1"],
    ["1", "1", "1"],
    ["0", "0", "0"]
]); < /script>

< /body>

< /html>
/*-----------------------------------------------------------------------------------*/
function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumTo(100));


/*-----------------------------------------------------------------------------------*/
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert(sumTo(100));
/*-----------------------------------------------------------------------------------*/
function sumTo(n) {
    return n * (n + 1) / 2;
}

alert(sumTo(100));
/*-----------------------------------------------------------------------------------*/
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(5)); // 120
/*-----------------------------------------------------------------------------------*/
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

alert(factorial(5)); // 120
/*-----------------------------------------------------------------------------------*/
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(3)); // 2
alert(fib(7)); // 13
/*-----------------------------------------------------------------------------------*/
function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(5)); // 2
/*-----------------------------------------------------------------------------------*/
function pow(x, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

alert(pow(2, 3)); // 8
/*-----------------------------------------------------------------------------------*/
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
/*-----------------------------------------------------------------------------------*/
"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var sum = 0;
for (var name in salaries) {
    sum += salaries[name];
}

alert(sum);
/*-----------------------------------------------------------------------------------*/
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

alert("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);
/*-----------------------------------------------------------------------------------*/
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
/*-----------------------------------------------------------------------------------*/
var lastItem = goods[goods.length - 1];
/*-----------------------------------------------------------------------------------*/
goods[goods.length] = 'Компьютер'
    /*-----------------------------------------------------------------------------------*/
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

alert(arr[rand]);
/*-----------------------------------------------------------------------------------*/
var numbers = [];

while (true) {

    var value = prompt("Введите число", 0);

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert(sum);
/*-----------------------------------------------------------------------------------*/
if ([].indexOf) {

    var find = function(array, value) {
        return array.indexOf(value);
    }

} else {
    var find = function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }

        return -1;
    }

}
/*-----------------------------------------------------------------------------------*/
function filterRange(arr, a, b) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }

    return result;
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
alert(filtered);
/*-----------------------------------------------------------------------------------*/
function getMaxSubSum(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0
/*-----------------------------------------------------------------------------------*/
function f(x) {
    alert(arguments.length ? 1 : 0);
}

f(undefined);
f();
/*-----------------------------------------------------------------------------------*/
function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

alert(sum()); // 0
alert(sum(1)); // 1
alert(sum(1, 2)); // 3
alert(sum(1, 2, 3)); // 6
alert(sum(1, 2, 3, 4)); // 10
/*-----------------------------------------------------------------------------------*/
function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    var totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

alert(getSums([1, 2, 3, 4, 5])); // 1,3,6,10,15
alert(getSums([-2, -1, 0, 1])); // -2,-3,-3,-2
/*-----------------------------------------------------------------------------------*/
var arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);

alert(result); // 15
/*-----------------------------------------------------------------------------------*/
function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }

    classes.push(cls); // добавить

    obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me
    /*-----------------------------------------------------------------------------------*/
function camelize(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        // преобразовать: первый символ с большой буквы
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

alert(camelize("background-color")); // backgroundColor
alert(camelize("list-style-image")); // listStyleImage
alert(camelize("-webkit-transition")); // WebkitTransition
/*-----------------------------------------------------------------------------------*/
function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1); // удалить класс
            i--; // (*)
        }
    }
    obj.className = classes.join(' ');

}

var obj = {
    className: 'open menu menu'
}

removeClass(obj, 'blabla');
removeClass(obj, 'menu')
alert(obj.className) // open
    /*-----------------------------------------------------------------------------------*/
function filterRangeInPlace(arr, a, b) {

    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (val < a || val > b) {
            arr.splice(i--, 1);
        }
    }

}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert(arr); // [3, 1]
/*-----------------------------------------------------------------------------------*/
var arr = [5, 2, 1, -10, 8];

function compareReversed(a, b) {
    return b - a;
}

arr.sort(compareReversed);

alert(arr);
/*-----------------------------------------------------------------------------------*/
var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

alert(arrSorted);
alert(arr);
/*-----------------------------------------------------------------------------------*/
var arr = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

arr.sort(compareRandom);

alert(arr); // элементы в случайном порядке, например [3,5,1,2,4]
/*-----------------------------------------------------------------------------------*/
// Наша функция сравнения
function compareAge(personA, personB) {
    return personA.age - personB.age;
}

// проверка
var vasya = {
    name: "Вася",
    age: 23
};
var masha = {
    name: "Маша",
    age: 18
};
var vovochka = {
    name: "Вовочка",
    age: 6
};

var people = [vasya, masha, vovochka];

people.sort(compareAge);

// вывести
for (var i = 0; i < people.length; i++) {
    alert(people[i].name); // Вовочка Маша Вася
}
/*-----------------------------------------------------------------------------------*/
function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert(unique(strings)); // кришна, харе, 8-()
/*-----------------------------------------------------------------------------------*/
< !doctype html >
    < html lang = "en" >

    < head >
    < meta charset = "utf-8" >
    < title > append demo < /title> < style >
table {
    border - collapse: collapse;
    border: none;
}

td {
    padding: 10 px;
    text - align: center;
} < /style> < /head >

< body >

    < script >
    function pifagorTable(tableData) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function(rowData) {
            var row = document.createElement('tr');

            rowData.forEach(function(cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        document.body.appendChild(table);
    }

pifagorTable([
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["2", "4", "6", "8", "10", "12", "14", "16", "18"],
    ["3", "6", "9", "12", "15", "18", "21", "24", "27"],
    ["4", "8", "12", "16", "20", "24", "28", "32", "36"],
    ["5", "10", "15", "20", "25", "30", "35", "40", "45"],
    ["6", "12", "18", "24", "30", "36", "42", "48", "54"],
    ["7", "14", "21", "28", "35", "42", "49", "56", "63"],
    ["8", "16", "24", "32", "40", "48", "56", "64", "72"],
    ["9", "18", "27", "36", "45", "54", "63", "72", "81"],
]);

< /script>

< /body>

< /html>
/*-----------------------------------------------------------------------------------*/
//scroll with help of mouse wheel

function wheel(event) {
    var delta = 0;
    if (!event) event = window.event; // Событие IE.
    // Установим кроссбраузерную delta
    if (event.wheelDelta) {
        // IE, Opera, safari, chrome - кратность дельта равна 120
        delta = event.wheelDelta / 120;
    } else if (event.detail) {
        // Mozilla, кратность дельта равна 3
        delta = -event.detail / 3;
    }
    if (delta) {
        // Отменим текущее событие - событие поумолчанию (скролинг окна).
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.returnValue = false; // для IE

        // если дельта больше 0, то колесо крутят вверх, иначе вниз
        var dir = delta > 0 ? 'Up' : 'Down',
    }
}

/*-----------------------------------------------------------------------------------*/
// How to reset the events and restore the state of the element?
$('input').click(function() {
    alert('')
});

function resetEvents(element) {
    var newElement = element.cloneNode(true);
    element.parentNode.insertBefore(newElement, element); // fixed by @spmbt
    element.parentNode.removeChild(element);

    return newElement;
}

resetEvents($('input')[0]);

// Клик на инпут ничего не даст 
/*-----------------------------------------------------------------------------------*/
//TABS
< !DOCTYPE html >
    < html >

    < head >
    < style >
    span {
        display: inline - block;
        margin - right: 10 px;
    }

.content {
    width: 130 px;
}

.none {
    display: none;
} < /style> < /head >

< body >
    < span class = 'tab' > Tab1 < /span> < span class = 'tab' > Tab2 < /span > < span class = 'tab' > Tab3 < /span>

< div class = "content" >
    < div class = "c" > aaaa a aaaaa aaaaaa a a a a aaaaaa aaaaaa aaaaa < /div> < div class = "c none" > bbbb bbbb bbbbb bbbb bbbb bbbbb bbbb bbbbb bbbb bbbbb < /div > < div class = "c none" > ccc ccccc cccccc ccccc cccccc ccccc ccccc < /div> < /div >

    < script >
    var tabs = document.querySelectorAll('.tab')
var con = document.querySelectorAll('.c')

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(e) {
        for (var k = 0; k < tabs.length; k++) {
            if (this == tabs[k]) {
                con[k].classList.remove('none');
            } else {
                con[k].classList.add('none');
            }
        }
    })
} < /script> < /body >

< /html>

/*-----------------------------------------------------------------------------------*/
var tabs = document.querySelectorAll(".tab");
var con = document.querySelectorAll(".c");
var temp = con[0];
[].forEach.call(tabs, function(item, i) {
    item.addEventListener("click", function() {
        temp.classList.add("none");
        temp = con[i];
        temp.classList.remove("none")
    })
});
/*-----------------------------------------------------------------------------------*/
< !DOCTYPE html >
    < html >

    < head >
    < style >
    span {
        display: inline - block;
        margin - right: 10 px;
    }

.content {
    width: 130 px;
}

.none {
    display: none;
} < /style> < /head >

< body >
    < div class = "tabs" >
    < span class = 'tab'
data - content = "0" > Tab1 < /span> < span class = 'tab'
data - content = "1" > Tab2 < /span> < span class = 'tab'
data - content = "2" > Tab3 < /span> < /div >

    < div class = "content" >
    < div class = "c" > aaaa a aaaaa aaaaaa a a a a aaaaaa aaaaaa aaaaa < /div> < div class = "c none" > bbbb bbbb bbbbb bbbb bbbb bbbbb bbbb bbbbb bbbb bbbbb < /div > < div class = "c none" > ccc ccccc cccccc ccccc cccccc ccccc ccccc < /div> < /div >

    < script >
    var contentWrap = document.querySelector(".content");
var content = document.querySelectorAll(".c");
var tabs = document.querySelector(".tabs");
tabs.addEventListener("click", function(e) {
        contentWrap.querySelector("div:not(.none)").classList.add("none")
        content[e.target.getAttribute("data-content")].classList.remove("none")
    }) < /script> < /body >

    < /html>


/*-----------------------------------------------------------------------------------*/
function convert(num) {
    var nums = [{
        value: 1000,
        sign: 'M',
    }, {
        value: 900,
        sign: 'CM',
    }, {
        value: 500,
        sign: 'D',
    }, {
        value: 400,
        sign: 'CD',
    }, {
        value: 100,
        sign: 'C',
    }, {
        value: 90,
        sign: 'XC',
    }, {
        value: 50,
        sign: 'L',
    }, {
        value: 40,
        sign: 'XL',
    }, {
        value: 10,
        sign: 'X',
    }, {
        value: 9,
        sign: 'IX',
    }, {
        value: 5,
        sign: 'V',
    }, {
        value: 4,
        sign: 'IV',
    }, {
        value: 1,
        sign: 'I',
    }];

    var out = '';

    nums.forEach(function(item) {
        while (num >= item.value) {
            out += item.sign;
            num -= item.value;
        }
    });

    return out;
}

console.log(convert(36));
/*-----------------------------------------------------------------------------------*/
< !DOCTYPE HTML >

    < html >

    < head >
    < title > Untitled < /title> < meta charset = "utf-8" > < style type = "text/css
" >
input[type = "number"] {
    width: 40 px;
} < /style> < script src = "http:/ / ajax.googleapis.com / ajax / libs / jquery / 1.11.0 / jquery.min.js " > < /script> < script > < /script> < /head >

< body >
    < div class = "foo" >
    < p >
    < input type = "number"
class = "a" > x < sup > 2 < /sup>+ < input type = "number"
class = "b" > x < input type = "number"
class = "c" >= 0 < /p> < p > Result: < input type = "text"
class = "baz" >
    < /p> < button class = "button" > result < /button > < /div> < script >
$(".button").click(function() {

    var d,
        x,
        i,
        a = +$(".a").val(),
        b = +$(".b").val(),
        c = +$(".c").val();

    if (a == "") {
        a = +1;
    };

    if (b == "") {
        b = +1;
    };

    if (c == "") {
        c = +1;
    };

    // console.log(a,b,c);
    d = b * b - (4 * a * c);

    // console.log(d);

    if (d > 0) {

        x = ((-b + Math.pow(d, 0.5)) / (2 * a));
        i = ((-b - Math.pow(d, 0.5)) / (2 * a));
        $(".baz").val("X1=" + x + "   X2=" + i);

    }
    if (d == 0) {

        x = (-b / 2 * a);
        $(".baz").val(x);

    }

    if (d < 0) {
        $(".baz").val("No solution");
    }

}); < /script> < /body >

< /html>
/*-----------------------------------------------------------------------------------*/
< html >
    < head > Решение квадратного уравнения < title > Решить квадратное уравнение: < /title> < script language = "javascript" >
    <!--
function square_equation() {
    var a = document.square.square_a.value;
    var b = document.square.square_b.value;
    var c = document.square.square_c.value;
    var sol = document.getElementById("square_sol");
    var d = b * b - 4 * a * c;
    if (d < 0) {
        string = "пара комплексно-сопряженных корней<br>x<sub>1</sub> = (";
        string += -b / (2 * a);
        string += ", ";
        string += Math.sqrt(-d) / (2 * a);
        string += "), x<sub>2</sub> = (";
        string += -b / (2 * a);
        string += ", ";
        string += -Math.sqrt(-d) / (2 * a);
        string += ").";
    } else {
        if (d == 0) {
            string = "два одинаковых вещественных корня:<br>x<sub>1</sub> = x<sub>2</sub> = ";
            string += -b / (2 * a);
            string += ".";
        } else {
            string = "два вещественных различных корня:<br>x<sub>1</sub> = ";
            string += -b / (2 * a) - Math.sqrt(d) / (2 * a);
            string += ", x<sub>2</sub> = ";
            string += -b / (2 * a) + Math.sqrt(d) / (2 * a);
            string += ".";
        }
    }
    sol.innerHTML = string;
}
-->
< /script> < body > < div align = "center" > < b > Решить квадратное уравнение a & middot;
x & sup2; + b & middot;
x + c = 0. < /b> < form name = "square"
action = "javascript:square_equation()" >
    a < input name = "square_a"
type = "text"
value = "1"
size = "4" >
    b < input name = "square_b"
type = "text"
value = "2"
size = "4" >
    c < input name = "square_c"
type = "text"
value = "1"
size = "4" >
    < input type = "submit"
value = "решить" >
    < /form>
Решение: < span id = "square_sol" > Введите числа и нажмите "решить" < /span> < /div > < /body> < /html >
    /*-----------------------------------------------------------------------------------*/
    // table  document.write
    var cols = prompt("Введите количество строк", "");
var rows = prompt("Введите количество столбцов", "");
cols = parseInt(cols);
rows = parseInt(rows);
document.write(' <table border=1, cellpadding=0, cellspacing=0, width="90%">');
for (i = 1; i <= cols; i++) {
    document.write("<tr>");

    for (k = 0; k <= rows; k++) {
        document.write("<td>&nbsp;</td>");
    }

    document.write("</tr>");
}
document.write("</table>");
/*-----------------------------------------------------------------------------------*/
function pifagorTable() {
    var cols = 9;

    var rows = 9;


    rows = parseInt(rows);


    if (cols < 1 || rows < 1) {
        cols = 1;
        rows = 1;
    }



    document.write(' <table border=1, cellpadding=2, cellspacing=0, width="90%">');

    for (i = 1; i <= cols; i++) {


        document.write("<tr>");


        for (k = 1; k <= rows; k++) {


            if (k == 0) {
                document.write('<td style="background-color:gold">');
                document.write(i);

            } else
            if (i == 0) {
                document.write('<td style="background-color:gold">');
                document.write(k);


            } else {
                document.write('<td style="background-color:white">');
                document.write(i * k);

            }

            document.write("</td>");
        }


        document.write("</tr>");
    }

    document.write("</table>");
}


pifagorTable();
/*-----------------------------------------------------------------------------------*/
// Check for valid numbers
var checkValid = function(n) {
    if (!isNaN(parseFloat(n)) && isFinite(n)) {
        return n;
    }

    throw new Error('Unvalid number');
};
/*-----------------------------------------------------------------------------------*/
function add() {

    var checkValid = function(n) {
        if (!isNaN(parseFloat(n)) && isFinite(n)) {
            return n;
        }

        throw new Error('Unvalid number');
    };

    var args = Array.prototype.slice.call(arguments);

    if (args.length === 2) {
        return checkValid(args[0]) + checkValid(args[1]);
    } else if (args.length) {
        return function(n) {
            return checkValid(args[0]) + checkValid(n);
        };
    }
}
var foo = add(4);
console.log(foo(8));
/*-----------------------------------------------------------------------------------*/
function add(x, y) {
    if (!x || typeof y !== 'number' && y !== undefined) {
        return;
    } else if (arguments.length === 1 && !isNaN(x)) {
        return function addMore(y) {
            if (typeof y === 'number') return x + y;
        };
    }
    if (arguments.length === 2) return x + y;

}

/*-----------------------------------------------------------------------------------*/
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join('')
        }
        /*-----------------------------------------------------------------------------------*/
    function descendingOrder(n) {
        return +(n + '').split('').sort(function(a, b) {
            return b - a
        }).join('');
    }
    /*-----------------------------------------------------------------------------------*/
    function find_average(arr) {
        var result = arr.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        return result / arr.length;
    }
    find_average([1, 2, 3]);
    /*-----------------------------------------------------------------------------------*/

    //deleting of exclamation mark;

    function remove(s) {
        return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
    }
    /*-----------------------------------------------------------------------------------*/
    function remove(s) {
        while (s && s.slice(-1) == "!") {
            s = s.slice(0, -1)
        }
        return s;
    }
    /*-----------------------------------------------------------------------------------*/
    function remove(s) {
        var newStr = ""
        for (var i = 0; i < s.length; i++) {
            if (s[i] !== "!") {
                newStr += s[i]
            }
        }
        return newStr + "!"
    }
    /*-----------------------------------------------------------------------------------*/
    function remove(s) {
        //coding and coding....
        s = s.split('!');
        return s.concat('!').join('');

    }
    /*-----------------------------------------------------------------------------------*/
    function remove(s, n) {
        for (var i = 0; i < n; i++) s = s.replace("!", "");
        return s;
    }
    /*-----------------------------------------------------------------------------------*/
    function remove(s, n) {
        while (n) {
            s = s.replace("!", "");
            n--;
        }
        return s;
    }
    /*-----------------------------------------------------------------------------------*/
    var isPrime = function(n) {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return n > 1;
    };
    /*-----------------------------------------------------------------------------------*/
    function sumPrimes(num) {
        var count = 0,
            sum = 0;
        for (var i = 1; i <= num; i++) {
            for (var j = i; j !== 0; j--) {
                if (i % j === 0) count++;
            }
            if (count === 2) sum += i;
            count = 0;
        }
        return sum;
    }
    console.log(sumPrimes(10));
    /*-----------------------------------------------------------------------------------*/
    function countPositivesSumNegatives(input) {
        if (input == null || input.length == 0)
            return [];

        var positive = 0;
        var negative = 0;

        for (var i = 0, l = input.length; i < l; ++i) {
            if (input[i] > 0)
                ++positive;
            else
                negative += input[i];
        }

        return [positive, negative];
    }
    /*-----------------------------------------------------------------------------------*/
    function generWinComb() {
        var min = 1,
            max = 20;
        return min + Math.floor(Math.random() * (max + 1 - min))
    }

    console.log(generWinComb());
    /*-----------------------------------------------------------------------------------*/
    var myComb = [1, 3, 11, 13];

    function winner(myComb) {
        var counter = 0;

        function generWinComb() {
            var min = 1,
                max = 20;
            return min + Math.floor(Math.random() * (max + 1 - min))
        }
        while (myComb.some(function(a) {
                return a != generWinComb()
            })) counter++;
        return counter
    }
    document.write(winner(myComb));
    /*-----------------------------------------------------------------------------------*/
    var i = 0;

    function consoleRec(arr) {
        console.log(arr[i]);
        i++;
        if (i < arr.length) consoleRec(arr);
    }
    consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции']);
    /*-----------------------------------------------------------------------------------*/
    function isAllTrue(source, filterFn) {

        if (filterFn(source)) return true;

        return false;

    }


    console.log(
            isAllTrue(['это', 'массив', 'без', 'чисел'], function(source) {

                for (var i = 0; i < source.length; i++) {
                    if (typeof source[i] == 'number') {
                        continue;
                        return true;
                    }
                    return false;
                }
                return true;
            })
        )
        /*-----------------------------------------------------------------------------------*/
    function isSomeTrue(source, filterFn) {

        if (filterFn(source)) return true;

        return false;

    }


    console.log(
            isSomeTrue(['это', 'массив', 'чисел'], function(source) {

                var count = 0;

                for (var i = 0; i < source.length; i++) {
                    if (typeof source[i] == 'number') {
                        count++;
                    }

                }
                if (count) return true;

                return false;

            })
        )
        /*-----------------------------------------------------------------------------------*/
    if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
    }
    /*-----------------------------------------------------------------------------------*/
    let source1 = [1, 2, 3],
        source2 = ['text', 2],
        source3 = [1, 'text'],
        source4 = [1, 'text', 3],
        source5 = ['text1', 'text2'],
        source6 = [];

    function isAllTrue(src, fltr) {
        if (src.length == 0) {
            throw new Error('Массив пустой');
        }
        let result = true;
        for (let i = 0; i < src.length; i++) {
            if (fltr(src[i]) != true) {
                result = false;
            }
        }
        return result;
    }

    function filterFn(arg) {
        return typeof arg === 'number';
    }

    try {
        let res = isAllTrue(source6, filterFn);
        console.log('%s %s', 'Задача №1: ', res);
    } catch (e) {
        console.error('%s %s', 'Задача №1: ', e.message);
    }
    /*-----------------------------------------------------------------------------------*/
    let source1 = [1, 2, 3],
        source2 = ['text', 2],
        source3 = [1, 'text'],
        source4 = [1, 3, 'text'],
        source5 = ['text1', 'text2'];

    function isAllTrue(src, fltr) {
        let result;
        for (let i = 0; i < src.length; i++) {
            if (fltr(src[i]) == true) {
                result = true;
                return result;
            } else {
                result = false;
            }
        }
        return result;
    }

    function filterFn(arg) {
        return typeof arg === 'number';
    }

    let res = isAllTrue(source4, filterFn);
    console.log('%s %s', 'Задача №2: ', res);
    /*-----------------------------------------------------------------------------------*/
    let calc = function calculator(firstNumber) {
        let result = firstNumber;
        let obj = {
            sum: function() {
                for (let i = 0; i < arguments.length; i++) {
                    result += arguments[i];
                }
                return result;
            },
            dif: function() {
                for (let i = 0; i < arguments.length; i++) {
                    console.log(result);
                    result -= arguments[i];
                }
                return result;
            },
            div: function() {
                for (let i = 0; i < arguments.length; i++) {
                    if (arguments[i] == 0) {
                        throw new Error('Делитель равен нулю');
                    } else {
                        result /= arguments[i];
                    }
                }
                return result;
            },
            mul: function() {
                for (let i = 0; i < arguments.length; i++) {
                    result *= arguments[i];
                }
                return result;
            },
        }
        return obj;
    }

    module.exports = calc;
    /*-----------------------------------------------------------------------------------*/
    function Calculator(firstNumber) {
        if (!(this instanceof Calculator)) return new Calculator(firstNumber);
        this.firstNumber = firstNumber;
    }
    Calculator.prototype = {
        sum: function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result += arguments[i];
            }
            return result;
        },
        dif: function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
            return result;
        },
        div: function() {

            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] == 0) {
                    throw new Error('Делитель равен нулю');
                } else {
                    result /= arguments[i];
                }
            }
            return result;
        },
        mul: function() {
            let result = this.firstNumber;
            for (let i = 0; i < arguments.length; i++) {
                result *= arguments[i];
            }
            return result;
        },
    }

    module.exports = Calculator;
    /*-----------------------------------------------------------------------------------*/
    function Calculator() {

        this.read = function() {
            this.a = +prompt('a?', 0);
            this.b = +prompt('b?', 0);
        };

        this.sum = function() {
            return this.a + this.b;
        };

        this.mul = function() {
            return this.a * this.b;
        };
    }

    var calculator = new Calculator();
    calculator.read();

    alert("Сумма=" + calculator.sum());
    alert("Произведение=" + calculator.mul());

    /*-----------------------------------------------------------------------------------*/
    function Calculator() {

        var methods = {
            "-": function(a, b) {
                return a - b;
            },
            "+": function(a, b) {
                return a + b;
            }
        };

        this.calculate = function(str) {

            var split = str.split(' '),
                a = +split[0],
                op = split[1],
                b = +split[2]

            if (!methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return methods[op](+a, +b);
        }

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
    /*-----------------------------------------------------------------------------------*/
    var each = function(arr, callback, thisArg) {
        var i, length = arr.length;
        for (i = 0; i < length; i = i + 1) {
            callback(arr[i], i, arr);
        }
    };
    /*-----------------------------------------------------------------------------------*/
    var each = function(arr, callback, thisArg) {
        var i, length = arr.length;
        for (i = 0; i < length; i = i + 1) {
            callback.call(thisArg, arr[i], i, arr);
        }
    };
    /*-----------------------------------------------------------------------------------*/
    var links = document.links; // коллекция всех ссылок на странице
    [].forEach.call(links, function(link) {
        // Добавление класса link-active для всех ссылок на странице
        link.classList.add('link-active');
    });
    /*-----------------------------------------------------------------------------------*/
    var map = function(arr, callback, thisArg) {
        var i, length = arr.length,
            results = [];
        for (i = 0; i < length; i = i + 1) {
            results.push(callback.call(thisArg, arr[i], i, arr));
        }
        return results;
    };
    /*-----------------------------------------------------------------------------------*/
    var filter = function(arr, callback, thisArg) {
        var i, length = arr.length,
            results = [];
        for (i = 0; i < length; i = i + 1) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                results.push(arr[i]);
            }
        }
        return results;
    };
    /*-----------------------------------------------------------------------------------*/
    function steamroller(arr) {
        return arr.reduce(function(prev, current) {
            return prev.concat(Array.isArray(current) ? steamroller(current) : current);
        }, []);
    }

    console.log(steamroller([1, [2],
        [3, [
            [4]
        ]]
    ]));
    /*-----------------------------------------------------------------------------------*/

    var reduce = function(arr, callback, startValue) {
        var i, length = arr.length,
            result = startValue;
        for (i = 0; i < length; i = i + 1) {
            result = callback.call(null, result, arr[i], i, arr);
        }
        return result;
    };
    /*-----------------------------------------------------------------------------------*/
    var myobj = {
        name: "John",
        surname: "Doe"
    }

    var count = 0;

    for (k in myobj)
        if (myobj.hasOwnProperty(k)) count++;

    console.log(count);
    /*-----------------------------------------------------------------------------------*/
    function deepCompare(x, y) {
        if (x === y) return true;
        // if both x and y are null or undefined and exactly the same

        if (!(x instanceof Object) || !(y instanceof Object)) return false;
        // if they are not strictly equal, they both need to be Objects

        if (x.constructor !== y.constructor) return false;
        // they must have the exact same prototype chain, the closest we can do is
        // test there constructor.

        for (var p in x) {
            if (!x.hasOwnProperty(p)) continue;
            // other properties were tested using x.constructor === y.constructor

            if (!y.hasOwnProperty(p)) return false;
            // allows to compare x[ p ] and y[ p ] when set to undefined

            if (x[p] === y[p]) continue;
            // if they have the same strict value or identity then they are equal

            if (typeof(x[p]) !== "object") return false;
            // Numbers, Strings, Functions, Booleans must be strictly equal

            if (!foo(x[p], y[p])) return false;
            // Objects and Arrays must be tested recursively
        }

        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
            // allows x[ p ] to be set to undefined
        }
        return true;
    }
    /*-----------------------------------------------------------------------------------*/
    function deepCompare() {
        var i, l, leftChain, rightChain;

        function compare2Objects(x, y) {
            var p;

            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                return true;
            }

            // Compare primitives and functions.     
            // Check if both arguments link to the same object.
            // Especially useful on the step where we compare prototypes
            if (x === y) {
                return true;
            }

            // Works in case when functions are created in constructor.
            // Comparing dates is a common scenario. Another built-ins?
            // We can even handle functions passed across iframes
            if ((typeof x === 'function' && typeof y === 'function') ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }

            // At last checking prototypes as good as we can
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }

            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                return false;
            }

            if (x.constructor !== y.constructor) {
                return false;
            }

            if (x.prototype !== y.prototype) {
                return false;
            }

            // Check for infinitive linking loops
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                return false;
            }

            // Quick checking of one object being a subset of another.
            // todo: cache the structure of arguments[0] for performance
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                } else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                } else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }

                switch (typeof(x[p])) {
                    case 'object':
                    case 'function':

                        leftChain.push(x);
                        rightChain.push(y);

                        if (!compare2Objects(x[p], y[p])) {
                            return false;
                        }

                        leftChain.pop();
                        rightChain.pop();
                        break;

                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }

            return true;
        }

        if (arguments.length < 1) {
            return true; //Die silently? Don't know how to handle such case, please help...
            // throw "Need two or more arguments to compare";
        }

        for (i = 1, l = arguments.length; i < l; i++) {

            leftChain = []; //Todo: this can be cached
            rightChain = [];

            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }

        return true;
    }
    /*-----------------------------------------------------------------------------------*/
    var bind = function(fn, context) {
        // обрезаем ненужные аргументы (функцию и контекст)
        var bindArgs = [].slice.call(arguments, 2);
        return function() {
            // здесь все аргументы будут необходимы
            var fnArgs = [].slice.call(arguments);
            // собираем все 
            return fn.apply(context, bindArgs.concat(fnArgs));
        };
    };
    /*-----------------------------------------------------------------------------------*/
    function slice(arr, begin, end) {

        let result = [];
        begin = parseInt(begin);
        end = parseInt(end);

        if (isNaN(begin) && isNaN(end)) {
            throw new Error('Wrong arguments!')

        }

        for (let i = begin; i < end; i++) {
            result.push(arr[i])
        }

        return result;
    }

    console.log(slice([5, 10, 13, 48, 52, 6, 7, 8, 9], "0", "3"))
        /*-----------------------------------------------------------------------------------*/
    function formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    var d = new Date(2014, 0, 30); // 30 Янв 2014
    alert(formatDate(d)); // '30.01.14'
    /*-----------------------------------------------------------------------------------*/
    function formatDate(userDate) {
        userDate = new Date(userDate);
        y = userDate.getFullYear().toString();
        m = (userDate.getMonth() + 1).toString();
        d = userDate.getDate().toString();
        if (m.length == 1) m = '0' + m;
        if (d.length == 1) d = '0' + d;
        return y + m + d;
    }
    // Display result on page -->
    console.log(formatDate("2/1/2016"))
        /*-----------------------------------------------------------------------------------*/
        < input type = "button"
    id = "hider"
    value = "Нажмите, чтобы спрятать текст" / >

        < div id = "text" > Текст < /div>

    < script >
        // в этой задаче неважно, как именно прятать элемент
        // например через style.display:
        document.getElementById('hider').onclick = function() {
            document.getElementById('text').style.display = 'none';
        } < /script>
        /*-----------------------------------------------------------------------------------*/
        < div id = "clock" >
        < span class = "hour" > hh < /span>:<span class="min">mm</span > : < span class = "sec" > ss < /span> < /div>

    < script >
        var timerId;

    function update() {
        var clock = document.getElementById('clock');
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;

        var minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;

        var seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
        setInterval(update, 1000);
        update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
    }

    clockStart();
    /*-----------------------------------------------------------------------------------*/
    < div id = "calendar" > < /div>

    < script >
        function createCalendar(id, year, month) {
            var elem = document.getElementById(id);

            var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
            var d = new Date(year, mon);

            var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

            // заполнить первый ряд от понедельника
            // и до дня, с которого начинается месяц
            // * * * | 1  2  3  4
            for (var i = 0; i < getDay(d); i++) {
                table += '<td></td>';
            }

            // ячейки календаря с датами
            while (d.getMonth() == mon) {
                table += '<td>' + d.getDate() + '</td>';

                if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
                    table += '</tr><tr>';
                }

                d.setDate(d.getDate() + 1);
            }

            // добить таблицу пустыми ячейками, если нужно
            if (getDay(d) != 0) {
                for (var i = getDay(d); i < 7; i++) {
                    table += '<td></td>';
                }
            }

            // закрыть таблицу
            table += '</tr></table>';

            // только одно присваивание innerHTML
            elem.innerHTML = table;
        }

    function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
        var day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }



    createCalendar("calendar", 2012, 9)
        /*-----------------------------------------------------------------------------------*/
    function removeProperty(obj, prop) {
        if (obj.hasOwnProperty('prop')) {
            console.log(obj);
            delete obj.prop;
            return true;
        } else {
            return false;
        }
    }

    var obj = {
        name: "John"
    };

    removeProperty({
        obj, 'name'
    });
    /*-----------------------------------------------------------------------------------*/
	<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>

<p onclick="removeProperty(obj,'name')">This example calls :</p>
<script>
function removeProperty(obj,prop){

if(obj.hasOwnProperty(prop)) {
    console.log(obj);
    var b = delete obj.prop;
    console.log(b);
    return true;
  }
  else {
      return false;
    }
}

var obj= {
  name:"John"
};

// removeProperty(obj,'name');

</script>
</body>
</html>
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------*/