/* BIOLOGY FLOW — 4 әрекет және 12+ ойын механикасы */
let flowActivities={1:false,2:false,3:false,4:false};
let flowSequenceState={};
let flowChainStep=0;
let flowEvidenceCount=0;
let cellTaskState={scanned:new Set(),modes:new Set(),answer:false,compareOpen:false};

function flowHead(code,title,icon){
  return '<div class="flow-game-head"><span>'+icon+'</span><div><small>'+code+'</small><h3>'+title+'</h3></div><b>LIVE</b></div>';
}
function flowDone(n,message){
  flowActivities[n]=true;
  let dot=$('flowAct'+n);
  if(dot){dot.classList.add('done');dot.querySelector('i').textContent='✓'}
  let total=Object.values(flowActivities).filter(Boolean).length;
  if($('flowActivityCount'))$('flowActivityCount').textContent=total+'/4 аяқталды';
  if(message)toast(message);
}
function flowChoice(btn,ok,activity,message){
  let box=btn.closest('.flow-game');
  if(box)box.querySelectorAll('button').forEach(x=>x.classList.remove('right','wrong'));
  btn.classList.add(ok?'right':'wrong');
  let feedback=box&&box.querySelector('.flow-feedback');
  if(feedback)feedback.textContent=ok?'✓ '+message:'Әзірге дәл емес. Сабақтағы дерекке қайта қара.';
  if(ok)flowDone(activity,'Дұрыс шешім! Әрекет орындалды.');
}
function flowWarmup(btn,ok){
  flowChoice(btn,ok,1,'Тақырыпқа қатысты негізгі ұғым табылды.');
}
function cellScanTaskHTML(){
  return '<div class="cell-task flow-game">'+
    '<div class="cell-task-title"><div><small>ӘРЕКЕТ 2/4 • CELL SCANNER</small><h3>Эукариот пен прокариотты зертте</h3><p>1. Үш құрылымды тап. 2. Екі жасушаны салыстыр. 3. Дұрыс қорытынды жаса.</p></div><b id="cellTaskScore">0/3 табылды</b></div>'+
    '<div class="cell-task-progress"><span id="scanCheckNucleus"><i>○</i> Ядро</span><span id="scanCheckMito"><i>○</i> Митохондрия</span><span id="scanCheckRibo"><i>○</i> Рибосома</span></div>'+
    '<div class="cell-task-stage"><div id="cellTaskModel" class="cell-model cell-task-model"><button class="organelle nucleus" aria-label="Ядро" onclick="cellTaskScan(this,\'nucleus\',\'Ядро\',\'ДНҚ сақтайды және жасуша жұмысын басқарады.\')"><span>ЯДРО</span></button><button class="organelle mito" aria-label="Митохондрия" onclick="cellTaskScan(this,\'mito\',\'Митохондрия\',\'Энергия өндіреді және жасушалық тыныс алуға қатысады.\')"><span>⚡</span></button><button class="organelle ribo" aria-label="Рибосома" onclick="cellTaskScan(this,\'ribo\',\'Рибосома\',\'Нәруыз синтездейді және екі жасуша типінде де болады.\')"><span>•</span></button><i class="float-dot d1"></i><i class="float-dot d2"></i><i class="float-dot d3"></i><em class="nucleoid">ДНҚ</em></div>'+
    '<div id="cellTaskInfo" class="scanner-info"><small>1-ҚАДАМ</small><b>Құрылымды таңда</b><p>Жасушаның ішіндегі ядроны, митохондрияны және рибосоманы бас.</p></div></div>'+
    '<button id="cellCompareStart" class="cell-task-primary" disabled onclick="startCellCompare()">🔒 Алдымен 3 құрылымды тап</button>'+
    '<div id="cellComparePanel" class="cell-compare-panel hidden"><div class="cell-compare-head"><div><small>2-ҚАДАМ</small><h3>Екі жасушаны кезекпен аш</h3></div><b id="cellCompareCount">0/2 қаралды</b></div><div class="console-switch"><button onclick="cellTaskMode(\'euk\',this)">Эукариот</button><button onclick="cellTaskMode(\'pro\',this)">Прокариот</button></div><div id="cellCompareInfo" class="cell-compare-info">Жасуша түрін таңдағанда оның негізгі ерекшелігі шығады.</div><div id="cellConclusion" class="cell-conclusion hidden"><small>3-ҚАДАМ • ДҰРЫС ҚОРЫТЫНДЫНЫ ТАҢДА</small><button onclick="cellTaskAnswer(this,false)">Екі жасушада да қалыптасқан ядро бар</button><button onclick="cellTaskAnswer(this,true)">Эукариотта ядро бар, прокариотта қалыптасқан ядро жоқ</button><button onclick="cellTaskAnswer(this,false)">Прокариотта мембрана мен рибосома болмайды</button></div></div>'+
    '<div id="cellTaskFeedback" class="flow-feedback">Сканерлеуді ядродан бастауға болады.</div>'+
    '<button id="cellTaskFinish" class="cell-task-finish" disabled onclick="finishCellTask()">Тапсырманы аяқтау ✓</button></div>';
}
function cellTaskScan(btn,key,title,text){
  document.querySelectorAll('.cell-task-model .organelle').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  cellTaskState.scanned.add(key);
  let check=$('scanCheck'+key.charAt(0).toUpperCase()+key.slice(1));
  if(check){check.classList.add('done');check.querySelector('i').textContent='✓'}
  $('cellTaskScore').textContent=cellTaskState.scanned.size+'/3 табылды';
  $('cellTaskInfo').innerHTML='<small>СКАНЕР НӘТИЖЕСІ</small><b>'+title+'</b><p>'+text+'</p>';
  if(cellTaskState.scanned.size===3){
    let start=$('cellCompareStart');start.disabled=false;start.textContent='Салыстыруды бастау →';
    $('cellTaskFeedback').textContent='✓ Үш құрылым табылды. Енді жасушаларды салыстыр.';
  }
}
function startCellCompare(){
  cellTaskState.compareOpen=true;
  $('cellComparePanel').classList.remove('hidden');
  $('cellCompareStart').classList.add('hidden');
  $('cellComparePanel').scrollIntoView({behavior:'smooth',block:'center'});
}
function cellTaskMode(mode,btn){
  cellTaskState.modes.add(mode);
  document.querySelectorAll('#cellComparePanel .console-switch button').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  $('cellTaskModel').classList.toggle('prokaryote',mode==='pro');
  $('cellCompareInfo').innerHTML=mode==='pro'?'<b>Прокариот</b><p>Қалыптасқан ядро мен мембраналы органоидтар жоқ. ДНҚ нуклеоидта орналасады. Мембрана мен рибосома бар.</p>':'<b>Эукариот</b><p>Қалыптасқан ядро және митохондрия сияқты мембраналы органоидтар бар.</p>';
  $('cellCompareCount').textContent=cellTaskState.modes.size+'/2 қаралды';
  if(cellTaskState.modes.size===2){
    $('cellConclusion').classList.remove('hidden');
    $('cellTaskFeedback').textContent='Екі жасуша қаралды. Енді дұрыс қорытындыны таңда.';
  }
}
function cellTaskAnswer(btn,ok){
  document.querySelectorAll('#cellConclusion button').forEach(x=>x.classList.remove('right','wrong'));
  btn.classList.add(ok?'right':'wrong');
  if(!ok)return $('cellTaskFeedback').textContent='Қате. Прокариотта мембрана мен рибосома бар, бірақ қалыптасқан ядро жоқ.';
  cellTaskState.answer=true;
  $('cellTaskFeedback').textContent='✓ Дұрыс! Негізгі айырмашылық ядро мен мембраналы органоидтарға байланысты.';
  $('cellTaskFinish').disabled=false;
}
function finishCellTask(){
  if(cellTaskState.scanned.size<3||cellTaskState.modes.size<2||!cellTaskState.answer)return toast('Тапсырманың барлық қадамын аяқта');
  $('cellTaskFinish').disabled=true;
  $('cellTaskFinish').textContent='✓ Тапсырма аяқталды';
  $('cellTaskFinish').classList.add('completed');
  flowDone(2,'Жасушаларды салыстыру тапсырмасы аяқталды!');
}
function flowSequencePick(btn,key,total,activity){
  let next=flowSequenceState[key]||0;
  if(Number(btn.dataset.order)!==next){
    btn.classList.add('wrong');
    setTimeout(()=>btn.classList.remove('wrong'),500);
    return toast('Ретін қайта тексер 🔄');
  }
  btn.classList.add('right');
  btn.disabled=true;
  flowSequenceState[key]=next+1;
  let score=$(key+'Score');
  if(score)score.textContent=(next+1)+'/'+total;
  if(next+1===total)flowDone(activity,'Реттілік дұрыс құрылды!');
}
function flowChain(btn,order,total){
  if(order!==flowChainStep)return toast('Энергия өндірушіден басталады 🌿');
  btn.classList.add('right');
  btn.disabled=true;
  flowChainStep++;
  if($('chainEnergy'))$('chainEnergy').style.width=(flowChainStep/total*100)+'%';
  if(flowChainStep===total){
    $('flowMainFeedback').textContent='✓ Энергияның қоректік тізбек бойымен берілуі дұрыс құрылды.';
    flowDone(2,'Қоректік тізбек дайын!');
  }
}
function ecoSim(){
  let t=+$('ecoTemp').value,l=+$('ecoLight').value,w=+$('ecoWater').value;
  let score=Math.max(8,100-Math.abs(t-24)*3-Math.abs(l-70)*.7-Math.abs(w-65)*.7);
  $('ecoScore').textContent=Math.round(score)+'%';
  $('ecoLife').style.setProperty('--life',Math.round(score)+'%');
  $('flowMainFeedback').textContent=score>82?'Теңгерім жақсы: тіршілік алуантүрлілігі артты.':'Факторларды тіршілікке қолайлы деңгейге жақындат.';
  if(score>82)flowDone(2,'Экожүйе тепе-теңдігі табылды!');
}
function impactAction(btn,value){
  let meter=$('impactMeter'),now=Number(meter.dataset.value||50);
  now=Math.max(0,Math.min(100,now+value));meter.dataset.value=now;
  meter.querySelector('i').style.width=now+'%';$('impactValue').textContent=now+'%';
  btn.disabled=true;btn.classList.add(value>0?'right':'wrong');
  if(now>=75){$('flowMainFeedback').textContent='✓ Қалпына келтіру әрекеттері экожүйе тұрақтылығын арттырды.';flowDone(2,'Экожүйе қорғалды!')}
}
function flowReveal(btn,text){
  btn.classList.add('right');
  $('flowMainFeedback').textContent=text;
  let box=btn.parentElement;
  if(box.querySelectorAll('button.right').length>=3)flowDone(2,'Барлық ғылыми нүкте зерттелді!');
}
function flowClassify(btn,ok){
  btn.classList.add(ok?'right':'wrong');btn.disabled=true;
  let box=btn.closest('.flow-game');
  let answered=box.querySelectorAll('.classify-card.right,.classify-card.wrong').length;
  if(answered===box.querySelectorAll('.classify-card').length){
    box.querySelector('.flow-feedback').textContent='✓ Нысандар белгілеріне қарай жіктелді.';
    flowDone(2,'Жіктеу аяқталды!');
  }
}
function dichotomy(answer){
  let step=$('dichoStep'),result=$('dichoResult');
  if(step.dataset.step==='1'){
    step.dataset.step='2';
    step.innerHTML=answer==='yes'?'<p>Омыртқа жотасы бар. Денесі қауырсынмен қапталған ба?</p><button onclick="dichotomyFinal(\'Құс\')">Иә</button><button onclick="dichotomyFinal(\'Балық немесе сүтқоректі\')">Жоқ</button>':'<p>Омыртқа жотасы жоқ. Бунақталған аяқтары бар ма?</p><button onclick="dichotomyFinal(\'Буынаяқты\')">Иә</button><button onclick="dichotomyFinal(\'Басқа омыртқасыз\')">Жоқ</button>';
  }
  result.textContent='Кілттің келесі тармағы ашылды...';
}
function dichotomyFinal(name){
  $('dichoResult').textContent='✓ Ағза тобы: '+name+'. Белгілер тізбегі арқылы анықталды.';
  flowDone(2,'Дихотомиялық кілт шешілді!');
}
function microscope7(){
  let z=+$('microZoom7').value,f=+$('microFocus7').value;
  $('microZoomValue7').textContent='×'+(z*40);
  $('microSpecimen7').style.transform='scale('+(1+z*.12)+')';
  $('microSpecimen7').style.filter='blur('+Math.abs(f-3)+'px)';
  if(z>=3&&f===3){$('flowMainFeedback').textContent='✓ Қабырға, пластид және вакуоль анық көрінді — бұл өсімдік жасушасы.';flowDone(2,'Микропрепарат анықталды!')}
}
function waterLab(){
  let heat=+$('waterHeat').value,salt=+$('waterSalt').value;
  $('waterTempValue').textContent=heat+'°C';
  $('waterDrop').style.transform='scale('+(1+salt/180)+')';
  $('flowMainFeedback').textContent=heat>70?'Температура артқанда булану жылдамдайды.':salt>60?'Еріген зат су қасиетіне әсер етті.':'Екі көрсеткішті өзгертіп, бақылау жаса.';
  if(heat>70&&salt>60)flowDone(2,'Судың екі қасиеті зерттелді!');
}
function mineralCase(btn,answer){
  let ok=answer==='nitrogen';
  flowChoice(btn,ok,2,'Сарғайған ескі жапырақтар азот тапшылығын көрсетті.');
}
function foodTest7(btn,reagent){
  let sample=$('foodSample7').value,correct=(sample==='bread'&&reagent==='iodine')||(sample==='egg'&&reagent==='biuret')||(sample==='oil'&&reagent==='paper');
  flowChoice(btn,correct,2,correct?'Реактив тағамдағы органикалық затты дәлелдеді.':'');
}
function fertilizerCase(btn,type){
  let symptom=$('plantSymptom').value;
  let correct={leaf:'nitrogen',root:'phosphorus',weak:'potassium'}[symptom]===type;
  flowChoice(btn,correct,2,'Тыңайтқыш өсімдік белгісіне сәйкес таңдалды.');
}
function kingdomPick(btn,kingdom){
  flowChoice(btn,kingdom==='fungi',2,'Хлорофилі жоқ, хитинді қабырғасы бар ағза — саңырауқұлақ.');
}
function vertebratePick(btn,type){
  flowChoice(btn,type==='vertebrate',2,'Омыртқа жотасы ішкі тірек қызметін атқарады.');
}
function quarterLock(btn,step,ok){
  if(!ok)return flowChoice(btn,false,2,'');
  btn.classList.add('right');btn.disabled=true;
  let lock=$('quarterLock');
  lock.dataset.open=Number(lock.dataset.open||0)+1;
  lock.querySelector('b').textContent=lock.dataset.open+'/3 құлып';
  if(Number(lock.dataset.open)===3){$('flowMainFeedback').textContent='🏆 Үш бөлімнің коды ашылды!';flowDone(2,'BIO BOSS жеңілді!')}
}

