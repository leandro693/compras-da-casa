/* =========================================================
   SERVICE WORKER: app funcionando sem internet e atualização segura
   ========================================================= */
const VERSAO_CACHE = 'compras-v2.9.0';
const ARQUIVOS = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png',
  'lib/zxing.min.js', 'lib/jspdf.umd.min.js', 'lib/jspdf.plugin.autotable.min.js', 'lib/xlsx.full.min.js', 'lib/anthropic-sdk.min.js'];

/** Instalação: guarda os arquivos do app. */
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSAO_CACHE).then(c => c.addAll(ARQUIVOS))); });

/** Ativação: apaga caches de versões antigas. */
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

/** O app pede para aplicar a versão nova. */
self.addEventListener('message', e => { if (e.data === 'atualizar') self.skipWaiting(); });

/** Página: rede primeiro (pega atualização), cache sem internet. Demais arquivos: cache primeiro. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const mesmoSite = url.origin === self.location.origin;
  const fontes = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!mesmoSite && !fontes) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSAO_CACHE).then(k => k.put('index.html', c)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(VERSAO_CACHE).then(k => k.put(req, c)); } return r; })));
});
