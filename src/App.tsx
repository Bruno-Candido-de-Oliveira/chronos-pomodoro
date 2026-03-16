import { Heading } from './components/Heading';
import '../styles/global.css';
import '../styles/theme.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading>
        Bruno Candido
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui cum,
        minima eaque natus vel explicabo labore ea architecto, totam quae aut
        unde quisquam debitis tempora repellendus ipsam nam? Sint, temporibus?
      </p>
    </>
  );
}
