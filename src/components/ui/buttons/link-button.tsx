import Link from "next/link";
import React, { FC } from "react";
import { MdArrowOutward } from "react-icons/md";

interface LinkButtonProps {
  href?: string;
  text: string | undefined;
  className?: string;
  target?: "_blank" | "_self";
  icon?: boolean;
}

const LinkButton: FC<LinkButtonProps> = ({ href= "#",  text, className = "", target = "_blank", icon = "true"}) => {
  return (
    <Link
      href={href}
      className={`flex items-center text-gray-600 ${className}`}
      passHref
      target={target}
    >
      {text}
      {icon && (
        <span className="ml-1">
          <MdArrowOutward />
        </span>
      )}
    </Link>
  )
}

export default LinkButton;
