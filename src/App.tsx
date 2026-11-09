import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '3rem' }}>
      <Greeting name="Said" />
      <Counter />
    </main>
  );
}

export default App;
