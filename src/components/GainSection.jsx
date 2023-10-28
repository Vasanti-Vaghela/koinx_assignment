import { GainSubSection } from "./GainSubSection"
import PropTypes from 'prop-types';

export const GainSection = (props) => {
    
    return (
        <>
            <GainSubSection label={props.label_1}  capitalGain={props.capitalGain}/>
            <GainSubSection label={props.label_2} capitalGain={props.capitalGain} />
        </>
    )
}

GainSection.propTypes = {
    label_1: PropTypes.string,
    label_2: PropTypes.string,
    capitalGain: PropTypes.number,
};