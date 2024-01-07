
export const Card = ({ cardInfo }) => {
    const { brand, price, thumbnail, description } = cardInfo; 

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail} width={400} height={200}            
            alt="ImagePicture"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
            <p>{description}</p>
            <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
