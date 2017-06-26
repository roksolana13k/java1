
var a = Number (prompt('Введіть A'));
var b = Number(prompt('Введіть B'));
var c = Number(prompt('Введіть C'));



function quadraticEquation(a, b, c) {
    var result;
    
    if (a === 0) {
        result = 'Рівняння не квадратне, будь ласка введіть A відмінне від 0!';
        return result;
    }
    var d = calcD(a, b, c);
    function calcD(a, b, c) {
    return b*b - 4*a*c;
}
    
    
    
    var x1 = (-b + Math.sqrt(b*b-4*a*c)/2*a);
    var x2 = (-b - Math.sqrt(b*b-4*a*c)/2*a);
    
    return 'x1 = ' + x1 + ', x2 = ' + x2;
}

function calcD(a, b, c) {
    return b*b - 4*a*c;
}
var result = quadraticEquation(a, b, c);
document.write(result);

