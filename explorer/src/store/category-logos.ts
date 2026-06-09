import coreLogo from "../../external-assets/gw2/400px-GW2Logo_new.png";
import hotLogo from "../../external-assets/gw2/400px-HoT_Texture_Centered_Trans.png";
import pofLogo from "../../external-assets/gw2/400px-GW2-PoF_Texture_Centered_Trans.png";
import eodLogo from "../../external-assets/gw2/400px-EoD_Texture_Trans.png";
import sotoLogo from "../../external-assets/gw2/Secrets_of_the_Obscure_logo.png";
import janthirLogo from "../../external-assets/gw2/400px-Janthir_Wilds_logo.png";
import voeLogo from "../../external-assets/gw2/400px-Visions_of_Eternity_logo.png";
import lwLogo from "../../external-assets/gw2/300px-Living_World_logo.png";
import lw3Logo from "../../external-assets/gw2/300px-Living_World_Season_3_logo.png";
import lw4Logo from "../../external-assets/gw2/300px-Living_World_Season_4_logo.png";
import lw5Logo from "../../external-assets/gw2/300px-Living_World_Season_5_logo.png";

/**
 * Maps the `(X#)` / `(LW#)` prefix codes that t3d-lib puts in front of every category name
 * to the matching expansion / Living World season logo. Seasons 1 and 2 have no dedicated
 * logo, so they reuse the generic Living World mark.
 */
const LOGO_BY_CODE: Record<string, string> = {
  X0: coreLogo,
  X1: hotLogo,
  X2: pofLogo,
  X3: eodLogo,
  X4: sotoLogo,
  X5: janthirLogo,
  X6: voeLogo,
  LW1: lwLogo,
  LW2: lwLogo,
  LW3: lw3Logo,
  LW4: lw4Logo,
  LW5: lw5Logo,
};

const CODE_PREFIX = /^\((X\d+|LW\d+)\)\s*/;

export interface CategoryDisplay {
  /** Logo URL for the category's expansion/season, or null when there's no match. */
  icon: string | null;
  /** Category name with the recognised `(code)` prefix stripped (when a logo replaces it). */
  label: string;
}

/** Resolve a category name to its logo + display label, replacing the prefix code with the logo. */
export function resolveCategoryDisplay(category: string): CategoryDisplay {
  const match = CODE_PREFIX.exec(category);
  if (match) {
    const icon = LOGO_BY_CODE[match[1]] ?? null;
    if (icon) {
      return { icon, label: category.slice(match[0].length) };
    }
  }
  return { icon: null, label: category };
}
