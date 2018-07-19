window.onload=function(){
        var search=document.getElementsByTagName("input")[0];
        search.onclick=function(){
            alert(1);
            console.log(search.style.width);
        }
        var lilist=document.getElementsByClassName("ul_li");
        lilist.onmouseenter=function(){
            lilist.style.display="block";
        }
    }
