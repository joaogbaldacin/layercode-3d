import { siteConfig } from '../data/config'

export function useWhatsApp() {
  const defaultPhone = siteConfig.whatsappNumber

  /**
   * Generates a pre-formatted WhatsApp link for a specific catalog product
   */
  const getProductWhatsAppLink = (product, options = {}) => {
    const color = options.color || (product.availableColors?.[0]?.name ?? 'Cor padrão')
    const material = options.material || product.material
    const quantity = options.quantity || 1
    const extraNotes = options.notes ? `\n📝 *Observações do cliente:* ${options.notes}` : ''

    const message = [
      `👋 Olá Pedro! Vi o produto *${product.title}* no catálogo da *LayerCode 3D* e quero tirar dúvidas / personalizar um para mim.`,
      ``,
      `⚙️ *Configuração de Interesse:*`,
      `• *Produto:* ${product.title}`,
      `• *Categoria:* ${product.categoryLabel}`,
      `• *Material sugerido:* ${material}`,
      `• *Cor selecionada:* ${color}`,
      `• *Quantidade:* ${quantity}`,
      `• *Valor de referência:* ${product.pricePrefix} ${product.priceEstimate}`,
      extraNotes,
      ``,
      `💬 Pode me informar a previsão de produção na sua bancada e o frete para o meu CEP?`
    ].filter(Boolean).join('\n')

    return `https://wa.me/${defaultPhone}?text=${encodeURIComponent(message)}`
  }

  /**
   * Generates a pre-formatted WhatsApp link for a custom STL or new idea project
   */
  const getCustomQuoteWhatsAppLink = (quoteData = {}) => {
    const projectName = quoteData.name || 'Projeto Personalizado / Sob Medida'
    const material = quoteData.material || 'Recomendação do Maker'
    const dimensions = quoteData.dimensions || 'A definir com o Maker'
    const fileUrl = quoteData.fileUrl || 'Vou enviar o arquivo STL/foto por aqui'
    const description = quoteData.description || 'Gostaria de avaliar a viabilidade de fabricação'

    const message = [
      `🚀 Olá Pedro! Tenho um projeto para avaliação técnica e orçamento na *LayerCode 3D*:`,
      ``,
      `📐 *Especificações do Projeto:*`,
      `• *Nome/Ideia:* ${projectName}`,
      `• *Material pretendido:* ${material}`,
      `• *Dimensões estimadas:* ${dimensions}`,
      `• *Arquivo 3D / Referência:* ${fileUrl}`,
      `• *Finalidade da peça:* ${description}`,
      ``,
      `🔧 Gostaria de saber a estimativa de tempo de impressão, gramas de filamento e validação de fatiamento. Poderia me ajudar?`
    ].join('\n')

    return `https://wa.me/${defaultPhone}?text=${encodeURIComponent(message)}`
  }

  /**
   * Generates a direct maker greeting link
   */
  const getDirectChatLink = (customGreeting = '') => {
    const defaultText = `👋 Olá Pedro! Estava navegando na *LayerCode 3D* e gostaria de conversar sobre um projeto de impressão 3D.`
    const message = customGreeting || defaultText
    return `https://wa.me/${defaultPhone}?text=${encodeURIComponent(message)}`
  }

  return {
    getProductWhatsAppLink,
    getCustomQuoteWhatsAppLink,
    getDirectChatLink,
    phoneFormatted: siteConfig.displayPhone,
    phoneNumber: defaultPhone
  }
}
