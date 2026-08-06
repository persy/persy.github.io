/* =========================================================
   CONFIGURAZIONE PROGETTI — modifica solo questo array

   - desc: descrizione breve, mostrata nella lista PROGETTI
   - longDesc: descrizione piu' lunga, mostrata nella pagina di
     dettaglio con la stessa animazione "a scrittura" del boot.
     Ogni riga dell'array e' una riga di testo (usa "" per una riga
     vuota, cioe' uno spazio tra paragrafi)
   - image: immagine mostrata in fondo alla pagina di dettaglio
     (passa dal filtro verde automaticamente)
   ========================================================= */
const PROJECTS = [
  {
    name: "PICCOLI PRONTUARI",
    desc: "Prontuari didattici, per ogni materia del liceo",
    longDesc: [
      "PICCOLI PRONTUARI",
      "",
      "I Piccoli Prontuari compongono un progetto a scopo didattico, rivolto a tutte le classi della scuola secondaria di secondo grado.",
      "Con uno stile breve e conciso, una grafica minimale ma funzionale, i Piccoli Prontuari sono ideali per fare un breve e veloce ripasso e coprire eventuali lacune.",
      "Le materie trattate spaziando dalla biologia alla matematica, dalla letteratura alla storia, dalla filosofia alla storia dell'arte.",
      "",
    ],
    image: "assets/images/progetto_01.webp",
    url: "https://persy.github.io/piccoli_prontuari/"
  },
  {
    name: "WIKIBIGINO",
    desc: "Un'enciclopedia condensata per tutti",
    longDesc: [
      "WIKIBIGINO",
      "",
      "Il Wikibigino (wiki, veloce; bigino, manualetto riassuntivo) è una versione semplificata e non ufficiale di Wikipedia Italia.",
      "Rivolto soprattutto agli studenti delle scuole secondarie di primo e secondo grado, il progetto trae ispirazione dalle enciclopedie multimediali del passato e comprende un numero limitato di voci, coprendo la maggior parte dei temi trattati a scuola attraverso testi sintetici e di facile fruizione."
    ],
    image: "assets/images/progetto_02.webp",
    url: "https://wikibigino.miraheze.org/wiki/Pagina_principale"
  },
  {
    name: "WASTELANDER",
    desc: "Una breve e concisa Wiki su Fallout 3 e Fallout: New Vegas",
    longDesc: [
      "WASTELANDER",
      "",
      "Wastelander è un sito nato dalle ceneri della Wiki italiana di Fallout: New Vegas, costruita in anni e anni di fatica e sudore, cancellata da Fandom nel 2019.",
      "Completamente autonomo, il sito raccoglie tutti i testi che ho personalmente redatto, ulteriormente aggiornati e ampliati con la sezione che riguarda Fallout 3, DLC inclusi.",
      "",
      "La partita era truccata dall'inizio...",
      "...ma qualcuno è risorto dalla tomba."

    ],
    image: "assets/images/progetto_03.webp",
    url: "https://wastelander.netlify.app/"
  }
];

/* =========================================================
   CONFIGURAZIONE S.P.E.C.I.A.L. — testo lungo, stessa animazione
   "a scrittura" dei progetti. Ogni riga dell'array e' una riga di
   testo (usa "" per una riga vuota tra paragrafi).
   ========================================================= */
const SPECIAL_TEXT = [
  "S.P.E.C.I.A.L.",
  "",
  "Sbaio strada se vado drito,",
  "Paso sul molo a vardar el mar.",
  "E quando la bora de sufiar ga finito",
  "Civa e rasnici me vado a magnar.",
  "Iera ranzidi e'l piato cragnoso:", 
  "A casa corendo fadigo a tornar,",
  "La panza me diol, me cago doso."
];

/* =========================================================
   CONFIGURAZIONE SOCIAL

   - socialText: breve testo introduttivo, animato come sopra
     (lascia l'array vuoto [] per saltarlo del tutto)
   - SOCIALS: la tabella icona/nickname. "icon" e' una classe
     FontAwesome (es. "fa-brands fa-github", "fa-brands fa-instagram",
     "fa-brands fa-linkedin", "fa-solid fa-envelope"...). Elenco
     completo delle icone disponibili: https://fontawesome.com/icons
   ========================================================= */
