🔲 [SYSTEM.LOG] Infinity Caos // v1.0 [PixiJS Edition]
"Bem-vindo ao Grid. A arena foi overclockada. A aceleração de hardware está ativa. Sobreviva."

Infinity Caos é uma experiência arcade top-down implacável. Migrado de Vanilla Canvas para PixiJS, o sistema agora utiliza WebGL/WebGPU para entregar um caos visual sem precedentes: milhares de partículas neon, shaders de distorção e performance estável em 60+ FPS, mesmo sob fogo pesado.

⚡ PROTOCOLOS DO SISTEMA (Features)

🌍 Geração de Biomas Dinâmicos: A arena (4000x4000) é gerenciada via PIXI.Container e Culling inteligente, permitindo biomas complexos como Labirintos de Reflexão e Zonas Mortas sem perda de performance.

💥 Mutação de Pulso [CRÍTICO]: A cada 50s, uma anomalia varre o Grid. O PixiJS processa o PULSE através de filtros de displacement e partículas de alta densidade. O que não estiver atrás de cobertura geométrica é vaporizado.

⏳ Overdrive Neural (Adrenaline Mode): Manipulação de ticker.speed para colapso temporal (Slow-Mo) com interpolação suave de movimentos.

🏆 Sincronização Global: Integração com Firebase (Firestore) para registros de pontuação em tempo real. O Top 10 dita quem domina a rede.

🕹️ INTERFACE DE OPERADOR (Como Jogar)

Assimilie Alvos de Dados (Rosas) para escalar o multiplicador de Combo.

[ CONTROLOS DE NAVEGAÇÃO ]

Desktop: Avatar segue o vetor do cursor. PointerDown ativa o DASH.

Mobile: Virtual Joystick + Botão de DASH dedicado.

⚙️ ARQUITETURA DE DADOS (Tech Stack)

A performance agora é movida por aceleração de GPU:

Motor Gráfico: PixiJS v8 (Renderização WebGL/WebGPU).

Gerenciamento de Sprites: PIXI.SpriteBatch para inimigos e PIXI.ParticleContainer para explosões neon.

Efeitos de Post-Processing: Shaders customizados (GLSL) para brilho neon, aberração cromática durante o PULSE e rastro de fotões.

Física: Lógica de colisões OBB e vetores integrada ao loop de animação do PIXI.Ticker.

Soundscape: Síntese de áudio em tempo real via Web Audio API (Zero assets de áudio externos).

Backend: Firebase v11 (Auth Anónimo + regras seguras de Firestore para o Leaderboard).

[ ARQUIVOS DE SUPORTE - POWERUPS ]

🟢 Aegis (Escudo): Bloqueia a próxima instância de dano fatal.

🔵 Overclock (Velocidade): Amplifica a mobilidade e intensifica o rastro de fotões.

🟠 Singularidade (Bomba): Erradica ameaças de classe baixa num grande raio.

⚠️ REGISTO DE AMEAÇAS (IAs Inimigas)

As IAs agora utilizam a abstração de Sprites do Pixi para feedback visual imediato:

[ TIPO: CHASER ] 🔴 Normal: Entidade básica de perseguição vetorial.

[ TIPO: ARTILLERY ] 🟡 Sniper: Imóvel. Dispara feixes de energia de alta velocidade. Aviso: Projéteis fazem ricochete em superfícies azuis.

[ TIPO: VOID ] 👻 Phantom: Anomalia roxa. Ignora colisões geométricas. Perseguição espectral.

[ TIPO: SABOTEUR ] 💣 Mine Layer: Evade a aproximação do jogador e deixa rastros de explosivos voláteis com timer.

[ TIPO: PRECOGNITIVE ] 🎯 Hunter AI: Calcula vetores futuros. Interceta a sua trajetória em vez de o seguir.

[ TIPO: ZEALOT ] 🚀 Kamikaze: Pisca a rosa/branco. Sobrecarga o motor e investe a velocidades extremas. Detona no impacto.

👑 ENTIDADES APEX (Bosses)

[THE ARCHITECT] (Ciano): Manipulador da matriz. Move obstáculos do WorldContainer e constrói barreiras de contenção.

[SNIPER GOD] (Vermelho): Dispara rajadas em leque com Shaders de brilho intenso e utiliza translocação quântica (teleporte).

🔌 SEQUÊNCIA DE INÍCIO (Setup)

Inclua o PixiJS via CDN ou NPM.

Certifique-se de que o App está configurado para resizeTo: window.

O projeto utiliza Object Pooling para todos os projéteis e inimigos para evitar picos de Lag.

"Fim de Transmissão." // Desenvolvido com Adrenalina, Café e WebGL.