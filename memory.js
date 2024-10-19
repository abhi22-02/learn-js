/**Using the stack memory**/
let myname="hitesh";
let Aname=myname;
Aname= "Sai";
console.log(Aname);
console.log(myname);


//**Using the heap memory**/

let user={
    name:"sai",
    id:102,
    address:'loni'
};

let user2={
  name:"ram",
  id:509,
  address:'pune'
};
let user3=user;
console.log(user3);

user2=user3;
console.log(user3);
