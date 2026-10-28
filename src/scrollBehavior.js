// scrollIntoView({ behavior: 'smooth' }) ignores the CSS reduced-motion reset.
export const scrollBehavior = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
