type MediaQueryProps = {
  mobile: number;
  tablet: number;
  desktop: number;
  extra: number;
};

const sizes: MediaQueryProps = {
  mobile: 360,
  tablet: 600,
  desktop: 1024,
  extra: 1440,
};

export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (style: String) =>
      `@media (max-width: ${sizes[label] / 16}em) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);
