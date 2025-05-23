import { ReactNode } from "react";
import '../buttons.css';

export default function ButtonMain({ children }: { children: ReactNode; }) {
    return (
        <button>
            {children}
        </button>
    )
}