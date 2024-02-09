import logo from './assets/logo.png';
import './App.css';

function LoginForm() {
  return (
    <div className="Login-container">
      <h3>Inicio de sesión</h3>
      <form className="Login-form">
        <div className="input-container">
          <label for="Email">Email</label>
          <input type="text" name="Email"/>
        </div>
        <div className="input-container">
          <label for="Password">Contraseña</label>
          <input type="text" name="Password"/>
        </div>
        <button className="Login-btn">Entrar</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm></LoginForm>
      </header>
    </div>
  );
}

export default App;
