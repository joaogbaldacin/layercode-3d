<script setup>
import { ref, computed } from 'vue'
import { categories, products } from '../data/products'
import ProductCard from './ProductCard.vue'
import { 
  Search, 
  Layers, 
  Sparkles, 
  Flame, 
  Box, 
  Wrench, 
  X,
  SlidersHorizontal,
  HelpCircle
} from 'lucide-vue-next'

const emit = defineEmits(['openModal', 'requestCustom'])

const activeCategory = ref('all')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesCategory = activeCategory.value === 'all' || product.category === activeCategory.value
    
    const query = searchQuery.value.toLowerCase().trim()
    if (!query) return matchesCategory

    const matchesSearch = 
      product.title.toLowerCase().includes(query) ||
      product.shortDescription.toLowerCase().includes(query) ||
      product.material.toLowerCase().includes(query) ||
      product.categoryLabel.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })
})

const getCategoryCount = (catId) => {
  if (catId === 'all') return products.length
  return products.filter(p => p.category === catId).length
}

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'Layers': return Layers
    case 'Sparkles': return Sparkles
    case 'Flame': return Flame
    case 'Box': return Box
    case 'Wrench': return Wrench
    default: return Layers
  }
}

const clearSearch = () => {
  searchQuery.value = ''
  activeCategory.value = 'all'
}

const handleOpenModal = (product) => {
  emit('openModal', product)
}

const scrollToQuote = () => {
  const el = document.getElementById('orcamento')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="catalogo" class="py-20 relative">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl text-left space-y-3 mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-filament-cyan/10 border border-filament-cyan/30 text-filament-cyan text-xs font-mono">
          <Layers class="w-3.5 h-3.5" />
          <span>VITRINE TÉCNICA & ARTESANAL</span>
        </div>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Catálogo de Peças & Inspirações 3D
        </h2>

        <p class="text-base text-slate-400 leading-relaxed">
          Cada peça exibida abaixo foi modelada, fatiada e impressa em nossa oficina. 
          Você pode encomendar exatamente como está ou personalizar cores, dimensões e densidade de preenchimento.
        </p>
      </div>

      <!-- Controls: Category Tabs & Search Bar -->
      <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        
        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer',
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-filament-cyan/20 to-filament-orange/20 text-white border border-filament-cyan/50 shadow-md shadow-filament-cyan/10'
                : 'bg-layer-900 text-slate-400 hover:text-slate-200 border border-layer-border hover:border-slate-600'
            ]"
          >
            <component :is="getCategoryIcon(cat.icon)" class="w-4 h-4 text-filament-cyan" />
            <span>{{ cat.label }}</span>
            <span 
              :class="[
                'text-[10px] px-1.5 py-0.2 rounded-full font-mono',
                activeCategory === cat.id ? 'bg-filament-cyan/30 text-white' : 'bg-layer-800 text-slate-400'
              ]"
            >
              {{ getCategoryCount(cat.id) }}
            </span>
          </button>
        </div>

        <!-- Search Input -->
        <div class="relative w-full lg:w-72 flex-shrink-0">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search class="w-4 h-4" />
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar por nome, material..."
            class="w-full pl-10 pr-9 py-2.5 rounded-xl bg-layer-900 border border-layer-border text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-filament-cyan transition-colors"
          />
          <button 
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

      </div>

      <!-- Results Info -->
      <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
        <span>Mostrando {{ filteredProducts.length }} de {{ products.length }} peças catalogadas</span>
        <span class="text-filament-teal">★ 100% sob demanda e personalizável</span>
      </div>

      <!-- Products Grid -->
      <div 
        v-if="filteredProducts.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @openModal="handleOpenModal"
        />
      </div>

      <!-- Empty State -->
      <div 
        v-else 
        class="glass-panel rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4 my-10"
      >
        <div class="w-12 h-12 rounded-full bg-layer-800 border border-layer-border text-filament-orange mx-auto flex items-center justify-center">
          <HelpCircle class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-bold text-white">Nenhuma peça encontrada para "{{ searchQuery }}"</h3>
        <p class="text-sm text-slate-400">
          Não se preocupe! Como trabalhamos sob encomenda, podemos modelar ou imprimir qualquer arquivo 3D que você precisar.
        </p>
        <div class="flex items-center justify-center gap-3 pt-2">
          <button
            @click="clearSearch"
            class="px-4 py-2 rounded-xl text-xs font-semibold bg-layer-800 text-slate-300 hover:text-white"
          >
            Limpar Busca
          </button>
          <button
            @click="scrollToQuote"
            class="px-4 py-2 rounded-xl text-xs font-semibold bg-filament-orange text-slate-950 font-bold hover:bg-filament-amber transition-colors"
          >
            Pedir Peça Sob Medida
          </button>
        </div>
      </div>

    </div>

  </section>
</template>
