import PropTypes from "prop-types"
import defaultImage from "../images/l.png"

const book = ({ image, title, price }) => {
    return (
        //defaultní hodnoty pro chybějící data řešeny podmínkou nebo ||
        <div>
            <h2>{title || "defaultní název"}</h2>
            <img src={image || defaultImage} alt="" />
            <p>{price || 1000},-Kč</p>
        </div>
    )
}

// zachycení chybové hlášky v logu pokud chyí data
book.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

//defaultní hodnoty pro chybějící data
book.defaultProps = {
    title: "Defaultní název",
    price: 1000,
    image: defaultImage,
}

export default book
