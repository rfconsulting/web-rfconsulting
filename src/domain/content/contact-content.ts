export const contactServices = [
  { value: "", label: "Selecciona una opción" },
  { value: "sistemas", label: "Sistemas empresariales" },
  { value: "integraciones", label: "Integraciones y automatización" },
  { value: "desarrollo", label: "Desarrollo de software" },
  { value: "soporte", label: "Soporte tecnológico" },
  { value: "web", label: "Servicios web" },
  { value: "aplicaciones", label: "Aplicaciones web" },
  { value: "facturacion", label: "Facturación Electrónica" },
  { value: "otro", label: "Otra consulta" }
] as const;

export const contactContent = {
  meta: {
    title: "Contacto | RF Consulting",
    description: "Conversa con RF Consulting sobre sistemas, integraciones, desarrollo, soporte y servicios web para tu empresa."
  },
  salesEmail: "ventas@rfcpty.com",
  supportEmail: "soporte@rfcpty.com",
  phoneDisplay: "+507 6155-5815",
  phoneValue: "+50761555815",
  whatsappBaseUrl: "https://wa.me/50761555815",
  services: contactServices
} as const;
