var parser=(function(){function parseFinance(){$.ajax({url:"http://www.hockeyarena.net/ru/index.php?p=manager_finance_report.php",success:function(b){function Con(a){while(a.indexOf(" ")>0)a=a.replace(" ","");return a|0}var c=Con($(b).find("table tbody span[style]").eq(0).text());var d=$(b).find("td[align=right]");var e=[];for(var i=0;i<12;i++){e.push([])}var f=1;var g=f;for(g=f;g<f+4;g++)e[0][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[1][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[2][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[3][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[4][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[5][g-f]=Con(d.eq(g).text().trim());f=31;for(g=f;g<f+4;g++)e[6][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[7][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[8][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[9][g-f]=Con(d.eq(g).text().trim());f+=5;for(g=f;g<f+4;g++)e[10][g-f]=Con(d.eq(g).text().trim());f=56;for(g=f;g<f+4;g++)e[11][g-f]=Con(d.eq(g).text().trim());var h=[];var j=[];var k=[];var l=[];for(var i=0;i<12;i++){h[i]=i;j[i]=i;k[i]=i;l[i]=i}var m=[];var n=[];var o=[];var p=[];for(var i=0;i<12;i++){m.push(e[i][3]);n.push(e[i][2]);o.push(e[i][1]);p.push(e[i][0])}localStorageDB.saveAllValues("FinancesSeasonally",h,m);localStorageDB.saveAllValues("FinancesLastWeek",j,n);localStorageDB.saveAllValues("FinancesCurrentWeek",k,o);localStorageDB.saveAllValues("FinancesToday",l,p)}})};function parseTraining(){$.ajax({url:"http://www.hockeyarena.net/ru/index.php?p=manager_training_form1.php",success:function(a){var b=$(a).find("table tbody tr");notice("������� "+(b.length-4)+" �������");if(b.length<22+4){error_notice("������, ������� ������ 22-� �������");return 0}var c={"�������":"1","���":"2","������":"3","��������":"4","�������������":"5","����":"6","������":"7","���������":"8"};var d={"C":"1","LW":"2","RW":"3","RD":"4","LD":"5","G1":"6","G2":"7","�����":"8"};var e=[],eneArray=[],formArray=[],traArray=[],scheduleArray=[],posArray=[];for(var i=0;i<b.length;i++){if($(b[i]).attr("class")!="caption")if($(b[i]).attr("class")!="thead"){var f=$(b[i]).find("td");var g=getUrlVars($(f[0]).find("a")[0].href)["id"].replace('#','');e.push(g);var h=$(f[10]).text();eneArray.push(h);var j=$(f[11]).text();formArray.push(j);var k=$(f[13]).text();traArray.push(k);var l=$(f[14].innerHTML).find("option[selected]").text();scheduleArray.push(c[l]);if(f[15]!=undefined)var m=f[15].innerHTML;else var m="�����";posArray.push(d[m])}}localStorageDB.saveAllValues("Training",e,traArray);localStorageDB.saveAllValues("Energy",e,eneArray);localStorageDB.saveAllValues("Form",e,formArray);localStorageDB.saveAllValues("Schedule",e,scheduleArray);localStorageDB.saveAllValues("Position",e,posArray)}})}return{parseFinance:parseFinance,parseTraining:parseTraining}})();