let rootElement =  document.createElement('div');

let rootContent =  document.createElement('div');
    rootContent.setAttribute('style', 'position:absolute; width:96vw; height:96vh; padding:10px; background-color:red; left:2vw; top:2vh; box-sizing: border-box;');

let closeElement = document.createElement('div');
closeElement.setAttribute('style', 'position:absolute; width:50px; height:50px; top:-10px; right:-10px; border-radius:50%; border:1px solid black; background:white;');
closeElement.setAttribute("width", Math.max(document.documentElement.clientWidth, window.innerWidth || 0).toString());

rootContent.appendChild(closeElement);

let iframeElement = document.createElement('iframe');
iframeElement.setAttribute('src', 'http://dev1.test/app_dev.php/activity/export-full/ZvpREVce36w97At4B2dUHWShLaxIQTj1Ymkl');
iframeElement.setAttribute('style', 'width:100%; height:100%');
iframeElement.setAttribute("width", Math.max(document.documentElement.clientWidth, window.innerWidth || 0).toString());

rootContent.appendChild(iframeElement);

rootElement.appendChild(rootContent);

document.body.appendChild(rootElement);
