import Link from 'next/link';
import { AmpersandsIcon, GlobeIcon, LaptopIcon, UsersIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="bg-primary text-secondary">
        <div className="flex justify-between container mx-auto h-20 items-center px-4 md:px-6">
          <Link href={'#'} className="flex items-center gap-2">
            <div className="flex items-center">
              <AmpersandsIcon size={24} />
            </div>
            <span className="font-bold">Auctores</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href={'#about'}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary/15"
            >
              <span>About</span>
            </Link>
            <Link
              href={'#our-work'}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary/15"
            >
              <span>Our Work</span>
            </Link>{' '}
            <Link
              href={'#get-involved'}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary/15"
            >
              <span>Get Involved</span>
            </Link>{' '}
            <Link
              href={'#contact'}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary/15"
            >
              <span>Contact</span>
            </Link>
          </nav>
          <Button
            variant={'outline'}
            className="hidden md:inline-flex text-primary"
          >
            Donate
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="bg-primary py-12 md:py-24 lg:py-32 text-secondary"
        >
          <div className="container mx-auto px-4 md:px:6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="space-y-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Empowering Innovation with Auctores
                </h1>
                <p className="text-lg md:text-xl">
                  Auctores, which means &quot;people who innovate and build
                  something useful for society&quot; in Latin, is a non-profit
                  organization dedicated to fostering innovative technology
                  solutions that drive positive change in our communities.
                </p>
                <Button variant={'outline'} className="text-primary">
                  Get Involved
                </Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src={'/undraw_programming.svg'}
                  width={500}
                  height={500}
                  alt="Auctores"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="bg-secondary py-12 md:py-24 lg:py-32 text-primary"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex justify-center">
                <Image
                  src={'/undraw_about_us_page.svg'}
                  width={400}
                  height={400}
                  alt="About Auctores"
                  className="max-w-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Auctores
                </h2>
                <p className="text-lg md:text-xl">
                  Auctores is a non-profit organization that focuses on
                  innovative technology solutions to address pressing social and
                  environmental challenges. Our mission is to empower
                  communities, foster collaboration, and drive positive change.
                </p>
                <p className="text-lg md:text-xl">
                  We believe that technology can be a powerful tool for good,
                  and we work with a diverse network of partners to develop and
                  implement innovative solutions that create a more sustainable
                  and equitable future.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="our-work"
          className="bg-muted py-12 md:py-24 lg:py-32 text-primary"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Work
              </h2>
              <p className="text-lg md:text-xl">
                Auctores partners with organizations and communities to develop
                and implement innovative technology solutions that address
                pressing social and environmental challenges.
              </p>
              <div className="grid gap-6 md:grid-cols-3 md:gap-12">
                <div className="space-y-2">
                  <LaptopIcon className="mx-auto h-12 w-12" />
                  <h3 className="text-xl font-bold">Technology Innovation</h3>
                  <p className="text-muted-foreground">
                    We work with our partners to develop cutting-edge technology
                    solutions that drive positive change.
                  </p>
                </div>
                <div className="space-y-2">
                  <UsersIcon className="mx-auto h-12 w-12" />
                  <h3 className="text-xl font-bold">Community Engagement</h3>
                  <p className="text-muted-foreground">
                    We collaborate with local communities to ensure our
                    solutions are tailored to their unique needs and challenges.
                  </p>
                </div>
                <div className="space-y-2">
                  <GlobeIcon className="mx-auto h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Global Impact</h3>
                  <p className="text-muted-foreground">
                    Our work has a global reach, with projects and partnerships
                    around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="get-involved"
          className="bg-secondary py-12 md:py-24 lg:py-32 text-primary"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get Involved
              </h2>
              <p className="text-lg md:text-xl">
                Join us in our mission to drive positive change through
                innovative technology solutions.
              </p>
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <Card className="space-y-4">
                  <CardHeader>
                    <CardTitle>Volunteer</CardTitle>
                    <CardDescription>
                      Contribute your skills and expertise to our projects.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Whether you&apos;re a developer, designer, or have a
                      passion for social impact, we&apos;d love to have you on
                      our team.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card className="space-y-4">
                  <CardHeader>
                    <CardTitle>Donate</CardTitle>
                    <CardDescription>
                      Support our mission and help us create a better future.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your donation, no matter the size, can make a significant
                      impact on the communities we serve.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Donate Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-muted py-12 md:py-24 lg:py-32 text-primary"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="text-lg md:text-xl">
                Get in touch with us to learn more about our work or to discuss
                potential partnerships.
              </p>
              <form className="mx-auto max-w-md space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" rows={4} className="w-full" />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-secondary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:py-8">
          <div className="flex items-center gap-2">
            <AmpersandsIcon size={24} />
            <span className="font-bold">Auctores</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="#about"
              className="hover:underline hover:underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#our-work"
              className="hover:underline hover:underline-offset-4"
            >
              Our Work
            </Link>
            <Link
              href="#get-involved"
              className="hover:underline hover:underline-offset-4"
            >
              Get Involved
            </Link>
            <Link
              href="#contact"
              className="hover:underline hover:underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <p className="text-sm text-secondary/80">
            &copy; 2024 Auctores. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
