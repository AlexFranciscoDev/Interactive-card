import { Card } from './components/Card';
import { Form } from './components/Form';
import { Thankyou } from './components/Thankyou';
import logo from './logo.svg';
import './styles/styles.scss';

function App() {
  return (
    <div className="app">
      <Card/>
      <Form/>
      <Thankyou/>
    </div>
  );
}

export default App;
