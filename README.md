# Eu Amo Jampa

Versão 0.2.0 de um site turístico editorial sobre João Pessoa. O foco é celebrar a cidade por meio de seus lugares, história, patrimônio e litoral.

## Visualizar localmente

O projeto não depende de framework ou pacote npm. Na pasta `eu-amo-jampa`, inicie um servidor estático:

```bash
python3 -m http.server 4173
```

Depois abra `http://localhost:4173` no navegador. As fotografias são carregadas de Wikimedia Commons; é necessária conexão com a internet para exibi-las.

## O que já está implementado

- Abertura editorial com foto real do letreiro no Largo de Tambaú, registrada em 2022, e a marca aprovada.
- Destaques para Seixas, Centro Cultural São Francisco, Farol do Cabo Branco e Hotel Globo.
- Filtros por natureza, história e cultura.
- Modal de detalhes com links para informações oficiais.
- Linha do tempo baseada no portal oficial de Turismo João Pessoa.
- Roteiro interativo de 1, 2 ou 3 dias.
- Direção de movimento cinematográfica: abertura em cortina do letreiro, títulos em camadas, passagem de luz, revelações com máscara e profundidade, fotos com movimento lento e parallax, linha histórica que se desenha, ticker contínuo e modal animado.
- Carregamento priorizado e responsivo do letreiro, demais fotos carregadas sob demanda e decodificadas de forma assíncrona; placeholders de marca preservam o layout se uma foto externa falhar.
- Navegação responsiva, menu móvel, barra de progresso e suporte a `prefers-reduced-motion`.
- Créditos e licenças das fotografias incluídos no site.

## Imagens e uso

As fotos de atrações são fotografias reais de cada local, hospedadas no Wikimedia Commons. A identidade visual aplica um tratamento CSS discreto e consistente, sem gerar ou reconstruir os pontos turísticos. Confira os créditos e termos individuais na seção “Fontes e créditos das fotografias” do rodapé antes de republicar ou migrar os arquivos.

A foto do letreiro é o registro de 2022 do letreiro de João Pessoa no Largo de Tambaú. O arquivo é licenciado em CC0. A logo aprovada aparece como marca do projeto; ela não substitui a fotografia documental do local.

## Conteúdo e fontes

- [Turismo João Pessoa — história da cidade](https://turismo.joaopessoa.pb.gov.br/um-pouco-da-sua-historia/)
- [Turismo João Pessoa — Igreja de São Francisco](https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/igrejas/igreja-de-sao-francisco/)
- [Turismo João Pessoa — Farol do Cabo Branco](https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/monumentos-historicos/farol-do-cabo-branco/)
- [Iphan — patrimônio material na Paraíba](https://www.gov.br/iphan/pt-br/superintendencias/paraiba/patrimonio-material)

## Próxima etapa

O projeto é estático e não precisa de etapa de build. A configuração `netlify.toml` publica a raiz do repositório; conecte a branch `main` à Netlify para deploy contínuo, ou publique a pasta `eu-amo-jampa` pelo método manual. A configuração de hospedagem está preparada, mas nenhum site foi publicado nesta versão.

## Versão

O histórico de mudanças está em [CHANGELOG.md](CHANGELOG.md). A marca `v0.2.0` identifica esta revisão cinematográfica.
