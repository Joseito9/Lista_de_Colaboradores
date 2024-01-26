import { useState } from 'react';
import './App.css';
import { BaseColaboradores } from './assets/BaseColaboradores';
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);
  const [alert, setAlert] = useState({
    error: "",
    mensaje: "",
    color: "",
  });
  return (
    <>
    <h1 className="my-8"> 
    <FontAwesomeIcon icon={faUsers } style={{color: "#0e37dd",}} />
      Lista de Usuarios
    </h1>
    <Buscador data={data} dataFilter={setDataFilter} />
      {<section>
        <div className="row row-cols-2 justify-content-end">
          <Listado
            data={data}
            dataFilter={dataFilter}
            setData={setData}
            setDataFilter={setDataFilter}
          />
        </div>
        <div className="form">
          {<Formulario
            data={data}
            dataFilter={dataFilter}
            setData={setData}
            setDataFilter={setDataFilter}
            setAlert={setAlert}
          /> } 
          {alert.msj && (
            <Alert color={alert.color} msj={alert.msj} />
          )}
        </div>
      </section> }
    </>
  )
}

export default App
