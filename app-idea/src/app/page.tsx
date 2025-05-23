"use client";

import { useEffect } from "react";

// UI IMPORTS
import Section from "@/components/section/page";
import StatCard from "@/components/stat-card/page";
import StatButtonMain from "@/components/buttons/stat-buttons/page";
import TaskButton from "@/components/buttons/task-buttons/page";

//scripts
import { scoreImplimentation, updateStats } from '@/scripts/score-impliment';
import { updateStat } from "@/scripts/stats-manager";
import { stats } from "@/scripts/stats-manager";
import { setupTaskButtons } from '@/scripts/task-button';

export default function Home() {
  useEffect(() => {
    updateStat("focus", 0);
    setTimeout(() => {
      scoreImplimentation();
      console.log(stats);
    }, 1);
    updateStats();
    setupTaskButtons();
  }, []);
  return (
    <div className="w-screen px-[5%] lg:px-[10%]">
      <Section wrapperAtts="mt-[90px]" contentAtts="">
        <div className="w-full text-left">
          <h1 className="uppercase font-[700] text-[50px] text-black tracking-[-3px] italic">dashboard</h1>
        </div>
      </Section>
      <Section wrapperAtts="mb-[10px] lg:mb-[30px]" contentAtts="">
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-[10px] lg:gap-[30px] relative">
          <StatCard cardID="ovr-card" statID="overall" statName="Ovr." bannerColor="bg-pink" />
          <StatCard cardID="foc-card" statID="focus" statName="Focus" bannerColor="bg-light-gray" />
          <StatCard cardID="str-card" statID="strength" statName="Strength" bannerColor="bg-light-gray" />
          <StatCard cardID="con-card" statID="confidence" statName="Confidence" bannerColor="bg-light-gray" />
          <StatCard cardID="dis-card" statID="discipline" statName="Discipline" bannerColor="bg-light-gray" />
          <StatCard cardID="wis-card" statID="wisdom" statName="Wisdom" bannerColor="bg-light-gray" />
        </div>
      </Section>
      <div className="w-full flex gap-[10px]">
      </div>
    </div>
  );
}
