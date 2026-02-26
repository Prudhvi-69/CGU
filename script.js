import sub from "./sub";

function add(obj)
{
    obj.preventDefault();
    let x = parseInt(document.getElementById('val1').value);
    let y = parseInt(document.getElementById('val2').value);
    alert(x+y);
    sub();
}
document.getElementById('add').addEventListener('click', add);




        document.getElementById('btn').addEventListener('click', function(obj){
            obj.preventDefault();
        document.getElementById('content').innerHTML = "Form submitted without reload";
        });
        document.getElementById('btn2').addEventListener('click', function(cgu){
           //cgu.preventDefault(); //stops reload
            document.getElementById('content').innerHTML = "Form reset without reload";
        });
        document.getElementById('refresh').addEventListener('click', function(){
            location.reload();
        });



