import React from 'react';
import Button from './Button/Button';

import githubIcon from "../Assets/github.svg";


const GithubButton: React.FC = () => {

    return <a href="https://github.com/DanielCeron-dc" style={{ paddingBottom: 2 }} >
        <Button onClick={() => { }} data-tip data-for="github">
            <img src={githubIcon} alt="Github Button" />
        </Button>
    </a>

}
export default GithubButton;