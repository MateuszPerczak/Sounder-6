import styled from "@emotion/styled";
import { motion } from "framer-motion";

import type { BadgeProps } from "./Badge.types";

const StyledBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 10px;
  height: 35px;
  min-width: 35px;
  border-radius: 4px;
  background-color: ${({ theme: { contrast } }): string => contrast};
  font-size: 12px;
  position: relative;
`;

export default StyledBadge;
