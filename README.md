# Checkpoint Building React Apps with TypeScript — GOMYCODE

Conversion de deux composants React JavaScript en **TypeScript** (projet Vite `react-ts`).

## Étapes suivies

1. **Créer le projet** : `npm create vite@latest my-app -- --template react-ts`.
2. **Renommer** les fichiers `.jsx` en `.tsx`.
3. **Greeting** (composant fonctionnel) : créer une interface `GreetingProps { name: string }` et typer les props déstructurées `({ name }: GreetingProps)`.
4. **Counter** (composant classe) :
   - déclarer `CounterState { count: number }` (et des props vides) ;
   - écrire `class Counter extends Component<CounterProps, CounterState>` ;
   - typer l'état initial et la méthode `increment = (): void => {...}` ;
   - utiliser la forme fonctionnelle de `setState` pour partir de l'état précédent.
5. **Vérifier** avec `tsc` : la compilation passe en mode `strict`.

Le code de chaque fichier est commenté étape par étape (`src/components/Greeting.tsx`, `src/components/Counter.tsx`).

```bash
npm install
npm run dev
```
