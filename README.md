# Compras da casa

App pessoal de lista de compras (PWA): lista com total em tempo real, lugar de compra por item, comparador de embalagens, leitura de código de barras pela câmera, histórico e relatórios em PDF e planilha.

- Hospedagem: GitHub Pages (arquivos estáticos, sem servidor).
- Dados: guardados apenas no aparelho (IndexedDB). Nenhum dado pessoal fica neste repositório.
- Bibliotecas em `lib/` (com as licenças): ZXing, jsPDF, jsPDF-AutoTable e SheetJS.
- Leitura automática do produto: pelo código de barras, na base aberta Open Food Facts (sem chave); pela foto, com o Gemini. A chave do Gemini é digitada em Ajustes e fica só no aparelho; nunca vai para este repositório nem para o backup.

Versão atual: v2.1.0 (B2).
