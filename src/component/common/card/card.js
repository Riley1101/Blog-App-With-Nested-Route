import './card.css'
import { useHistory } from 'react-router';
const Card = ({ data }) => {
    const history = useHistory();
    return (
        <div className='card'>
            <h2 className="card__title">
                {data.title}
            </h2>
            <button onClick={() => history.push(`/detail/${data.id}`)}>Read More</button>
        </div>
    )
}
export default Card;