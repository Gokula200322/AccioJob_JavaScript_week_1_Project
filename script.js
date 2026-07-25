/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((value) =>{
    if(value.profession === "developer"){
      console.log(value);
    }
  });
}

//PrintDeveloperbyMap(arr);

function PrintDeveloperbyForEach() {
  arr.forEach((value)=>{
    if(value.profession === "developer"){
      console.log(value);
    }
  });
}

//PrintDeveloperbyForEach(arr);

function addData() {
  let employee = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(employee);

  console.log(employee);
}

//addData(arr);

function removeAdmin() {
  for(let i =0;i<arr.length;i++){
    if(arr[i].profession === "admin"){
      arr.pop();
    }
  }
  console.log(arr);
}

//removeAdmin(arr);


function concatenateArray() {
  let arr2 = [
  { id: 5, name: "gokul", age: "22", profession: "tester" },
  { id: 6, name: "ram", age: "23", profession: "devops" },
  { id: 7, name: "karthi", age: "21", profession: "Cybersecurity" }
];

let newArr = arr.concat(arr2);

console.log(newArr);

}

//concatenateArray(arr);

