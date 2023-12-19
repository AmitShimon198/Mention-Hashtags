import { FunctionComponent, ReactNode, useState } from 'react'
import classes from './AnimatedBox.module.css';

interface AnimatedBoxProps {
    children: ReactNode;
}

export const AnimatedBox: FunctionComponent<AnimatedBoxProps> = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div
            className={`${classes.box} ${isExpanded ? classes.expanded : ''}`}
            onClick={handleClick}
        >
            {children}
        </div>
    )
}
