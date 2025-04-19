'use client'; 

import React, { useState, useCallback, useMemo } from 'react';
import { LODSelector } from './LODSelector';
import { LODDisplay } from './LODDisplay';
import { lodData, LODItem } from '@/data/lodData'; 

/**
 * Componente principal que orquestra a seleção e exibição dos níveis de LOD.
 * Gerencia o estado do LOD selecionado.
 */
export function LODExplorer() {
  console.log('Rendering LODExplorer'); // Log para depuração

  // Estado para armazenar o *ID* do LOD selecionado. Null se nenhum selecionado inicialmente.
  // Poderia começar com lodData[0].id, mas vamos mostrar o estado inicial vazio.
  const [selectedLODId, setSelectedLODId] = useState<number | null>(lodData[0]?.id ?? null);

  // Função memoizada para atualizar o ID do LOD selecionado.
  const handleSelectLOD = useCallback((lod: LODItem) => {
    console.log('LOD Selected:', lod.name); // Log para depuração
    setSelectedLODId(lod.id);
  }, []); // useCallback sem dependências aqui, pois a função não depende de props ou estado externo

  // Encontra o objeto LOD completo correspondente ao ID selecionado.
  // useMemo evita recalcular isso a cada renderização, a menos que selectedLODId mude.
  const selectedLODItem = useMemo(() => {
    return lodData.find((lod) => lod.id === selectedLODId);
  }, [selectedLODId]); // Dependência: recalcular apenas se selectedLODId mudar

  return (
    // Container principal com largura máxima e centralizado
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary"> {/* Título H1 */}
        Explorador Interativo de LOD BIM
      </h1>

      {/* Componente para selecionar o LOD */}
      <LODSelector
        availableLODs={lodData}
        selectedLODId={selectedLODId ?? -1} // Passa -1 se null para evitar erro de tipo, ou lida no seletor
        onSelectLOD={handleSelectLOD}
      />

      {/* Componente para exibir os detalhes do LOD selecionado */}
      <LODDisplay lodItem={selectedLODItem} />

    </div>
  );
}
