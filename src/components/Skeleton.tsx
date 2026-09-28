import React from 'react';

/**
 * Reusable Skeleton Placeholder component with shimmer animation.
 */
const SkeletonBar = ({ className = "", ...props }: { className?: string } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`relative overflow-hidden bg-skeleton-base rounded-lg ${className}`} {...props} aria-hidden="true">
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-skeleton-shimmer to-transparent" />
  </div>
);

/**
 * Skeleton Card mimicking the layout of a project/experience card.
 */
const SkeletonCard = () => (
  <div className="bg-brand-card p-10 rounded-[2.5rem] border border-brand-border shadow-sm space-y-6">
    {/* Year/Title */}
    <SkeletonBar className="w-24 h-4 mb-4" />
    <SkeletonBar className="w-3/4 h-8" />
    <SkeletonBar className="w-1/2 h-4" />
    
    {/* Image placeholder */}
    <SkeletonBar className="w-full aspect-video rounded-3xl" />
    
    {/* Description lines */}
    <div className="space-y-3">
      <SkeletonBar className="w-full h-4" />
      <SkeletonBar className="w-full h-4" />
      <SkeletonBar className="w-4/5 h-4" />
    </div>
    
    {/* Tags/Skills */}
    <div className="flex gap-2">
      <SkeletonBar className="w-16 h-8 rounded-xl" />
      <SkeletonBar className="w-20 h-8 rounded-xl" />
      <SkeletonBar className="w-14 h-8 rounded-xl" />
    </div>
  </div>
);

/**
 * Main Skeleton Screen component that mimics the full application layout.
 */
export default function SkeletonScreen() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col lg:flex-row overflow-hidden" aria-hidden="true">
      {/* Mobile Navbar Skeleton */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-brand-card border-b border-brand-border h-[57px] px-4 flex justify-between items-center z-50 skeleton-sidebar-base">
        <SkeletonBar className="w-32 h-6" />
        <div className="flex gap-3">
          <SkeletonBar className="w-16 h-8 rounded-full" />
          <SkeletonBar className="w-12 h-10 rounded-lg" />
        </div>
      </header>

      {/* Sidebar Skeleton (Desktop) */}
      <aside className="hidden lg:flex flex-col w-80 bg-brand-card border-brand-border fixed h-screen p-10 space-y-12 skeleton-sidebar-base left-0 border-r border-l-0">
        <div className="space-y-4">
          <SkeletonBar className="w-48 h-10" />
          <SkeletonBar className="w-32 h-4" />
        </div>

        <nav className="flex flex-col gap-4 flex-grow">
          {[1, 2, 3].map((i) => (
            <SkeletonBar key={i} className="w-full h-14 rounded-2xl" />
          ))}
        </nav>

        <div className="space-y-8 pt-10 border-t border-brand-border">
          <div className="flex justify-between items-center px-2">
            <SkeletonBar className="w-16 h-4" />
            <SkeletonBar className="w-16 h-8 rounded-full" />
          </div>
          <SkeletonBar className="w-1/2 h-3" />
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-grow p-6 lg:p-16 pt-28 lg:pt-16 lg:ml-80 lg:mr-0">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section Skeleton */}
          <div className="space-y-8">
            <SkeletonBar className="w-32 h-6 rounded-full" />
            <SkeletonBar className="w-3/4 h-20 md:h-24 lg:h-32" />
            <div className="flex gap-6">
              <SkeletonBar className="w-40 h-5" />
              <SkeletonBar className="w-32 h-5" />
            </div>
            <div className="space-y-4">
              <SkeletonBar className="w-full h-6" />
              <SkeletonBar className="w-full h-6" />
              <SkeletonBar className="w-2/3 h-6" />
            </div>
          </div>

          {/* Cards Section Skeleton */}
          <div className="space-y-12">
            <div className="space-y-4">
              <SkeletonBar className="w-32 h-6 rounded-full" />
              <SkeletonBar className="w-64 h-12" />
            </div>
            
            <div className="space-y-8">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </div>

          {/* Footer Skeleton */}
          <footer className="mt-32 pt-10 border-t border-brand-border space-y-8 flex flex-col items-center">
            <div className="flex gap-6">
              <SkeletonBar className="w-48 h-6" />
              <SkeletonBar className="w-32 h-10 rounded-xl" />
            </div>
            <SkeletonBar className="w-64 h-3" />
          </footer>
        </div>
      </main>
    </div>
  );
}
