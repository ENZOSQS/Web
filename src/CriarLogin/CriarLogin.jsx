import { Link } from 'react-router-dom';
function CriarLogin() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Criar Conta</h1>
      <form>
        <input type="text" placeholder="Novo usuário" /><br />
        <input type="password" placeholder="Nova senha" /><br />
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <Link to="/produtos">Ver produtos</Link></p>
    </div>
  );
}

export default CriarLogin;