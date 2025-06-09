import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Prof. Nancy Garcia",
      role: "Professora Universitária e Pesquisadora",
      organization: "Unicamp",
      bio: "Expert in big data analytics and statistical learning with over 15 years of experience in both academia and industry.",
      topic: "The Future of Statistical Analysis in Big Data Era",
      image: "/nancy.jpg?height=300&width=300",
      tags: ["Big Data", "Machine Learning"],
    },
    {
      name: "Prof. Robert Johnson",
      role: "Research Director",
      organization: "Medical Research Institute",
      bio: "Leading researcher in biostatistics with focus on clinical trials methodology and survival analysis.",
      topic: "Statistical Methods in Clinical Trials",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Biostatistics", "Clinical Trials"],
    },
    {
      name: "Dr. Michael Wong",
      role: "AI Research Lead",
      organization: "TechGiant",
      bio: "Pioneer in developing statistical approaches for machine learning models and AI systems.",
      topic: "The Intersection of Statistics and Machine Learning",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["AI", "Machine Learning"],
    },
    {
      name: "Prof. Sarah Martinez",
      role: "Director",
      organization: "Environmental Statistics Institute",
      bio: "Specializes in statistical methods for climate data analysis and environmental modeling.",
      topic: "Statistical Challenges in Climate Science",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Climate Science", "Environmental Statistics"],
    },
    {
      name: "Prof. David Lee",
      role: "Department Chair",
      organization: "University Statistics Department",
      bio: "Renowned educator and researcher focused on innovative approaches to statistical education.",
      topic: "The Future of Statistical Education",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Education", "Pedagogy"],
    },
    {
      name: "Dr. Lisa Rodriguez",
      role: "Lead Statistician",
      organization: "National Research Laboratory",
      bio: "Expert in experimental design and analysis for complex scientific experiments.",
      topic: "Advanced Experimental Design in Modern Science",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Experimental Design", "Research Methods"],
    },
  ]

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {speakers.map((speaker, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="aspect-square relative">
            <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle>{speaker.name}</CardTitle>
            <CardDescription>
              {speaker.role} na {speaker.organization}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-wrap gap-2">
              {speaker.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h4 className="font-semibold text-primary mb-2">Topic:</h4>
            <p className="mb-4">{speaker.topic}</p>
            <p className="text-sm text-muted-foreground">{speaker.bio}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full gap-2">
              <ExternalLink className="h-4 w-4" /> View Full Profile
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
