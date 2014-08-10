var clickedEl = null;

document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) { 
		var alertMsg=function(){
			clickedEl=$(event.target).closest("a").attr('data-href')
        }

		setTimeout(alertMsg,100);
    }
}, true);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request == "getClickedEl") {
       //console.log('hello master');
        sendResponse({value: clickedEl});
    }
});


