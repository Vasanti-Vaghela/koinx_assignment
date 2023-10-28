import PropTypes from 'prop-types';

export const TaxSubSection = (props) => {
    const sign = Math.sign(props.capitalGain)
    const netGain = props.showGainSection === 'Long Term' && sign === 1 ?  props.capitalGain - ((props.capitalGain*50)/100) : 0;
    console.log('RATE',typeof props.rate);
    const netPay =   netGain && props.rate !== 0 ? ((props.rate/100)*netGain) : 0;
    console.log('NET Pay',  netPay)
    const color = props.color;
    return(
        <div
        style={{
            width: '336.5px',
            height: '97px',
            padding: '8px',
            borderRadius: '8px',
            gap:'8px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            backgroundColor:'#EBF9F4'
        }}      
        >
        <label 
        style={{
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '19.36px',
            textAlign: 'center',
            color:'#0F1629'
        }}
        >
            {props.label}
        </label>
        <div 
        style={{
            fontFamily: 'Inter',
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '29px',
            letterSpacing: '0em',
            textAlign: 'center',
            color:`${color}`,
        }}
        >
           {props.label === 'Net Capital gains tax amount'? `$ ${netGain}` : `$ ${netPay}` } 
        </div>
        </div>
    )
}

TaxSubSection.propTypes = {
    label: PropTypes.string,
    color:PropTypes.string,
    showGainSection: PropTypes.string,
    capitalGain: PropTypes.number,
    rate:PropTypes.number,
};