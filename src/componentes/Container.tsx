import type { ComponentPropsWithoutRef, ElementType } from 'react';

type ContainerProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

/** `.container`: até 1120px, padding lateral de 28px (22px ≤ 760px, 20px ≤ 440px). */
export function Container<T extends ElementType = 'div'>({ as, className = '', ...props }: ContainerProps<T>) {
  const Tag: ElementType = as ?? 'div';
  return <Tag className={`mx-auto w-full max-w-site px-7 max-md:px-[22px] max-sm:px-5 ${className}`} {...props} />;
}
