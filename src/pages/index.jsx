import Home from "package/components/home";
import About from "package/components/about";
import Projects from "package/components/projects";
import Skills from "package/components/skills";
import Services from "package/components/services";

export default function Index() {
  return (
    <main className="main">
      <Home />
      <Services />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
