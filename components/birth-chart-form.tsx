"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { BirthData } from '@/lib/api/vedic-astro';

interface BirthChartFormProps {
  onSubmit: (birthData: BirthData) => void;
  isLoading?: boolean;
}

export function BirthChartForm({ onSubmit, isLoading = false }: BirthChartFormProps) {
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    timeOfBirth: '',
    latitude: '',
    longitude: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const year = birthDate.getFullYear();
      const today = new Date();
      
      if (year < 1900 || year > today.getFullYear()) {
        newErrors.dateOfBirth = 'Please enter a valid year between 1900 and ' + today.getFullYear();
      }
      if (birthDate > today) {
        newErrors.dateOfBirth = 'Birth date cannot be in the future';
      }
    }

    if (!formData.timeOfBirth) {
      newErrors.timeOfBirth = 'Time of birth is required';
    }

    if (!formData.latitude || isNaN(Number(formData.latitude))) {
      newErrors.latitude = 'Valid latitude is required';
    } else {
      const lat = Number(formData.latitude);
      if (lat < -90 || lat > 90) {
        newErrors.latitude = 'Latitude must be between -90 and 90';
      }
    }

    if (!formData.longitude || isNaN(Number(formData.longitude))) {
      newErrors.longitude = 'Valid longitude is required';
    } else {
      const lng = Number(formData.longitude);
      if (lng < -180 || lng > 180) {
        newErrors.longitude = 'Longitude must be between -180 and 180';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const birthData: BirthData = {
      year: new Date(formData.dateOfBirth).getFullYear(),
      month: new Date(formData.dateOfBirth).getMonth() + 1,
      day: new Date(formData.dateOfBirth).getDate(),
      hour: parseInt(formData.timeOfBirth.split(':')[0]),
      minute: parseInt(formData.timeOfBirth.split(':')[1]),
      second: parseInt(formData.timeOfBirth.split(':')[2]) || 0,
      utc: 'Asia/Kolkata', // Fixed timezone for Indian Vedic Astrology
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      ayanamsa: 'Lahiri',
      house_system: 'Equal',
      return_style: 'json'
    };

    onSubmit(birthData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span>Birth Chart Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className={errors.dateOfBirth ? 'border-red-500' : ''}
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeOfBirth">Time of Birth *</Label>
              <Input
                id="timeOfBirth"
                type="time"
                value={formData.timeOfBirth}
                onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
                className={errors.timeOfBirth ? 'border-red-500' : ''}
              />
              {errors.timeOfBirth && (
                <p className="text-sm text-red-500">{errors.timeOfBirth}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="latitude">Latitude *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="latitude"
                  type="number"
                  step="0.000001"
                  placeholder="e.g., 28.6139"
                  value={formData.latitude}
                  onChange={(e) => handleInputChange('latitude', e.target.value)}
                  className={`pl-10 ${errors.latitude ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.latitude && (
                <p className="text-sm text-red-500">{errors.latitude}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Enter latitude in decimal format (e.g., 28.6139 for New Delhi)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="longitude">Longitude *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="longitude"
                  type="number"
                  step="0.000001"
                  placeholder="e.g., 77.2090"
                  value={formData.longitude}
                  onChange={(e) => handleInputChange('longitude', e.target.value)}
                  className={`pl-10 ${errors.longitude ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.longitude && (
                <p className="text-sm text-red-500">{errors.longitude}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Enter longitude in decimal format (e.g., 77.2090 for New Delhi)
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Timezone</Label>
            <div className="p-3 bg-muted/30 rounded-md border">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Asia/Kolkata (Indian Standard Time)</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Fixed timezone for Indian Vedic Astrology calculations
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData({
                  dateOfBirth: '',
                  timeOfBirth: '',
                  latitude: '',
                  longitude: ''
                });
                setErrors({});
              }}
            >
              Clear
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Generating Chart...
                </>
              ) : (
                'Generate Birth Chart'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

