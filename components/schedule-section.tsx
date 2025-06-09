import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

export default function ScheduleSection() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="day1">Segunda</TabsTrigger>
          <TabsTrigger value="day2">Terça</TabsTrigger>
          <TabsTrigger value="day3">Quarta</TabsTrigger>
          <TabsTrigger value="day4">Quinta</TabsTrigger>
          <TabsTrigger value="day5">Sexta</TabsTrigger>
        </TabsList>
        <TabsContent value="day1" className="mt-6">
          <h3 className="text-xl font-bold mb-4">Segunda, XX de Outubro - Abertura</h3>
          <div className="grid gap-4">
            {[
              {
                time: "09:00 - 10:00",
                title: "Registration & Welcome Coffee",
                location: "Main Hall",
                description: "Pick up your badge and enjoy a welcome coffee with fellow attendees",
              },
              {
                time: "10:00 - 11:30",
                title: "Opening Ceremony",
                location: "Main Auditorium",
                description: "Official opening of the Academic Week of Statistics with keynote address",
              },
              {
                time: "11:45 - 13:00",
                title: "Keynote: The Future of Statistical Analysis in Big Data Era",
                location: "Main Auditorium",
                description: "Dr. Emily Chen, Chief Data Scientist at DataTech",
              },
              {
                time: "13:00 - 14:30",
                title: "Lunch Break & Networking",
                location: "Dining Hall",
                description: "Buffet lunch and networking opportunity",
              },
              {
                time: "14:30 - 16:00",
                title: "Workshop: Introduction to R for Statistical Analysis",
                location: "Computer Lab A",
                description: "Hands-on workshop for beginners and intermediate users",
              },
              {
                time: "16:15 - 17:30",
                title: "Panel Discussion: Statistics in Public Policy",
                location: "Conference Room B",
                description: "Experts discuss the role of statistics in shaping public policy",
              },
              {
                time: "18:00 - 20:00",
                title: "Welcome Reception",
                location: "University Garden",
                description: "Drinks and appetizers with faculty and industry partners",
              },
            ].map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {event.time}
                    <span className="mx-2">|</span>
                    <MapPin className="h-4 w-4" /> {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="day2" className="mt-6">
          <h3 className="text-xl font-bold mb-4">Terça, XX de Outubro - Estatística Aplicada</h3>
          <div className="grid gap-4">
            {[
              {
                time: "09:00 - 10:30",
                title: "Keynote: Statistical Methods in Clinical Trials",
                location: "Main Auditorium",
                description: "Prof. Robert Johnson, Medical Research Institute",
              },
              {
                time: "10:45 - 12:15",
                title: "Workshop: Bayesian Statistics in Practice",
                location: "Workshop Room C",
                description: "Advanced techniques for applying Bayesian methods",
              },
              {
                time: "12:15 - 13:45",
                title: "Lunch Break",
                location: "Dining Hall",
                description: "Buffet lunch",
              },
              {
                time: "13:45 - 15:15",
                title: "Parallel Sessions: Statistical Applications in Various Fields",
                location: "Multiple Rooms",
                description: "Choose from sessions on economics, biology, psychology, or engineering",
              },
              {
                time: "15:30 - 17:00",
                title: "Industry Showcase: Statistics in Action",
                location: "Exhibition Hall",
                description: "Companies demonstrate real-world applications of statistical methods",
              },
              {
                time: "17:15 - 18:30",
                title: "Student Research Poster Session",
                location: "Main Hall",
                description: "Undergraduate and graduate students present their research",
              },
            ].map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {event.time}
                    <span className="mx-2">|</span>
                    <MapPin className="h-4 w-4" /> {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="day3" className="mt-6">
          <h3 className="text-xl font-bold mb-4">Quarta, XX de Outubro - Ciência De Dados</h3>
          <div className="grid gap-4">
            {[
              {
                time: "09:00 - 10:30",
                title: "Keynote: The Intersection of Statistics and Machine Learning",
                location: "Main Auditorium",
                description: "Dr. Michael Wong, AI Research Lead at TechGiant",
              },
              {
                time: "10:45 - 12:15",
                title: "Workshop: Python for Statistical Analysis",
                location: "Computer Lab B",
                description: "Hands-on session with pandas, numpy, and scikit-learn",
              },
              {
                time: "12:15 - 13:45",
                title: "Lunch Break & Career Fair",
                location: "Main Hall",
                description: "Meet with potential employers while enjoying lunch",
              },
              {
                time: "13:45 - 15:15",
                title: "Panel: Ethics in Data Science and Statistics",
                location: "Conference Room A",
                description: "Discussing ethical considerations in the age of big data",
              },
              {
                time: "15:30 - 17:00",
                title: "Hackathon Kickoff: Statistical Challenges",
                location: "Computer Labs",
                description: "24-hour hackathon begins with team formation and problem statements",
              },
              {
                time: "17:15 - 18:30",
                title: "Networking Mixer with Industry Partners",
                location: "Faculty Lounge",
                description: "Casual networking event with refreshments",
              },
            ].map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {event.time}
                    <span className="mx-2">|</span>
                    <MapPin className="h-4 w-4" /> {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="day4" className="mt-6">
          <h3 className="text-xl font-bold mb-4">Quinta, XX de Outubro - Pesquisa</h3>
          <div className="grid gap-4">
            {[
              {
                time: "09:00 - 10:30",
                title: "Research Symposium: Cutting-edge Statistical Methods",
                location: "Multiple Rooms",
                description: "Parallel sessions featuring research presentations",
              },
              {
                time: "10:45 - 12:15",
                title: "Workshop: Advanced Visualization Techniques",
                location: "Computer Lab C",
                description: "Creating effective data visualizations for complex datasets",
              },
              {
                time: "12:15 - 13:45",
                title: "Lunch Break",
                location: "Dining Hall",
                description: "Buffet lunch",
              },
              {
                time: "13:45 - 15:15",
                title: "Keynote: Statistical Challenges in Climate Science",
                location: "Main Auditorium",
                description: "Prof. Sarah Martinez, Environmental Statistics Institute",
              },
              {
                time: "15:30 - 17:00",
                title: "Hackathon Continues",
                location: "Computer Labs",
                description: "Ongoing work on statistical challenges",
              },
              {
                time: "17:15 - 18:30",
                title: "Alumni Panel: Careers in Statistics",
                location: "Conference Room B",
                description: "Former students discuss their career paths and offer advice",
              },
            ].map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {event.time}
                    <span className="mx-2">|</span>
                    <MapPin className="h-4 w-4" /> {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="day5" className="mt-6">
          <h3 className="text-xl font-bold mb-4">Sexta, XX de Outubro - Encerramento</h3>
          <div className="grid gap-4">
            {[
              {
                time: "09:00 - 10:30",
                title: "Hackathon Presentations",
                location: "Main Auditorium",
                description: "Teams present their solutions to the statistical challenges",
              },
              {
                time: "10:45 - 12:15",
                title: "Keynote: The Future of Statistical Education",
                location: "Main Auditorium",
                description: "Prof. David Lee, Chair of Statistics Department",
              },
              {
                time: "12:15 - 13:45",
                title: "Lunch Break",
                location: "Dining Hall",
                description: "Buffet lunch",
              },
              {
                time: "13:45 - 15:15",
                title: "Awards Ceremony",
                location: "Main Auditorium",
                description: "Recognition of hackathon winners, best posters, and other achievements",
              },
              {
                time: "15:30 - 16:30",
                title: "Closing Panel: Reflections and Future Directions",
                location: "Main Auditorium",
                description: "Distinguished guests discuss the week's highlights and future trends",
              },
              {
                time: "16:30 - 18:00",
                title: "Farewell Reception",
                location: "University Garden",
                description: "Closing celebration with refreshments",
              },
            ].map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {event.time}
                    <span className="mx-2">|</span>
                    <MapPin className="h-4 w-4" /> {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
