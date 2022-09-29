video_wrapper=document.querySelector('.hidden');
btn=document.querySelector("button");
video=document.querySelector("video");
btn.onclick=function(){
  video_wrapper.setAttribute("class","visible");
}

video.onclick=function(e){
  e.stopPropagation();
  video.play();
}

video_wrapper.onclick=function(){
  video_wrapper.setAttribute("class","hidden");
}

