if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,c,b)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return a;case"module":return r;default:return s(e)}}))).then((s=>{const e=b(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-9cbde557"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/[...all].b3aff60c.js",revision:"5d1440bf1cb63f8ce5e8321feb64432a"},{url:"assets/20210621.e7aaad8d.js",revision:"c3b077d4d764fc081f6a00c264389e43"},{url:"assets/20210622.cb7f7298.js",revision:"67d7cfbce33005a8b0a7586ef3b5b5be"},{url:"assets/20210623.36ef1a60.js",revision:"2b0ef86ac09b4d4fbc441698b344417d"},{url:"assets/20210624.7c3c0949.js",revision:"ad8292a5047561cf6edcf3f5c8a6af20"},{url:"assets/20210716.18b38868.js",revision:"f774acb6c4d0ff735803f0de242917aa"},{url:"assets/20211126.56310fb0.js",revision:"1aed3bb76166ee7d83617003176f45b7"},{url:"assets/20220314.638a9ead.js",revision:"21cf02c6566db38900e8b4ece62f0f9e"},{url:"assets/20220318.0f4f2b4a.js",revision:"0dc1ff28d35614e514a56a5286f04155"},{url:"assets/20220322.975ca8f4.js",revision:"fa38ff6b72e5fcc0df6db5790dbc6c6c"},{url:"assets/20220324.596a3535.js",revision:"07270aa763e982aacf9bc444cb310b54"},{url:"assets/aboutme.48972994.css",revision:"185b4e66d4a6d612f495cf2664352819"},{url:"assets/aboutme.d69868ad.js",revision:"77849d5af91b2e5a1a8bcb4ceb266ab8"},{url:"assets/app.1e82055a.js",revision:"b7941b48b8f91208df0ef8e57b16630e"},{url:"assets/app.4589eae2.css",revision:"0227ca2459585e67c53ac12ffba0f727"},{url:"assets/books.a504b86b.js",revision:"c5d7b33eaa230d9fc7a58b8a4e5bc993"},{url:"assets/codes.7775546a.js",revision:"eb8d2c244d492c8939a9a3bbed5bf56a"},{url:"assets/command.b40f9d0d.js",revision:"ce1c729bb9c4cc0416131a85d44d64f2"},{url:"assets/Comment.9d697db2.js",revision:"06b263eea6d69ddf530ff9b5449a995a"},{url:"assets/Comment.ef8b45f2.css",revision:"715406c5633616c7e118ee25f268017c"},{url:"assets/css.783869fa.js",revision:"64d41d1dca67809a4a537ce700a6edef"},{url:"assets/Describe.05899b58.css",revision:"b8a163b15f79a4192133a7bcbcf5df1e"},{url:"assets/Describe.ab9db2d8.js",revision:"f1879a775e33aadb41f110fc5159a21b"},{url:"assets/docker.c460e22c.js",revision:"cacab93c96ff12d3536a0e39115fbddb"},{url:"assets/Done.4eaeedc4.js",revision:"a0ce91e96cf6cba169a54ca40a9591c0"},{url:"assets/Done.700d0abc.css",revision:"53401390fa832658aa578752e3e858b8"},{url:"assets/draw.f5ed434a.js",revision:"de76b74169940a1ab13625263655c863"},{url:"assets/eating.154ade33.js",revision:"e00ae4de8451823f5359d39a12ceffc7"},{url:"assets/golang.f8320c0a.js",revision:"7485ffe566ef7d91a58bf5f943dfff43"},{url:"assets/goodies.04f31c76.js",revision:"cdc2b6790d93cb09f9d0aee99a9247d7"},{url:"assets/grpc.05d13e64.js",revision:"73f4b3bbc97510d9d0c01afb1a19aa89"},{url:"assets/haiku.cf316bdd.css",revision:"ec2238ad2195eaa4b35c9b43b78d9d08"},{url:"assets/haiku.da1255d1.js",revision:"256585db4faa37e5dbdb89492331be12"},{url:"assets/hardware.d2f34643.js",revision:"2dcf225fc68fbeb5f01fe7aab52b24f7"},{url:"assets/html.b01180b9.js",revision:"7f77b1b295cdd2b2c9f5ecd91a1afe64"},{url:"assets/InComing.vue_vue&type=script&setup=true&lang.8324b6a6.js",revision:"a1f3b8103d15d93164353a6e2b491d3d"},{url:"assets/index.164bd969.css",revision:"7d2388a6f025741bed4c7ebebbcc9480"},{url:"assets/index.5b6aab13.css",revision:"b56210a5c7ef1c1c63241ff15b3c26d4"},{url:"assets/index.7ff7635f.js",revision:"41f5a54e83c7bed093457b0328960e29"},{url:"assets/index.81bc716c.css",revision:"2fea16061d8cf32ed4fd9e6617598334"},{url:"assets/index.bc140bb0.js",revision:"1bde137485e504cfa8b35a58756de0bd"},{url:"assets/index.e2f2413c.js",revision:"1012e4dbb1d7bd5afcdbe7344249fd45"},{url:"assets/index.f220294d.css",revision:"7b575b82a649cb166b33c60ff355a0c6"},{url:"assets/index.f2bd3c91.js",revision:"6a8c1cc3e9f8c30c81b3991c4b85763f"},{url:"assets/javascript.c71fa84c.js",revision:"871b93edac5eacc06d0ff0b085ccf045"},{url:"assets/jq.3d82cb4e.js",revision:"8ef22c6d93a156215557b31d3f599100"},{url:"assets/jsbase.5c487a86.js",revision:"922576ce562e09744489d20739d6985f"},{url:"assets/kubernetes.b779360a.js",revision:"67a9dd7505a1e4baedb8fdacc72ea6a8"},{url:"assets/LinkItem.bf447482.css",revision:"732da08a32781a5095f230c729e184f9"},{url:"assets/LinkItem.c8df38c8.js",revision:"c6b4edea1fe2111cd2744fa84b2779fa"},{url:"assets/MarkerPattern.vue_vue&type=script&setup=true&lang.8ee34414.js",revision:"f7bf5f1de4c19949fc4995fd159c9def"},{url:"assets/music.49a5a990.css",revision:"778669ced339636796e4ed160e931e98"},{url:"assets/music.a780cca0.js",revision:"a4036ca6cec8ceccd0e9459bea544872"},{url:"assets/network.129bd611.js",revision:"f7f7d0688a01f08613c5519f065c768c"},{url:"assets/postgresl.49b0e50d.js",revision:"a96ee337ff78673082480f856740327d"},{url:"assets/python.16e9d17d.js",revision:"eb96699aeaf96d291d2d2631b506bb80"},{url:"assets/pythondoc.b693f25d.js",revision:"4afc6366ad04800e6ce2b2d3a022fcf1"},{url:"assets/scribbles.1982d7c7.js",revision:"70bcfe8bbb54dbdb16adee5c72689deb"},{url:"assets/sed.c5ac65c7.js",revision:"5634fc5b14826e800c75655ed0f1468a"},{url:"assets/shell_script.956bba3c.js",revision:"0d8bee5cf982761079c6b5f179ca0e53"},{url:"assets/shortcuts.9ca0663c.js",revision:"285b363439a95f5feb921acc2a288cc8"},{url:"assets/ShortHR.0b651cd3.css",revision:"bc300abdb2aba12704237976c404cfd3"},{url:"assets/ShortHR.929b4750.js",revision:"f0612c97ef61e024139d5346836159b0"},{url:"assets/ShortNoteItem.6f67c6e4.js",revision:"db14ba2a51937ba22b10b90700575c4d"},{url:"assets/ShortNoteItem.f9d3cb87.css",revision:"6a05785065a19f17cc0a2b4c2440c7ac"},{url:"assets/shuntarou.039d1474.js",revision:"bb81c9e674456236192d8ed6b8fefd75"},{url:"assets/shuntarou.95b48bad.css",revision:"4db966822bd5552b573ffb9b9a277794"},{url:"assets/sites.4b1a3e22.js",revision:"dbac9627b2cb31742bcc9f2bb7dced8c"},{url:"assets/system_issue.f91c5a23.js",revision:"e538c2ba48052f4c2603bb2ba0591a5c"},{url:"assets/time.ec59106d.js",revision:"7354e9763c428c3eeba19d15049e8bf4"},{url:"assets/TODO.60d6f50a.js",revision:"cfabbc94fa6c366fbde1dbd377d20a61"},{url:"assets/TODO.75058c1b.css",revision:"208f8a4513e139b5c5c8ce2530b6d47b"},{url:"assets/trick.ed8d95ef.js",revision:"a7f941d2cc3357d995c5161f785c9639"},{url:"assets/vendor.5a394a79.js",revision:"da095b69cb25398d244151b7139c1c82"},{url:"assets/virtual_pwa-register.3d629c73.js",revision:"c1039224262131d94d8689ac2f4988b4"},{url:"assets/waitlist.26fe9b58.js",revision:"7569454726579aa12636f4312aaf7a99"},{url:"assets/what_for.ba0c7f8a.js",revision:"97dc0a238db7a86d65a8c00dbff47b17"},{url:"index.html",revision:"b5e4ea54376570df7f11e7d14d8192e6"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
