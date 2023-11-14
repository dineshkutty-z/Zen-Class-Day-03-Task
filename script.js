//! Question 1:- COMPARE THE TWO JSON

var obj1 = {"name": "dinesh" ,"age": "24"}
var obj2 = {"age": "24" , "name": "dinesh"}

var flag = true
for (var ex in obj1)
{
    if(obj1[ex]!==obj2[ex])
    {
        flag = false;
        break
    }
}
flag?console.log("Equal"):console.log("not equal");


//! Question 2:- USING API URL PRINT COUNTRY FLAGS

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag,result[i].flags.png);
    }    
};

//! Question 3:- USING API URL PRINT COUNTRIES NAMES,REGIONS,SUB REGION AND POPULATIONS

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload =function(){
    var data1=request1.response
    var result1=JSON.parse(data1);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }
};

//! TASK QUESTIOS
// TASK01
// 1.Declare four variables without assigning values and print them in console

var a;
var b;
var c;
var d;
console.log(a); 
console.log(b); 
console.log(c);
console.log(d);

//2.How to get value of the variable myvar as output

console.log("myvar");

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines

var firstName = "DINESH";
var lastName = "KUMAR";
var maritalStatus = "Single";
var country = "India";
var age = 25;

//4.Declare variables to store your first name, last name, marital status, country and age in a single line

var firstName1 = "DINESH", lastName1 = "KUMAR", maritalStatus1 = "Single", country1 = "India", age1 = 25;

//5. Declare variables and assign string, boolean, undefined and null data types

var e = "string";
var f = true;
var g;
var h = null;

//6.Convert the string to integer

var o = "66";
console.log(parseInt(0));
console.log(Number(o));
console.log(+(0));

//7.Write 6 statement which provide truthy & falsey values

/*Here are some examples of statements that provide truthy and falsy values in JavaScript:

!!"Hello" returns true because "Hello" is a non-empty string, which is truthy.
!!0 returns false because 0 is a falsy value.
!![] returns true because an empty array is truthy.
!!{} returns true because an empty object is truthy.
!!null returns false because null is a falsy value.
!!(1/0) returns false because (1/0) evaluates to NaN, which is a falsy value.*/

//!Task 2: Simple Programs todo for Operators
//1.Square of a number

var n1 = 5;
var square = n1*n1
console.log(square);

//2.Swapping 2 numbers

var  j= 5 ,k= 2;
[j,k]=[k,j];
console.log(j,k);

//3.Addition of 3 numbers

var l = 1;
var m = 2;
var n = 3;
console.log(l+m+n);

//4.Celsius to Fahrenheit conversion

var celsius = 40 ;
var fahrenheit = ((celsius * 9/5) + 32);
console.log(fahrenheit + "°F");

//5.Meter to mile
var meter = 10000;
var mile = meter / 1609.34;
console.log(mile);

//6.Pounds to kg

var pounds = 10;
var kg = pounds * 0.45359237;
console.log(kg);

//7.Calculate Batting Average

var runs = 15921;
var innings = 329;
var notOuts = 33; 
var average = (runs / (innings - notOuts));
console.log(average);

//8.Calculate five test scores and print their average

var score1 = 86;
var score2 = 75;
var score3 = 98;
var score4 = 24;
var score5 = 76;
var sum01 = (score1+score2+score3+score4+score5);
var averagescore = (sum01/5);
console.log(averagescore);

//9.Power of any number x ^ y

var x = 5;
var y = 3;
console.log(x ** y);

//10.Calculate Simple Interest

var P = 10000;
var R = 5;
var T = 2;
var SI = ((P*R*T)/100);
console.log(SI);

//11.Calculate area of an equilateral triangle
var side = 10;
var area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
console.log(area);

//12.Area Of Isosceles Triangle

var base = 10;
var height = 15;
var AreaofIsosclesTriangle = (0.5*base*height)
console.log(AreaofIsosclesTriangle);

//13.Volume Of Sphere

var radius = 5;
var volume = ((4 / 3) * Math.PI * Math.pow(radius, 3));
console.log(volume);

//14.Volume Of Prism

var baseArea = 20;
var height1 = 10;
var volumeOfPrism=(baseArea*height1);
console.log(volumeOfPrism);

