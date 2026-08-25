import { contactContent, contactServices } from "../../domain/content/contact-content.js";

export interface ContactValues {
  readonly company: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly service: string;
  readonly message: string;
  readonly consent: boolean;
  readonly website: string;
}

export interface ContactErrors {
  readonly company?: string;
  readonly name?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly service?: string;
  readonly message?: string;
  readonly consent?: string;
  readonly form?: string;
}

export interface PreparedContact {
  readonly values: ContactValues;
  readonly errors: ContactErrors;
  readonly whatsappUrl?: string;
  readonly emailUrl?: string;
}

const allowedServices = new Set<string>(contactServices.map((service) => service.value).filter(Boolean));
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const phonePattern = /^[+\d\s().-]{7,24}$/u;

function stringValue(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function serviceLabel(value: string): string {
  return contactServices.find((service) => service.value === value)?.label ?? value;
}

export function prepareContact(body: unknown): PreparedContact {
  const source = typeof body === "object" && body !== null ? body as Record<string, unknown> : {};
  const values: ContactValues = {
    company: stringValue(source.company, 120),
    name: stringValue(source.name, 100),
    email: stringValue(source.email, 254).toLowerCase(),
    phone: stringValue(source.phone, 24),
    service: stringValue(source.service, 40),
    message: stringValue(source.message, 2_000),
    consent: source.consent === "yes",
    website: stringValue(source.website, 200)
  };

  if (values.website) {
    return { values, errors: { form: "No fue posible preparar la consulta." } };
  }

  const errors: ContactErrors = {
    ...(values.name.length < 2 ? { name: "Escribe tu nombre." } : {}),
    ...(!emailPattern.test(values.email) ? { email: "Escribe un correo válido." } : {}),
    ...(values.phone && !phonePattern.test(values.phone) ? { phone: "Revisa el formato del teléfono." } : {}),
    ...(!allowedServices.has(values.service) ? { service: "Selecciona el servicio relacionado." } : {}),
    ...(values.message.length < 20 ? { message: "Cuéntanos un poco más; utiliza al menos 20 caracteres." } : {}),
    ...(!values.consent ? { consent: "Confirma que podemos usar estos datos para responder tu consulta." } : {})
  };

  if (Object.keys(errors).length > 0) return { values, errors };

  const messageLines = [
    "Hola, RF Consulting.",
    "",
    `Mi nombre es ${values.name}${values.company ? ` y escribo de ${values.company}` : ""}.`,
    `Servicio de interés: ${serviceLabel(values.service)}.`,
    "",
    values.message,
    "",
    `Correo: ${values.email}${values.phone ? `\nTeléfono: ${values.phone}` : ""}`
  ];
  const preparedMessage = messageLines.join("\n");
  const subject = `Consulta web — ${serviceLabel(values.service)}`;

  return {
    values,
    errors,
    whatsappUrl: `${contactContent.whatsappBaseUrl}?text=${encodeURIComponent(preparedMessage)}`,
    emailUrl: `mailto:${contactContent.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preparedMessage)}`
  };
}

export function emptyContactValues(): ContactValues {
  return { company: "", name: "", email: "", phone: "", service: "", message: "", consent: false, website: "" };
}
