/* BIOLOGY FLOW — авторлық БЖБ/ТЖБ бағалау модулі */
const A=(type,bloom,question,options,key,points,descriptor,stimulus='')=>({type,bloom,question,options,key,points,descriptor,stimulus});
const assessmentData={7:[
{id:'7-bjb-1',kind:'БЖБ',title:'Экожүйелер және адам',section:'1-бөлім',required:6,time:20,max:10,goals:'7.3.1.1–7.3.2.4',items:[
A('choice','Білу','Абиотикалық факторды таңда.',['Жарық','Бәсекелестік','Жыртқыштық'],0,1,'Абиотикалық факторды анықтайды.'),
A('choice','Қолдану','Шөп → қоян → түлкі тізбегінде қоян азайса, алғашқы ықтимал өзгеріс қандай?',['Шөп азаяды','Түлкі саны азаяды','Түлкі саны артады'],1,2,'Қоректік тізбектегі өзгеріс салдарын болжайды.'),
A('multi','Талдау','Экожүйеге пайдалы екі әрекетті таңда.',['Қалдықты сұрыптау','Өзенге ағын су төгу','Жасыл белдеу отырғызу','Заңсыз ағаш кесу'],[0,2],3,'Адам әрекетін экожүйеге әсері бойынша бағалайды.'),
A('choice','Бағалау','Көлдегі сирек құс саны 80-нен 42-ге азайды. Ұя маңында көлік көбейді. Ең негізді шешім қайсы?',['Құсты басқа көлге көшіру','Ұя маңын маусымдық жабу','Көлге келушілер санын арттыру'],1,4,'Дерекке сүйеніп қорғау шарасын ұсынады.') ]},
{id:'7-bjb-2',kind:'БЖБ',title:'Тірі ағзаларды жүйелеу',section:'2-бөлім',required:9,time:20,max:10,goals:'7.1.1.1–7.1.1.4',items:[
A('choice','Білу','Омыртқалы жануардың негізгі белгісін көрсет.',['Сыртқы қаңқа','Омыртқа жотасы','Бунақталған аяқ'],1,1,'Омыртқалы жануардың негізгі белгісін атайды.'),
A('multi','Түсіну','Саңырауқұлақтарға тән екі белгіні таңда.',['Хлорофилл бар','Хитинді қабық','Дайын органикалық затпен қоректену','Тек көпжасушалы болу'],[1,2],2,'Саңырауқұлақтың негізгі белгілерін анықтайды.'),
A('choice','Қолдану','Ядросы жоқ біржасушалы ағза қай патшалыққа жатады?',['Протисталар тобы','Прокариоттар тобы','Жануарлар патшалығы'],1,3,'Ағзаны негізгі белгісі бойынша патшалыққа жатқызады.'),
A('choice','Талдау','Кілт: 1а омыртқа бар → 2; 1б жоқ → буынаяқты. 2а қауырсын бар → құс; 2б жүзбеқанат бар → балық. Үлгіде омыртқа мен жүзбеқанат бар. Нәтиже?',['Балық','Құс','Буынаяқты'],0,4,'Дихотомиялық кілтті ретімен қолданып ағзаны анықтайды.') ]},
{id:'7-bjb-3',kind:'БЖБ',title:'Жасуша және тіршілік заттары',section:'3-бөлім',required:14,time:20,max:10,goals:'7.4.2.1–7.4.1.4',items:[
A('choice','Білу','Құрылымдық деңгейлердің дұрыс реті қайсы?',['Ұлпа → жасуша → мүше','Жасуша → ұлпа → мүше','Мүше → ұлпа → жасуша'],1,1,'Құрылымдық деңгейлердің ретін анықтайды.'),
A('multi','Түсіну','Өсімдік жасушасына тән екі құрылымды таңда.',['Хлоропласт','Жасушалық қабырға','Жасуша мембранасы','Цитоплазма'],[0,1],2,'Өсімдік пен жануар жасушасының ерекшеліктерін ажыратады.'),
A('choice','Қолдану','Йод қосылған тағам көк-қара түске боялды. Қандай зат анықталды?',['Липидтер анықталды','Нәруыздар анықталды','Крахмал анықталды'],2,3,'Реактив нәтижесі бойынша органикалық затты анықтайды.'),
A('choice','Талдау','Су 5 минутта 20°C-тан 31°C-қа, құм 48°C-қа дейін қызды. Қай қорытынды дұрыс?',['Судың жылусыйымдылығы жоғары','Су жылуды құмнан тез сіңіреді','Құм жақсы еріткіш'],0,4,'Тәжірибе дерегін судың қасиетімен байланыстырады.') ]},
{id:'7-tjb-1',kind:'ТЖБ',title:'1-тоқсан бойынша жиынтық бағалау',section:'1-тоқсан',required:16,time:40,max:20,goals:'7-сыныптың 1-тоқсан оқу мақсаттары',items:[
A('choice','Білу','Қоректік тізбектің бастапқы буынын таңда.',['Өндіруші','Тұтынушы','Ыдыратушы'],0,2,'Өндірушінің қоректік тізбектегі орнын анықтайды.'),
A('choice','Түсіну','Топырақ сақталған өртенген орманда қандай сукцессия жүреді?',['Бірінші реттік','Екінші реттік','Сукцессия жүрмейді'],1,3,'Сукцессия түрін жағдаят бойынша ажыратады.'),
A('multi','Қолдану','Қорғалатын аумақта орынды екі әрекетті таңда.',['Сирек өсімдікті жұлу','Белгіленген соқпақпен жүру','Қоқысты алып кету','Ұя маңында шулау'],[1,2],3,'Табиғатты қорғау ережелерін қолданады.'),
A('choice','Талдау','Ағзада ядро, хитинді қабық бар және хлорофилл жоқ. Қай патшалық?',['Өсімдіктер ағзалар тобы','Саңырауқұлақтар патшалығы','Прокариоттар ағзалар тобы'],1,4,'Белгілер жиынтығы бойынша ағзаны жүйелейді.'),
A('multi','Талдау','Өсімдік жасушасын дәлелдейтін екі белгіні таңда.',['Ірі вакуоль','Рибосома','Мембрана','Хлоропласт'],[0,3],4,'Жасуша түрін айқындаушы құрылымдармен дәлелдейді.'),
A('choice','Бағалау','Өсімдіктің тамыры нашар дамыды. Тәжірибеде фосфор қосылған телімнің тамыры 28% ұзарды. Қай шешім негізді?',['Азот тыңайтқышын мөлшерлеу','Фосфор тыңайтқышын беру','Суаруды уақытша толық тоқтату'],1,4,'Дерекке сүйеніп тыңайтқыш таңдауды негіздейді.') ]}
],8:[
{id:'8-bjb-1',kind:'БЖБ',title:'Жасушалық биология және органикалық заттар',section:'1-бөлім',required:5,time:20,max:10,goals:'8.4.2.1–8.4.1.3',items:[
A('choice','Білу','Прокариотта болмайтын құрылымды таңда.',['Цитоплазма','Жасуша ядросы','Жасуша мембранасы'],1,1,'Прокариот пен эукариоттың негізгі айырмашылығын анықтайды.'),
A('choice','Түсіну','Крахмал мен нәруызға ортақ белгі қайсы?',['Екеуі де полимер','Екеуі де липид','Екеуінің мономері глюкоза'],0,2,'Мономер мен полимер арасындағы байланысты түсіндіреді.'),
A('multi','Қолдану','Нәруыз қызметінің екі мысалын таңда.',['Крахмал энергия қоры','Гемоглобин оттек тасымалдайды','Май жылуды сақтайды','Антидене қорғанышқа қатысады'],[1,3],3,'Нәруыздың қызметтерін нақты мысалдардан анықтайды.'),
A('choice','Талдау','37°C-та фермент белсенділігі 100%, 70°C-та 8%. Себебі қандай?',['Субстрат көбейді','Нәруыз пішіні өзгерді','Фермент полимерге айналды'],1,4,'Температура дерегін нәруыз құрылымының өзгеруімен түсіндіреді.') ]},
{id:'8-bjb-2',kind:'БЖБ',title:'Тірі ағзалардың алуан түрлілігі',section:'2-бөлім',required:9,time:20,max:10,goals:'8.1.1.1–8.1.1.4',items:[
A('choice','Білу','Жабықтұқымды өсімдікке тән белгі қайсы?',['Спора арқылы ғана көбею','Тұқымның жемісте болуы','Хлорофиллдің толық болмауы'],1,1,'Өсімдіктер бөлімінің айқындаушы белгісін атайды.'),
A('multi','Түсіну','Саңырауқұлаққа тән екі белгіні таңда.',['Автотрофты қоректену','Хлоропласт','Хитинді қабық','Гликоген қоры'],[2,3],2,'Саңырауқұлақтың ерекшелік белгілерін анықтайды.'),
A('choice','Қолдану','Шашақ тамыр, параллель жүйкелену, гүл бөліктері 3 еселі. Қай класс?',['Қосжарнақты өсімдіктер','Даражарнақты өсімдік','Ашықтұқымды өсімдіктер'],1,3,'Белгілер бойынша өсімдік класын анықтайды.'),
A('choice','Талдау','Жануардың денесі бунақталған, аяқтары буынды, сыртқы қаңқасы бар. Қай топ?',['Хордалылар','Буынаяқтылар','Жалпақ құрттар'],1,4,'Құрылыс белгілері бойынша жануарлар тобын дәлелдейді.') ]},
{id:'8-bjb-3',kind:'БЖБ',title:'Қоректену және асқорыту',section:'3-бөлім',required:14,time:20,max:10,goals:'8.1.2.1–8.1.2.5',items:[
A('choice','Білу','Қоректік заттар негізінен қай бөлімде сіңеді?',['Асқазан','Аш ішек','Өңеш'],1,1,'Асқорыту мүшесінің қызметін анықтайды.'),
A('choice','Түсіну','Сиырдың көп бөлімді асқазаны қандай қорекке бейімделген?',['Целлюлозасы мол қорекке','Сұйықтығы мол дайын қорекке','Минералы мол тұзды қорекке'],0,2,'Қорек түрі мен асқорыту құрылысының байланысын түсіндіреді.'),
A('multi','Қолдану','Тағамнан уланудың алдын алатын екі әрекетті таңда.',['Тағамды жылыда ұзақ ұстау','Қолды сабындап жуу','Сақтау температурасын бақылау','Жарамдылық мерзімін елемеу'],[1,2],3,'Тағам қауіпсіздігі ережелерін қолданады.'),
A('choice','Талдау','Оқушы күн сәулесінде аз болады және сүйек беріктігі төмендеген. Қай дәруменге назар аудару керек?',['C','D','B1'],1,4,'Белгіні дәрумен қызметімен байланыстырады.') ]},
{id:'8-tjb-1',kind:'ТЖБ',title:'1-тоқсан бойынша жиынтық бағалау',section:'1-тоқсан',required:16,time:40,max:20,goals:'8-сыныптың 1-тоқсан оқу мақсаттары',items:[
A('choice','Білу','Эукариот жасушасының айқындаушы белгісі қайсы?',['Қалыптасқан ядро','Рибосоманың болмауы','Мембрананың болмауы'],0,2,'Эукариот жасушасының негізгі белгісін анықтайды.'),
A('choice','Түсіну','Глюкоза → крахмал өзгерісін дұрыс сипатта.',['Полимер мономерге ыдырайды','Мономерлер полимер түзеді','Липид нәруызға айналады'],1,3,'Мономер мен полимер байланысын түсіндіреді.'),
A('multi','Қолдану','Даражарнақтыға тән екі белгіні таңда.',['Шашақ тамыр','Параллель жүйкелену','Торлы жүйкелену','Екі тұқымжарнақ'],[0,1],3,'Өсімдік белгілерін класымен сәйкестендіреді.'),
A('choice','Талдау','A жануарының ішегі денесінен 12 есе, B жануарыныкі 6 есе ұзын. A өсімдікпен, B аралас қоректенеді. Қорытынды?',['Қорек түріне бейімделген','Дене өлшеміне бейімделген','Қозғалыс түріне бейімделген'],0,4,'Сандық деректен құрылыс пен қызмет байланысын шығарады.'),
A('multi','Талдау','Майда еритін дәрумендерді таңда.',['A','B','C','D'],[0,3],4,'Дәрумендерді ерігіштігіне қарай жіктейді.'),
A('choice','Бағалау','Мәзір A: алма, сәбіз, балық, айран. Мәзір B: ақ нан, тәтті сусын, кәмпит. Қайсысы теңгерімді?',['B мәзірі энергиясы жеткілікті','A мәзірі өнімдері әртүрлі','Екі мәзір өнімдері теңгерімді'],1,4,'Рацион дерегін бағалап, теңгерімді мәзірді негіздейді.') ]}
]};

