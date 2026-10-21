import {useEffect, useState} from 'react';
import {Box, Cpu, DraftingCompass, MessageCircle, Shapes} from 'lucide-react';
import {Nav, type NavMode, type NavValue, type NavTheme} from '@inneranimalmedia/agentsam-nav';
import {AgentComposer} from '@inneranimalmedia/agentsam-workbench/agent';
import {CadCreatorApp} from './CadCreatorApp';
import './cad-standalone-shell.css';

type Workspace = 'plan' | 'model' | 'parametric' | 'robotics';
const WORKSPACES: Array<{id: Workspace; label: string; icon: React.ReactNode}> = [
  {id:'plan',label:'Draft & Plan',icon:<DraftingCompass size={17}/>},
  {id:'model',label:'3D Modeling',icon:<Box size={17}/>},
  {id:'parametric',label:'Parametric',icon:<Shapes size={17}/>},
  {id:'robotics',label:'Robotics',icon:<Cpu size={17}/>},
];

type Appearance = {theme:NavTheme;accent:string};
function appearance():Appearance {
  try {
    const p=JSON.parse(localStorage.getItem('agentsam-shell-appearance-v1') || '{}');
    if (!['dark','light','system'].includes(p.theme) || !/^#[0-9A-Fa-f]{6}$/.test(p.accent)) throw Error();
    return p;
  } catch {return {theme:'dark',accent:'#82a7fb'};}
}

function CadChat({workspace}:{workspace:Workspace}) {
  const [draft,setDraft]=useState('');
  const [turns,setTurns]=useState<Array<{role:'you'|'agentsam';body:string}>>([]);
  const [busy,setBusy]=useState(false);
  const send=async()=>{
    const prompt=draft.trim();
    if (!prompt || busy) return;
    setDraft('');
    setTurns(prev=>[...prev,{role:'you',body:prompt}]);
    setBusy(true);
    try {
      const res=await fetch('/api/cad/demo/plan',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({project:'dreamhouse-v1.1-public',workspace,prompt}),
      });
      const body=await res.json();
      const output=res.ok
        ? body.proposal
        : body.error==='demo_rate_limited'?'The public planning limit has been reached. Try again shortly.'
          : 'This public planning runtime is currently unavailable. CAD editing tools remain accessible in Work.';
      setTurns(prev=>[...prev,{role:'agentsam',body:output}]);
    } catch {
      setTurns(prev=>[...prev,{role:'agentsam',body:'The CAD planning runtime could not be reached.'}]);
    } finally {setBusy(false);}
  };
  return <section className="cad-chat-panel" aria-label="AgentSam CAD conversation">
    <header className="cad-chat-heading"><MessageCircle size={18}/><div>
      <strong>AgentSam / CAD</strong>
      <p>DreamHouse V1.1 · {WORKSPACES.find(w=>w.id===workspace)?.label}</p>
    </div></header>
    <div className="cad-chat-history" aria-live="polite">
      {turns.length===0 && <div className="cad-chat-empty">
        <h2>What should we design?</h2>
        <p>Explore architectural changes, modeling plans, and the native operations required to produce them. Public AI prepares a proposal; approved native changes require a connected CAD project runtime.</p>
      </div>}
      {turns.map((turn,i)=><div key={i} className={'cad-chat-turn cad-chat-turn--'+turn.role}>
        <span>{turn.role==='you'?'You':'AgentSam / planning'}</span>
        <p>{turn.body}</p>
      </div>)}
      {busy && <p className="cad-chat-working">Preparing a CAD proposal…</p>}
    </div>
    <div className="cad-chat-compose">
      <AgentComposer
        value={draft} onChange={setDraft} onSend={send}
        streaming={busy} disabled={busy} placeholder="Describe a change to DreamHouse…"
        textareaProps={{maxLength:360,'aria-label':'CAD planning request'}}
        containerClassName="cad-chat-composer" inputClassName="cad-chat-input"
        toolbarClassName="cad-chat-actions"
      />
      <p>Public architectural planning · no source model is modified.</p>
    </div>
  </section>;
}

/**
 * Domain-owned mounting adapter, not a bespoke navigation implementation.
 * Shared Nav and AgentComposer are versioned SDK packages. The same
 * CadCreatorApp is mounted both in standalone and embedded modes.
 */
export function CadStandaloneShell() {
  const [mode,setMode]=useState<NavMode>('work');
  const [workspace,setWorkspace]=useState<Workspace>(() => {
    const path = location.pathname.split('/').pop();
    return (WORKSPACES.find(item=>item.id===path)?.id || 'model');
  });
  const [look,setLook]=useState<Appearance>(appearance);
  useEffect(()=>{
    const update=()=>setLook(appearance());
    window.addEventListener('agentsam:shell-appearance',update);
    window.addEventListener('storage',update);
    return ()=>{window.removeEventListener('agentsam:shell-appearance',update);window.removeEventListener('storage',update);};
  },[]);
  useEffect(()=>{
    const onHistory=()=>{
      const path=location.pathname.split('/').pop();
      const id=WORKSPACES.find(w=>w.id===path)?.id;
      if (id) {
        setWorkspace(id);
        window.dispatchEvent(new CustomEvent('agentsam:cad-select-workspace',{detail:{id}}));
      }
    };
    window.addEventListener('popstate',onHistory);
    return ()=>window.removeEventListener('popstate',onHistory);
  },[]);
  function navigate(href:string) {
    const found=WORKSPACES.find(w=>href==='/studio/'+w.id);
    if(found) {
      if (location.pathname !== href) history.pushState(null,'',href);
      setWorkspace(found.id);
      window.dispatchEvent(new CustomEvent('agentsam:cad-select-workspace',{detail:{id:found.id}}));
      setMode('work');
    } else if(href==='/') window.location.assign('/');
  }
  const nav:NavValue={
    mode,onModeChange:setMode,
    brand:{name:'AgentSam / CAD',home:'/studio'},
    project:{id:'dreamhouse-v1.1-public',name:'DreamHouse'},
    destinations:WORKSPACES.map(w=>({id:w.id,label:w.label,href:'/studio/'+w.id,icon:w.icon,active:workspace===w.id})),
    onNavigate:navigate,
    onCreateConversation:()=>setMode('chat'),
  };
  return <Nav.Provider value={nav} theme={look.theme} accentColor={look.accent} defaultOpen={false} peekable resizable>
    <Nav.Scope className="cad-standalone-shell" data-agentsam-app-shell="cad-creator">
      <Nav.Sidenav/>
      <div className="cad-standalone-main">
        <Nav.Topbar startup showNavigationTrigger showAccount={false}
          rightSlot={<span className="cad-shell-product">CAD Creator · Public workspace</span>}/>
        <div className="cad-standalone-content">
          {mode==='chat' && <CadChat workspace={workspace}/>}
          <main className={'cad-standalone-stage '+(mode==='chat'?'cad-standalone-stage--chat':'')} aria-label="CAD Creator editor">
            <CadCreatorApp presentation="embedded" initialWorkspace={workspace}/>
          </main>
        </div>
      </div>
    </Nav.Scope>
  </Nav.Provider>;
}
