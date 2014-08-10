// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
//
function genericOnClick(info, tab) {
	
  chrome.tabs.sendRequest(tab.id, "getClickedEl", function(clickedEl) {
		console.log('nitho aran nee needai pona');
		console.log(clickedEl);
		var sandbox = $('#sandbox').val(clickedEl.value).select();
    	document.execCommand('copy');
    	sandbox.val('');
		console.log(clickedEl);
    });

}

var showForPages=["http://www.google.co.in/*",  "https://www.google.co.in/*", "https://www.google.com/*", "https://www.google.com/*"  ];
// Create one test item for each context type.
var contexts = ["link"
                ];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Copy real link";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick,
                                       "documentUrlPatterns":showForPages}
                                       );
  console.log("'" + context + "' item:" + id);
}



