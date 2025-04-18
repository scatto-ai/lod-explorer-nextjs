// src/components/LODDisplay.tsx
// Pode ser um Server Component se não precisar de estado ou efeitos.
// Se usar <Image> do Next.js com 'use client' no pai, este pode continuar Server.
import React from 'react';
import Image from 'next/image'; // Usar Image do Next.js para otimização
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LODItem } from '@/data/lodData';

/**
 * Propriedades para o componente LODDisplay.
 */
interface LODDisplayProps {
  /** O item LOD a ser exibido. Pode ser undefined se nada estiver selecionado. */
  lodItem?: LODItem; // Marcar como opcional para lidar com estado inicial vazio
}

/**
 * Componente responsável por exibir os detalhes (imagem, título, descrição)
 * de um item LOD específico.
 */
export function LODDisplay({ lodItem }: LODDisplayProps) {
  console.log('Rendering LODDisplay for:', lodItem?.name); // Log para depuração

  if (!lodItem) {
    return (
      <Card className="w-full animate-pulse"> {/* Efeito de pulso para estado vazio */}
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/2"></div> {/* Placeholder título */}
          <div className="h-4 bg-muted rounded w-3/4 mt-1"></div> {/* Placeholder descrição */}
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md mb-4"></div> {/* Placeholder imagem */}
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out"> {/* Transição suave */}
      <CardHeader>
        <CardTitle>{lodItem.name}</CardTitle>
        <CardDescription>Visualização e Descrição</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 relative aspect-video bg-muted rounded-md border overflow-hidden">
          <Image
            src={lodItem.imageUrl}
            alt={`Representação visual do ${lodItem.name}`}
            fill // Ocupa todo o espaço do container pai
            style={{ objectFit: 'contain' }} // Garante que a imagem inteira seja visível
            priority={lodItem.id === 100} // Prioriza o carregamento da primeira imagem
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajuda na otimização
            quality={75} // Qualidade da imagem
          />
        </div>
        <p className="text-sm text-muted-foreground">{lodItem.description}</p>
      </CardContent>
    </Card>
  );
}