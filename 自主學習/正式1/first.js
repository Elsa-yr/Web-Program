var oU=document.getElementById("list_nav");
var oLi = oU.children;
var oDiv = document.getElementById("tab-1");
var oD = oDiv.children;
for(var i=0;i<oLi.length;i++){
  oLi[i].index = i;
  oLi[i].onclick=function(){
    for(var j=0;j<oLi.length;j++){
      oD[j].style.display = 'none'
    }
    oD[this.index].style.display = 'block';

  }

}