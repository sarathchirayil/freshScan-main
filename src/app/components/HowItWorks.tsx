import { Scan, Database, Bell, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Scan,
    title: 'Scan Your Receipt',
    description: 'Use your mobile camera to capture your grocery receipt. Our AI instantly reads and categorizes all items.',
    image: 'https://images.unsplash.com/photo-1654263736203-a289f57c0d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGNhbWVyYSUyMHNjYW5uaW5nJTIwcmVjZWlwdHxlbnwxfHx8fDE3NzE1MTQ5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Database,
    title: 'Track Everything',
    description: 'Items are automatically categorized as produce, perishables, or non-perishables with calculated shelf life.',
    image: 'https://images.unsplash.com/photo-1743636521230-15e192f1cfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByb2R1Y2UlMjBtYXJrZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzE1MTQ5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Bell,
    title: 'Get Smart Alerts',
    description: 'Receive notifications when items are about to expire and suggestions for reordering based on your history.',
    image: 'https://images.unsplash.com/photo-1758522490602-bebf6a55fcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZ3JvY2VyeSUyMGFwcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNTE0OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: LineChart,
    title: 'Save & Budget',
    description: 'Monitor spending patterns, reduce waste, and make informed decisions with detailed analytics.',
    image: 'https://images.unsplash.com/photo-1703113691184-848da8ebd0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJ5JTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcxNTE0OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps to smarter grocery management
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 rounded-full bg-emerald-600 text-white text-xl">
                    {index + 1}
                  </div>
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <step.icon className="size-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-3xl">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
