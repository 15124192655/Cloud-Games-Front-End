function loadXMLDoc(){
    var xmlhttp;
    if(window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            var myArr  = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    }
    xmlhttp.open("GET","/data.json",true);
    xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xmlhttp.send();
}
function myFunction(arr){
    var out = "";
    out = arr[1].times;
    document.getElementById("test1").innerHTML = out;
}
setInterval(loadXMLDoc,2000);