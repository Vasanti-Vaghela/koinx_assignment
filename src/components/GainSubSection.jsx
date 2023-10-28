import PropTypes from 'prop-types';

export const GainSubSection = (props) => {
    const sign = Math.sign(props.capitalGain)
    const discount = sign === 1 ? ((props.capitalGain*50)/100) : '0';
    return (
        <div style={{
            width:'335.5px', height:'86px', gap:'6px', display:'flex', flexDirection:'column'
        }}>
        <label 
        style={{
            fontFamily: 'Inter',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0em',
            textAlign: 'left',
        }}
        >
        {props.label}
        </label>
        <div style={{ 
            width: '335.5px',
            height: '56px',
            padding: '17px 16px 17px 16px',
            borderRadius: '8px',
            gap:'8px',
            backgroundColor: '#EFF2F5',
            }} 
        >
        {props.label === 'Capital gains amount' && sign === 1  ? ` $ ${props.capitalGain}` : `$ ${discount}`}
        </div>
        </div>
    )
}

GainSubSection.propTypes = {
    label: PropTypes.string,
    capitalGain: PropTypes.number,
};
