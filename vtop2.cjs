const { chromium } = require('/opt/npm-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:560},deviceScaleFactor:1.3});
await p.goto('file:///tmp/preview.html',{waitUntil:'load'});await p.waitForTimeout(1300);
await p.screenshot({path:'top2.png'});await b.close();})();
