import React from "react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "skeleton";
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  variant = "default",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  if (variant === "skeleton") {
    return (
      <div className={`loading-skeleton rounded-md ${className}`}>
        <div className="h-full w-full"></div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-charcoal/20 border-t-charcoal rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

interface PageLoadingProps {
  message?: string;
}

export const PageLoading: React.FC<PageLoadingProps> = ({
  message = "Loading...",
}) => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loading size="lg" />
        <p className="text-charcoal/60 font-mono text-sm tracking-wide">
          {message}
        </p>
      </div>
    </div>
  );
};

interface ContentSkeletonProps {
  lines?: number;
  className?: string;
}

export const ContentSkeleton: React.FC<ContentSkeletonProps> = ({
  lines = 3,
  className = "",
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`loading-skeleton h-4 rounded ${
            i === lines - 1 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
    </div>
  );
};
