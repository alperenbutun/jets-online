const _0x4915cd= _0x9a83;(function(_0x4f62af,_0x50c6e8){const _0x3df63d=_0x9a83,_0x4fa4ec=_0x4f62af();while(!![]){try{const _0x3cbe82=-parseInt(_0x3df63d(0x11d))/0x1*(-parseInt(_0x3df63d(0x155))/0x2)+parseInt(_0x3df63d(0x137))/0x3*(parseInt(_0x3df63d(0x15f))/0x4)+parseInt(_0x3df63d(0x172))/0x5*(-parseInt(_0x3df63d(0x13a))/0x6)+-parseInt(_0x3df63d(0x12e))/0x7*(parseInt(_0x3df63d(0x139))/0x8)+parseInt(_0x3df63d(0x185))/0x9*(-parseInt(_0x3df63d(0x127))/0xa)+-parseInt(_0x3df63d(0x134))/0xb+-parseInt(_0x3df63d(0x15b))/0xc*(-parseInt(_0x3df63d(0x128))/0xd);if(_0x3cbe82===_0x50c6e8)break;else _0x4fa4ec['push'](_0x4fa4ec['shift']());}catch(_0x5c99da){_0x4fa4ec['push'](_0x4fa4ec['shift']());}}}(_0x2041,0x38a32));import*as _0x23e098 from'three';import{GLTFLoader}from'https://rawcdn.githack.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';let flightModel='',hitTextTimeout='',flightList=[],countdown=0xb4,continueGame=!![],scene=new _0x23e098[(_0x4915cd(0x17b))](),DirectionalLight=new _0x23e098[(_0x4915cd(0x181))](0xffffff,0x8);scene[_0x4915cd(0x166)]=new _0x23e098[(_0x4915cd(0x12d))]()['setPath'](_0x4915cd(0x14f))[_0x4915cd(0x160)]([_0x4915cd(0x162),_0x4915cd(0x120),_0x4915cd(0x126),_0x4915cd(0x186),'front.jpeg','back.jpeg']),scene[_0x4915cd(0x18f)](DirectionalLight);let camera=new _0x23e098[(_0x4915cd(0x17f))](0x32,window[_0x4915cd(0x153)]/window['innerHeight'],0.1,0x2710),canvas=document[_0x4915cd(0x163)](_0x4915cd(0x129)),ctx=canvas[_0x4915cd(0x177)]('2d'),frustum=new _0x23e098[(_0x4915cd(0x145))](),matrix=new _0x23e098[(_0x4915cd(0x168))]();const renderer=new _0x23e098['WebGLRenderer']();renderer[_0x4915cd(0x16f)]=_0x23e098[_0x4915cd(0x13c)],renderer[_0x4915cd(0x173)](window[_0x4915cd(0x153)],window[_0x4915cd(0x179)]),window[_0x4915cd(0x13d)](_0x4915cd(0x180),onWindowResize);function onWindowResize(){const _0x333102=_0x4915cd;renderer['setSize'](window['innerWidth'],window[_0x333102(0x179)]);}function _0x2041(){const _0x5ad52d=['contextmenu','wrapT','RepeatWrapping','startTheGame','3191606PaiQlW','translateZ','traverse','42eBaaSH','which','8lsQnOO','942558xgvSym','containsPoint','sRGBEncoding','addEventListener','block','projectionMatrix','matrixWorldInverse','sort','beginPath','fill','span#percentage','Frustum','canvas#map','abs','style','rotate','set','SRGBColorSpace','preventDefault','render','clientX','texture/cubemap/','https://rawcdn.githack.com/alperenbutun/free-time-project/master/gltf/f35.glb','translateY','multiplyMatrices','innerWidth','700','190bpeJjV','red','black','appendChild','</span></div>','%\x20loaded\x20(','24rYjsGs','normal','material','position','58828zkmfxd','load','ceil','right.jpeg','getElementById','div#tab-text','length','background','colorSpace','Matrix4','autopilot','flight','display','fillStyle','keyup','scene','outputEncoding','PlaneGeometry','floor','5biUJOE','setSize','name','hit','MB\x20of\x2032MB)','getContext','rotation','innerHeight','domElement','Scene','<div\x20style=\x22position:relative;float:left;width:100%;height:32px;\x22><span\x20style=\x22position:relative;float:left;left:11px;top:5px;font-weight:','random','target','PerspectiveCamera','resize','DirectionalLight','repeat','Mesh','querySelector','1749123YikpTx','bottom.jpeg','setFromProjectionMatrix','clientWidth','TextureLoader','average','#table-head','MeshPhongMaterial','none','clearRect','add','innerHTML','#table','span#countdown','1255bUbVrq','gothit','getObjectByName','left.jpeg','total','div#bullet','arc','span#loading','mouseup','top.jpeg','10yjhVLK','3709160jZRqxm','map','https://rawcdn.githack.com/alperenbutun/free-time-project/f881038/texture/texture.jpg','stroke','div#game','CubeTextureLoader','155337tKCSMb','color'];_0x2041=function(){return _0x5ad52d;};return _0x2041();}function printCountDown(){const _0x53d98b=_0x4915cd;if(!continueGame)return;if(Math[_0x53d98b(0x171)](countdown)==countdown){let _0x542eb0=Math[_0x53d98b(0x171)](countdown/0x3c),_0x55af99=countdown-Math[_0x53d98b(0x171)](countdown/0x3c)*0x3c;document['querySelector'](_0x53d98b(0x11c))[_0x53d98b(0x190)]=_0x542eb0+':'+(_0x55af99<0xa?'0'+_0x55af99:_0x55af99);if(countdown==0x0){continueGame=![],document['querySelector'](_0x53d98b(0x191))['style'][_0x53d98b(0x16b)]=_0x53d98b(0x13e),document['querySelector'](_0x53d98b(0x18b))['style']['display']='block',document[_0x53d98b(0x184)](_0x53d98b(0x164))[_0x53d98b(0x148)]['display']=_0x53d98b(0x18d);return;}}}function _0x9a83(_0x45b895,_0x38cfdb){const _0x20412d=_0x2041();return _0x9a83=function(_0x9a8324,_0x49e7c3){_0x9a8324=_0x9a8324-0x11c;let _0x2edbad=_0x20412d[_0x9a8324];return _0x2edbad;},_0x9a83(_0x45b895,_0x38cfdb);}const gt=new _0x23e098[(_0x4915cd(0x189))]()[_0x4915cd(0x160)](_0x4915cd(0x12a)),gg=new _0x23e098[(_0x4915cd(0x170))](0x249f0,0x249f0),gm=new _0x23e098[(_0x4915cd(0x18c))]({'color':0xffffff,'map':gt,'transparent':!![],'opacity':0.025}),ground=new _0x23e098[(_0x4915cd(0x183))](gg,gm);ground[_0x4915cd(0x178)]['x']=-Math['PI']/0x2,ground[_0x4915cd(0x15d)]['map'][_0x4915cd(0x182)][_0x4915cd(0x14a)](0x40,0x40),ground[_0x4915cd(0x15d)]['map']['wrapS']=_0x23e098[_0x4915cd(0x132)],ground[_0x4915cd(0x15d)]['map'][_0x4915cd(0x131)]=_0x23e098['RepeatWrapping'],ground[_0x4915cd(0x15d)][_0x4915cd(0x129)][_0x4915cd(0x167)]=_0x23e098[_0x4915cd(0x14b)],scene[_0x4915cd(0x18f)](ground),new GLTFLoader()[_0x4915cd(0x160)](_0x4915cd(0x150),function(_0x26c512){const _0x4dc7b9=_0x4915cd;flightModel=_0x26c512[_0x4dc7b9(0x16e)],flightModel[_0x4dc7b9(0x136)](_0x50382d=>{const _0x2e4eee=_0x4dc7b9;_0x50382d[_0x2e4eee(0x15d)]&&(_0x50382d['material'][_0x2e4eee(0x12f)]['r']=0x0,_0x50382d[_0x2e4eee(0x15d)][_0x2e4eee(0x12f)]['g']=0x0,_0x50382d[_0x2e4eee(0x15d)]['color']['b']=0x0);});for(let _0xd50d3b=0x0;_0xd50d3b<0xa;_0xd50d3b++){flightList[flightList[_0x4dc7b9(0x165)]]={'name':'flight'+_0xd50d3b,'rotate':'|','autopilot':![],'bullet':0x0,'hit':0x0,'gothit':0x0,'average':0x0};let _0x2257d3=flightModel['clone']();_0x2257d3[_0x4dc7b9(0x15d)]=flightModel['material']['clone'](),_0x2257d3[_0x4dc7b9(0x174)]=_0x4dc7b9(0x16a)+_0xd50d3b,_0x2257d3[_0x4dc7b9(0x15e)][_0x4dc7b9(0x14a)](Math['round'](Math[_0x4dc7b9(0x17d)]()*0x1388)-0x9c4,0x5,Math['round'](Math[_0x4dc7b9(0x17d)]()*0x1388)-0x9c4),_0x2257d3[_0x4dc7b9(0x178)]['y']=Math[_0x4dc7b9(0x17d)]()*Math['PI']*0x2,scene[_0x4dc7b9(0x18f)](_0x2257d3);}document[_0x4dc7b9(0x184)]('#fullscreen-button')[_0x4dc7b9(0x148)][_0x4dc7b9(0x16b)]=_0x4dc7b9(0x13e);},function(_0x348fe8){const _0x4ab8ee=_0x4915cd;let _0x23f890=Math['ceil'](_0x348fe8['loaded']/_0x348fe8[_0x4ab8ee(0x121)]*0x64);document[_0x4ab8ee(0x184)](_0x4ab8ee(0x144))[_0x4ab8ee(0x190)]='\x20'+_0x23f890+_0x4ab8ee(0x15a)+Math[_0x4ab8ee(0x161)](0x20*_0x23f890/0x64)+_0x4ab8ee(0x176);}),window[_0x4915cd(0x133)]=function(){const _0x2dee7e=_0x4915cd;document['querySelector']('#fullscreen-button')[_0x2dee7e(0x148)]['display']=_0x2dee7e(0x18d),setTimeout(function(){const _0x284585=_0x2dee7e;document['body'][_0x284585(0x158)](renderer[_0x284585(0x17a)]),document[_0x284585(0x184)](_0x284585(0x124))['style']['display']=_0x284585(0x18d),document[_0x284585(0x184)](_0x284585(0x146))[_0x284585(0x148)][_0x284585(0x16b)]=_0x284585(0x13e),document[_0x284585(0x184)](_0x284585(0x122))[_0x284585(0x148)][_0x284585(0x16b)]=_0x284585(0x13e),document[_0x284585(0x184)](_0x284585(0x12c))[_0x284585(0x148)]['display']=_0x284585(0x13e),document[_0x284585(0x184)](_0x284585(0x164))[_0x284585(0x148)][_0x284585(0x16b)]=_0x284585(0x13e),animate();},0x1f4),document[_0x2dee7e(0x13d)]('mousedown',function(_0x3fe21c){const _0x3a444a=_0x2dee7e;if(!continueGame)return;switch(_0x3fe21c['which']){case 0x1:if(!flightList[0x0][_0x3a444a(0x169)]){if(_0x3fe21c['clientX']<_0x3fe21c[_0x3a444a(0x17e)]['clientWidth']*0.5)_0x3fe21c[_0x3a444a(0x14e)]-_0x3fe21c[_0x3a444a(0x17e)][_0x3a444a(0x188)]*0.5>-0x7b?flightList[0x0]['rotate']='<<':flightList[0x0][_0x3a444a(0x149)]='<';else _0x3fe21c[_0x3a444a(0x14e)]-_0x3fe21c[_0x3a444a(0x17e)][_0x3a444a(0x188)]*0.5<0x7b?flightList[0x0]['rotate']='>>':flightList[0x0][_0x3a444a(0x149)]='>';}break;case 0x2:break;case 0x3:break;}}),document['addEventListener'](_0x2dee7e(0x125),function(_0x16a48c){const _0x11be8d=_0x2dee7e;if(!continueGame)return;switch(_0x16a48c[_0x11be8d(0x138)]){case 0x1:!flightList[0x0][_0x11be8d(0x169)]&&(flightList[0x0]['rotate']='|');break;case 0x2:break;case 0x3:break;}}),document[_0x2dee7e(0x13d)](_0x2dee7e(0x130),function(_0xff37ef){const _0xc22aaa=_0x2dee7e;if(!continueGame)return;_0xff37ef[_0xc22aaa(0x14c)]();}),document[_0x2dee7e(0x13d)]('keydown',function(_0x4396a8){const _0x4d666d=_0x2dee7e;if(!continueGame)return;switch(_0x4396a8['keyCode']){case 0x9:_0x4396a8['preventDefault'](),document['querySelector'](_0x4d666d(0x191))[_0x4d666d(0x148)][_0x4d666d(0x16b)]=_0x4d666d(0x13e),document[_0x4d666d(0x184)]('#table-head')[_0x4d666d(0x148)][_0x4d666d(0x16b)]=_0x4d666d(0x13e),document[_0x4d666d(0x184)](_0x4d666d(0x164))[_0x4d666d(0x148)][_0x4d666d(0x16b)]='none';break;}}),document['addEventListener'](_0x2dee7e(0x16d),function(_0x1d2e4e){const _0x1f9d96=_0x2dee7e;if(!continueGame)return;switch(_0x1d2e4e['keyCode']){case 0x9:_0x1d2e4e[_0x1f9d96(0x14c)](),document[_0x1f9d96(0x184)](_0x1f9d96(0x191))[_0x1f9d96(0x148)][_0x1f9d96(0x16b)]=_0x1f9d96(0x18d),document['querySelector'](_0x1f9d96(0x18b))[_0x1f9d96(0x148)][_0x1f9d96(0x16b)]=_0x1f9d96(0x18d),document['querySelector']('div#tab-text')[_0x1f9d96(0x148)][_0x1f9d96(0x16b)]=_0x1f9d96(0x13e);break;}}),setInterval(function(){const _0x252520=_0x2dee7e;if(!continueGame)return;let _0x1f34e7=[];ctx[_0x252520(0x18e)](0x0,0x0,0x7d,0x7d);for(let _0x45b52a=0x0;_0x45b52a<flightList[_0x252520(0x165)];_0x45b52a++){let _0x517bba=scene['getObjectByName'](flightList[_0x45b52a][_0x252520(0x174)]),_0x4e9724=[Math['floor'](_0x517bba['position']['x']/0x50)+62.5,Math['floor'](_0x517bba[_0x252520(0x15e)]['z']/0x50)+62.5];ctx[_0x252520(0x16c)]=_0x45b52a==0x0?_0x252520(0x156):_0x252520(0x157),ctx['strokeStyle']=_0x45b52a==0x0?_0x252520(0x156):'black',ctx[_0x252520(0x142)](),ctx[_0x252520(0x123)](_0x4e9724[0x0],_0x4e9724[0x1],0x3,0x0,0x2*Math['PI']),ctx[_0x252520(0x143)](),ctx[_0x252520(0x12b)](),flightList[_0x45b52a][_0x252520(0x18a)]=flightList[_0x45b52a][_0x252520(0x175)]-flightList[_0x45b52a][_0x252520(0x11e)],_0x1f34e7[_0x1f34e7[_0x252520(0x165)]]=flightList[_0x45b52a];}_0x1f34e7[_0x252520(0x141)](function(_0x12fb91,_0x2468cd){const _0x49217c=_0x252520;return _0x2468cd[_0x49217c(0x18a)]-_0x12fb91[_0x49217c(0x18a)];}),document['querySelector'](_0x252520(0x191))[_0x252520(0x190)]='';for(let _0x3d5b07=0x0;_0x3d5b07<_0x1f34e7[_0x252520(0x165)];_0x3d5b07++){let _0x140663=_0x3d5b07==0x0?_0x252520(0x154):_0x252520(0x15c);document[_0x252520(0x184)](_0x252520(0x191))[_0x252520(0x190)]+=_0x252520(0x17c)+_0x140663+'\x22>'+_0x1f34e7[_0x3d5b07]['name']+'</span><span\x20style=\x22position:relative;float:right;right:11px;top:5px;\x22>'+_0x1f34e7[_0x3d5b07][_0x252520(0x175)]+'/'+_0x1f34e7[_0x3d5b07][_0x252520(0x11e)]+'\x20>\x20'+_0x1f34e7[_0x3d5b07]['average']+_0x252520(0x159);}countdown>0x0&&(countdown-=0.5,printCountDown());},0x1f4);};function animate(){const _0x32b4e9=_0x4915cd;requestAnimationFrame(animate);if(!continueGame)return;for(let _0x4409a3=0x0;_0x4409a3<flightList[_0x32b4e9(0x165)];_0x4409a3++){let _0x54c562=scene[_0x32b4e9(0x11f)](flightList[_0x4409a3]['name']);if(flightList[_0x4409a3][_0x32b4e9(0x149)]==='<')_0x54c562[_0x32b4e9(0x178)]['z']-=Math['PI']/0x24,_0x54c562[_0x32b4e9(0x178)]['z']<=-Math['PI']/2.6&&(_0x54c562[_0x32b4e9(0x178)]['z']=-Math['PI']/2.6,_0x54c562['rotation']['y']+=Math['PI']/0x10e);else{if(flightList[_0x4409a3]['rotate']==='>')_0x54c562['rotation']['z']+=Math['PI']/0x24,_0x54c562[_0x32b4e9(0x178)]['z']>=Math['PI']/2.6&&(_0x54c562[_0x32b4e9(0x178)]['z']=Math['PI']/2.6,_0x54c562[_0x32b4e9(0x178)]['y']-=Math['PI']/0x10e);else{if(flightList[_0x4409a3][_0x32b4e9(0x149)]==='<<'&&_0x54c562[_0x32b4e9(0x178)]['z']==0x0)_0x54c562[_0x32b4e9(0x178)]['y']+=Math['PI']/0x438;else{if(flightList[_0x4409a3]['rotate']==='>>'&&_0x54c562[_0x32b4e9(0x178)]['z']==0x0)_0x54c562['rotation']['y']-=Math['PI']/0x438;else{if(Math[_0x32b4e9(0x147)](_0x54c562['rotation']['z'])<Math['PI']/0x24)_0x54c562[_0x32b4e9(0x178)]['z']=0x0;else{if(_0x54c562[_0x32b4e9(0x178)]['z']>0x0)_0x54c562[_0x32b4e9(0x178)]['z']-=Math['PI']/0x24;else _0x54c562[_0x32b4e9(0x178)]['z']<0x0&&(_0x54c562[_0x32b4e9(0x178)]['z']+=Math['PI']/0x24);}}}}}let _0x26e990=-_0x54c562[_0x32b4e9(0x178)]['y']*(0xb4/Math['PI'])%0x168;_0x26e990=_0x26e990<0x0?0x168+_0x26e990:_0x26e990;if(_0x54c562[_0x32b4e9(0x15e)]['z']>=0x1388)flightList[_0x4409a3][_0x32b4e9(0x169)]==![]&&(flightList[_0x4409a3][_0x32b4e9(0x169)]=!![],_0x26e990>=0x0&&_0x26e990<=0x5a?flightList[_0x4409a3][_0x32b4e9(0x149)]='>':flightList[_0x4409a3]['rotate']='<');else{if(_0x54c562[_0x32b4e9(0x15e)]['z']<=-0x1388)flightList[_0x4409a3]['autopilot']==![]&&(flightList[_0x4409a3]['autopilot']=!![],_0x26e990>=0xb4&&_0x26e990<=0x10e?flightList[_0x4409a3][_0x32b4e9(0x149)]='>':flightList[_0x4409a3][_0x32b4e9(0x149)]='<');else{if(_0x54c562['position']['x']>=0x1388)flightList[_0x4409a3][_0x32b4e9(0x169)]==![]&&(flightList[_0x4409a3][_0x32b4e9(0x169)]=!![],_0x26e990>=0x10e&&_0x26e990<=0x168?flightList[_0x4409a3][_0x32b4e9(0x149)]='>':flightList[_0x4409a3]['rotate']='<');else{if(_0x54c562[_0x32b4e9(0x15e)]['x']<=-0x1388)flightList[_0x4409a3][_0x32b4e9(0x169)]==![]&&(flightList[_0x4409a3][_0x32b4e9(0x169)]=!![],_0x26e990>=0x5a&&_0x26e990<=0xb4?flightList[_0x4409a3][_0x32b4e9(0x149)]='>':flightList[_0x4409a3][_0x32b4e9(0x149)]='<');else flightList[_0x4409a3]['autopilot']==!![]&&(flightList[_0x4409a3]['rotate']='|',flightList[_0x4409a3][_0x32b4e9(0x169)]=![]);}}}_0x54c562[_0x32b4e9(0x135)](0x5);_0x4409a3==0x0&&(camera[_0x32b4e9(0x15e)][_0x32b4e9(0x14a)](_0x54c562[_0x32b4e9(0x15e)]['x'],_0x54c562['position']['y'],_0x54c562[_0x32b4e9(0x15e)]['z']),camera[_0x32b4e9(0x178)]['y']=_0x54c562[_0x32b4e9(0x178)]['y']+Math['PI'],camera[_0x32b4e9(0x135)](0x18),camera[_0x32b4e9(0x151)](3.8));camera['updateMatrix'](),camera['updateMatrixWorld'](),matrix[_0x32b4e9(0x152)](camera['projectionMatrix'],camera[_0x32b4e9(0x140)]),frustum[_0x32b4e9(0x187)](new _0x23e098[(_0x32b4e9(0x168))]()[_0x32b4e9(0x152)](camera[_0x32b4e9(0x13f)],camera[_0x32b4e9(0x140)]));frustum[_0x32b4e9(0x13b)](_0x54c562[_0x32b4e9(0x15e)])&&_0x4409a3!=0x0&&_0x54c562[_0x32b4e9(0x136)](_0x2d50b6=>{const _0xf83e2a=_0x32b4e9;_0x2d50b6['material']&&(_0x2d50b6[_0xf83e2a(0x15d)][_0xf83e2a(0x12f)]['r']=0xff,_0x2d50b6[_0xf83e2a(0x15d)][_0xf83e2a(0x12f)]['g']=0x0,_0x2d50b6[_0xf83e2a(0x15d)][_0xf83e2a(0x12f)]['b']=0x0);});;}renderer[_0x32b4e9(0x14d)](scene,camera);}
