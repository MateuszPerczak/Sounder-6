import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledSwitch = styled.button<{ isSwitched: boolean }>`
  display: flex;
  width: 40px;
  height: 22px;
  border-radius: 40px;
  padding: 2px;
  border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
  background-color: ${({ theme: { background } }): string => background};
  justify-content: ${({ isSwitched }): string =>
    isSwitched ? "flex-start" : "flex-end"};
`;

export const StyledSwitchBall = styled(motion.div)`
  background-color: ${({ theme: { fillStrong } }): string => fillStrong};
  height: 100%;
  aspect-ratio: 1;
  border-radius: 40px;
`;

export default StyledSwitch;
