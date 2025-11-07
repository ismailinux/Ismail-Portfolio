import { ArrowDown } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight inline-block">
  <EncryptedText
    text="Hi, I'm"
    className="inline opacity-0 animate-fade-in"
    encryptedClassName="text-neutral-500"
    revealedClassName="text-foreground"
    revealDelayMs={100}
  />
  <EncryptedText
    text=" Ismail"
    className="inline text-primary opacity-0 animate-fade-in-delay-1"
    encryptedClassName="text-neutral-500"
    revealedClassName="text-primary"
    revealDelayMs={100}
  />
  <EncryptedText
    text=" Opaluwa"
    className="inline ml-2 opacity-0 animate-fade-in-delay-2 text-gradient"
    encryptedClassName="text-neutral-500"
    revealedClassName="text-gradient"
    revealDelayMs={100}
  />
</h1>
          {/* Encrypted + Fade-in + Same Style */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            <EncryptedText
              text="I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional."
              encryptedClassName="text-neutral-500"
              revealedClassName="text-muted-foreground"
              revealDelayMs={30}
            />
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};