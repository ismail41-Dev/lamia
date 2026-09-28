import { useState, useEffect } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

interface TimeApiResponse {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

/**
 * Hook to provide the current server/world year.
 * Fetches from TimeAPI (UTC) with a date-fns-tz UTC fallback.
 */
export function useServerTime() {
  // Initial fallback using date-fns-tz to get accurate UTC year immediately
  const getFallbackYear = () => {
    try {
      return parseInt(formatInTimeZone(new Date(), 'UTC', 'yyyy'));
    } catch (e) {
      return new Date().getFullYear();
    }
  };

  const [year, setYear] = useState<number>(getFallbackYear());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchTime() {
      try {
        const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=UTC', {
          signal: AbortSignal.timeout(3000)
        });

        if (!response.ok) throw new Error('TimeAPI response was not ok');
        
        const data: TimeApiResponse = await response.json();
        if (isMounted && data.year) {
          setYear(data.year);
        }
      } catch (error) {
        console.warn('Failed to fetch server time, using date-fns-tz UTC fallback:', error);
        if (isMounted) {
          setYear(getFallbackYear());
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchTime();

    return () => {
      isMounted = false;
    };
  }, []);

  return { year, isLoading };
}
