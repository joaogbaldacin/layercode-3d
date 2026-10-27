<script setup>
import { siteConfig } from '../data/config'
import { useWhatsApp } from '../composables/useWhatsApp'
import { 
  Heart, 
  Cpu, 
  Flame, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  MapPin,
  Award,
  Layers
} from 'lucide-vue-next'

const { getDirectChatLink } = useWhatsApp()

const equipment = [
  {
    name: "Bambu Lab X1-Carbon Combo",
    role: "Fatiamento de Alta Performance & Multi-Material",
    detail: "Extrusão direta até 300°C com AMS para 4 filamentos simultâneos e sensor de primeira camada LiDAR."
  },
  {
    name: "Creality K1 Max High-Speed",
    role: "Grandes Volumes & Peças Estruturais",
    detail: "Volume útil de 300x300x300mm com aceleração de 20.000 mm/s² para protótipos em grande escala."
  },
  {
    name: "Elegoo Saturn 4 Ultra 12K",
    role: "Resina UV Micrométrica",
    detail: "Resolução impressionante de 19x24 mícrons para action figures e miniaturas sem marcas visíveis."
  }
]
</script>

<template>
  <section id="sobre" class="py-24 relative overflow-hidden bg-layer-900/30 border-t border-layer-border">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Studio & Maker Image -->
        <div class="lg:col-span-5 relative">
          
          <div class="relative mx-auto max-w-md lg:max-w-none">
            
            <div class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-filament-orange/30 to-filament-cyan/30 blur-xl opacity-60"></div>
            
            <div class="relative rounded-3xl overflow-hidden glass-panel border border-layer-border shadow-2xl">
              
              <img 
                :src="siteConfig.maker.workshopImage" 
                alt="Maker na bancada da LayerCode 3D conferindo medidas com paquímetro digital"
                class="w-full aspect-[4/3] object-cover object-center"
              />

              <!-- Overlay Tag -->
              <div class="p-6 bg-layer-950/90 border-t border-layer-border text-left space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span class="font-bold text-white text-base">{{ siteConfig.maker.name }}</span>
                  </div>
                  <span class="text-xs font-mono text-filament-orange bg-filament-orange/10 px-2 py-0.5 rounded border border-filament-orange/20">
                    Bancada Ativa
                  </span>
                </div>
                
                <p class="text-xs text-slate-400 font-mono">
                  {{ siteConfig.maker.role }} • {{ siteConfig.location }}
                </p>

                <p class="text-xs text-slate-300 italic pt-1 border-t border-white/5">
                  "{{ siteConfig.maker.philosophy }}"
                </p>
              </div>

            </div>

          </div>

        </div>

        <!-- Right Column: Narrative & Maker Values -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
            <Heart class="w-3.5 h-3.5" />
            <span>QUEM ESTÁ POR TRÁS DA IMPRESSORA</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            A paixão por materializar o que antes existia apenas na imaginação ou na tela.
          </h2>

          <p class="text-base text-slate-300 leading-relaxed">
            {{ siteConfig.maker.bio }}
          </p>

          <!-- Core Maker Commitments -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            <div class="p-4 rounded-xl glass-card border border-layer-border space-y-1.5">
              <div class="flex items-center gap-2 text-filament-cyan font-bold text-sm">
                <Award class="w-4 h-4" />
                <span>Rigor Dimensional</span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Cada encaixe de rosca, pino e tampa é verificado com paquímetro digital centesimal. Se não encaixar perfeitamente, não sai da bancada.
              </p>
            </div>

            <div class="p-4 rounded-xl glass-card border border-layer-border space-y-1.5">
              <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Sparkles class="w-4 h-4" />
                <span>Pós-processamento Manual</span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                Suportes não são arrancados à força deixando cicatrizes. Utilizamos lâminas de precisão e lixamento progressivo para superfícies suaves.
              </p>
            </div>

          </div>

          <!-- Equipment arsenal -->
          <div class="space-y-3 pt-3">
            <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400">
              Maquinário e Tecnologias da Bancada:
            </h4>
            <div class="space-y-2">
              <div 
                v-for="(eq, eIdx) in equipment" 
                :key="eIdx"
                class="p-3 rounded-xl bg-layer-950/70 border border-layer-border flex items-start gap-3"
              >
                <div class="p-1.5 rounded-lg bg-layer-800 text-filament-teal flex-shrink-0 mt-0.5">
                  <Cpu class="w-4 h-4" />
                </div>
                <div class="text-xs">
                  <div class="flex flex-wrap items-center gap-2">
                    <strong class="text-slate-200">{{ eq.name }}</strong>
                    <span class="text-[10px] text-filament-cyan font-mono bg-filament-cyan/10 px-1.5 py-0.2 rounded">
                      {{ eq.role }}
                    </span>
                  </div>
                  <p class="text-slate-400 mt-0.5">{{ eq.detail }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat with Maker CTA -->
          <div class="pt-2">
            <a
              :href="getDirectChatLink('Olá Pedro! Li sobre sua bancada na LayerCode 3D e gostaria de conversar sobre um projeto.')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-filament-orange to-amber-400 hover:from-orange-400 hover:to-amber-300 transition-colors shadow-lg shadow-orange-500/20"
            >
              <MessageCircle class="w-4 h-4 fill-slate-950" />
              <span>Bater um papo direto com o Pedro no WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>
