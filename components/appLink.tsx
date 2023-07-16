"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";

interface props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const AppLink = React.forwardRef<HTMLAnchorElement, props>(
  function LinkComponent({ onClick, href, children, ...props }, forwardedRef) {
    const router = useRouter();
    const segment = useSelectedLayoutSegment();
    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      onClick && onClick(e);

      if (segment) {
        router.push(segment);
      }

      router.refresh();
    };
    return (
      <Link href={href!} {...props} onClick={handleClick} ref={forwardedRef}>
        {children}
      </Link>
    );
  }
);
