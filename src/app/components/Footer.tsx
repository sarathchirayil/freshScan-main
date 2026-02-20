import { Leaf, Mail, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Leaf className="size-6 text-white" />
              </div>
              <span className="text-xl text-white">ReceiptScan</span>
            </div>
            <p className="text-gray-400">
              Smart grocery management that saves money and reduces waste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              {/* <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li> */}
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 ReceiptScan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
