import {subs} from "./sub.js";
document.getElementById('add').addEventListener('click', function adds(obj){
    obj.preventDefault();
    let x = 11;
    let y = 58;
    alert(x+y);
    subs();
});