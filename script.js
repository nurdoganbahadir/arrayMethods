// ARRAY METHODS
let myArr = ["mustafa", "apo", "nuri", "yiğit", "berk"];

//! .shift() dizinin ilk elemanını siler ve bize bunu string olarak döndürür
// console.log(myArr.shift());
// console.log(myArr);
//! .pop() dizinin son elemanını siler ve bize bunu string olarak döndürür
// console.log(myArr.pop());
// console.log(myArr);
//! .unshift() dizinin başına girilen elemanı ekler eve bize bunun uzunluğunu döner orjinal dizeyi değiştirir
// myArr.unshift("doğancan");
// console.log(myArr);
//! .push() dizinin sonuna eleman eklemek için kullanılır orjinal dizeyi değiştirir
// myArr.push("ömer","dorukhan")
// console.log(myArr);
//! .slice
// console.log(myArr.slice(1,4));
//! splice belirtilen aralıktaki dizi elemanlarını orjinal dizeden kaldırarak yeni bir dize oluşturur.
// console.log(myArr.splice(1,3));
// console.log(myArr);
//! .concat() iki farklı dizeyi birleştirmeyi sağlar
// let newArr =["bmw","honda","kia"]
// let arr = myArr.concat(newArr)
// console.log(arr);
//! .include() içine yazdığımız ifadeyi dizede aratır ve bize boolen ifade döndürür.
// console.log(myArr.includes("apo"));
//! .indexOf() aradığımız elemanın dizede hangi indexte olduğunu bize döner eğer dizede aratılan eleman yoksa -1 döner
// console.log(myArr.indexOf("nuri"));
//! .lasIndexOf() indexOf ile aynı farkı dönmeye sondan başlar
// console.log(myArr.lastIndexOf("apo"));
//! .reverse() diziyi tersine çevirir yine dizi yazdırır
// console.log(myArr.reverse());
//! .join() diziyi stringe çevirir ve verdiğimiz string değeri öğelerin arasına döndürür
// console.log(myArr.join(" - "));
//! .sort() alfabetik olarak sıralar sayısal olarak sıralası için farklı metodlar kullanılması gerekir kullanımı aşağıda verilmiştir.
// console.log(myArr.sort());
// let numberArr = [1, 5, 2, 16, 12, 7];
// numberArr.sort(function(a,b){
//     return b-a
// })
// console.log(numberArr);
//! .toString() içerisine değer almaz dizeyi stringe çevirir ve virgülle ayırır orjinal dizeyi değiştirmez
// console.log(myArr.toString());
// console.log(myArr);
//! .at() elemanlara ulaşmak pozitif veya negatif değer verebiliriz ve bize elemanı string olarak döndürür. Orjinal dizeyi bozmaz
// console.log(myArr.at(-1));
// console.log(myArr);
