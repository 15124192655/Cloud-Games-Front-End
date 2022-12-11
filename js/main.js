// $('#mytab-body').bootstrapTable({
//     url: '../data.json',
//     queryParams: "queryParams",
//     toolbar: "#toolbar",
//     sidePagination: "true",
//     stripted: false,
//     // uniqueID: "ID",
//     pagination: true,
//     pageSize: "5",
//     columns: [
//         {
//             field: "id",
//             title: "ID"
//         },
//         {
//             field: "data2",
//             title: "参数2"
//         },
//         {
//             field: "times",
//             title: "已测次数"
//         },
//         {
//             field: "packet",
//             title: "丢包率"
//         },
//         {
//             field: "bandwidth",
//             title: "带宽"
//         },
//         {
//             field: "data6",
//             title: "参数6"
//         },
//         {
//             field: "data7",
//             title: "参数7"
//         },
//         {
//             field: "data8",
//             title: "参数8"
//         },
//         {
//             field: "data9",
//             title: "参数9"
//         },
//         {
//             field: "fps",
//             title: "帧率"
//         },
//     ]
// })

// var url = "../data.json"
// var request = new XMLHttpRequest();
// request.open("get",url);
// request.send(null);
// request.onload = function(){
//     var data = JSON.parse(request.responseText);
//     console.log(data[1].data2)
// }
// document.getElementById('td1-1').innerHTML = '<p>' + data[1].data2 + '</p>';