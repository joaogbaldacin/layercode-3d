<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductCatalog from './components/ProductCatalog.vue'
import ProcessSection from './components/ProcessSection.vue'
import MaterialsGuide from './components/MaterialsGuide.vue'
import CustomQuoteSection from './components/CustomQuoteSection.vue'
import MakerAboutSection from './components/MakerAboutSection.vue'
import Footer from './components/Footer.vue'
import ProductModal from './components/ProductModal.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

// Modal state
const selectedProduct = ref(null)
const isModalOpen = ref(false)

const openProductModal = (product) => {
  selectedProduct.value = product
  isModalOpen.value = true
}

const closeProductModal = () => {
  isModalOpen.value = false
  selectedProduct.value = null
}
</script>

<template>
  <div class="min-h-screen bg-layer-950 text-slate-100 flex flex-col selection:bg-filament-orange/30 selection:text-white">
    
    <!-- Navbar with Live Status Bar -->
    <Navbar />

    <!-- Main Content Flow -->
    <main class="flex-grow">
      
      <!-- 1. Hero Section -->
      <HeroSection />

      <!-- 2. Showcase / Catalog of 3D Products -->
      <ProductCatalog 
        @openModal="openProductModal" 
      />

      <!-- 3. How It Works / Custom Process -->
      <ProcessSection />

      <!-- 4. Materials & Filament Guide -->
      <MaterialsGuide />

      <!-- 5. Custom Quote / STL Request Form (WhatsApp Conversion) -->
      <CustomQuoteSection />

      <!-- 6. About the Maker & Workshop -->
      <MakerAboutSection />

    </main>

    <!-- Footer -->
    <Footer />

    <!-- Interactive Product Configuration Modal -->
    <ProductModal 
      :product="selectedProduct" 
      :isOpen="isModalOpen" 
      @close="closeProductModal" 
    />

    <!-- Floating WhatsApp conversion trigger -->
    <FloatingWhatsApp />

  </div>
</template>
