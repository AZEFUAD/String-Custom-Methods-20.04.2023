//1-ci məsələnin cavabı:
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  let sentence= 'hello Emir Teymur';
  console.log(sentence.capitalize());


  //2-ci məsələnin cavabı:
//   String.prototype.reverse = function() {
//     let reversedString = '';
//     for(let i = this.length - 1; i >= 0; i--) {
//       reversedString += this.charAt(i);
//     }
//     return reversedString;
//   };

//   let sentence= 'good morning math';
//   console.log(sentence.reverse());

  //3-cü məsələnin cavabı:
//   String.prototype.capitalizeVowels = function() {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let newString = '';
//     for(let i = 0; i < this.length; i++) {
//       let char = this.charAt(i);
//       if(vowels.includes(char.toLowerCase())) {
//         newString += char.toUpperCase();
//       } else {
//         newString += char;
//       }
//     }
//     return newString;
//   };

//   let sentence= 'hello javascript';
//   console.log(sentence.capitalizeVowels());
