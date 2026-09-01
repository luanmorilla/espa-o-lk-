export const WHATSAPP_NUMBER = '5511971013545'

export function getWhatsappLink(mensagem) {
  const texto = encodeURIComponent(mensagem)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`
}