import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPage = styled(motion.article)`
  display: flex;
  flex-direction: column;
  flex: 1;
  .page-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 50px;
    border-bottom: 1px solid ${({ theme: { border } }): string => border};
    padding: 0 10px;
  }
  .toolbar-name {
    font-size: 20px;
  }
  .toolbar-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const StyledPageContent = styled(motion.section)`
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 2px 10px 10px;
`;

export default StyledPage;
