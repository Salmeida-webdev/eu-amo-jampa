# Direção visual — Eu Amo Jampa

## Ideia central

Uma revista digital de viagem que aproxima a cidade costeira da sua memória histórica. A experiência começa no letreiro real, percorre praia e patrimônio, e termina num roteiro pessoal. A marca aprovada entra como assinatura; as atrações aparecem em fotografia documental.

## Sistema visual

| Papel | Token | Uso |
|---|---|---|
| Verde profundo | `--ink` / `--ink-deep` | Navegação, hero, rodapé e áreas de contraste |
| Verde oceano | `--sea` | História, ligações e blocos de descoberta |
| Turquesa | `--sea-light` | Brilhos discretos e estados ambientais |
| Coral | `--coral` | Ações, marcadores de linha do tempo e destaques |
| Dourado solar | `--sun` | Ênfase de títulos, chamadas e movimento editorial |
| Areia | `--sand` | Seção histórica e pausas visuais |
| Papel | `--paper` | Fundo editorial principal |

Títulos usam uma serifada editorial em contraste com uma sans-serif de sistema para navegação, controles e leitura longa. A escala tipográfica fluida mantém o hero expressivo em telas pequenas sem perder hierarquia.

## Movimento

- Entrada inicial escalonada para chamada, título, parágrafo e ações.
- Imagem principal com aproximação lenta e parallax vertical sutil.
- Reveals com deslocamento curto em seções e cards, observados ao entrar na viewport.
- Faixa tipográfica contínua, brilho ambiental lento, detalhe flutuante e linhas de tempo que ativam ao aparecer.
- Filtros, cards, tabs, menu e modal respondem a hover, foco ou clique.
- `prefers-reduced-motion` desliga os movimentos contínuos e revela o conteúdo sem deslocamento.

O movimento funciona como guia de atenção: não cobre texto, não muda o conteúdo e não interfere na navegação por teclado. As fotografias mantêm proporções e cores realistas; o CSS aplica saturação e contraste moderados para coerência entre fontes diferentes.

## Componentes e comportamento

- **Header fixo:** transparência no topo, superfície clara após rolagem e menu colapsável em telas estreitas.
- **Cards de destino:** uma fotografia por ponto, categoria legível, ação explícita para abrir modal e crédito de imagem visível.
- **Modal:** diálogo nativo com fechamento por Escape, clique no botão e clique fora do conteúdo.
- **Filtros:** estado selecionado exposto por `aria-pressed`.
- **Roteiro:** tabs com estado `aria-selected`, painel associado e navegação com setas.
- **Linha do tempo:** eventos com semântica de data e animação apenas visual.

## Layout

Grade editorial de 12 colunas no desktop; duas colunas nos destaques e uma coluna em dispositivos móveis. Quebras principais em 900px e 650px. Botões possuem áreas de toque amplas, links de crédito seguem visíveis e foco de teclado usa contorno coral.
