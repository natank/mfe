import React, { useRef, useEffect } from 'react';
// @ts-ignore
import mount from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom'
export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathName }: { pathname: string }) => {
                const { pathname } = history.location;
                pathname !== nextPathName &&
                    (
                        history.push(nextPathName)
                    );
            }
        });
        history.listen(onParentNavigate);
    }, []);
    return <div ref={ref} />;
}