import { TaxSubSection } from "./TaxSubSection"
import PropTypes from 'prop-types';

export const TaxSection = (props) => {
    return(
        <>
            <TaxSubSection label={props.label_1} color={props.color_1} showGainSection={props.showGainSection} capitalGain={props.capitalGain} />
            <TaxSubSection label={props.label_2} color={props.color_2} rate={props.rate} showGainSection={props.showGainSection} capitalGain={props.capitalGain}/>
        </>
    )
}

TaxSection.propTypes = {
    label_1: PropTypes.string,
    label_2: PropTypes.string,
    color_1: PropTypes.string,
    color_2: PropTypes.string,
    showGainSection: PropTypes.string,
    capitalGain: PropTypes.number,
    rate: PropTypes.number,
};