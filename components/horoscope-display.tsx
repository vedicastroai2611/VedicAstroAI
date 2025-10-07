"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { HoroscopeData, PlanetData } from '@/lib/api/vedic-astro';
import { Activity, Clock, Star, Sun, Moon } from 'lucide-react';

interface HoroscopeDisplayProps {
  data: HoroscopeData;
  isLoading?: boolean;
}

function PlanetBadge({ symbol, bg }: { symbol: string; bg: string }) {
  return (
    <div className={`h-8 w-8 ${bg} rounded-full flex items-center justify-center`}>
      <span className="text-sm text-white font-bold">{symbol}</span>
    </div>
  );
}

function getPlanetIcon(planet: string) {
  switch (planet.toLowerCase()) {
    case "sun":
      return <PlanetBadge symbol="☉" bg="bg-orange-500" />;
    case "moon":
      return <PlanetBadge symbol="☽" bg="bg-blue-400" />;
    case "mars":
      return <PlanetBadge symbol="♂" bg="bg-red-500" />;
    case "mercury":
      return <PlanetBadge symbol="☿" bg="bg-emerald-500" />;
    case "jupiter":
      return <PlanetBadge symbol="♃" bg="bg-yellow-500" />;
    case "venus":
      return <PlanetBadge symbol="♀" bg="bg-pink-500" />;
    case "saturn":
      return <PlanetBadge symbol="♄" bg="bg-gray-500" />;
    case "rahu":
      return <PlanetBadge symbol="☊" bg="bg-purple-500/80" />;
    case "ketu":
      return <PlanetBadge symbol="☋" bg="bg-teal-500/80" />;
    default:
      return <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center">
        <span className="text-xs font-bold">{planet.charAt(0)}</span>
      </div>;
  }
}

function PlanetCard({ planet }: { planet: PlanetData }) {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 bg-background/50 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300">
      <div className="flex-shrink-0">
        {getPlanetIcon(planet.name)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{planet.name}</h3>
          {planet.isRetrograde && (
            <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/20">
              Retrograde
            </Badge>
          )}
        </div>
        <div className="mt-1 space-y-1">
          <p className="text-sm text-muted-foreground">
            {planet.sign} {planet.degree.toFixed(2)}°
          </p>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
              House {planet.house}
            </Badge>
            {planet.nakshatra && (
              <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                {planet.nakshatra}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HoroscopeDisplay({ data, isLoading = false }: HoroscopeDisplayProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <span className="text-muted-foreground">Generating your birth chart...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Planetary Positions */}
      <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <span>Planetary Positions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.planets.map((planet, index) => (
              <PlanetCard key={`${planet.name}-${index}`} planet={planet} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      {(data.tithi || data.yoga || data.karan) && (
        <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Lunar Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.tithi && (
                <div className="text-center p-4 rounded-lg border border-primary/20 bg-background/50">
                  <h4 className="font-semibold text-foreground">Tithi</h4>
                  <p className="text-sm text-muted-foreground mt-1">{data.tithi}</p>
                </div>
              )}
              {data.yoga && (
                <div className="text-center p-4 rounded-lg border border-primary/20 bg-background/50">
                  <h4 className="font-semibold text-foreground">Yoga</h4>
                  <p className="text-sm text-muted-foreground mt-1">{data.yoga}</p>
                </div>
              )}
              {data.karan && (
                <div className="text-center p-4 rounded-lg border border-primary/20 bg-background/50">
                  <h4 className="font-semibold text-foreground">Karan</h4>
                  <p className="text-sm text-muted-foreground mt-1">{data.karan}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Astronomical Data and Dasha Periods sections temporarily hidden */}
      {/* These sections are hidden as the API doesn't provide complete data for them */}
      {false && (data.sunrise || data.sunset || data.moonrise || data.moonset) && (
        <div>Astronomical Data Hidden</div>
      )}
      
      {false && data.dasha && data.dasha.length > 0 && (
        <div>Dasha Periods Hidden</div>
      )}
    </div>
  );
}

