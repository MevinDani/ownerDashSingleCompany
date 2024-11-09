import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

const useIntersectionObserver = (callback, options) => {
    const targetRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    const debouncedCallback = debounce(() => {
        setIsInViewport(true);
        callback();
    }, 200); // Adjust the debounce delay as needed

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !isInViewport) {
                        debouncedCallback();
                    } else if (!entry.isIntersecting && isInViewport) {
                        setIsInViewport(false);
                    }
                });
            },
            options
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [debouncedCallback, isInViewport, options, targetRef]);

    // console.log(isInViewport)

    return { targetRef, isInViewport };
};

export default useIntersectionObserver;
