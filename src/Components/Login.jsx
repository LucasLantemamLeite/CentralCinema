export default function Login({ onSwitchHome }) {
  return (
    <>
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

        <div className="div-account">
          <a
            onClick={(e) => {
              e.preventDefault();
              onSwitchHome();
            }}
            href="#"
          >
            Cadastrar-se
          </a>
          <a href="#">Esqueci minha senha</a>
        </div>
      </div>
    </>
  );
}
