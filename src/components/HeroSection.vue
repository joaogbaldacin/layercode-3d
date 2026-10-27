<script setup>
import { ref, onMounted } from 'vue'
import { siteConfig } from '../data/config'
import { useWhatsApp } from '../composables/useWhatsApp'
import { 
  Sparkles, 
  Terminal, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Flame, 
  Play,
  RotateCw
} from 'lucide-vue-next'

const { getDirectChatLink } = useWhatsApp()

// G-code simulation streaming
const gcodeLines = [
  "M104 S215 ; Aquecendo Nozzle E3D a 215°C",
  "M140 S60  ; Cama Térmica calibrada a 60°C",
  "G28 ; Homing nos eixos X, Y e Z",
  "G29 ; Nivelamento automático da malha 36 pontos",
  "G1 Z0.16 F3000 ; Altura da 1ª camada micrométrica",
  "G1 X128.4 Y95.2 E1.42 F4800 ; Extrusão contínua PLA Silk",
  "M106 S255 ; Ventoinha de refrigeração da peça em 100%",
  "; >> Status: Camada 184/420 [Qualidade de Engenharia Ativa]"
]

const currentLineIndex = ref(0)
const simulatedProgress = ref(43)

onMounted(() => {
  setInterval(() => {
    currentLineIndex.value = (currentLineIndex.value + 1) % gcodeLines.length
    if (simulatedProgress.value < 99) {
      simulatedProgress.value += 1
    } else {
      simulatedProgress.value = 12
    }
  }, 2400)
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28">
    
    <!-- Background Tech Glow & Grid Gradients -->
    <div class="absolute inset-0 -z-10 layer-pattern opacity-40"></div>
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-orange-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute top-10 right-10 w-96 h-96 bg-filament-orange/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Value Proposition & Humanized Voice -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <!-- Maker Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-layer-850/90 border border-filament-cyan/30 text-filament-cyan text-xs font-mono tracking-wide shadow-sm">
            <span class="flex h-2 w-2 rounded-full bg-filament-cyan animate-pulse"></span>
            <span>MANUFATURA ADITIVA & CUIDADO HUMANO</span>
          </div>

          <!-- Main Impact Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            A precisão da <span class="text-transparent bg-clip-text bg-gradient-to-r from-filament-cyan via-teal-300 to-sky-400">engenharia</span> com o calor do <span class="text-transparent bg-clip-text bg-gradient-to-r from-filament-orange via-amber-400 to-yellow-400">artesanal</span>.
          </h1>

          <!-- User Slogan Highlight -->
          <p class="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl border-l-2 border-filament-orange/60 pl-4 py-1 italic">
            "{{ siteConfig.slogan }}"
          </p>

          <!-- Narrative description -->
          <p class="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            Bem-vindo à <strong class="text-slate-200">LayerCode 3D</strong>. Aqui não existem robôs impessoais nem esteiras de plástico descartável. 
            Você conversa diretamente com o criador e engenheiro, recebe consultoria técnica sobre espessura de paredes, tipo de filamento (PLA, PETG, Resina 8K) e acompanha cada detalhe do fatiamento até o acabamento manual.
          </p>

          <!-- Core Value Micro-Pills -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-layer-900/60 border border-layer-border">
              <div class="p-1.5 rounded-lg bg-filament-cyan/10 text-filament-cyan">
                <Layers class="w-4 h-4" />
              </div>
              <div class="text-xs">
                <p class="font-semibold text-slate-200">0.08mm a 0.20mm</p>
                <p class="text-slate-400">Camadas invisíveis</p>
              </div>
            </div>

            <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-layer-900/60 border border-layer-border">
              <div class="p-1.5 rounded-lg bg-filament-orange/10 text-filament-orange">
                <Sparkles class="w-4 h-4" />
              </div>
              <div class="text-xs">
                <p class="font-semibold text-slate-200">Eco-Friendly & Pro</p>
                <p class="text-slate-400">PLA vegetal e PETG</p>
              </div>
            </div>

            <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-layer-900/60 border border-layer-border">
              <div class="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <ShieldCheck class="w-4 h-4" />
              </div>
              <div class="text-xs">
                <p class="font-semibold text-slate-200">Atendimento Maker</p>
                <p class="text-slate-400">Direto no WhatsApp</p>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
            <a
              :href="getDirectChatLink('Olá Pedro! Quero conversar sobre uma ideia personalizada na LayerCode 3D.')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-filament-cyan hover:from-emerald-300 hover:to-filament-cyan transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageSquare class="w-5 h-5 fill-slate-950" />
              <span>Falar com o Criador no WhatsApp</span>
            </a>

            <button
              @click="scrollToSection('catalogo')"
              class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-layer-850 hover:bg-layer-800 border border-layer-border hover:border-slate-500 transition-all duration-300 cursor-pointer"
            >
              <span>Explorar Catálogo</span>
              <ArrowRight class="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <!-- Subtle Trust Indicator -->
          <div class="flex items-center gap-2 text-xs text-slate-400 pt-1">
            <CheckCircle2 class="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Resposta rápida • Avaliação de arquivo STL gratuita • Sem compromisso</span>
          </div>

        </div>

        <!-- Right Column: Interactive Tech Showcase Card & Live G-code Stream -->
        <div class="lg:col-span-5 relative">
          
          <div class="relative mx-auto max-w-md lg:max-w-none">
            
            <!-- Outer Glow Frame -->
            <div class="absolute -inset-1 rounded-3xl bg-gradient-to-br from-filament-cyan/30 via-layer-700/20 to-filament-orange/30 blur-xl opacity-75"></div>
            
            <!-- Main Tech Card -->
            <div class="relative rounded-2xl glass-panel bg-layer-900/90 border border-layer-border overflow-hidden shadow-2xl">
              
              <!-- Card Header: Hotend Status & Layer Height -->
              <div class="px-5 py-3.5 bg-layer-950/80 border-b border-layer-border flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex space-x-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span class="font-mono text-xs text-slate-300 ml-2 font-semibold">
                    layercode_printer_01.gcode
                  </span>
                </div>
                
                <span class="inline-flex items-center gap-1 font-mono text-[11px] text-filament-orange bg-filament-orange/10 px-2 py-0.5 rounded border border-filament-orange/30">
                  <Flame class="w-3 h-3 text-filament-orange" />
                  215°C
                </span>
              </div>

              <!-- High-Res Image of 3D Hotend Extruding Copper Filament -->
              <div class="relative aspect-[16/10] overflow-hidden group">
                <img 
                  src="/images/hero_3d_printer.jpg" 
                  alt="Impressora 3D de alta precisão depositando filamento quente na LayerCode 3D"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                <!-- Dark gradient overlay for contrast -->
                <div class="absolute inset-0 bg-gradient-to-t from-layer-950 via-layer-950/20 to-transparent"></div>

                <!-- Floating Precision Badges -->
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg glass-panel bg-layer-950/80 border border-white/10 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                  <Cpu class="w-3.5 h-3.5 text-filament-cyan" />
                  <span>Resolução: 0.12mm</span>
                </div>

                <div class="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-panel bg-layer-950/85 border border-filament-orange/30 text-xs font-mono text-filament-amber flex items-center gap-2 shadow-lg">
                  <span class="w-2 h-2 rounded-full bg-filament-orange animate-ping"></span>
                  <span>PLA Seda Cobre Ativo</span>
                </div>
              </div>

              <!-- Live G-code Terminal Stream Window -->
              <div class="p-4 bg-layer-950/95 border-t border-layer-border font-mono text-xs">
                
                <div class="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <div class="flex items-center gap-1.5 text-slate-300">
                    <Terminal class="w-3.5 h-3.5 text-filament-cyan" />
                    <span>Fatiamento em Execução</span>
                  </div>
                  <span class="text-filament-teal font-semibold">{{ simulatedProgress }}% Concluído</span>
                </div>

                <!-- Progress Bar -->
                <div class="w-full h-1.5 bg-layer-800 rounded-full overflow-hidden mb-3">
                  <div 
                    class="h-full bg-gradient-to-r from-filament-cyan via-teal-400 to-filament-orange transition-all duration-500 rounded-full"
                    :style="{ width: `${simulatedProgress}%` }"
                  ></div>
                </div>

                <!-- Terminal line with type animation effect -->
                <div class="p-2.5 rounded-lg bg-black/60 border border-white/5 text-slate-300 min-h-[50px] flex items-center justify-between">
                  <p class="truncate text-emerald-400/90 font-mono text-[11px]">
                    <span class="text-slate-500 select-none mr-1.5">$</span>{{ gcodeLines[currentLineIndex] }}
                  </p>
                  <span class="inline-block w-1.5 h-3.5 bg-filament-cyan animate-pulse ml-2 flex-shrink-0"></span>
                </div>

              </div>

              <!-- Card Footer Note -->
              <div class="px-5 py-3 bg-layer-900 border-t border-layer-border/70 flex items-center justify-between text-xs text-slate-400">
                <span class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Makerspace: São Paulo / SP
                </span>
                <button 
                  @click="scrollToSection('orcamento')"
                  class="text-filament-cyan hover:text-white transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <span>Orçar meu STL</span>
                  <ArrowRight class="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Trust Metrics Bar -->
      <div class="mt-16 pt-10 border-t border-layer-border/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(stat, idx) in siteConfig.stats" 
          :key="idx"
          class="p-4 rounded-xl glass-card text-left"
        >
          <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text">
            {{ stat.label === 'Camadas Impressas' ? stat.value : stat.value }}
          </div>
          <div class="text-sm font-semibold text-slate-200 mt-1">
            {{ stat.label }}
          </div>
          <div class="text-xs text-slate-400 mt-0.5">
            {{ stat.helper }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
