import "../../Styles/Login.css";

export default function Login() {
  return (
    <section className="section-login">
      <div className="div-master-login">
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
        <hr className="separacao-login" />
        <div className="login-container">
          <h2>Faça seu Login</h2>

          <div className="div-login">
            <form>
              <input type="text" name="user" id="user" placeholder="Usuário" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
              />
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
