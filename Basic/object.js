// const jsonString = '{"Name":"Jitesh","Age":23,"City":"Kolad"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject)

const jsonObjectToConvert = {Name:"Jitesh",Age:23,City:"Kolad"};
const jsonString = JSON.stringify(jsonObjectToConvert);
console.log(jsonString)