let activeAssessment=null,assessmentStarted=0,assessmentTimer=null;
function gradeAssessments(){return assessmentData[selectedGrade]||[]}
function assessmentStore(){return currentUser?.assessments||{}}
function assessmentUnlocked(a){
  if(currentUser?.role==='teacher'||currentUser?.user==='demo_student')return true;
  let completed=Object.keys(gradeProgress()).filter(n=>Number(n)<a.required).length;
  if(completed<a.required)return false;
  if(a.kind==='ТЖБ')return gradeAssessments().filter(x=>x.kind==='БЖБ').every(x=>assessmentStore()[x.id]);
  return true;
}
function renderAssessmentHub(){
  let host=$('assessmentList');if(!host)return;let saved=assessmentStore();
  host.innerHTML='<div class="section-head assessment-head"><div><span class="kicker">ЖИЫНТЫҚ БАҒАЛАУ</span><h2>БЖБ және ТЖБ</h2></div><p>Жауаптар бағалау аяқталғанша көрсетілмейді. Нәтиже дескрипторлар бойынша шығарылады.</p></div><div class="assessment-grid">'+gradeAssessments().map((a,i)=>{let done=saved[a.id],open=assessmentUnlocked(a);return '<article class="assessment-card '+(open?'ready':'locked')+' '+(done?'done':'')+'"><span>'+a.kind+' • '+a.section+'</span><h3>'+a.title+'</h3><p>'+a.goals+'</p><div><b>'+a.max+' балл</b><b>⏱ '+a.time+' минут</b><b>'+a.items.length+' тапсырма</b></div><button onclick="openAssessment(\''+a.id+'\')">'+(done?'Нәтижені көру':open?'Бағалауды бастау →':'🔒 Сабақтарды аяқтау')+'</button></article>'}).join('')+'</div>';
}
function findAssessment(id){return gradeAssessments().find(x=>x.id===id)}
function openAssessment(id){
  if(!currentUser)return show('login');let a=findAssessment(id);if(!a)return;
  if(!assessmentUnlocked(a))return toast('Алдымен бөлім сабақтарын аяқта');
  activeAssessment=a;clearInterval(assessmentTimer);let oldDraft=loadAssessmentDraft();assessmentStarted=oldDraft?.started||Date.now();
  $('assessmentBack').onclick=()=>{clearInterval(assessmentTimer);openGrade(selectedGrade);openQuarter(1)};
  $('assessmentKind').textContent=a.kind+' • '+a.section;$('assessmentTitle').textContent=a.title;$('assessmentGoals').textContent=a.goals;$('assessmentMax').textContent=a.max+' балл';$('assessmentTime').textContent=a.time+':00';
  let saved=assessmentStore()[id];
  if(saved){renderAssessmentResult(saved);show('assessment');return}
  $('assessmentBody').innerHTML=a.items.map((q,i)=>renderAssessmentItem(q,i)).join('')+'<div class="assessment-submit"><label><input id="assessmentConfirm" type="checkbox"> Барлық жауабымды тексердім және жұмысты аяқтауға дайынмын.</label><button class="primary" onclick="submitAssessment()">Жиынтық жұмысты тапсыру ✓</button></div>';
  show('assessment');assessmentTimer=setInterval(updateAssessmentClock,1000);restoreAssessmentDraft();
}
function renderAssessmentItem(q,i){
  let entries=q.options.map((o,j)=>({o,j})),assessmentIndex=gradeAssessments().indexOf(activeAssessment),shift=(i+assessmentIndex+2*selectedGrade)%entries.length;entries=entries.slice(shift).concat(entries.slice(0,shift));
  let inputs=entries.map((x,shown)=>'<label class="assessment-option"><input type="'+(q.type==='multi'?'checkbox':'radio')+'" name="assess'+i+'" value="'+x.j+'" onchange="saveAssessmentDraft()"><i>'+String.fromCharCode(65+shown)+'</i><span>'+x.o+'</span></label>').join('');
  return '<article class="assessment-item"><div class="assessment-item-head"><span>'+(i+1)+'-тапсырма</span><b>'+q.points+' балл</b><em>Блум: '+q.bloom+'</em></div>'+(q.stimulus?'<div class="assessment-stimulus">'+q.stimulus+'</div>':'')+'<h3>'+q.question+'</h3>'+(q.type==='multi'?'<small class="multi-note">Бірнеше дұрыс жауап болуы мүмкін.</small>':'')+'<div class="assessment-options">'+inputs+'</div><div class="student-descriptor"><small>ДЕСКРИПТОР</small><span>'+q.descriptor+'</span></div></article>';
}
function updateAssessmentClock(){
  if(!activeAssessment)return;let left=activeAssessment.time*60-Math.floor((Date.now()-assessmentStarted)/1000);
  if(left<=0){clearInterval(assessmentTimer);$('assessmentTime').textContent='00:00';return submitAssessment(true)}
  $('assessmentTime').textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');
}
function assessmentAnswers(){return activeAssessment.items.map((q,i)=>[...document.querySelectorAll('[name="assess'+i+'"]:checked')].map(x=>Number(x.value)))}
function assessmentDraftKey(){return 'bioAssessmentDraft:'+currentUser.user+':'+activeAssessment.id}
function loadAssessmentDraft(){try{return JSON.parse(localStorage.getItem(assessmentDraftKey())||'null')}catch{return null}}
function saveAssessmentDraft(){if(activeAssessment&&currentUser)localStorage.setItem(assessmentDraftKey(),JSON.stringify({started:assessmentStarted,answers:assessmentAnswers()}))}
function restoreAssessmentDraft(){
  try{let saved=loadAssessmentDraft(),d=Array.isArray(saved)?saved:(saved?.answers||[]);d.forEach((vals,i)=>vals.forEach(v=>{let x=document.querySelector('[name="assess'+i+'"][value="'+v+'"]');if(x)x.checked=true}))}catch{}
}
async function submitAssessment(auto=false){
  if(!auto&&!$('assessmentConfirm').checked)return toast('Жауаптарыңды тексергеніңді белгіле');
  let answers=assessmentAnswers();if(!auto&&answers.some(x=>x.length===0))return toast('Барлық тапсырмаға жауап бер');
  clearInterval(assessmentTimer);let earned=0,details=activeAssessment.items.map((q,i)=>{let key=Array.isArray(q.key)?q.key:[q.key],got=answers[i]||[],ok=key.length===got.length&&key.every(x=>got.includes(x));if(ok)earned+=q.points;return{descriptor:q.descriptor,earned:ok?q.points:0,max:q.points,bloom:q.bloom}}),duration=Math.max(1,Math.ceil((Date.now()-assessmentStarted)/60000));
  let result={id:activeAssessment.id,title:activeAssessment.title,kind:activeAssessment.kind,grade:selectedGrade,score:earned,max:activeAssessment.max,percent:Math.round(earned/activeAssessment.max*100),details,duration,date:new Date().toISOString()};
  let us=localUsers(),idx=us.findIndex(x=>x.user===currentUser.user);currentUser.assessments=currentUser.assessments||{};currentUser.assessments[result.id]=result;if(idx>=0){us[idx].assessments=us[idx].assessments||{};us[idx].assessments[result.id]=result;saveUsers(us);currentUser=us[idx]}
  localStorage.removeItem(assessmentDraftKey());
  if(API_URL)await api({action:'assessment',user:currentUser.user,assessment:result.id,title:result.title,grade:result.grade,kind:result.kind,score:result.score,max:result.max,percent:result.percent,duration:result.duration,descriptors:details.map(x=>x.descriptor+': '+x.earned+'/'+x.max).join(' | ')});
  renderAssessmentResult(result);
}
function renderAssessmentResult(r){
  let level=r.percent>=85?'Жоғары деңгей':r.percent>=65?'Жақсы нәтиже':'Қосымша дайындық қажет';
  $('assessmentBody').innerHTML='<div class="assessment-result"><span>'+r.kind+' АЯҚТАЛДЫ</span><div class="assessment-ring" style="--assess:'+r.percent*3.6+'deg"><i><b>'+r.score+'/'+r.max+'</b><small>'+r.percent+'%</small></i></div><h2>'+level+'</h2><p>Жауап кілті көрсетілмейді. Нәтиже дескрипторлар бойынша берілді.</p><div class="descriptor-results">'+r.details.map(x=>'<article class="'+(x.earned===x.max?'achieved':'developing')+'"><i>'+(x.earned===x.max?'✓':'○')+'</i><span>'+x.descriptor+'</span><b>'+x.earned+'/'+x.max+'</b></article>').join('')+'</div><button class="primary" onclick="openGrade(selectedGrade);openQuarter(1)">Сабақтар бөліміне қайту</button></div>';
}

