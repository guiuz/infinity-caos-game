# ⚡ Infinity Caos

> Jogo arcade survival 2D em estilo neon/cyberpunk, desenvolvido nativamente com HTML5 Canvas e Vanilla JavaScript.

[![Live Demo](https://img.shields.io/badge/DEMO-infinitycaos.com-00f1fe?style=for-the-badge&logo=google-chrome&logoColor=black)](https://infinitycaos.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-ac89ff?style=for-the-badge)](LICENSE)
[![Tech: Canvas 2D](https://img.shields.io/badge/Engine-HTML5_Canvas_2D-ff51fa?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

## 🎮 Live Demo

Experimente o jogo diretamente no navegador: **[infinitycaos.com](https://infinitycaos.com/)**

---

## 🚀 Destaques do Projeto

* **Renderização Nativa a 60 FPS:** Construído diretamente sobre a API Canvas 2D sem bibliotecas pesadas de jogos, garantindo carregamento ultrarrápido e consumo reduzido de recursos.
* **Geração Procedural de Arena (4000x4000):** O mapa reconfigura obstáculos e zonas de perigo dinamicamente (arenas abertas, labirintos de reflexão e campos minados).
* **Pulse Anomaly:** A cada 50 segundos, uma onda de pulso varre o mapa a partir do centro, exigindo uso tático de coberturas.
* **Adrenaline Mode:** Sistema de *time-dilation* que desacelera o tempo quando o jogador está em rota iminente de colisão com projéteis ou inimigos.
* **Persistência e Ranking Global:** Integração com Firebase (Firestore/Auth) para sincronização e ranking de pontuações em tempo real.

---

## 👾 Inteligência Artificial & Inimigos

Cada tipo de inimigo implementa um comportamento vetorial próprio:

| Inimigo | Comportamento |
| :--- | :--- |
| **Phantom** | Flutua diretamente em perseguição ao jogador, ignorando colisões com paredes. |
| **Kamikaze** | Fixa a mira, carrega energia e realiza investida de alta velocidade em linha reta. |
| **Hunter AI** | Algoritmo de predição de trajetória que busca interceptar o movimento futuro do jogador. |
| **Sniper** | Mantém distância de combate, projeta feixe de mira laser e dispara projéteis velozes. |
| **Ambusher** | Oculta-se atrás de obstáculos estáticos e acelera ao detectar proximidade. |
| **Espectro Ocular** | Boss/ameaça de alta velocidade com perseguição implacável. |

---

## 🛠️ Stack Tecnológico

* **Core:** HTML5 Canvas, JavaScript (ES6+).
* **Estilização & UI:** Tailwind CSS, Google Fonts (*Space Grotesk*, *Manrope*, *Tiny5*), Material Symbols.
* **Backend & Serviços:** Firebase (Authentication, Firestore Database), Google AdSense.
* **Áudio:** Web Audio API / integração de trilha sonora dinâmica.

---

## 💻 Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/guiuz/infinity-caos-game.git](https://github.com/guiuz/infinity-caos-game.git)
   cd infinity-caos-game
