<script setup>
import { ref, onMounted } from 'vue'
import { useWhatsApp } from '../composables/useWhatsApp'
import { siteConfig } from '../data/config'
import { MessageCircle, X } from 'lucide-vue-next'

const { getDirectChatLink } = useWhatsApp()

const showTooltip = ref(false)
const tooltipDismissed = ref(false)

onMounted(() => {
  // Show warm greeting tooltip after 3 seconds
  setTimeout(() => {
    if (!tooltipDismissed.value) {
      showTooltip.value = true
    }
  }, 2800)
})

const dismissTooltip = (e) => {
  e.preventDefault()
  e.stopPropagation()
  showTooltip.value = false
  tooltipDismissed.value = true
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
    
    <!-- Greeting Tooltip Bubble -->
    <div 
      v-if="showTooltip && !tooltipDismissed"
      class="mb-3 max-w-xs p-3.5 rounded-2xl glass-panel bg-layer-900/95 border border-emerald-500/30 text-left shadow-2xl relative animate-bounce-subtle"
    >
      <button 
        @click="dismissTooltip"
        class="absolute top-2 right-2 p-1 text-slate-400 hover:text-white"
        title="Dispensar aviso"
      >
        <X class="w-3.5 h-3.5" />
      </button>

      <div class="flex items-start gap-2.5">
        <div class="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-emerald-400/40">
          <img 
            :src="siteConfig.maker.avatar" 
            alt="Pedro da LayerCode 3D" 
            class="w-full h-full object-cover"
          />
          <span class="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-black"></span>
        </div>

        <div class="text-xs space-y-1">
          <p class="font-bold text-white flex items-center gap-1">
            <span>Pedro</span>
            <span class="text-[10px] text-filament-cyan font-mono">(Maker)</span>
          </p>
          <p class="text-slate-300 leading-snug">
            Olá! Tem alguma dúvida sobre materiais ou quer cotar um arquivo STL? Fale comigo!
          </p>
        </div>
      </div>
      
      <!-- Small arrow pointing down -->
      <div class="w-3 h-3 bg-layer-900 border-r border-b border-emerald-500/30 transform rotate-45 absolute -bottom-1.5 right-7"></div>
    </div>

    <!-- Floating WhatsApp Action Button -->
    <a
      :href="getDirectChatLink('👋 Olá Pedro! Estou no site da LayerCode 3D e gostaria de tirar uma dúvida sobre impressão.')"
      target="_blank"
      rel="noopener noreferrer"
      class="relative group flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-108 active:scale-95 transition-all duration-300"
      aria-label="Falar com o criador no WhatsApp"
    >
      <!-- Radar ring pulse -->
      <span class="absolute -inset-1 rounded-2xl bg-emerald-400 opacity-40 group-hover:opacity-75 animate-ping -z-10"></span>

      <MessageCircle class="w-7 h-7 fill-slate-950 text-slate-950" />
      
      <!-- Notification dot -->
      <span class="absolute -top-1 -right-1 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-filament-orange opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-filament-orange text-[9px] font-bold text-white items-center justify-center">1</span>
      </span>
    </a>

  </div>
</template>

<style scoped>
@keyframes bounceSubtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-bounce-subtle {
  animation: bounceSubtle 4s ease-in-out infinite;
}
</style>
