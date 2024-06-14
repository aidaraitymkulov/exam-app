import './Card.scss'

export const Card = ({ product }) => {
    return (
      <div className="card">
        <div className="card__img">
          <img src={product.thumbnailUrl} alt={product.title} />
        </div>
        <div className='card__text'>
        <p className="card__title">{product.title}</p>
        </div>
      </div>
    );
  }