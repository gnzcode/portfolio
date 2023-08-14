import Home from "package/components/home";
import About from "package/components/about";
import Projects from "package/components/projects";
import Skills from "package/components/skills";

export default function Index() {
  return (
    <main className="main">
      <Home />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
