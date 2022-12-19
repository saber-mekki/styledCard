import React from "react";

export function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={512}
      height={512}
      {...props}
    >
      <path
        d="M24 19V4a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v15h11v2H6v2h12v-2h-5v-2ZM3 3h18a1 1 0 0 1 1 1v9H2V4a1 1 0 0 1 1-1ZM2 15h20v2H2Z"
        data-name="01 align center"
      />
    </svg>
  );
}
