import PropTypes from 'prop-types';
import { CustomRadio } from './CustomRadio';

export const  InvestmentSection = (props) => {
    return(
        <div 
            style={{
                width: '335.5px',
                height: '114px',
                display:'flex',
                flexDirection:'column',
                gap: '6px',
            }}
        >
             <label 
                style={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color:'#0F1629'
                }}
            >
            {props.label}
            </label>
            <div 
                style={{
                    width: '335px',
                    height: '56px',
                    gap: '10px',
                    display:'flex',
                    flexDirection:'row',
                }}
            >
                <CustomRadio onRadioChange={props.onRadioChange}/> 
            </div>
            <div style={{ display:'flex', flexDirection:'row',justifyContent:'space-between', width:'335px', height:'26px'}}>
                <div 
                style={{ 
                    width: '162.5px', 
                    textAlign:'left', 
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                }}
                >
                &lt; 12 months
                </div>
                <div 
                style={{ 
                    width: '162.5px', 
                    textAlign:'left', 
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                }}
                >
                &gt; 12 months
                </div>
            </div>
        </div>
    )
}

InvestmentSection.propTypes = {
    label: PropTypes.string,
    onRadioChange: PropTypes.func,
  };