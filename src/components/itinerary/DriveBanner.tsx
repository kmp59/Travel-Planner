import type { FC } from "react";

interface DriveBannerProps {
    text: string;
}

const DriveBanner: FC<DriveBannerProps> = ({ text }) => (
    <div className="rm-drive">{text}</div>
);

export default DriveBanner;