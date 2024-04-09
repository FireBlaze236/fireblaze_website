var se=Object.defineProperty;var ce=(t,e,n)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var U=(t,e,n)=>(ce(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function f(){}function ne(t){return t()}function K(){return Object.create(null)}function k(t){t.forEach(ne)}function re(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function ae(t,e){return t===e?!0:(R||(R=document.createElement("a")),R.href=e,t===R.href)}function ue(t){return Object.keys(t).length===0}function le(t,...e){if(t==null){for(const r of e)r(void 0);return f}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function fe(t,e,n){t.$$.on_destroy.push(le(e,n))}function m(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function E(){return O(" ")}function de(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function l(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t){return Array.from(t.childNodes)}let z;function P(t){z=t}function he(){if(!z)throw new Error("Function called outside component initialization");return z}function ge(t){he().$$.on_mount.push(t)}const L=[],J=[];let A=[];const Q=[],pe=Promise.resolve();let j=!1;function _e(){j||(j=!0,pe.then(oe))}function M(t){A.push(t)}const D=new Set;let y=0;function oe(){if(y!==0)return;const t=z;do{try{for(;y<L.length;){const e=L[y];y++,P(e),ve(e.$$)}}catch(e){throw L.length=0,y=0,e}for(P(null),L.length=0,y=0;J.length;)J.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];D.has(n)||(D.add(n),n())}A.length=0}while(L.length);for(;Q.length;)Q.pop()();j=!1,D.clear(),P(t)}function ve(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function be(t){const e=[],n=[];A.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),A=e}const B=new Set;let $;function $e(){$={r:0,c:[],p:$}}function we(){$.r||k($.c),$=$.p}function T(t,e){t&&t.i&&(B.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),$.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Z(t){t&&t.c()}function W(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),M(()=>{const i=t.$$.on_mount.map(ne).filter(re);t.$$.on_destroy?t.$$.on_destroy.push(...i):k(i),t.$$.on_mount=[]}),o.forEach(M)}function H(t,e){const n=t.$$;n.fragment!==null&&(be(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(t,e){t.$$.dirty[0]===-1&&(L.push(t),_e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,r,o,i,s=null,u=[-1]){const a=z;P(t);const c=t.$$={fragment:null,ctx:[],props:i,update:f,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:K(),dirty:u,skip_bound:!1,root:e.target||a.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(h,_,...v)=>{const p=v.length?v[0]:_;return c.ctx&&o(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),d&&ye(t,h)),_}):[],c.update(),d=!0,k(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const h=me(e.target);c.fragment&&c.fragment.l(h),h.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&T(t.$$.fragment),W(t,e.target,e.anchor),oe()}P(a)}class X{constructor(){U(this,"$$");U(this,"$$set")}$destroy(){H(this,1),this.$destroy=f}$on(e,n){if(!re(n))return f;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);const Ee="/fireblaze_website/assets/profile-DXC60nGr.jpg",x=[];function Le(t,e=f){let n;const r=new Set;function o(u){if(q(t,u)&&(t=u,n)){const a=!x.length;for(const c of r)c[1](),x.push(c,t);if(a){for(let c=0;c<x.length;c+=2)x[c][0](x[c+1]);x.length=0}}}function i(u){o(u(t))}function s(u,a=f){const c=[u,a];return r.add(c),r.size===1&&(n=e(o,i)||f),u(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:s}}const G=Le(!1);function Ae(t){let e,n,r,o,i,s,u,a,c,d,h,_,v,p,C,F,b,Y;return{c(){e=g("div"),n=g("a"),r=g("img"),i=E(),s=g("h2"),s.textContent=`${Se}`,u=E(),a=g("h3"),a.textContent=`${Pe}`,c=E(),d=g("a"),d.textContent=`${ze}`,h=E(),_=g("p"),v=O("Email: "),p=g("a"),C=O(ee),F=E(),b=g("a"),Y=O("CV"),ae(r.src,o=Ee)||l(r,"src",o),l(r,"alt","Taufiqul Alam Photo"),l(r,"class","photo svelte-u8z067"),l(n,"href",ke),l(n,"target","_blank"),l(a,"class","title svelte-u8z067"),l(d,"class","company svelte-u8z067"),l(d,"href","https://www.snaptrude.com"),l(d,"target","_blank"),l(p,"href","mailto:"+ee),l(_,"class","contact svelte-u8z067"),l(b,"class","button-link svelte-u8z067"),l(b,"href",Te),l(b,"target","_blank"),l(e,"class","container svelte-u8z067")},m(N,ie){S(N,e,ie),m(e,n),m(n,r),m(e,i),m(e,s),m(e,u),m(e,a),m(e,c),m(e,d),m(e,h),m(e,_),m(_,v),m(_,p),m(p,C),m(e,F),m(e,b),m(b,Y)},p:f,i:f,o:f,d(N){N&&w(e)}}}let Se="Taufiqul Alam",ee="taufiqul.alam1207@gmail.com",Pe="Software Engineer - Graphics",ze="Snaptrude",Te="../../public/taufiq_cv.pdf",ke="https://www.linkedin.com/in/taufiqul-alam-988b5a1b0/";function Ce(t){return[]}class Fe extends X{constructor(e){super(),V(this,e,Ce,Ae,q,{})}}var Re=`attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`,Oe=`precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

vec2 noise(vec2 uv) {
    uv = vec2( dot(uv, vec2(127.1,311.7)),dot(uv,vec2(269.5,183.3)) );
    return -1.0 + 2.0 * fract(sin(uv) * 43758.5453123);
}
vec2 hash(vec2 P) {
 	return fract(cos(P * mat2(-64.2,71.3,81.4,-29.8)) * 8321.3); 
}

float layer(vec2 st) {
    vec2 gid = floor(st);
    st = fract(st) - 0.5;
    
    
    vec2 n = smoothstep(1.0, 0.0, hash(gid));
    st += 0.25 * sin(n * time);
    
    
    float f = length(st * 20.0) - 0.02;
    float blink = sin(time * hash(gid).x * hash(gid).y);
    float glow = 0.7 / (f * f);
    
    float bl = smoothstep(0.89, 0.99, blink);
    glow *= bl;
    float gt = glow;
    
    return gt;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float aspect = resolution.x / resolution.y;
  uv.x *= aspect;
  uv += mouse * 0.1;
  vec2 st = uv;
  float t = time * 0.005;
  vec3 col = vec3(0.0);

  for(float i = 0.; i <= 1.; i+=1. / 5.) {
      float z = fract(i - t * 10.0);
      float size = mix(0.1, 15.0, z);
      float fade = smoothstep(0.,0.1, z) * smoothstep(1.0, 0.9 ,z);
      vec2 u = st * size + i * 20.0;
      
      vec2 gid = floor(st * size);

      vec3 c1 = vec3(0.45, 0.45, 0.0);
      vec3 c2 = vec3(0.1, 0.2, 0.45);
      vec3 cd = vec3(0.115 * hash(gid).x, 0.156 * hash(gid).y, 0.156 * hash(gid).x * hash(gid).y);
      vec3 cx = mix(c2, c1, cd);
      
      cx = sqrt(cx);
      col += vec3(layer(u)) * fade * cx;
  }
  gl_FragColor = vec4(col,1.0);
}`;function Be(t){let e;return{c(){e=g("canvas"),l(e,"id","webgl-canvas"),l(e,"class","svelte-zqwxjb")},m(n,r){S(n,e,r)},p:f,i:f,o:f,d(n){n&&w(e)}}}function te(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("Error compiling shader:",t.getShaderInfoLog(r)),t.deleteShader(r),null)}function Ie(t){let e,n,r=0,o=0,i;function s(){i&&(i.width=i.offsetWidth,i.height=i.offsetHeight,e.viewport(0,0,e.canvas.width,e.canvas.height))}return ge(()=>{if(i=document.getElementById("webgl-canvas"),e=i.getContext("webgl"),window.addEventListener("mousemove",p=>{r=p.clientX,o=p.clientY}),i.addEventListener("resize",s),window.addEventListener("resize",s),s(),!e){console.error("WebGL not supported");return}const a=te(e,e.VERTEX_SHADER,Re),c=te(e,e.FRAGMENT_SHADER,Oe);if(n=e.createProgram(),e.attachShader(n,a),e.attachShader(n,c),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))return console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(n)),null;e.useProgram(n);const d=e.getAttribLocation(n,"position"),h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(d),e.vertexAttribPointer(d,2,e.FLOAT,!1,0,0);let _=Date.now();function v(){const p=(Date.now()-_)/1e3,C=e.getUniformLocation(n,"resolution"),F=e.getUniformLocation(n,"time"),b=e.getUniformLocation(n,"mouse");e.uniform2f(C,i.width,i.height),e.uniform2f(b,r/e.canvas.width,1-o/e.canvas.height),e.uniform1f(F,p),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,6),requestAnimationFrame(v)}v()}),[]}class qe extends X{constructor(e){super(),V(this,e,Ie,Be,q,{})}}function Ne(t){let e,n,r,o,i;return e=new qe({}),o=new Fe({}),{c(){Z(e.$$.fragment),n=E(),r=g("div"),Z(o.$$.fragment),l(r,"class","card")},m(s,u){W(e,s,u),S(s,n,u),S(s,r,u),W(o,r,null),i=!0},p:f,i(s){i||(T(e.$$.fragment,s),T(o.$$.fragment,s),i=!0)},o(s){I(e.$$.fragment,s),I(o.$$.fragment,s),i=!1},d(s){s&&(w(n),w(r)),H(e,s),H(o)}}}function Ue(t){let e,n,r;return{c(){e=g("p"),e.textContent="portfolio"},m(o,i){S(o,e,i),n||(r=de(e,"click",t[1]),n=!0)},p:f,i:f,o:f,d(o){o&&w(e),n=!1,r()}}}function De(t){let e,n,r,o;const i=[Ue,Ne],s=[];function u(a,c){return a[0]?0:1}return n=u(t),r=s[n]=i[n](t),{c(){e=g("main"),r.c()},m(a,c){S(a,e,c),s[n].m(e,null),o=!0},p(a,[c]){let d=n;n=u(a),n===d?s[n].p(a,c):($e(),I(s[d],1,1,()=>{s[d]=null}),we(),r=s[n],r?r.p(a,c):(r=s[n]=i[n](a),r.c()),T(r,1),r.m(e,null))},i(a){o||(T(r),o=!0)},o(a){I(r),o=!1},d(a){a&&w(e),s[n].d()}}}function Ge(t,e,n){let r;fe(t,G,i=>n(0,r=i));const o=()=>{G.update(i=>!i)};return G.subscribe(i=>{console.log(`Toggle state is now: ${i}`)}),[r,o]}class je extends X{constructor(e){super(),V(this,e,Ge,De,q,{})}}new je({target:document.getElementById("app")});