//15.Find area of a triangle

var base01 = 10;
var height01 = 15;
var areaoftriangle = ((base01*height01)/2)
console.log(areaoftriangle);

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product

var actualCost = 1000; 
var soldCost = 800; 
var discount = ((actualCost - soldCost) / actualCost) * 100;
console.log("The discount of the product is " + discount + "%");

//17.Given their radius of a circle and find its diameter, circumference and area.

var radius01 = 24;
var diameter = 2 * radius01;
var circumference = 2 * Math.PI * radius01;
var area01 = Math.PI * radius01 * radius01;
console.log("The diameter of the circle is " + diameter);
console.log("The circumference of the circle is " + circumference);
console.log("The area of the circle is " + area01);

//18.Given two numbers and perform all arithmetic operations.

var num1 = 10;
var num2 = 5;
var sum = num1 + num2; // Addition
var diff = num1 - num2; // Subtraction
var prod = num1 * num2; // Multiplication
var quot = num1 / num2; // Division
var rem = num1 % num2; // Modulus
console.log(sum);
console.log(diff);
console.log(prod);
console.log(quot);
console.log(rem);

//19.Display the asterisk pattern as shown below(No loop needed):
//*****
//*****
//*****
//*****
//*****

console.log("","*****",'\n',"*****",'\n',"*****",'\n',"*****",'\n',"*****");

//.20Calculate electricity bill?For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

var watts = 100;
var hours = 24;
var days = 30;
var rate = 10;
var kilowatts = watts / 1000;
var units = kilowatts * hours * days;
var bill = units * rate;
console.log("Rs"+ bill.toFixed(2));

//21.Program To Calculate CGPA.

var subject1 = 4; 
var subject2 = 3;
var subject3 = 2;
var subject4 = 1;
var subject5 = 0;
var cgpa = ((subject1 + subject2 + subject3 + subject4 + subject5)/5);
console.log(cgpa);

//TASK03
//1.Write a loop that makes seven calls to console.log to output the following triangle:

for(var ia=0;ia<7;ia++){
  console.log("#".repeat(ia));
};

//2.Iterate through the string array and print it contents

var strArray =["Jazz","pop","rock","classical","western"];
for (var ib = 0;ib<strArray.length;ib++) {
  console.log(strArray[ib]);
};

//ARRAYS:-
//write a code to count the elements in the array . Don"t use length property.
//Declare an empty array;

var myArray = [11, 22, 33, 44, 55];
var emptyArray =[];
var count =0;
for(var z in myArray){
  myArray.push(emptyArray)
   count ++
}
console.log(count);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.How can you find your fifth favorite food?Find the length of your foods array.

var foods = ["Pongasoru","Dosa","Chapathi","Biriyani","Friedrice","Noodles","Icebiriyani","Rice","Idly","Puttu","Idiyappam","Appam","Tamarindrice","Vegbiriyani","Lemonrice","Tomatorice","Curdrice","Sambarrice","Pongal","Parota"];
console.log(foods[4]);
console.log(foods.length);

//Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".

var friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
for (var ic=0;ic< 1;ic++) {
    var temp = friends[ic];
  friends[ic] = friends[ic+3];
  friends[ic+3] = temp;
  }
  console.log(input);
  }
  dataHandling(friends);

  //Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

function dataHandling1(input1){
for (var ie=0;ie<3;ie++) {
console.log(friends1[ie]);
}
}
dataHandling1(friends1);

//Find the person is ur friend or not.

var friends2 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling2(input2, name){
    for (var ig = 0; ig < input2.length; ig++) {
        if (input2.includes(name)) {
            return "friend";
        }
        else{
          return "not friend";
        }
    }
    } 
    var found = dataHandling2(friends2,"Jeff");
    console.log(found);
    
//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends01 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends02 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
    
    function dataHandling3(input3,input4){
        var friend03 = input3.concat(input4);
        friend03.sort();
        console.log(friend03);
    }
    dataHandling3(friends01,friends02);
    
//1.Get the first item, the middle item and the last item of the array

var friends3 = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
var firstitem = friends3.at(0);
var lastitem = friends3.at(-1);
var middleitem = friends3.at(Math.floor(friends3.length / 2));
console.log(firstitem);
console.log(lastitem);
console.log(middleitem);


