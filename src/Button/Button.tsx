import React from 'react';
import classes from "./Button.module.css";


type ButtonProps = {
    onClick: () => void;

};

const Button: React.FC<ButtonProps> = (props) => {

    return <button className={classes.button} {...props}>
        {props.children}
    </button>
}
export default Button;