﻿//скрипт содержащий функции работы с настройками HAARP
function getTrainingBase(b){if(!getCookie("trainingBase")){br.storage.set("team",null);getTeam();$.ajax({url:'http://www.hockeyarena.net/ru/index.php?p=manager_stadium.inc',success:function(a){trainingBase=(($(a).find(".facilities-num").eq(0).text().split(" ")[0]|0)+($(a).find(".facilities-num").eq(1).text().split(" ")[0]|0))/2;setCookie('trainingBase',trainingBase,1);b(getCookie("trainingBase")|0)}})}else b(getCookie("trainingBase")|0)}function getTeam(){$.ajax({url:'http://www.hockeyarena.net/ru/index.php?p=manager_team_players.php',success:function(a){var b={};b.players=[];var c=$(a).find("table").eq(2).find("tr[class!=thead]");for(var i=0;i<c.length;i++){var d={};d.player_id=$(c[i]).find("td a").attr("href").split("player_id=")[1]|0;d.name=$(c[i]).find("td a").eq(0).text();d.age=$(c[i]).find("td").eq(1).text().trim()|0;d.rab=$(c[i]).find("td").eq(2).text().trim()|0;d.pot=$(c[i]).find("td").eq(3).text().trim()|0;d.goa=$(c[i]).find("td").eq(4).text().trim()|0;d.def=$(c[i]).find("td").eq(5).text().trim()|0;d.att=$(c[i]).find("td").eq(6).text().trim()|0;d.sho=$(c[i]).find("td").eq(7).text().trim()|0;d.pas=$(c[i]).find("td").eq(8).text().trim()|0;d.spe=$(c[i]).find("td").eq(9).text().trim()|0;d.str=$(c[i]).find("td").eq(10).text().trim()|0;d.sc=$(c[i]).find("td").eq(11).text().trim()|0;d.form=$(c[i]).find("td").eq(12).text().trim()|0;d.experience=$(c[i]).find("td").eq(13).text().trim()|0;d.ai=$(c[i]).find("td").eq(14).text().trim()|0;b.players[i]=d};br.storage.set("team",b);for(var i=0;i<b.players.length;i++){var d=b.players[i];d.estimate=getWeightedEstimate(d.age,d.rab,d.pot,d.goa,d.def,d.att,d.sho,d.pas,d.spe,d.str,d.sc,d.experience,d.ai,getCookie("trainingBase"));b.players[i]=d}br.storage.set("team",b)}})}function getHaarpSettings(){if(!br.storage.get("settings")){var a={};a.public_player_info={};a.public_player_info.showPieChart=true;a.public_player_info.etalonG=[45.18,0.00,0.00,0.00,8.36,37.60,2.48,6.39];a.public_player_info.etalonD=[0.00,37.86,3.43,8.51,12.13,12.01,18.77,7.30];a.public_player_info.etalonC=[0.00,0.49,32.03,26.84,20.60,4.91,8.73,6.41];a.public_player_info.etalonW=[0.00,0.24,32.70,36.12,11.37,8.83,4.29,6.44];a.public_player_info.experienceMultiplier=10;a.public_player_info.trainingBases=[15,50,100,150,200,250];br.storage.set("settings",a)}return br.storage.get("settings")}
