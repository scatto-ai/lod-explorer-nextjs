// src/components/LODSelector.tsx
'use client'; // Precisa ser Client Component para interagir com onClick

import React from 'react';
import { Button } from '@/components/ui/button';
import { LODItem } from '@/data/lodData'; // Importa o tipo

/**
 * Propriedades para o componente LODSelector.
 */
interface LODSelectorProps {
  /** Lista de itens LOD disponíveis para seleção. */
  availableLODs: LODItem[];
  /** O ID do item LOD atualmente selecionado. */
  selectedLODId: number;
  /** Função callback chamada quando um item LOD é selecionado. */
  onSelectLOD: (lod: LODItem) => void;
}

/**
 * Componente responsável por renderizar os botões de seleção de LOD
 * e notificar o componente pai sobre a seleção.
 */
export function LODSelector({
  availableLODs,
  selectedLODId,
  onSelectLOD,
}: LODSelectorProps) {
  console.log('Rendering LODSelector'); // Log para depuração (remover em produção)

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6"> {/* Gap para espaçamento responsivo */}
      {availableLODs.map((lod) => (
        <Button
          key={lod.id}
          variant={selectedLODId === lod.id ? 'default' : 'outline'}
          size="sm" // Tamanho menor para os botões
          onClick={() => onSelectLOD(lod)}
          aria-pressed={selectedLODId === lod.id} // Melhor acessibilidade
          aria-label={`Selecionar ${lod.name}`} // Melhor acessibilidade
        >
          {lod.name}
        </Button>
      ))}
    </div>
  );
}