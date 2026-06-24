// ============================================================
// TRANSLATIONS
// ============================================================
const T = {
  pt: {
    "nav.about":"Sobre","nav.skills":"Skills","nav.projects":"Projetos",
    "nav.freelance":"Freelance","nav.contact":"Contato","nav.store":"Loja →",
    "sn.all":"Todos","sn.roblox":"Roblox","sn.web":"Web","sn.video":"Vídeo","sn.about":"← Sobre mim",
    "hero.badge":"Disponível para projetos",
    "hero.h1a":"Roblox Engineer","hero.h1b":"Developer",
    "hero.sub":"Construo sistemas complexos, interfaces profissionais e jogos completos — com código limpo, escalável e que funciona.",
    "hero.cta1":"Ver Projetos","hero.cta2":"Entrar em Contato",
    "hero.scroll":"scroll",
    "about.eyebrow":"Sobre mim",
    "about.h2":"Desenvolvedor apaixonado\npor código bem feito.",
    "about.p1":"Comecei a programar no Roblox por curiosidade — queria entender como os sistemas dos grandes jogos funcionavam por dentro. O que era hobbie virou especialidade.",
    "about.p2":"Hoje crio desde sistemas RPG completos com inventário e shop, até tycoons, admin panels e UIs com animações profissionais. Cada projeto tem código organizado, anti-exploit e DataStore funcionando.",
    "about.p3":"Atualmente também estudo modelagem 3D, animação para jogos e desenvolvimento web — expandindo o que consigo entregar.",
    "fact.systems":"Sistemas construídos","fact.games":"Jogos completos","fact.clean":"Código limpo",
    "about.status":"Aberto para freelance e CLT",
    "skills.eyebrow":"Tecnologias","skills.h2":"Skills & Stack",
    "skills.p":"Ferramentas e linguagens que uso no dia a dia.",
    "sk.roblox.cat":"Roblox & Luau","sk.web.cat":"Web & Outros","sk.learn.cat":"Aprendendo",
    "sk.luau":"Scripts, RemoteEvents, OOP","sk.ui":"TweenService, Animações",
    "sk.ds":"Saving, Loading, Migrations","sk.anti":"Validação server-side",
    "sk.gs":"RPG, Tycoon, Simulators","sk.html":"Responsive, Animations",
    "sk.js":"DOM, Fetch, Animations","sk.auto":"Scripts, Bots",
    "sk.vid":"CapCut, DaVinci","sk.model":"Blender, Roblox Studio",
    "sk.anim":"Rigs, Keyframes",
    "lv.expert":"Expert","lv.adv":"Avançado","lv.mid":"Intermediário","lv.learn":"Aprendendo",
    "proj.eyebrow":"Portfólio","proj.h2":"Projetos em Destaque",
    "proj.p":"Cada projeto tem decisões técnicas reais.",
    "proj.all":"Ver todos na loja →","proj.featured":"Destaque",
    "proj.challenge":"Desafio técnico:","proj.watch":"▶ Ver Demo","proj.order":"Encomendar →",
    "p.rpg.title":"Moonveil — Sistema RPG Completo",
    "p.rpg.desc":"Sistema RPG modular com inventário estilo livro, shop com NPC ao vivo via ViewportFrame, stats com equipment bonuses, gamepass integration, diálogo com typewriter e menu principal completo.",
    "p.rpg.challenge":"Sincronizar ViewportFrame com R15 NPC, validação server-side em todos os remotes e DataStore com merge inteligente.",
    "p.show.title":"Pack 15 Mini Sistemas",
    "p.show.desc":"Lockpick, Fishing, Gacha, Crafting, Quest, Bank, Cutscene, Minimap e mais — todos com UI profissional e tema visual consistente.",
    "p.build.title":"Build Mode",
    "p.build.desc":"Sistema de construção estilo The Sims com câmera top-down, snap to grid, ghost preview, rotação e catálogo de itens por categorias.",
    "p.site.title":"Este Portfólio","p.site.desc":"Portfólio bilíngue com sistema de tradução próprio, loja integrada com filtros, modais de vídeo e design responsivo.",
    "p.site.here":"Você está aqui",
    "fl.eyebrow":"Freelance Roblox","fl.h2":"Open for Select Projects",
    "fl.p":"Especializado em sistemas complexos, UI de alto nível e arquitetura escalável. Aceito projetos pontuais e contratos de longo prazo.",
    "fl.s1.title":"Advanced Game Systems","fl.s1.desc":"Inventory, Combat, Tycoon, Quests, RPG completo",
    "fl.s2.title":"Custom UI / UX","fl.s2.desc":"Interfaces com animações, ViewportFrame, tema customizado",
    "fl.s3.title":"Admin Panels & Tools","fl.s3.desc":"Kick, ban, give items, permissões, logs completos",
    "fl.s4.title":"Data Architecture","fl.s4.desc":"DataStore robusto com retry, merge e saving seguro",
    "fl.s5.title":"Full Game Development","fl.s5.desc":"Do zero ao publicado, incluindo scripting e UI",
    "fl.s6.title":"Bug Fix & Optimization","fl.s6.desc":"Diagnóstico, correção e otimização de código existente",
    "fl.process.title":"Como trabalho",
    "fl.step1.title":"Briefing","fl.step1.desc":"Entendo o que você precisa, o escopo e o prazo.",
    "fl.step2.title":"Proposta","fl.step2.desc":"Envio prazo, preço e o que será entregue.",
    "fl.step3.title":"Desenvolvimento","fl.step3.desc":"Codifico com updates e testando cada etapa.",
    "fl.step4.title":"Entrega","fl.step4.desc":"Entrego com instruções e suporte pós-entrega.",
    "fl.cta.title":"Vamos trabalhar juntos?",
    "fl.cta.desc":"Entre em contato pelo Fiverr. Respondo em menos de 1 hora.",
    "fl.cta.btn":"Ver perfil no Fiverr →",
    "ct.eyebrow":"Contato","ct.h2":"Tem um projeto\nem mente?",
    "ct.p":"Estou aberto para freelance, CLT/PJ remoto e projetos pontuais. Me chama no Fiverr — respondo rápido.",
    "ct.avail":"Disponível para novos projetos","ct.btn":"💼 Falar no Fiverr",
    "ct.c1":"Scripts Roblox","ct.c1p":"A partir de $20",
    "ct.c2":"Sistema Completo","ct.c2p":"A partir de $80",
    "ct.c3":"Site / Portfólio","ct.c3p":"A partir de $30",
    "ct.c4":"Bug Fix","ct.c4p":"A partir de $15",
    "foot.store":"Loja","foot.about":"Sobre mim","foot.top":"Topo ↑",
    "vid.fiverr":"Encomendar no Fiverr",
    "sh.badge":"Aceitando novos projetos","sh.h1a":"Serviços &","sh.p":"Escolha um serviço, veja a demo e encomende direto no Fiverr.",
    "sf.all":"Todos","sf.roblox":"🎮 Roblox","sf.web":"🌐 Web","sf.video":"🎬 Vídeo","sf.soon":"🔜 Em breve",
    "sc.roblox":"Roblox","sc.web":"Web","sc.video":"Vídeo","sc.soon":"Em breve",
    "sb.feat":"⭐ Destaque","sb.soon":"🔜 Em breve",
    "from":"A partir de","btn.order":"Encomendar →",
    "sv.rpg.t":"Sistema RPG Completo","sv.rpg.d":"Inventário estilo livro, shop com NPC, stats, gamepass, diálogo com typewriter e menu principal.",
    "sv.rpg.1":"✓ Inventário Moonlighter-style","sv.rpg.2":"✓ Shop com NPC ao vivo","sv.rpg.3":"✓ DataStore + anti-exploit","sv.rpg.4":"✓ Menu + gamepasses",
    "sv.show.t":"Pack 15 Mini Sistemas","sv.show.d":"Lockpick, Fishing, Gacha, Crafting, Quest, Bank, Cutscene, Minimap e mais.",
    "sv.show.1":"✓ 15 sistemas prontos","sv.show.2":"✓ Tema visual consistente","sv.show.3":"✓ Notificações animadas",
    "sv.scripts.t":"Scripts Roblox","sv.scripts.d":"Qualquer sistema: inventário, shop, tycoon, RPG, admin panel, UI e muito mais.",
    "sv.scripts.1":"✓ DataStore saving","sv.scripts.2":"✓ Anti-exploit servidor","sv.scripts.3":"✓ Código limpo",
    "sv.build.t":"Build Mode","sv.build.d":"Sistema de construção estilo The Sims com câmera top-down, snap grid e catálogo de itens.",
    "sv.build.1":"✓ Câmera top-down","sv.build.2":"✓ Snap to grid","sv.build.3":"✓ Rotação de itens",
    "sv.tycoon.t":"Tycoon Game","sv.tycoon.d":"Dropper tycoon, fast food ou qualquer tema — completo com upgrades e DataStore.",
    "sv.tycoon.1":"✓ Droppers automáticos","sv.tycoon.2":"✓ Upgrades e multipliers","sv.tycoon.3":"✓ DataStore saving",
    "sv.admin.t":"Admin Panel","sv.admin.d":"Painel completo com kick, ban, give items, teleport, permissões e logs.",
    "sv.admin.1":"✓ Sistema de ranks","sv.admin.2":"✓ Logs de ações","sv.admin.3":"✓ Interface bonita",
    "sv.web.t":"Site Profissional","sv.web.d":"Sites modernos com HTML, CSS e JS. Responsivo e com animações profissionais.",
    "sv.web.1":"✓ Design personalizado","sv.web.2":"✓ Mobile responsive","sv.web.3":"✓ Código limpo",
    "sv.port.t":"Site Portfólio","sv.port.d":"Portfólio profissional com loja integrada, multi-idioma e links Fiverr.",
    "sv.port.1":"✓ Página sobre + loja","sv.port.2":"✓ Multi-idioma","sv.port.3":"✓ SEO básico",
    "sv.vid.t":"Edição de Vídeo","sv.vid.d":"Edição profissional para YouTube, portfólio e apresentações.",
    "sv.vid.1":"✓ Cortes dinâmicos","sv.vid.2":"✓ Efeitos e transições","sv.vid.3":"✓ Export HD",
    "sv.model.t":"Modelagem 3D","sv.model.d":"Modelos 3D para Roblox e jogos — em breve.",
    "sv.anim.t":"Animações","sv.anim.d":"Animações para personagens e objetos — em breve.",
  },
  en: {
    "nav.about":"About","nav.skills":"Skills","nav.projects":"Projects",
    "nav.freelance":"Freelance","nav.contact":"Contact","nav.store":"Store →",
    "sn.all":"All","sn.roblox":"Roblox","sn.web":"Web","sn.video":"Video","sn.about":"← About me",
    "hero.badge":"Available for projects",
    "hero.h1a":"Roblox Engineer","hero.h1b":"Developer",
    "hero.sub":"I build complex systems, professional interfaces and complete games — with clean, scalable code that works.",
    "hero.cta1":"See Projects","hero.cta2":"Get in Touch",
    "hero.scroll":"scroll",
    "about.eyebrow":"About me",
    "about.h2":"Developer passionate\nabout well-crafted code.",
    "about.p1":"I started programming in Roblox out of curiosity — I wanted to understand how the systems of big games worked internally. What was a hobby became a specialty.",
    "about.p2":"Today I build complete RPG systems with inventory and shop, tycoons, admin panels and UIs with professional animations. Every project has organized code, server-side anti-exploit and working DataStore.",
    "about.p3":"I'm also currently studying 3D modeling, game animation and web development — expanding what I can deliver.",
    "fact.systems":"Systems built","fact.games":"Complete games","fact.clean":"Clean code",
    "about.status":"Open for freelance and full-time",
    "skills.eyebrow":"Technologies","skills.h2":"Skills & Stack",
    "skills.p":"Tools and languages I use daily.",
    "sk.roblox.cat":"Roblox & Luau","sk.web.cat":"Web & Others","sk.learn.cat":"Learning",
    "sk.luau":"Scripts, RemoteEvents, OOP","sk.ui":"TweenService, Animations",
    "sk.ds":"Saving, Loading, Migrations","sk.anti":"Server-side validation",
    "sk.gs":"RPG, Tycoon, Simulators","sk.html":"Responsive, Animations",
    "sk.js":"DOM, Fetch, Animations","sk.auto":"Scripts, Bots",
    "sk.vid":"CapCut, DaVinci","sk.model":"Blender, Roblox Studio",
    "sk.anim":"Rigs, Keyframes",
    "lv.expert":"Expert","lv.adv":"Advanced","lv.mid":"Intermediate","lv.learn":"Learning",
    "proj.eyebrow":"Portfolio","proj.h2":"Featured Projects",
    "proj.p":"Each project has real technical decisions.",
    "proj.all":"See all in store →","proj.featured":"Featured",
    "proj.challenge":"Technical challenge:","proj.watch":"▶ Watch Demo","proj.order":"Order Now →",
    "p.rpg.title":"Moonveil — Complete RPG System",
    "p.rpg.desc":"Modular RPG system with book-style inventory, live NPC shop via ViewportFrame, stats with equipment bonuses, gamepass integration, typewriter dialogue and complete main menu.",
    "p.rpg.challenge":"Sync ViewportFrame with R15 NPC, server-side validation on all remotes and smart DataStore merge.",
    "p.show.title":"Pack 15 Mini Systems",
    "p.show.desc":"Lockpick, Fishing, Gacha, Crafting, Quest, Bank, Cutscene, Minimap and more — all with professional UI and consistent visual theme.",
    "p.build.title":"Build Mode",
    "p.build.desc":"Sims-style building system with top-down camera, snap to grid, ghost preview, rotation and categorized item catalog.",
    "p.site.title":"This Portfolio","p.site.desc":"Multi-language portfolio with custom translation system, store with filters, video modals and responsive design.",
    "p.site.here":"You are here",
    "fl.eyebrow":"Freelance Roblox","fl.h2":"Open for Select Projects",
    "fl.p":"Specialized in complex systems, high-level UI and scalable architecture. I accept one-off projects and long-term contracts.",
    "fl.s1.title":"Advanced Game Systems","fl.s1.desc":"Inventory, Combat, Tycoon, Quests, complete RPG",
    "fl.s2.title":"Custom UI / UX","fl.s2.desc":"Interfaces with animations, ViewportFrame, custom theme",
    "fl.s3.title":"Admin Panels & Tools","fl.s3.desc":"Kick, ban, give items, permissions, complete logs",
    "fl.s4.title":"Data Architecture","fl.s4.desc":"Robust DataStore with retry, merge and safe saving",
    "fl.s5.title":"Full Game Development","fl.s5.desc":"From zero to published, including scripting and UI",
    "fl.s6.title":"Bug Fix & Optimization","fl.s6.desc":"Diagnosis, fixing and optimization of existing code",
    "fl.process.title":"How I work",
    "fl.step1.title":"Briefing","fl.step1.desc":"I understand what you need, the scope and deadline.",
    "fl.step2.title":"Proposal","fl.step2.desc":"I send the deadline, price and what will be delivered.",
    "fl.step3.title":"Development","fl.step3.desc":"I code with updates and testing each step.",
    "fl.step4.title":"Delivery","fl.step4.desc":"I deliver with instructions and post-delivery support.",
    "fl.cta.title":"Let's work together?",
    "fl.cta.desc":"Contact me on Fiverr. I respond in less than 1 hour.",
    "fl.cta.btn":"View Fiverr profile →",
    "ct.eyebrow":"Contact","ct.h2":"Have a project\nin mind?",
    "ct.p":"I'm open for freelance, remote CLT/PJ and one-off projects. Hit me up on Fiverr — I reply fast.",
    "ct.avail":"Available for new projects","ct.btn":"💼 Talk on Fiverr",
    "ct.c1":"Roblox Scripts","ct.c1p":"Starting at $20",
    "ct.c2":"Complete System","ct.c2p":"Starting at $80",
    "ct.c3":"Site / Portfolio","ct.c3p":"Starting at $30",
    "ct.c4":"Bug Fix","ct.c4p":"Starting at $15",
    "foot.store":"Store","foot.about":"About me","foot.top":"Top ↑",
    "vid.fiverr":"Order on Fiverr",
    "sh.badge":"Accepting new projects","sh.h1a":"Services &","sh.p":"Choose a service, watch the demo and order on Fiverr.",
    "sf.all":"All","sf.roblox":"🎮 Roblox","sf.web":"🌐 Web","sf.video":"🎬 Video","sf.soon":"🔜 Coming soon",
    "sc.roblox":"Roblox","sc.web":"Web","sc.video":"Video","sc.soon":"Coming soon",
    "sb.feat":"⭐ Featured","sb.soon":"🔜 Coming soon",
    "from":"Starting at","btn.order":"Order Now →",
    "sv.rpg.t":"Complete RPG System","sv.rpg.d":"Book-style inventory, live NPC shop, stats, gamepass, typewriter dialogue and main menu.",
    "sv.rpg.1":"✓ Moonlighter-style inventory","sv.rpg.2":"✓ Shop with live NPC","sv.rpg.3":"✓ DataStore + anti-exploit","sv.rpg.4":"✓ Menu + gamepasses",
    "sv.show.t":"Pack 15 Mini Systems","sv.show.d":"Lockpick, Fishing, Gacha, Crafting, Quest, Bank, Cutscene, Minimap and more.",
    "sv.show.1":"✓ 15 ready systems","sv.show.2":"✓ Consistent visual theme","sv.show.3":"✓ Animated notifications",
    "sv.scripts.t":"Roblox Scripts","sv.scripts.d":"Any system: inventory, shop, tycoon, RPG, admin panel, UI and more.",
    "sv.scripts.1":"✓ DataStore saving","sv.scripts.2":"✓ Server-side anti-exploit","sv.scripts.3":"✓ Clean code",
    "sv.build.t":"Build Mode","sv.build.d":"Sims-style building system with top-down camera, snap grid and item catalog.",
    "sv.build.1":"✓ Top-down camera","sv.build.2":"✓ Snap to grid","sv.build.3":"✓ Item rotation",
    "sv.tycoon.t":"Tycoon Game","sv.tycoon.d":"Dropper tycoon, fast food or any theme — complete with upgrades and DataStore.",
    "sv.tycoon.1":"✓ Automatic droppers","sv.tycoon.2":"✓ Upgrades & multipliers","sv.tycoon.3":"✓ DataStore saving",
    "sv.admin.t":"Admin Panel","sv.admin.d":"Complete panel with kick, ban, give items, teleport, permissions and logs.",
    "sv.admin.1":"✓ Rank system","sv.admin.2":"✓ Action logs","sv.admin.3":"✓ Beautiful interface",
    "sv.web.t":"Professional Website","sv.web.d":"Modern sites with HTML, CSS and JS. Responsive and with animations.",
    "sv.web.1":"✓ Custom design","sv.web.2":"✓ Mobile responsive","sv.web.3":"✓ Clean code",
    "sv.port.t":"Portfolio Site","sv.port.d":"Professional portfolio with integrated store, multi-language and Fiverr links.",
    "sv.port.1":"✓ About + store page","sv.port.2":"✓ Multi-language","sv.port.3":"✓ Basic SEO",
    "sv.vid.t":"Video Editing","sv.vid.d":"Professional editing for YouTube, portfolio and presentations.",
    "sv.vid.1":"✓ Dynamic cuts","sv.vid.2":"✓ Effects and transitions","sv.vid.3":"✓ HD export",
    "sv.model.t":"3D Modeling","sv.model.d":"3D models for Roblox and games — coming soon.",
    "sv.anim.t":"Animations","sv.anim.d":"Animations for characters and objects — coming soon.",
  },
  es: {
    "nav.about":"Sobre mí","nav.skills":"Skills","nav.projects":"Proyectos",
    "nav.freelance":"Freelance","nav.contact":"Contacto","nav.store":"Tienda →",
    "sn.all":"Todos","sn.roblox":"Roblox","sn.web":"Web","sn.video":"Video","sn.about":"← Sobre mí",
    "hero.badge":"Disponible para proyectos",
    "hero.h1a":"Roblox Engineer","hero.h1b":"Developer",
    "hero.sub":"Construyo sistemas complejos, interfaces profesionales y juegos completos — con código limpio, escalable y que funciona.",
    "hero.cta1":"Ver Proyectos","hero.cta2":"Contactar",
    "hero.scroll":"scroll",
    "about.eyebrow":"Sobre mí",
    "about.h2":"Desarrollador apasionado\npor el código bien hecho.",
    "about.p1":"Empecé a programar en Roblox por curiosidad — quería entender cómo funcionaban los sistemas de los grandes juegos. Lo que era un hobby se convirtió en especialidad.",
    "about.p2":"Hoy creo sistemas RPG completos con inventario y tienda, tycoons, paneles de admin e interfaces con animaciones profesionales.",
    "about.p3":"También estudio modelado 3D, animación para juegos y desarrollo web.",
    "fact.systems":"Sistemas construidos","fact.games":"Juegos completos","fact.clean":"Código limpio",
    "about.status":"Abierto a freelance y tiempo completo",
    "skills.eyebrow":"Tecnologías","skills.h2":"Skills & Stack",
    "skills.p":"Herramientas y lenguajes que uso a diario.",
    "sk.roblox.cat":"Roblox & Luau","sk.web.cat":"Web & Otros","sk.learn.cat":"Aprendiendo",
    "sk.luau":"Scripts, RemoteEvents, OOP","sk.ui":"TweenService, Animaciones",
    "sk.ds":"Guardado, Carga, Migraciones","sk.anti":"Validación server-side",
    "sk.gs":"RPG, Tycoon, Simuladores","sk.html":"Responsive, Animaciones",
    "sk.js":"DOM, Fetch, Animaciones","sk.auto":"Scripts, Bots",
    "sk.vid":"CapCut, DaVinci","sk.model":"Blender, Roblox Studio",
    "sk.anim":"Rigs, Keyframes",
    "lv.expert":"Expert","lv.adv":"Avanzado","lv.mid":"Intermedio","lv.learn":"Aprendiendo",
    "proj.eyebrow":"Portafolio","proj.h2":"Proyectos Destacados",
    "proj.p":"Cada proyecto tiene decisiones técnicas reales.",
    "proj.all":"Ver todos en tienda →","proj.featured":"Destacado",
    "proj.challenge":"Desafío técnico:","proj.watch":"▶ Ver Demo","proj.order":"Ordenar →",
    "p.rpg.title":"Moonveil — Sistema RPG Completo",
    "p.rpg.desc":"Sistema RPG modular con inventario estilo libro, tienda con NPC en vivo, stats con bonuses de equipamiento, gamepasses, diálogo typewriter y menú principal completo.",
    "p.rpg.challenge":"Sincronizar ViewportFrame con NPC R15, validación server-side en todos los remotes y DataStore con merge inteligente.",
    "p.show.title":"Pack 15 Mini Sistemas",
    "p.show.desc":"Lockpick, Fishing, Gacha, Crafting, Quest, Bank, Cutscene, Minimap y más — todos con UI profesional y tema visual consistente.",
    "p.build.title":"Build Mode",
    "p.build.desc":"Sistema de construcción estilo Sims con cámara top-down, snap to grid, vista previa fantasma, rotación y catálogo de ítems.",
    "p.site.title":"Este Portafolio","p.site.desc":"Portafolio multilingüe con sistema de traducción propio, tienda integrada con filtros y modales de video.",
    "p.site.here":"Estás aquí",
    "fl.eyebrow":"Freelance Roblox","fl.h2":"Open for Select Projects",
    "fl.p":"Especializado en sistemas complejos, UI de alto nivel y arquitectura escalable.",
    "fl.s1.title":"Advanced Game Systems","fl.s1.desc":"Inventory, Combat, Tycoon, Quests, RPG completo",
    "fl.s2.title":"Custom UI / UX","fl.s2.desc":"Interfaces con animaciones, ViewportFrame, tema personalizado",
    "fl.s3.title":"Admin Panels & Tools","fl.s3.desc":"Kick, ban, dar items, permisos, logs completos",
    "fl.s4.title":"Data Architecture","fl.s4.desc":"DataStore robusto con retry, merge y guardado seguro",
    "fl.s5.title":"Full Game Development","fl.s5.desc":"De cero a publicado, incluyendo scripting y UI",
    "fl.s6.title":"Bug Fix & Optimization","fl.s6.desc":"Diagnóstico, corrección y optimización de código",
    "fl.process.title":"Cómo trabajo",
    "fl.step1.title":"Briefing","fl.step1.desc":"Entiendo qué necesitas, el alcance y el plazo.",
    "fl.step2.title":"Propuesta","fl.step2.desc":"Envío plazo, precio y qué se entregará.",
    "fl.step3.title":"Desarrollo","fl.step3.desc":"Codifico con actualizaciones y pruebas.",
    "fl.step4.title":"Entrega","fl.step4.desc":"Entrego con instrucciones y soporte.",
    "fl.cta.title":"¿Trabajamos juntos?",
    "fl.cta.desc":"Contáctame en Fiverr. Respondo en menos de 1 hora.",
    "fl.cta.btn":"Ver perfil en Fiverr →",
    "ct.eyebrow":"Contacto","ct.h2":"¿Tienes un proyecto\nen mente?",
    "ct.p":"Estoy abierto a freelance, remoto y proyectos puntuales.",
    "ct.avail":"Disponible para nuevos proyectos","ct.btn":"💼 Hablar en Fiverr",
    "ct.c1":"Scripts Roblox","ct.c1p":"Desde $20",
    "ct.c2":"Sistema Completo","ct.c2p":"Desde $80",
    "ct.c3":"Sitio / Portafolio","ct.c3p":"Desde $30",
    "ct.c4":"Bug Fix","ct.c4p":"Desde $15",
    "foot.store":"Tienda","foot.about":"Sobre mí","foot.top":"Inicio ↑",
    "vid.fiverr":"Ordenar en Fiverr",
    "sh.badge":"Aceptando nuevos proyectos","sh.h1a":"Servicios &","sh.p":"Elige un servicio, mira la demo y ordena en Fiverr.",
    "sf.all":"Todos","sf.roblox":"🎮 Roblox","sf.web":"🌐 Web","sf.video":"🎬 Video","sf.soon":"🔜 Próximamente",
    "sc.roblox":"Roblox","sc.web":"Web","sc.video":"Video","sc.soon":"Próximamente",
    "sb.feat":"⭐ Destacado","sb.soon":"🔜 Próximamente",
    "from":"Desde","btn.order":"Ordenar →",
    "sv.rpg.t":"Sistema RPG Completo","sv.rpg.d":"Inventario estilo libro, tienda con NPC, stats, gamepass, diálogo typewriter y menú.",
    "sv.rpg.1":"✓ Inventario estilo Moonlighter","sv.rpg.2":"✓ Tienda con NPC en vivo","sv.rpg.3":"✓ DataStore + anti-exploit","sv.rpg.4":"✓ Menú + gamepasses",
    "sv.show.t":"Pack 15 Mini Sistemas","sv.show.d":"Lockpick, Fishing, Gacha, Crafting, Quest, Bank, Cutscene, Minimap y más.",
    "sv.show.1":"✓ 15 sistemas listos","sv.show.2":"✓ Tema visual consistente","sv.show.3":"✓ Notificaciones animadas",
    "sv.scripts.t":"Scripts Roblox","sv.scripts.d":"Cualquier sistema: inventario, tienda, tycoon, RPG, panel admin y más.",
    "sv.scripts.1":"✓ DataStore saving","sv.scripts.2":"✓ Anti-exploit servidor","sv.scripts.3":"✓ Código limpio",
    "sv.build.t":"Build Mode","sv.build.d":"Sistema de construcción estilo Sims con cámara top-down, snap grid y catálogo.",
    "sv.build.1":"✓ Cámara top-down","sv.build.2":"✓ Snap to grid","sv.build.3":"✓ Rotación de ítems",
    "sv.tycoon.t":"Tycoon Game","sv.tycoon.d":"Dropper tycoon, fast food o cualquier tema — completo con upgrades y DataStore.",
    "sv.tycoon.1":"✓ Droppers automáticos","sv.tycoon.2":"✓ Upgrades & multiplicadores","sv.tycoon.3":"✓ DataStore saving",
    "sv.admin.t":"Panel de Admin","sv.admin.d":"Panel completo con kick, ban, dar items, teleport, permisos y logs.",
    "sv.admin.1":"✓ Sistema de rangos","sv.admin.2":"✓ Logs de acciones","sv.admin.3":"✓ Interfaz bonita",
    "sv.web.t":"Sitio Profesional","sv.web.d":"Sitios modernos con HTML, CSS y JS. Responsive y con animaciones.",
    "sv.web.1":"✓ Diseño personalizado","sv.web.2":"✓ Mobile responsive","sv.web.3":"✓ Código limpio",
    "sv.port.t":"Sitio Portafolio","sv.port.d":"Portafolio profesional con tienda integrada, multi-idioma y links Fiverr.",
    "sv.port.1":"✓ Página sobre + tienda","sv.port.2":"✓ Multi-idioma","sv.port.3":"✓ SEO básico",
    "sv.vid.t":"Edición de Video","sv.vid.d":"Edición profesional para YouTube, portafolio y presentaciones.",
    "sv.vid.1":"✓ Cortes dinámicos","sv.vid.2":"✓ Efectos y transiciones","sv.vid.3":"✓ Export HD",
    "sv.model.t":"Modelado 3D","sv.model.d":"Modelos 3D para Roblox y juegos — próximamente.",
    "sv.anim.t":"Animaciones","sv.anim.d":"Animaciones para personajes y objetos — próximamente.",
  }
};

