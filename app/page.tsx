import Link from "next/link"
import { Github, Star, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticlesBackground from "@/components/particles-background"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      <ParticlesBackground />

      {/* Content wrapper - above particles */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="border-b border-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-purple-400 glow-text" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent glow-text">
                AutoStar
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 ml-auto">
              <Link href="#features" className="text-sm hover:text-purple-400 transition-colors">
                Features
              </Link>
              <a href="#how-it-works" className="text-sm hover:text-purple-400 transition-colors">
                How It Works
              </a>
            </nav>

            <div className="flex items-center gap-4 ml-auto">
              <Link
                href="https://github.com/yashsrivasta7a/AutoStar_MR"
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">Star on GitHub</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent glow-text">
              Features that Make Feedback Easy
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="bg-purple-500/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">One-Click Automation</h3>
                <p className="text-gray-400">
                  Fill out entire feedback forms with just a single click, saving you valuable time.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="bg-purple-500/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">iCloud EMS Compatible</h3>
                <p className="text-gray-400">
                  Specifically designed to work with college sites that use iCloud EMS as their provider.
                </p>
              </div>

      
              {/* Feature 5 */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="bg-purple-500/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy Focused</h3>
                <p className="text-gray-400">
                  Your data stays on your device. We don't collect or store any of your information.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="bg-purple-500/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightweight</h3>
                <p className="text-gray-400">Minimal resource usage ensures your browser stays fast and responsive.</p>
              </div>
            </div>
          </div>
        </section>

    

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-700/10 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 glow-text">Ready to Save Time on Feedback Forms?</h2>
                <p className="text-gray-400 mb-8">
                  Join thousands of students who are automating their feedback process with AutoStar.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-medium btn-glow"
                  asChild
                >
                  <Link href="https://chrome.google.com/webstore" target="_blank">
                    <span className="flex items-center gap-2">
                      Get AutoStar Now
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 py-10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <a
                href="https://github.com/yashsrivasta7a/AutoStar_MR"
                target="_blank"
                className="flex items-center gap-2 mb-4 md:mb-0"
              >
                <Star className="h-5 w-5 text-purple-400" />
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent glow-text">
                  AutoStar
                </span>
              </a>

              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/yashsrivasta7a/AutoStar_MR"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AutoStar. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
