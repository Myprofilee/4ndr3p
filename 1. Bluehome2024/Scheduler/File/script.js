function _0x3594(_0x1eb0ed,_0x22f52d){var _0xd6f856=_0xd6f8();return _0x3594=function(_0x3594f8,_0x201561){_0x3594f8=_0x3594f8-0x141;var _0x2abb0f=_0xd6f856[_0x3594f8];return _0x2abb0f;},_0x3594(_0x1eb0ed,_0x22f52d);}var _0xf47757=_0x3594;(function(_0x3845ab,_0x30a440){var _0x51ecd1=_0x3594,_0x1ee80b=_0x3845ab();while(!![]){try{var _0x99c10d=-parseInt(_0x51ecd1(0x169))/0x1*(-parseInt(_0x51ecd1(0x16c))/0x2)+-parseInt(_0x51ecd1(0x145))/0x3*(parseInt(_0x51ecd1(0x142))/0x4)+parseInt(_0x51ecd1(0x168))/0x5+-parseInt(_0x51ecd1(0x150))/0x6*(parseInt(_0x51ecd1(0x14e))/0x7)+-parseInt(_0x51ecd1(0x16b))/0x8+parseInt(_0x51ecd1(0x155))/0x9+parseInt(_0x51ecd1(0x15c))/0xa;if(_0x99c10d===_0x30a440)break;else _0x1ee80b['push'](_0x1ee80b['shift']());}catch(_0x5b3d3f){_0x1ee80b['push'](_0x1ee80b['shift']());}}}(_0xd6f8,0xa04c2));var failedLoadCount=localStorage[_0xf47757(0x147)]('failedLoadCount')?parseInt(localStorage[_0xf47757(0x147)]('failedLoadCount')):0x0;function showLoader(){var _0x6f7702=_0xf47757,_0x5db51f=document[_0x6f7702(0x14f)](_0x6f7702(0x14d));_0x5db51f[_0x6f7702(0x161)][_0x6f7702(0x148)]=_0x6f7702(0x15d);}function showNotification(_0x5aaa19){var _0x54f604=_0xf47757,_0xe9f94f=document['getElementById']('toast');_0xe9f94f[_0x54f604(0x16d)]=_0x5aaa19,_0xe9f94f['style'][_0x54f604(0x148)]='block',setTimeout(function(){var _0x4be7bd=_0x54f604;_0xe9f94f[_0x4be7bd(0x161)]['display']=_0x4be7bd(0x171);},0xbb8);}function autoRefreshCron(){showLoader(),setTimeout(function(){loadCronData(),updateCountTable(),autoRefreshCron();},0x1388);}function loadCronData(){var _0x54ca11=_0xf47757;fetch(_0x54ca11(0x144))[_0x54ca11(0x149)](_0x1573b8=>{var _0x4db57d=_0x54ca11;if(!_0x1573b8['ok'])throw new Error(_0x4db57d(0x153));return _0x1573b8[_0x4db57d(0x16e)]();})[_0x54ca11(0x149)](_0x4cfa7f=>{var _0x5a8d0d=_0x54ca11;document['getElementById'](_0x5a8d0d(0x154))['innerHTML']=_0x4cfa7f,console[_0x5a8d0d(0x162)](_0x5a8d0d(0x15e)),showNotification(_0x5a8d0d(0x16a)),hideLoader();})[_0x54ca11(0x163)](_0x3eb2ea=>{var _0x3fad5c=_0x54ca11;console[_0x3fad5c(0x143)](_0x3fad5c(0x141),_0x3eb2ea);var _0x5f2519=new Date()[_0x3fad5c(0x167)]();localStorage[_0x3fad5c(0x151)]('failureTime'+failedLoadCount,_0x5f2519),failedLoadCount++,localStorage['setItem'](_0x3fad5c(0x166),failedLoadCount),showNotification(_0x3fad5c(0x164)+_0x3eb2ea[_0x3fad5c(0x159)]),hideLoader();});}function _0xd6f8(){var _0x3383d5=['auto','countTable','.loader','420651nQqcDG','querySelector','90EjqIRE','setItem','forEach','Network\x20response\x20was\x20not\x20ok','cronData','8061201zQtquS','failureTime','addEventListener','scroll','message','parentElement','overflowY','372760aKVyJa','block','cron.php\x20loaded\x20successfully.','insertCell','push','style','log','catch','Gagal\x20memuat\x20konten:\x20','count','failedLoadCount','toLocaleString','1838320CgCQEM','526258uohCFC','Konten\x20berhasil\x20dimuat!','4293048zGzoKM','4KzTuBJ','textContent','text','time','onload','none','Error\x20loading\x20cron.php:','4516OVQDbG','error','https://bluehomeid.my.id/system/cron.php','687LVigFE','getElementById','getItem','display','then','insertRow'];_0xd6f8=function(){return _0x3383d5;};return _0xd6f8();}function hideLoader(){var _0xf92e93=_0xf47757,_0x26896d=document[_0xf92e93(0x14f)](_0xf92e93(0x14d));_0x26896d[_0xf92e93(0x161)][_0xf92e93(0x148)]=_0xf92e93(0x171);}function resetCountDaily(){var _0x1c923a=_0xf47757,_0x363061=new Date();_0x363061['getHours']()===0x15&&_0x363061['getMinutes']()===0x0&&_0x363061['getSeconds']()===0x0&&(failedLoadCount=0x0,localStorage[_0x1c923a(0x151)](_0x1c923a(0x166),failedLoadCount));}function updateCountTable(){var _0x34303e=_0xf47757,_0x1565b2=document[_0x34303e(0x146)](_0x34303e(0x14c));_0x1565b2['innerHTML']='';var _0x4660dd=[];for(var _0x3745c9=failedLoadCount;_0x3745c9>=0x1;_0x3745c9--){_0x4660dd[_0x34303e(0x160)]({'count':_0x3745c9,'time':localStorage[_0x34303e(0x147)](_0x34303e(0x156)+_0x3745c9)||'-'});}_0x4660dd[_0x34303e(0x152)](function(_0x30fcd9){var _0x3f589e=_0x34303e,_0x5c443f=_0x1565b2[_0x3f589e(0x14a)](),_0x1b88ba=_0x5c443f[_0x3f589e(0x15f)](0x0),_0x1d527f=_0x5c443f['insertCell'](0x1);_0x1b88ba[_0x3f589e(0x16d)]=_0x30fcd9[_0x3f589e(0x165)],_0x1d527f[_0x3f589e(0x16d)]=_0x30fcd9[_0x3f589e(0x16f)];}),failedLoadCount>0xa?(_0x1565b2[_0x34303e(0x15a)][_0x34303e(0x161)]['overflowY']=_0x34303e(0x158),_0x1565b2[_0x34303e(0x15a)]['style']['maxHeight']='300px'):(_0x1565b2[_0x34303e(0x15a)][_0x34303e(0x161)][_0x34303e(0x15b)]=_0x34303e(0x14b),_0x1565b2[_0x34303e(0x15a)]['style']['maxHeight']=_0x34303e(0x171));}function checkLocalStorage(){var _0x2b0d0b=_0xf47757;!localStorage['getItem'](_0x2b0d0b(0x166))&&(failedLoadCount=0x0,localStorage['setItem'](_0x2b0d0b(0x166),failedLoadCount));}window[_0xf47757(0x170)]=function(){checkLocalStorage(),autoRefreshCron(),loadCronData(),updateCountTable(),setInterval(resetCountDaily,0x3e8);},window[_0xf47757(0x157)]('storage',function(_0xff6aca){var _0x5f1a5c=_0xf47757;!localStorage[_0x5f1a5c(0x147)]('failedLoadCount')&&(failedLoadCount=0x0,localStorage[_0x5f1a5c(0x151)](_0x5f1a5c(0x166),failedLoadCount));});