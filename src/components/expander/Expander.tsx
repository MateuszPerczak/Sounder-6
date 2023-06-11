import { useState } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledExpander, { StyledExpanderHeader } from "./Expander.styles";
import type { ExpanderProps } from "./Expander.types";

const Expander = ({
  label,
  children,
  expanded,
  description,
  ...rest
}: ExpanderProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(expanded ?? false);

  const toggleExpanded = (): void => setIsExpanded((wasExpanded) => !wasExpanded);

  return (
    <StyledExpander>
      <StyledExpanderHeader onClick={toggleExpanded} isExpanded={isExpanded}>
        <div className="header-children">
          <Icon size={16} {...rest} />
          <div className="header-labels">
            {label && <span>{label}</span>}
            {description && <span className="header-description">{description}</span>}
          </div>
        </div>
        <Icon icon={isExpanded ? Icons.ChevronUp : Icons.ChevronDown} size={14} />
      </StyledExpanderHeader>
      {isExpanded && <div className="expander-content">{children}</div>}
    </StyledExpander>
  );
};

export default Expander;
