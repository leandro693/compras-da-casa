# Compras da casa

App pessoal de lista de compras (PWA): lista com total em tempo real, lugar de compra por item, comparador de embalagens, leitura de código de barras pela câmera, leitura da nota fiscal pela foto (cadastra produtos, lugar e preços e guarda a nota com fotos, número e chave), histórico e relatórios em PDF e planilha.

- Hospedagem: GitHub Pages (arquivos estáticos, sem servidor).
- Dados: guardados apenas no aparelho (IndexedDB). Nenhum dado pessoal fica neste repositório.
- Bibliotecas em `lib/` (com as licenças): ZXing, jsPDF, jsPDF-AutoTable, SheetJS e SDK da Anthropic.
- Leitura automática do produto: pelo código de barras, na base aberta Open Food Facts (sem chave); pela foto, com o Gemini ou o Claude (à escolha). As chaves são digitadas em Ajustes e ficam só no aparelho; nunca vão para este repositório nem para o backup.

Versão atual: v2.10.0 (B2).
