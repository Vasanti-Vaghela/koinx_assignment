import PropTypes from 'prop-types';

export const TableSection = (props) => {
    return(
        <div style={{ width:`${props.width}`, height:`${props.height}`, gap:`${props.gap}`, display:`${props.display}`}}>
            {props.children}
        </div>
    )
}
TableSection.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    gap: PropTypes.string,
    display: PropTypes.string,
    children:PropTypes.element
  };
