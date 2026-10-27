<script setup>
import { useWhatsApp } from '../composables/useWhatsApp'
import { 
  Sparkles, 
  Layers, 
  Clock, 
  MessageCircle, 
  SlidersHorizontal,
  ChevronRight,
  CheckCircle
} from 'lucide-vue-next'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['openModal'])

const { getProductWhatsAppLink } = useWhatsApp()

const handleCardClick = () => {
  emit('openModal', props.product)
}
</script>

<template>
  <div 
    class="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-layer-border hover:border-filament-cyan/40 transition-all duration-300 relative text-left"
  >
    <!-- Top Image Container -->
    <div class="relative aspect-[4/3] w-full overflow-hidden bg-layer-950 cursor-pointer" @click="handleCardClick">
      <img 
        :src="product.image" 
        :alt="product.title"
        loading="lazy"
        class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
      />

      <!-- Dark Gradient for text readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-layer-950 via-layer-950/20 to-transparent"></div>

      <!-- Top Badges -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        
        <!-- Category Pill -->
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-layer-950/85 text-slate-200 border border-white/10 backdrop-blur-md shadow-sm">
          {{ product.categoryLabel }}
        </span>

        <!-- Customizable Pill -->
        <span 
          v-if="product.isCustomizable"
          class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-filament-orange/20 text-filament-amber border border-filament-orange/40 backdrop-blur-md shadow-sm"
        >
          <Sparkles class="w-3 h-3 text-filament-amber" />
          Personalizável
        </span>
      </div>

      <!-- Bottom In-Image Specs: Layer & Time -->
      <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10">
          <Layers class="w-3 h-3 text-filament-cyan" />
          {{ product.layerHeight }}
        </span>

        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10">
          <Clock class="w-3 h-3 text-slate-400" />
          {{ product.printTime }}
        </span>
      </div>
    </div>

    <!-- Content Body -->
    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
      
      <div class="space-y-2">
        <!-- Material Tag -->
        <div class="text-xs font-mono text-filament-teal flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-filament-teal"></span>
          {{ product.material }}
        </div>

        <!-- Product Title -->
        <h3 
          @click="handleCardClick"
          class="text-lg font-bold text-white group-hover:text-filament-cyan transition-colors cursor-pointer line-clamp-1"
        >
          {{ product.title }}
        </h3>

        <!-- Description -->
        <p class="text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {{ product.shortDescription }}
        </p>

        <!-- Color Swatches preview -->
        <div v-if="product.availableColors && product.availableColors.length" class="flex items-center gap-1.5 pt-1">
          <span class="text-[11px] text-slate-300 mr-1">Cores:</span>
          <div class="flex items-center -space-x-1">
            <span 
              v-for="(color, cIdx) in product.availableColors.slice(0, 4)" 
              :key="cIdx"
              class="w-3.5 h-3.5 rounded-full border border-layer-950 inline-block shadow-sm"
              :style="{ backgroundColor: color.hex }"
              :title="color.name"
            ></span>
          </div>
          <span v-if="product.availableColors.length > 4" class="text-[10px] text-slate-400">
            +{{ product.availableColors.length - 4 }}
          </span>
        </div>
      </div>

      <!-- Price & Actions Footer -->
      <div class="pt-3 border-t border-layer-border/60 space-y-3">
        
        <!-- Price display -->
        <div class="flex items-baseline justify-between">
          <div>
            <span class="text-[11px] text-slate-300 block font-mono">{{ product.pricePrefix }}</span>
            <span class="text-xl font-extrabold text-white font-mono tracking-tight">{{ product.priceEstimate }}</span>
          </div>

          <button 
            @click="handleCardClick"
            class="text-xs text-filament-cyan hover:text-white transition-colors flex items-center gap-1 font-medium cursor-pointer"
          >
            <span>Ver especificações</span>
            <ChevronRight class="w-3.5 h-3.5" />
          </button>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-2 gap-2">
          <!-- Open Config Modal Button -->
          <button
            @click="handleCardClick"
            class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-layer-800 hover:bg-layer-700 hover:text-white border border-layer-border transition-colors cursor-pointer"
          >
            <SlidersHorizontal class="w-3.5 h-3.5 text-slate-400" />
            <span>Configurar</span>
          </button>

          <!-- Direct WhatsApp Button with Dynamic Message -->
          <a
            :href="getProductWhatsAppLink(product)"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-sm shadow-emerald-500/20"
            title="Conversar sobre este item no WhatsApp"
          >
            <MessageCircle class="w-3.5 h-3.5 fill-slate-950" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  </div>
</template>
