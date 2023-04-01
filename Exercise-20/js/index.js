
if(!localStorage.getItem("localStorageData")){
localStorage.setItem("localStorageData",JSON.stringify([]));
}else{
const localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
console.log(localStorageData+"hi");
localStorageData.forEach((element ,index)=> {
    console.log(element.color);
    console.log(index);
    let row=$("<div>");
    row.addClass("notes-row");
    row.attr("id",element.id);
    $(".notes-container").append(row);
    let heading=$("<div>").addClass("notes-title");
    let inputHeading=element.title;
    // console.log(inputHeading);
    heading.append(inputHeading);
    let containerId=element.id;
    $(`#${containerId}`).append(heading);
    if((element.imageUrl)!=""){      
    let image=$("<div>").addClass("notes-image");
    let imageTag=$("<img>").addClass("content-image");
    let imgUrl=element.imageUrl;
    imageTag.attr("src",imgUrl);
    image.append(imageTag);
    $(`#${containerId}`).append(image);
    }
    let notesContent=$("<div>");
    let inputContent=element.content;
    $(`#${containerId}`).css("background-color",element.color);
    notesContent.addClass("notes-content").text(inputContent);
    $(`#${containerId}`).append(notesContent);
});
} 
   
$(".new-btn").click(function(){
    $(".newbtn-action").css("right",0);
    let titleClicked=false; 
    let contentClicked=false; 
    $("#input-title").keypress(function(){
        if($("#input-title").val()!=""){
           titleClicked=true; 
           if(titleClicked==true && contentClicked==true){
            titleClicked=false; 
            contentClicked=false; 
            if($("#input-title").val().trim()!="" && $("#input-content").val().trim()!=""){
             console.log("value");
             $(".content-add-btn").prop('disabled',false); 
           }
        }
        }else{
            titleClicked=false; 
        }
    });
    $("#input-content").keypress(function(){
        if($("#input-content").val()!=""){
            contentClicked=true; 
            if(titleClicked==true && contentClicked==true){
            if($("#input-title").val().trim()!="" && $("#input-content").val().trim()!=""){
                 $(".content-add-btn").prop('disabled',false);
               
            }
            }
         }else{
            contentClicked=false; 
           
         }  
    });

});
var color;
$(document).ready(function(){ 
    $(".circle").click(function(){
    var circleId = $(this).attr("id");
     color=circleId.split("-");
     color=color[0];
    console.log(color);
    console.log(circleId);
    console.log();
   
    });
    })

$(".content-add-btn").click(function(){
    console.log($("#input-title").val()+ "hi");
    console.log( $("#input-content").val()+"hi");
    if($("#input-title").val().trim()==""  || $("#input-content").val().trim()==""){
        console.log("hi");
        $(".content-add-btn").prop('disabled',true);
    }else{
    let row=$("<div>");
    row.addClass("notes-row");
    let containerId=Math.floor(454354654*Math.random());
    containerId.toString();
    row.attr("id",containerId);
    $(".notes-container").append(row);
   
    console.log(containerId);
    let localData={
    "id" : containerId,
    "title": $("#input-title").val(),
    "imageUrl" : $("#image-url").val(),
    "content": $("#input-content").val(),
    "color": color.toString(),
    }
    const localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
    console.log(localStorageData);
    localStorageData.unshift(localData);
    localStorage.setItem("localStorageData",JSON.stringify(localStorageData));

    let heading=$("<div>");
    heading.addClass("notes-title");
    let inputHeading=$("#input-title").val();
    console.log(inputHeading);
    heading.append(inputHeading);
    $(`#${containerId}`).append(heading);
    if($("#image-url").val().trim()!=""){
    let image=$("<div>");
    let imageTag=$("<img>");
    let imgUrl=$("#image-url").val();
    imageTag.addClass("content-image");
    imageTag.attr("src",imgUrl);
    image.addClass("notes-image");
    image.append(imageTag);
    $(`#${containerId}`).append(image);
    }
    console.log("22222222");
    let notesContent=$("<div>");
    let inputContent=$("#input-content").val();
    notesContent.text(inputContent);
    notesContent.addClass("notes-content");
    $(`#${containerId}`).append(notesContent);
    $(`#${containerId}`).css("background-color",color);
    $(".newbtn-action").css("right",-40+"%");
    $(".content-add-btn").prop('disabled',true);
    $("#input-title , #input-content").val("");
    }
 });


    $(".delete-btn").click(function(){
        $(".conform-box").css("display","block"); 
        $(".conform-btn").click(()=>{
        localStorage.removeItem('localStorageData');
        $(".conform-box").css("display","none"); 
         window.location.reload(true);
        })
    });


    $(".cancel-icon").click(()=>{
        $(".conform-box").css("display","none");
    })
    $(".close-btn").click(()=>{
        $(".newbtn-action").css("right",-40+"%");
    })
    setInterval(function () {
    $(".notes-row").on('click', function() {
        console.log("next Page");
        var id = $(this).attr("id");
        console.log(id);
        localStorage.setItem("idnumber",id);
        console.log(("id: " + id));
        window.location.replace('./next.html');
    
        });
       
          
        }, 500);
       