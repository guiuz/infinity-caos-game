// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr898SQjCgWEBSYvE45Bemu1j07IorkZw",
    authDomain: "square-dash-neon.firebaseapp.com",
    projectId: "square-dash-neon",
    storageBucket: "square-dash-neon.firebasestorage.app",
    messagingSenderId: "1050188055521",
    appId: "1:1050188055521:web:f7d2a8784fe323625988a0",
    measurementId: "G-LLZX1WCVDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export async function salvarPontuacao(nome, pontos, nivel = 1) {
    // Condição: Apenas salvar pontuações a partir de 2000 pontos.
    if (pontos < 2000) {
        console.log(`Pontuação ${pontos} não é alta o suficiente para o placar. Mínimo: 2000.`);
        return; // Interrompe a função se a pontuação for muito baixa.
    }

    await addDoc(collection(db, "leaderboard"), {
        name: nome,
        score: pontos,
        level: nivel,
        timestamp: Date.now()
    });
    console.log(`Pontuação ${pontos} salva com sucesso para ${nome}!`);
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export async function loginComGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        localStorage.setItem("playerName", user.displayName || "PILOT_G" + Math.floor(Math.random() * 1000));
        if (user.photoURL) {
            localStorage.setItem("playerPhoto", user.photoURL);
        }
        window.location.href = "secundaria.html";
    } catch (error) {
        console.error("Erro no login com Google:", error);
        alert("Falha no login com Google: " + error.message);
    }
}

export async function loginComApple() {
    try {
        const result = await signInWithPopup(auth, appleProvider);
        const user = result.user;
        localStorage.setItem("playerName", user.displayName || "PILOT_A" + Math.floor(Math.random() * 1000));
        if (user.photoURL) {
            localStorage.setItem("playerPhoto", user.photoURL);
        }
        window.location.href = "secundaria.html";
    } catch (error) {
        console.error("Erro no login com Apple:", error);
        alert("Falha no login com Apple: " + error.message);
    }
}