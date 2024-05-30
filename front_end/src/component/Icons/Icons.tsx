import {
  library,
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export const getIconDefinition = (iconName: IconName): IconDefinition => {
  const iconLookup: IconLookup = {
    prefix: "fas",
    iconName: iconName,
  };
  return findIconDefinition(iconLookup);
};
