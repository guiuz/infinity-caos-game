# ⚡ Infinity Caos // v0.9

> *"Bem-vindo ao Grid. A arena está ativa. As IAs estão à caça. Sobreviva."*

Uma experiência arcade top-down de ação frenética desenvolvida nativamente com **HTML5 Canvas 2D** e **Vanilla JavaScript**, sem frameworks gráficos externos.

[![Live Demo](https://img.shields.io/badge/PLAY_NOW-infinitycaos.com-00f1fe?style=for-the-badge&logo=google-chrome&logoColor=black)](https://infinitycaos.com/)
[![Canvas 2D](https://img.shields.io/badge/Engine-Bare--Metal_Canvas-ff51fa?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![Firebase v11](https://img.shields.io/badge/Backend-Firebase_Firestore-ffbdf3?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-ac89ff?style=for-the-badge)](LICENSE)

---

## 🎮 Demonstração Online

O jogo está em produção e pode ser jogado diretamente pelo navegador:  
👉 **[https://infinitycaos.com/](https://infinitycaos.com/)**

---

## ⚡ Protocolos do Sistema (Destaques)

* **Arena Procedural Dinâmica (4000x4000):** Reconfigura a arena em tempo de execução entre *Arenas Abertas*, *Labirintos de Reflexão*, *Campos Minados* e *Zonas Mortas*.
* **Mutação de Pulso [Perigo Crítico]:** A cada 50 segundos, uma anomalia em expansão varre o mapa a partir do núcleo. Qualquer entidade fora de cobertura sólida é vaporizada.
* **Overdrive Neural (Adrenaline Mode):** Dilatação temporal (*slow-motion*) ativada por cálculo de proximidade vetorial em situações de perigo iminente.
* **Sincronização de Placar Global:** Persistência de recordes e ranking em tempo real via Firebase Firestore.

---

## ⚠️ Registro de Ameaças (IAs Inimigas)

O sistema ajusta dinamicamente as classes de inimigos injetadas na arena conforme a eficiência do jogador:

| Classe | Designação | Vetor de Comportamento |
| :--- | :--- | :--- |
| **Normal** | `Chaser` | Perseguição vetorial direta contínua. |
| **Artillery** | `Sniper` | Posição estática; projeta feixe de mira e dispara projéteis velozes com ricochete. |
| **Void** | `Phantom` | Perseguição espectral imune a colisões com obstáculos e paredes. |
| **Saboteur** | `Mine Layer` | Evasão tática do jogador com dispersão de minas temporizadas. |
| **Precognitive** | `Hunter AI` | Calcula a trajetória futura do jogador para interceptação antecipada. |
| **Zealot** | `Kamikaze` | Bloqueio de mira, sobrecarga de propulsor e investida suicida em alta velocidade. |

### 👑 Entidades Apex (Chefes a cada 100 pontos)
* **The Architect (Ciano):** Manipula a geometria do cenário, deslocando obstáculos e erguendo barreiras de confinamento ao redor do jogador.
* **Sniper God (Vermelho):** Dispara rajadas em leque com projéteis ricocheteantes e realiza translocação quântica (teleporte) após cada ciclo de ataque.

---

## 🕹️ Interface do Operador (Controles & Power-ups)

* **Objetivo:** Colete os Alvos de Dados (Rosas) em rápida sucessão para manter e elevar o multiplicador de Combo.
* **Controles Desktop:** O avatar é orientado pelo cursor do mouse; `Clique Esquerdo` ou `Espaço` ativa o Propulsor (**DASH**).
* **Controles Mobile:** Joystick virtual analógico à esquerda e botão dedicado de **DASH** à direita.

### Arquivos de Suporte (Power-ups)
* 🟢 **Aegis (Escudo):** Absorve a próxima colisão fatal.
* 🔵 **Overclock (Velocidade):** Incrementa temporariamente a mobilidade e o rastro de partículas.
* 🟠 **Singularidade (Bomba):** Pulso expansivo que aniquila ameaças de classe baixa no raio de ação.

---

## ⚙️ Arquitetura de Software & Tech Stack

O projeto adota uma filosofia *bare-metal* para garantir 60 FPS consistentes mesmo sob alta densidade de partículas e entidades:

* **Motor de Renderização:** HTML5 `<canvas>` com cálculo de partículas procedurais e efeitos de iluminação néon.
* **Física & Colisões:** Algoritmos de colisão OBB (*Oriented Bounding Box*) e física vetorial implementados em Vanilla JavaScript puro.
* **Áudio:** Síntese em tempo real com Web Audio API combinada a trilhas dinâmicas em `assets/audio/`.
* **Backend:** Firebase v11 (Autenticação Anônima/OAuth e regras de validação de pontuação no Firestore).
* **Interface & HUD:** Tailwind CSS, Google Fonts (*Space Grotesk*, *Manrope*, *Tiny5*) e Material Symbols.

---

## 🔌 Execução Local

O projeto não exige etapas complexas de compilação para o jogo base:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/guiuz/infinity-caos-game.git](https://github.com/guiuz/infinity-caos-game.git)
   cd infinity-caos-game
