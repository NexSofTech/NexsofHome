// app/[locale]/layout.tsx
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Nexsof | Custom Software Development Company in Lucknow, India",
  description:
    "Nexsof is a custom software development company based in Lucknow, India. We build websites, mobile apps, ERP systems, CRMs, AI-powered software, and business automation tools — one stop solution for all your software needs.",
  keywords: [
    "software company Lucknow",
    "custom software development India",
    "website development Lucknow",
    "mobile app development",
    "ERP software India",
    "CRM software",
    "AI powered software",
    "business automation",
    "nexsof tech",
    "nexsof.tech",
    "software solutions Lucknow",
    "web development company Lucknow",
  ],
  openGraph: {
    title: "Nexsof | Custom Software Development Company in Lucknow, India",
    description:
      "One stop solution for all your software needs. Nexsof builds websites, apps, ERPs, CRMs, and AI-powered software for businesses across India.",
    url: "https://nexsof.tech",
    siteName: "Nexsof",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexsof | Custom Software Development Company in Lucknow",
    description:
      "Websites, mobile apps, ERP, CRM, AI automation — everything your business needs, built by Nexsof in Lucknow.",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: "Nexsof",
  },
};


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}