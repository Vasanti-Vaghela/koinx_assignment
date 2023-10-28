import { useState } from 'react';
import { InputNumber } from 'antd';
import PropTypes from 'prop-types';

export const InputSubSection = (props) => {
    const [value, setValue]= useState();
    return(
        <div style={{
            width:'335.5px', height:'86px', gap:'8px', display:'flex', flexDirection:'column'
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
        <InputNumber
         style={{ 
            width: '335.5px',
            height: '56px',
            padding: '17px 16px 17px 16px',
            borderRadius: '8px',
            gap:'8px',
            backgroundColor: '#EFF2F5',
            }} 
            prefix='$'
            value={value}
            onPressEnter={(e)=>{
                console.log('e',e.target.value);
                    setValue(e.target.value)
                    console.log(e.target.value)
                  
                        if(props.label === 'Enter purchase price of Crypto'){
                        props.setPurchase(e.target.value)
                            // if(props.flag){

                            props.calculateCapitalGain();
                            // }
                    }
                    else{
                        props.setSale(e.target.value)
                        // if(props.flag){

                            props.calculateCapitalGain();
                        // }
                    }
                    

                }
            }
        />
        </div>
    )
}
InputSubSection.propTypes = {
    label: PropTypes.string,
    calculateCapitalGain: PropTypes.func,
    flag: PropTypes.bool,
    setSale: PropTypes.func,
    setPurchase: PropTypes.func,
  };
