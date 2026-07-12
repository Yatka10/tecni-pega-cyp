import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export function SmartImage({ wrapperClassName = "", className = "", onLoad, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div
          aria-hidden
          className={`absolute inset-0 skeleton-shine ${wrapperClassName}`}
        />
      )}
      <img
        {...rest}
        loading={rest.loading ?? "lazy"}
        decoding={rest.decoding ?? "async"}
        onLoad={(e) => { setLoaded(true); onLoad?.(e); }}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
