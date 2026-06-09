import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
};

export function PrimaryCta({ className = "", size = "md", label }: Props) {
  const sizeCls = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  return (
    <Link href={site.cta.primary.href} className={`btn btn-primary ${sizeCls} ${className}`.trim()}>
      {label ?? site.cta.primary.label} <span aria-hidden="true">✦</span>
    </Link>
  );
}

export function SecondaryCta({ className = "", size = "md", label, href }: Props & { href?: string }) {
  const sizeCls = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  return (
    <Link
      href={href ?? site.cta.secondary.href}
      className={`btn btn-secondary ${sizeCls} ${className}`.trim()}
    >
      {label ?? site.cta.secondary.label} <span aria-hidden="true">✦</span>
    </Link>
  );
}
