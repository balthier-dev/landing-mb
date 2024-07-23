import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} style={{color: "#A44229"}} alt={src} width={width} height={height} />
);
