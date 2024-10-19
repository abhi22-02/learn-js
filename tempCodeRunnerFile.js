let myarr=[5,8,4,6,9,87,50];
console.log(myarr);

myarr.push(9);
console.log(myarr);

myarr.pop();
console.log(myarr);

myarr.unshift(0);
console.log(myarr);

myarr.shift();
console.log(myarr);


console.log(myarr.includes(9));

console.log(myarr.indexOf(9));

const arr1=[8,85,6,9,5,7,5,9];
const arr2=arr1.join();
console.log(arr2);

const a1=[8,5,8,9,6,7];
console.log(a1);

const ele=a1.slice(0,2);
console.log(ele);

const e1=a1.splice(0,3);
console.log(e1);
console.log(a1);