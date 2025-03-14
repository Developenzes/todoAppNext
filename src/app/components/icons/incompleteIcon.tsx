import { IconProps } from "@/app/components/todos/types";

const IncompleteIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      fill="currentcolor"
      width={width || 16}
      height={height || 16}
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g fillRule="evenodd">
          <path d="M960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960 430.645 0 960 0Zm0 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059Z"></path>
          <path d="M451.765 1016.47h1016.47V903.53H451.765z"></path>
        </g>
      </g>
    </svg>
  );
};

export default IncompleteIcon;
