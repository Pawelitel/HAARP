function notice(notice_text, time)
{
	if(noty!=undefined)
		console.log(notice_text);
	if(undefined==time)
		time=5000;
	noty({
		"text": notice_text,
		"theme": "noty_theme_twitter",
		"layout": "bottomLeft",
		"type": "information",
		"animateOpen": {"height":"toggle","opacity":"show"},
		"animateClose": {"height":"toggle","opacity":"hide"},
		"speed": 1000,
		"timeout": time,
		"closeButton": true,
		"closeOnSelfClick": true,
		"closeOnSelfOver": true,
		"modal": false
	});
}

notice('test',5000);