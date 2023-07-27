
var batch1=[
    {first_name:"Dreamy",last_name:"Medhi",roll:"123"},
    {first_name:"Dre",last_name:"Me",roll:"123"}
];

var batch2=[
    {first_name:"Angela",last_name:"Yu",roll:"456"}
];


var data=batch1;

$("#batch").change(e=>{
    if($("#batch").val()=="b1"){
        data=batch1;
        addValue();
    }else{
        data=batch2;
        addValue();
    }
    
})

$("#addRow").click((d)=>{
   
   a= $("#first_name").val();
   b=$("#last_name").val();
   c=$("#roll").val();
 
   $("#first_name").val("");
   $("#last_name").val("");
   $("#roll").val("");
   if($("#batch").val()=="b1"){
     batch1.push({first_name:a,last_name:b,roll:c});
     addValue();
   }else{
    batch2.push({first_name:a,last_name:b,roll:c});
    addValue();
   }
  
})



$("#selectAll").change(function(){
    if($(this).prop("checked")){
            $(".chd").prop("checked",true);
           

    }else{
        $(".chd").prop("checked",false);
    }
});


function addValue(){
    $("#myTable tbody").empty();
    data.forEach(student=>{
        var row=
        "<tr>"+
        "<td><input type='checkbox' class='chd'></input></td>"+
        "<td>"+student.first_name +"</td>"+
        
        "<td>"+student.last_name+"</td>"+
        "<td>"+student.roll+"</td>"+
        "<td>+<button onClick=remove(this)> Remove</button> </td>"+
        "</tr>";

        $("#myTable tbody").append(row);
    });  
 
}

function remove(e){
  
    $(e).closest("tr").remove();
}
addValue()
