import aboutImage from "@/assets/about-coffee.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={aboutImage}
              alt="Bazm Coffee Shop Interior"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bazm Coffee was born from a simple passion: to create a welcoming space where 
              exceptional coffee meets warm hospitality. Since our inception, we've been dedicated 
              to sourcing the finest beans from sustainable farms around the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every cup we serve is crafted with precision and care by our expert baristas, 
              who have mastered the art of coffee-making. We believe that great coffee isn't 
              just about the beans—it's about the experience, the atmosphere, and the community 
              we build together.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Coffee Varieties</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">5★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
