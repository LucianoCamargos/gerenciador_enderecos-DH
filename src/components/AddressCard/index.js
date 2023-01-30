import "./AddressCard.css";

function AddressCard({ id, numero, rua, bairro, cidade, estado }) {
  return (
    <div>
      <span>Id: {id}</span>
      <span>Bairro: {bairro}</span>
      <span>Rua: {rua}</span>
      <span>Numero: {numero}</span>
      <span>Cidade: {cidade}</span>
      <span>Estado: {estado}</span>
    </div>
  );
}

export default AddressCard;