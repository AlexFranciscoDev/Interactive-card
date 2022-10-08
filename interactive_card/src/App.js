import { Card } from './components/Card';
import { Form } from './components/Form';
import { Thankyou } from './components/Thankyou';
import logo from './logo.svg';
import './styles/styles.scss';

function App() {
  return (
    <div className="container">
      <div className="leftColumn">
        <Card />
      </div>
      <div className="rightColumn">
        <Form />
        <Thankyou />
      </div>
    </div>
  );
}

export default App;
