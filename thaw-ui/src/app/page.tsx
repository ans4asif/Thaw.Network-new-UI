import { Inter } from "next/font/google";
import Dropdown from "../../components/Dropdown/Dropdown";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import { DashboardCardList } from "../../components/Dashboard/DashboardCardList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <div className="pt-8 pb-4 flex justify-between">
                <div>
                    <div className="font-general-sans-medium text-2xl text-primary-text">Overview Dashboard</div>
                    <p className="font-general-sans-regular text-sm text-secondery-text">
                        Track your activity and Campaign performance
                    </p>
                </div>
                <div className="flex items-end">
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 pb-6">
                {DashboardCardList.map((item) => (
                    <DashboardCard
                        key={item.title}
                        title={item.title}
                        total={item.total}
                        compare={item.compare}
                        percentage={item.percentage}
                        negativeValue={item.negativeValue}
                    />
                ))}
            </div>
        </div>
    );
}
