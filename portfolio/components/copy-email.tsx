"use client";

import { Button } from "@heroui/button";
import { Snippet } from "@heroui/snippet";
import { useEffect, useState } from "react";

import { CheckIcon, CopyIcon, MailIcon } from "@/components/icons";

interface CopyEmailProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
  writeLabel: string;
}

export function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
  writeLabel,
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Contextos sem permissão de clipboard: o endereço segue visível e
      // selecionável, e o botão de escrever continua funcionando.
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <Snippet
        hideCopyButton
        hideSymbol
        className="text-sm"
        radius="lg"
        variant="bordered"
      >
        {email}
      </Snippet>
      <div className="flex gap-2">
        <Button
          size="md"
          startContent={copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          variant="flat"
          onPress={copy}
        >
          {copied ? copiedLabel : copyLabel}
        </Button>
        <Button
          as="a"
          color="primary"
          href={`mailto:${email}`}
          size="md"
          startContent={<MailIcon size={16} />}
        >
          {writeLabel}
        </Button>
      </div>

      {/*
        A troca de rótulo do botão é visual. Sem uma região viva, quem usa
        leitor de tela aperta "Copiar" e não recebe retorno nenhum.
      */}
      <span aria-live="polite" className="sr-only" role="status">
        {copied ? copiedLabel : ""}
      </span>
    </div>
  );
}

export default CopyEmail;
