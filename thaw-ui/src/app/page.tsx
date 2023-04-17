import { Inter } from "next/font/google";
import Header from "../../components/Layouts/Header";
import Campaign from "@/components/campaign/Campaign";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Campaign />
    </>
  );
}
