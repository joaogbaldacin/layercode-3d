<script setup>
import { siteConfig } from '../data/config'
import { useWhatsApp } from '../composables/useWhatsApp'
import { 
  Heart, 
  Layers, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Sparkles, 
  ShieldCheck, 
  Terminal,
  ExternalLink
} from 'lucide-vue-next'

const { getDirectChatLink } = useWhatsApp()

const currentYear = new Date().getFullYear()

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-layer-950 border-t border-layer-border pt-16 pb-12 relative text-left text-slate-400">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-layer-border/70">
        
        <!-- Brand & Concept Narrative -->
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-layer-800 to-layer-900 p-0.5 border border-layer-border">
              <div class="w-full h-full bg-layer-950 rounded-[10px] flex items-center justify-center">
                <svg class="w-5 h-5 text-filament-cyan" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                  <path d="M16 4L28 11V21L16 28L4 21V11L16 4Z" stroke-width="2" stroke-linejoin="round" class="stroke-filament-cyan" />
                  <path d="M4 11L16 18L28 11" stroke-width="2" class="stroke-filament-orange" />
                  <path d="M16 18V28" stroke-width="2" class="stroke-sky-400" />
                  <circle cx="16" cy="18" r="2" class="fill-filament-amber" />
                </svg>
              </div>
            </div>

            <div>
              <span class="font-sans font-extrabold text-xl tracking-tight text-white">
                Layer<span class="text-filament-orange">Code</span> 3D
              </span>
              <p class="text-[11px] text-slate-500 font-mono">Engenharia Digital & Manufatura Artesanal</p>
            </div>
          </div>

          <p class="text-sm text-slate-300 leading-relaxed">
            "Transformando linhas de código e polímeros em peças reais e exclusivas para você."
          </p>

          <p class="text-xs text-slate-400 leading-relaxed">
            Cada camada depositada em nossas impressoras carrega o compromisso com a exatidão micrométrica e o calor do acabamento manual. Obrigado por apoiar um ateliê maker independente brasileiro!
          </p>

          <div class="flex items-center gap-3 pt-2 text-xs text-slate-400">
            <span class="flex items-center gap-1">
              <MapPin class="w-3.5 h-3.5 text-filament-cyan" />
              {{ siteConfig.location }}
            </span>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold">
            Navegação & Catálogo
          </h4>
          <ul class="space-y-2 text-xs">
            <li>
              <button @click="scrollToSection('catalogo')" class="hover:text-filament-cyan transition-colors cursor-pointer">
                Catálogo de Peças & Colecionáveis
              </button>
            </li>
            <li>
              <button @click="scrollToSection('processo')" class="hover:text-filament-cyan transition-colors cursor-pointer">
                Como Funciona o Fatiamento
              </button>
            </li>
            <li>
              <button @click="scrollToSection('materiais')" class="hover:text-filament-cyan transition-colors cursor-pointer">
                Guia Técnico de Polímeros (PLA / PETG / Resina)
              </button>
            </li>
            <li>
              <button @click="scrollToSection('orcamento')" class="hover:text-filament-cyan transition-colors cursor-pointer">
                Solicitar Orçamento de STL
              </button>
            </li>
            <li>
              <button @click="scrollToSection('sobre')" class="hover:text-filament-cyan transition-colors cursor-pointer">
                Sobre a Bancada do Maker
              </button>
            </li>
          </ul>
        </div>

        <!-- Direct Contact & Hours -->
        <div class="lg:col-span-4 space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold">
            Atendimento Direto com o Criador
          </h4>
          
          <div class="space-y-2.5 text-xs">
            <div class="p-3 rounded-xl bg-layer-900 border border-layer-border space-y-1">
              <div class="text-slate-300 font-semibold flex items-center justify-between">
                <span>WhatsApp Consultivo:</span>
                <span class="text-emerald-400 font-mono font-bold">{{ siteConfig.displayPhone }}</span>
              </div>
              <p class="text-[11px] text-slate-400">
                Segunda a Sexta: 08:30 às 19:30 • Sábados: 09:00 às 14:00
              </p>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-layer-900 border border-layer-border">
              <span class="text-slate-400">E-mail Técnico:</span>
              <span class="text-slate-200 font-mono">{{ siteConfig.email }}</span>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-layer-900 border border-layer-border">
              <span class="text-slate-400">Instagram da Oficina:</span>
              <a 
                :href="siteConfig.instagramUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-filament-orange hover:text-amber-300 transition-colors font-mono font-medium flex items-center gap-1"
              >
                <span>{{ siteConfig.instagram }}</span>
                <ExternalLink class="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Credits & Humanized Heart Note -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        
        <div class="flex items-center gap-1.5 text-center sm:text-left">
          <span>© {{ currentYear }} <strong>LayerCode 3D</strong>. Todos os direitos reservados.</span>
        </div>

        <!-- Warm humanized appreciation -->
        <div class="flex items-center gap-1 text-slate-300 text-center sm:text-right">
          <span>Projetado com</span>
          <Heart class="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
          <span>e código em Vue.js + Tailwind CSS.</span>
          <span class="text-filament-teal ml-1 hidden sm:inline">Apoie o makerspace local.</span>
        </div>

      </div>

    </div>

  </footer>
</template>
