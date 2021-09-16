

let userInput = document.getElementById("input");
let radDeg = document.getElementById("rad_deg");
let sqrt = document.getElementById("sqrt");
let nthSqrt = document.getElementById("nth_sqrt");
let sine = document.getElementById("sin");
let cosine = document.getElementById("cos");
let tang = document.getElementById("tan");
let natLog = document.getElementById("nat_log");
let decLog = document.getElementById("dec_log");
let logXY = document.getElementById("log_x_y");
let eX = document.getElementById("e_x");
let x2 = document.getElementById("x_2");
let xy = document.getElementById("x_y");
let factor = document.getElementById("abs");
let piConst = document.getElementById("pi");
let eulerConst = document.getElementById("euler");
let pi = Math.PI.toFixed(4);
let e = Math.E.toFixed(4);
let erase = document.getElementById("erase");
let left = document.getElementById("left_par")
let right = document.getElementById("right_par")
let divided = document.getElementById("divided");
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let times = document.getElementById("times");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let percent = document.getElementById("percent");
let decim = document.getElementById("decim");
let equals = document.getElementById("equals");





// change between rad and degs, pressing e and pi //

function radeg(){
    let deg_rad = radDeg.textContent
    if (deg_rad == "deg"){
        radDeg.textContent = "rad"
    } else {
        radDeg.textContent = "deg"
    }
}
radDeg.addEventListener("click", radeg)

function piCt(){
    if ( userInput.innerHTML == "0"){
        eraser()
        userInput.textContent += pi
    } else {
        userInput.textContent += pi
    }
}
piConst.addEventListener("click", piCt)

function eCt(){
    if (userInput.innerHTML == "0"){
        eraser()
        userInput.textContent += e
    } else {
        userInput.textContent += e
    }
}
eulerConst.addEventListener("click", eCt)



// left side functions //

function SQRTS(){
    let a = eval(userInput.innerHTML)
    if (a == ""){
        userInput.innerHTML = "0";
    } else if (a < 0 ){
        userInput.innerHTML = "not a valid case"
    } else {
        userInput.innerHTML = Math.sqrt(a)
    }
}
sqrt.addEventListener("click", SQRTS)

function SQRTS3(){
    let a = eval(userInput.innerHTML)
    if (a == ""){
        userInput.innerHTML = "0";
    } else {
        userInput.innerHTML = Math.cbrt(a)
    }
}
nthSqrt.addEventListener("click", SQRTS3)



function SINE(){
    let a = eval(userInput.innerHTML)

    deg_rad = radDeg.textContent
    if (deg_rad == "deg"){
        a = a*pi/180;
    } 

    if (a == ""){
        userInput.innerHTML = "0";
    } else {
        userInput.innerHTML = Math.sin(a)
    }
}
sine.addEventListener("click", SINE)

function COSINE(){
    let a = eval(userInput.innerHTML)

    deg_rad = radDeg.textContent
    if (deg_rad == "deg"){
        a = a*pi/180;
    } 

    if (a == ""){
        userInput.innerHTML = "0";
    } else {
        userInput.innerHTML = Math.cos(a)
    }
}
cosine.addEventListener("click", COSINE)

function TANGENT(){
    let a = eval(userInput.innerHTML)

    deg_rad = radDeg.textContent
    if (deg_rad == "deg"){
        a = a*pi/180;
    } 

    if (a == ""){
        userInput.innerHTML = "0";
    } else {
        userInput.innerHTML = Math.tan(a)
    }
}
tang.addEventListener("click", TANGENT)



function NATURALL(){
    let a = eval(userInput.innerHTML);
    
    if (a == 0){
        userInput.innerHTML = "Incorrect Expression";
        userInput.innerHTML.style = 'font-style: italic';
    } else {
        userInput.innerHTML = Math.log(a)
    }
}
natLog.addEventListener("click", NATURALL)

function TENL(){
    let a = eval(userInput.innerHTML)

    if (a == 0){
        userInput.innerHTML = "Incorrect Expression";
        userInput.innerHTML.style = 'font-style: italic';
    } else {
        userInput.innerHTML = Math.log10(a)
    }
}
decLog.addEventListener("click", TENL)

function LOGXY(){
    let logs = userInput.innerHTML;
    userInput.innerHTML = "log <sub>"+ logs + "</sub> ";
}
logXY.addEventListener("click", LOGXY)




function EXPX(){
    let a = eval(userInput.innerHTML);

        userInput.innerHTML = Math.pow(e,a);
}
eX.addEventListener("click", EXPX)
function X2(){
    let a = eval(userInput.innerHTML);

        userInput.innerHTML = Math.pow(a,2);
}
x2.addEventListener("click", X2)
function XY(){
    let xtoy = userInput.innerHTML;
    userInput.innerHTML = "exp: " + xtoy + " ^ ";
}
xy.addEventListener("click", XY)


