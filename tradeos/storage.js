const KEY='tradeos.local.v1';

const seed={
  workspace:{name:'Demo Trade Co',gst:'',bank:'',email:'',phone:'',trades:['earthworks-landscaping-drainage']},
  contacts:[{id:'C-001',name:'Example Client',email:'client@example.co.nz',phone:'021 000 0000'}],
  quotes:[{id:'Q-1001',client:'Example Client',title:'Siteworks package',value:18450,status:'Sent'}],
  projects:[{id:'PJ-1001',name:'101 Example Street',client:'Example Client',trade:'earthworks-landscaping-drainage',progress:53,status:'In progress',contract:18450}],
  variations:[{id:'V-001',project:'PJ-1001',description:'Additional trenching',value:510,status:'Draft'}],
  claims:[],
  invoices:[],
  crew:[{id:'U-001',name:'Company Owner',role:'owner_admin'},{id:'U-002',name:'Operator 1',role:'worker_crew'}],
  hns:[],
  settings:{currency:'NZD',taxRate:0.15}
};

export function loadState(){
  try{return JSON.parse(localStorage.getItem(KEY))||structuredClone(seed)}catch{return structuredClone(seed)}
}
export function saveState(state){localStorage.setItem(KEY,JSON.stringify(state))}
export function resetState(){localStorage.removeItem(KEY);return structuredClone(seed)}
export function uid(prefix){return `${prefix}-${Math.random().toString(36).slice(2,8).toUpperCase()}`}
