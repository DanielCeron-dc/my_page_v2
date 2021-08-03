import React from 'react';
import classes from "./Button.module.css";


interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    onClick: () => void;

};

const Button: React.FC<ButtonProps> = (props) => {

    return <button className={classes.button} {...props}>
        {props.children}
    </button>
}
export default Button;