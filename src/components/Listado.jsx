import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";

const Listado = ({data, setData, dataFilter, setDataFilter}) => {
  const deleteUsuario = (id) => {
    const deleteUser = dataFilter.filter((user) => user.id !== id)
    setDataFilter(deleteUser)
    setData(deleteUser)
  }

  const colab = dataFilter.map((user) => (
    <tr className="align-middle"
    key={user.id}>
      <td>{user.id}</td>
      <td>{user.nombre}</td>
      <td>{user.correo}</td>
      <td>{user.edad}</td>
      <td>{user.cargo}</td>
      <td>{user.telefono}</td>
      <td>{<FontAwesomeIcon icon={faXmark}  onClick={() => deleteUsuario(user.id)}/>}</td>
    </tr>
  ));
  return (
    <div className="table-responsive col-12 text-center">
      <Table variant="dark" className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{colab}</tbody>
      </Table>
    </div>
  );
};

export default Listado;
