import Icon from "../icon/Icon";
import StyledBadge from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

const Badge = ({ label, ...rest }: BadgeProps): JSX.Element => {
  return (
    <StyledBadge
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
    >
      <Icon size={12} {...rest} />
      {label && <span>{label}</span>}
    </StyledBadge>
  );
};

export default Badge;
