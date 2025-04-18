// src/data/lodData.ts

/**
 * Interface que define a estrutura de um item de Nível de Desenvolvimento (LOD).
 */
export interface LODItem {
    /** Identificador único numérico para o nível LOD (ex: 100, 200). */
    id: number;
    /** Nome legível para exibição (ex: "LOD 100"). */
    name: string;
    /** URL da imagem representativa para este nível LOD. */
    imageUrl: string;
    /** Descrição textual explicando o que este nível LOD representa. */
    description: string;
  }
  
  /**
   * Array contendo os dados para cada nível de desenvolvimento (LOD) a ser exibido.
   */
  export const lodData: LODItem[] = [
    {
      id: 100,
      name: 'LOD 100',
      imageUrl: 'https://via.placeholder.com/400x200/cccccc/808080?text=LOD+100+Concept',
      description:
        'Nível conceitual. O elemento do modelo é representado graficamente com um símbolo ou outra representação genérica. Informações como custo por metro quadrado, tonelagem de HVAC por metro quadrado, etc., podem ser anexadas.',
    },
    {
      id: 200,
      name: 'LOD 200',
      imageUrl: 'https://via.placeholder.com/400x200/a3a3a3/ffffff?text=LOD+200+Approximate',
      description:
        'Geometria aproximada. O elemento do modelo é representado graficamente dentro do modelo com quantidades, tamanho, forma, localização e orientação aproximados. Informações não gráficas também podem ser anexadas.',
    },
    {
      id: 300,
      name: 'LOD 300',
      imageUrl: 'https://via.placeholder.com/400x200/858585/ffffff?text=LOD+300+Precise',
      description:
        'Geometria precisa. O elemento do modelo é representado graficamente dentro do modelo com quantidade, tamanho, forma, localização e orientação específicos. Informações não gráficas também podem ser anexadas.',
    },
    {
      id: 350,
      name: 'LOD 350',
      imageUrl: 'https://via.placeholder.com/400x200/5c5c5c/ffffff?text=LOD+350+Interfaces',
      description:
        'Inclui detalhes de modelagem e gráficos necessários para explicar como os elementos se conectam a sistemas próximos ou adjacentes. Inclui peças e conexões. Quantidade, tamanho, forma, localização e orientação são definidos.',
    },
  ];