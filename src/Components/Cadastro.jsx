export default function Cadastro({ onSwitchHome }) {
  return (
    <>
      <h2>Faça seu Cadastro</h2>
      <div className="div-login">
        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Email"
          />
          <input type="text" name="user" id="user" placeholder="Usuário" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <button type="submit">Cadastrar</button>
        </form>
        <div className="div-account">
          <a
            onClick={(e) => {
              e.preventDefault();
              onSwitchHome();
            }}
            href=""
          >
            Já possui conta? Faça Login
          </a>
        </div>
      </div>
    </>
  );
}
