import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, setUrl }) => {
    const { progress, url } = useStorage(file);

    setUrl(url);
    return (
        <div>{progress} %</div>
    );
}

export default ProgressBar;