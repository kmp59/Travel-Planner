import type { FC } from "react";
import type { PillVariant } from "../../types/types.ts";

interface PillProps {
    label: string;
    variant: PillVariant;
}

const Pill: FC<PillProps> = ({ label, variant }) => (
    <span className={`pill${variant ? ` ${variant}` : ""}`}>{label}</span>
);

export default Pill;