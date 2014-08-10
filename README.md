##Google Search - Link Copy - 0.0.1
I was fed up of the redirection urls google gives on its search results, making it a chore to copy the link address.
So I went ahead and created this project overnight.

![alt tag](http://i.imgur.com/2adtlYg.png)

Using 

A tiny extension for `Google Chrome` to make copying links from google pain free.
Generally when you right click a link on google search and select
`Copy Link Address`, the url copied is google's redirecting url and not the original url.
It looks like this `https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CCMQFjAB&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLed_Zeppelin&ei=DFHnU8_mK4Hi8AXqpIDAAg&usg=AFQjCNHIjSJNblTZM7fbhcTkrPNp14SnKw&sig2=L95WqCRVToubyMsGNnBFWg&bvm=bv.72676100,d.dGc`

So I introduced an extra option in the contextmenu for google search links, `Copy real link`, using this you can copy the original link without any alteration.

Using this extension, the copied link is this
`http://en.wikipedia.org/wiki/Led_Zeppelin`

Putting this on chromestore might take some time.<br />
To install, download the zip(right hand side of the page) provided by github. Extract it to a folder. Open `chrome://extensions`. Select `Developer Mode` option. 
Click on `Load unpacked extension` button and choose the path to which you have extracted. Now open new google search page and start using it.

I will put up a link for the `.crx` when I find the time. I have just put the copy for the query results. Don't expect it to work for normal links on google search. Just use the `Copy Link Address` provided by chrome to do that.

###Features planned
Copy text of url (heading of results) <br />
Copy urls in facebook as facebook also puts a redirection wall for the links in chat and posts


