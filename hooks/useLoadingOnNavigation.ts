'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/components/LoadingContext';

export const useLoadingOnNavigation = () => {
  const pathname = usePathname();
  const { showLoadingScreen } = useLoading();

  useEffect(() => {
    // Show loading screen on route change
    showLoadingScreen();
  }, [pathname, showLoadingScreen]);
}; 