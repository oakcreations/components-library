import { Timeline, type TimelineItem } from "@/components/timeline"
import { Tooltip, TooltipTrigger, CustomTooltipContent, TooltipProvider } from "@/components/custom-tooltip"
import { FileText, Building, DollarSign, Users, Send, Info } from "lucide-react"

const timelineData: TimelineItem[] = [
  {
    title: "Termos e condições",
    subtitle: "Tenha acesso as nossas diretrizes",
    icon: <FileText className="h-5 w-5" />,
    color: "blue",
  },
  {
    title: "Informações básicas",
    subtitle: "Verifique os dados da empresa",
    icon: <Building className="h-5 w-5" />,
    color: "blue",
  },
  {
    title: "Dados financeiros",
    subtitle: "Informações sobre faturamento",
    icon: <DollarSign className="h-5 w-5" />,
    color: "blue",
  },
  {
    title: "Quadro societário",
    subtitle: "Confira todas as pessoas sócias",
    icon: <Users className="h-5 w-5" />,
    color: "blue",
  },
  {
    title: "Envio de documentos",
    subtitle: "Chegamos ao final",
    icon: <Send className="h-5 w-5" />,
    color: "blue",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-4 min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Processo de Cadastro</h1>

        <Timeline items={timelineData} />

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Exemplos de Tooltip</h2>
          <p className="text-center text-gray-600 mb-6">Clique nos botões para ver os tooltips</p>

          <TooltipProvider>
            <div className="flex flex-wrap gap-8 justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Info className="h-4 w-4" />
                    Cadastros (Bottom)
                  </button>
                </TooltipTrigger>
                <CustomTooltipContent
                  direction="bottom"
                  titleTop="Cadastros finalizados"
                  titleMid="200"
                  titleFooter="08:00"
                  midColor="#22c55e"
                />
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <Info className="h-4 w-4" />
                    Vendas (Top)
                  </button>
                </TooltipTrigger>
                <CustomTooltipContent
                  direction="top"
                  titleTop="Vendas realizadas"
                  titleMid="150"
                  titleFooter="Hoje"
                  midColor="#3b82f6"
                />
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    <Info className="h-4 w-4" />
                    Usuários (Left)
                  </button>
                </TooltipTrigger>
                <CustomTooltipContent
                  direction="left"
                  titleTop="Usuários ativos"
                  titleMid="1.2K"
                  titleFooter="Online agora"
                  midColor="#f59e0b"
                />
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    <Info className="h-4 w-4" />
                    Alertas (Right)
                  </button>
                </TooltipTrigger>
                <CustomTooltipContent
                  direction="right"
                  titleTop="Alertas pendentes"
                  titleMid="5"
                  titleFooter="Requer atenção"
                  midColor="#ef4444"
                />
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </main>
  )
}
