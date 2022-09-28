import ReactDOM from 'react-dom';

function App() {
  const element =
    (
      <div >
        <h1>Welcome to CBIT</h1>
        <h1>Now the Time is</h1>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(App, 1000);

export default App;