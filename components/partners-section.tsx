import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PartnersSection() {
  const partners = [
    {
      name: "DataTech",
      type: "Parceria Ouro",
      description: "Leading provider of data analytics solutions and statistical software.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://datatech-example.com",
    },
    {
      name: "StatSoft",
      type: "Parceria Ouro",
      description: "Developer of advanced statistical analysis software used in research and industry.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://statsoft-example.com",
    },
    {
      name: "QuantCorp",
      type: "Parceria Prata",
      description: "Specializing in quantitative research and statistical consulting services.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://quantcorp-example.com",
    },
    {
      name: "BioStat",
      type: "Parceria Prata",
      description: "Provider of biostatistical services for pharmaceutical and healthcare industries.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://biostat-example.com",
    },
    {
      name: "DataViz",
      type: "Parceria Bronze",
      description: "Specializing in data visualization tools and services.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://dataviz-example.com",
    },
    {
      name: "AI Analytics",
      type: "Parceria Bronze",
      description: "Combining AI and statistical methods for advanced analytics solutions.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://aianalytics-example.com",
    },
    {
      name: "National Statistics Association",
      type: "Apoio",
      description: "Professional organization promoting the practice and profession of statistics.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://nsa-example.org",
    },
    {
      name: "Global Data Science Institute",
      type: "Apoio",
      description: "Research institute dedicated to advancing data science and statistical methods.",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://gdsi-example.org",
    },
  ]

  // Group partners by type
  const groupedPartners = partners.reduce(
    (acc, partner) => {
      if (!acc[partner.type]) {
        acc[partner.type] = []
      }
      acc[partner.type].push(partner)
      return acc
    },
    {} as Record<string, typeof partners>,
  )

  return (
    <div className="mt-8 space-y-10">
      {Object.entries(groupedPartners).map(([type, partners]) => (
        <div key={type} className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Badge
              variant={
                type.includes("Gold")
                  ? "default"
                  : type.includes("Silver")
                    ? "secondary"
                    : type.includes("Bronze")
                      ? "outline"
                      : "default"
              }
            >
              {type}
            </Badge>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6 flex items-center justify-center h-40 bg-muted/50">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="text-sm">{partner.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
