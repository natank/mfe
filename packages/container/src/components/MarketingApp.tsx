import React, { useRef, useEffect } from 'react';
// @ts-ignore
import mount from 'marketing/MarketingApp';
export default () => {
    const ref = useRef(null);
    console.log(ref.current)
    useEffect(()=> {
        console.log(mount)
        mount(ref.current);
    })
    return <div ref={ref} />;
}