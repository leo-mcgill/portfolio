import React from 'react'
import { useAsciiText, ansiShadow } from 'react-ascii-text';

function MyComponent() {
    const asciiTextRef = useAsciiText({
        font: ansiShadow,
        text: "Leo McGill",
    });

    return <pre className='ascii-art' ref={asciiTextRef}></pre>;
}

function Home(){
    return (
    <>
    <div>
    <MyComponent />
    </div>
    </>
    );
}

export default Home;