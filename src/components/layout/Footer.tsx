import type { FC } from "react";
import type { FooterTip } from "../../types/types";

interface FooterProps {
    tips: FooterTip[];
    brand: string;
    prefix?: string;
}

const Footer: FC<FooterProps> = ({ tips, brand, prefix = "rm" }) => (
    <div className={`${prefix}-footer`}>
        {tips.map((t) => (
            <div key={t.label} className={`${prefix}-ft`}>
                <div className={`${prefix}-fi`}>{t.icon}</div>
                <div className={`${prefix}-fx`}>
                    <strong>{t.label}</strong> {t.text}
                </div>
            </div>
        ))}
        <div className={`${prefix}-fbrand`}>{brand}</div>
    </div>
);

export default Footer;