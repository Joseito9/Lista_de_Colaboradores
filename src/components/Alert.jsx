const Alert = ({color,msj}) => {
  return (
  <div>
    <p className={color}>{msj}</p>
  </div>
  );
}; 
export default Alert;
