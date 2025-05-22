import { Link } from 'react-router-dom';

function Login() {
  return (
  <div class="login-container">
    <h1>Login</h1>
    <form class="login-form">
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
    </form>

    <p>Não tem uma conta? <Link to="/criar-login">Crie uma aqui</Link></p>
    <p>Já tem uma conta? <Link to="/produtos">Ver produtos</Link></p>
</div>
  )
}



export default Login;
