function add(obj){
        obj.preventDefault(); //It stops the page from reloading when the button is clicked
        let t = document.getElementById('val1').value;
        document.getElementById('result').innerHTML="Input Entering is: "+t;
}
function refresh()
{
        confirm("Are you sure you want to refresh the page? All data will be lost.");
        //this function will give us two options of okay or cancel unlike alert only okay
       location.reload(); //Refresh page manually with a button
}