const arr1=['hitesh','sai','ram'];
const arr2=['sham','karan','pratik']
const arr3=[...arr1,...arr2]
console.log(arr3);

const a={...arr1};
console.log(a);

const arr4=[5,8,9];
function sum(v1,v2,v3)
{
  return v1+v2+v3;
}
console.log(sum(...arr4));

const Array=[8,5,6,[8,5,6,9,[8,5,5],8,],[8,3]];
const real_array=Array.flat(Infinity);
console.log(real_array);

console.log(Array.from("hitesh"));

