import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const SearchModal = ({list, type}) => {

    const myClass = type==="mobile" ? "mobile" : "desktop"

  return (
    <div className={`search-modal ${myClass}`}>
        {list.map((item) => {
            return <div className='search-modalCard' key={item.id}>
                <Link to={`/product/${item.id}`}>
                    <div className="searchCardImg">
                        <img src={item.img} alt={item.name.replaceAll(" ", "-")} />
                    </div>
                    <div className="searchCardInfo">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                </Link>
            </div>
        })}
    </div>
  )
}

SearchModal.propTypes = {
    list: PropTypes.array.isRequired,
    type: PropTypes.string
}

export default SearchModal