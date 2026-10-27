<script setup>
import { ref, computed } from 'vue'
import { useWhatsApp } from '../composables/useWhatsApp'
import { 
  FileCode, 
  Send, 
  MessageCircle, 
  HelpCircle, 
  UploadCloud, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  CheckCircle,
  ExternalLink
} from 'lucide-vue-next'

const { getCustomQuoteWhatsAppLink } = useWhatsApp()

const projectName = ref('')
const categoryType = ref('Prototipagem / Engenharia')
const materialPreference = ref('Recomendação do Maker (avaliar esforço)')
const estimatedDimensions = ref('')
const fileLink = ref('')
const projectNotes = ref('')

const isCopied = ref(false)

const dynamicQuoteLink = computed(() => {
  return getCustomQuoteWhatsAppLink({
    name: projectName.value || 'Projeto Sob Medida',
    material: materialPreference.value,
    dimensions: estimatedDimensions.value || 'A definir na análise do arquivo',
    fileUrl: fileLink.value || 'Vou enviar o arquivo STL/imagem direto no chat',
    description: `${categoryType.value}. ${projectNotes.value || 'Avaliar viabilidade técnica, peso e tempo de bancada.'}`
  })
})

const categoriesList = [
  'Prototipagem / Engenharia',
  'Decoração & Design de Interiores',
  'Geek, Miniaturas & Colecionáveis',
  'Utilitários & Organização',
  'Peça Quebrada / Reposição Mecânica'
]

const materialOptions = [
  'Recomendação do Maker (avaliar esforço)',
  'PLA Premium Eco-Friendly (Decorativo/Fosco)',
  'PETG de Engenharia (Resistência e Carga)',
  'Resina 8K Alta Resolução (Miniaturas)',
  'TPU Flexível 95A (Emborrachado/Impacto)',
  'ASA / ABS Resistente a Sol e Chuva'
]

const freeModelRepositories = [
  { name: 'Printables.com', url: 'https://printables.com' },
  { name: 'MakerWorld.com', url: 'https://makerworld.com' },
  { name: 'Thingiverse.com', url: 'https://thingiverse.com' }
]
</script>

