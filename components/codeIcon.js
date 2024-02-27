import { rem } from "@mantine/core";

export function CodeIcon({ size, style, color, ...others }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}
