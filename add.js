import {sub} from "./sub";
function add(obj)   
{
    obj.preventDefault();
    let x = parseInt(document.getElementById('val1').value);
    let y = parseInt(document.getElementById('val2').value);
    alert(x+y);
    sub();
};
export default add();