export interface CoffeeProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  features: string[];
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Cappuccino has strong espresso, warm milk, and thick foam on top.',
    price: '₹290',
    rating: 4.9,
    image: '/coffee/cappuccino.jpg',
    features: ['Espresso', 'Steamed Milk', 'Foam']
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Latte is smooth coffee with espresso and steamed milk. Light and creamy taste.',
    price: '₹330',
    rating: 5.0,
    image: '/coffee/latte.jpg',
    features: ['Espresso', 'Steamed Milk', 'Light Foam']
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Mocha mixes espresso, chocolate, and milk. Sweet and rich in every sip.',
    price: '₹370',
    rating: 4.7,
    image: '/coffee/mocha.jpg',
    features: ['Espresso', 'Chocolate', 'Steamed Milk']
  }
];

export interface FeatureHighlight {
  title: string;
  description: string;
  position: 'left' | 'right';
}

export const features: FeatureHighlight[] = [
  {
    title: 'Best Coffee Beans',
    description: 'We use fresh, high-quality beans for full flavour in every cup.',
    position: 'left'
  },
  {
    title: 'Made Just for You',
    description: 'Every cup is carefully made as per your taste and mood.',
    position: 'right'
  },
  {
    title: 'Warm Cafe Vibes',
    description: 'Relax, chat, or work peacefully in our warm and friendly cafe space.',
    position: 'left'
  },
  {
    title: 'Skilled Baristas',
    description: 'Our trained baristas make each coffee with care and give a great experience.',
    position: 'right'
  }
];

