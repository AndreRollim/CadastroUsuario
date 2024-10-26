import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "123123",
      age: 33,
      name: "Rodolfo",
      email: "andre@email.com",
    },
    {
      id: "123123",
      age: 36,
      name: "Marilia",
      email: "marilia@email.com",
    },
    {
      id: "13123",
      age: 56,
      name: "Joao",
      email: "Joao@email.com",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="Email" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <nav className="card">
          <div>
            <p>
              Nome: <span> {user.name} </span>
            </p>
            <p>
              Idade: <span> {user.age} </span>
            </p>
            <p>
              Email: <span> {user.email} </span>
            </p>
          </div>

          <button>
            <img src={Trash} alt="" />
          </button>
        </nav>
      ))}
    </div>
  );
}

export default Home;
