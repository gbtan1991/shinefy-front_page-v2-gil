import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(20, 22, 56, 0.95)",
    color: "#F1F1F1",
    maxWidth: 340,
    fontSize: theme.typography.pxToRem(13),
    padding: "20px 20px 20px 30px",
  },
}));

export default function TextfieldTooltip({ children }) {
  return (
    <CustomTooltip
      placement="top-start"
      title={
        <>
          <p className="global-text-to-light-blue mb-5">
            Our tools work best for video narration and promoting products
          </p>

          <ul className="mb-4 ml-2">
            <li className="global-tooltip-li-1">
              Short form videos from keywords
            </li>
            <li className="global-tooltip-li-1">
              Videos using your voice as narrator
            </li>
            <li className="global-tooltip-li-1">
              Educational videos using AI images
            </li>
            <li className="global-tooltip-li-1">
              Generate stories and videos using AI
            </li>
            <li className="global-tooltip-li-1">
              Motivational videos for viral content
            </li>
            <li className="global-tooltip-li-1">Product and Service reviews</li>
          </ul>

          <ul className="ml-2">
            <li className="global-tooltip-li-2">Music videos</li>
            <li className="global-tooltip-li-2">Long format videos</li>
          </ul>
        </>
      }
    >
      {children}
    </CustomTooltip>
  );
}
