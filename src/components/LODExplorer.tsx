'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { LODSelector } from './LODSelector';
import { LODDisplay } from './LODDisplay';
import { lodData } from '@/data/lodData';           
import { LODItem } from '@/data/types';           

export function LODExplorer() {

    console.log('Rendering LODExplorer');

  const [selectedLODId, setSelectedLODId] = useState<number | null>(lodData[0]?.id ?? null);

  const handleSelectLOD = useCallback((lod: LODItem) => { 
    console.log('LOD Selected:', lod.name);
    setSelectedLODId(lod.id);
  }, []);

  const selectedLODItem = useMemo(() => {
    return lodData.find((lod) => lod.id === selectedLODId);
  }, [selectedLODId]);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Explorador Interativo de LOD BIM
      </h1>
      <LODSelector
        availableLODs={lodData}
        selectedLODId={selectedLODId ?? -1}
        onSelectLODAction={handleSelectLOD}
      />
      <LODDisplay lodItem={selectedLODItem} />
    </div>
  );
}