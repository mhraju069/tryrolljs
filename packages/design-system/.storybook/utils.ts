import { FunctionComponent } from "react";

export const titleBuilder = {
  atoms: (componentTitle: string) => `Design System/Atoms/${componentTitle}`,
  molecules: (componentTitle: string) =>
    `Design System/Molecules/${componentTitle}`,
  organisms: (componentTitle: string) =>
    `Design System/Organisms/${componentTitle}`,
  templates: (componentTitle: string) =>
    `Design System/Templates/${componentTitle}`,
  pages: (componentTitle: string) => `Design System/Pages/${componentTitle}`,
};

export const fromTemplate = <P>(
  component: FunctionComponent<P>,
  args: Partial<P> = {}
) => Object.assign(component.bind({}), { args });
