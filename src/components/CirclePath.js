import PropTypes from "prop-types";

const CirclePath = ({fill, rotate}) => {
    return (
        <path 
            d="M87 15.59a50 50 0 1 0 0 68.82ZM60.62 58.67a13.71 13.71 0 1 1-1.95-19.29 13.71 13.71 0 0 1 1.95 19.29Z"
            fill={fill} 
            transform={rotate}
        /> 
    )
}

CirclePath.defaultProps = {
    fill: PropTypes.string.isRequired,
    rotate: PropTypes.string.isRequired
}

export default CirclePath;