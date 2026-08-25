"use client";

import { Button } from "@heroui/button";
import NextLink from "next/link";
import { useParams } from "next/navigation";

import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/lib/navigation";

export default function NotFound() {
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : defaultLocale;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5 px-6 text-center">
      <p className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
        404
      </p>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
        {dict.common.notFound}
      </h1>
      <p className="text-default-500 max-w-md">{dict.common.notFoundText}</p>
      <Button as={NextLink} color="primary" href={localePath(locale)} radius="full">
        {dict.common.goHome}
      </Button>
    </div>
  );
}
