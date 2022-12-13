// ajax，实现表格的局部刷新
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

// ajax，实现表格的局部刷新
function myFunction(data){
    var pagenum = PageJump2();
    var out = "";
    for(var i=(pagenum-1)*8;i<pagenum*8;i++){
        out+="<tr><td>"+data[i].id+"</td><td>"+data[i].data2+"</td><td>"+
            data[i].times+"</td><td>"+data[i].packet+"</td><td>"+
            data[i].bandwidth+"</td><td>"+data[i].data6+"</td><td>"+
            data[i].data7+"</td><td>"+data[i].data8+"</td><td>"+
            data[i].data9+"</td><td>"+data[i].fps+"</td></tr>";
    }
    document.getElementById('mytab-body').innerHTML=out;
    // document.getElementById('page-input').value = pagenum;
    // console.log(out);
}

// 返回输入框中输入的页码
function PageJump(){
    var pagenum = document.getElementById('page-input').value;
    // console.log(pagenum);
    var pagenum2 = Number(pagenum);
    // console.log(pagenum2);
    return pagenum2;
}

// 返回输入框中记录的历史页码
function PageJump2(){
    var pagenum = document.getElementById('page-input2').value;
    // console.log(pagenum);
    var pagenum2 = Number(pagenum);
    // console.log(pagenum2);
    return pagenum2;
}

// 下一页函数
function NextPage(){
    var pagenum = PageJump2();
    pagenum += 1;
    document.getElementById('page-input').value = pagenum;
    loadXMLDoc3();
}

// 上一页函数
function LastPage(){
    var pagenum = PageJump2();
    pagenum -= 1;
    document.getElementById('page-input').value = pagenum;
    loadXMLDoc3();
}

// ajax，实现反馈信息的局部刷新
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

// ajax，实现反馈信息的局部刷新
function myFunction2(info){
    var info_len = info.length;
    out = "";
    // ---------------------------------------------------------------------------------------------------
    // 以下为最新消息显示在最顶部
    // for(var i=0;i<info_len;i++){
    //     if(info[i].type == "info"){
    //         out = info[i].content+"<br>---------------------------<br>"+out;
    //     }
    //     else if(info[i].type == "error"){
    //         out = "<p style=\"color:red;\">"+info[i].content+"</p>---------------------------<br>"+out;
    //     }
    // }
    // document.getElementById('info-text').innerHTML = out;
    // 以上为最新消息显示在最顶部
    // ---------------------------------------------------------------------------------------------------

    // ***************************************************************************************************
    // 以上为最新消息显示在最底部，当有新消息时，显示“有新消息”，点击“有新消息”即可自动滑到最底部
    for(var i=0;i<info_len;i++){
        if(info[i].type == "info"){
            out += info[i].content+"<br>---------------------------<br>";
        }
        else if(info[i].type == "error"){
            out += "<p style=\"color:red;\">"+info[i].content+"</p>---------------------------<br>";
        }
    }
    var info_history =  document.getElementById('info-text2').innerHTML;
    var scroll = document.getElementById('info-text');
    // console.log(info_history);
    if(info_history=="隐藏元素，用于记录历史消息"){
        document.getElementById('info-text2').innerHTML = out;
        document.getElementById('info-text').innerHTML = out;
        scroll.scrollTop = scroll.scrollHeight;
        return 0;
    }
    if(scroll.scrollTop+scroll.clientHeight>=scroll.scrollHeight){
        // console.log("已在最底端");
        document.getElementById('info-text').innerHTML = out;
        document.getElementById('info-text2').innerHTML = out;
        scroll.scrollTop = scroll.scrollHeight;
    }
    else{
        // console.log("未在最底端");
        if(info_history==out){
            // console.log("没有新信息");
            return 0;
        }
        else{
            // console.log("有新信息");
            document.getElementById('info-text').innerHTML = out;
            document.getElementById('info-text2').innerHTML = out;
            document.getElementById("new-info").style.visibility = "visible";
        }
    }
    // 以上为最新消息显示在最底部，当有新消息时，显示“有新消息”，点击“有新消息”即可自动滑到最底部
    // ***************************************************************************************************
}

// ajax，实现页面跳转
function loadXMLDoc3(){
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
            myFunction3(myArr);
        }
    }
    xmlhttp.open("GET","/data.json",true);
    xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xmlhttp.send();
}

// ajax，实现页面跳转
function myFunction3(data){
    var pagenum = PageJump();
    if(pagenum>10){
        alert("超出测试用例组规定范围");
        document.getElementById('page-input').value = document.getElementById('page-input2').value;
        return 0;
    }
    else if(pagenum<=0){
        alert("超出测试用例组规定范围");
        document.getElementById('page-input').value = document.getElementById('page-input2').value;
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
    document.getElementById('page-input2').value = pagenum;
    var scroll = document.getElementById("rwd-table2-id");
    scroll.scrollTop = 0;
    // console.log(out);
}

function PageToBottom(){
    var scroll = document.getElementById("info-text")
    scroll.scrollTop = scroll.scrollHeight;
    document.getElementById("new-info").style.visibility="hidden";
}

loadXMLDoc();
loadXMLDoc2();
// 调试用，设计的刷新时间很短，根据情况修改
setInterval(loadXMLDoc,20);
setInterval(loadXMLDoc2,20);