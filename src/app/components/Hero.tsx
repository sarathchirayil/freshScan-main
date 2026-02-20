import { Camera, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              <Camera className="size-4" />
              <span className="text-sm">Smart Receipt Scanning</span>
            </div>

            <h1 className="text-5xl lg:text-6xl tracking-tight">
              Never Waste Food Again
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Use your mobile camera to scan receipts and track shelf life for
              all your groceries. Get smart alerts before food expires and
              budget like a pro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
              >
                Get Started
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl text-emerald-600">98%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl text-emerald-600">Growing</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div>
                <div className="text-3xl text-emerald-600">$200</div>
                <div className="text-sm text-gray-500">Avg. Saved/Year</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1703113691184-848da8ebd0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJ5JTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcxNTE0OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh groceries"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating card
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Camera className="size-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Items Scanned Today</div>
                  <div className="text-2xl text-gray-900">24</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
