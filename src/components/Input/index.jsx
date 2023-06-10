import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from '../../utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import './input.scss';

function Input(props) {
    const { 
        register,
        formState: { errors },
    } = useFormContext();

    const inputErrors = findInputError(errors, props.name);

    const isInvalid = isFormInvalid(inputErrors);

    return (
        <>
            <div className="label_container">
                <label htmlFor={props.id}>
                    {props.label}
                </label>
                {isInvalid && (
                <InputError
                    message={inputErrors.error.message}
                    key={inputErrors.error.message}
                />
                )}
            </div>
            {props.multiline ? (
                <textarea
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    {...register(props.name, props.validation)}
                ></textarea> 
            ) : (
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    {...register(props.name, props.validation)}
                />
            )}
        </>
    )
}

function InputError(props) {
    return (
        // <motion.p
        //     className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
        //     {...framer_error}
        // >
        // <MdError />
        <p className="input_required error">
            <FontAwesomeIcon icon={faExclamation} />
            {props.message}
        </p>
        
        // </motion.p>
    )
}

export default Input