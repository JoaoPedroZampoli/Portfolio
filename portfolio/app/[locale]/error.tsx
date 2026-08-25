"use client";

import { Button } from "@heroui/button";
import { useEffect } from "react";
import { useParams } from "next/navigation";

import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : defaultLocale;
  const dict = getDictionary(isLocale(raw) ? raw : defaultLocale);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5 px-6 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
        {dict.common.error}
      </h1>
      <p className="text-default-500 max-w-md">{dict.common.errorText}</p>
      <Button color="primary" radius="full" onPress={reset}>
        {dict.common.tryAgain}
      </Button>
    </div>
  );
}