const assessmentBaseOpenQuarter=openQuarter;
openQuarter=function(q){assessmentBaseOpenQuarter(q);if(q===1)renderAssessmentHub()};

function renderStudentAssessmentCard(){
  let side=document.querySelector('#student .side-column');if(!side)return;let card=$('studentAssessments'),items=Object.values(assessmentStore()).filter(a=>Number(a.grade)===selectedGrade);
  if(!card){side.insertAdjacentHTML('beforeend','<section id="studentAssessments" class="dashboard-card"><div class="card-heading"><div><span class="kicker">ЖИЫНТЫҚ БАҒАЛАУ</span><h3>Менің БЖБ/ТЖБ нәтижем</h3></div><button class="text-btn" onclick="openGrade(selectedGrade);openQuarter(1)">Ашу →</button></div><div id="studentAssessmentList"></div></section>');card=$('studentAssessments')}
  $('studentAssessmentList').innerHTML=items.length?items.map(a=>'<article class="student-assessment-row"><span>'+a.kind+'</span><b>'+a.score+'/'+a.max+'</b><em>'+a.percent+'%</em></article>').join(''):'<p class="empty-assessment">Жиынтық бағалау әлі тапсырылмаған.</p>';
}
const assessmentBaseStudentHome=studentHome;
studentHome=function(newAccount=false){assessmentBaseStudentHome(newAccount);renderStudentAssessmentCard()};

