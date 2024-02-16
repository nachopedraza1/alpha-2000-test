import { useEffect, useState } from "react";

export const useBreakpoint = () => {

    const [breakpoint, setBreakpoint] = useState(window.innerWidth);

    useEffect(() => {
        const updateBreakpoint = () => {
            setBreakpoint(window.innerWidth);
        };
        window.addEventListener('resize', updateBreakpoint);
        return () => {
            window.removeEventListener('resize', updateBreakpoint);
        };
    }, []);

    return {
        breakpoint
    }
}
