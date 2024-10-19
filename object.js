const value =Symbol("key1");
const employee ={
    name : 'hitesh',
    [value] :'mykey1',
    id : 452,
    address : 'loni'  
}
console.log(employee);

console.log(employee.value);