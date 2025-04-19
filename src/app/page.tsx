import { LODExplorer } from "@/components/LODExplorer"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-gradient-to-b from-background to-muted/30"> {/* Fundo com gradiente suave */}
      <LODExplorer />
    </main>
  );
}