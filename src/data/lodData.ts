import { LODItem } from './types'; 

export const lodData: LODItem[] = [
  {
    id: 100,
    name: 'LOD 100',
    imageUrl: '/images/100.png', 
    description:
      'Nível conceitual. O elemento do modelo é representado graficamente com um símbolo ou outra representação genérica...',
  },
  {
    id: 200,
    name: 'LOD 200',
    imageUrl: '/images/200.png', 
    description:
      'Geometria aproximada. O elemento do modelo é representado graficamente dentro do modelo com quantidades, tamanho, forma, localização e orientação aproximados...',
  },
  {
    id: 300,
    name: 'LOD 300',
    imageUrl: '/images/300.png', 
    description:
      'Geometria precisa. O elemento do modelo é representado graficamente dentro do modelo com quantidade, tamanho, forma, localização e orientação específicos...',
  },
  {
    id: 350,
    name: 'LOD 350',
    imageUrl: '/images/350.png',  
    description:
      'Inclui detalhes de modelagem e gráficos necessários para explicar como os elementos se conectam a sistemas próximos ou adjacentes...',
  },
];