// ============================================================
// CORE STATE
// ============================================================
let lang = localStorage.getItem('lang') || 'pt';

function applyLang(l) {
    lang = l;
    localStorage.setItem('lang', l);
    const t = T[l] || T.pt;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (t[k] !== undefined) el.textContent = t[k];
    });
    document.documentElement.lang = l;
    updateLangUI(l);
}

const FLAGS  = { pt:'🇧🇷', en:'🇺🇸', es:'🇪🇸' };
const LABELS = { pt:'PT',   en:'EN',   es:'ES'   };

function updateLangUI(l) {
    const f = document.getElementById('langFlag');
    const c = document.getElementById('langCode');
    if (f) f.textContent = FLAGS[l]  || '🌍';
    if (c) c.textContent = LABELS[l] || l.toUpperCase();
}

// ============================================================
// LANGUAGE MODAL
// ============================================================
const langModal     = document.getElementById('langModal');
const langOptBtns   = document.querySelectorAll('.lang-option-btn');
const langChosen    = localStorage.getItem('langChosen');

if (langModal) {
    if (langChosen) {
        langModal.classList.add('hidden');
        applyLang(lang);
    }

    langOptBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const l = btn.dataset.lang;
            applyLang(l);
            localStorage.setItem('langChosen', '1');
            langModal.classList.add('hidden');
        });
    });
}

