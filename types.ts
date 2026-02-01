import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}