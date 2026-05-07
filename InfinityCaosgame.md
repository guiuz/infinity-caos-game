🔲 [SYSTEM.LOG] Infinity Caos // v0.9

"Bem-vindo ao Grid. A arena está ativa. As IAs estão à caça. Sobreviva."

Infinity Caos é uma experiência arcade top-down implacável. Desenvolvido nativamente em HTML5 Canvas e JavaScript puro, este projeto empurra o jogador para um mundo procedural cibernético onde o movimento constante é a única forma de escapar à eliminação.

⚡ PROTOCOLOS DO SISTEMA (Features)

🌍 Geração de Biomas Dinâmicos: A arena (4000x4000) reconfigura-se em zonas de combate tático: Arenas Abertas, Labirintos de Reflexão, Campos Minados e Zonas Mortas.

💥 Mutação de Pulso [CRÍTICO]: A cada 50s, uma anomalia varre a arena. O que não estiver atrás de cobertura é vaporizado. O ambiente sofre mutação instantânea.

⏳ Overdrive Neural (Adrenaline Mode): O tempo entra em colapso (Slow-Mo) quando a deteção de perigo é iminente. Use esta janela para executar manobras evasivas evasivas perfeitas.

🏆 Sincronização Global: Integração direta com os servidores Firebase (Firestore) para registo de pontuações em tempo real. O Top 10 dita quem domina a rede.

🕹️ INTERFACE DE OPERADOR (Como Jogar)

A sua missão é assimilar Alvos de Dados (Rosas) o mais rapidamente possível para escalar o multiplicador de Combo, enquanto evita a aniquilação.

[ CONTROLOS DE NAVEGAÇÃO ]

🖥️ Desktop: O avatar segue o vetor do cursor. [CLIQUE ESQUERDO] para ativar o Propulsor (DASH).

📱 Mobile: Interface tátil (Joystick esquerdo) + Botão de DASH dedicado.

[ ARQUIVOS DE SUPORTE - POWERUPS ]

🟢 Aegis (Escudo): Bloqueia a próxima instância de dano fatal.

🔵 Overclock (Velocidade): Amplifica a mobilidade e intensifica o rastro de fotões.

🟠 Singularidade (Bomba): Erradica ameaças de classe baixa num grande raio.

⚠️ REGISTO DE AMEAÇAS (IAs Inimigas)

O sistema adapta-se à sua eficiência. Ameaças de nível superior são injetadas na arena consoante o seu Score.

[ TIPO: CHASER ] 🔴 Normal: Entidade básica de perseguição vetorial.

[ TIPO: ARTILLERY ] 🟡 Sniper: Imóvel. Dispara feixes de energia de alta velocidade. Aviso: Projéteis fazem ricochete em superfícies azuis.

[ TIPO: VOID ] 👻 Phantom: Anomalia roxa. Ignora colisões geométricas. Perseguição espectral.

[ TIPO: SABOTEUR ] 💣 Mine Layer: Evade a aproximação do jogador e deixa rastros de explosivos voláteis com timer.

[ TIPO: PRECOGNITIVE ] 🎯 Hunter AI: Calcula vetores futuros. Interceta a sua trajetória em vez de o seguir.

[ TIPO: ZEALOT ] 🚀 Kamikaze: Pisca a rosa/branco. Sobrecarga o motor e investe a velocidades extremas. Detona no impacto.

👑 ENTIDADES APEX (Bosses)

Aviso de incursão massiva a cada 100 pontos:

[ THE ARCHITECT ] (Ciano): Manipulador da matriz. Força obstáculos inertes a moverem-se e constrói barreiras de contenção ao redor do alvo.

[ SNIPER GOD ] (Vermelho): Dispara rajadas em leque (3 lasers) que saltam pelo mapa. Utiliza translocação quântica (teleporte) após cada ataque.

⚙️ ARQUITETURA DE DADOS (Tech Stack)

Nenhuma framework gráfica externa foi utilizada. Construído para máxima performance "bare-metal":

Motor de Renderização: HTML5 <canvas> com rotinas de partículas procedurais customizadas.

Lógica Core: Vanilla JavaScript (Física de colisões OBB, IA Vetorial, Loop de Animação).

Soundscape: Síntese de áudio em tempo real via Web Audio API (Zero assets de áudio externos).

Backend: Firebase v11 (Auth Anónimo + regras seguras de Firestore para o Leaderboard).

🔌 SEQUÊNCIA DE INÍCIO (Setup Local)

O projeto é "Plug & Play".

Clone ou transfira os ficheiros.

Execute o ficheiro square.html num browser moderno (Chrome/Edge/Firefox recomendado).

Conecte-se e tente dominar o Grid.

"Fim de Transmissão." // Desenvolvido com muita Adrenalina e Café. Reporte anomalias (bugs) no nosso Discord.
