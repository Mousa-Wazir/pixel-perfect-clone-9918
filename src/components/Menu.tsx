import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import espressoImage from "@/assets/espresso.jpg";
import latteImage from "@/assets/latte.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import americanoImage from "@/assets/americano.jpg";
import macchiatoImage from "@/assets/macchiato.jpg";
import mochaImage from "@/assets/mocha.jpg";

const menuItems = [
  {
    name: "Espresso",
    description: "Rich and bold, our signature espresso shot",
    price: "$3.50",
    image: espressoImage,
  },
  {
    name: "Latte",
    description: "Smooth espresso with steamed milk and latte art",
    price: "$4.50",
    image: latteImage,
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and foam",
    price: "$4.25",
    image: cappuccinoImage,
  },
  {
    name: "Americano",
    description: "Classic espresso with hot water, bold and refreshing",
    price: "$3.75",
    image: americanoImage,
  },
  {
    name: "Caramel Macchiato",
    description: "Layered espresso with vanilla, caramel, and steamed milk",
    price: "$5.25",
    image: macchiatoImage,
  },
  {
    name: "Mocha",
    description: "Rich chocolate and espresso with whipped cream",
    price: "$5.00",
    image: mochaImage,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of handcrafted beverages, 
            each made with premium beans and expert care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2 text-primary">{item.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-accent">{item.price}</span>
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                  Add to Order
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
