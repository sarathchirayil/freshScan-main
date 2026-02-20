import { Leaf, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-600 rounded-lg">
              <Leaf className="size-5 text-white" />
            </div>
            <span className="text-xl">ReceiptScan</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Benefits
            </a>
            {/* <a
              href="#pricing"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Pricing
            </a> */}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* <Button variant="ghost" className="text-gray-600">
              Sign In
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="size-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-gray-200">
            <a
              href="#features"
              className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Benefits
            </a>
            {/* <a
              href="#pricing"
              className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Pricing
            </a> */}
            <div className="pt-4 space-y-2">
              {/* <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Get Started
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
