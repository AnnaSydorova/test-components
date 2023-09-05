import * as icons from "react-icons/fa";
import { IconType } from "react-icons";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

function convertIconName(iconName: string) {
  const formattedName = `Fa${iconName.charAt(0).toUpperCase()}${iconName.slice(
    1
  )}`;
  return formattedName;
}

export const Icon = ({ name, size = 24, color = "black" }: IconProps) => {
  const formattedName = convertIconName(name);

  const IconComponent = icons[formattedName as keyof typeof icons] as IconType;

  if (IconComponent) {
    return <IconComponent size={size} color={color} />;
  } else {
    return null;
  }
};
