import Link from "next/link";
import DashboardSvg from "../Svg/HeaderMenuSvg/DashboardSvg";
import AudienceSvg from "../Svg/HeaderMenuSvg/AudienceSvg";
import CampaignsSvg from "../Svg/HeaderMenuSvg/CampaignsSvg";
import PitchDeckSvg from "../Svg/HeaderMenuSvg/PitchDeckSvg";
import MeetingsSvg from "../Svg/HeaderMenuSvg/MeetingsSvg";

interface Props {
    title: string;
    active: boolean;
    link: string;
    icon: JSX.Element;
}

const HeaderMenuCard: React.FC<Props> = ({ title, icon, link, active }) => {
    return (
        <Link href={`${link}`}>
            <li
                className={`${
                    active
                        ? "border-b-2 border-active-menu bg-[#1C487C]"
                        : "hover:border-b-2 hover:border-active-menu hover:bg-[#1C487C]"
                } flex items-center gap-2 px-4 h-11`}
            >
                {/* {`<{icon} className="stroke-inactive-menu" />`} */}
                <div>{icon}</div>
                <div>{title}</div>
            </li>
        </Link>
    );
};

export default HeaderMenuCard;
