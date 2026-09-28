import { site } from "../data/site";

/**
 * Builds a WhatsApp deep link with an optional custom message.
 * Falls back to the default site message if none provided.
 */
export function whatsappLink(message) {
  const text = encodeURIComponent(message || site.defaultWhatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}