/**
 * @inneranimalmedia/iam-scene-runtime/gesture-stage
 * Reusable one-intent/one-transition timeline. This module never owns the DOM,
 * application storage, routing, identity, renderer, or host scrolling policy.
 */
export const STAGE_DURATION_MS = 1100;
export const easeInOutCubicStage = value => {
  const t = Math.max(0, Math.min(1, Number(value) || 0));
  // Smooth acceleration + deceleration close to cubic-bezier(.65,0,.35,1).
  return t < .5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;
};
export const clampStage = n => Math.min(1,Math.max(0,Number(n)||0));
export const stageWindow = (progress, start, end) =>
  clampStage((progress-start)/(end-start));

export function createGestureStage({
  count, initial=0, duration=STAGE_DURATION_MS,
  onFrame=()=>{}, onSettled=()=>{},
  requestFrame=callback=>requestAnimationFrame(callback),
  cancelFrame=id=>cancelAnimationFrame(id),
  now=()=>performance.now()
}) {
  if(!Number.isInteger(count)||count<1)throw Error('Gesture stage requires a positive scene count');
  let index=Math.max(0,Math.min(count-1,Math.trunc(initial)));
  let tween=null,frameId=0,disposed=false;
  const draw=(from,to,p)=>{
    const camera=stageWindow(p,.1364,.7727);
    onFrame({from,to,p,index,worldProgress:(from+(to-from)*easeInOutCubicStage(camera))/(count-1||1),
      textOut:1-stageWindow(p,0,.2273),textIn:stageWindow(p,.5909,1)});
  };
  function tick(timestamp){
    if(disposed||!tween)return;
    const p=clampStage((timestamp-tween.startedAt)/duration);
    const {from,to}=tween; draw(from,to,p);
    if(p>=1){
      index=to;tween=null;frameId=0;onSettled(index);
      draw(index,index,1);
    } else frameId=requestFrame(tick);
  }
  function to(next) {
    if(disposed||tween||!Number.isInteger(next)||next<0||next>=count||next===index)return false;
    tween={from:index,to:next,startedAt:now()};
    draw(index,next,0);
    frameId=requestFrame(tick);
    return true;
  }
  function set(next){
    if(disposed||!Number.isInteger(next)||next<0||next>=count)return false;
    if(frameId)cancelFrame(frameId);
    frameId=0;tween=null;index=next;
    draw(index,index,1);
    onSettled(index);
    return true;
  }
  return {to,set,step:direction=>to(index+(direction<0?-1:1)),draw:()=>draw(index,index,1),
    get index(){return index},get transitioning(){return Boolean(tween)},
    get destination(){return tween?.to??index},
    dispose(){disposed=true;if(frameId)cancelFrame(frameId);tween=null;}
  };
}

export function createWheelIntent({threshold=40,quietMs=95,onIntent=()=>{},now=()=>performance.now()}={}){
  let acc=0,last=0,lockedUntilQuiet=0;
  function ingest(delta,mode=0){
    const t=now();const normalized=delta*(mode===1?16:mode===2?Math.min(900,window.innerHeight||600):1);
    const direction=Math.sign(normalized);
    if(!direction)return false;
    if(t-last>quietMs || (Math.sign(acc)!==direction && acc!==0))acc=0;
    last=t;
    if(t<lockedUntilQuiet)return false;
    acc+=normalized;
    if(Math.abs(acc)<threshold)return false;
    acc=0;lockedUntilQuiet=t+quietMs;
    onIntent(direction);
    return true;
  }
  return {ingest,reset:()=>{acc=0;last=0;lockedUntilQuiet=0},get lastEvent(){return last}};
}