const SOCIAL_TEXT = [
  "SOCIAL",
  "", 
  ];
const SOCIALS = [
  { icon: "fa-brands fa-github",    name: "persy",       url: "https://github.com/persy" },  
  { icon: "fa-brands fa-instagram", name: "@persycchiotto",     url: "https://instagram.com/persycchiotto" },
  { icon: "fa-solid fa-envelope",   name: "marco.persy",    url: "mailto:marco.persy@gmail.com" }
];

/* =========================================================
   AUDIO — file reali (mp3/wav), nessun suono sintetizzato.

   METTI I TUOI FILE in una cartella "assets/sounds/" accanto a index.html,
   con questi nomi esatti (o cambia i percorsi qui sotto):

   assets/sounds/boot-start.{mp3|wav}   -> un suono, riprodotto UNA VOLTA
                                     quando parte il boot
   assets/sounds/line.{mp3|wav}         -> un suono, riprodotto per OGNI
                                     riga che scorre nel boot
   assets/sounds/select.{mp3|wav}       -> un suono, riprodotto quando si
                                     seleziona/apre una voce
   assets/sounds/move-1.{mp3|wav}
   assets/sounds/move-2.{mp3|wav}
   assets/sounds/move-3.{mp3|wav}
   assets/sounds/move-4.{mp3|wav}
   assets/sounds/move-5.{mp3|wav}
   assets/sounds/move-6.{mp3|wav}       -> 6 suoni: ad ogni spostamento
                                     (freccia su/giu o hover) ne
                                     viene scelto uno a caso
   assets/sounds/back.{mp3|wav}         -> un suono, riprodotto quando si
                                     torna indietro (pulsante o ESC)

   assets/sounds/ambient.{mp3|wav}      -> musica di sottofondo in loop, parte
                                     al termine del boot (un solo file per
                                     tutte le pagine; default: page-home.mp3)
   ========================================================= */
const SOUNDS = {
  bootStart: "assets/sounds/boot-start.mp3",
  line:      "assets/sounds/line.mp3",
  select:    "assets/sounds/select.mp3",
  back:      "assets/sounds/back.mp3",
  ambient:   "assets/sounds/ambient.mp3",
  move: [
    "assets/sounds/move-1.mp3",
    "assets/sounds/move-2.mp3",
    "assets/sounds/move-3.mp3",
    "assets/sounds/move-4.mp3",
    "assets/sounds/move-5.mp3",
    "assets/sounds/move-6.mp3"
  ]
};

const AMBIENT_VOLUME = 0.85;

// volumi separati, 0 (muto) - 1 (massimo)
const SOUND_VOLUME = {
  bootStart: 0.7,
  line: 0.5,
  select: 0.6,
  back: 0.6,
  move: 0.45
};

// brevi: pool riutilizzato. sottofondo: un solo elemento in loop.
const ONE_SHOT_POOL_SIZE = 8;
const oneShotPool = Array.from({ length: ONE_SHOT_POOL_SIZE }, () => new Audio());
let oneShotPoolIndex = 0;

function playSound(src, vol = 0.6){
  const a = oneShotPool[oneShotPoolIndex];
  oneShotPoolIndex = (oneShotPoolIndex + 1) % ONE_SHOT_POOL_SIZE;
  try{
    a.pause();
    a.src = src;
    a.currentTime = 0;
    a.volume = vol;
    a.play().catch(() => {});
  }catch(e){}
}

function sndBootStart(){ playSound(SOUNDS.bootStart, SOUND_VOLUME.bootStart); }
const sndLine   = () => playSound(SOUNDS.line, SOUND_VOLUME.line);
const sndSelect = () => playSound(SOUNDS.select, SOUND_VOLUME.select);
const sndBack   = () => playSound(SOUNDS.back, SOUND_VOLUME.back);
function sndMove(){
  const files = SOUNDS.move;
  const pick = files[Math.floor(Math.random() * files.length)];
  playSound(pick, SOUND_VOLUME.move);
}

const bgMusicEl = new Audio();
bgMusicEl.loop = true;
bgMusicEl.volume = AMBIENT_VOLUME;
let musicMuted = true; // parte muto: si avvia solo premendo il pulsante [ AUDIO ]
let bgMusicNeedsUnlock = false;

