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

function myFunction(data){
    var pagenum = PageJump();
    if(pagenum==0){
        pagenum = 1;
    }
    var out = "";
    for(var i=(pagenum-1)*8;i<pagenum*8;i++){
        out+="<tr><td>"+data[i].id+"</td><td>"+data[i].data2+"</td><td>"+
            data[i].times+"</td><td>"+data[i].packet+"</td><td>"+
            data[i].bandwidth+"</td><td>"+data[i].data6+"</td><td>"+
            data[i].data7+"</td><td>"+data[i].data8+"</td><td>"+
            data[i].data9+"</td><td>"+data[i].fps+"</td></tr>";
    }
    document.getElementById('mytab-body').innerHTML=out;
    document.getElementById('page-input').value = "1";
    console.log(out);
}

loadXMLDoc();

// setInterval(loadXMLDoc,5000);

function PageJump(){
    var pagenum = document.getElementById('page-input').value;
    // console.log(pagenum);
    var pagenum2 = Number(pagenum);
    console.log(pagenum2);
    return pagenum2;
}

// function PageJumpRefrash(){
//     var pagenum = PageJump();
//     if(pagenum==0){
//         pagenum = 1;
//     }
//     var out = "";
//     for(var i=(pagenum-1)*8;i<pagenum*8;i++){
//         out+="<tr><td>"+data[i].id+"</td><td>"+data[i].data2+"</td><td>"+
//             data[i].times+"</td><td>"+data[i].packet+"</td><td>"+
//             data[i].bandwidth+"</td><td>"+data[i].data6+"</td><td>"+
//             data[i].data7+"</td><td>"+data[i].data8+"</td><td>"+
//             data[i].data9+"</td><td>"+data[i].fps+"</td></tr>";
//     }
//     document.getElementById('mytab-body').innerHTML=out;
//     console.log(out);
// }