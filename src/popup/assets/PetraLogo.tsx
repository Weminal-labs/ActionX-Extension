import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width={32}
            height={32} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="#FF5F5F">
            <path d="M473.73,933.7h0c-158.66,0-287.28-128.62-287.28-287.28V170.77S473.73,66.3,473.73,66.3V933.7Z">
            </path>
            <path d="M526.27,576.86h0c158.66,0,287.28-128.62,287.28-287.28v-118.81s-287.28-104.47-287.28-104.47v510.56Z">
            </path>
        </svg>
    );
}

export default SvgComponent;