function updateMuteButton(){
  const btn = document.getElementById("mute-btn");
  if(!btn) return;
  btn.textContent = musicMuted ? "[ AUDIO: OFF ]" : "[ AUDIO: ON ]";
}

function startBackgroundMusic(){
  if(musicMuted || !SOUNDS.ambient) return;
  if(!bgMusicEl.src || !bgMusicEl.src.endsWith(SOUNDS.ambient)){
    bgMusicEl.src = SOUNDS.ambient;
  }
  bgMusicEl.play().catch(err => {
    if(err.name === "NotAllowedError") bgMusicNeedsUnlock = true;
  });
}

function setMusicMuted(muted){
  musicMuted = muted;
  updateMuteButton();
  if(musicMuted){
    bgMusicEl.pause();
  }else{
    startBackgroundMusic();
  }
}

function toggleMute(){
  setMusicMuted(!musicMuted);
  sndSelect();
}

function unlockBackgroundMusic(){
  if(!bgMusicNeedsUnlock) return;
  bgMusicNeedsUnlock = false;
  startBackgroundMusic();
}
document.addEventListener("pointerdown", unlockBackgroundMusic);
document.addEventListener("keydown", unlockBackgroundMusic);

/* =========================================================
   BOOT SEQUENCE (veloce, cursore a blocco)
   ========================================================= */
const bootLines = [
  "ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL",
  "COPYRIGHT 2075-2077 ROBCO INDUSTRIES",
  "-Server 1-",
  "",
  "INITIALIZING HARDWARE...........OK",
  "CHECKING MEMORY BANKS...........OK",
  "LOADING TERMLINK PROTOCOL.......OK",
  "ESTABLISHING CONNECTION.........OK",
  "",
  "SET TERMINAL/INQUIRE",
  "RUNNING PERSONAL_TERMINAL.EXE",
  ""
];

const CHAR_DELAY = 10;    // ms per carattere
const LINE_PAUSE = 150;   // ms di pausa tra una riga e la successiva
const START_DELAY = 250; // ms prima di iniziare a scrivere

const bootEl = document.getElementById("boot");

