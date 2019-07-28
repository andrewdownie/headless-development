# headless-development
Trying to figure out how to do front end web development on a chromebook running headless linux. I think this could work by having development done on the chromebook, and then serve the front end over the internet to your phone. Then a webtool can be used to check different page sizes/layouts.

# Tools
## Serve locally running front end to the internet
http://localhost.run/

Your chromebook will now be serving a locally hosted front end that your phone can access on any network.

## View different device layouts on your phone
http://quirktools.com/screenfly/ 

Plug the url from localhost.run into this tool, and you will then be able to test front end layouts / functionality for desktop sites, even though a phone screen is much smaller than a desktop screen

## Debug console on mobile devices
It looks like the only way to get javascript console debugging on mobile devices is to embed it into your app. create a react component that imports 'js-mobile-console', and 'mobile-console.mis.css'. You can npm i js-mobile-console, but the css will have to be downloaded separately.


https://github.com/B1naryStudio/js-mobile-console/blob/master/README.md

## Redux debugging on mobile
Use redux logger
