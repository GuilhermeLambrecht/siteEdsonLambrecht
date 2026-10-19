import type { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router';

type AncoraProps = ComponentPropsWithoutRef<'a'> & { href: string };

/** Link que usa o React Router para rotas internas ("/…") e <a> comum para âncoras e endereços externos. */
export function Ancora({ href, ...props }: AncoraProps) {
  if (href.startsWith('/')) return <Link to={href} {...props} />;
  return <a href={href} {...props} />;
}
