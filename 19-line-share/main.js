window.onload = function(){
    //用device.js判斷桌機還是手機來藏按鈕
    if(device.desktop()){
        document.getElementById("Linemobile").style.display="none";
    }else{
        document.getElementById("LinePc").style.display="none";
    }
    
    document.getElementById("LinePc").onclick = function(){
        window.open('https://lineit.line.me/share/ui?url='+encodeURIComponent("https://mikecheng1208.github.io/LineShare_Example/src/"),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
    }
    document.getElementById("Linemobile").onclick = function(){
        window.open('line://msg/text/'+ encodeURIComponent("https://mikecheng1208.github.io/LineShare_Example/src/"),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
    }
}
