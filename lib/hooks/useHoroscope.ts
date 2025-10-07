import { useState, useCallback } from 'react';
import { BirthData, HoroscopeData } from '@/lib/types';

export interface UseHoroscopeReturn {
  horoscopeData: HoroscopeData | null;
  isLoading: boolean;
  error: string | null;
  fetchHoroscope: (birthData: BirthData) => Promise<{ success: boolean; data?: HoroscopeData; error?: string }>;
  clearData: () => void;
}

export function useHoroscope(): UseHoroscopeReturn {
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHoroscope = useCallback(async (birthData: BirthData) => {
    // MOCK: generate simple deterministic data based on inputs
    setIsLoading(true);
    setError(null);
    try {
      const seed = (birthData.year + birthData.month + birthData.day + birthData.hour + birthData.minute + Math.round(birthData.latitude + birthData.longitude)) % 12;
      const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
      const planets = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Rahu','Ketu'];
      const mockPlanets = planets.map((p, idx) => ({
        name: p,
        sign: signs[(seed + idx) % 12],
        degree: ((seed * 13 + idx * 7) % 30) + 0.12,
        house: ((idx + seed) % 12) + 1,
        isRetrograde: (idx + seed) % 5 === 0,
        nakshatra: 'Random',
        nakshatraLord: 'Mock',
        pada: ((idx + seed) % 4) + 1,
      }));
      const mockHouses = Array.from({ length: 12 }).map((_, i) => ({
        sign: signs[(seed + i) % 12],
        longitude: ((i * 30 + seed) % 360),
      }));
      const mockAspects = mockPlanets.slice(0, 12).map((_, i) => ({
        planet1: mockPlanets[i % mockPlanets.length].name,
        planet2: mockPlanets[(i + 3) % mockPlanets.length].name,
        type: ['Conjunction','Opposition','Trine','Square','Sextile'][i % 5],
        angle: ((i * 13 + seed) % 180) + 0.12,
        orb: ((i * 3 + seed) % 10) + 0.01,
      }));
      const data: HoroscopeData = { planets: mockPlanets as any, houses: mockHouses, aspects: mockAspects };
      setHoroscopeData(data);
      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearData = useCallback(() => {
    setHoroscopeData(null);
    setError(null);
  }, []);

  return {
    horoscopeData,
    isLoading,
    error,
    fetchHoroscope,
    clearData
  };
}

