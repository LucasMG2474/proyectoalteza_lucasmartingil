const Item = ({ prod }) => {
  return (
    <div className="card w-25 mt-10" key={prod.id}>
      <div className="card-header">
        {`${prod.nombre}`}
      </div>

      <div className="card-body">
        <img src={prod.foto} alt="  " />
        {prod.precio}
      </div>

      <div className="card-footer">
        <button className="btn btn-outline-primary">
          Detalle de producto
        </button>
      </div>
    </div>
  )
}

export default Item