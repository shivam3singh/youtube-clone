

 let Content=JSON.parse( localStorage.getItem("content"))
 
let c=document.getElementById("container")

  //let div=document.createElement("div")
  let iframe=document.createElement("iframe")
  iframe.src=`https://www.youtube.com/embed/${Content.video}`
  iframe.width="100%"
  iframe.height="100%"
  iframe.allow="fullscreen"
  let Name=document.createElement("h5")
  Name.innerText=Content.tit
//div.append()
c.append(iframe,Name)
