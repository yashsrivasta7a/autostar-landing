import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent glow-text">
          Automate Feedback Forms in One Click
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          AutoStar automatically fills feedback forms on college sites using iCloud EMS, saving you time and
          ensuring consistent feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-medium btn-glow"
            asChild
          >
            <Link href="https://chromewebstore.google.com/detail/auto-star/plbiedpiaeongaonmooflnbjigckoppa" target="_blank">
              <span className="flex items-center gap-2">
                Add to Chrome
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100 btn-glow"
            asChild
          >
            <Link href="#features">See Features</Link>
          </Button>
        </div>

        <section id="how-it-works">
        <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 glow-border float-animation">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-700/20 opacity-30"></div>
          <video
            src="/Tutorial.mp4"
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        </section>
      </div>
    </section>
  );
}