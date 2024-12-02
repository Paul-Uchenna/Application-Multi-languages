import { I18nProviderClient } from "@/locales/client";
import { PropsWithChildren } from "react";

export function Providers(props: PropsWithChildren<{ locale: string }>) {
  return (
    <I18nProviderClient locale={props.locale}>
      {props.children}
    </I18nProviderClient>
  );
}
