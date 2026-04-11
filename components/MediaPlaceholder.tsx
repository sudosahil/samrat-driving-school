import React from "react";

type MediaPlaceholderProps = {
  label: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  showPlayIcon?: boolean;
  className?: string;
};

export default function MediaPlaceholder({
  label,
  aspectRatio = "4/3",
  showPlayIcon = false,
  className = "",
}: MediaPlaceholderProps) {
  const paddingMap = {
    "16/9": "56.25%",
    "4/3": "75%",
    "1/1": "100%",
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-md bg-surface border border-border card-hover ${className}`}
      style={{
        paddingTop: paddingMap[aspectRatio],
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        {showPlayIcon && (
          <div className="flex h-14 w-14 items-center justify-center rounded-md border-2 border-ink/30 bg-white">
            <svg
              className="h-6 w-6 text-ink"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        {!showPlayIcon && (
          <svg
            className="h-8 w-8 text-ink/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
            <path d="M21 15l-5-5L5 21" strokeWidth="1.5" />
          </svg>
        )}
        <span className="text-center text-xs font-body font-medium tracking-wide text-muted uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
