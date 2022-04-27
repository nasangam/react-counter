import React, {useState} from 'react'
import PropTypes, { checkPropTypes } from 'prop-types';

function Checkbox({label, onChange}) {
    const [checked,setChecked] = useState(false);
    const onChangeHandler = (e)=>{
        setChecked(e.target.checked);
        if(typeof onChange === 'function') onChange(e);
    }

    return (
        <div>
           <input type="checkbox" checked={checked} onChange={onChangeHandler}></input>
           {label} 
        </div>
    )
}
Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func
}
export default Checkbox
