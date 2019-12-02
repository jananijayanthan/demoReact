import React from 'react';

export default ({children, ctaType, href}) => {
    // ctaType = 'a' | 'button'
    const CTAType = ctaType;

    return (
        <CTAType href={href}>{children}</CTAType>
    )
}