let points = prompt("Enter your points 0-100")

if(isNaN(points) || points > 100 || points<0){
    console.log("enter your points!")
}
else(
    points = parseInt(points)
)
let grade;
if(points >= 0 && points <=19){
    grade=1
}

 else if (points >= 20 && points <= 39) {
          grade = 2;}

 else if(points >= 40 && points <=59){
    grade=3;
}

 else if(points >= 60 && points <=79){
    grade=4;
}
else{
    grade = 5;
}

alert(`Your grade is ${grade}`)