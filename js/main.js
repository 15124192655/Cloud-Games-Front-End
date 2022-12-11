var url = "/data.json"
var request = new XMLHttpRequest();
request.open("get",url);
request.send(null);
request.onload = function(){
    var data = JSON.parse(request.responseText);
    console.log(data[1].id)
    var out = "";
    for(var i=0;i<16;i++){
        out+="<tr><td>"+data[i].id+"</td><td>"+data[i].data2+"</td><td>"+
            data[i].times+"</td><td>"+data[i].packet+"</td><td>"+
            data[i].bandwidth+"</td><td>"+data[i].data6+"</td><td>"+
            data[i].data7+"</td><td>"+data[i].data8+"</td><td>"+
            data[i].data9+"</td><td>"+data[i].fps+"</td></tr>";
    }
    document.getElementById('mytab-body').innerHTML=out;
}