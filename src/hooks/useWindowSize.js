import React from 'react';

const useWindowSize = () => {
    const [isDesktop, setIsDesktop] = React.useState(true);

    const handleSizeCheck = () => {
        if (window.innerWidth > 768) setIsDesktop(true)
        else setIsDesktop(false)
    }

    React.useLayoutEffect(() => {
        window.addEventListener('resize', handleSizeCheck);
        return (() => {
            window.removeEventListener('resize', handleSizeCheck);
        })
    }, [])

    return isDesktop;
}
 
export default useWindowSize;