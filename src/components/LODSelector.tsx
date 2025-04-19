// src/components/LODSelector.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
// import { LODItem } from '@/data/lodData'; // <-- LINHA ANTIGA/INCORRETA
import { LODItem } from '@/data/types';   // <-- LINHA NOVA/CORRETA

interface LODSelectorProps {
  availableLODs: LODItem[]; // Usa o tipo importado de types.ts
  selectedLODId: number;
  onSelectLOD: (lod: LODItem) => void;
}

export function LODSelector({
  availableLODs,
  selectedLODId,
  onSelectLOD,
}: LODSelectorProps) {
  // ... resto do componente
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {availableLODs.map((lod) => (
        <Button
          key={lod.id}
          variant={selectedLODId === lod.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelectLOD(lod)}
          aria-pressed={selectedLODId === lod.id}
          aria-label={`Selecionar ${lod.name}`}
        >
          {lod.name}
        </Button>
      ))}
    </div>
  );
}