import { Fragment, } from "react";

const Input = ({
    label, 
    type = "text", 
    labelClass, 
    inputClass, 
    labelId,
    inputId, 
    placeholder, 
    maxLength,
    onChange,
    labelShellClass,
    value}) =>{
    const input = ["tel", "text", "email", "password", "number", "date" ];

    // const [options, setOptions] = useState(value);

    // const handleOptions = () => {
    //     options.shift();
    //     setOptions(options);
    //     console.log()
    //     console.log("check")
    // }
    
        
    return(
        <Fragment>
            <div className="input-group-lg my-3">
                <div className= {labelShellClass}>
                    <label className={`${labelClass}  form-label`} id={labelId}>
                        {label}
                    </label>
                </div>
                {input.indexOf(type) !== -1 && (
                <input 
                    className={`${inputClass} form-control input-group-lg input-color`} 
                        type={type}
                    id = {inputId}
                    placeholder = {placeholder}
                    value = {value}
                    maxLength = {maxLength}
                    onChange = {(e)=>{onChange(e.target.value)}}
                />
                )}
                {type === "textarea" && (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    className={`${inputClass} form-control input-color`}
                    style={{lineHeight: '1.5'}}
                ></textarea>
                )}
                { type === "select" && (
                <select
                    className= {`${inputClass} form-control input-group-lg input-color`}
                    onChange= {(e)=>{
                        onChange(e.target.value)
                    }}
                >
                    {Array.isArray(value) && 
                        value.map((element, index) => {
                            console.log("are you running")
                            return (
                                <option key={index}>{element}</option>
                            )
                        })
                    }
                </select>
                )}
            </div>
        </Fragment>
    );
};

export default Input;