// ============================================================
// LANG PICKER (NAV)
// ============================================================
const pickBtn  = document.getElementById('langPickBtn');
const pickDrop = document.getElementById('langPickDrop');

if (pickBtn && pickDrop) {
    pickBtn.addEventListener('click', e => {
        e.stopPropagation();
        pickDrop.classList.toggle('open');
        pickBtn.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        pickDrop.classList.remove('open');
        pickBtn.classList.remove('open');
    });

    pickDrop.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            applyLang(btn.dataset.lang);
            pickDrop.classList.remove('open');
            pickBtn.classList.remove('open');
        });
    });
}

updateLangUI(lang);

// ============================================================
// NAVBAR
// ============================================================
const nav    = document.getElementById('nav');
const navHam = document.getElementById('navHam');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
});

navHam?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    const spans = navHam.querySelectorAll('span');
    if (navLinks?.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
        spans.forEach(s => { s.style.transform=''; s.style.opacity=''; });
    }
});

document.addEventListener('click', e => {
    if (!nav?.contains(e.target)) {
        navLinks?.classList.remove('open');
        navHam?.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity=''; });
    }
});

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const delay = parseInt(e.target.dataset.delay || 0);
        setTimeout(() => e.target.classList.add('visible'), delay);
        obs.unobserve(e.target);
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
    '.proj-card, .fl-service, .svc-card, .skill-item, .ct-card, .about-inner'
).forEach(el => obs.observe(el));

