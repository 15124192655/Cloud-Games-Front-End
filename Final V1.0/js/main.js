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
    // if(pagenum==0){
    //     pagenum = 1;
    // }
    if(pagenum>10){
        alert("超出测试用例组规定范围");
        document.getElementById('page-input').value = 10;
        return 0;
    }
    if(pagenum<=0){
        alert("超出测试用例组规定范围");
        document.getElementById('page-input').value = 1;
        return 0;
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
    document.getElementById('page-input').value = pagenum;
    // console.log(out);
}



function PageJump(){
    var pagenum = document.getElementById('page-input').value;
    // console.log(pagenum);
    var pagenum2 = Number(pagenum);
    // console.log(pagenum2);
    return pagenum2;
}

function NextPage(){
    var pagenum = PageJump();
    pagenum += 1;
    document.getElementById('page-input').value = pagenum;
    loadXMLDoc();
}

function LastPage(){
    var pagenum = PageJump();
    pagenum -= 1;
    document.getElementById('page-input').value = pagenum;
    loadXMLDoc();
}

function loadXMLDoc2(){
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
            myFunction2(myArr);
        }
    }
    xmlhttp.open("GET","/info.json",true);
    xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xmlhttp.send();
}

function myFunction2(info){
    var info_len = info.length;
    out = "";
    for(var i=0;i<info_len;i++){
        if(info[i].type == "info"){
            out = info[i].content+"<br>---------------------------<br>"+out;
        }
        else if(info[i].type == "error"){
            out = "<p style=\"color:red;\">"+info[i].content+"</p>---------------------------<br>"+out;
        }
    }
    document.getElementById('info-text').innerHTML = out;
    // var scroll = document.getElementById('info-text');
    // scroll.scrollTop = scroll.scrollHeight;
}

loadXMLDoc();
loadXMLDoc2();
setInterval(loadXMLDoc,50);
setInterval(loadXMLDoc2,50);