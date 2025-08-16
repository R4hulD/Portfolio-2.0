import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    //frontend
    {name: "HTML/CSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},
    {name: "Reactjs", category: "frontend"},
    {name: "Angular", category: "frontend"},

    //backend
    {name: "SQL", category: "backend"},
    {name: "Java", category: "backend"},
    {name: "Postgres", category: "backend"},
    {name: "Springboot", category: "backend"},

    //languages
    {name: "C++/C", category: "languages"},
    {name: "Python", category: "languages"},
    {name: "Java", category: "languages"},
    {name: "Js", category: "languages"},

    //cloud
    {name: "GCP", category: "cloud"}
]

const categories = ["all", "frontend", "backend", "languages", "cloud"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
            My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div>
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
    );
};