import { Navigate, Route, Routes } from 'react-router';
import { RolagemDeRota } from './componentes/RolagemDeRota';
import { periciasAgricolas } from './conteudo/pericias-agricolas';
import { periciasGrafotecnicas } from './conteudo/pericias-grafotecnicas';
import { segurancaDoTrabalho } from './conteudo/seguranca-do-trabalho';
import { E2EngenhariaDoAr } from './paginas/E2EngenhariaDoAr';
import { Inicio } from './paginas/Inicio';
import { PaginaPericia } from './paginas/PaginaPericia';
import { Professor } from './paginas/Professor';

export function App() {
  return (
    <>
      <RolagemDeRota />
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* As chaves fazem as três páginas de perícia montarem do zero (FAQ fechado, fallback de imagem zerado). */}
        <Route
          path="/pericias-grafotecnicas"
          element={<PaginaPericia key="grafotecnicas" conteudo={periciasGrafotecnicas} />}
        />
        <Route path="/pericias-agricolas" element={<PaginaPericia key="agricolas" conteudo={periciasAgricolas} />} />
        <Route
          path="/seguranca-do-trabalho"
          element={<PaginaPericia key="seguranca" conteudo={segurancaDoTrabalho} />}
        />
        <Route path="/e2-engenharia-do-ar" element={<E2EngenhariaDoAr />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
