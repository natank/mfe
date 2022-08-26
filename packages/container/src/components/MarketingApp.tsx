import React, { useRef, useEffect } from 'react';
// @ts-ignore
import mount from 'marketing/MarketingApp';
import { useLocation, useNavigate } from 'react-router-dom';
export default () => {
    const ref = useRef(null);
    let location = useLocation();
    let { pathname } = location;
    let navigate = useNavigate();
    useEffect(() => {
         const onParentNavigate = mount(ref.current, {
            initialPath: location.pathname,
            onNavigate: ({ pathname: nextPathName }: { pathname: string }) => {
                const { pathname } = location;
                pathname !== nextPathName &&
                    (
                        navigate(nextPathName)
                    );
            }
        });
        onParentNavigate({pathname: location.pathname})
    }, [pathname]);
    return <div ref={ref} />;
}