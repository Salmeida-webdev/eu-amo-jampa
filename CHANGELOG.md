# Histórico de versões

## 0.4.1 — 26/11/2026

- CSP dinâmica com nonce aleatório por resposta e `strict-dynamic`; nenhum script inline é liberado sem nonce.
- Selo injetado sem nonce é bloqueado pela política de `script-src`.
- Edge Function aplica os cabeçalhos apenas ao HTML principal; arquivos estáticos continuam no cache da CDN.
- Build estático copia HTML e imagens para `dist/`, mantendo o código da Edge Function fora dos arquivos públicos.

## 0.4.0 — 26/11/2026

- Abertura cinematográfica curta com foto real do letreiro, marca Eu Amo Jampa, movimento de aproximação e transição em cortina para o site.
- Controle “Pular abertura” e tecla Esc para acesso imediato ao conteúdo.
- Revelações durante a rolagem com entrada mais profunda e cadência escalonada entre os cartões, preservando o movimento reduzido do sistema.
- A abertura usa a mesma imagem já priorizada no carregamento do hero e não bloqueia o acesso ao conteúdo após 2,45 segundos.

## 0.3.0 — 26/11/2026

- Galeria ampliada para 12 atrações reais, com 14 fotografias locais contando abertura e manifesto.
- Novas imagens licenciadas de Ponta do Seixas, Estação Cabo Branco, Parque Sólon de Lucena, Casa da Pólvora, Catedral das Neves, Praça Antenor Navarro, Convento do Carmo e Busto de Tamandaré.
- Créditos e licenças apresentados junto a cada foto e consolidados em `assets/photos/CREDITS.md`.
- Cartões agora revelam as imagens em cortina vertical com gradação de luz e movimento lento; conteúdo entra em um segundo tempo para dar profundidade à sequência.
- Galeria em ritmo assimétrico no desktop e em coluna única no celular; filtros continuam agrupando natureza, história e cultura.
- Fotos carregam sob demanda, sem hotlink de mídia; tratamento de cor discreto fica no CSS para preservar os arquivos originais.

## 0.2.1 — 26/11/2026

- Imagens reais licenciadas incluídas localmente para evitar dependência de hotlinks externos.
- Crédito, origem e licença de cada fotografia documentados junto aos arquivos.
- Link oficial de detalhes com destino seguro também quando o modal não consegue abrir uma atração específica.

## 0.2.0 — 26/11/2026

- Entrada cinematográfica do letreiro com cortina de imagem, títulos em camadas e passagem de luz.
- Revelações com máscara, profundidade, desfoque breve e movimento escalonado durante a rolagem.
- Movimento ambiental nas fotos, parallax de mouse e rolagem, modal com transição e trilha histórica animada.
- Carregamento priorizado da imagem de abertura, carregamento tardio e decodificação assíncrona das demais imagens.
- Créditos, links de origem e licenças reunidos em `assets/photos/CREDITS.md`.
- Tratamento visual de erro de imagem para evitar ícones de arquivo quebrado sobre o layout.
- Metadados de compartilhamento e cabeçalhos iniciais de segurança/cache para publicação na Netlify.
- Respeito ao ajuste de movimento reduzido do sistema.
