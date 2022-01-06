var message;  
//var occasion;

function greet (occasion)
{
switch(occasion)
{
    case "New Year":
        message="Happy New Year";
        break;
    case "Chrismas":
        message="Happy Chrismas";
        break;
    case "Birthday":
        message="Happy Birthday";
        break;
    case "Anniversary":
        message="Happy Anniversary";
        break;
    default :
    console.log("Invalid Occasion");
}
console.log("On the occasion of "+occasion+ " " + " "+message);
}


greet("New Year");
greet("Chrismas");
greet("Birthday");
greet("Anniversary");