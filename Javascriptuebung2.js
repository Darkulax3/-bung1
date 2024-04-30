let s = 'Geisti';
var index;
var index2;
let loesung;
function getMiddle(s)
{
    if (s.length % 2 == 1){
        console.log('Die Zahl '+ s.length + ' ist ungerade');
        index = Math.ceil(s.length / 2 - 1);
        console.log(index);
        loesung = s[index]
        console.log('Der Buchstabe in der Mitte lautet ' + loesung);
        }
    
    if (s.length % 2 == 0){
        console.log('Die Zahl '+ s.length + ' ist gerade');
        index = Math.ceil(s.length / 2 - 1);
        index2 = index + 1;
        console.log(index);
        console.log(index2);
        loesung = s[index] + s[index2];
        console.log('Die Buchstaben in der Mitte lauten ' + loesung);
        }
       
        
        
   
console.log(s);
return s;
}

getMiddle(s);
