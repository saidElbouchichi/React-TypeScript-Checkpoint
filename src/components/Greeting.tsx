// Étape 1 : renommer Greeting.jsx en Greeting.tsx
// Étape 2 : décrire la forme des props avec une interface
interface GreetingProps {
  name: string;
}

// Étape 3 : typer les props déstructurées du composant fonctionnel
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
