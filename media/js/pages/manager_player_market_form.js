﻿$($("tr.caption th")[0]).append('<div id="loading-ajax"><img src="http://i38.fastpic.ru/big/2012/0524/96/5b354dc65439874a52f17728e730ac96.gif"/></div>');$("form").attr("method","GET");$("form table tbody").eq(1).prepend('<tr><td nowrap="" colspan="2">страница<input type="text" name="p" size="30" value="manager_player_market_sql.php" class="nice"></td></tr>');$("form table tbody").eq(1).append('<tr><td class="nice" nowrap="">Сумма умений:</td><td nowrap="" colspan="2"><input type="text" name="aindex_min" size="4" value="" class="nice"> - <input type="text" name="aindex_max" size="4" value="" class="nice"></td></tr>');$("form table tbody").eq(1).append('<tr><td class="nice" nowrap="">Потенциальная СУ:</td><td nowrap="" colspan="2"><input type="text" name="pai_min" size="4" value="" class="nice"> - <input type="text" name="pai_max" size="4" value="" class="nice"></td></tr>');$("#loading-ajax").each(function(){$(this).remove()});