//2.Add your name to the end of the friends array, and add another name to beginning.

var friends4 = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
friends4.push("Dineshkumar");
friends4.unshift("Garuda");
console.log(friends4);

//3.Add Mr or Ms to the names in the friends array.

var friends5 = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
var sum11 = "";
var friends6 =[];
for (var inx in friends5) {
  friends6.push("Mr "+friends5[inx]);
}
console.log(friends6);

//4. Concat all the names the friends array and return as comma "," seperated string.

var friends7 = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
console.log(friends7.join(','));

//5.Find the friends names who has letter "a" and return the list.

var friends8 = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
var friendsA = [];
for (var ih=0;ih<friends8.length;ih++) {
  var data2 = friends8[ih];
  if (data2.indexOf('a') !== -1) {
    friendsA.push(data2);
  }
}
console.log(friendsA);

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

var friendsB = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
var sumB = 0;
for (var u in friendsB) {
    var friendslength = friendsB[u].length;
    sumB += friendslength;
}
console.log(sumB/friendsB.length);

//7.Find the names and return the list starting with letter M.

var friendsC = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
var friendsD = [];
for (var ij=0;ij<friendsC.length;ij++) {
  var firstLetter = friendsC[ij].charAt(0);
  if (firstLetter == "M") {
    friendsD.push(friendsC[ij]);
  }
}
console.log(friendsD);

//8.Find the name with max characters and return the name.

var friendsE = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
var sumE = 0;
var large = friendsE[0];
for (var ik in friendsE ) {
    if (friendsE[ik].length > large.length){
        large = friendsE[ik];
    }
}
console.log(large);

//9.Find the name with min characters and return the name.

var friendsF = ["AAK chandran","CaptianAmerica","ET","Gabbar","Jeff","Jeff","Mari","MaryJane","Mass","Munnabai","Rajinikanth","Spiderman"];
var sumF = 0;
var min = friendsF[0];
for (var il in friendsF) {
    if (friendsF[il].length < min.length){
        min = friendsF[il];
    }
}
console.log(min);

//10.Find the average in the array below.Make sure you add only the numbers and do avg.

var friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
var sumC = 0;
var countC=0;
for(var im in friendsInfo){
    if (typeof(friendsInfo[im]) == 'number') {
        countC++;
        sumC+=friendsInfo[im];
    }
}
console.log(sumC/countC);

//11.Print the contents of the input variable

var input4 = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]
  
  function dataHandling4(input4){
  for (var io = 0; io < input4.length; io++) {
  //Your code goes here
  var contents = input4[io];
      for(var ip = 0; ip< contents.length; ip++){
          console.log(contents[ip]);
      }
  }
  }
    dataHandling(input4);

//Objects
//What the output
myobject = {1:"one",11:"1",name:"arun"};
console.log(myobject[11]); 
console.log(myobject.name);
//output
//1
//arun

//Add a new key value pair to myobject
//key : ten
//value : ten

newKey = {1:"one",11:"1",name:"arun"};
newKey.ten = "ten";
console.log(newKey);
//{"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.

//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.

function company(firstName, lastName, No, Address, City){
  console.log({
      firstName,
      lastName,
      No,
      Address,
      City
  })
}
company('Guvi', 'Geek', '6', 'IIT-M RP','Chennai');

//How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

//Guvi, Geek, 6, IIT-M RP,Chennai.
//Amazon, Inc, 31, SP Infocity, Chennai.
//Google, Alphabet, 34 Amphitheater Parkway, MountainView.
//Tesla, Inc , 32, 333 Santana Row,San Jose.

var companies = [
  {
    name: "Guvi",
    type: "Geek",
    address: "6, IIT-M RP",
    city: "Chennai"
  },
  {
    name: "Amazon",
    type: "Inc",
    address: "31, SP Infocity",
    city: "Chennai"
  },
  {
    name: "Google",
    type: "Alphabet",
    address: "34 Amphitheater Parkway",
    city: "MountainView"
  },
  {
    name: "Tesla",
    type: "Inc",
    address: "32, 333 Santana Row",
    city: "San Jose"
  }
];
console.log(companies);