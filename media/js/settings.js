﻿function getTrainingBase(b){if(!getCookie("trainingBase")){br.storage.set("team",null);getTeam();$.ajax({url:'http://www.hockeyarena.net/ru/index.php?p=manager_stadium.inc',success:function(a){trainingBase=(($(a).find(".facilities-num").eq(0).text().split(" ")[0]|0)+($(a).find(".facilities-num").eq(1).text().split(" ")[0]|0))/2;setCookie('trainingBase',trainingBase,1);b(getCookie("trainingBase")|0)}})}else b(getCookie("trainingBase")|0)}function getTeam(f){$.ajax({url:'http://www.hockeyarena.net/ru/index.php?p=manager_team_players.php',success:function(c){var d=JSON.parse("{}");d.players=[];br.storage.set("team",d);var e=$(c).find("table tbody tr");e.each(function(){var a=JSON.parse("{}");a.player_id=$.trim($(e[0]).text()).split(",")[1].substr(4);a.name=($.trim($(e[0]).text()).split(",")[0].split("игроке ")[1]);a.age=$(this).find("td").eq(1).text().trim()|0;a.rab=$(this).find("td").eq(2).text().trim()|0;a.pot=$(this).find("td").eq(3).text().trim()|0;a.goa=$(this).find("td").eq(4).text().trim()|0;a.def=$(this).find("td").eq(5).text().trim()|0;a.att=$(this).find("td").eq(6).text().trim()|0;a.sho=$(this).find("td").eq(7).text().trim()|0;a.pas=$(this).find("td").eq(8).text().trim()|0;a.spe=$(this).find("td").eq(9).text().trim()|0;a.str=$(this).find("td").eq(10).text().trim()|0;a.sc=$(this).find("td").eq(11).text().trim()|0;a.form=$(this).find("td").eq(12).text().trim()|0;a.skill=$(this).find("td").eq(13).text().trim()|0;a.ai=$(this).find("td").eq(14).text().trim()|0;a.estimate=getWeightedEstimate(a.age,a.rab,a.pot,a.goa,a.def,a.att,a.sho,a.pas,a.spe,a.str,a.sc,a.skill,a.ai,getCookie("trainingBase"));var b=br.storage.get("team");b.players.push(a);br.storage.set("team",b)});f(d)}})}function getHaarpSettings(){if(!br.storage.get("settings")){var a={};a.public_player_info={};a.public_player_info.showPieChart=true;br.storage.set("settings",a)}return br.storage.get("settings")}