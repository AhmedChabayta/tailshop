import { cva } from 'class-variance-authority';

export const button = cva('button', {
  variants: {
    intent: {
      unstyled: [''],
      primary: [
        'bg-blue-500',
        'dark:bg-blue-600',
        'border-blue-500',
        'dark:border-blue-600',
        'text-gray-900',
        'dark:text-gray-200',
      ],
      error: [
        'bg-red-500',
        'dark:bg-red-600',
        'border-red-500',
        'dark:border-red-600',
        'text-gray-900',
        'dark:text-gray-200',
      ],
      disabled: [
        'bg-gray-500',
        'dark:bg-gray-600',
        'border-gray-500',
        'dark:border-gray-600',
        'text-gray-900',
        'dark:text-gray-200',
        'cursor-not-allowed',
      ],
      danger: [
        'bg-orange-500',
        'dark:bg-orange-600',
        'border-orange-500',
        'dark:border-orange-600',
        'text-gray-900',
        'dark:text-gray-200',
      ],
      success: [
        'bg-green-500',
        'dark:bg-green-600',
        'border-green-500',
        'dark:border-green-600',
        'text-gray-900',
        'dark:text-gray-200',
      ],
    },
    variant: {
      solid: ['border-none'],
      outline: ['!bg-transparent', 'border'],
      link: ['!bg-transparent', 'border-b'],
    },
    size: {
      xl: ['w-44', 'h-[48px]', 'gap-[8px]', 'font-[600]', 'text-xl', 'px-5'],
      lg: ['w-36', 'h-[40px]', 'gap-[8px]', 'font-[600]', 'text-lg', 'px-4'],
      md: [
        'w-32',
        'h-[32px]',
        'gap-[8px]',
        'weight-[600]',
        'text-base',
        'px-3',
      ],
      sm: ['w-26', 'h-[24px]', 'gap-[8px]', 'font-[600]', 'text-sm', 'px-2'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'md', class: 'uppercase' }],
  defaultVariants: {
    intent: 'unstyled',
  },
});
