<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { siteConfig } from '../data/config'
import { useWhatsApp } from '../composables/useWhatsApp'
import { 
  Box, 
  Layers, 
  Flame, 
  Sparkles, 
  Wrench, 
  Menu, 
  X, 
  ExternalLink,
  MessageCircle,
  Radio
} from 'lucide-vue-next'

const { getDirectChatLink, phoneFormatted } = useWhatsApp()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSection = (id) => {
  mobileMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- Top Technical Status Bar -->
  <div class="bg-layer-950/90 border-b border-layer-border text-xs py-1.5 px-4 font-mono text-slate-400">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center gap-1.5 text-filament-teal">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-filament-teal opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-filament-teal"></span>
          </span>
          Bancada Ativa • Nozzle {{ siteConfig.livePrinterStatus.nozzleTemp }}
        </span>
        <span class="hidden sm:inline text-slate-600">|</span>
        <span class="hidden sm:inline text-slate-400">
          Cama: {{ siteConfig.livePrinterStatus.bedTemp }} ({{ siteConfig.livePrinterStatus.material }})
        </span>
      </div>
      <div class="flex items-center gap-4 text-slate-400">
        <span class="hidden md:inline text-slate-300">
          Envio com cuidado artesanal para todo o Brasil
        </span>
        <a 
          :href="getDirectChatLink('Olá! Gostaria de consultar a fila de impressão da semana.')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-filament-orange hover:text-filament-amber transition-colors"
        >
          <span>Fila de Produção Aberta</span>
          <ExternalLink class="w-3 h-3" />
        </a>
      </div>
    </div>
  </div>

  <!-- Main Navigation Header -->
  <header 
    :class="[
      'sticky top-0 z-40 transition-all duration-300',
      isScrolled 
        ? 'glass-panel bg-layer-900/85 shadow-lg shadow-black/40 border-b border-layer-border' 
        : 'bg-layer-950/70 backdrop-blur-md border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Brand Logo -->
        <a href="#" class="group flex items-center gap-3.5 focus:outline-none">
          <div class="relative w-11 h-11 rounded-xl bg-gradient-to-br from-layer-800 to-layer-900 p-0.5 border border-layer-border group-hover:border-filament-cyan/50 transition-all duration-300 shadow-md">
            <div class="w-full h-full bg-layer-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <!-- Glow backdrop -->
              <div class="absolute inset-0 bg-gradient-to-tr from-filament-orange/20 to-filament-cyan/20 opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <!-- Isometric Logo Mark -->
              <svg class="w-6 h-6 text-filament-cyan relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M16 4L28 11V21L16 28L4 21V11L16 4Z" stroke-width="2" stroke-linejoin="round" class="stroke-filament-cyan" />
                <path d="M4 11L16 18L28 11" stroke-width="2" class="stroke-filament-orange" />
                <path d="M16 18V28" stroke-width="2" class="stroke-sky-400" />
                <circle cx="16" cy="18" r="2.5" class="fill-filament-amber" />
              </svg>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="font-sans font-extrabold text-xl tracking-tight text-white group-hover:text-filament-cyan transition-colors">
                Layer<span class="text-filament-orange">Code</span>
              </span>
              <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-filament-cyan/15 text-filament-cyan border border-filament-cyan/30">
                3D
              </span>
            </div>
            <span class="text-[11px] text-slate-400 font-sans tracking-wide">
              Engenharia & Arte Sob Medida
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2">
          <button 
            @click="scrollToSection('catalogo')"
            class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            Catálogo & Peças
          </button>
          <button 
            @click="scrollToSection('processo')"
            class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            Como Funciona
          </button>
          <button 
            @click="scrollToSection('materiais')"
            class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            Guia de Filamentos
          </button>
          <button 
            @click="scrollToSection('orcamento')"
            class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            Orçamento STL
          </button>
          <button 
            @click="scrollToSection('sobre')"
            class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            O Criador
          </button>
        </nav>

        <!-- Right Action Button: WhatsApp Consultative CTA -->
        <div class="hidden sm:flex items-center gap-3">
          <a
            :href="getDirectChatLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="relative inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-filament-cyan hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle class="w-4 h-4 fill-slate-950 text-slate-950" />
            <span class="font-semibold">Falar no WhatsApp</span>
          </a>
        </div>

        <!-- Mobile Menu Trigger -->
        <div class="flex md:hidden items-center gap-2">
          <a
            :href="getDirectChatLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
            title="WhatsApp"
          >
            <MessageCircle class="w-5 h-5 fill-emerald-400" />
          </a>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg bg-layer-800 text-slate-300 hover:text-white hover:bg-layer-700 transition-colors"
            aria-label="Abrir menu"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden glass-panel border-b border-layer-border px-4 pt-3 pb-6 space-y-3 bg-layer-950/95 animate-fadeIn"
    >
      <div class="grid grid-cols-1 gap-2 pt-2">
        <button 
          @click="scrollToSection('catalogo')"
          class="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-layer-800 rounded-lg text-left"
        >
          <Layers class="w-5 h-5 text-filament-cyan" />
          Catálogo & Peças
        </button>
        <button 
          @click="scrollToSection('processo')"
          class="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-layer-800 rounded-lg text-left"
        >
          <Wrench class="w-5 h-5 text-filament-orange" />
          Como Funciona o Processo
        </button>
        <button 
          @click="scrollToSection('materiais')"
          class="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-layer-800 rounded-lg text-left"
        >
          <Sparkles class="w-5 h-5 text-filament-teal" />
          Guia de Filamentos & Resina
        </button>
        <button 
          @click="scrollToSection('orcamento')"
          class="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-layer-800 rounded-lg text-left"
        >
          <Box class="w-5 h-5 text-filament-amber" />
          Orçamento Sob Medida / STL
        </button>
        <button 
          @click="scrollToSection('sobre')"
          class="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-layer-800 rounded-lg text-left"
        >
          <Flame class="w-5 h-5 text-rose-400" />
          Conheça o Criador
        </button>
      </div>

      <div class="pt-4 border-t border-layer-border">
        <a
          :href="getDirectChatLink()"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-filament-cyan shadow-md shadow-emerald-500/20"
        >
          <MessageCircle class="w-5 h-5 fill-slate-950" />
          Conversar Direto no WhatsApp
        </a>
      </div>
    </div>
  </header>
</template>
