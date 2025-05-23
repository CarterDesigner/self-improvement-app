"use client";

import { useEffect } from "react";
import "./stats.css";

//scripts

export default function StatCard({ cardID, statID, statName, bannerColor }: { cardID: string; statID: string; statName: string; bannerColor: string; }) {
    useEffect(() => {
    }, []);
    return (
        <div className="stat-card bg-white border-3 border-black cursor-pointer" id={cardID}>
            <div className="content flex flex-col p-[15px]">
                <div className={`banner mt-[-15px] mx-[-15px] mb-[-20px] w-[calc(100_+_30px)] h-[50px] ${bannerColor}`}></div>
                <div className="title w-full flex items-center justify-between gap-[10px] text-[30px] font-[900] text-black uppercase tracking-[-2px]">
                    <p className="w-full truncate">{statName}</p>
                    <div className={`triangle w-0 h-0`}></div>
                </div>
                <div className="w-full min-h-[100px] flex items-center justify-center">
                    <p className="text-[50px] text-black font-[800]"><span id={`${statID}`}>0</span></p>
                </div>
            </div>
        </div>
    )
}