export const WHATSAPP_NUMBER = '5511964693016'

export function getWhatsappLink(mensagem) {
  const texto = encodeURIComponent(mensagem)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`
}