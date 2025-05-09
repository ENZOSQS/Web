import React from "react";
import { produtos } from "./produtos/produtos";
import { useNavigate } from "react-router-dom";
const Produtos = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <button onClick={() =>
        navigate('/')} style={styles.botao}>HOME</button>
      {produtos.map((produto, index) => (
        <div key={index} style={styles.card}>
          <img src={produto.imagem} alt={produto.nome} style={styles.imagem} />
          <h2>{produto.nome}</h2>
          <p>R$ {produto.valor.toFixed(2)}</p>
          <button style={styles.botao}>Comprar</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
    backgroundColor: "rgb(0, 0, 0)",
  },

  card: {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "rgb(84, 161, 103)",
  },
  imagem: {
    width: "100%",
    height: "auto",
  },
  botao: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
export default Produtos;