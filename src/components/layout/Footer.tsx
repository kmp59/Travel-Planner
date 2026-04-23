import type { FC } from "react";
import { FOOTER_TIPS } from "../../data/data.ts";

const Footer: FC = () => (
    <div className="rm-footer">
        {FOOTER_TIPS.map((t) => (
            <div key={t.label} className="rm-ft">
                <div className="rm-fi">{t.icon}</div>
                <div className="rm-fx">
                    <strong>{t.label}</strong> {t.text}
                </div>
            </div>
        ))}
        <div className="rm-fbrand">Rockies Adventure · June 17–19, 2025</div>
    </div>
);

export default Footer;