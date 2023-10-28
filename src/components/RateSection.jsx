import PropTypes from 'prop-types';

export const RateSection = (props) => {
    return (
        <div 
        style={{
            width: '335.5px',
            height: '86px',
            display:'flex', 
            alignItems:'end'
        }}
        >
            <div 
        style={{
            width: '335.5px',
            height: '56px',
            // gap: '6px',
            display:'flex', 
            flexDirection:'column'
        }}
        >
            <label 
            style={{
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#3E424A'
            }}
            >
            {props.label}
            </label>
            <div style={{ 
                fontFamily: 'Inter',
                width: '347px',
                height: '25px',
                fontWeight: '500',
                fontSize:'14px',
                lineHeight:'16.94px',
                textAlign:'left'
                }} 
            >
                {props.taxRate} 
            </div>
        </div>
        </div>
    )
}

RateSection.propTypes = {
    label: PropTypes.string,
    taxRate: PropTypes.string,
  };