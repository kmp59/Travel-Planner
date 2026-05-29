import { sharedCss } from "./shared.css";

/**
 * Composes the full CSS string for a theme page.
 * Each theme file passes only its own theme-specific CSS string;
 * the shared structural rules are prepended automatically.
 */
export function buildThemeCss(themeCss: string): string {
    return sharedCss + themeCss;
}