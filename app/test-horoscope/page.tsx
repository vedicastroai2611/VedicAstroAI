"use client";

import React, { useState } from 'react';
import { BirthChartForm } from '@/components/birth-chart-form';
import { HoroscopeDisplay } from '@/components/horoscope-display';
import { useHoroscope } from '@/lib/hooks/useHoroscope';
import { useChartData } from '@/lib/contexts/ChartDataContext';
import { BirthData } from '@/lib/api/vedic-astro';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Database } from 'lucide-react';
import Link from 'next/link';

export default function TestHoroscopePage() {
  const { horoscopeData, isLoading, error, fetchHoroscope, clearData } = useHoroscope();
  const { updateChartData, hasChart, clearChartData } = useChartData();
  const [showForm, setShowForm] = useState(!horoscopeData && !hasChart);

  const handleSubmit = async (birthData: BirthData) => {
    try {
      const result = await fetchHoroscope(birthData);
      if (result && result.success && result.data) {
        console.log('💾 Caching generated chart data');
        updateChartData(result.data, birthData);
      }
      setShowForm(false);
    } catch (error) {
      console.error('Error generating horoscope:', error);
    }
  };

  const handleNewChart = () => {
    clearData();
    clearChartData();
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">VedicAstro API Test</h1>
          </div>
          {(horoscopeData || hasChart) && (
            <div className="flex items-center gap-3">
              <Button onClick={handleNewChart} variant="outline">
                Generate New Chart
              </Button>
              {hasChart && (
                <div className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  Chart cached
                </div>
              )}
            </div>
          )}
        </div>

        {/* API Information */}
        <Card>
          <CardHeader>
            <CardTitle>API Integration Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">VedicAstro API Endpoint:</h3>
              <code className="bg-muted px-2 py-1 rounded text-sm">
                https://vedicastro-84kc.onrender.com/get_all_horoscope_data
              </code>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Method:</h3>
              <code className="bg-muted px-2 py-1 rounded text-sm">POST</code>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Required Parameters:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>year, month, day, hour, minute, second (birth details)</li>
                <li>latitude, longitude (birth location)</li>
                <li>utc: "Asia/Kolkata" (fixed timezone)</li>
                <li>ayanamsa (default: "Lahiri")</li>
                <li>house_system (default: "Equal")</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">API Status:</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">VedicAstro API is now working!</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Birth Chart Form */}
        {showForm && (
          <BirthChartForm 
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}

        {/* Error Display */}
        {error && (
          <Card className="border-red-500/30 bg-red-500/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-red-400 mb-2">Error</h3>
                <p className="text-sm text-muted-foreground mb-4">{error}</p>
                <Button onClick={() => setShowForm(true)} variant="outline">
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Horoscope Display */}
        {horoscopeData && (
          <HoroscopeDisplay 
            data={horoscopeData} 
            isLoading={isLoading} 
          />
        )}

        {/* Loading State */}
        {isLoading && !horoscopeData && (
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <span className="text-muted-foreground">Generating your birth chart...</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

