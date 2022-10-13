import { useState } from 'react';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Thankyou } from './components/Thankyou';
import logo from './logo.svg';
import './styles/styles.scss';

function App() {
  const [formData, setFormData] = useState({});
  const getDataForm = (data) => {
    console.log(data);
  }


  return (
    <div className="container">
      <div className="leftColumn">
        <Card formData={formData}/>
      </div>
      <div className="rightColumn">
        <Form setFormData={setFormData}/>
        <Thankyou />
      </div>
    </div>
  );
}

export default App;
