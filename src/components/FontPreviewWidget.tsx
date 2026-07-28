"use client";

import { useEffect, useState } from "react";

const fontOptions = [
  { label: "Original serif", value: 'Georgia, "Times New Roman", serif' },
  { label: "Patrick Hand", value: '"Patrick Hand", cursive' },
  { label: "Coming Soon", value: '"Coming Soon", cursive' },
  { label: "Schoolbell", value: 'Schoolbell, cursive' },
  { label: "Kalam", value: 'Kalam, cursive' },
  { label: "Mali", value: 'Mali, cursive' },
  { label: "Handlee", value: 'Handlee, cursive' },
  { label: "Gaegu", value: 'Gaegu, cursive' },
  { label: "Architects Daughter", value: '"Architects Daughter", cursive' },
  { label: "Shantell Sans", value: '"Shantell Sans", cursive' },
  { label: "Boogaloo", value: 'Boogaloo, cursive' },
];

const storageKey = "solrise-font-preview";

export default function FontPreviewWidget() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(fontOptions[0].value);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    const option = fontOptions.find((font) => font.value === saved);
    if (option) {
      setSelected(option.value);
      document.documentElement.style.setProperty("--font-display", option.value);
    }
  }, []);

  function previewFont(value: string) {
    setSelected(value);
    document.documentElement.style.setProperty("--font-display", value);
    window.localStorage.setItem(storageKey, value);
  }

  function resetFont() {
    previewFont(fontOptions[0].value);
  }

  return (
    <aside className={`font-preview${open ? " is-open" : ""}`} aria-label="Font preview tool">
      <button className="font-preview-toggle" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="font-preview-panel">
        <span aria-hidden="true">Aa</span><span className="sr-only">Try display fonts</span>
      </button>
      <div className="font-preview-panel" id="font-preview-panel" hidden={!open}>
        <div><strong>Try a heading font</strong><button type="button" onClick={() => setOpen(false)} aria-label="Close font preview">×</button></div>
        <label htmlFor="font-preview-select">Display font</label>
        <select id="font-preview-select" value={selected} onChange={(event) => previewFont(event.target.value)}>
          {fontOptions.map((font) => <option key={font.label} value={font.value}>{font.label}</option>)}
        </select>
        <p style={{ fontFamily: selected }}>Where confidence rises.</p>
        <button className="font-preview-reset" type="button" onClick={resetFont}>Reset to original</button>
        <small>Saved only in this browser.</small>
      </div>
    </aside>
  );
}