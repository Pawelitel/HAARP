﻿//скрипт выводяший графики на всех страницах кроме страницы игрока
var dContainers=[];var dTag=[];var dFull=[];var dShort=[];var dAdvId=[];function makePlot(m,n,o,p,q){m.html('<u>'+m.text()+'</u>');dContainers.push($('<div></div>'));var r=dContainers.length-1;dTag[r]=n;dFull[r]=p;dShort[r]=q;dAdvId[r]=o;m.children().attr("plotId",r);$(dContainers[dContainers.length-1]).html('<div id="container'+n+r+'" style="min-width: 400px; height: 400px; margin: 0 auto"></div>').dialog({autoOpen:false,width:'80%',buttons:{"Закрыть":function(){$(this).dialog("close")}}});m.children().one("click",function(){var a=$(this).attr('plotId');dContainers[a].dialog('open');var b=dTag[a];var c=[];var d=localStorageDB.loadValue(dTag[a],dAdvId[a]);var e=0;for(var i=0;i<d.length;i++){var f=d[i].d.split(" ")[0].split("/");var g=d[i].d.split(" ")[1].split(":");if(f.length<3)console.error("Ошибка чтения даты из базы "+dTag[a]+dAdvId[a]+" i="+i+" d="+d[i].d);c.push([Date.UTC(f[0],f[1]*1-1,f[2],g[0],g[1],g[2]),d[i].v]);if(e>d[i].v)e=d[i].v}var h=[];var j=0;var k=0;for(var i=0;i<c.length;i++){j+=c[i][1];k++;if(k>14){j-=c[i-14][1];k--}h.push([c[i][0],j/k])}var l=new Highcharts.Chart({chart:{renderTo:'container'+b+a,type:'spline'},title:{text:dFull[a]},subtitle:{text:'данные загружены из локального хранилища'},xAxis:{type:'datetime',dateTimeLabelFormats:{month:'%e. %b',year:'%b'}},yAxis:{title:{text:dShort[a]},min:e},tooltip:{formatter:function(){return'<b>'+this.series.name+'</b><br/>'+Highcharts.dateFormat('%e. %b',this.x)+':'+dShort[a]+' '+this.y+''}},series:[{name:dShort[a],data:c},{name:"Скользящее среднее за 14 дней",data:h,visible:false}]});return false})}
