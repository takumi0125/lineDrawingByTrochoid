!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=43)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.4"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(12),i=n(31),o=n(16),a=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(0),i=n(1),o=n(30),a=n(6),s=n(4),u=function(t,e,n){var c,f,l,h=t&u.F,d=t&u.G,p=t&u.S,m=t&u.P,v=t&u.B,y=t&u.W,g=d?i:i[e]||(i[e]={}),_=g.prototype,x=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(c in n)(f=!h&&x&&void 0!==x[c])&&s(g,c)||(l=f?x[c]:n[c],g[c]=d&&"function"!=typeof x[c]?n[c]:v&&f?o(l,r):y&&x[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):m&&"function"==typeof l?o(Function.call,l):l,m&&((g.virtual||(g.virtual={}))[c]=l,t&u.R&&_&&!_[c]&&a(_,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(2),i=n(14);t.exports=n(3)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(65),i=n(17);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(19)("wks"),i=n(15),o=n(0).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(46),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(19)("keys"),i=n(15);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(0),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(12),i=n(64),o=n(25),a=n(18)("IE_PROTO"),s=function(){},u=function(){var t,e=n(32)("iframe"),r=o.length;for(e.style.display="none",n(69).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(38),i=n(25);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2).f,i=n(4),o=n(9)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){e.f=n(9)},function(t,e,n){var r=n(0),i=n(1),o=n(21),a=n(27),s=n(2).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(49);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(3)&&!n(13)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(7),i=n(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),i=n(33),o=n(18)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(59),o=r(i),a=n(74),s=r(a),u="function"==typeof s.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===u(o.default)?function(t){return void 0===t?"undefined":u(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":u(t)}},function(t,e,n){"use strict";var r=n(21),i=n(5),o=n(37),a=n(6),s=n(22),u=n(63),c=n(26),f=n(34),l=n(9)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,p,m,v,y){u(n,e,p);var g,_,x,b=function(t){if(!h&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",T="values"==m,M=!1,E=t.prototype,S=E[l]||E["@@iterator"]||m&&E[m],P=S||b(m),O=m?T?b("entries"):P:void 0,I="Array"==e?E.entries||S:S;if(I&&(x=f(I.call(new t)))!==Object.prototype&&x.next&&(c(x,w,!0),r||"function"==typeof x[l]||a(x,l,d)),T&&S&&"values"!==S.name&&(M=!0,P=function(){return S.call(this)}),r&&!y||!h&&!M&&E[l]||a(E,l,P),s[e]=P,s[w]=d,m)if(g={values:T?P:b("values"),keys:v?P:b("keys"),entries:O},y)for(_ in g)_ in E||o(E,_,g[_]);else i(i.P+i.F*(h||M),e,g);return g}},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(4),i=n(8),o=n(66)(!1),a=n(18)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(38),i=n(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(29),i=n(14),o=n(8),a=n(16),s=n(4),u=n(31),c=Object.getOwnPropertyDescriptor;e.f=n(3)?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){t.exports=n(44)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(45),o=n(97);r="sample",window[r]=window[r]||{},window.log=o.a,document.addEventListener("DOMContentLoaded",function(t){return new i.a})},function(t,e,n){"use strict";var r=n(10),i=n.n(r),o=n(11),a=n.n(o),s=n(50),u=n(94);window.glitch=window.glitch||{},e.a=function(){function t(){i()(this,t),this.resize=this.resize.bind(this),this.update=this.update.bind(this),this.initWebGL(),this.animationId=null,this.startTime=(new Date).getTime(),this.update()}return a()(t,[{key:"initWebGL",value:function(){var t=this;return this.gui=new dat.GUI,this.container=document.querySelector(".js-mainCanvas"),this.renderer=new THREE.WebGLRenderer({canvas:this.container.querySelector("canvas"),alpha:!0}),this.devicePixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio=this.devicePixelRatio,this.scene=new THREE.Scene,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,1,1e3),this.camera.position.z=100,this.control=new THREE.TrackballControls(this.camera,this.renderer.domElement),this.lines=new s.a(5e3,this.renderer.extensions.get("ANGLE_instanced_arrays"),this.gui),this.scene.add(this.lines.lines),this.renderTargetPixelRatio=.24,this.numGaussianSamplePixels=10,this.blurCnt=12,this.blurStrength=500,this.effectMaterial=new THREE.RawShaderMaterial({vertexShader:n(95),fragmentShader:n(96),transparent:!0,depthWrite:!1,depthTest:!1,defines:{NUM_WEIGHTS:this.numGaussianSamplePixels,NUM_LOOPS:2*this.numGaussianSamplePixels-1},uniforms:{time:{type:"1f",value:0},texture:{type:"t",value:null},resolution:{type:"2f",value:new THREE.Vector2},weights:{type:"1fv",value:this.calculateGaussianWeights(this.numGaussianSamplePixels,this.blurStrength)},isHorizontal:{type:"1f",value:1}}}),this.renderTarget=new u.a(this.width,this.height,this.renderer,this.camera,this.effectMaterial,this.effectMaterial),this.effect=!0,this.gui.add(this,"effect").onChange(function(e){return t.effect?document.body.classList.remove("is-white"):document.body.classList.add("is-white")}),window.addEventListener("resize",this.resize),this.resize()}},{key:"resize",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.effectMaterial.uniforms.resolution.value=new THREE.Vector2(this.width,this.height),this.renderTarget.resize(Math.round(this.width*this.renderTargetPixelRatio),Math.round(this.height*this.renderTargetPixelRatio)),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}},{key:"calculateGaussianWeights",value:function(){var t,e,n,r,i,o,a,s,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;for(s=[],o=0,t=e=0,r=u;0<=r?e<r:e>r;t=0<=r?++e:--e)a=Math.exp(t*t*-.5/c),s[t]=a,t>0&&(a*=2),o+=a;for(t=n=0,i=u;0<=i?n<i:n>i;t=0<=i?++n:--n)s[t]/=o;return a=s.slice().reverse(),s.shift(),s=a.concat(s)}},{key:"update",value:function(){var t,e,n;if(this.animationId=requestAnimationFrame(this.update),n=(new Date).getTime()-this.startTime,this.lines.update(n),this.effectMaterial.uniforms.time.value=n,this.control.update(),this.scene.remove(this.renderTarget.mesh),this.effectMaterial.blending=THREE.NoBlending,this.renderer.render(this.scene,this.camera,this.renderTarget.getRenderTarget()),this.effect){for(this.effectMaterial.uniforms.resolution.value=new THREE.Vector2(Math.round(this.width*this.renderTargetPixelRatio),Math.round(this.height*this.renderTargetPixelRatio)),this.renderTarget.scene.add(this.renderTarget.mesh),t=0,e=this.blurCnt;0<=e?t<e:t>e;0<=e?++t:--t)this.effectMaterial.uniforms.isHorizontal.value=1,this.effectMaterial.uniforms.texture.value=this.renderTarget.getTexture(),this.effectMaterial.needsUpdate=!0,this.renderTarget.swapTexture(),this.renderTarget.render(),this.effectMaterial.uniforms.isHorizontal.value=0,this.effectMaterial.uniforms.texture.value=this.renderTarget.getTexture(),this.effectMaterial.needsUpdate=!0,this.renderTarget.swapTexture(),this.renderTarget.render();return this.renderTarget.scene.remove(this.renderTarget.mesh),this.scene.add(this.renderTarget.mesh),this.effectMaterial.blending=THREE.AdditiveBlending,this.effectMaterial.uniforms.resolution.value=new THREE.Vector2(this.width,this.height),this.renderer.render(this.scene,this.camera)}return this.renderer.render(this.scene,this.camera)}}]),t}()},function(t,e,n){t.exports={default:n(47),__esModule:!0}},function(t,e,n){n(48);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(5);r(r.S+r.F*!n(3),"Object",{defineProperty:n(2).f})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(10),i=n.n(r),o=n(11),a=n.n(o),s=(n(51),n(52));window.glitch=window.glitch||{},e.a=function(){function t(e){var r=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments[2];i()(this,t);var u,c,f,l,h;this.numInstances=e,this.gui=a,u=new THREE.BufferGeometry,h=new Float32Array([0,0,0,1,0,0]),l=new Uint16Array([0,1]),u.addAttribute("position",new THREE.BufferAttribute(h,3)),u.setIndex(new THREE.BufferAttribute(l,1)),f=new s.a(this.numInstances,u,o),this.rc=6,this.rm=2,this.rd=1,this.i1=1,this.i2=1,this.scale=1,this.isOuter=!1,this.autoPlay=!0,this.material=new THREE.RawShaderMaterial({vertexShader:n(92),fragmentShader:n(93),transparent:!0,uniforms:{time:{type:"1f",value:0},rc:{type:"1f",value:this.rc},rm:{type:"1f",value:this.rm},rd:{type:"1f",value:this.rd},i1:{type:"1f",value:this.i1},i2:{type:"1f",value:this.i2},scale:{type:"1f",value:this.scale},isOuter:{type:"1f",value:this.isOuter?1:0}}}),c=f.getBefferGeometry({color:16777215,lineWidth:1}),this.lines=new THREE.LineSegments(c,this.material),this.gui.add(this,"rc",0,1e3).listen().onChange(function(t){return r.material.uniforms.rc.value=t}),this.gui.add(this,"rm",0,100).listen().onChange(function(t){return r.material.uniforms.rm.value=t}),this.gui.add(this,"rd",0,100).listen().onChange(function(t){return r.material.uniforms.rd.value=t}),this.gui.add(this,"i1",0,Math.PI).listen().onChange(function(t){return r.material.uniforms.i1.value=t}),this.gui.add(this,"i2",0,Math.PI).listen().onChange(function(t){return r.material.uniforms.i2.value=t}),this.gui.add(this,"scale",0,10).listen().onChange(function(t){return r.material.uniforms.scale.value=t}),this.gui.add(this,"isOuter").listen().onChange(function(t){return r.material.uniforms.isOuter.value=t?1:0}),this.gui.add(this,"autoPlay").onChange(function(t){t?r.setRandomTimer():r.clearRandomTimer()}),this.gui.add(this,"random"),this.setRandomTimer()}return a()(t,[{key:"setRandomTimer",value:function(){var t=this;this.clearRandomTimer(),this.randomTimer=setInterval(function(){return t.random(!0)},2e3)}},{key:"clearRandomTimer",value:function(){this.randomTimer&&clearInterval(this.randomTimer)}},{key:"update",value:function(t){this.material.uniforms.time.value=t}},{key:"random",value:function(){var t,e,n=this,r=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;return e=Math.floor(1+29*Math.random()),t=r?e*Math.floor(2+10*Math.random()):1+99*Math.random(),t=Math.floor(t),TweenMax.to(this,i,{rc:t,rm:e,rd:Math.floor(1+99*Math.random()),i1:Math.random()*Math.PI,i2:Math.random()*Math.PI,ease:Expo.easeOut,onUpdate:function(){return n.material.uniforms.rc.value=n.rc,n.material.uniforms.rm.value=n.rm,n.material.uniforms.rd.value=n.rd,n.material.uniforms.i1.value=n.i1,n.material.uniforms.i2.value=n.i2}})}}]),t}()},function(t,e,n){"use strict"},function(t,e,n){"use strict";var r=n(10),i=n.n(r),o=n(11),a=n.n(o),s=n(53);e.a=function(){function t(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];i()(this,t),this._numInstances=e,this._baseBufferGeometry=n,this._isSupportedInstancedArray=r,this._numPositions=this._baseBufferGeometry.attributes.position.array.length,this._isSupportedInstancedArray?(log("ANGLE_instanced_arrays is supported"),this._initTHREEIBGeometry()):(log("ANGLE_instanced_arrays is not supported"),this._ibGeometry=new s.a(this._numInstances,this._baseBufferGeometry))}return a()(t,[{key:"_initTHREEIBGeometry",value:function(){var t,e,n,r,i;for(this._ibGeometry=new THREE.InstancedBufferGeometry,this._ibGeometry.maxInstancedCount=this._numInstances,e=new THREE.InstancedBufferAttribute(new Float32Array(this._numInstances),1,1),r=new THREE.InstancedBufferAttribute(new Float32Array(3*this._numInstances),3,1),t=n=0,i=this._numInstances;0<=i?n<i:n>i;t=0<=i?++n:--n)r.setXYZ(t,this._getRandomValue(),this._getRandomValue(),this._getRandomValue()),e.setX(t,t);this._ibGeometry.addAttribute("position",this._baseBufferGeometry.attributes.position.clone()),this._ibGeometry.addAttribute("instanceIndex",e),this._ibGeometry.addAttribute("randomValues",r)}},{key:"_getRandomValue",value:function(){return(Math.random()+Math.random()+Math.random())/3}},{key:"getBefferGeometry",value:function(){return this._ibGeometry}},{key:"setAttribute",value:function(t,e,n){var r,i,o,a,s,u,c,f,l,h,d,p,m,v,y,g,_,x,b,w,T,M,E,S,P,O,I,R,j=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"x",G=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"y",A=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"z",H=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"w";if(this._isSupportedInstancedArray){if(r=new THREE.InstancedBufferAttribute(new Float32Array(this._numInstances*n),n,1),1===n)for(i=s=0,m=this._numInstances;0<=m?s<m:s>m;i=0<=m?++s:--s)r.setX(i,e[i][j]);else if(2===n)for(i=u=0,v=this._numInstances;0<=v?u<v:u>v;i=0<=v?++u:--u)r.setXY(i,e[i][j],e[i][G]);else if(3===n)for(i=c=0,_=this._numInstances;0<=_?c<_:c>_;i=0<=_?++c:--c)r.setXYZ(i,e[i][j],e[i][G],e[i][A]);else if(4===n)for(i=f=0,x=this._numInstances;0<=x?f<x:f>x;i=0<=x?++f:--f)r.setXYZW(i,e[i][j],e[i][G],e[i][A],e[i][H])}else if(r=new THREE.BufferAttribute(new Float32Array(this._numInstances*this._numPositions/3*n),n),1===n)for(i=l=0,b=this._numInstances;0<=b?l<b:l>b;i=0<=b?++l:--l)for(a=h=0,w=this._numPositions/3;0<=w?h<w:h>w;a=0<=w?++h:--h)o=i*this._numPositions/3+a,r.setX(o,e[i][j]);else if(2===n)for(i=d=0,T=this._numInstances;0<=T?d<T:d>T;i=0<=T?++d:--d)for(a=p=0,M=this._numPositions/3;0<=M?p<M:p>M;a=0<=M?++p:--p)o=i*this._numPositions/3+a,r.setXY(o,e[i][j],e[i][G]);else if(3===n)for(i=P=0,E=this._numInstances;0<=E?P<E:P>E;i=0<=E?++P:--P)for(a=O=0,S=this._numPositions/3;0<=S?O<S:O>S;a=0<=S?++O:--O)o=i*this._numPositions/3+a,r.setXYZ(o,e[i][j],e[i][G],e[i][A]);else if(4===n)for(i=I=0,y=this._numInstances;0<=y?I<y:I>y;i=0<=y?++I:--I)for(a=R=0,g=this._numPositions/3;0<=g?R<g:R>g;a=0<=g?++R:--R)o=i*this._numPositions/3+a,r.setXYZW(o,e[i][j],e[i][G],e[i][A],e[i][H]);return this._ibGeometry.addAttribute(t,r)}}]),t}()},function(t,e,n){"use strict";var r=n(54),i=n.n(r),o=n(10),a=n.n(o),s=n(11),u=n.n(s),c=n(58),f=n.n(c),l=n(84),h=n.n(l);e.a=function(t){function e(t,n){a()(this,e);var r,o,s,u,c,l,h,d,p,m,v=f()(this,(e.__proto__||i()(e)).call(this));for(v._numInstances=t,v._baseBufferGeometry=n,v._vertices=[],v._indices=[],v._uvs=[],v._instanceIndices=[],v._randomValues=[],o=v._baseBufferGeometry.attributes.position.array,h=o.length,r=v._baseBufferGeometry.index.array,r.length,v._baseBufferGeometry.attributes.uv.array,s=c=0,p=v._numInstances;0<=p?c<p:c>p;s=0<=p?++c:--c)for(v._vertices,d=[v.getRandomValue(),v.getRandomValue(),v.getRandomValue()],u=l=0,m=h/3;0<=m?l<m:l>m;u=0<=m?++l:--l)v._vertices.push(o[3*u+0]),v._vertices.push(o[3*u+1]),v._vertices.push(o[3*u+2]),v._randomValues.push(d[0]),v._randomValues.push(d[1]),v._randomValues.push(d[2]),v._instanceIndices.push(s);return v.addAttribute("position",new THREE.BufferAttribute(new Float32Array(v._vertices),3)),v.addAttribute("instanceIndex",new THREE.BufferAttribute(new Uint16Array(v._instanceIndices),1)),v.addAttribute("randomValues",new THREE.BufferAttribute(new Float32Array(v._randomValues),3)),delete v._vertices,delete v._uvs,delete v._indices,delete v._instanceIndices,delete v._randomValues,v.computeVertexNormals(),v}return h()(e,t),u()(e,[{key:"getRandomValue",value:function(){return(Math.random()+Math.random()+Math.random())/3}}]),e}(THREE.BufferGeometry)},function(t,e,n){t.exports={default:n(55),__esModule:!0}},function(t,e,n){n(56),t.exports=n(1).Object.getPrototypeOf},function(t,e,n){var r=n(33),i=n(34);n(57)("getPrototypeOf",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(5),i=n(1),o=n(13);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(35),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){n(61),n(70),t.exports=n(27).f("iterator")},function(t,e,n){"use strict";var r=n(62)(!0);n(36)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(20),i=n(17);t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(o=s.charCodeAt(u),o<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):o:t?s.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(23),i=n(14),o=n(26),a={};n(6)(a,n(9)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(2),i=n(12),o=n(24);t.exports=n(3)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var r=n(39);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(8),i=n(67),o=n(68);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),f=o(a,c);if(t&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(20),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(20),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){n(71);for(var r=n(0),i=n(6),o=n(22),a=n(9)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],f=r[c],l=f&&f.prototype;l&&!l[a]&&i(l,a,c),o[c]=o.Array}},function(t,e,n){"use strict";var r=n(72),i=n(73),o=n(22),a=n(8);t.exports=n(36)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){n(76),n(81),n(82),n(83),t.exports=n(1).Symbol},function(t,e,n){"use strict";var r=n(0),i=n(4),o=n(3),a=n(5),s=n(37),u=n(77).KEY,c=n(13),f=n(19),l=n(26),h=n(15),d=n(9),p=n(27),m=n(28),v=n(78),y=n(79),g=n(12),_=n(7),x=n(8),b=n(16),w=n(14),T=n(23),M=n(80),E=n(42),S=n(2),P=n(24),O=E.f,I=S.f,R=M.f,j=r.Symbol,G=r.JSON,A=G&&G.stringify,H=d("_hidden"),L=d("toPrimitive"),k={}.propertyIsEnumerable,C=f("symbol-registry"),F=f("symbols"),z=f("op-symbols"),V=Object.prototype,B="function"==typeof j,N=r.QObject,W=!N||!N.prototype||!N.prototype.findChild,D=o&&c(function(){return 7!=T(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=O(V,e);r&&delete V[e],I(t,e,n),r&&t!==V&&I(V,e,r)}:I,U=function(t){var e=F[t]=T(j.prototype);return e._k=t,e},Y=B&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},X=function(t,e,n){return t===V&&X(z,e,n),g(t),e=b(e,!0),g(n),i(F,e)?(n.enumerable?(i(t,H)&&t[H][e]&&(t[H][e]=!1),n=T(n,{enumerable:w(0,!1)})):(i(t,H)||I(t,H,w(1,{})),t[H][e]=!0),D(t,e,n)):I(t,e,n)},K=function(t,e){g(t);for(var n,r=v(e=x(e)),i=0,o=r.length;o>i;)X(t,n=r[i++],e[n]);return t},Z=function(t,e){return void 0===e?T(t):K(T(t),e)},q=function(t){var e=k.call(this,t=b(t,!0));return!(this===V&&i(F,t)&&!i(z,t))&&(!(e||!i(this,t)||!i(F,t)||i(this,H)&&this[H][t])||e)},J=function(t,e){if(t=x(t),e=b(e,!0),t!==V||!i(F,e)||i(z,e)){var n=O(t,e);return!n||!i(F,e)||i(t,H)&&t[H][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=R(x(t)),r=[],o=0;n.length>o;)i(F,e=n[o++])||e==H||e==u||r.push(e);return r},$=function(t){for(var e,n=t===V,r=R(n?z:x(t)),o=[],a=0;r.length>a;)!i(F,e=r[a++])||n&&!i(V,e)||o.push(F[e]);return o};B||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(z,n),i(this,H)&&i(this[H],t)&&(this[H][t]=!1),D(this,t,w(1,n))};return o&&W&&D(V,t,{configurable:!0,set:e}),U(t)},s(j.prototype,"toString",function(){return this._k}),E.f=J,S.f=X,n(41).f=M.f=Q,n(29).f=q,n(40).f=$,o&&!n(21)&&s(V,"propertyIsEnumerable",q,!0),p.f=function(t){return U(d(t))}),a(a.G+a.W+a.F*!B,{Symbol:j});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=P(d.store),rt=0;nt.length>rt;)m(nt[rt++]);a(a.S+a.F*!B,"Symbol",{for:function(t){return i(C,t+="")?C[t]:C[t]=j(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in C)if(C[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!B,"Object",{create:Z,defineProperty:X,defineProperties:K,getOwnPropertyDescriptor:J,getOwnPropertyNames:Q,getOwnPropertySymbols:$}),G&&a(a.S+a.F*(!B||c(function(){var t=j();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(_(e)||void 0!==t)&&!Y(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,A.apply(G,r)}}),j.prototype[L]||n(6)(j.prototype,L,j.prototype.valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(15)("meta"),i=n(7),o=n(4),a=n(2).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(13)(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},h=function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return c&&p.NEED&&u(t)&&!o(t,r)&&f(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:d}},function(t,e,n){var r=n(24),i=n(40),o=n(29);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,s=n(t),u=o.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var r=n(39);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(8),i=n(41).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(r(t))}},function(t,e){},function(t,e,n){n(28)("asyncIterator")},function(t,e,n){n(28)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(85),o=r(i),a=n(89),s=r(a),u=n(35),c=r(u);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,c.default)(e)));t.prototype=(0,s.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(86),__esModule:!0}},function(t,e,n){n(87),t.exports=n(1).Object.setPrototypeOf},function(t,e,n){var r=n(5);r(r.S,"Object",{setPrototypeOf:n(88).set})},function(t,e,n){var r=n(7),i=n(12),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(30)(Function.call,n(42).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){t.exports={default:n(90),__esModule:!0}},function(t,e,n){n(91);var r=n(1).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(5);r(r.S,"Object",{create:n(23)})},function(t,e){t.exports="#define GLSLIFY 1\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rc;\nuniform float rm;\nuniform float rd;\nuniform float i1;\nuniform float i2;\nuniform float time;\nuniform float scale;\nuniform float noiseFactor;\nuniform float isOuter;\n\nattribute vec3 position;\nattribute vec3 ramdomValues;\nattribute float instanceIndex;\n\nvarying float vInstanceIndex;\n\nvec3 rotateVec3_1_0(vec3 p, float angle, vec3 axis){\n  vec3 a = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float r = 1.0 - c;\n  mat3 m = mat3(\n    a.x * a.x * r + c,\n    a.y * a.x * r + a.z * s,\n    a.z * a.x * r - a.y * s,\n    a.x * a.y * r - a.z * s,\n    a.y * a.y * r + c,\n    a.z * a.y * r + a.x * s,\n    a.x * a.z * r + a.y * s,\n    a.y * a.z * r - a.x * s,\n    a.z * a.z * r + c\n  );\n  return m * p;\n}\n\n\nconst float PI_2_1 = 3.1415926535897932384626433832795;\n\n\nfloat map_3_2(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n\n\nvec2 getTorochoidPos(float t, float s) {\n  float c1 = rc - rm * s;\n  float c2 = c1 / rm * t;\n  float rmax = abs(c1) + rd;\n\n  return vec2(\n    (c1 * cos(t) + rd * s * cos(c2)) / rmax,\n    (c1 * sin(t) - rd * sin(c2)) / rmax\n  );\n}\n\nvoid main() {\n  vInstanceIndex = instanceIndex;\n\n  float s = 1.0 - isOuter * 2.0;\n  float size = 30.0;\n\n  vec3 pos = vec3(0.0);\n  float t1 = mod(time * 0.0001 + position.x * i1 + instanceIndex * 0.001, PI_2_1 * 2.0);\n  float t2 = mod(time * 0.0002 + position.x * i2 + instanceIndex * 0.01, PI_2_1 * 2.0);\n\n  vec2 tPos1 = getTorochoidPos(t1, s);\n  vec2 tPos2 = getTorochoidPos(t2, s);\n\n  pos.x = tPos1.y * tPos2.x * size;\n  pos.y = tPos1.y * tPos2.y * size;\n  pos.z = tPos1.x * size;\n\n  pos = rotateVec3_1_0(pos, time * 0.0001, vec3(1.0, 0.0, 0.0));\n  pos = rotateVec3_1_0(pos, time * 0.00005, vec3(0.0, 1.0, 0.0));\n  pos = rotateVec3_1_0(pos, time * 0.00006, vec3(0.0, 0.0, 1.0));\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos * scale, 1.0);\n}\n"},function(t,e){t.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\n\nconst float PI_1_0 = 3.1415926535897932384626433832795;\n\n\nfloat map_2_1(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n\nvec3 hsv2rgb_3_2(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\n\nvarying float vInstanceIndex;\n\nvoid main(){\n  vec3 color = hsv2rgb_3_2(vec3(\n    vInstanceIndex * 0.0004 + time * 0.0001,\n    0.6,\n    0.9\n  ));\n\n  gl_FragColor = vec4(color, 1.0);\n}\n"},function(t,e,n){"use strict";var r=n(10),i=n.n(r),o=n(11),a=n.n(o);e.a=function(){function t(e,n,r,o,a,s){i()(this,t);var u;this.renderer=r,this.camera=o,this.initShaderMaterial=a,this.updateShaderMaterial=s,this.currentTextureIndex=0,this.renderTargets=[new THREE.WebGLRenderTarget(e,n,{magFilter:THREE.NearestFilter,minFilter:THREE.NearestFilter,wrapS:THREE.ClampToEdgeWrapping,wrapT:THREE.ClampToEdgeWrapping,format:THREE.RGBAFormat})],this.renderTargets[1]=this.renderTargets[0].clone(),u=new THREE.PlaneGeometry(100,100),this.mesh=new THREE.Mesh(u,this.initShaderMaterial),this.scene=new THREE.Scene,this.scene.add(this.mesh),this.renderer.render(this.scene,this.camera,this.renderTargets[0]),this.renderer.render(this.scene,this.camera,this.renderTargets[1]),this.initShaderMaterial.dispose(),this.initShaderMaterial=null,this.mesh.material=this.updateShaderMaterial,this.renderTargets[0].texture.flipY=!1,this.renderTargets[1].texture.flipY=!1}return a()(t,[{key:"setDefine",value:function(t,e){this.updateShaderMaterial.defines[t]=e}},{key:"initUniforms",value:function(t){var e,n;for(e in t)n=t[e],this.updateShaderMaterial.uniforms[e]=n}},{key:"updateUniform",value:function(t,e){this.updateShaderMaterial.uniforms[t].value=e}},{key:"update",value:function(){this.updateShaderMaterial.uniforms.texture.value=this.getTexture(),this.swapTexture(),this.render()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera,this.renderTargets[this.currentTextureIndex])}},{key:"setMeshMaterial",value:function(t){this.mesh.material=t,this.mesh.material.needsUpdate=!0}},{key:"swapTexture",value:function(){this.currentTextureIndex=(this.currentTextureIndex+1)%2}},{key:"getTexture",value:function(){return this.getRenderTarget().texture}},{key:"getRenderTarget",value:function(){return this.renderTargets[this.currentTextureIndex]}},{key:"resize",value:function(t,e){this.renderTargets[0].setSize(t,e),this.renderTargets[1].setSize(t,e)}}]),t}()},function(t,e){t.exports="#define GLSLIFY 1\nattribute vec3 position;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n}\n"},function(t,e){t.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D texture;\nuniform float weights[NUM_WEIGHTS];\nuniform float isHorizontal;\nuniform vec2 resolution;\n\nvoid main(void){\n  vec2 tFrag = vec2(1.0) / resolution;\n  vec2 fc = gl_FragCoord.st;\n  vec4 destColor = vec4(0.0);\n\n  float startValue = -float(NUM_WEIGHTS) + 1.0;\n  float value;\n\n  value = startValue;\n  for(int i = 0; i < NUM_LOOPS; i++) {\n    destColor += (texture2D(texture, (fc + vec2(value, 0.0)) * tFrag) * weights[i]) * isHorizontal;\n    destColor += (texture2D(texture, (fc + vec2(0.0, value)) * tFrag) * weights[i]) * (1.0 - isHorizontal);\n    value += 1.0;\n  }\n\n  destColor = min(vec4(1.0), destColor);\n  destColor.rgb *= 0.98;\n  gl_FragColor = destColor;\n}\n"},function(t,e,n){"use strict";e.a=function(){return null!=window.console?null!=window.console.log.bind?window.console.log.bind(window.console):window.console.log:window.alert}()}]);