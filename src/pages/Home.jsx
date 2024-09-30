import React from 'react'
import { useAsciiText, modular } from 'react-ascii-text';

function MyComponent() {
    const asciiTextRef = useAsciiText({
        font: modular,
        text: "Leo McGill",
        isAnimated: false,
    });

    return <pre className='ascii-art' ref={asciiTextRef}></pre>;
}

function Home(){
    return (
    <>
    <div className='terminal-screen'>
    <MyComponent />
    </div>
    </>
    );
}

export default Home;