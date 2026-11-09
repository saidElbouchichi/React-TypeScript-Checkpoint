import { Component } from 'react';

// Étape 1 : renommer Counter.jsx en Counter.tsx
// Étape 2 : déclarer les types des props (aucune ici) et de l'état
type CounterProps = Record<string, never>;

interface CounterState {
  count: number;
}

// Étape 3 : passer les types en paramètres génériques de Component<Props, State>
class Counter extends Component<CounterProps, CounterState> {
  // Étape 4 : l'état initial est vérifié par TypeScript (count doit être un number)
  state: CounterState = {
    count: 0,
  };

  // Étape 5 : typer le retour de la méthode (void) ; la fonction fléchée garde le bon "this"
  increment = (): void => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
