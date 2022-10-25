import { useState } from 'react';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Thankyou } from './components/Thankyou';
import logo from './logo.svg';
import './styles/styles.scss';

function App() {
  const [formData, setFormData] = useState({});
  const [validatedCard, setValidatedCard] = useState(false);
  const getDataForm = (data) => {
    console.log("this is my data " +data);
  }


  return (
    <div>
    <div className="container">
      <div className="leftColumn">
        <Card formData={formData}/>
      </div>
      <div className="rightColumn">
        {!validatedCard ? <Form setFormData={setFormData} setValidatedCard={setValidatedCard}/> : <Thankyou setValidatedCard={setValidatedCard}/>}
        
        {/* <Thankyou /> */}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
