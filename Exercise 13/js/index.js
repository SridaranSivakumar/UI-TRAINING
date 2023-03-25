
fetch('./JSON/friends.json')
.then((posters) => posters.json())
.then((data) => {
        let output="";
      
        for(let details of data){
            output+='<div class="card">';
            output+= '<div class="row">'
                    +'<div><img src='+details.img+'/></div>'+
                    '<div class="column">'+
                    '<div>'+details.first_name+" "+details.last_name + '</div>'
                    +'<div>'+ details.email+'</div>'
               +' </div>' +'</div>';
        
        output+='</div>';
        document.querySelector(".friendsContainer").innerHTML=output;
                    }
                });