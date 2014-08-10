var clickedEl = null;

document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) { 
		var alertMsg=function(){
    		//console.log(event);
    		//console.log($(event.target).closest("a").attr('data-href'));
			clickedEl=$(event.target).closest("a").attr('data-href')
        	//console.log('fffff',clickedEl);
        }

		setTimeout(alertMsg,100);
    	/*
    	console.log('---------');
		if(!event.target.attributes[ 'data-href' ]){
			console.log('wont you filyyyyyyyyyyyyyyyyyyyyyy');
			function findUpTag(el, tag) {
    			while (el.parentNode) {
        			el = el.parentNode;
        			if (el.tagName === tag){
        				console.log('haaaaaaaaaaaaaaaaaaa');
        				console.log(el);
            			return el;
            		}
    			}
    			return null;
			}
		    if(!event.target.tagName){
		    	console.log('shit');
	            return;
	        }
			var a = findUpTag(event.target, "A"); 
            if(!a){
		    	console.log('shit');
                return;
            }
            console.log(a);
            console.log(a.attributes);
            if(!a.attributes){
            	console.log(a.length)
            }
			clickedEl = a.attributes['data-href'].nodeValue;
		}else{
			//console.log(event.target.attributes['data-href']);
			clickedEl = event.target.attributes[ 'data-href' ].nodeValue;
		}
		*/
    }
}, true);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request == "getClickedEl") {
       //console.log('hello master');
        sendResponse({value: clickedEl});
    }
});


