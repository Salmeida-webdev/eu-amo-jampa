# Eu Amo Jampa

Versão 0.3.0 de um site turístico editorial sobre João Pessoa. O foco é celebrar a cidade por meio de seus lugares, história, patrimônio e litoral.

## Visualizar localmente

O projeto não depende de framework ou pacote npm. Na pasta do repositório, inicie um servidor estático:

```bash
python3 -m http.server 4173
```

Depois abra `http://localhost:4173` no navegador. As fotografias estão incluídas em `assets/photos`; a página não depende de hotlinks externos para exibir imagens. Os links de créditos, fontes e informações oficiais continuam conectados à internet.

## O que já está implementado

- Abertura editorial com foto real do letreiro no Largo de Tambaú, registrada em 2022, e a marca aprovada.
- Galeria com 12 atrações: Piscinas do Seixas, Centro Cultural São Francisco, Farol do Cabo Branco, Hotel Globo, Ponta do Seixas, Estação Cabo Branco, Parque Sólon de Lucena, Casa da Pólvora, Catedral das Neves, Praça Antenor Navarro, Convento do Carmo e Busto de Tamandaré.
- Filtros por natureza, história e cultura.
- Modal de detalhes com links para informações oficiais.
- Linha do tempo baseada no portal oficial de Turismo João Pessoa.
- Roteiro interativo de 1, 2 ou 3 dias.
- Direção de movimento cinematográfica: abertura em cortina do letreiro, títulos em camadas, passagem de luz, fotos da galeria reveladas em cortina, entrada sequenciada dos textos, movimento lento, parallax, linha histórica desenhada, ticker contínuo e modal animado.
- São 14 fotografias reais locais contando os doze cartões, o letreiro e a imagem de Cabo Branco. As atrações carregam sob demanda e são decodificadas em segundo plano.
- Navegação responsiva, menu móvel, barra de progresso, estado visual para falha de imagem e respeito a `prefers-reduced-motion`.
- Fontes, autores e licenças aparecem nos cartões, no rodapé e em `assets/photos/CREDITS.md`.

## Imagens e uso

As fotografias foram obtidas no Wikimedia Commons, com suas licenças registradas no projeto. O acabamento visual usa apenas corte de enquadramento e ajustes discretos de contraste e saturação por CSS; os arquivos locais permanecem sem retoque e sem reconstrução generativa. Confira `assets/photos/CREDITS.md` antes de redistribuir. Para imagens CC BY ou CC BY-SA, mantenha as atribuições e respeite as condições das respectivas licenças.

A fotografia do letreiro é o registro de 2022 do letreiro de João Pessoa no Largo de Tambaú. O arquivo é licenciado em CC0. A logo aprovada aparece como marca do projeto; ela não substitui a fotografia documental do local.

## Conteúdo e fontes

- [Turismo João Pessoa — história da cidade](https://turismo.joaopessoa.pb.gov.br/um-pouco-da-sua-historia/)
- [Turismo João Pessoa — Igreja de São Francisco](https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/igrejas/igreja-de-sao-francisco/)
- [Turismo João Pessoa — Farol do Cabo Branco](https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/monumentos-historicos/farol-do-cabo-branco/)
- [Iphan — patrimônio material na Paraíba](https://www.gov.br/iphan/pt-br/superintendencias/paraiba/patrimonio-material)

## Preparação para publicação

O projeto é estático e não requer etapa de build. A configuração `netlify.toml` publica a raiz do repositório; conecte a branch `main` à Netlify para deploy contínuo, ou publique a pasta pelo método manual. O deploy ainda não foi executado.

## Versão

O histórico de mudanças está em [CHANGELOG.md](CHANGELOG.md). A marca `v0.3.0` identifica a expansão da galeria e das revelações visuais.
