var _0x18200f=_0xd326;(function(_0x4f587e,_0x545f24){var _0x565882=_0xd326,_0x1490e8=_0x4f587e();while(!![]){try{var _0xf0b291=parseInt(_0x565882(0x1bf))/0x1*(parseInt(_0x565882(0x1ba))/0x2)+parseInt(_0x565882(0x1bc))/0x3+-parseInt(_0x565882(0x1ce))/0x4+parseInt(_0x565882(0x19d))/0x5*(-parseInt(_0x565882(0x1c0))/0x6)+parseInt(_0x565882(0x1c8))/0x7+-parseInt(_0x565882(0x1af))/0x8*(-parseInt(_0x565882(0x1b8))/0x9)+parseInt(_0x565882(0x19c))/0xa;if(_0xf0b291===_0x545f24)break;else _0x1490e8['push'](_0x1490e8['shift']());}catch(_0x2781b7){_0x1490e8['push'](_0x1490e8['shift']());}}}(_0x5c55,0xcaa5e));var failedLoadCount=localStorage['getItem']('failedLoadCount')?parseInt(localStorage[_0x18200f(0x1ca)]('failedLoadCount')):0x0;function showLoader(){var _0x38faba=_0x18200f,_0x49c387=document['querySelector'](_0x38faba(0x1d7));_0x49c387[_0x38faba(0x1d6)][_0x38faba(0x1d0)]='block';}function showNotification(_0xa4e50a){var _0x53b106=_0x18200f,_0x56d79f=document[_0x53b106(0x1b0)](_0x53b106(0x1cb));_0x56d79f[_0x53b106(0x1cd)]=_0xa4e50a,_0x56d79f[_0x53b106(0x1d6)][_0x53b106(0x1d0)]=_0x53b106(0x1cf),setTimeout(function(){var _0x277a55=_0x53b106;_0x56d79f[_0x277a55(0x1d6)][_0x277a55(0x1d0)]=_0x277a55(0x1d4);},0xbb8);}function autoRefreshCron(){showLoader(),setTimeout(function(){loadCronData(),updateCountTable(),autoRefreshCron();},0x1388);}function loadCronData(){var _0xaeb11f=_0x18200f;fetch(_0xaeb11f(0x19e))[_0xaeb11f(0x1b6)](_0x55c885=>{var _0x456bc1=_0xaeb11f;if(!_0x55c885['ok'])throw new Error(_0x456bc1(0x1a8));return _0x55c885[_0x456bc1(0x1a5)]();})['then'](_0x1fdf1f=>{var _0x1b1f10=_0xaeb11f;document[_0x1b1f10(0x1b0)]('cronData')[_0x1b1f10(0x1a0)]=_0x1fdf1f,console[_0x1b1f10(0x19b)](_0x1b1f10(0x1d2)),showNotification('Konten\x20berhasil\x20dimuat!'),hideLoader();})[_0xaeb11f(0x1b4)](_0x5fa620=>{var _0x145df9=_0xaeb11f;console['error'](_0x145df9(0x1d3),_0x5fa620);var _0x239f55=new Date()[_0x145df9(0x1c7)]();localStorage['setItem'](_0x145df9(0x1c9)+failedLoadCount,_0x239f55),failedLoadCount++,localStorage[_0x145df9(0x1b1)]('failedLoadCount',failedLoadCount),showNotification(_0x145df9(0x1c4)+_0x5fa620[_0x145df9(0x1ac)]),hideLoader();});}function _0x5c55(){var _0x51d1f6=['querySelector','forEach','catch','time','then','addEventListener','3855609IvKrrL','getMinutes','518wlMIAz','getHours','2914242vvzFRD','parentElement','storage','4181srBZMS','11190OOEhCL','toString','failedLoadCount','insertCell','Gagal\x20memuat\x20konten:\x20','setSeconds','countTable','toLocaleString','9625959CPsyQN','failureTime','getItem','toast','300px','textContent','6634868NDuKoE','block','display','auto','cron.php\x20loaded\x20successfully.','Error\x20loading\x20cron.php:','none','scroll','style','.loader','log','315470xEUhUl','3755CCUSKV','https://bluehomeid.my.id/system/andrep-cron.php','resetTime','innerHTML','padStart','onload','setMinutes','setHours','text','setDate','getSeconds','Network\x20response\x20was\x20not\x20ok','push','floor','maxHeight','message','Waktu\x20reset\x20data:\x20','count','8akiYSX','getElementById','setItem'];_0x5c55=function(){return _0x51d1f6;};return _0x5c55();}function _0xd326(_0x4b2969,_0x25b736){var _0x5c5535=_0x5c55();return _0xd326=function(_0xd326ee,_0x262291){_0xd326ee=_0xd326ee-0x19b;var _0x486a31=_0x5c5535[_0xd326ee];return _0x486a31;},_0xd326(_0x4b2969,_0x25b736);}function hideLoader(){var _0x5a6593=_0x18200f,_0x3aa5f8=document[_0x5a6593(0x1b2)]('.loader');_0x3aa5f8[_0x5a6593(0x1d6)][_0x5a6593(0x1d0)]=_0x5a6593(0x1d4);}function updateCountTable(){var _0x4f9cb4=_0x18200f,_0x35b33f=document[_0x4f9cb4(0x1b0)](_0x4f9cb4(0x1c6));_0x35b33f[_0x4f9cb4(0x1a0)]='';var _0xbcccbf=[];for(var _0x63d809=failedLoadCount;_0x63d809>=0x1;_0x63d809--){_0xbcccbf[_0x4f9cb4(0x1a9)]({'count':_0x63d809,'time':localStorage[_0x4f9cb4(0x1ca)](_0x4f9cb4(0x1c9)+_0x63d809)||'-'});}_0xbcccbf[_0x4f9cb4(0x1b3)](function(_0x4ebd7e){var _0x3a97f0=_0x4f9cb4,_0x406995=_0x35b33f['insertRow'](),_0x2862fa=_0x406995[_0x3a97f0(0x1c3)](0x0),_0x1e2233=_0x406995[_0x3a97f0(0x1c3)](0x1);_0x2862fa['textContent']=_0x4ebd7e[_0x3a97f0(0x1ae)],_0x1e2233[_0x3a97f0(0x1cd)]=_0x4ebd7e[_0x3a97f0(0x1b5)];}),failedLoadCount>0xa?(_0x35b33f[_0x4f9cb4(0x1bd)][_0x4f9cb4(0x1d6)]['overflowY']=_0x4f9cb4(0x1d5),_0x35b33f['parentElement'][_0x4f9cb4(0x1d6)][_0x4f9cb4(0x1ab)]=_0x4f9cb4(0x1cc)):(_0x35b33f[_0x4f9cb4(0x1bd)]['style']['overflowY']=_0x4f9cb4(0x1d1),_0x35b33f[_0x4f9cb4(0x1bd)]['style'][_0x4f9cb4(0x1ab)]='none');}function checkLocalStorage(){var _0x1c3ee8=_0x18200f;!localStorage[_0x1c3ee8(0x1ca)](_0x1c3ee8(0x1c2))&&(failedLoadCount=0x0,localStorage[_0x1c3ee8(0x1b1)](_0x1c3ee8(0x1c2),failedLoadCount));}window[_0x18200f(0x1a2)]=function(){checkLocalStorage(),autoRefreshCron(),loadCronData(),updateCountTable(),displayResetTime(),setInterval(resetCountDaily,0x3e8);},window[_0x18200f(0x1b7)](_0x18200f(0x1be),function(_0x4bc2cd){var _0x1ee918=_0x18200f;!localStorage[_0x1ee918(0x1ca)]('failedLoadCount')&&(failedLoadCount=0x0,localStorage['setItem'](_0x1ee918(0x1c2),failedLoadCount));});var resetTime=new Date();resetTime[_0x18200f(0x1a4)](0xc),resetTime[_0x18200f(0x1a3)](0x0),resetTime[_0x18200f(0x1c5)](0x0);function displayResetTime(){var _0x28d902=_0x18200f,_0x459372=new Date();_0x459372>resetTime&&resetTime[_0x28d902(0x1a6)](resetTime['getDate']()+0x1);var _0x1f0d98=resetTime-_0x459372,_0x536ffa=Math[_0x28d902(0x1aa)](_0x1f0d98/0x3e8%0x3c),_0x4caf73=Math[_0x28d902(0x1aa)](_0x1f0d98/0x3e8/0x3c%0x3c),_0x1a91db=Math[_0x28d902(0x1aa)](_0x1f0d98/(0x3e8*0x3c*0x3c)%0x18),_0x151cbc=_0x1a91db[_0x28d902(0x1c1)]()['padStart'](0x2,'0')+':'+_0x4caf73[_0x28d902(0x1c1)]()[_0x28d902(0x1a1)](0x2,'0')+':'+_0x536ffa[_0x28d902(0x1c1)]()[_0x28d902(0x1a1)](0x2,'0');document[_0x28d902(0x1b0)](_0x28d902(0x19f))[_0x28d902(0x1cd)]=_0x28d902(0x1ad)+_0x151cbc;}function resetCountDaily(){var _0x1c2272=_0x18200f,_0x50413e=new Date(),_0x218ba8=resetTime[_0x1c2272(0x1bb)](),_0x73c311=resetTime[_0x1c2272(0x1b9)](),_0x806edf=resetTime[_0x1c2272(0x1a7)]();_0x50413e[_0x1c2272(0x1bb)]()===_0x218ba8&&_0x50413e['getMinutes']()===_0x73c311&&_0x50413e['getSeconds']()===_0x806edf&&(failedLoadCount=0x0,localStorage['setItem'](_0x1c2272(0x1c2),failedLoadCount),autoRefreshCron()),displayResetTime();}resetCountDaily();