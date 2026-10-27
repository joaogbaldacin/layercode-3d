<script setup>
import { 
  FileCode, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sliders, 
  Wrench,
  Flame,
  HeartHandshake
} from 'lucide-vue-next'

const steps = [
  {
    step: "01",
    title: "Escolha ou envie sua ideia",
    subtitle: "Do esboço ao arquivo STL pronto",
    description: "Você pode escolher qualquer peça do nosso catálogo para personalizar, ou nos enviar um arquivo 3D (STL, STEP, OBJ) de repositórios como Thingiverse, Printables, ou até um rascunho com as medidas.",
    techDetails: [
      "Aceitamos arquivos STL, STEP, OBJ, 3MF",
      "Modelagem 3D sob medida disponível",
      "Consultoria de viabilidade gratuita"
    ],
    accent: "filament-cyan"
  },
  {
    step: "02",
    title: "Validação técnica & Fatiamento",
    subtitle: "Rigor de engenharia em cada milímetro",
    description: "Avaliamos o modelo em nosso software de fatiamento industrial. Calculamos a orientação ideal das forças mecânicas, espessura de paredes e tipo de infill (giroide para máxima tenacidade). Nada é feito no 'olhômetro'.",
    techDetails: [
      "Simulação de tensões e suporte",
      "Escolha precisa do filamento correto",
      "Estimativa exata de gramas e tempo"
    ],
    accent: "filament-orange"
  },
  {
    step: "03",
    title: "Impressão 3D & Acabamento Manual",
    subtitle: "O carinho artesanal que faz a diferença",
    description: "Sua peça é impressa com calibração precisa da primeira camada. Após a mesa esfriar, realizamos o pós-processamento manual: remoção delicada de suportes, lixamento fino de acabamento e selagem técnica protetiva.",
    techDetails: [
      "Monitoramento térmico e óptico da bancada",
      "Acabamento manual peça por peça",
      "Embalagem acolchoada com recadinho maker"
    ],
    accent: "emerald-400"
  }
]
</script>

<template>
  <section id="processo" class="py-24 relative overflow-hidden bg-layer-900/40 border-y border-layer-border">
    
    <!-- Subtle backdrop patterns -->
    <div class="absolute inset-0 layer-pattern opacity-25"></div>
    <div class="absolute top-1/2 left-0 w-80 h-80 bg-filament-cyan/10 blur-[130px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-filament-orange/10 blur-[130px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl text-left space-y-3 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-filament-orange/10 border border-filament-orange/30 text-filament-orange text-xs font-mono">
          <Wrench class="w-3.5 h-3.5" />
          <span>PROCESSO CUSTOMIZADO & TRANSPARENTE</span>
        </div>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Como criamos sua peça, camada por camada
        </h2>

        <p class="text-base text-slate-400 leading-relaxed">
          Esqueça as plataformas automáticas impessoais. Na LayerCode 3D, todo projeto passa por um fluxo que equilibra cálculo de engenharia e acabamento de bancada artesanal.
        </p>
      </div>

      <!-- Step Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        <div 
          v-for="(item, idx) in steps" 
          :key="idx"
          class="relative rounded-2xl glass-card p-7 flex flex-col justify-between border border-layer-border hover:border-slate-500 transition-all duration-300 group"
        >
          <!-- Step Number Watermark & Header -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="font-mono text-3xl font-black text-slate-500/40 group-hover:text-slate-300/60 transition-colors">
                #{{ item.step }}
              </span>

              <div 
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm',
                  idx === 0 ? 'bg-filament-cyan/10 border-filament-cyan/30 text-filament-cyan' : '',
                  idx === 1 ? 'bg-filament-orange/10 border-filament-orange/30 text-filament-orange' : '',
                  idx === 2 ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : ''
                ]"
              >
                <FileCode v-if="idx === 0" class="w-5 h-5" />
                <Cpu v-else-if="idx === 1" class="w-5 h-5" />
                <Sparkles v-else class="w-5 h-5" />
              </div>
            </div>

            <div class="text-xs font-mono text-slate-300 font-semibold mb-1">
              {{ item.subtitle }}
            </div>

            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-filament-cyan transition-colors">
              {{ item.title }}
            </h3>

            <p class="text-sm text-slate-400 leading-relaxed mb-6">
              {{ item.description }}
            </p>
          </div>

          <!-- Bullet Points -->
          <div class="pt-4 border-t border-layer-border/70 space-y-2">
            <div 
              v-for="(point, pIdx) in item.techDetails" 
              :key="pIdx"
              class="flex items-center gap-2 text-xs text-slate-300"
            >
              <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>{{ point }}</span>
            </div>
          </div>

        </div>

      </div>

      <!-- Humanized Philosophy Banner -->
      <div class="mt-16 rounded-2xl glass-panel p-8 sm:p-10 border border-filament-cyan/20 relative overflow-hidden">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-8 space-y-3 text-left">
            <div class="inline-flex items-center gap-2 text-xs font-mono text-filament-teal">
              <HeartHandshake class="w-4 h-4 text-filament-teal" />
              <span>O TOQUE HUMANO QUE FAZ A DIFERENÇA</span>
            </div>

            <h3 class="text-2xl font-bold text-white">
              Por que preferimos conversar no WhatsApp em vez de um carrinho frio?
            </h3>

            <p class="text-sm text-slate-300 leading-relaxed">
              Impressão 3D de qualidade não é como comprar um livro já impresso na prateleira. Cada peça tem finalidades diferentes: uma miniatura decorativa precisa de camadas invisíveis de 0.08mm, enquanto um suporte mecânico de motor precisa de 6 perímetros de parede e resistência térmica de 80°C. 
              Ao falar conosco no WhatsApp, garantimos que você gaste apenas o necessário e receba exatamente o que precisa.
            </p>
          </div>

          <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href="#orcamento"
              class="px-5 py-3 rounded-xl text-center text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-filament-cyan to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-colors shadow-md shadow-cyan-500/20"
            >
              Simular Orçamento de STL
            </a>
            <a
              href="#sobre"
              class="px-5 py-3 rounded-xl text-center text-xs sm:text-sm font-semibold text-slate-300 bg-layer-850 hover:bg-layer-800 border border-layer-border transition-colors"
            >
              Conhecer a Oficina & Equipamentos
            </a>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>
