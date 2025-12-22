"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function useViewTransition() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (url: string) => {
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as any).startViewTransition(() => {
        startTransition(() => {
          router.push(url);
        });
      });
    } else {
      startTransition(() => {
        router.push(url);
      });
    }
  };

  return { navigate, isPending };
}
