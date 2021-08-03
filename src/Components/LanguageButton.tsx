import React from 'react';
import languageIcon from "../Assets/language.svg";
import Button from './Button/Button';


const LanguageButton: React.FC<{ onClick: () => void }> = (props) => {

    return <Button onClick={props.onClick} style={{ paddingBottom: 2 }} data-tip data-for="language">
        <img src={languageIcon} alt="Language" />
    </Button>
}
export default LanguageButton;