function installAssessmentTeacher(){
  let teacher=$('teacher');if(!teacher||$('teacher-assessments'))return;
  teacher.querySelector('#teacher-signals').insertAdjacentHTML('afterend','<section id="teacher-assessments" class="teacher-view"><div class="dashboard-card"><div class="card-heading"><div><span class="kicker">ЖИЫНТЫҚ БАҒАЛАУ</span><h2>БЖБ және ТЖБ нәтижелері</h2></div><button class="text-btn" onclick="exportAssessmentReport()">↓ CSV есеп</button></div><div class="assessment-summary" id="assessmentSummary"></div><div class="tablewrap"><table><thead><tr><th>Оқушы</th><th>Жұмыс</th><th>Түрі</th><th>Балл</th><th>Нәтиже</th><th>Уақыт</th></tr></thead><tbody id="assessmentTeacherTable"></tbody></table></div></div></section>');
}
function renderAssessmentTeacher(){
  if(!$('assessmentTeacherTable'))return;let us=teacherUsers.filter(u=>parseInt(u.class)===teacherGrade),rows=[];us.forEach(u=>Object.values(u.assessments||{}).filter(a=>Number(a.grade)===teacherGrade).forEach(a=>rows.push({u,a})));
  let avg=rows.length?Math.round(rows.reduce((s,x)=>s+Number(x.a.percent||0),0)/rows.length):0;$('assessmentSummary').innerHTML='<article><small>ТАПСЫРЫЛҒАН ЖҰМЫС</small><b>'+rows.length+'</b></article><article><small>ОРТАША НӘТИЖЕ</small><b>'+avg+'%</b></article><article><small>ҚОЛДАУ ҚАЖЕТ</small><b>'+rows.filter(x=>x.a.percent<65).length+'</b></article>';
  $('assessmentTeacherTable').innerHTML=rows.map(x=>'<tr><td>'+x.u.name+'</td><td>'+x.a.title+'</td><td>'+x.a.kind+'</td><td>'+x.a.score+'/'+x.a.max+'</td><td><span class="score-pill '+(x.a.percent>=80?'high':'')+'">'+x.a.percent+'%</span></td><td>'+x.a.duration+' мин</td></tr>').join('')||'<tr><td colspan="6">Жиынтық бағалау нәтижесі әлі жоқ</td></tr>';
}
const assessmentBaseHeader=updateHeader;
updateHeader=function(){assessmentBaseHeader();if(currentUser?.role==='teacher'){let nav=document.querySelector('.topbar nav');if(nav&&!nav.querySelector('[data-assessment-nav]'))nav.insertAdjacentHTML('beforeend','<button data-assessment-nav onclick="teacherView(\'assessments\')">Жиынтық бағалау</button>')}};
const assessmentBaseTeacherData=renderTeacherData;
renderTeacherData=function(){assessmentBaseTeacherData();renderAssessmentTeacher()};
const assessmentBaseServerStudents=serverStudents;
serverStudents=function(rows){return assessmentBaseServerStudents(rows).map((u,i)=>({...u,assessments:(rows[i]&&rows[i].assessments)||{}}))};
function exportAssessmentReport(){
  let us=teacherUsers.filter(u=>parseInt(u.class)===teacherGrade),rows=[['Оқушы','Сынып','Бағалау','Түрі','Балл','Максимум','Пайыз','Уақыт']];us.forEach(u=>Object.values(u.assessments||{}).filter(a=>Number(a.grade)===teacherGrade).forEach(a=>rows.push([u.name,u.class,a.title,a.kind,a.score,a.max,a.percent+'%',a.duration+' мин'])));let csv='\ufeff'+rows.map(r=>r.map(x=>'"'+String(x).replaceAll('"','""')+'"').join(';')).join('\n'),url=URL.createObjectURL(new Blob([csv],{type:'text/csv'})),link=document.createElement('a');link.href=url;link.download='biology-flow-assessment-'+teacherGrade+'.csv';link.click();URL.revokeObjectURL(url)
}
installAssessmentTeacher();
if(currentUser)updateHeader();
