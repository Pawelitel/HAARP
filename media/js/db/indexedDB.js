﻿var IDB=(function(){var f=null;var g={history_daily:{key:{keyPath:'recordId',autoIncrement:true}},history_private_players:{key:{keyPath:'recordId',autoIncrement:true}},history_public_players:{key:{keyPath:'recordId',autoIncrement:true}},};var h={server:'HAARP',version:1,schema:g}function create(a){return db.open(a)}function insert(a,b){return f[a].add(b)}function selectOnly(b,c,d){return f[b].query().filter(function(a){return a[c]===d}).execute()}function selectBetween(b,c,d,e){return f[b].query().filter(function(a){return(a[c]>d)&&(a[c]<e)}).execute()}function deleteItem(a){return f[tableName].remove(a)}function creatHaarpDb(){var a=jQuery.Deferred();create(h).done(function(s){f=s;a.resolve(s)});return a}function insertTestDB(){insert("table1",json).done(function(a){console.log(a)})}function insert_history_daily(b,c){var d=jQuery.Deferred();var e={};e.dailyString=b;e.dailyInt=c;e.dateTime=JS_DateTime();insert("history_daily",e).done(function(a){d.resolve(a)});return d}function check_history_daily(b,c){var d=jQuery.Deferred();var e={};e.dailyString=b;e.dailyInt=c;e.dateTime=JS_DateTime();selectOnly("history_daily","dailyInt",c).done(function(a){});return d}function selectTestDB(){var b selectOnly("table1","firstName","Aaron").done(function(a){b=a;console.log(a)})}function selectTestBetween(){return selectBetween("table1","recordId",10,15).done(function(a){console.log(a)})}return{create:create,insert:insert,selectOnly:selectOnly,selectBetween:selectBetween,creatHaarpDb:creatHaarpDb}})();
