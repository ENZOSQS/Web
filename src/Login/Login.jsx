import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      
      {/* Link para a tela de CriarLogin */}
      <p>Não tem uma conta? <Link to="/criar-login">Crie uma aqui</Link></p>

      {/* Link para a tela de Produtos */}
      <p>Já tem uma conta? <Link to="/produtos">Ver produtos</Link></p>
    </div>
  );
}

export default Login;
