import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Contact Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Get in{" "}
                <span className="text-[var(--gijinkai-purple)]">Touch</span>
              </h1>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                We'd love to hear from you! Whether you have a project idea, a
                question, or just want to say hello, feel free to reach out.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[var(--gijinkai-purple)]">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-gijinkai-1 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 lg:pl-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[var(--gijinkai-purple)]">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[var(--gijinkai-blue)]" />
                  <p>123 Digital Avenue, Tokyo, Japan</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-[var(--gijinkai-blue)]" />
                  <p>+81 3-1234-5678</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-[var(--gijinkai-blue)]" />
                  <p>info@gijinkaistudio.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Business Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM JST
                </p>
                <p className="text-gray-700">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
