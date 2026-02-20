import { Leaf, DollarSign, Clock, Brain } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Reduce Food Waste',
    stat: '40%',
    description: 'Users reduce food waste on average',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: DollarSign,
    title: 'Save Money',
    stat: '$200+',
    description: 'Average annual savings per household',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Clock,
    title: 'Save Time',
    stat: '2hrs',
    description: 'Saved per week on grocery planning',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Brain,
    title: 'Smart Insights',
    stat: '100%',
    description: 'Visibility into your consumption habits',
    color: 'from-amber-500 to-orange-600',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">
            The Benefits Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of users who are already saving money and reducing waste
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 space-y-4">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} text-white`}>
                  <benefit.icon className="size-6" />
                </div>
                <div className={`text-5xl bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.stat}
                </div>
                <h3 className="text-xl">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="text-emerald-600 mb-4">✓</div>
            <h4 className="text-lg mb-2">Works Offline</h4>
            <p className="text-gray-600">Scan receipts even without internet connection</p>
          </div>
          <div className="text-center p-8">
            <div className="text-emerald-600 mb-4">✓</div>
            <h4 className="text-lg mb-2">Privacy First</h4>
            <p className="text-gray-600">Your data is encrypted and never shared</p>
          </div>
          <div className="text-center p-8">
            <div className="text-emerald-600 mb-4">✓</div>
            <h4 className="text-lg mb-2">Free to Start</h4>
            <p className="text-gray-600">No credit card required, start saving today</p>
          </div>
        </div>
      </div>
    </section>
  );
}
