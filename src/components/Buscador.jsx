const Buscador = ({data,dataFilter}) => {
  const inputHandle = (e) => {
    const findUser = e.target.value.toLowerCase();
    const result = data.filter(
      (user) =>
        user.nombre.toLowerCase().includes(findUser) ||
        user.edad.toLowerCase().includes(findUser) ||
        user.cargo.toLowerCase().includes(findUser) ||
        user.telefono.toLowerCase().includes(findUser) ||
        user.correo.toLowerCase().includes(findUser)
    );
    dataFilter(result);
  };
  return (
    <div className="buscador col-14 col-md-6">
      <input
        className="form-control mb-3"
        type="text"
        name="search"
        id="search"
        placeholder="Buscar Colaborador"
        onChange={inputHandle}
      />
    </div>
  );
};

export default Buscador;
