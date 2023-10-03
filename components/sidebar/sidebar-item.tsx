import NextLink from "next/link";
import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
  color?: "success" | "default" | "primary" | "white";
}

export const SidebarItem = ({
  icon,
  title,
  isActive,
  href = "",
  color,
}: Props) => {
  return (
    <NextLink
      href={href}
      className="text-default-900 active:bg-none max-w-full"
    >
      <div
        className={[
          isActive
            ? "bg-primary-100 [&_svg_path]:fill-primary-500"
            : "hover:bg-default-100",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]",
          color ? `bg-${color}` : undefined,
        ]
          .filter((e) => e !== undefined)
          .join(" ")}
      >
        {icon}
        <span className="text-default-900">{title}</span>
      </div>
    </NextLink>
  );
};