// ============================================================
// VIDEO MODAL
// ============================================================
const videoModal   = document.getElementById('videoModal');
const videoBackdrop = document.getElementById('videoBackdrop');
const videoClose   = document.getElementById('videoModalClose');
const videoEl      = document.getElementById('videoEl');
const videoSrc     = document.getElementById('videoSrc');
const videoName    = document.getElementById('videoModalName');
const videoDesc    = document.getElementById('videoModalDesc');

function openVideo(ytId, title, desc) {
    if (!videoModal) return;
    videoName.textContent = title || '';
    videoDesc.textContent = desc  || '';

    videoEl.style.display = 'none';

    var old = videoEl.parentElement.querySelector('iframe');
    if (old) old.remove();

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1';
    iframe.allow = 'autoplay; fullscreen';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;border-radius:12px';
    videoEl.parentElement.appendChild(iframe);

    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    if (!videoModal) return;
    videoModal.classList.remove('open');

    var iframe = videoEl.parentElement.querySelector('iframe');
    if (iframe) iframe.remove();
    videoEl.style.display = 'block';

    document.body.style.overflow = '';
}

document.querySelectorAll('.proj-btn-video, .svc-btn-demo').forEach(btn => {
    btn.addEventListener('click', () => {
        openVideo(
            btn.dataset.video,
            btn.dataset.title,
            btn.dataset.desc
        );
    });
});

videoClose?.addEventListener('click', closeVideo);
videoBackdrop?.addEventListener('click', closeVideo);
document.addEventListener('keydown', e => { if (e.key==='Escape') closeVideo(); });

// ============================================================
// SHOP FILTER
// ============================================================
const shFilters = document.querySelectorAll('.sh-filter');
const svcCards  = document.querySelectorAll('.svc-card');
const svcSections = document.querySelectorAll('.svc-section');

shFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        shFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const f = btn.dataset.filter;

        svcCards.forEach(card => {
            const match = f === 'all' || card.dataset.category === f;
            card.style.display = match ? '' : 'none';
        });

        svcSections.forEach(sec => {
            if (f === 'all') { sec.style.display = ''; return; }
            const has = sec.querySelector(`.svc-card[data-category="${f}"]`);
            sec.style.display = has ? '' : 'none';
        });
    });
});

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks?.classList.remove('open');
    });
});

// ============================================================
// INIT
// ============================================================
if (langChosen) applyLang(lang);