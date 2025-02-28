import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Article from './container/Article';
import CTA from './container/CTA';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Article />
      <CTA />
    </MainLayout>
  );
}
