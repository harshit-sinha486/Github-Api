'use strict';
let api=`http://api.github.com/users`;
let data;
const req=new Promise((resolve,reject)=>{
    data=fetch(api);
    if(data)
        resolve(data);
    else
        reject("Rejected");    
    });
    req.then(result=>result.json()
        ).then(data=>{console.log(data);
            $(document).ready(()=>{
                $.each(data,(i)=>{
                    $('.container').append(
                        "<div class='row'>"+
                        "<div id='pic' class='col-md-2'>"+
                        "<center><a href="+data[i].html_url+">"+
                        "<img src="+data[i].avatar_url+" alt="+data[i].login+" class='img_thumbnail'>"+
                        "</a></center>"+
                        "</div>"+
                        "<div id='pic' class='col-sm'>"+data[i].login+"</div>"+
                        "</div>"
                    )
                })
        })
    }).catch(result=>{
        console.log(result);
    });
