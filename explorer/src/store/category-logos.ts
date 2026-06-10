import coreLogo from "../../external-assets/gw2/guild-wars-2.png";
import hotLogo from "../../external-assets/gw2/heart-of-thorns.png";
import pofLogo from "../../external-assets/gw2/path-of-fire.png";
import eodLogo from "../../external-assets/gw2/end-of-dragons.png";
import sotoLogo from "../../external-assets/gw2/secrets-of-the-obscure.png";
import janthirLogo from "../../external-assets/gw2/janthir-wilds.png";
import voeLogo from "../../external-assets/gw2/visions-of-eternity.png";
import lwLogo from "../../external-assets/gw2/living-world.png";
import lw3Logo from "../../external-assets/gw2/living-world-season-3.png";
import lw4Logo from "../../external-assets/gw2/living-world-season-4.png";
import lw5Logo from "../../external-assets/gw2/living-world-season-5.png";
import guildHallsLogo from "../../external-assets/gw2/guild-halls.png";
import fractalsLogo from "../../external-assets/gw2/fractals-of-the-mists.png";
import pvpLogo from "../../external-assets/gw2/player-vs-player.png";
import wvwLogo from "../../external-assets/gw2/world-vs-world.png";
import festivalsLogo from "../../external-assets/gw2/festivals.png";

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

/**
 * Game-mode / activity categories carry no `(X#)`/`(LW#)` code, so they're matched on their
 * full category name instead. These use the in-game menu-bar / activity icons rather than
 * the marketing wordmarks the expansions get.
 */
const LOGO_BY_NAME: Record<string, string> = {
  "Guild Halls & Homesteads": guildHallsLogo,
  "Fractals of the Mists [Infinite]": fractalsLogo,
  "Player vs. Player [PvP]": pvpLogo,
  "World vs. World [WvW]": wvwLogo,
  "Festivals & Bonus Events": festivalsLogo,
};

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
  const namedIcon = LOGO_BY_NAME[category] ?? null;
  if (namedIcon) {
    return { icon: namedIcon, label: category };
  }
  return { icon: null, label: category };
}
