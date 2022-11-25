/* Global Variables */
const apiKey="3dae7fa66571dcb1aa53878e051668e7";
const apiUrl="http:/localhost:8080/";

const zipCodeElement=document.getElementById('zip');
const feelingsCodeElement=document.getElementById('feelings');
const dateElement=document.getElementById('date');
const tempElement=document.getElementById('temp');
const contentElement=document.getElementById('content');


document.getElementById
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function onGenerate(){
    debugger
    let data={
        zipCode:zipCodeElement.value
    }
}