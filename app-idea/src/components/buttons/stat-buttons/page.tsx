import { ReactNode } from "react";
import '../buttons.css';

export default function StatButtonMain({ children, dataStat, dataDelta }: { children: ReactNode, dataStat: string; dataDelta: number; }) {
    return (
        <button data-update data-stat={dataStat} data-delta={dataDelta}>
            {children}
        </button>
    )
}