/**
 * @param {string} command
 * @return {string}
 */

//P: always string, no empty string
//R: string
//E: G()()()()(al)=>Gooooal
var interpret = function(command) {
  let str=[];
 for(let i=0;i<command.length;i++){
   if(command[i]=="G")
     str.push("G");
   else if(command[i]=="(" && command[i+1]==")"){
    str.push("o");
    i+=1
   } 
   else if(command[i]=="(" && command[i+1]=="a"){
    str.push("al");
     i+=3;
   }
     
 }
 return str.join("");
};