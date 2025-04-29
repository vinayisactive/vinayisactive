import { ReactNode } from "react";

function WidthWrapper({children, className}: {children: ReactNode; className?:string}){
    return(
        <main className={`w-full max-w-3xl mx-auto px-6 md:px-4 ${className}`}>
            {children}
        </main>
    )
}; 

export default WidthWrapper; 