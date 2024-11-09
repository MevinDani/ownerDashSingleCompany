import React from 'react'
import leftImg from '../../images/login-image.png'

const Blob2 = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            viewBox="0 0 1920 1080"
        >
            <defs>
                <pattern id="bg-pattern" width="100%" height="100%" patternUnits="userSpaceOnUse">
                    <image
                        width="100%" // Set the width to 100% to cover the entire pattern
                        height="100%" // Set the height to 100% to cover the entire pattern
                        href={leftImg}
                        preserveAspectRatio="xMidYMid meet" // Adjust the preserveAspectRatio as needed
                    ></image>
                </pattern>
            </defs>
            <path
                fill="url(#bg-pattern)"
                d="M1724 592c-4.833 133.755-56.156 227.143-139.237 345.692-83.082 118.549-217.163 303.5-359.251 365.6-142.088 62.1-349.062 52.743-493.275 7-144.212-45.742-290.96-159.404-372-281.453C279.197 906.79 244 707.239 246 578c2-129.24 42.864-200.047 126.237-324.596 83.373-124.548 238.42-388.425 374-422.696 135.58-34.272 294.891 166.327 439.479 217.07 144.587 50.742 338.333-3.32 428.047 87.383C1703.477 225.865 1728.833 458.245 1724 592c-4.833 133.755-56.156 227.143-139.237 345.692"
            ></path>
        </svg>
    );
}

export default Blob2

