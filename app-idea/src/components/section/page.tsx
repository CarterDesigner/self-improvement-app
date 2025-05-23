import React, { ReactNode } from "react";

export default function Section({ children, wrapperAtts, contentAtts }: { children: ReactNode; wrapperAtts: string; contentAtts: string; }) {
    return (
        <div className={`w-full h-auto ${wrapperAtts}`}>
            <div className={`content ${contentAtts}`}>
                {children}
            </div>
        </div>
    )
} 