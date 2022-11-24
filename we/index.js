

//'https://youtube.googleapis.com/youtube/v3/search?q=rrr&key=[YOUR_API_KEY]' \

let api="AIzaSyCY49z-cq7hbWVN7beSLM5oQLPl77hYR4s"

let getData = async ()=>{
try{

let query=document.getElementById("query").value;

let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api}&part=snippet&maxResults=20`)
let { items } = await res.json() 
//console.log(data)

let array_of_data=items
appendvideos(array_of_data)
console.log(array_of_data)

}
catch(error){

}

}

let c=document.getElementById('container')

let appendvideos = (data) =>{
c.innerHTML=null;
   data.forEach(({snippet:{title,thumbnails},id:{videoId} } )=> {

    let div= document.createElement('div')

    let name= document.createElement('p')
     name.innerText=title
    let thumbnail= document.createElement('img')
    thumbnail.src=thumbnails.medium.url
    // 
    //console.log(title,videoId)

   var obj={
     
      tit:title,
      video:videoId
   }


   div.addEventListener("click",function(){

     localStorage.setItem("content",JSON.stringify(obj))
   window.location.href="video.html"
   })


    div.append(thumbnail, name)
   c.append(div)
   })

 
}

// function filter(){
// let selectedcourse=document.querySelector("#filter").value
// let outcome=output.filter(function(el){
//     return el.videoId==selectedcourse
// })
// appendvideos(outcome)
// }



//

let load = async ()=>{
   try{
   
   let result= await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&key=${api}`)
   
    let Datta = await result.json() 
    let trending=Datta.items
   
    display(trending)
  
   console.log(trending)
   }
   catch(error){
   
   }
   
   }
   let display=(data)=>{

         c.innerHTML=null;
            data.forEach(({snippet:{title},id } )=> {
         
             let div= document.createElement('div')
         
             let iframe=document.createElement("iframe")
             iframe.src=`https://www.youtube.com/embed/${id}`
             iframe.width="100%"
             iframe.height="100%"
             iframe.allow="fullscreen"


             let name= document.createElement('p')
              name.innerText=title
            //  let thumbnail= document.createElement('img')
            //  thumbnail.src=thumbnails.medium.url

       
             div.append(iframe, name)
             c.append(div)
            })

 
         }  