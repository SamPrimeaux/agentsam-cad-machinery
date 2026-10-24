import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const mix = THREE.MathUtils.lerp;
const smooth = t => t * t * (3 - 2 * t);
const cameraKeys = [
  {pos:[29,17,31],look:[8,2,-28]},
  {pos:[32,22,-7],look:[0,3,-68]},
  {pos:[12,14,-56],look:[-6,1,-105]},
  {pos:[-23,20,-97],look:[1,4,-140]},
  {pos:[34,20,-138],look:[-5,4,-170]},
  {pos:[38,38,-136],look:[-6,3,-170]},
  {pos:[47,29,-198],look:[-6,4,-240]},
];
const C={
  sand:0xf2d2bb,earth:0xe4aa91,ivory:0xfff2dd,white:0xfff9ee,
  sage:0x79b49a,forest:0x437b66,olive:0x639c7a,
  water:0x61c9cf,glass:0xa7dfd9,accent:0xe4a28b,wood:0x966d50,
  brass:0xb99063,wire:0x326c65
};
const mat=(color,more={})=>new THREE.MeshStandardMaterial({color,roughness:.95,metalness:0,...more});
const M={
  land:mat(C.sand,{side:THREE.DoubleSide}),
  ivory:mat(C.ivory),white:mat(C.white),earth:mat(C.earth),
  sage:mat(C.sage),forest:mat(C.forest),olive:mat(C.olive),
  water:mat(C.water,{roughness:.32,metalness:.08,transparent:true,opacity:.89,side:THREE.DoubleSide}),
  glass:mat(C.glass,{roughness:.26,metalness:.02,transparent:true,opacity:.78}),
  accent:mat(C.accent),wood:mat(C.wood),stone:mat(0xd2c4ae),
  gold:mat(C.brass),line:new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.62}),
  wire:new THREE.MeshBasicMaterial({color:0xdfeee8,transparent:true,opacity:.1,depthWrite:false}),
  edges:new THREE.LineBasicMaterial({color:0x347c71,transparent:true,opacity:.85}),
  blueprint:new THREE.MeshBasicMaterial({color:0x39736a,wireframe:true,transparent:true,opacity:.85})
};
function elevated(x,z) {
  let y=-4+.65*Math.sin(x*.041+z*.02)*Math.cos(z*.032);
  const peaks=[[-69,-72,14,32], [63,-115,18,34],[-72,-164,19,29],[70,-220,19,42]];
  for(const [px,pz,h,r] of peaks) {
    const dx=(x-px)/r,dz=(z-pz)/r;
    y+=h*Math.exp(-(dx*dx+dz*dz)*1.4);
  }
  return y;
}
function mesh(g,m,parent,position=[0,0,0],rotation=null,scale=null){
  const o=new THREE.Mesh(g,m);
  o.position.set(...position);
  if(rotation)o.rotation.set(...rotation);
  if(scale)o.scale.set(...scale);
  o.castShadow=false;
  o.receiveShadow=false;
  parent.add(o);return o;
}
function oval(parent,x,z,rx,ry,rz,color) {
  return mesh(new THREE.SphereGeometry(1,18,10),color,parent,[x,elevated(x,z)+ry*.25,z],null,[rx,ry,rz]);
}
function cylinder(parent,x,y,z,rTop,rBot,h,m,n=8){
  return mesh(new THREE.CylinderGeometry(rTop,rBot,h,n),m,parent,[x,y+h/2,z]);
}
function createRibbon(parent,fn,width,start,end,segments,material,offset=.22){
  const verts=[],uv=[],ids=[];
  for(let i=0;i<=segments;i++){
    const t=i/segments,z=mix(start,end,t),x=fn(z),x0=fn(z-.1),x1=fn(z+.1);
    const tx=x1-x0,tz=.2,len=Math.hypot(tx,tz);
    const nx=tz/len,nz=-tx/len;
    for(const side of [-1,1]){
      const xx=x+nx*width*side*.5, zz=z+nz*width*side*.5;
      verts.push(xx,elevated(xx,zz)+offset,zz);
      uv.push(side===-1?0:1,i/segments*14);
    }
    if(i<segments){const n=i*2;ids.push(n,n+1,n+2,n+1,n+3,n+2)}
  }
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
  g.setIndex(ids);g.computeVertexNormals();
  return mesh(g,material,parent);
}
const pathX=z=>7*Math.sin(z*.032)+2.8*Math.sin(z*.095);
const waterX=z=>pathX(z)+19+2*Math.sin(z*.07);
function house(parent,x,z,s=1,color=M.ivory){
  const group=new THREE.Group();group.position.set(x,elevated(x,z)+.7,z);group.scale.setScalar(s);parent.add(group);
  const floor=mesh(new THREE.BoxGeometry(8,.6,7),M.stone,group,[0,.1,0]);
  floor.receiveShadow=true;
  mesh(new THREE.BoxGeometry(7.25,7.3,6.25),color,group,[0,4.2,0]);
  mesh(new THREE.BoxGeometry(8.2,.46,7.15),M.ivory,group,[0,8.15,0]);
  mesh(new THREE.BoxGeometry(7.5,2.45,5.9),M.white,group,[.4,9.48,0]);
  mesh(new THREE.BoxGeometry(8.2,.35,6.85),M.earth,group,[.4,10.85,0]);
  for(const side of [-1,1])for(let row=0;row<2;row++){
    mesh(new THREE.BoxGeometry(1.05,1.65,.11),M.glass,group,[side*2.15,2.4+row*3.5,3.17]);
    mesh(new THREE.BoxGeometry(1.1,.1,.26),M.ivory,group,[side*2.15,3.27+row*3.5,3.23]);
  }
  mesh(new THREE.BoxGeometry(1.9,3.05,.15),M.glass,group,[0,2,3.17]);
  for(let i=0;i<5;i++){
    mesh(new THREE.BoxGeometry(.16,.4,.16),M.wood,group,[-3.2+i*1.65,8.45,3.18]);
  }
  return group;
}
function abstractHouse(parent,x,z,s=1,accent=M.white) {
  const y=elevated(x,z)+.5;
  mesh(new THREE.BoxGeometry(5*s,4*s,5*s),accent,parent,[x,y+2*s,z]);
  const roof=new THREE.ConeGeometry(4.12*s,2.6*s,4);
  mesh(roof,M.earth,parent,[x,y+5.3*s,z],[0,Math.PI/4,0]);
  mesh(new THREE.BoxGeometry(1.2*s,1.9*s,.13*s),M.glass,parent,[x,y+2.35*s,z+2.52*s]);
}
function tree(parent,x,z,s=1,variation=0){
  const y=elevated(x,z);
  const trunk=mesh(new THREE.CylinderGeometry(.16*s,.22*s,1.25*s,6),M.wood,parent,[x,y+.625*s,z]);
  if(variation%4===0){
    const count=variation%2?2:3;
    for(let i=0;i<count;i++)mesh(new THREE.SphereGeometry(1,10,8),i%2?M.olive:M.sage,parent,[x+(i-1)*.5*s,y+(2.1+i*.13)*s,z],null,[.9*s,.95*s,.9*s]);
  }else{
    mesh(new THREE.ConeGeometry(1.12*s,3.5*s,7),variation%3?M.sage:M.forest,parent,[x,y+2.5*s,z]);
    mesh(new THREE.ConeGeometry(.77*s,2.3*s,7),M.olive,parent,[x,y+3.65*s,z]);
  }
  return trunk;
}
function seeded(index){let x=Math.sin(index*317.23+8.9)*43758.5453;return x-Math.floor(x)}
function cloud(parent,x,y,z,size=1){
  const g=new THREE.Group();g.position.set(x,y,z);parent.add(g);
  const cloudMat=new THREE.MeshBasicMaterial({color:0xfff9f2,transparent:true,opacity:.9,depthWrite:false});
  [-2,0,2.1].forEach((dx,i)=>mesh(new THREE.SphereGeometry(1,14,10),cloudMat,g,[dx*size,i===1?.5*size:0,0],null,[(i===1?2.4:1.9)*size,(i===1?1.16:.88)*size,1.2*size]));
  return g;
}
function terrain(scene) {
  const geo=new THREE.PlaneGeometry(280,410,84,132);
  geo.rotateX(-Math.PI/2);
  const arr=geo.getAttribute('position');
  for(let i=0;i<arr.count;i++){
    const x=arr.getX(i), z=arr.getZ(i)-123;
    arr.setXYZ(i,x,elevated(x,z),z);
  }
  arr.needsUpdate=true;geo.computeVertexNormals();
  mesh(geo,M.land,scene);
  // Water and winding road are physically embedded in one continuous terrain.
  createRibbon(scene,waterX,10,66,-304,330,M.water,.43);
  createRibbon(scene,z=>waterX(z)+5.3, .42,66,-304,250,M.white,.47);
  createRibbon(scene,pathX,3.5,70,-304,390,M.white,.32);
  createRibbon(scene,z=>pathX(z)-2,.23,68,-303,390,M.stone,.4);
  // Broad sculpted terrain shapes connect the foreground to the mountains.
  for(let i=0;i<45;i++){
    const z=60-i*8.8,x=(i%2===0?-1:1)*(39+seeded(i+2)*65);
    const scale=9+seeded(i*2)*20,height=3+seeded(i+6)*9;
    oval(scene,x,z,scale,height,scale*.76, i%4?M.earth:M.sage);
  }
  for(let i=0;i<40;i++){
    const x=(i-20)*8.5,z=-315+Math.sin(i*.45)*18;
    oval(scene,x,z,11+seeded(i+64)*22,9+seeded(i+122)*19,12+seeded(i+33)*14, i%3===0?M.sage:M.earth);
  }
  for(let i=0;i<250;i++){
    const z=65-seeded(i+411)*360,x=(seeded(i+19)*2-1)*110;
    if(Math.abs(x-pathX(z))<11 || Math.abs(x-waterX(z))<12)continue;
    const scale=.65+seeded(i+77)*1.5;
    tree(scene,x,z,scale,i);
  }
}
function complexity(scene) {
  // The bridge and interconnected systems appear along the same authored route.
  const plate=mesh(new THREE.BoxGeometry(24,.55,7),M.stone,scene,[-2,elevated(-2,-65)+2.2,-65]);
  for(let i=0;i<5;i++){
    const x=-12+i*5;
    cylinder(scene,x,elevated(x,-65),-65,.7,1.15,2.1,M.ivory,8);
    mesh(new THREE.BoxGeometry(.18,2,.18),M.wood,scene,[x,elevated(x,-65)+3,-68]);
  }
  for(let i=0;i<6;i++){
    abstractHouse(scene,-22+(i%3)*11,-49-Math.floor(i/3)*20,.54+(i%2)*.17,i%2?M.ivory:M.white);
  }
  // A measured rhythm of retained landscape walls, not visual chaos.
  for(let i=0;i<8;i++)mesh(new THREE.BoxGeometry(4,.8,1.3),M.stone,scene,[17+i%4*4,elevated(17+i%4*4,-76-Math.floor(i/4)*4)+1,-76-Math.floor(i/4)*4]);
}
function outlook(scene){
  house(scene,5,-134,.7,M.white);
  cylinder(scene,-12,elevated(-12,-130),-130,6,7,.5,M.stone,16);
  for(let i=0;i<4;i++)tree(scene,-18+i*2.2,-138,1.25,i);
}
function future(scene){
  for(let i=0;i<10;i++){
    const z=-220-Math.floor(i/5)*18, x=-37+i%5*15;
    if(Math.abs(x)<8)continue;
    if(i%3===0) house(scene,x,z,.75,M.ivory);
    else abstractHouse(scene,x,z,.68,i%2?M.sage:M.white);
  }
  for(let i=0;i<25;i++) {
    const z=-210-seeded(i+98)*110,x=(seeded(i+43)*2-1)*66;
    tree(scene,x,z,.8+seeded(i+4),i+111);
  }
}
function addModel(scene,onState){
  const loader=new GLTFLoader();
  const model=new THREE.Group();scene.add(model);
  model.visible=false;
  const original=[];
  const wire=M.wire;
  let ready=false,mode='clay',count=0,requested=false;
  const request=()=>{
    if(requested)return;
    requested=true;
    onState?.({type:'loading'});
    loader.load('/beyond/media/dreamhouse-v1.2.glb',gltf=>{
    const root=gltf.scene;
    // Stage architectural geometry using architectural bounds, not the large site ground
    // whose extents would make the house tiny. Original model geometry is never modified.
    const architecture = new THREE.Box3();
    const excluded = /ground|terrain|forest|tree|pine|conifer|shrub|bush|grass|foliage|rock|boulder|bollard|path light|sky|cloud|car|planter|hedge|hidden.*cutter/i;
    root.traverse(obj=>{
      if(!obj.isMesh)return;
      obj.userData.btbEditorialEnvironment=excluded.test(obj.name);
      if(!obj.userData.btbEditorialEnvironment)architecture.expandByObject(obj);
    });
    const bounds=architecture.isEmpty()?new THREE.Box3().setFromObject(root):architecture;
    const size=bounds.getSize(new THREE.Vector3());
    const center=bounds.getCenter(new THREE.Vector3());
    const scalar=38/Math.max(size.x,size.z,1);
    root.scale.setScalar(scalar);
    root.position.set(-center.x*scalar,elevated(0,-170)-bounds.min.y*scalar+.85,-170-center.z*scalar);
    model.add(root);
    root.traverse(obj=>{
      if(!obj.isMesh)return;
      count++;
      original.push({obj,sourceMaterial:obj.material});
      obj.userData.btbSourceName=obj.name;
      const name=obj.name.toLowerCase();
      let m=M.ivory;
      if(/roof|gable|eave|shingle/.test(name))m=M.earth;
      else if(/glass|window|glaz/.test(name))m=M.glass;
      else if(/pool|water/.test(name))m=M.water;
      else if(/wood|timber|beam|frame/.test(name))m=M.wood;
      else if(/slab|foundation|drive|terrace|pavement|walk/.test(name))m=M.stone;
      else if(/vegetation|tree|plant|landscap/.test(name))m=M.sage;
      obj.userData.btbEditorialMaterial=m;
      obj.userData.btbEdgeLines=null;
      obj.material=m;
      obj.visible=!obj.userData.btbEditorialEnvironment;
    });
    ready=true;onState?.({type:'loaded',count,dimensions:[size.x,size.y,size.z]});
  },undefined,error=>{console.error('DreamHouse V1.2 GLB unavailable',error);onState?.({type:'error'})});
  };
  return {
    request,
    get ready(){return ready},
    setStage(chapter,opacity=1){
      model.visible=ready&&chapter>=3.75&&chapter<=5.65;
      if(!model.visible)return;
      const next=chapter>=4.72?'technical':'clay';
      if(next!==mode){
        mode=next;
        original.forEach(({obj})=>{
          if(obj.userData.btbEditorialEnvironment)return;
          if(next==='technical' && !obj.userData.btbEdgeLines){
            // Draw feature boundaries, not every triangulation edge. The original
            // mesh remains the authority; linework is a display derivative.
            const geometry = new THREE.EdgesGeometry(obj.geometry,35);
            const lines = new THREE.LineSegments(geometry,M.edges);
            lines.name='Editorial edge projection / '+obj.name;
            obj.add(lines);
            obj.userData.btbEdgeLines=lines;
          }
          obj.material=next==='technical'?wire:obj.userData.btbEditorialMaterial;
          if(obj.userData.btbEdgeLines)obj.userData.btbEdgeLines.visible=next==='technical';
        });
      }
      model.traverse(obj=>{if(obj.isMesh)obj.frustumCulled=true});
    },
    get count(){return count}
  };
}
export function createBeyondWorld(canvas,{onState}={}){
  const scene=new THREE.Scene();
  scene.fog=new THREE.FogExp2(0xf6d9cb,.0038);
  scene.background=null;
  const camera=new THREE.PerspectiveCamera(39,1,.4,740);
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power',preserveDrawingBuffer:false});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
  renderer.setSize(1,1,false);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.04;
  scene.add(new THREE.HemisphereLight(0xfff8ec,0x829f93,1.8));
  const sun=new THREE.DirectionalLight(0xfff0dd,2.4);sun.position.set(80,130,-130);scene.add(sun);
  const back=new THREE.DirectionalLight(0xccf3e2,.8);back.position.set(-65,30,70);scene.add(back);
  terrain(scene);complexity(scene);outlook(scene);future(scene);
  // A distant aspiration appears before the actual project arrives.
  house(scene,16,-27,1.15,M.white);
  abstractHouse(scene,-5,-43,1.08,M.white);
  tree(scene,-7,-42,1.7,8);
  tree(scene,9,-46,1.4,7);
  // These cloud forms are world-space objects; they move gently without per-frame geometry creation.
  const clouds=[
    cloud(scene,-25,34,-70,2.7),
    cloud(scene,21,37,-124,3.5),
    cloud(scene,-5,42,-192,3),
    cloud(scene,30,40,-246,2.2)
  ];
  const native=addModel(scene,onState);
  const look=new THREE.Vector3();
  const a=new THREE.Vector3(),b=new THREE.Vector3();
  let lastW=0,lastH=0,disposed=false;
  function resize(){
    if(disposed)return;
    const w=canvas.clientWidth|0,h=canvas.clientHeight|0;
    if(w===lastW&&h===lastH)return;
    lastW=w;lastH=h;
    if(w<1||h<1)return;
    camera.aspect=w/h;
    camera.fov=w<620?48:39;
    camera.updateProjectionMatrix();
    renderer.setSize(w,h,false);
  }
  function render(progress,{elapsed=0,reducedMotion=false}={}){
    if(disposed)return;
    resize();
    const timeline=THREE.MathUtils.clamp(progress,0,1)*6;
    const frame=Math.min(5,Math.floor(timeline)),t=reducedMotion?0:smooth(timeline-frame);
    const selected=reducedMotion?Math.round(timeline):frame;
    const left=cameraKeys[selected],right=cameraKeys[Math.min(6,selected+(reducedMotion?0:1))];
    a.fromArray(left.pos);b.fromArray(right.pos);
    camera.position.copy(a.lerp(b,t));
    a.fromArray(left.look);b.fromArray(right.look);look.copy(a.lerp(b,t));
    camera.lookAt(look);
    // Render the actual BIM scene only when the journey reaches the relevant section.
    if(timeline>=2.85)native.request();
    native.setStage(timeline);
    if(!reducedMotion)clouds.forEach((c,i)=>{c.position.x+=Math.sin(elapsed*.00015+i)*.002});
    renderer.render(scene,camera);
  }
  return {render,model:native,dispose(){disposed=true;renderer.dispose();}};
}
