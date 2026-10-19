import { blog } from '../../conteudo/pericias-comum';
import { Container } from '../Container';
import { LinkFrente } from '../Tipografia';

/** `.pc-blog`: chamada para o Blog Perito Certo. */
export function BlogPericias() {
  return (
    <section aria-labelledby="titulo-blog" className="border-t border-linha py-10">
      <Container className="flex flex-wrap items-center justify-between gap-x-[42px] gap-y-6">
        <div>
          <h2 id="titulo-blog" className="mb-2 text-[1.9rem]">
            {blog.titulo}
          </h2>
          <p className="m-0 text-[.9rem] text-texto-claro">{blog.texto}</p>
        </div>
        <LinkFrente href={blog.href}>{blog.rotuloLink}</LinkFrente>
      </Container>
    </section>
  );
}
