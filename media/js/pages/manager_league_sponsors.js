﻿if($("#page table tbody tr.caption").eq(1).text().trim()=="Результаты"){br.storage.set("manager_league_sponsors",$("#page table").eq(3).html())}else{if(($("#page table tbody tr.caption").eq(1).text().trim()=="Текущий договор клуба на рекламу")&&(br.storage.get("manager_league_sponsors")!=null)){var table='<table class="stats" width="100%" id="table-" border="0">'+br.storage.get("manager_league_sponsors")+'</table>';var header='<table class="stats" width="100%"><tbody><tr class="caption"><th><img src="http://www.hockeyarena.net/images/n/icon_q.gif" class="right" style="cursor: help;">Результаты</th></tr></tbody></table>';$("#page table").eq(3).after(table);$("#page table").eq(3).after(header)}}