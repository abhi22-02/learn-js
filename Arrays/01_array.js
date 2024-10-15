const myarr=[0,1,2,3];
console.log(myarr);

myarr.push(6);
myarr.push(7);
console.log(myarr);

const array=[0,1,2,3,4,5,6];
console.log(array);

array.push(7);
console.log(array);

array.pop();
console.log(array);

array.pop();
console.log(array);

array.unshift(8);
console.log(array);

array.shift(8);
console.log(array);

console.log(array.includes(2));

console.log(array.indexOf(2));

console.log("A",myarr)
const newarr=myarr.slice(1,3);
console.log(newarr);
console.log("B",myarr);

const newarr1=myarr.splice(1,3);
console.log(newarr1)
console.log("c",myarr)