function FACT(){
    let a = eval(userInput.innerHTML);
    for (i = a-1; i >= 1; i--){
        a *= i;
    }
        userInput.innerHTML = a;
}
factor.addEventListener("click", FACT)
// equals function - get mathematical expression converted //

function getExpress()
{

    let userIns = userInput.textContent;
    console.log(userIns)

    if (userIns[0] == 'l'){
        a = userIns.split(' ');
        let sub = parseFloat(a[1]);
        let sup = parseFloat(a[2]);
        userIns = Math.log(sup)/Math.log(sub);
    } else if (userIns[0] == 'e'){
        let b = userIns.split(' ');
        let bas = parseFloat(b[1]);
        let expp = parseFloat(b[3]);
        userIns = Math.pow(bas, expp);;
    }

    let result = eval(userIns);
    userInput.textContent = result;
}
equals.addEventListener("click", getExpress)


// right side operations //
function eraserTotal(){
    userInput.textContent = ""
}
erase.addEventListener("click", eraserTotal)


function zeros(){
    if ( userInput.textContent == "0"){
        userInput.textContent = ""
    }
}
function voids(s){
    if ( userInput.textContent == s){
        userInput.textContent = ""
    }
}

function left_side_par(){
    userInput.textContent += "("
}
left.addEventListener("click", left_side_par)

function right_side_par(){
    userInput.textContent += ")"
}
right.addEventListener("click", right_side_par)


// numbers and decimals //

function f_one(){
    zeros()
    userInput.textContent += "1"
}
function f_two(){
    zeros()
    userInput.textContent += "2"
}function f_three(){
    zeros()
    userInput.textContent += "3"
}
function f_four(){
    zeros()
    userInput.textContent += "4"
}
function f_five(){
    zeros()
    userInput.textContent += "5"
}
function f_six(){
    zeros()
    userInput.textContent += "6"
}
function f_seven(){
    zeros()
    userInput.textContent += "7"
}
function f_eight(){
    zeros()
    userInput.textContent += "8"
}
function f_nine(){
    zeros()
    userInput.textContent += "9"
}
function f_zero(){
    userInput.textContent += "0"
}
function decimals(){
    userInput.textContent += "."
}
function plusf(){
    userInput.textContent += "+"
    voids("+")
}
function minusf(){
    userInput.textContent += "-"
}function or(){
    userInput.textContent += "*"
    voids("*")
}
function divby(){
    userInput.textContent += "/"
    voids("/")
}
function percentf(){
    userNum = eval(userInput.textContent)/100;
    userInput.textContent = userNum;
}
one.addEventListener("click", f_one)
two.addEventListener("click", f_two)
three.addEventListener("click", f_three)
four.addEventListener("click", f_four)
five.addEventListener("click", f_five)
six.addEventListener("click", f_six)
seven.addEventListener("click", f_seven)
eight.addEventListener("click", f_eight)
nine.addEventListener("click", f_nine)
zero.addEventListener("click", f_zero)
decim.addEventListener("click", decimals)
divided.addEventListener("click", divby)
plus.addEventListener("click", plusf)
percent.addEventListener("click", percentf)
minus.addEventListener("click", minusf)
times.addEventListener("click", or)


function key_num(event){
    let varb = event.keyCode;

    if (varb == '48'){
        userInput.textContent += "0"
    } else if (varb == '49'){
        zeros()
        userInput.textContent += "1"
    } else if (varb == '50'){
        zeros()
        userInput.textContent += "2"
    } else if (varb == '51'){
        zeros()
        userInput.textContent += "3"
    } else if (varb == '52'){
        zeros()
        userInput.textContent += "4"
    } else if (varb == '53'){
        zeros()
        userInput.textContent += "5"
    } else if (varb == '54'){
        zeros()
        userInput.textContent += "6"
    } else if (varb == '55'){
        zeros()
        userInput.textContent += "7"
    } else if (varb == '56'){
        zeros()
        userInput.textContent += "8"
    } else if (varb == '57'){
        zeros()
        userInput.textContent += "9"
    } else if (varb == '190'){
        userInput.textContent += "."
    } else if (event.keyCode == 8){
        console.log("press")
        while (userInput.textContent !== ""){
            let a = userInput.textContent;
            a.slice(0,-1);
            console.log(a)
            userInput.textContent = a
        }
    }
}

document.addEventListener("keypress", key_num)







