import './App.css';

function App() {
  function formatName(username) {
    return username.toUpperCase();
  }
  function getGreetin(name) {
    if (name) {
      return <h1>Hello {formatName(name)}</h1>;
    } else {
      return <h1>Hello Friend</h1>;
    }
  }
  const userName = 'emran';
  //const element = <h1>Hello {formatName(userName)}</h1>;
  //const image = <img src="./logo192.png" alt="logo" />;

  return getGreetin(userName);
}

export default App;
