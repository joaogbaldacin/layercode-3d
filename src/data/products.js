export const categories = [
  { id: "all", label: "Todos os Projetos", icon: "Layers" },
  { id: "decor", label: "Decoração & Design", icon: "Sparkles" },
  { id: "geeks", label: "Geek & Colecionáveis", icon: "Flame" },
  { id: "utilitarios", label: "Utilitários & Desk Setup", icon: "Box" },
  { id: "tecnicos", label: "Peças Técnicas & Sob Medida", icon: "Wrench" }
]

export const products = [
  {
    id: "vaso-voronoi-fractal",
    title: "Vaso Paramétrico Voronoi Fractal",
    category: "decor",
    categoryLabel: "Decoração & Design",
    badge: "Bestseller",
    priceEstimate: "R$ 119",
    pricePrefix: "A partir de",
    material: "PLA Silk Ouro Cobre",
    materialId: "pla-eco",
    layerHeight: "0.16 mm",
    printTime: "8h 40min",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Padrão biomimético gerado por algoritmos generativos. Reflexo sedoso e camadas contínuas impecáveis.",
    fullDescription: "Inspirado em padrões fractais da natureza gerados por código algorítmico, este vaso utiliza a tecnologia de fatiamento espiral (modo vaso contínuo) que elimina costuras visíveis (z-seam). O filamento PLA Silk confere um brilho metálico que varia de acordo com a iluminação do ambiente. Tratado manualmente com impermeabilizante interno seguro para plantas secas e arranjos florais.",
    specs: {
      dimensoes: "180mm x 140mm x 220mm",
      peso: "~210g",
      preenchimento: "100% Casca Dupla Reforçada",
      bocal: "0.4mm E3D V6 Revestido",
      posProcessamento: "Inspeção óptica e polimento de base"
    },
    availableColors: [
      { name: "Cobre Metalizado", hex: "#B87333" },
      { name: "Preto Mate Obsidiana", hex: "#1C1C1E" },
      { name: "Branco Seda Pérola", hex: "#F3F4F6" },
      { name: "Verde Esmeralda Deep", hex: "#047857" }
    ],
    highlights: ["Feito em PLA biodegradável", "Acabamento sem costura visível", "Cores personalizáveis"]
  },
  {
    id: "luminaria-aurora-geometrica",
    title: "Luminária Paramétrica 'Aurora Glow'",
    category: "decor",
    categoryLabel: "Decoração & Design",
    badge: "Exclusivo",
    priceEstimate: "R$ 168",
    pricePrefix: "A partir de",
    material: "PLA Translúcido + PETG Base",
    materialId: "pla-eco",
    layerHeight: "0.20 mm",
    printTime: "14h 15min",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Difusão luminosa geométrica que projeta sombras suaves no ambiente. Acompanha bocal padrão E27 ou LED USB.",
    fullDescription: "Desenvolvida com difusores facetados milimetricamente calculados para dispersar a luz de maneira quente e sem ofuscamento. A base é impressa em PETG escuro de alta durabilidade com ranhura para o cabo elétrico revestido em tecido e pés emborrachados em TPU para não riscar sua mobília.",
    specs: {
      dimensoes: "160mm x 160mm x 210mm",
      peso: "~340g",
      preenchimento: "Infill Giroide a 25%",
      bocal: "0.4mm Alta Precisão",
      posProcessamento: "Montagem elétrica testada e selagem de difusores"
    },
    availableColors: [
      { name: "Translúcido Natural Warm", hex: "#FEF3C7" },
      { name: "Âmbar Solar", hex: "#F59E0B" },
      { name: "Fume Grafite", hex: "#4B5563" }
    ],
    highlights: ["Difusão de luz suave", "Pés em TPU antivibração", "Bocal bivolt com chave liga/desliga"]
  },
  {
    id: "elmo-cyber-tactical",
    title: "Elmo Tático Cyberpunk Escala 1:1",
    category: "geeks",
    categoryLabel: "Geek & Colecionáveis",
    badge: "Colecionador",
    priceEstimate: "R$ 390",
    pricePrefix: "Sob encomenda",
    material: "PETG Reforçado + Viseira Polímero",
    materialId: "petg-pro",
    layerHeight: "0.12 mm",
    printTime: "36h de bancada",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Réplica vestível de alta fidelidade com textura de fibra sintética, encaixes magnéticos e acolchoamento interno.",
    fullDescription: "Peça de alta engenharia dividida em 7 seções otimizadas para fatiamento sem marcas de suporte excessivas. Feito em PETG para suportar quedas e torções sem lascar. Acompanha travas com ímãs de neodímio N52 e almofadas de espuma com memória moldadas para conforto. Pode ser customizado com LEDs nos dutos de ventilação.",
    specs: {
      dimensoes: "Escala real para circunferência de 56 a 62cm",
      peso: "~850g",
      preenchimento: "30% Cúbico Adaptativo",
      bocal: "0.4mm Aço Endurecido",
      posProcessamento: "Lixamento progressivo grão 220 a 1000, primer e acabamento fosco manual"
    },
    availableColors: [
      { name: "Preto Mate Tático com Laranja", hex: "#EA580C" },
      { name: "Prata Titânio Industrial", hex: "#94A3B8" },
      { name: "Verde Militar Tático", hex: "#3F6212" }
    ],
    highlights: ["Fecho magnético de neodímio", "Resistente a impacto (PETG)", "Pintura artesanal personalizada"]
  },
  {
    id: "busto-resina-mecha",
    title: "Busto 'Mecha Ronin' em Resina 8K",
    category: "geeks",
    categoryLabel: "Geek & Colecionáveis",
    badge: "Ultra Detalhe",
    priceEstimate: "R$ 185",
    pricePrefix: "A partir de",
    material: "Resina UV Fotopolímero 8K",
    materialId: "resin-8k",
    layerHeight: "0.03 mm",
    printTime: "11h de exposição UV",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Resolução cirúrgica com texturas de armadura de 30 mícrons. Ideal para pintura hobby ou exibição técnica.",
    fullDescription: "Impresso em tecnologia MSLA 8K com comprimento de onda calibrado em 405nm. As linhas de camada são imperceptíveis a olho nu, permitindo que cada ranhura de parafuso e textura de malha cibernética seja nítida. Peça completamente curada, desengraxada em ultrassom e finalizada com primer de micro-ancoragem pronto para tintas acrílicas.",
    specs: {
      dimensoes: "120mm x 95mm x 165mm",
      peso: "~190g (Maciço em pontos de tensão)",
      preenchimento: "Oco estruturado com furos de drenagem e reforço interno",
      bocal: "Laser LCD 8K Monocromático",
      posProcessamento: "Banho duplo de álcool isopropílico 99% e cura UV a 60°C"
    },
    availableColors: [
      { name: "Cinza Primário Maker (Pintável)", hex: "#6B7280" },
      { name: "Obsidiana Resina Brilho", hex: "#111827" },
      { name: "Mármore Branco Escultural", hex: "#E5E7EB" }
    ],
    highlights: ["Camadas de 30 mícrons", "Sem linhas visíveis", "Base pesada equilibrada"]
  },
  {
    id: "organizador-desk-gridlock",
    title: "Organizador Modular Desk Setup 'GridLock'",
    category: "utilitarios",
    categoryLabel: "Utilitários & Desk Setup",
    badge: "Produtividade",
    priceEstimate: "R$ 135",
    pricePrefix: "Kit Completo",
    material: "PLA Mate Carbono + Pés TPU",
    materialId: "pla-eco",
    layerHeight: "0.16 mm",
    printTime: "9h 30min",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Sistema modular magnético para cabos, canetas, pen-drives e smartphone com docking MagSafe embutido.",
    fullDescription: "Projetado para entusiastas de setup limpo e minimalista. Utiliza sistema de encaixe tipo gaveta 'dove-tail' (rabo de andorinha) com tolerância de 0.15mm que permite rearranjar as baias livremente. Os pés em TPU flexível evitam que a peça escorregue na mesa de madeira ou vidro.",
    specs: {
      dimensoes: "240mm x 120mm x 45mm",
      peso: "~280g",
      preenchimento: "20% Giroide Antitorção",
      bocal: "0.4mm",
      posProcessamento: "Inserção manual de magnetos e pés emborrachados"
    },
    availableColors: [
      { name: "Preto Fosco Carbono", hex: "#18181B" },
      { name: "Cinza Concreto Tech", hex: "#475569" },
      { name: "Branco Ártico", hex: "#F8FAFC" },
      { name: "Laranja Maker Studio", hex: "#F97316" }
    ],
    highlights: ["Módulos intercambiáveis", "Base antiderrapante em TPU", "Compatível com cabos USB-C e Lightning"]
  },
  {
    id: "suporte-laptop-ergonomico",
    title: "Suporte Articulado Ergonômico de Alumínio & PETG",
    category: "utilitarios",
    categoryLabel: "Utilitários & Desk Setup",
    badge: "Robusto",
    priceEstimate: "R$ 98",
    pricePrefix: "A partir de",
    material: "PETG de Engenharia Reforçado",
    materialId: "petg-pro",
    layerHeight: "0.20 mm",
    printTime: "7h 10min",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Estrutura triangular com nervuras de rigidez para dissipação térmica de notebooks de 13\" a 17\".",
    fullDescription: "Calculado através de simulação de elementos finitos (FEA) para suportar até 12kg sem flexão excessiva. O design vazado aumenta em 40% a circulação de ar na carcaça inferior do notebook, reduzindo o aquecimento térmico durante renderizações ou longas jornadas de trabalho.",
    specs: {
      dimensoes: "260mm x 210mm x 140mm (Ângulo de 18°)",
      peso: "~220g",
      preenchimento: "40% Triangular Reforçado em Paredes Quádruplas",
      bocal: "0.6mm Fluxo Rápido",
      posProcessamento: "Grip emborrachado colado na superfície de apoio"
    },
    availableColors: [
      { name: "Preto Grafite Industrial", hex: "#27272A" },
      { name: "Azul Marinho Escuro", hex: "#1E3A8A" },
      { name: "Cinza Titânio", hex: "#64748B" }
    ],
    highlights: ["Aguenta até 12kg com segurança", "Resfriamento passivo do notebook", "Ângulo ergonômico padrão NR-17"]
  },
  {
    id: "engrenagens-mecanicas-custom",
    title: "Engrenagens & Prototipagem Funcional Sob Medida",
    category: "tecnicos",
    categoryLabel: "Peças Técnicas & Sob Medida",
    badge: "Engenharia",
    priceEstimate: "R$ 45",
    pricePrefix: "Orçamento unitário",
    material: "PETG / Nylon / ASA com Carga",
    materialId: "petg-pro",
    layerHeight: "0.12 mm",
    printTime: "Conforme desenho CAD",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Fabricação sob demanda de engrenagens helicoidais, buchas, polias GT2 e componentes de substituição.",
    fullDescription: "Você nos envia a peça quebrada ou o arquivo STEP/STL e fazemos a modelagem reversa com compensação de folga mecânica (backlash) e tolerâncias ISO. Testamos a dureza Shore e a tenacidade para garantir que sua máquina volte a funcionar sem a necessidade de importar peças caras.",
    specs: {
      dimensoes: "Tolerância dimensional de ±0.08mm",
      peso: "Customizável",
      preenchimento: "100% Sólido para torque e rotação contínua",
      bocal: "0.4mm ou 0.2mm para micro-dentes",
      posProcessamento: "Calibragem por mandril e teste de engrenamento dinâmico"
    },
    availableColors: [
      { name: "Preto Técnico Lubrificável", hex: "#09090B" },
      { name: "Branco Técnico Natural", hex: "#F4F4F5" },
      { name: "Amarelo Segurança", hex: "#EAB308" }
    ],
    highlights: ["Compensação de folgas mecânicas", "Tolerância de até ±0.08mm", "Modelagem reversa disponível"]
  },
  {
    id: "case-iot-estanque",
    title: "Gabinete Técnico para Eletrônica / IoT com O-Ring",
    category: "tecnicos",
    categoryLabel: "Peças Técnicas & Sob Medida",
    badge: "IP65 Resistente",
    priceEstimate: "R$ 82",
    pricePrefix: "A partir de",
    material: "ASA Resistente a Sol e Chuva",
    materialId: "asa-abs",
    layerHeight: "0.16 mm",
    printTime: "5h 45min",
    isCustomizable: true,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Gabinete robusto para Arduino, ESP32 e Raspberry Pi com canal de vedação impermeável e inserts rosqueáveis de latão.",
    fullDescription: "Projetado com insertos termofixados de latão M3 inseridos a quente com soldador térmico para que os parafusos não espanem o plástico com o tempo de manutenção. Ideal para sensores agrícolas, automação residencial externa e placas de circuito sensíveis.",
    specs: {
      dimensoes: "140mm x 90mm x 45mm",
      peso: "~165g",
      preenchimento: "35% Giroide com 4 perímetros de parede",
      bocal: "0.4mm Aço Endurecido",
      posProcessamento: "Inserção térmica de roscas M3 em latão e junta O-ring de silicone"
    },
    availableColors: [
      { name: "Cinza Industrial RAL 7035", hex: "#9CA3AF" },
      { name: "Preto Antichama", hex: "#1F2937" },
      { name: "Laranja Alerta", hex: "#F97316" }
    ],
    highlights: ["Inserts roscados de latão M3", "Resiste a sol pleno sem empenar", "Canal para vedação de borracha"]
  }
]
