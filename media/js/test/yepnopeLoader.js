function go(url, callback, errback) {

   var complete = false
   
   // временный обработчик
   var myCallback = 'callback_'+Math.round(Math.random()*1000000)

   window[myCallback] = function(data) {         
      setComplete();
      callback(data);
   }
   
   url = url+'?callback='+myCallback
   
   /* очищает память */   
   function setComplete() {   
      complete = true;
      try {
         // если каллбэк не очистить - утечка памяти захватит все замыкание
         delete window[myCallback]      
      } catch(e) {
         window[myCallback] = undefined;
      }
   }
   
   /* эта функция сработает при любом результате запроса */
   function check() {
		console.log(this.readyState);
      // эта функция запускается так, чтобы при успешной загрузке
      // она сработала после каллбэка
      if (complete) return      
		setComplete();
	  errback();
      //window[errback]()
   }
   
   var script = document.createElement('script')   
  
   script.onreadystatechange= function () {    
      if (this.readyState == 'complete' || this.readyState == 'loaded') {      
         setTimeout(check, 0) // дать скрипту время на выполнение
		 console.log(this.readyState);
      }
   }
   
   script.onload = script.onerror = check
   script.src = url
   document.body.appendChild(script)
}

function log()
{
	console.log('loaded');
}
function logE()
{
	console.log('not loaded');
}

go("http://pawelitel.github.com/CDN/javascripts/min/yepnope.1.5.4-min.js",log,logE);