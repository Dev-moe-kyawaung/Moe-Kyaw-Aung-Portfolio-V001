// packages/ui/src/components/navigation.tsx
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';

type NavItem = { label: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

type NavigationProps = {
  brand: React.ReactNode;
  groups: NavGroup[];
  contactHref?: string;
};

export function Navigation({ brand, groups, contactHref = '/contact' }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight">
          {brand}
        </a>

        <div className="hidden md:block">
          <NavigationMenuPrimitive.Root>
            <NavigationMenuPrimitive.List className="flex items-center gap-6">
              {groups.map((group) => (
                <NavigationMenuPrimitive.Item key={group.label}>
                  <NavigationMenuPrimitive.Trigger className="text-sm text-muted transition hover:text-text">
                    {group.label}
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className="mt-3 rounded-2xl border border-border bg-surface p-3 shadow-xl">
                    <div className="grid gap-2">
                      {group.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="rounded-xl px-3 py-2 text-sm text-text transition hover:bg-surface-2"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>
              ))}
            </NavigationMenuPrimitive.List>
          </NavigationMenuPrimitive.Root>
        </div>

        <div className="flex items-center gap-3">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="rounded-full border border-border px-4 py-2 text-sm text-text transition hover:bg-surface">
                Menu
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-surface p-6">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-lg font-semibold">Navigation</Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="text-sm text-muted">Close</button>
                  </Dialog.Close>
                </div>

                <div className="mt-6 grid gap-2">
                  {groups.flatMap((group) =>
                    group.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-xl border border-border px-3 py-3 text-sm transition hover:bg-surface-2"
                      >
                        {item.label}
                      </a>
                    ))
                  )}
                  <a
                    href={contactHref}
                    className="rounded-xl bg-brand px-3 py-3 text-sm font-medium text-white"
                  >
                    Contact
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
