// src/components/LODExplorer.tsx
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { LODSelector } from './LODSelector';
import { LODDisplay } from './LODDisplay';
// import { lodData, LODItem } from '@/data/lodData'; // <-- LINHA ANTIGA/INCORRETA
import { lodData } from '@/data/lodData';           // <-- Importa SÓ os dados
import { LODItem } from '@/data/types';            // <-- Importa o TIPO de types.ts

export function LODExplorer() {
 // ... resto do componente
  console.log('Rendering LODExplorer');

  const [selectedLODId, setSelectedLODId] = useState<number | null>(lodData[0]?.id ?? null);

  const handleSelectLOD = useCallback((lod: LODItem) => { // Usa o tipo importado de types.ts
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
        onSelectLOD={handleSelectLOD}
      />
      <LODDisplay lodItem={selectedLODItem} />
    </div>
  );
}