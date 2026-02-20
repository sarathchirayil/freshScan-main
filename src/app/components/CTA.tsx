import { ArrowRight, Apple, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl text-white">
            Ready to Transform Your Grocery Experience?
          </h2>
          <p className="text-xl text-emerald-50">
            Start saving money and reducing food waste today. No credit card
            required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-emerald-50 px-8"
            >
              <Apple className="mr-2 size-5" />
              Download for iOS
            </Button>
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-emerald-50 px-8"
            >
              <Smartphone className="mr-2 size-5" />
              Download for Android
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-emerald-50">
            <div className="flex items-center gap-2">
              <ArrowRight className="size-5" />
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="size-5" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="size-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
