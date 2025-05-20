import { useState } from "react";
import "../../Styles/Login.css";
import Cadastro from "../../Components/Cadastro";
import Login from "../../Components/Login";

export default function Home() {
  const [isRegistering, setisRegistering] = useState(false);

  return (
    <section className="section-login">
      <div
        className={`div-master-login ${
          isRegistering ? "register-mode" : "login-mode"
        }`}
      >
        <div className="div-title-login">
          <h1>Bem vindo ao FavMovies</h1>
          <p>
            FavMovies é um aplicativo simples e funcional de login que serve
            como base para uma futura plataforma de organização de filmes
            favoritos. Com uma interface moderna e responsiva, o usuário pode
            acessar sua conta de forma segura e prática. Esse projeto é ideal
            para praticar conceitos de autenticação, estruturação de componentes
            em React e estilização com CSS, servindo como ponto de partida para
            funcionalidades mais avançadas no futuro.
          </p>
        </div>
        <hr
          className={`separacao-login ${
            isRegistering ? "register-mode" : "login-mode"
          }`}
        />
        <div className="login-container">
          {isRegistering ? (
            <Cadastro onSwitchHome={() => setisRegistering(false)} />
          ) : (
            <Login onSwitchHome={() => setisRegistering(true)} />
          )}
        </div>
      </div>
    </section>
  );
}
