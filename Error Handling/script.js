//Error Handling -->
//Agar code me kahi error hai aur ham chahte hai us error ke wajah se hamara pura code crash na ho ham try catch block ka use karte hai

//try block me ham wo code likhte hai jisme error aane ke chances hote hai
//catch block me ham wo code likhte hai jo error aane par execute hota hai

let a = 10;
let b = 5;
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
try{
    console.log("a+b =",a+c); //error aayega,isiliye ham is code ko try catch block me likhenge
}catch(err){
    console.log("Error aaya hai:",err);
}
console.log("a+b =",a+b);
console.log("a+b =",a+b);