function warmupHTML(i){
  let l=lessons[i],other1=lessons[(i+5)%lessons.length].facts[0],other2=lessons[(i+9)%lessons.length].facts[1];
  let options=[{t:l.facts[0],ok:true},{t:other1,ok:false},{t:other2,ok:false}];
  options.sort((a,b)=>((i+a.t.length)%3)-((i+b.t.length)%3));
  return '<div class="flow-game flow-warmup">'+flowHead('ӘРЕКЕТ 1/4 • ЖЫЛЫТУ','Негізгі ұғымды 20 секундта тап','⚡')+
    '<p>Бүгінгі сабаққа тікелей қатысты ұғымды таңда.</p><div class="flow-choice-row">'+
    options.map(x=>'<button onclick="flowWarmup(this,'+x.ok+')">'+x.t+'</button>').join('')+
    '</div><div class="flow-feedback">Бір ғана дәл жауап бар.</div></div>';
}
function render7Main(i){
  let l=lessons[i],h=flowHead('ӘРЕКЕТ 2/4 • НЕГІЗГІ ОЙЫН',l.title,['🌍','🕸️','⏳','🏭','🗺️','🦌','👑','🐾','🔑','🧩','🔬','💧','🧪','🥗','🔐','🌱'][i]);
  if(i===0)return '<div class="flow-game">'+h+'<p>Температура, жарық және ылғалдылықты өзгертіп, биоалуантүрлілікті 82%-дан асыр.</p><div class="eco-console"><div id="ecoLife" class="eco-orb"><b id="ecoScore">28%</b><small>тіршілік</small></div><div><label>Температура <input id="ecoTemp" type="range" min="0" max="45" value="8" oninput="ecoSim()"></label><label>Жарық <input id="ecoLight" type="range" min="0" max="100" value="20" oninput="ecoSim()"></label><label>Ылғал <input id="ecoWater" type="range" min="0" max="100" value="25" oninput="ecoSim()"></label></div></div><div id="flowMainFeedback" class="flow-feedback">Экожүйе әзірге тұрақсыз.</div></div>';
  if(i===1)return '<div class="flow-game">'+h+'<p>Энергия ағынын өндірушіден жоғары деңгейлі тұтынушыға дейін құр.</p><div class="food-chain">'+['🌿 Өсімдік','🦗 Шегіртке','🐸 Бақа','🐍 Жылан','🦅 Бүркіт'].map((x,n)=>'<button onclick="flowChain(this,'+n+',5)">'+x+'</button>').join('<i>→</i>')+'</div><div class="chain-meter"><i id="chainEnergy"></i></div><div id="flowMainFeedback" class="flow-feedback">Алғашқы энергия көзін таңда.</div></div>';
  if(i===2)return '<div class="flow-game">'+h+'<p>Бос жыныстан тұрақты қауымдастыққа дейінгі сукцессияны ретте.</p>'+sequenceMarkup('succession',['Қына мен мүк','Шөптесін өсімдіктер','Бұталар','Орман'],2)+'</div>';
  if(i===3)return '<div class="flow-game">'+h+'<p>Экожүйе тұрақтылығын 75%-ға жеткіз. Әр әрекеттің салдарын бақыла.</p><div id="impactMeter" class="impact-meter" data-value="45"><i style="width:45%"></i><b id="impactValue">45%</b></div><div class="flow-choice-grid"><button onclick="impactAction(this,-25)">🏭 Тазартусыз өндіріс</button><button onclick="impactAction(this,20)">♻️ Қалдықты сұрыптау</button><button onclick="impactAction(this,25)">🌳 Орманды қалпына келтіру</button><button onclick="impactAction(this,-15)">🚗 Шығарындыларды арттыру</button></div><div id="flowMainFeedback" class="flow-feedback">Шешімдердің экожүйеге әсерін есепте.</div></div>';
  if(i===4)return '<div class="flow-game">'+h+'<p>Қорғалатын аумақтың үш ғылыми нүктесін аш.</p><div class="map-hotspots"><button onclick="flowReveal(this,\'Қорықта табиғи үдерістер қатаң қорғалады.\')">📍 Қорық</button><button onclick="flowReveal(this,\'Ұлттық парк табиғатты қорғау мен танымдық демалысты үйлестіреді.\')">📍 Ұлттық парк</button><button onclick="flowReveal(this,\'Қорықша белгілі түрді немесе табиғи нысанды қорғайды.\')">📍 Қорықша</button></div><div id="flowMainFeedback" class="flow-feedback">Картадағы нүктелерді зертте.</div></div>';
  if(i===5)return '<div class="flow-game">'+h+'<p>Қорғауды қажет ететін нысандарды анықта.</p><div class="classify-grid"><button class="classify-card" onclick="flowClassify(this,true)">🐆 Қар барысы<br><small>сирек түр</small></button><button class="classify-card" onclick="flowClassify(this,false)">🐄 Үй сиыры<br><small>үй жануары</small></button><button class="classify-card" onclick="flowClassify(this,true)">🌷 Грейг қызғалдағы<br><small>сирек түр</small></button></div><div class="flow-feedback">Әр карточканы бағала.</div></div>';
  if(i===6)return '<div class="flow-game">'+h+'<p>Белгілері: хлорофилі жоқ, дайын органикалық затпен қоректенеді, қабырғасы хитинді.</p><div class="kingdom-wheel"><button onclick="kingdomPick(this,\'plants\')">🌿 Өсімдіктер</button><button onclick="kingdomPick(this,\'fungi\')">🍄 Саңырауқұлақтар</button><button onclick="kingdomPick(this,\'animals\')">🦋 Жануарлар</button><button onclick="kingdomPick(this,\'protists\')">🦠 Протисталар</button></div><div class="flow-feedback">Патшалықты анықта.</div></div>';
  if(i===7)return '<div class="flow-game">'+h+'<div class="specimen-scan"><div>🐟<i></i></div><p><b>SCAN_07</b><br>Ішкі қаңқасы және омыртқа жотасы анықталды.</p></div><div class="flow-choice-row"><button onclick="vertebratePick(this,\'invertebrate\')">Омыртқасыз</button><button onclick="vertebratePick(this,\'vertebrate\')">Омыртқалы</button></div><div class="flow-feedback">Құрылыс белгісіне сүйен.</div></div>';
  if(i===8)return '<div class="flow-game">'+h+'<p>Белгісіз ағзаны екі тармақты кілт арқылы анықта.</p><div id="dichoStep" class="dicho-step" data-step="1"><p>Ағзада омыртқа жотасы бар ма?</p><button onclick="dichotomy(\'yes\')">Иә</button><button onclick="dichotomy(\'no\')">Жоқ</button></div><div id="dichoResult" class="flow-feedback">Бірінші белгіні таңда.</div></div>';
  if(i===9)return '<div class="flow-game">'+h+'<p>Тірі ағзаның құрылымдық деңгейлерін кішіден үлкенге қарай орналастыр.</p>'+sequenceMarkup('hierarchy',['Жасуша','Ұлпа','Мүше','Мүшелер жүйесі','Ағза'],2)+'</div>';
  if(i===10)return '<div class="flow-game">'+h+'<p>Үлкейту мен фокусты реттеп, жасуша түрін анықта.</p><div class="micro7"><div><span id="microSpecimen7">▦ ◉ ▦<br>◉ ▦ ◉</span></div><section><label>Үлкейту <input id="microZoom7" type="range" min="1" max="4" value="1" oninput="microscope7()"><b id="microZoomValue7">×40</b></label><label>Фокус <input id="microFocus7" type="range" min="0" max="6" value="0" oninput="microscope7()"></label></section></div><div id="flowMainFeedback" class="flow-feedback">×120 және фокус 3 маңын тексер.</div></div>';
  if(i===11)return '<div class="flow-game">'+h+'<p>Температура мен еріген зат мөлшерін өзгертіп, су қасиеттерін бақыла.</p><div class="water-console"><div id="waterDrop">💧</div><section><label>Температура <input id="waterHeat" type="range" min="0" max="100" value="20" oninput="waterLab()"><b id="waterTempValue">20°C</b></label><label>Еріген зат <input id="waterSalt" type="range" min="0" max="100" value="10" oninput="waterLab()"></label></section></div><div id="flowMainFeedback" class="flow-feedback">Екі көрсеткішті зертте.</div></div>';
  if(i===12)return '<div class="flow-game">'+h+'<div class="case-card"><span>🪴</span><div><small>БИОЛОГИЯЛЫҚ ДЕТЕКТИВ</small><h3>Өсімдіктің ескі жапырақтары сарғайып, өсуі баяулады.</h3></div></div><div class="flow-choice-row"><button onclick="mineralCase(this,\'iron\')">Темір</button><button onclick="mineralCase(this,\'nitrogen\')">Азот</button><button onclick="mineralCase(this,\'fluorine\')">Фтор</button></div><div class="flow-feedback">Белгі бойынша элементті анықта.</div></div>';
  if(i===13)return '<div class="flow-game">'+h+'<p>Тағам үлгісі мен оған сәйкес реактивті таңда.</p><select id="foodSample7"><option value="bread">🍞 Нан</option><option value="egg">🥚 Жұмыртқа</option><option value="oil">🧈 Өсімдік майы</option></select><div class="reagent-rack"><button onclick="foodTest7(this,\'iodine\')">🟤 Йод</button><button onclick="foodTest7(this,\'biuret\')">🟣 Биурет</button><button onclick="foodTest7(this,\'paper\')">⚪ Қағаз</button></div><div class="flow-feedback">Дұрыс реактив айқын белгі береді.</div></div>';
  if(i===14)return '<div class="flow-game">'+h+'<p>Үш бөлім бойынша ғылыми құлыптарды аш.</p><div id="quarterLock" class="quarter-lock" data-open="0"><b>0/3 құлып</b><div><button onclick="quarterLock(this,1,true)">Экожүйе: өндіруші</button><button onclick="quarterLock(this,2,true)">Жүйелеу: патшалық</button><button onclick="quarterLock(this,3,true)">Жасуша: мембрана</button></div></div><div id="flowMainFeedback" class="flow-feedback">BIO BOSS үш дұрыс код күтеді.</div></div>';
  return '<div class="flow-game">'+h+'<div class="plant-clinic"><span>🌱</span><select id="plantSymptom"><option value="leaf">Жапырақ сарғайды</option><option value="root">Тамыр нашар дамыды</option><option value="weak">Өсімдік әлсіз</option></select></div><div class="flow-choice-row"><button onclick="fertilizerCase(this,\'nitrogen\')">N — азот</button><button onclick="fertilizerCase(this,\'phosphorus\')">P — фосфор</button><button onclick="fertilizerCase(this,\'potassium\')">K — калий</button></div><div class="flow-feedback">Белгіге сәйкес тыңайтқышты таңда.</div></div>';
}
function sequenceMarkup(key,items,activity){
  let shuffled=items.map((x,i)=>({x,i})).sort((a,b)=>((a.i*7+3)%items.length)-((b.i*7+3)%items.length));
  return '<div class="flow-sequence">'+shuffled.map(o=>'<button data-order="'+o.i+'" onclick="flowSequencePick(this,\''+key+'\','+items.length+','+activity+')"><i>'+(o.i+1)+'</i>'+o.x+'</button>').join('')+'</div><div class="flow-feedback"><b id="'+key+'Score">0/'+items.length+'</b> Бірінші кезеңнен баста.</div>';
}
function render7Lab(i){
  let l=lessons[i],type=i%4,h=flowHead('ӘРЕКЕТ 3/4 • ҚОЛДАНУ','Мини-зертхана: '+l.facts[0],['🧪','📊','🧭','📓'][type]);
  if(type===0)return '<div class="flow-game">'+h+'<p>Үш дәлелді кезекпен ашып, оқу мақсатына қорытынды жаса.</p><div class="evidence-board">'+l.facts.map((x,n)=>'<button onclick="flowEvidence(this,\''+x.replace(/'/g,'’')+'\')">Дәлел '+(n+1)+'</button>').join('')+'</div><div id="labEvidence" class="lab-evidence">Дәлелдер осында жиналады.</div><div class="flow-feedback">3/3 дәлел ашылғанда зертхана аяқталады.</div></div>';
  if(type===1)return '<div class="flow-game">'+h+'<p>Зерттеу әдісінің кезеңдерін дұрыс ретке келтір.</p>'+sequenceMarkup('lab'+i,['Болжам құру','Бақылау жүргізу','Дерек жинау','Қорытынды жасау'],3)+'</div>';
  if(type===2)return '<div class="flow-game">'+h+'<p>Ғылыми есепке ең сенімді дәлелді таңда.</p><div class="case-decision"><article><small>БАҚЫЛАУ</small><b>'+l.theory+'</b></article><button onclick="flowChoice(this,true,3,\'Бақылауға сүйенген қорытынды таңдалды.\')">Өлшенген дерек пен белгілерге сүйену</button><button onclick="flowChoice(this,false,3,\'\')">Тек алғашқы болжамды қабылдау</button></div><div class="flow-feedback">Дәлелді шешім қажет.</div></div>';
  return '<div class="flow-game">'+h+'<p>'+l.goal+'</p><div class="lab-console"><textarea id="flowLabNote" maxlength="220" placeholder="Бақылауым...&#10;Дәлелім...&#10;Қорытындым..."></textarea><button onclick="saveFlowLab()">Зерттеу жазбасын сақтау</button></div><div class="flow-feedback">Кемінде 20 таңбадан тұратын қорытынды жаз.</div></div>';
}
function flowEvidence(btn,text){
  if(btn.disabled)return;
  btn.disabled=true;btn.classList.add('right');flowEvidenceCount++;
  $('labEvidence').innerHTML+='<span>'+text+'</span>';
  if(flowEvidenceCount>=3)flowDone(3,'Үш дәлел жиналды!');
}
function saveFlowLab(){
  let note=$('flowLabNote').value.trim();
  if(note.length<20)return toast('Қорытындыны кемінде 20 таңбамен жаз');
  flowDone(3,'Зерттеу журналы сақталды!');
  $('flowLabNote').disabled=true;
}
function flowAdaptiveReview(target){
  gotoStage(target==='theory'?1:1,true);
  setTimeout(()=>document.getElementById(target==='theory'?'lessonTheory':'practice')?.scrollIntoView({behavior:'smooth',block:'center'}),250);
}
function installFlowSuite(i){
  flowActivities={1:false,2:false,3:false,4:false};
  flowSequenceState={};flowChainStep=0;flowEvidenceCount=0;
  cellTaskState={scanned:new Set(),modes:new Set(),answer:false,compareOpen:false};
  let old=$('flowActivityMeter');if(old)old.remove();
  let meter='<div id="flowActivityMeter" class="flow-activity-meter"><div><small>САБАҚТАҒЫ БЕЛСЕНДІЛІК</small><b id="flowActivityCount">0/4 аяқталды</b></div>'+
    [1,2,3,4].map((n)=>'<span id="flowAct'+n+'"><i>'+n+'</i><em>'+['Білу','Қолдану','PISA','Бағалау'][n-1]+'</em></span>').join('')+'</div>';
  let command=document.querySelector('.lesson-command');
  if(command)command.insertAdjacentHTML('afterend',meter);
  let start=document.querySelector('#stageStart .stage-question');
  if(start)start.insertAdjacentHTML('beforebegin',warmupHTML(i));
  /* Негізгі және PISA тапсырмаларын curriculum-engine нақты нәтиже бойынша белгілейді. */
}

const flowBaseInteractive=interactiveHTML;
interactiveHTML=function(i){
  if(selectedGrade===7)return render7Main(i);
  if(selectedGrade===8&&i===0)return cellScanTaskHTML();
  return flowBaseInteractive(i);
};
const flowBaseLab=labHTML;
labHTML=function(i){
  if(selectedGrade===7)return render7Lab(i);
  return flowBaseLab(i);
};
const flowBaseOpenLesson=openLesson;
openLesson=function(i){
  flowBaseOpenLesson(i);
  installFlowSuite(i);
};
const flowBaseStart=completeStartStage;
completeStartStage=function(){
  if(!flowActivities[1])return toast('Алдымен 1/4 жылыту ойынын аяқта ⚡');
  flowBaseStart();
};
const flowBaseMiddle=completeMiddleStage;
completeMiddleStage=function(){
  if(!flowActivities[2]||!flowActivities[3])return toast('Негізгі ойын мен зертхананы орында 🧪');
  flowBaseMiddle();
};
const flowBaseSubmit=submitQuiz;
submitQuiz=function(){
  flowBaseSubmit();
  if(quizScore!==null){
    flowDone(4,'4/4 әрекет аяқталды!');
    if(quizScore<70&&$('quizResult'))$('quizResult').insertAdjacentHTML('beforeend','<div class="adaptive-help"><span>🧠</span><div><small>ЖЕКЕ ҚОЛДАУ</small><b>Оқу мақсатын бекіту қажет</b><p>'+lessons[currentLesson].goal+'</p></div><button onclick="flowAdaptiveReview(\'theory\')">Теорияға оралу</button><button onclick="flowAdaptiveReview(\'practice\')">Ойынды қайталау</button></div>');
  }
};

(function installPlatformShowcase(){
  let stats=document.querySelectorAll('.trust-row span');
  if(stats[0])stats[0].innerHTML='<b>32</b><small>интерактивті сабақ</small>';
  if(stats[1])stats[1].innerHTML='<b>16</b><small>ойын механикасы</small>';
  if(stats[2])stats[2].innerHTML='<b>128</b><small>оқу әрекеті</small>';
  let intro=document.querySelector('#home .section-head p');
  if(intro)intro.textContent='45 минуттық сабақтың үш кезеңінде төрт цифрлық әрекет орындалады.';
  let cards=document.querySelectorAll('#home .flow-grid article');
  let copy=[['⚡','Жылыту','Негізгі ұғымды жылдам тауып, тақырыпқа қызығушылық оят.'],['🎮','Негізгі ойын','Сәйкестендір, құрастыр, сұрыпта немесе ғылыми құлыпты аш.'],['🧪','Зертхана','Симуляция жасап, дерек жинап, дәлелді қорытынды шығар.'],['🧠','Бағалау','Нәтижеңді тексеріп, жеке қолдау немесе келесі миссияны ал.']];
  cards.forEach((card,i)=>{if(!copy[i])return;card.querySelector('i').textContent=copy[i][0];card.querySelector('h3').textContent=copy[i][1];card.querySelector('p').textContent=copy[i][2]});
  let grid=document.querySelector('#home .flow-grid');
  if(grid&&!document.querySelector('.mechanics-showcase'))grid.insertAdjacentHTML('afterend','<div class="mechanics-showcase"><div><small>16 ОЙЫН МЕХАНИКАСЫ</small><h3>Әр сабақта — басқа ғылыми тәжірибе</h3></div><span>🌍 Симулятор</span><span>🕸️ Конструктор</span><span>🔑 Дихотомиялық кілт</span><span>🔬 Микроскоп</span><span>🧪 Реактивтер</span><span>🔐 BIO Escape</span></div>');
})();
