import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Random Joke Generator",
        description: "Roll a dice and get a joke, not a bad deal huh?",
        image: "/projects/random-joke-generator.png",
        tags: ["HTML/CSS", "Javascript"],
        demoURL: "https://randjoke.netlify.app/",
        githubURL: "https://github.com/R4hulD/random-joke-generator"
    },
    {
        id: 2,
        title: "Disease Prediction System",
        description: "Predict diseases based on symptoms using machine learning.",
        image: "/projects/disease-prediction-system.png",
        tags: ["Python", "Machine Learning"],
        githubURL: "https://github.com/R4hulD/Disease-Prediction-System"
    },
    // {
    //     id: 3,
    //     title: "First Portfolio",
    //     description: "My first portfolio built with React.",
    //     image: "/projects/first-portfolio.png",
    //     tags: ["React", "Javascript"],
    //     demoURL: "https://r4hul.netlify.app/",
    //     githubURL: "https://github.com/R4hulD/Portfolio"
    // }
        {
        id: 3,
        title: "Speech To Sign Language",
        description: "Presented and published a paper in IEEE",
        image: "/projects/speech-to-sign.png",
        tags: ["Python", "Speech Recognition", "Machine Learning"],
        githubURL: "https://github.com/R4hulD/Speech-2-sign"
    }
]

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A showcase of my work, featuring projects that demonstrate my skills and creativity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                    key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoURL && (
                                            <a 
                                                href={project.demoURL}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        <a 
                                            href={project.githubURL}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                ))}
            </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/R4hulD"
                    >
                        My Github <ArrowRight size={16} />
                    </a>
                </div>
        </div>
    </section>
    )
}