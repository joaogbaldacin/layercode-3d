<script setup>
import { ref } from 'vue'
import { materials } from '../data/materials'
import { 
  Sparkles, 
  Flame, 
  Thermometer, 
  Check, 
  Layers, 
  Leaf, 
  ShieldAlert, 
  HelpCircle,
  ExternalLink
} from 'lucide-vue-next'
import { useWhatsApp } from '../composables/useWhatsApp'

const { getDirectChatLink } = useWhatsApp()
const selectedMaterialId = ref(materials[0].id)

const activeMaterial = computed(() => {
  return materials.find(m => m.id === selectedMaterialId.value) || materials[0]
})
import { computed } from 'vue'
</script>

<template>
  <section id="materiais" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      <!-- Section Header -->
      <div class="max-w-3xl space-y-3 mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-filament-teal/10 border border-filament-teal/30 text-filament-teal text-xs font-mono">
          <Sparkles class="w-3.5 h-3.5" />
          <span>GUIA DE POLÍMEROS & FILAMENTOS</span>
        </div>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          A ciência dos materiais ao seu alcance
        </h2>

        <p class="text-base text-slate-400 leading-relaxed">
          Cada projeto exige propriedades físicas específicas. Entenda a diferença entre nossos materiais certificados para escolher a combinação perfeita de resistência mecânica, acabamento estético e perfil sustentável.
        </p>
      </div>

      <!-- Material Tabs Selector -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        <button
          v-for="mat in materials"
          :key="mat.id"
          @click="selectedMaterialId = mat.id"
          :class="[
            'p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2',
            selectedMaterialId === mat.id
              ? 'bg-layer-850 border-filament-cyan text-white shadow-lg shadow-filament-cyan/10'
              : 'bg-layer-900 border-layer-border text-slate-400 hover:text-slate-200 hover:border-slate-700'
          ]"
        >
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-layer-950 text-slate-300 border border-white/5">
              {{ mat.badge }}
            </span>
            <Leaf v-if="mat.ecoFriendly" class="w-3.5 h-3.5 text-emerald-400" title="Eco-friendly" />
          </div>
          <div>
            <span class="text-sm font-bold block text-white">{{ mat.name.split(' ')[0] }}</span>
            <span class="text-[11px] text-slate-400 block truncate">{{ mat.type }}</span>
          </div>
        </button>
      </div>

      <!-- Active Material Detailed Deep-Dive Card -->
      <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-layer-border relative overflow-hidden">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Details -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-filament-orange uppercase tracking-wider font-semibold">
                  {{ activeMaterial.type }}
                </span>
                <span v-if="activeMaterial.ecoFriendly" class="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  <Leaf class="w-3 h-3" />
                  Origem Renovável / Biodegradável
                </span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                {{ activeMaterial.name }}
              </h3>

              <p class="text-xs sm:text-sm text-slate-400 font-mono">
                Origem: {{ activeMaterial.origin }}
              </p>
            </div>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
              {{ activeMaterial.description }}
            </p>

            <!-- Best Applications List -->
            <div class="space-y-3 pt-2">
              <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400">
                Aplicações Ideais Recomendadas:
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div 
                  v-for="(app, aIdx) in activeMaterial.bestFor" 
                  :key="aIdx"
                  class="flex items-center gap-2 p-2.5 rounded-xl bg-layer-950/70 border border-layer-border text-xs text-slate-200"
                >
                  <Check class="w-4 h-4 text-filament-teal flex-shrink-0" />
                  <span>{{ app }}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Specs Table -->
          <div class="lg:col-span-5 bg-layer-950/90 rounded-2xl p-6 border border-layer-border space-y-4">
            
            <h4 class="text-xs font-mono uppercase tracking-wider text-filament-cyan flex items-center gap-1.5 font-bold">
              <Thermometer class="w-4 h-4" />
              Parâmetros de Extrusão & Performance
            </h4>

            <div class="space-y-3 text-xs font-mono">
              <div class="p-3 rounded-xl bg-layer-900 border border-layer-border flex items-center justify-between">
                <span class="text-slate-400">Temperatura do Bico:</span>
                <span class="text-filament-amber font-bold">{{ activeMaterial.tempNozzle }}</span>
              </div>

              <div class="p-3 rounded-xl bg-layer-900 border border-layer-border flex items-center justify-between">
                <span class="text-slate-400">Mesa Térmica:</span>
                <span class="text-slate-200 font-bold">{{ activeMaterial.tempBed }}</span>
              </div>

              <div class="p-3 rounded-xl bg-layer-900 border border-layer-border flex items-center justify-between">
                <span class="text-slate-400">Resistência Mecânica:</span>
                <span class="text-filament-teal font-bold text-right">{{ activeMaterial.strength }}</span>
              </div>

              <div class="p-3 rounded-xl bg-layer-900 border border-layer-border flex items-center justify-between">
                <span class="text-slate-400">Acabamento Tátil:</span>
                <span class="text-slate-200 font-bold text-right">{{ activeMaterial.finish }}</span>
              </div>
            </div>

            <!-- WhatsApp action regarding this material -->
            <div class="pt-2">
              <a
                :href="getDirectChatLink(`Olá Pedro! Gostaria de saber mais sobre o uso de ${activeMaterial.name} para o meu projeto.`)"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-900 bg-filament-cyan hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
              >
                <span>Tirar dúvida sobre {{ activeMaterial.name.split(' ')[0] }}</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
