import React, { useState } from "react";

  const Formulario = ({ data, setData, setDataFilter, dataFilter, setAlert }) => {
  const [colabData, setColabData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const handleInputs = (e) => {
    const inputs = {
      inputName: "nombre",
      inputEmail: "correo",
      inputAge: "edad",
      inputPosition: "cargo",
      inputPhone: "telefono",
    };
    const inputProp = inputs[e.target.id];
    if (inputProp) {
      setColabData({ ...colabData, [inputProp]: e.target.value });
    }
  };
  const dataValidation = (e) => {
    e.preventDefault();
    const emailValidation =
      /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;
    if (
      colabData.nombre.trim() === "" ||
      colabData.correo.trim() === "" ||
      colabData.edad.trim() === "" ||
      colabData.cargo.trim() === "" ||
      colabData.telefono.trim() === ""
    ) {
      setAlert({
        error: true,
        mensaje: "Completa todos los campos",
        color: "text-danger",
      });
      setTimeout(() => {
        setAlert({
          error: false,
          mensaje: "",
          color: "",
        });
      }, 8000);
      return;
    }
    if (!emailValidation.test(colabData.correo)) {
      setAlert({
        error: true,
        mensaje: "Ingrese un correo valido",
        color: "text-danger",
      });
      setTimeout(() => {
        setAlert({
          error: false,
          mensaje: "",
          color: "",
        });
      }, 8000);
      return;
    }
    setAlert({
      error: false,
      mensaje: "Colaborador agregado con exito",
      color: "text-success",
    });
    setTimeout(() => {
      setAlert({
        error: false,
        mensaje: "",
        color: "",
      });
    }, 8000);
    const newColab = { ...colabData, id: data.length + 1 };
    setData([...data, newColab]);
    setDataFilter([...dataFilter, newColab]);
    setColabData({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };
  return (
    <div className="formulario m-6 text-center bg-dark p-3 rounded">
      <form noValidate onSubmit={dataValidation}>
        <div className="mb-2">
          <input
            type="text"
            value={colabData.nombre}
            className="form-control"
            id="inputName"
            placeholder="Nombre del Colaborador"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            value={colabData.correo}
            className="form-control"
            id="inputEmail"
            placeholder="E-mail"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            value={colabData.edad}
            className="form-control"
            id="inputAge"
            placeholder="Edad"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={colabData.cargo}
            className="form-control"
            id="inputPosition"
            placeholder="Cargo"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={colabData.telefono}
            className="form-control"
            id="inputPhone"
            placeholder="Telefono"
            onChange={handleInputs}
          />
        </div>
        <div className="pt-4">
          <button className="btn btn-danger " type="submit">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
