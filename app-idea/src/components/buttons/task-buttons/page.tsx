import { ReactNode } from "react";
import '../buttons.css';

export default function TaskButton({ children, dataTask }: { children: ReactNode; dataTask: string; }) {
    return (
        <button data-task={dataTask}>
            Completed: {children}
        </button>
    )
}