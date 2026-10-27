# LayerCode 3D | E-Commerce & Catálogo Consultivo de Impressão 3D

> **"Transformando linhas de código e polímeros em peças reais e exclusivas para você."**

Código-base moderno, sofisticado e componentizado em **Vue 3 (Composition API)** + **Tailwind CSS**, arquitetado para a **LayerCode 3D** — unindo a precisão da engenharia com o calor do artesanato maker sob medida.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API com `<script setup>`)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) com design system customizado (tons escuros tech estilo Vercel, gradientes de filamento cobre/âmbar/ciano, glassmorphism e micro-interações)
- **Bundler & Dev Server:** [Vite](https://vite.dev/)
- **Ícones:** [Lucide Vue Next](https://lucide.dev/)
- **Deploy:** Otimizado para **Vercel** com `vercel.json` pré-configurado (SPA routing e headers de cache de assets)

---

## 🚀 Funcionalidades Principais

1. **Hero Section de Alto Impacto:**
   - Visual cinematográfico da impressora 3D depositando filamento quente de cobre.
   - Terminal dinâmico em tempo real simulando a compilação e streaming de código G-Code (`G1`, `M104`, `M140`).
   - Métricas de confiabilidade (+2.4M camadas, 0.12mm de resolução, 5.0 estrelas).

2. **Catálogo & Vitrine Interativa:**
   - Filtros por categoria com contadores dinâmicos (*Decoração & Design*, *Geek & Colecionáveis*, *Utilitários & Desk*, *Peças Técnicas & Sob Medida*).
   - Busca em tempo real por nome, utilidade ou filamento.
   - Cards com etiquetas de material, altura de camada, tempo de bancada, preço de referência e indicador *"Personalizável"*.

3. **Modal de Customização Técnica & Encomenda:**
   - Seleção interativa de cores e acabamentos em tempo real (swatches).
   - Seleção de densidade de preenchimento interno (*Infill* 15% decorativo a 80% industrial).
   - Ficha técnica completa (dimensões, tolerância de ±0.08mm, tipo de bico e pós-processamento manual).

4. **Conversão Focada em WhatsApp (Consultiva & Humanizada):**
   - Substituição do carrinho frio por um canal direto e acolhedor com o criador.
   - Gerador dinâmico de links para WhatsApp (`useWhatsApp.js`) com mensagem pré-formatada contendo produto, cor escolhida, quantidade, material e observações.
   - Seção de orçamento rápido para arquivos STL (com links para repositórios gratuitos como *Printables*, *MakerWorld* e *Thingiverse*).

5. **Guia Interativo de Polímeros & Filamentos:**
   - Comparativo interativo entre PLA Eco-friendly, PETG de Engenharia, Resina UV 8K, TPU Flexível e ASA Solar, com parâmetros térmicos e aplicações ideais.

6. **Processo em 3 Etapas & O Maker:**
   - Explicação transparente do fluxo: do arquivo STL à validação de fatiamento e acabamento manual com bisturi e lixas finas.
   - Apresentação do maquinário de ponta da oficina (Bambu Lab X1-Carbon, Creality K1 Max, Elegoo Saturn 4 Ultra).

7. **Floating WhatsApp com Notificação:**
   - Widget flutuante com pulso de radar e balão de saudação humanizado do criador.

---

## 📁 Estrutura de Arquivos

```text
LayerCode/
├── public/
│   └── images/
│       ├── hero_3d_printer.jpg     # Foto cinematográfica do hotend
│       └── maker_craft.jpg         # Foto do maker com paquímetro na bancada
├── src/
│   ├── components/
│   │   ├── CustomQuoteSection.vue  # Formulário/orçador de STL sob medida
│   │   ├── FloatingWhatsApp.vue    # Widget flutuante do WhatsApp
│   │   ├── Footer.vue              # Rodapé com agradecimento maker
│   │   ├── HeroSection.vue         # Hero com slogan e terminal G-code
│   │   ├── MakerAboutSection.vue   # Seção sobre o criador e maquinário
│   │   ├── MaterialsGuide.vue      # Guia interativo de filamentos
│   │   ├── Navbar.vue              # Barra de status do nozzle e navegação
│   │   ├── ProcessSection.vue      # Passo a passo de fatiamento & acabamento
│   │   ├── ProductCard.vue         # Card individual com tags e ações
│   │   ├── ProductCatalog.vue      # Vitrine com filtros de categorias e busca
│   │   └── ProductModal.vue        # Modal de detalhes e customizador de cor
│   ├── composables/
│   │   └── useWhatsApp.js          # Utilitário de links pré-formatados WhatsApp
│   ├── data/
│   │   ├── config.js               # Dados da marca, telefone, maker e status
│   │   ├── materials.js            # Ficha técnica dos polímeros
│   │   └── products.js             # Catálogo completo de peças e categorias
│   ├── App.vue                     # Componente raiz
│   ├── main.js                     # Inicialização do Vue
│   └── style.css                   # Tailwind + utilitários glassmorphic
├── index.html                      # SEO completo, fontes Google e favicon SVG
├── package.json                    # Dependências e scripts
├── postcss.config.js               # Configuração PostCSS
├── tailwind.config.js              # Paleta 'layer' & 'filament'
├── vercel.json                     # Configuração de deploy no Vercel
└── vite.config.js                  # Configuração Vite
```

---

## 🚀 Como Executar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:3000`

3. **Gere a versão de produção:**
   ```bash
   npm run build
   ```

---

## ☁️ Deploy no Vercel

O projeto está 100% pronto para a Vercel:
1. Conecte seu repositório GitHub ao painel da [Vercel](https://vercel.com).
2. O arquivo [`vercel.json`](file:///c:/Users/User/Desktop/LayerCode/vercel.json) já cuida de:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
   - SPA rewrites para navegação suave sem erros 404
   - Cache-control imutável para assets estáticos

---

## ⚙️ Configuração Personalizada da Marca

Para alterar o número do WhatsApp, nome do criador ou links de contato, edite o arquivo [`src/data/config.js`](file:///c:/Users/User/Desktop/LayerCode/src/data/config.js):

```javascript
export const siteConfig = {
  brandName: "LayerCode 3D",
  whatsappNumber: "5511998765432", // Insira o DDI + DDD + Telefone sem traços
  displayPhone: "(11) 99876-5432",
  slogan: "Transformando linhas de código e polímeros em peças reais e exclusivas para você.",
  // ...
}
```
