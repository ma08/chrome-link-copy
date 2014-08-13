##Google Search  and Facebook Chat- Link Copy - 0.0.1

[Get this on chromestore](https://chrome.google.com/webstore/detail/google-search-facebook-ch/opelelcojgjgddbfhlolihhdmjodmjdf)

I was fed up of the redirection urls google gives on its search results - making it a chore to copy the link address.
So I went ahead and created this project overnight.

![alt tag](http://i.imgur.com/2adtlYg.png)



A tiny extension for `Google Chrome` to make copying links from google pain free.
Generally when you right click a link on google search and select
`Copy Link Address`, the url copied is google's redirecting url and not the original url.
It looks like this `https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CCMQFjAB&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLed_Zeppelin&ei=DFHnU8_mK4Hi8AXqpIDAAg&usg=AFQjCNHIjSJNblTZM7fbhcTkrPNp14SnKw&sig2=L95WqCRVToubyMsGNnBFWg&bvm=bv.72676100,d.dGc`

So I introduced an extra option in the contextmenu for google search links, `Copy real link`, using this you can copy the original link without any alteration.

Using this extension, the copied link is this
`http://en.wikipedia.org/wiki/Led_Zeppelin`

Now working for Google Images too. Using the `Copy Image Url` by chrome gives you an url which is obfuscated 
and which is so large that I can't even paste it here. Using `Copy Link Address` you get a google page showcasing the image rather than the actual image and the url is like `http://www.google.co.in/imgres?imgurl=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F5%2F53%2FArsenal_FC.svg%2F870px-Arsenal_FC.svg.png&imgrefurl=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FArsenal_F.C.&h=1024&w=870&tbnid=c8b9XuiXT08oQM%3A&zoom=1&docid=mtxyyiAZz_EG_M&ei=_LjrU_KWLtXr8AXPz4KYDw&tbm=isch&ved=0CDAQMygBMAE&iact=rc&uact=3&dur=280&page=1&start=0&ndsp=10`
It is cumbersome to use in chat, comments and such. Using this extension gives you the actual image url.
`http://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/870px-Arsenal_FC.svg.png`.
Using this you get the actual source image instead of the cached(smaller) version google uses.
![alt tag](http://imgur.com/gEAMWrD.png)

Now working for Facebook too.
When you copy a link in `facebook` chat, you get it like this `http://www.facebook.com/l.php?u=http%3A%2F%2Fwww.arsenal.com%2Fhome&h=iAQF4eyqM`, using this extension the copied url will be `http://www.arsenal.com/home`.
![alt tag](http://i.imgur.com/qCecGZK.png)


Putting this on chromestore might take some time.<br />
###Installation
To install, download the zip(by clicking the button on the right hand side of the page ) provided by github or [click here](https://github.com/ma08/chrome-link-copy/archive/master.zip). Extract the zip file it to a folder. Open `chrome://extensions`. Select `Developer Mode` option. 
Click on `Load unpacked extension` button and choose the path to which you have extracted. Now open a new google search page/facebook chat box and start using it. Make sure to refresh the page after Installation.

I will put up a link for the `.crx` when I find the time.
###Features planned
Copy text of url for google search results (heading of results) <br />





