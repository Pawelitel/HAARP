﻿var localStorageDB=(function(){function saveValue(a,b,c){if(!a)return;var d=a+(b|0);var e={};e.v=c|0;e.d=JS_DateTime();var f=[];if(br.storage.get(d))f=br.storage.get(d);f.push(e);br.storage.set((d),f)};function loadValue(a,b){var c=a+(b|0);var d=br.storage.get(c);if(d==null)d=[];if(d.length>0){if(d[0].value!=undefined){for(var i=0;i<d.length;i++){if(d[i].value!=undefined){d[i].v=d[i].value;d[i].value=undefined;d[i].d=d[i].dateTime;d[i].dateTime=undefined}}br.storage.set(c,d)}else console.warn("Обнаружен устаревший формат записи")}else console.error("Ошибка загрузки из базы "+dTag[plotId]+dAdvId[plotId]+". Был загружен пустой массив");return d};function isNewValue(a,b,c){var d=false;var e=loadValue(a,b);if(e==null)e=[];if(e.length<1)d=true;else{if(e[e.length-1]==undefined)d=true;else d=(e[e.length-1].v|0)!=(c|0)}return d};function saveAllValues(a,b,c){var d=[];var e=0;for(var i=0;i<b.length;i++){if(isNewValue(a,b[i],c[i])){e++;d[i]=true}else d[i]=false}if(e>1){notice("Обнаружены "+e+" изменений в "+a+".\nСохранено "+e+" записей.");for(var i=0;i<b.length;i++){if(d[i])saveValue(a,b[i],c[i])}}else{notice("В "+a+" не было изменений с момента последнего сохранения.")}};return{saveValue:saveValue,loadValue:loadValue,isNewValue:isNewValue,saveAllValues:saveAllValues}})();