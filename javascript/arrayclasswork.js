
//alert("GODN IS HERE");
const students=[
   ["Godwin",65, "biology","2ndterm"],
   ["Faith",45, "biology","2ndterm"],
   ["Godpower",85, "biology","2ndterm"],
   ["Better",25, "biology","2ndterm"],
   ["Mary",35, "biology","2ndterm"],
   ["Matthew",93, "biology","2ndterm"],
   ["Hope",75, "biology","2ndterm"],
   ["Joy",95, "biology","2ndterm"],
   ["Jenifer",100, "biology","2ndterm"],
   ["Peter",90, "biology","2ndterm"],
   ["Joseph",15, "biology","2ndterm"],
   ["Confidence",15, "biology","2ndterm"],
   ["Loveth",55, "biology","2ndterm"],
   ["Celetin",65, "biology","2ndterm"],
   ["Bola",18, "biology","2ndterm"],
   ["Felicia",78, "biology","2ndterm"],
   ["Obinna",77, "biology","2ndterm"],
   ["Chioma",82, "biology","2ndterm"],
   ["Nkechi",38, "biology","2ndterm"],
   ["Martha",89, "biology","2ndterm"]

]
//console.log(students);
// for(let j=0;j<students.length;j++){
//     console.log(students[j]);
// }
//console.table(students)
// Question: calculate the average score for each student(ist,2nd and 3rd)
//No 1:
// for(let i=0; i<students.length; i++){
//     //console.log(students[i]);
//     let insidelooplength = students[i].length;
//     //console.log(insidelooplength);
//     for(let j=0; j<insidelooplength; j++){
//         if(students[i][1]>=100){
//         console.log('you come first ' + students[i][0])
//         }
//         else if(students[i][1]>=95){
//             console.log('you come second ' + students[i][0])
//         }
//         else if(students[i][1]>=93){
//             console.log('you come third ' + students[i][0])
//         }
//     }
// }
//NO 2: Question:calculate the percentage of each student score.if any student score is about 75% recommend the 
//student for a government scholarship
//else
// if ant student score is below  40% ask the student to repeat the class

students.forEach(stud=>{
     let percentage =((stud[1]/100)*100).toFixed();
    stud.splice(4,0,percentage+"%")
    
    if(percentage>=75){
        console.log('Congratulation you won government scholarship :' + percentage)
    }else{
        console.log('You have to repeat :'+percentage)
    }
     
 })
console.table(students)


//  if(students[1][4]>=75){
    
// console.log('you got for a government scholarship ' + students[i][4])
 
// }
//


// for(let k=0;k<((students[1]/100)*100).length;k++){
//     console.log(students[k]);
//     if()
    
//     }