var date = new Date()

var today = date.getDay()

switch (today){
    case 0: console.log("Today is sunday")
    break;
    case 1: console.log("Today is Monday")
    break;
    
    default: console.log("Wrong Number")
    break;
}

// var grade=0;
    
// grade=window.prompt("Enter your grade");

// switch(grade)
//     {
//          case grade>= 95:
//             document.write("You got A+");
//             break;
            
//         case grade<95 && grade>= 90:
//             document.write("You got A");
//             break;   
        
//         case grade<90 && grade>=85:
//             document.write("You got A-");
//             break;
            
//         case grade<85 && grade>=80:
//             document.write("You got B+");
//             break;
            
//         case grade<80 && grade>=75:
//             document.write("You got B");
//             break;
        
//         case grade<75 && grade>=70:
//             document.write("You got B-");
//             break;
            
//         case grade<70 && grade>=65:
//             document.write("You got C+");
//             break;
            
//         case grade<65 && grade>=60:
//             document.write("You got C");
//             break;
            
//         case grade<60 && grade>=55:
//             document.write("You got C-");
//             break;
            
//         case grade<55 && grade>=50:
//             document.write("You got D");
//             break;
            
//         case grade<50:
//             document.write("You FAILED");  
//             break;
            
//          default:
//             document.write("Wrong Number"); 
//     }