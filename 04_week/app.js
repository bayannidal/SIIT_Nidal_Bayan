document.write("<br>", "1. ");

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (var i = 0; i < arr.length; i++) {
    document.writeln(arr[i]);
}
document.write("<br>");
document.write("<br>", "2. ");

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        document.writeln(arr[i]);
    }
}
document.write("<br>");
document.write("<br>", "3. ");


var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
document.writeln(sum);

document.write("<br>");
document.write("<br>", "4. ");

var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
document.writeln(max);

document.write("<br>");
document.write("<br>", "5. ");

var num = 1;
var c = 0;
var arr2 = [1, 34, 1, 5, 61, 2, 6, 3, 4, 6, 1, 12, 5, 1];
for (var i = 0; i < arr2.length; i++) {
    if (num == arr2[i]) {
        c++;
    }
}
document.writeln(c);


document.write("<br>");
document.write("<br>", "6. ");
document.write("<br>");
document.write("<br>");

var arr3 = [1, 0, 1, 0];

for (var j = 0; j < 4; j++) {


    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i] == 0) {
            arr3[i] = 1;
        }
        else {
            arr3[i] = 0;
        }
    }
    document.writeln(arr3.join(" "));
    document.writeln("<br>");
}


