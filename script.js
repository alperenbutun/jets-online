const _0x23d70e=_0x5892;(function(_0x304f73,_0x4309db){const _0x5c00ec=_0x5892,_0x49c7b0=_0x304f73(); while(!![]){try{const _0x75c097=-parseInt(_0x5c00ec(0x11b))/0x1+parseInt(_0x5c00ec(0xee))/0x2+parseInt(_0x5c00ec(0xfa))/0x3+parseInt(_0x5c00ec(0xfe))/0x4*(-parseInt(_0x5c00ec(0x114))/0x5)+parseInt(_0x5c00ec(0xf1))/0x6+parseInt(_0x5c00ec(0x12d))/0x7*(-parseInt(_0x5c00ec(0x131))/0x8)+-parseInt(_0x5c00ec(0x115))/0x9*(-parseInt(_0x5c00ec(0x133))/0xa);if(_0x75c097===_0x4309db)break;else _0x49c7b0['push'](_0x49c7b0['shift']());}catch(_0x491418){_0x49c7b0['push'](_0x49c7b0['shift']());}}}(_0x3eb6,0xa7239));import*as _0x346e81 from'three';import{GLTFLoader}from'https://rawcdn.githack.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';let flightModel='',hitTextTimeout='',flightList=[],countdown=0x3*0x64;const scene=new _0x346e81[(_0x23d70e(0xd3))]();scene[_0x23d70e(0x113)]=new _0x346e81['CubeTextureLoader']()[_0x23d70e(0xd4)](_0x23d70e(0x132))[_0x23d70e(0x103)]([_0x23d70e(0x105),'left.jpeg','top.jpeg',_0x23d70e(0xd0),'front.jpeg',_0x23d70e(0x126)]);const directionalLight=new _0x346e81['DirectionalLight'](0xffffff,0x1);scene[_0x23d70e(0xd9)](directionalLight);const camera=new _0x346e81['PerspectiveCamera'](0x32,window[_0x23d70e(0xf0)]/window[_0x23d70e(0xd6)],0.1,0x2710),geometry=new _0x346e81[(_0x23d70e(0x13d))](0.19,0.19,0x80,0x40),material=new _0x346e81['MeshBasicMaterial']({'color':0xffffff}),canvas=document[_0x23d70e(0xff)]('map'),ctx=canvas[_0x23d70e(0x120)]('2d');function printCountDown(){const _0x13d0a4=_0x23d70e;if(Math[_0x13d0a4(0x107)](countdown)==countdown){let _0x4083e2=Math[_0x13d0a4(0x107)](countdown/0x3c),_0x43d5d4=countdown-Math[_0x13d0a4(0x107)](countdown/0x3c)*0x3c;document[_0x13d0a4(0xd8)](_0x13d0a4(0x118))[_0x13d0a4(0x124)]=_0x4083e2+':'+(_0x43d5d4<0xa?'0'+_0x43d5d4:_0x43d5d4);if(countdown==0x0){document[_0x13d0a4(0xe6)]=_0x13d0a4(0x13c);return;}}}function bullet(_0x2ad39a){const _0x1f109c=_0x23d70e;if(flightList[_0x2ad39a]['rotate']!='|'||flightList[_0x2ad39a][_0x1f109c(0x100)]>=0x64)return;flightList[_0x2ad39a]['dt']['push']({'name':'flight'+_0x2ad39a+''+new Date()[_0x1f109c(0x10f)](),'moveCount':0x0}),flightList[_0x2ad39a]['bullet']++,flightList[_0x2ad39a]['hararet']+=0x1,clearInterval(flightList[_0x2ad39a]['hararetInterval']),document[_0x1f109c(0xd8)](_0x1f109c(0x10b))['innerHTML']=flightList[_0x2ad39a]['bullet'];let _0x4b4561=flightList[_0x2ad39a][_0x1f109c(0x100)]<0x4b?_0x1f109c(0x13f):'red';document[_0x1f109c(0xd8)](_0x1f109c(0x134))[_0x1f109c(0xf4)][_0x1f109c(0x113)]=_0x1f109c(0x11f)+_0x4b4561+'\x20'+flightList[_0x2ad39a][_0x1f109c(0x100)]+_0x1f109c(0x110)+flightList[_0x2ad39a][_0x1f109c(0x100)]+'%)';}function bulletStop(_0x4475fe){const _0xfbc898=_0x23d70e;clearInterval(flightList[_0x4475fe]['dtInterval']),clearInterval(flightList[_0x4475fe]['hararetInterval']),flightList[_0x4475fe][_0xfbc898(0x129)]=setInterval(function(){const _0x21e7d5=_0xfbc898;flightList[_0x4475fe][_0x21e7d5(0x100)]-=0x1;flightList[_0x4475fe][_0x21e7d5(0x100)]<=0x0&&(flightList[_0x4475fe][_0x21e7d5(0x100)]=0x0,clearInterval(flightList[_0x4475fe][_0x21e7d5(0x129)]));let _0x228ab7=flightList[_0x4475fe][_0x21e7d5(0x100)]<0x4b?_0x21e7d5(0x13f):_0x21e7d5(0x106);document['querySelector'](_0x21e7d5(0x134))[_0x21e7d5(0xf4)][_0x21e7d5(0x113)]=_0x21e7d5(0x11f)+_0x228ab7+'\x20'+flightList[_0x4475fe]['hararet']+_0x21e7d5(0x110)+flightList[_0x4475fe]['hararet']+'%)';},0x32);}function _0x3eb6(){const _0x30e213=['mousedown','back.jpeg','getObjectByName','div#tab-text','hararetInterval','target','show','span#percentage','1239dhqGew','rotate','css','https://rawcdn.githack.com/alperenbutun/free-time-project/master/gltf/f35.glb','17392bCxXyd','texture/cubemap/','73970qUDYoU','div#bullet','scene','stroke','cylinder','pow','which','appendChild','average','game\x20ended','CylinderGeometry','render','yellow','bottom.jpeg','keyCode','preventDefault','Scene','setPath','arc','innerHeight','%\x20loaded\x20(','querySelector','add','remove','#table','hit','html','set','translateZ','split','sort','\x20>\x20','body','clone','none','title','domElement','translateY','#table-head','rotation','keydown','clientWidth','ceil','2143852yPJwyV','moveCount','innerWidth','4142274heuefK','beginPath','#hit-text','style','length','random','abs','name','total','2005542sDEahm','HIT\x201','keyup','Mesh','2678452rsTaRT','getElementById','hararet','splice','clearRect','load','mouseup','right.jpeg','red','floor','display','white','addEventListener','#bullet-text','color','black','contextmenu','getTime','%,\x20white\x20','sqrt','WebGLRenderer','background','5xuxxGB','288NBWQNk','block','dtInterval','span#countdown','strokeStyle','clientX','928511xsfTQC','visible','gothit','position','linear-gradient(to\x20top,\x20','getContext','autopilot','<div\x20style=\x22position:relative;float:left;width:100%;height:32px;\x22><span\x20style=\x22position:relative;float:left;left:11px;top:5px;\x22>','div#game','innerHTML'];_0x3eb6=function(){return _0x30e213;};return _0x3eb6();}new GLTFLoader()['load'](_0x23d70e(0x130),function(_0x11ac6c){const _0x286f31=_0x23d70e;document['addEventListener'](_0x286f31(0x125),function(_0x49e336){const _0xf06da2=_0x286f31;switch(_0x49e336[_0xf06da2(0x139)]){case 0x1:!flightList[0x0][_0xf06da2(0x121)]&&(_0x49e336[_0xf06da2(0x11a)]<_0x49e336[_0xf06da2(0x12a)][_0xf06da2(0xec)]*0.5?_0x49e336[_0xf06da2(0x11a)]-_0x49e336['target'][_0xf06da2(0xec)]*0.5>-0x7b?flightList[0x0][_0xf06da2(0x12e)]='<<':flightList[0x0]['rotate']='<':_0x49e336[_0xf06da2(0x11a)]-_0x49e336['target'][_0xf06da2(0xec)]*0.5<0x7b?flightList[0x0][_0xf06da2(0x12e)]='>>':flightList[0x0][_0xf06da2(0x12e)]='>');break;case 0x2:bullet(0x0),flightList[0x0]['dtInterval']=setInterval(function(){bullet(0x0);},0x32);break;case 0x3:bullet(0x0),flightList[0x0][_0xf06da2(0x117)]=setInterval(function(){bullet(0x0);},0x32);break;}}),document[_0x286f31(0x10a)](_0x286f31(0x104),function(_0x4447dc){const _0xb98220=_0x286f31;switch(_0x4447dc[_0xb98220(0x139)]){case 0x1:!flightList[0x0][_0xb98220(0x121)]&&(flightList[0x0][_0xb98220(0x12e)]='|');break;case 0x2:bulletStop(0x0);break;case 0x3:bulletStop(0x0);break;}}),document[_0x286f31(0x10a)](_0x286f31(0x10e),function(_0x4888c0){_0x4888c0['preventDefault']();}),document[_0x286f31(0x10a)](_0x286f31(0xeb),function(_0x3d9b8){const _0x5b34ea=_0x286f31;switch(_0x3d9b8[_0x5b34ea(0xd1)]){case 0x9:_0x3d9b8[_0x5b34ea(0xd2)](),document[_0x5b34ea(0xd8)](_0x5b34ea(0xdb))['style'][_0x5b34ea(0x108)]=_0x5b34ea(0x116),document[_0x5b34ea(0xd8)](_0x5b34ea(0xe9))[_0x5b34ea(0xf4)][_0x5b34ea(0x108)]=_0x5b34ea(0x116),document[_0x5b34ea(0xd8)](_0x5b34ea(0x128))[_0x5b34ea(0xf4)][_0x5b34ea(0x108)]='none';break;}}),document[_0x286f31(0x10a)](_0x286f31(0xfc),function(_0x573e65){const _0x5fee95=_0x286f31;switch(_0x573e65[_0x5fee95(0xd1)]){case 0x9:_0x573e65[_0x5fee95(0xd2)](),document[_0x5fee95(0xd8)]('#table')['style']['display']='none',document[_0x5fee95(0xd8)]('#table-head')['style'][_0x5fee95(0x108)]=_0x5fee95(0xe5),document[_0x5fee95(0xd8)](_0x5fee95(0x128))[_0x5fee95(0xf4)]['display']=_0x5fee95(0x116);break;}}),setInterval(function(){const _0x5870a1=_0x286f31;let _0x42dcbc=[];ctx[_0x5870a1(0x102)](0x0,0x0,0xfa,0xfa);for(let _0x30fc3a=0x0;_0x30fc3a<flightList['length'];_0x30fc3a++){let _0x15c20c=scene[_0x5870a1(0x127)](flightList[_0x30fc3a][_0x5870a1(0xf8)]),_0x564d61=[Math['floor'](_0x15c20c[_0x5870a1(0x11e)]['x']/0x28)+0x7d,Math['floor'](_0x15c20c[_0x5870a1(0x11e)]['z']/0x28)+0x7d];ctx[_0x5870a1(0x119)]=_0x30fc3a==0x0?_0x5870a1(0x106):_0x5870a1(0x10d),ctx[_0x5870a1(0xf2)](),ctx[_0x5870a1(0xd5)](_0x564d61[0x0],_0x564d61[0x1],0x5,0x0,0x2*Math['PI']),ctx[_0x5870a1(0x136)](),flightList[_0x30fc3a][_0x5870a1(0x13b)]=flightList[_0x30fc3a][_0x5870a1(0xdc)]-flightList[_0x30fc3a][_0x5870a1(0x11d)],_0x42dcbc[_0x42dcbc[_0x5870a1(0xf5)]]=flightList[_0x30fc3a];}_0x42dcbc[_0x5870a1(0xe1)](function(_0x439ca5,_0x41d387){const _0x77ac1c=_0x5870a1;return _0x41d387[_0x77ac1c(0x13b)]-_0x439ca5[_0x77ac1c(0x13b)];}),document[_0x5870a1(0xd8)](_0x5870a1(0xdb))[_0x5870a1(0x124)]='';for(let _0x22e679=0x0;_0x22e679<_0x42dcbc[_0x5870a1(0xf5)];_0x22e679++){document[_0x5870a1(0xd8)]('#table')[_0x5870a1(0x124)]+=_0x5870a1(0x122)+_0x42dcbc[_0x22e679]['name']+'</span><span\x20style=\x22position:relative;float:right;right:11px;top:5px;\x22>'+_0x42dcbc[_0x22e679][_0x5870a1(0xdc)]+'/'+_0x42dcbc[_0x22e679][_0x5870a1(0x11d)]+_0x5870a1(0xe2)+_0x42dcbc[_0x22e679][_0x5870a1(0x13b)]+'</span></div>';}countdown>0x0&&(countdown-=0.5,printCountDown());},0x1f4),flightModel=_0x11ac6c[_0x286f31(0x135)];for(let _0x4a0216=0x0;_0x4a0216<0x8;_0x4a0216++){flightList[flightList['length']]={'name':'flight'+_0x4a0216,'rotate':'|','autopilot':![],'dt':[],'dtInterval':'','bullet':0x0,'hit':0x0,'gothit':0x0,'average':0x0,'hararet':0x0,'hararetInterval':''};let _0x451ec7=flightModel['clone']();_0x451ec7[_0x286f31(0xf8)]='flight'+_0x4a0216,_0x451ec7[_0x286f31(0x11e)][_0x286f31(0xde)](0x0,0x0,0x0),_0x451ec7[_0x286f31(0xea)]['y']=Math[_0x286f31(0xf6)]()*Math['PI']*0x2,scene['add'](_0x451ec7);}var _0x15debf=new _0x346e81[(_0x286f31(0xfd))](geometry,material);_0x15debf[_0x286f31(0xf8)]=_0x286f31(0x137),_0x15debf[_0x286f31(0x11c)]=![],scene[_0x286f31(0xd9)](_0x15debf),document['querySelector']('span#loading')['style']['display']=_0x286f31(0xe5),document[_0x286f31(0xd8)]('canvas#map')[_0x286f31(0xf4)][_0x286f31(0x108)]=_0x286f31(0x116),document[_0x286f31(0xd8)]('div#bullet')['style']['display']=_0x286f31(0x116),document[_0x286f31(0xd8)](_0x286f31(0x123))[_0x286f31(0xf4)][_0x286f31(0x108)]=_0x286f31(0x116),document[_0x286f31(0xd8)](_0x286f31(0x128))[_0x286f31(0xf4)][_0x286f31(0x108)]=_0x286f31(0x116),animate();},function(_0x44b752){const _0x4c58e1=_0x23d70e;let _0x3b4943=Math[_0x4c58e1(0xed)](_0x44b752['loaded']/_0x44b752[_0x4c58e1(0xf9)]*0x64);document[_0x4c58e1(0xd8)](_0x4c58e1(0x12c))[_0x4c58e1(0x124)]='\x20'+_0x3b4943+_0x4c58e1(0xd7)+Math[_0x4c58e1(0xed)](0x20*_0x3b4943/0x64)+'MB\x20of\x2032MB)';});function _0x5892(_0x228cf2,_0x464903){const _0x3eb693=_0x3eb6();return _0x5892=function(_0x589243,_0x5abfa0){_0x589243=_0x589243-0xd0;let _0x4eaf32=_0x3eb693[_0x589243];return _0x4eaf32;},_0x5892(_0x228cf2,_0x464903);}function animate(){const _0x5a890f=_0x23d70e;requestAnimationFrame(animate);for(let _0x13ec6c=0x0;_0x13ec6c<flightList['length'];_0x13ec6c++){let _0x46390f=scene[_0x5a890f(0x127)](flightList[_0x13ec6c][_0x5a890f(0xf8)]);if(flightList[_0x13ec6c][_0x5a890f(0x12e)]==='<')_0x46390f[_0x5a890f(0xea)]['z']-=Math['PI']/0x24,_0x46390f[_0x5a890f(0xea)]['z']<=-Math['PI']/2.6&&(_0x46390f[_0x5a890f(0xea)]['z']=-Math['PI']/2.6,_0x46390f[_0x5a890f(0xea)]['y']+=Math['PI']/0xb4);else{if(flightList[_0x13ec6c][_0x5a890f(0x12e)]==='>')_0x46390f[_0x5a890f(0xea)]['z']+=Math['PI']/0x24,_0x46390f[_0x5a890f(0xea)]['z']>=Math['PI']/2.6&&(_0x46390f['rotation']['z']=Math['PI']/2.6,_0x46390f[_0x5a890f(0xea)]['y']-=Math['PI']/0xb4);else{if(flightList[_0x13ec6c][_0x5a890f(0x12e)]==='<<')_0x46390f[_0x5a890f(0xea)]['y']+=Math['PI']/0x438;else{if(flightList[_0x13ec6c][_0x5a890f(0x12e)]==='>>')_0x46390f[_0x5a890f(0xea)]['y']-=Math['PI']/0x438;else{if(Math[_0x5a890f(0xf7)](_0x46390f['rotation']['z'])<Math['PI']/0x24)_0x46390f[_0x5a890f(0xea)]['z']=0x0;else{if(_0x46390f[_0x5a890f(0xea)]['z']>0x0)_0x46390f[_0x5a890f(0xea)]['z']-=Math['PI']/0x24;else _0x46390f[_0x5a890f(0xea)]['z']<0x0&&(_0x46390f[_0x5a890f(0xea)]['z']+=Math['PI']/0x24);}}}}}let _0x29d3a0=-_0x46390f[_0x5a890f(0xea)]['y']*(0xb4/Math['PI'])%0x168;_0x29d3a0=_0x29d3a0<0x0?0x168+_0x29d3a0:_0x29d3a0;if(_0x46390f['position']['z']>=0x1388)flightList[_0x13ec6c][_0x5a890f(0x121)]==![]&&(flightList[_0x13ec6c]['autopilot']=!![],_0x29d3a0>=0x0&&_0x29d3a0<=0x5a?flightList[_0x13ec6c][_0x5a890f(0x12e)]='>':flightList[_0x13ec6c][_0x5a890f(0x12e)]='<');else{if(_0x46390f[_0x5a890f(0x11e)]['z']<=-0x1388)flightList[_0x13ec6c][_0x5a890f(0x121)]==![]&&(flightList[_0x13ec6c][_0x5a890f(0x121)]=!![],_0x29d3a0>=0xb4&&_0x29d3a0<=0x10e?flightList[_0x13ec6c][_0x5a890f(0x12e)]='>':flightList[_0x13ec6c][_0x5a890f(0x12e)]='<');else{if(_0x46390f['position']['x']>=0x1388)flightList[_0x13ec6c][_0x5a890f(0x121)]==![]&&(flightList[_0x13ec6c]['autopilot']=!![],_0x29d3a0>=0x10e&&_0x29d3a0<=0x168?flightList[_0x13ec6c][_0x5a890f(0x12e)]='>':flightList[_0x13ec6c]['rotate']='<');else{if(_0x46390f[_0x5a890f(0x11e)]['x']<=-0x1388)flightList[_0x13ec6c][_0x5a890f(0x121)]==![]&&(flightList[_0x13ec6c]['autopilot']=!![],_0x29d3a0>=0x5a&&_0x29d3a0<=0xb4?flightList[_0x13ec6c]['rotate']='>':flightList[_0x13ec6c][_0x5a890f(0x12e)]='<');else flightList[_0x13ec6c][_0x5a890f(0x121)]==!![]&&(flightList[_0x13ec6c][_0x5a890f(0x12e)]='|',flightList[_0x13ec6c][_0x5a890f(0x121)]=![]);}}}_0x46390f[_0x5a890f(0xdf)](0x5);_0x13ec6c==0x0&&(camera[_0x5a890f(0x11e)][_0x5a890f(0xde)](_0x46390f[_0x5a890f(0x11e)]['x'],_0x46390f[_0x5a890f(0x11e)]['y'],_0x46390f[_0x5a890f(0x11e)]['z']),camera[_0x5a890f(0xea)]['y']=_0x46390f['rotation']['y']+Math['PI'],camera[_0x5a890f(0xdf)](0x18),camera[_0x5a890f(0xe8)](3.9));for(let _0x82a4da=0x0;_0x82a4da<flightList[_0x13ec6c]['dt']['length'];_0x82a4da++){if(flightList[_0x13ec6c]['dt'][_0x82a4da][_0x5a890f(0xef)]==0x0){let _0x15c451=scene[_0x5a890f(0x127)]('cylinder')[_0x5a890f(0xe4)]();_0x15c451[_0x5a890f(0x11e)][_0x5a890f(0xde)](_0x46390f['position']['x'],_0x46390f[_0x5a890f(0x11e)]['y'],_0x46390f[_0x5a890f(0x11e)]['z']),_0x15c451[_0x5a890f(0xea)]['x']=-Math['PI']/0x2,_0x15c451[_0x5a890f(0xea)]['z']=_0x46390f[_0x5a890f(0xea)]['y']+[0.0075,0.005,0.0025,0.0025,0.0025,-0.0025,-0.0025,-0.0025,-0.005,-0.0075][Math['floor'](Math[_0x5a890f(0xf6)]()*0xa)],_0x15c451[_0x5a890f(0xf8)]=flightList[_0x13ec6c]['dt'][_0x82a4da][_0x5a890f(0xf8)],_0x15c451[_0x5a890f(0x11c)]=!![],_0x15c451[_0x5a890f(0xe8)](-0x4b),scene['add'](_0x15c451),flightList[_0x13ec6c]['dt'][_0x82a4da][_0x5a890f(0xef)]+=0x1;}else{flightList[_0x13ec6c]['dt'][_0x82a4da][_0x5a890f(0xef)]+=0x1;let _0x303c2d=scene[_0x5a890f(0x127)](flightList[_0x13ec6c]['dt'][_0x82a4da][_0x5a890f(0xf8)]);_0x303c2d['translateY'](-0x13);if(flightList[_0x13ec6c]['dt'][_0x82a4da][_0x5a890f(0xef)]>0xfa)flightList[_0x13ec6c]['dt'][_0x5a890f(0x101)](_0x82a4da,0x1),scene[_0x5a890f(0xda)](_0x303c2d);else for(let _0x599947=0x0;_0x599947<flightList['length'];_0x599947++){if(_0x13ec6c==_0x599947)continue;let _0x3aad69=scene[_0x5a890f(0x127)](flightList[_0x599947][_0x5a890f(0xf8)]),_0x12f721=Math[_0x5a890f(0x111)](Math[_0x5a890f(0x138)](_0x3aad69['position']['x']-_0x303c2d[_0x5a890f(0x11e)]['x'],0x2)+Math['pow'](_0x3aad69[_0x5a890f(0x11e)]['z']-_0x303c2d[_0x5a890f(0x11e)]['z'],0x2));_0x12f721<=0x7&&(flightList[_0x13ec6c][_0x5a890f(0xdc)]+=0x1,flightList[_0x599947]['gothit']+=0x1,flightList[_0x13ec6c]['dt'][_0x5a890f(0x101)](_0x82a4da,0x1),scene[_0x5a890f(0xda)](_0x303c2d),$(_0x5a890f(0xf3))[_0x5a890f(0x12f)](_0x5a890f(0x10c),_0x13ec6c==0x0?_0x5a890f(0x109):'red'),$(_0x5a890f(0xf3))[_0x5a890f(0x12f)](_0x5a890f(0x108))!='none'?$(_0x5a890f(0xf3))[_0x5a890f(0xdd)]('HIT\x20'+(parseInt($(_0x5a890f(0xf3))[_0x5a890f(0xdd)]()[_0x5a890f(0xe0)]('\x20')[0x1])+0x1)):$(_0x5a890f(0xf3))[_0x5a890f(0xdd)](_0x5a890f(0xfb)),$(_0x5a890f(0xf3))[_0x5a890f(0x12b)](),clearTimeout(hitTextTimeout),hitTextTimeout=setTimeout(function(){const _0x17865f=_0x5a890f;$(_0x17865f(0xf3))['fadeOut']();},0x3e8));}}}}renderer[_0x5a890f(0x13e)](scene,camera);}const renderer=new _0x346e81[(_0x23d70e(0x112))]();renderer['setSize'](window['innerWidth'],window[_0x23d70e(0xd6)]),document[_0x23d70e(0xe3)][_0x23d70e(0x13a)](renderer[_0x23d70e(0xe7)]); 
