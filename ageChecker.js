/* this p
rogram checks the catigory of the users age
Take input from user: username
take input from user: age 
check the age by catigory
diplay a message with the username 
*/ 
// input
let candidateName = prompt("this program classified you by category\nType in your name;");
let cndidateAge = prompt(" Type in yor age:");
candidateAge = number(candidateAge)

// processing section

let message;
if (candidateAge < 13){
    message = candidateName + ", you are an adolecent."
else if ( candidateAge <