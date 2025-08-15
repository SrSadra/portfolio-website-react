"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

const LoadingWrapper = ({children}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            {isLoaded && (
                <>
                    {children}
                </>
            )}
        </>
    );
}

export default LoadingWrapper
