import type { FC } from "react";
import type { PillVariant } from "../../types/types";

interface PillProps {
    label: string;
    variant: PillVariant;
    prefix?: string;
}

const Pill: FC<PillProps> = ({ label, variant, prefix = "rm" }) => (
    <span className={`${prefix}-pill${variant ? ` ${variant}` : ""}`}>{label}</span>
);

export default Pill;