function escapeHtml(str){
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function renderTyped(el, lines, upTo, partial){
  const done = lines.slice(0, upTo).map(escapeHtml).join("\n");
  const sep = upTo > 0 ? "\n" : "";
  el.innerHTML = done + sep + escapeHtml(partial) + '<span class="cursor"></span>';
}

// scrive "lines" dentro "el" con la stessa animazione del boot (suoni + cursore).
// "isCurrent" e' un controllo opzionale: se torna false, l'animazione si
// interrompe (serve per non continuare a scrivere se nel frattempo l'utente
// e' gia' andato via dalla pagina).
function typeText(el, lines, cb, isCurrent = () => true){
  function typeLineAt(i){
    if(!isCurrent()) return;
    if(i >= lines.length){ cb(); return; }
    const line = lines[i];
    sndLine();
    let c = 0;
    function step(){
      if(!isCurrent()) return;
      renderTyped(el, lines, i, line.slice(0, c));
      c++;
      if(c <= line.length){
        setTimeout(step, line === "" ? 0 : CHAR_DELAY);
      }else{
        setTimeout(() => typeLineAt(i + 1), LINE_PAUSE);
      }
    }
    step();
  }
  typeLineAt(0);
}

function startBoot(){
  sndBootStart();
  let finished = false;
  function finishBoot(){
    if(finished) return;
    finished = true;
    document.removeEventListener("keydown", skipBoot);
    document.removeEventListener("pointerdown", skipBoot);
    bootEl.style.display = "none";
    document.getElementById("app").style.display = "flex";
    initApp();
  }
  function skipBoot(){ finishBoot(); }
  document.addEventListener("keydown", skipBoot);
  document.addEventListener("pointerdown", skipBoot);

  setTimeout(() => {
    typeText(bootEl, bootLines, () => {
      setTimeout(finishBoot, 200);
    }, () => !finished);
  }, START_DELAY);
}

/* =========================================================
   APP / NAVIGAZIONE A PAGINE (home + sottopagine)
   ========================================================= */
let currentPage = "home";
let currentItem = 0;
let detailTypingToken = 0; // usato per interrompere la scrittura animata se si esce dalla pagina
let pageHistory = []; // pila delle pagine visitate, per un INDIETRO che torni al livello giusto (non sempre alla home)

function renderProjects(){
  const panel = document.getElementById("progetti-list");
  panel.innerHTML = "";
  PROJECTS.forEach((p, idx) => {
    const div = document.createElement("div");
    div.className = "item";
    div.dataset.index = idx;
    div.innerHTML = `<div>&gt; ${p.name}<span class="desc">${p.desc}</span></div>`;
    div.addEventListener("click", () => {
      currentItem = idx;
      updateSelection();
      sndSelect();
      showProjectDetail(idx);
    });
    div.addEventListener("mouseenter", () => {
      if(currentItem !== idx){ currentItem = idx; updateSelection(); updateHeroImage(); sndMove(); }
    });
    panel.appendChild(div);
  });
}

function renderSocials(){
  const panel = document.getElementById("social-list");
  panel.innerHTML = "";
  SOCIALS.forEach((s, idx) => {
    const div = document.createElement("div");
    div.className = "item social-item pending";
    div.dataset.index = idx;
    div.innerHTML = `<i class="${s.icon}"></i><span class="social-name">${s.name}</span>`;
    div.addEventListener("click", () => {
      currentItem = idx;
      updateSelection();
      sndSelect();
      window.open(s.url, "_blank");
    });
    div.addEventListener("mouseenter", () => {
      if(currentItem !== idx){ currentItem = idx; updateSelection(); sndMove(); }
    });
    panel.appendChild(div);
  });
}

function getItemsForPage(page){
  let items;
  if(page === "home") items = Array.from(document.querySelectorAll("#home-menu .item"));
  else {
    const list = page === "progetti" ? Array.from(document.querySelectorAll("#progetti-list .item"))
               : page === "social"   ? Array.from(document.querySelectorAll("#social-list .item"))
               : [];
    const navBtns = Array.from(document.querySelectorAll(`#page-${page} .back-row button`));
    items = [...list, ...navBtns];
  }
  const muteBtn = document.getElementById("mute-btn");
  if(muteBtn) items = [...items, muteBtn];
  return items;
}

function setHeroImage(imgId, src){
  const img = document.getElementById(imgId);
  if(!img) return;
  const fallback = img.nextElementSibling;
  if(img.dataset.currentSrc === (src || "")) return;
  img.dataset.currentSrc = src || "";
  img.style.opacity = "0";
  setTimeout(() => {
    if(src){
      img.style.display = "";
      fallback.style.display = "none";
      img.src = src;
    }else{
      img.style.display = "none";
      fallback.style.display = "flex";
    }
    img.style.opacity = "1";
  }, 150);
}

function updateSelection(){
  const items = getItemsForPage(currentPage);
  items.forEach((el, idx) => el.classList.toggle("selected", idx === currentItem));
}

// aggiorna l'icona (home o progetti) in base alla voce evidenziata:
// hover del mouse o frecce, e anche subito quando si entra nella pagina
// (la prima voce e' comunque gia' selezionata di default).
function updateHeroImage(){
  if(currentPage === "home"){
    const items = Array.from(document.querySelectorAll("#home-menu .item"));
    if(items[currentItem]) setHeroImage("home-hero-img", items[currentItem].dataset.image);
    return;
  }
  if(currentPage === "progetti"){
    const items = Array.from(document.querySelectorAll("#progetti-list .item"));
    const idx = Number(items[currentItem]?.dataset?.index);
    setHeroImage("progetti-hero-img", PROJECTS[idx]?.image);
  }
}

// scrive "lines" con la stessa animazione/suoni del boot dentro l'elemento
// con id "elId", interrompendosi da sola se nel frattempo si e' cambiata
// pagina (stesso meccanismo usato per il dettaglio progetto). "onDone" e'
// un callback opzionale eseguito a scrittura completata.
function typePageText(elId, lines, onDone){
  const el = document.getElementById(elId);
  if(!el || !lines || !lines.length){ if(el) el.innerHTML = ""; if(onDone) onDone(); return; }
  const myToken = detailTypingToken; // (showPage l'ha gia' incrementato)
  el.innerHTML = "";
  sndBootStart();
  typeText(el, lines, () => { if(onDone) onDone(); }, () => detailTypingToken === myToken);
}

// rivela le righe della lista SOCIAL una alla volta (icona+nickname),
// con lo stesso suono/ritmo delle righe di testo, invece di mostrarle
// tutte insieme in un colpo solo
function revealSocialRows(){
  const myToken = detailTypingToken;
  const rows = Array.from(document.querySelectorAll("#social-list .item"));
  function revealAt(i){
    if(detailTypingToken !== myToken || i >= rows.length) return;
    sndLine();
    rows[i].classList.remove("pending");
    setTimeout(() => revealAt(i + 1), LINE_PAUSE + 150);
  }
  revealAt(0);
}

function showPage(page, opts = {}){
  if(!opts.fromHistory && page !== currentPage){
    pageHistory.push(currentPage);
  }
  currentPage = page;
  currentItem = 0;
  detailTypingToken++; // invalida qualunque scrittura animata ancora in corso
  document.querySelectorAll(".page").forEach(el => el.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  updateSelection();
  updateHeroImage();
  if(page === "special") typePageText("special-text", SPECIAL_TEXT);
  if(page === "social"){
    document.querySelectorAll("#social-list .item").forEach(r => r.classList.add("pending"));
    typePageText("social-text", SOCIAL_TEXT, revealSocialRows);
  }
}

function goBack(){
  if(pageHistory.length){
    sndBack();
    const prev = pageHistory.pop();
    showPage(prev, { fromHistory: true });
  }
}

function showProjectDetail(idx){
  const p = PROJECTS[idx];
  showPage("progetto-detail");

  setHeroImage("detail-hero-img", p.image);

  const siteBtn = document.getElementById("progetto-detail-site");
  siteBtn.onclick = () => window.open(p.url, "_blank");

  // seleziona di default [ VAI AL SITO ] invece di [ INDIETRO ]
  const items = getItemsForPage("progetto-detail");
  const siteIdx = items.indexOf(siteBtn);
  if(siteIdx !== -1){ currentItem = siteIdx; updateSelection(); }

  typePageText("progetto-detail-text", p.longDesc || [p.desc]);
}

function activateSelected(){
  const items = getItemsForPage(currentPage);
  if(items[currentItem]){
    items[currentItem].click();
  }
}

function updateClock(){
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString("it-IT");
}

function initApp(){
  renderProjects();
  renderSocials();
  showPage("home");
  updateClock();
  setInterval(updateClock, 1000);
  updateMuteButton();

  document.getElementById("mute-btn").addEventListener("click", toggleMute);

  // click sulle voci del menu home -> apre la sottopagina
  document.querySelectorAll("#home-menu .item").forEach((el, idx) => {
    el.addEventListener("click", () => {
      currentItem = idx;
      updateSelection();
      sndSelect();
      showPage(el.dataset.target);
    });
    el.addEventListener("mouseenter", () => {
      if(currentPage === "home" && currentItem !== idx){
        currentItem = idx; updateSelection(); updateHeroImage(); sndMove();
      }
    });
  });

  // pulsante INDIETRO su ogni sottopagina (il pulsante VAI AL SITO ha il suo
  // handler a parte, impostato in showProjectDetail())
  document.querySelectorAll("[data-back]").forEach(btn => {
    btn.addEventListener("click", goBack);
  });

  document.addEventListener("keydown", (e) => {
    if(e.key === "m" || e.key === "M"){
      toggleMute();
      return;
    }
    const items = getItemsForPage(currentPage);
    switch(e.key){
      case "ArrowUp":
      case "ArrowLeft":
        if(items.length){ currentItem = (currentItem - 1 + items.length) % items.length; updateSelection(); updateHeroImage(); sndMove(); }
        break;
      case "ArrowDown":
      case "ArrowRight":
        if(items.length){ currentItem = (currentItem + 1) % items.length; updateSelection(); updateHeroImage(); sndMove(); }
        break;
      case "Enter":
        activateSelected(); break;
      case "Escape":
      case "Backspace":
        goBack(); break;
    }
  });
}

startBoot();