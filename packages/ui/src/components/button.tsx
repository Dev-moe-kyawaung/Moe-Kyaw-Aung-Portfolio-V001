// packages/ui/src/components/button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../lib/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({
  asChild = false,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const Comp: any = asChild ? Slot : 'button';

  const variants = {
    primary: 'bg-brand text-white hover:opacity-95 focus-visible:ring-brand',
    secondary:
      'border border-border bg-surface-2 text-text hover:bg-surface focus-visible:ring-border',
    ghost: 'bg-transparent text-text hover:bg-surface focus-visible:ring-border'
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base'
  };

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
