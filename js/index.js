window.onload=function(){
        var search=document.getElementsByTagName("input")
        search.onclick=function(){
            alert(1);
            // alert(input.style.width);
        }
        var body=document.getElementsByTagName("body");
        body.onclick=function(){
            alert(1);
        }
        var lilist=document.getElementsByClassName("ul_li");
        lilist.onmouseenter=function(){
            lilist.style.display="block";
        }
    }
