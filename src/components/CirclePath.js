import PropTypes from "prop-types";

const CirclePath = ({fill, rotate, scale}) => {
    return (
        <g transform={scale}>
         <path
            className="circlePath" 
            d="M87 15.59a50 50 0 1 0 0 68.82ZM60.62 58.67a13.71 13.71 0 1 1-1.95-19.29 13.71 13.71 0 0 1 1.95 19.29Z"
            fill={fill} 
            transform={rotate}
        />  
        </g>
/*         <g className="circlePath" transform={rotate} width="100" height="100">
            <defs>
                <clipPath id="L1">
                    <rect data-name="Rectangle 1" fill="#fff" width="80%" height="100%" />
                </clipPath>
            </defs>
            <g data-name="Mask Group 1" clipPath="url(#L1)">
                <g data-name="Group 1">
                    <circle data-name="Ellipse 1" cx="50" cy="50" r="50" fill={fill} />
                    <circle data-name="Ellipse 2" cx="14" cy="14" r="14" transform="translate(36 36)" fill="#fff" />
                </g>
            </g>
        </g> */
    )
}

CirclePath.defaultProps = {
    fill: PropTypes.string.isRequired,
    rotate: PropTypes.string.isRequired
}

export default CirclePath;


