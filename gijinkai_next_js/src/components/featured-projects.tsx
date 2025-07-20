import {
  ArrowRight,
  ComputerIcon,
  GamepadIcon,
  PaintbrushVerticalIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    name: "Web Development",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: ComputerIcon,
  },
  {
    name: "Game Development",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: GamepadIcon,
  },
  {
    name: "Digital Art",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: PaintbrushVerticalIcon,
  },
];

export default function FeaturedProjects() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Here For Anything You Need
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We've got you covered, we do game development, we do web
            development, we even do digital art!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                    >
                      Learn More <ArrowRight />
                    </Button>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
