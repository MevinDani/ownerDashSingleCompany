
import React from "react";
import leftImg from '../../images/login-image.png'

function BlobSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
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
            {/* Add your other SVG elements here */}
            <path
                fill="url(#bg-pattern)" // Use the pattern as the fill for the path
                d="M142 24.1c10.1 8.9 14.1 25 17.5 38.9 3.4 13.9 6.2 25.4 9.7 39 3.6 13.6 7.8 29.3 4.2 42.7-3.7 13.5-15.3 24.7-28.8 28.8-13.6 4.1-29.1 1-43.7-.5-14.6-1.6-28.4-1.6-39-7.4-10.6-5.8-18.2-17.3-24.7-29.2-6.5-11.8-11.9-24.1-13.7-37.4-1.8-13.3.1-27.7 6.5-39.8 6.3-12.1 17.2-22 29.6-29.5C72 22.2 86 17.2 101 15.4c15-1.7 31-.2 41 8.7z"
            ></path>
        </svg>
    );
}

export default BlobSvg;