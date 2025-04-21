import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LODItem } from '@/data/types';



interface LODDisplayProps {
  lodItem?: LODItem; 
}

export function LODDisplay({ lodItem }: LODDisplayProps) {

   return (
     <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out">
       <CardHeader>
         <CardTitle>{lodItem.name}</CardTitle>
         <CardDescription>Visualização e Descrição</CardDescription>
       </CardHeader>
       <CardContent>
         <div className="mb-4 relative aspect-video bg-muted rounded-md border overflow-hidden">
           <Image
             src={lodItem.imageUrl}
             alt={`Representação visual do ${lodItem.name}`}
             fill
             style={{ objectFit: 'contain' }}
             priority={lodItem.id === 100}
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             quality={75}
           />
         </div>
         <p className="text-sm text-muted-foreground">{lodItem.description}</p>
       </CardContent>
     </Card>
   );

