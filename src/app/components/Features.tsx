import { Camera, Calendar, TrendingUp, Bell, Repeat, Wallet } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Smart Camera Scanning',
    description: 'Simply point your mobile camera at receipts and let our AI identify all produce, perishables, and non-perishables instantly.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Calendar,
    title: 'Shelf Life Tracking',
    description: 'Automatic calculation of expiry dates for all your groceries based on product type and storage conditions.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Bell,
    title: 'Expiration Alerts',
    description: 'Get timely notifications before your food expires so you can use it in time or plan your meals accordingly.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Wallet,
    title: 'Budget Management',
    description: 'Track your grocery spending, identify patterns, and make smarter purchasing decisions to save money.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Repeat,
    title: 'Smart Reordering',
    description: 'Based on your purchase history, get intelligent suggestions for when to reorder frequently bought items.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Usage Analytics',
    description: 'Understand your consumption patterns with detailed insights and reduce food waste over time.',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Everything You Need to Manage Your Groceries
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you save money, reduce waste, and make grocery shopping effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
