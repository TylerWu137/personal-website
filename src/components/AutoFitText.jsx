// AutoFitText.jsx
import { useRef, useLayoutEffect, useState } from "react";
import { Typography } from "@mui/material";

export default function AutoFitText({
  children,
  minFontSize = 12,
  maxFontSize = 16,
  step = 1,
  sx,
  ...typographyProps
}) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    const measure = () => {
      if (cancelled || !el) return;

      let size = maxFontSize;
      el.style.fontSize = `${size}px`;

      while (el.scrollWidth > el.clientWidth && size > minFontSize) {
        size -= step;
        el.style.fontSize = `${size}px`;
      }

      setFontSize(size);
    };

    // Run once immediately (covers cached-font / same-session case),
    // then re-run once fonts are confirmed loaded (covers cold refresh).
    measure();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }

    // Re-measure on any future layout/size change to this element's container.
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(el.parentElement ?? el);

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
    };
  }, [children, minFontSize, maxFontSize, step]);

  return (
    <Typography
      ref={ref}
      component="span"
      noWrap
      sx={{
        fontSize: `${fontSize}px`,
        display: "block",
        minWidth: 0,
        flex: 1,
        ...sx,
      }}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
}