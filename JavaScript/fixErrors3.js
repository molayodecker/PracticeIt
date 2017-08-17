/*
The following program attempts to print a full name given a first name and last
 name as parameters. The last name should be printed in full, starting with 
 a capital letter and followed by all lowercase letters. 
 A comma and the capitalized first name initial should then follow. 
 For example, the call printName("Abby", "Stepp") should output "Stepp, A." to the console.
 The initial code contains several kinds of errors. Fix the code below so that it compiles and runs properly.
*/

//My Solution
function printName(first,last){
      var fullname  = "";
      var lastName  = last.split(' ').slice(0,1).map(function(word){ return word.charAt(0).toUpperCase();}) + last.toLowerCase().slice(1); 
      var firstName =  first.split(' ').slice(0,1).map(function(word){ return word.charAt(0).toUpperCase();});
      fullname = lastName  + ", " + firstName + ".";
      console.log(fullname);
      return fullname;
}

//testcase
/* 
   printName("Abby", "Stepp");  Stepp, A.
   printName("George", "Boole");  Boole, G.
   printName("Alan", "Turing"); Turing, A.
   printName("steve", "JOBS");  Jobs, S.
   printName("Archie", "Ferguson"); Ferguson, A.
   printName("Mr. Foo", "O' Smithy");  O' smithy, M.
*/