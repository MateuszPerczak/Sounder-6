import Icon from "@/components/icon/Icon";

import StyledPanel from "./Panel.styles";
import type { PanelProps } from "./Panel.types";

const Panel = ({ title, children, ...rest }: PanelProps): JSX.Element => {
  return (
    <StyledPanel>
      <div className="panel-header">
        <Icon size={16} {...rest} />
        <span>{title}</span>
      </div>
      {children && <div className="panel-content">{children}</div>}
    </StyledPanel>
  );
};

export default Panel;
