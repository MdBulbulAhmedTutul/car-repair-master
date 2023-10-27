import { initializeApp } from "firebase/app";

const firebaseConfig = {
    VITE_apiKey:import.meta.env.VITE_apiKey,
    VITE_authDomain:import.meta.env.VITE_authDomain,
    VITE_projectId:import.meta.env.VITE_projectId,
    VITE_storageBucket:import.meta.env.VITE_storageBucket,
    VITE_messagingSenderId:import.meta.env.VITE_messagingSenderId,
    VITE_appId:import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
export default app;