import React, { FunctionComponent } from 'react';

interface WhatsAppContactShareButtonProps {
    text: string;
    url: string;
    children?: React.ReactElement;
}

const WhatsAppContactShareButton: FunctionComponent<WhatsAppContactShareButtonProps> = ({ text, url, children }) => {
    const encodedText = encodeURIComponent(text);
    const encodedURL = encodeURIComponent(url);

    const shareURL = `https://api.whatsapp.com/send?text=${encodedText} - ${encodedURL}`;

    return (
        <a style={{
            color: 'blue',
            textDecoration: 'none',
        }} href={shareURL} target="_blank" rel="noopener noreferrer">
            {!!children && children}
        </a>
    );
}

export default WhatsAppContactShareButton;
