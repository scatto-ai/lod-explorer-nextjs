'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { LODItem } from '@/data/types';   

interface LODSelectorProps {
  availableLODs: LODItem[];
  selectedLODId: number;
  onSelectLODAction: (lod: LODItem) => void;
}

export function LODSelector({
  availableLODs,
  selectedLODId,
  onSelectLODAction,
}: LODSelectorProps) {

    return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {availableLODs.map((lod) => (
        <Button
          key={lod.id}
          variant={selectedLODId === lod.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelectLODAction(lod)}
          aria-pressed={selectedLODId === lod.id}
          aria-label={`Selecionar ${lod.name}`}
        >
          {lod.name}
        </Button>
      ))}
    </div>
  );
}