const KEY='tradeos.local.v2';

const isoToday=()=>new Date().toISOString().slice(0,10);
const addDays=(n)=>{const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)};

const seed={
  workspace:{id:'WS-DEMO',name:'Demo Trade Co',legalName:'Demo Trade Co Ltd',gst:'',bank:'',email:'',phone:'',address:'New Zealand',trades:['earthworks-landscaping-drainage'],accent:'#111111',onboarded:true,hnsPolicyName:'Company H&S Policy.pdf'},
  contacts:[
    {id:'C-001',name:'Example Client',company:'Example Developments',type:'Client'},
    {id:'C-002',name:'Example Main Contractor',company:'BuildRight Ltd',type:'Main contractor'}
  ],
  quotes:[
    {id:'Q-1001',clientId:'C-001',title:'Example Street — siteworks package',trade:'earthworks-landscaping-drainage',status:'Accepted',date:isoToday(),validUntil:addDays(30),notes:'Includes site cut, drainage trenching and driveway preparation.',lines:[
      {id:'QL-1',description:'5T excavator with operator',qty:18,unit:'hr',rate:165},
      {id:'QL-2',description:'Truck and cartage',qty:8,unit:'hr',rate:145},
      {id:'QL-3',description:'AP40 supply and place',qty:45,unit:'t',rate:92},
      {id:'QL-4',description:'Drainage labour',qty:24,unit:'hr',rate:78}
    ]}
  ],
  tenders:[
    {id:'T-1001',clientId:'C-002',title:'Commercial landscape enabling works',trade:'earthworks-landscaping-drainage',status:'Draft',closingDate:addDays(14),scope:'Bulk earthworks, trenching, drainage and landscape preparation.',methodology:'Stage works to maintain access, confirm services before excavation, complete daily pre-starts and progressive QA.'}
  ],
  projects:[
    {id:'PJ-1001',quoteId:'Q-1001',clientId:'C-001',name:'Example Street',site:'Example Street',trade:'earthworks-landscaping-drainage',status:'In progress',contract:18450,progress:53,startDate:isoToday(),endDate:addDays(12),crew:['U-002','U-003'],stages:[
      {name:'Site setup',pct:100},{name:'Bulk excavation',pct:80},{name:'Drainage',pct:55},{name:'Driveway / access',pct:20},{name:'Landscaping',pct:10}
    ]}
  ],
  schedule:[
    {id:'S-001',projectId:'PJ-1001',date:isoToday(),start:'07:30',end:'16:30',crewIds:['U-002','U-003'],note:'Continue drainage trench and driveway sub-base.'},
    {id:'S-002',projectId:'PJ-1001',date:addDays(1),start:'07:30',end:'16:30',crewIds:['U-002'],note:'Finish trenching and place aggregate.'}
  ],
  crew:[
    {id:'U-001',name:'Company Owner',role:'owner_admin',accessCode:'1111',active:true},
    {id:'U-002',name:'Operator 1',role:'worker_crew',accessCode:'0000',active:true},
    {id:'U-003',name:'Labourer 1',role:'worker_crew',accessCode:'0000',active:true}
  ],
  fieldSession:{crewId:null,projectId:null,clockedIn:false,clockInAt:null,hnsSigned:false},
  timesheets:[{id:'TS-001',crewId:'U-002',projectId:'PJ-1001',date:addDays(-1),start:'07:31',end:'16:18',hours:8.28,status:'Approved'}],
  variations:[{id:'V-001',projectId:'PJ-1001',description:'Additional trenching around existing service conflict',value:510,status:'Awaiting approval',raisedDate:isoToday(),evidence:'Service alignment forced additional excavation and backfill.'}],
  progressUpdates:[{id:'PR-001',projectId:'PJ-1001',date:isoToday(),crewId:'U-002',percent:53,note:'Drainage trench progressing. Driveway formation commenced.',photos:0}],
  hnsDocs:[{id:'HS-001',projectId:'PJ-1001',type:'Daily pre-start',date:isoToday(),status:'Signed',crewIds:['U-002','U-003'],hazards:['Underground services','Mobile plant','Reversing vehicles']}],
  hazardReports:[],
  materialRequests:[{id:'MR-001',projectId:'PJ-1001',item:'AP40 aggregate',qty:'20 t',status:'Ordered',requestedBy:'U-002',date:isoToday()}],
  claims:[],invoices:[],documents:[],
  notifications:[{id:'N-001',type:'variation',message:'Variation V-001 is awaiting approval.',read:false}],
  settings:{currency:'NZD',taxRate:0.15,invoiceTermsDays:14}
};

export function loadState(){try{return JSON.parse(localStorage.getItem(KEY))||structuredClone(seed)}catch{return structuredClone(seed)}}
export function saveState(state){localStorage.setItem(KEY,JSON.stringify(state))}
export function resetState(){localStorage.removeItem(KEY);return structuredClone(seed)}
export function uid(prefix){return `${prefix}-${Math.random().toString(36).slice(2,8).toUpperCase()}`}
export function getSeed(){return structuredClone(seed)}
