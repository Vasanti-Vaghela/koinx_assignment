import { InputSubSection } from "./InputSubSection"
import PropTypes from 'prop-types';

export const InputSection = (props) => {
    return (
        <>
            <InputSubSection label={props.label_1}  calculateCapitalGain={props.calculateCapitalGain} flag={props.flag} setPurchase={props.setPurchase}/> 
            <InputSubSection label={props.label_2}  calculateCapitalGain={props.calculateCapitalGain} flag={props.flag} setSale={props.setSale}/>
        </>
    )
}

InputSection.propTypes = {
    label_1: PropTypes.string,
    label_2: PropTypes.string,
    calculateCapitalGain: PropTypes.func,
    flag: PropTypes.bool,
    setPurchase: PropTypes.func,
    setSale: PropTypes.func,

};