<script setup>
import { ref, computed, watch } from 'vue'
import { useWhatsApp } from '../composables/useWhatsApp'
import { 
  X, 
  Sparkles, 
  MessageCircle, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  Check, 
  Flame, 
  Info,
  ChevronRight,
  ExternalLink
} from 'lucide-vue-next'

const props = defineProps({
  product: {
    type: Object,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const { getProductWhatsAppLink } = useWhatsApp()

// Modal interactive customization state
const selectedColor = ref('')
const selectedMaterial = ref('')
const selectedInfill = ref('20% Giroide')
const quantity = ref(1)
const clientNotes = ref('')

// Initialize options when product changes
watch(() => props.product, (newVal) => {
  if (newVal) {
    selectedColor.value = newVal.availableColors?.[0]?.name || 'Padrão'
    selectedMaterial.value = newVal.material
    selectedInfill.value = '25% Giroide Estrutural'
    quantity.value = 1
    clientNotes.value = ''
  }
}, { immediate: true })

const closeModal = () => {
  emit('close')
}

// Generate the customized WhatsApp link dynamically
const dynamicWhatsAppLink = computed(() => {
  if (!props.product) return '#'
  return getProductWhatsAppLink(props.product, {
    color: selectedColor.value,
    material: selectedMaterial.value,
    infill: selectedInfill.value,
    quantity: quantity.value,
    notes: clientNotes.value
  })
})

const infillOptions = [
  { label: '15% Leve', desc: 'Decorativo' },
  { label: '30% Giroide', desc: 'Equilibrado' },
  { label: '80% Sólido', desc: 'Uso Pesado' }
]
</script>

<template>
  <div 
    v-if="isOpen && product" 
    class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6"
    role="dialog"
    aria-modal="true"
  >
    <!-- Backdrop Blur -->
    <div 
      @click="closeModal" 
      class="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
    ></div>

    <!-- Modal Box -->
    <div class="relative w-full max-w-4xl bg-layer-900 border border-layer-border rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left animate-fadeIn">
      
      <!-- Close Button -->
      <button 
        @click="closeModal"
        class="absolute top-4 right-4 z-20 p-2 rounded-full bg-layer-950/80 text-slate-400 hover:text-white hover:bg-layer-800 transition-colors border border-white/10"
        aria-label="Fechar modal"
      >
        <X class="w-5 h-5" />
      </button>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-0 max-h-[85vh] overflow-y-auto">
        
        <!-- Left Side: Large Visuals & Quick Specs -->
        <div class="md:col-span-5 bg-layer-950/60 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-layer-border">
          
          <div class="space-y-4">
            <!-- Product Image -->
            <div class="relative aspect-square w-full rounded-2xl overflow-hidden bg-layer-900 border border-white/10 shadow-lg">
              <img 
                :src="product.image" 
                :alt="product.title"
                class="w-full h-full object-cover object-center"
              />

              <!-- Floating Badges -->
              <div class="absolute top-3 left-3">
                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-layer-950/85 text-slate-200 border border-white/10 backdrop-blur-md">
                  {{ product.categoryLabel }}
                </span>
              </div>
            </div>

            <!-- Technical Chips -->
            <div class="grid grid-cols-2 gap-2 text-xs font-mono">
              <div class="p-2.5 rounded-xl bg-layer-900 border border-layer-border">
                <span class="text-slate-400 block text-[10px]">ALTURA DE CAMADA</span>
                <span class="text-filament-cyan font-bold flex items-center gap-1 mt-0.5">
                  <Layers class="w-3.5 h-3.5" />
                  {{ product.layerHeight }}
                </span>
              </div>

              <div class="p-2.5 rounded-xl bg-layer-900 border border-layer-border">
                <span class="text-slate-400 block text-[10px]">TEMPO DE BANCADA</span>
                <span class="text-filament-amber font-bold flex items-center gap-1 mt-0.5">
                  <Clock class="w-3.5 h-3.5" />
                  {{ product.printTime }}
                </span>
              </div>
            </div>

            <!-- Maker Highlights List -->
            <div class="space-y-2 pt-2">
              <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400">Diferenciais Maker</h4>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li v-for="(hl, hIdx) in product.highlights" :key="hIdx" class="flex items-center gap-2">
                  <Check class="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{{ hl }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Maker Guarantee Note -->
          <div class="mt-6 p-3 rounded-xl bg-layer-900/90 border border-filament-cyan/20 text-xs text-slate-400 flex items-start gap-2.5">
            <ShieldCheck class="w-4 h-4 text-filament-cyan flex-shrink-0 mt-0.5" />
            <div>
              <strong class="text-slate-200 block">Garantia Dimensional:</strong>
              Cada peça passa por calibração óptica e teste de encaixe antes de ser despachada.
            </div>
          </div>

        </div>

        <!-- Right Side: Customization & Direct WhatsApp Generator -->
        <div class="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          
          <div class="space-y-6">
            
            <!-- Title & Price -->
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-filament-teal font-semibold">{{ product.material }}</span>
                <span class="text-slate-500">•</span>
                <span class="text-xs text-filament-orange font-semibold">{{ product.badge }}</span>
              </div>
              <h2 class="text-2xl font-extrabold text-white tracking-tight">
                {{ product.title }}
              </h2>
              <div class="flex items-baseline gap-2 pt-1">
                <span class="text-xs font-mono text-slate-400">{{ product.pricePrefix }}</span>
                <span class="text-2xl font-black text-white font-mono text-glow-orange">{{ product.priceEstimate }}</span>
                <span class="text-xs text-slate-400 ml-1">(Consulte frete no WhatsApp)</span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ product.fullDescription }}
            </p>

            <!-- Customizer Controls -->
            <div class="space-y-4 pt-2 border-t border-layer-border">
              
              <!-- 1. Color Selection -->
              <div v-if="product.availableColors && product.availableColors.length" class="space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-slate-200">Escolha o Acabamento / Cor:</span>
                  <span class="text-filament-cyan font-mono font-medium">{{ selectedColor }}</span>
                </div>
                
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    v-for="(color, cIdx) in product.availableColors"
                    :key="cIdx"
                    @click="selectedColor = color.name"
                    :class="[
                      'p-2 rounded-xl border text-xs flex items-center gap-2 transition-all cursor-pointer text-left',
                      selectedColor === color.name 
                        ? 'border-filament-cyan bg-filament-cyan/10 text-white shadow-sm shadow-filament-cyan/20' 
                        : 'border-layer-border bg-layer-950/50 text-slate-300 hover:border-slate-500'
                    ]"
                  >
                    <span 
                      class="w-4 h-4 rounded-full border border-black/40 flex-shrink-0"
                      :style="{ backgroundColor: color.hex }"
                    ></span>
                    <span class="truncate text-[11px] font-medium">{{ color.name }}</span>
                  </button>
                </div>
              </div>

              <!-- 2. Infill Density -->
              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-slate-200">Preenchimento Interno (Infill):</span>
                  <span class="text-slate-400 text-[11px]">Densidade e rigidez mecânica</span>
                </div>

                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="(inf, iIdx) in infillOptions"
                    :key="iIdx"
                    @click="selectedInfill = inf.label"
                    :class="[
                      'p-2 rounded-xl border text-center transition-all cursor-pointer',
                      selectedInfill === inf.label
                        ? 'border-filament-orange bg-filament-orange/10 text-white'
                        : 'border-layer-border bg-layer-950/50 text-slate-300 hover:border-slate-500'
                    ]"
                  >
                    <div class="text-xs font-bold font-mono">{{ inf.label }}</div>
                    <div class="text-[10px] text-slate-400">{{ inf.desc }}</div>
                  </button>
                </div>
              </div>

              <!-- 3. Quantity & Notes -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="space-y-1">
                  <label class="text-xs font-semibold text-slate-200 block">Quantidade:</label>
                  <div class="flex items-center rounded-xl bg-layer-950 border border-layer-border p-1">
                    <button 
                      @click="quantity = Math.max(1, quantity - 1)"
                      class="w-8 h-8 rounded-lg bg-layer-800 text-slate-300 hover:text-white flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span class="flex-1 text-center font-mono text-sm font-bold text-white">{{ quantity }}</span>
                    <button 
                      @click="quantity = quantity + 1"
                      class="w-8 h-8 rounded-lg bg-layer-800 text-slate-300 hover:text-white flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div class="sm:col-span-2 space-y-1">
                  <label class="text-xs font-semibold text-slate-200 block">Observação ou Personalização:</label>
                  <input 
                    v-model="clientNotes"
                    type="text" 
                    placeholder="Ex: Gravação de iniciais, tamanho específico..."
                    class="w-full text-xs px-3 py-2.5 rounded-xl bg-layer-950 border border-layer-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-filament-cyan transition-colors"
                  />
                </div>
              </div>

            </div>

            <!-- Technical Sheet Table -->
            <div class="rounded-xl bg-layer-950/80 border border-layer-border p-3 text-xs font-mono space-y-1.5">
              <div class="flex justify-between text-slate-400">
                <span>Dimensões:</span>
                <span class="text-slate-200">{{ product.specs.dimensoes }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Peso Médio:</span>
                <span class="text-slate-200">{{ product.specs.peso }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Pós-processamento:</span>
                <span class="text-slate-200">{{ product.specs.posProcessamento }}</span>
              </div>
            </div>

          </div>

          <!-- Bottom Conversion WhatsApp CTA -->
          <div class="pt-4 border-t border-layer-border space-y-2">
            <a
              :href="dynamicWhatsAppLink"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-filament-cyan hover:from-emerald-300 hover:to-teal-200 transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] text-center"
            >
              <MessageCircle class="w-5 h-5 fill-slate-950" />
              <span>Falar com o Pedro no WhatsApp com esta Configuração</span>
            </a>

            <p class="text-[11px] text-center text-slate-400">
              Ao clicar, você enviará as especificações acima diretamente para a bancada do maker. Sem compromisso.
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
