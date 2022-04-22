function a () {
    if(location.href.indexOf('watch') != -1 && location.href != 'https://www.youtube.com/watch?v=UnIhRpIT7nc&t=1s') {
        //window.alert("이 동영상은 적합하지 않습니다! 다른 동영상을 추천해드리겠습니다.");
        location.href="https://www.youtube.com/watch?v=UnIhRpIT7nc&t=1s";
        console.log("완료.")
    }}
   
    
    setInterval(a, 500);
    /*if(location.href.indexOf('watch') != -1 && location.href != 'https://www.youtube.com/watch?v=UnIhRpIT7nc&t=1s') {
        window.alert("이 동영상은 적합하지 않습니다! 다른 동영상을 추천해드리겠습니다.");
        location.href="https://www.youtube.com/watch?v=UnIhRpIT7nc&t=1s";
        
        
    }
    console.log("hi");*/