<template>
  <section id="orcamento" class="py-24 relative overflow-hidden">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Side: Educational context & Free Repository tips -->
        <div class="lg:col-span-5 space-y-6 text-left">
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-filament-orange/10 border border-filament-orange/30 text-filament-orange text-xs font-mono">
            <FileCode class="w-3.5 h-3.5" />
            <span>SOLICITAÇÃO DE ORÇAMENTO STL</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Tem um arquivo 3D ou uma peça para recriar?
          </h2>

          <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
            Seja um projeto próprio modelado em Fusion 360, uma peça sobressalente quebrada que não se encontra mais no mercado ou um modelo incrível que você encontrou na internet: <strong>nós analisamos e fatiamos para você.</strong>
          </p>

          <!-- Free Model Repositories Box -->
          <div class="p-5 rounded-2xl glass-card border border-layer-border space-y-3">
            <div class="flex items-center gap-2 text-xs font-mono text-filament-cyan">
              <Sparkles class="w-4 h-4 text-filament-cyan" />
              <span>ONDE ENCONTRAR MODELOS 3D GRATUITOS:</span>
            </div>
            <p class="text-xs text-slate-400">
              Você pode navegar por milhões de modelos 3D prontos e gratuitos. Basta copiar o link do modelo e colar no formulário ao lado:
            </p>
            <div class="flex flex-wrap gap-2 pt-1">
              <a
                v-for="(repo, rIdx) in freeModelRepositories"
                :key="rIdx"
                :href="repo.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-layer-950 border border-layer-border text-xs text-slate-300 hover:text-filament-cyan hover:border-filament-cyan/50 transition-colors"
              >
                <span>{{ repo.name }}</span>
                <ExternalLink class="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          <!-- Guarantees list -->
          <div class="space-y-3 pt-2">
            <div class="flex items-start gap-3 text-xs text-slate-300">
              <div class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle class="w-3.5 h-3.5" />
              </div>
              <div>
                <strong class="text-slate-100 block">Sem robôs ou respostas automáticas</strong>
                Pedro analisa a geometria no fatiador para checar se a peça precisará de suportes, espessura mínima de parede e orientação correta de camadas.
              </div>
            </div>

            <div class="flex items-start gap-3 text-xs text-slate-300">
              <div class="w-5 h-5 rounded-full bg-filament-cyan/10 text-filament-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle class="w-3.5 h-3.5" />
              </div>
              <div>
                <strong class="text-slate-100 block">Relatório com Print do Fatiador</strong>
                Você recebe um print da simulação com o peso exato do filamento em gramas e tempo estimado de impressão.
              </div>
            </div>
          </div>

        </div>

        <!-- Right Side: Interactive WhatsApp Quote Generator Form -->
        <div class="lg:col-span-7">
          
          <div class="rounded-3xl glass-panel p-6 sm:p-8 border border-layer-border shadow-2xl relative text-left space-y-6">
            
            <div class="border-b border-layer-border pb-4">
              <h3 class="text-xl font-bold text-white">
                Configurador de Orçamento Rápido
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                Preencha os dados abaixo para gerar sua mensagem personalizada direto para o WhatsApp do Maker.
              </p>
            </div>

            <div class="space-y-4">
              
              <!-- 1. Project Name -->
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-slate-200 block">
                  Nome ou Descrição Breve da Peça:
                </label>
                <input
                  v-model="projectName"
                  type="text"
                  placeholder="Ex: Suporte para microfone Shure, Engrenagem de esteira..."
                  class="w-full text-sm px-4 py-3 rounded-xl bg-layer-950 border border-layer-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-filament-cyan transition-colors"
                />
              </div>

              <!-- 2. Category & Material -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-200 block">
                    Finalidade da Peça:
                  </label>
                  <select
                    v-model="categoryType"
                    class="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl bg-layer-950 border border-layer-border text-slate-200 focus:outline-none focus:border-filament-cyan transition-colors cursor-pointer"
                  >
                    <option v-for="(cat, cIdx) in categoriesList" :key="cIdx" :value="cat">
                      {{ cat }}
                    </option>
                  </select>
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-200 block">
                    Preferencia de Material:
                  </label>
                  <select
                    v-model="materialPreference"
                    class="w-full text-xs sm:text-sm px-3.5 py-3 rounded-xl bg-layer-950 border border-layer-border text-slate-200 focus:outline-none focus:border-filament-cyan transition-colors cursor-pointer"
                  >
                    <option v-for="(mat, mIdx) in materialOptions" :key="mIdx" :value="mat">
                      {{ mat }}
                    </option>
                  </select>
                </div>

              </div>

              <!-- 3. Dimensions & File Link -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-200 block">
                    Dimensões Aproximadas (Comp x Larg x Alt):
                  </label>
                  <input
                    v-model="estimatedDimensions"
                    type="text"
                    placeholder="Ex: 120 x 80 x 50 mm"
                    class="w-full text-sm px-4 py-3 rounded-xl bg-layer-950 border border-layer-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-filament-cyan transition-colors"
                  />
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-200 block">
                    Link do Modelo 3D ou Drive (opcional):
                  </label>
                  <input
                    v-model="fileLink"
                    type="url"
                    placeholder="Link do Printables, Thingiverse, Drive..."
                    class="w-full text-sm px-4 py-3 rounded-xl bg-layer-950 border border-layer-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-filament-cyan transition-colors"
                  />
                </div>

              </div>

              <!-- 4. Notes -->
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-slate-200 block">
                  Requisitos Especiais / Observações:
                </label>
                <textarea
                  v-model="projectNotes"
                  rows="3"
                  placeholder="Ex: Precisa aguentar calor, vai ficar exposto ao sol, cor de preferência cinza grafite..."
                  class="w-full text-sm px-4 py-3 rounded-xl bg-layer-950 border border-layer-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-filament-cyan transition-colors resize-none"
                ></textarea>
              </div>

            </div>

            <!-- WhatsApp Direct Conversion Button -->
            <div class="pt-4 border-t border-layer-border space-y-3">
              
              <a
                :href="dynamicQuoteLink"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-filament-cyan hover:from-emerald-300 hover:to-teal-200 transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] text-center"
              >
                <MessageCircle class="w-5 h-5 fill-slate-950" />
                <span>Enviar Orçamento no WhatsApp do Criador</span>
              </a>

              <p class="text-center text-xs text-slate-400">
                Se você tiver apenas o arquivo STL no computador, pode anexar o arquivo diretamente na janela de conversa do WhatsApp que será aberta!
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>
