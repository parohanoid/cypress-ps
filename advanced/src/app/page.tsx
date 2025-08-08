'use client'
import CigarBanner from "@/components/cigarbanner";
import FullBanner from "@/components/fullbanner";
import Promotion from "@/components/promotion";
import Story from "@/components/story";

export default function Home() {
  return (
    <>
      <Promotion />
      <CigarBanner />
      <Story />
      <FullBanner />
    </>
  );
}
