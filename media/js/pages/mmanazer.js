﻿var Message="Для после сохранения настроек нужно обновить эту страницу чтобы убедится что они успешно сохранились";var settings=getHaarpSettings();var settingsNames={"showPieChart":["public_player_info","showPieChart"],"showPolarChart":["public_player_info","showPolarChart"]};function save(){br.storage.set("settings",settings)};function setDefault(){settings=null;save();settings=getHaarpSettings();setInterface()};function checkerClicked(a){console.log("changed");console.log(a);if(!settings)setDefault();var n=settingsNames[a.name];if(!settings[n[0]])setDefault();settings[n[0]][n[1]]=a.checked;console.log(a.name);console.log(a.checked)};function setInterface(){if(!settings)setDefault();$("input[name=showPieChart]")[0].checked=settings.public_player_info.showPieChart;$("input[name=showPolarChart]")[0].checked=settings.public_player_info.showPolarChart};function getTrHtml(a,b,c){if(a=="button")return'<tr><td class="nice" align="left" nowrap=""><input type="submit" value="'+b+'" class="button" onClick="'+c+'"></td></tr>';if(a=="text")return'<tr><td class="nice" align="left" colspan="2">'+b+'</td></tr>';if(a=="checkbox")return'<tr><td class="nice" align="left">'+b+':</td><td class="nice" align="left"><input name="'+b+'" type="checkbox" onClick="checkerClicked(this)"></td></tr>'};$("#page br").eq(0).after('<table width="700" cellpadding="0" cellspacing="0" id="haarp"><tbody><tr class="darkbg"><td class="ysptblhdr" height="18" align="left">HAARP</td></tr></tbody></table><table border="0" width="700" cellspacing="0" cellpadding="2"><tbody></tbody></table>');$("#haarp tbody").append(getTrHtml("text",Message)););$("#haarp tbody").append(getTrHtml("button","Сбросить настройки","setDefault()"));$("#haarp tbody").append(getTrHtml("button","Сохранить настройки","save()"));$("#haarp tbody").append(getTrHtml("checkbox","showPieChart"));$("#haarp tbody").append(getTrHtml("checkbox","showPolarChart"));setInterface();