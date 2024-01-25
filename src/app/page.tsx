import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const perks = [
  // {
  //   name: "Instant Delivery",
  //   Icon: ArrowDownToLine,
  //   description:
  //     "Get your assets delivered to your email in seconds and download them right away.",
  // },
  // {
  //   name: "Guarantied Quality",
  //   Icon: CheckCircle,
  //   description:
  //     "Every asset on our platform is verified by our team to ensure highest quality.",
  // },
  // {
  //   name: "For the Planet",
  //   Icon: Leaf,
  //   description:
  //     "We've pledged 1% of sales to thr preservation and restoration of the natural environment",
  // },
  {
    name: "Natychmiastowa dostawa",
    Icon: ArrowDownToLine,
    description:
      "Otrzymaj swoje produkty na adres e-mail w ciągu kilku sekund i pobierz je od razu.",
  },
  {
    name: "Gwarantowana jakoś",
    Icon: CheckCircle,
    description:
      "Każdy produkt na naszej platformie jest weryfikowany przez nasz zespół, aby zapewnić najwyższą jakość.",
  },
  {
    name: "Dla planety",
    Icon: Leaf,
    description:
      "Zobowiązaliśmy się przeznaczyć 1% dochodu ze sprzedaży na ochronę i odbudowę środowiska naturalnego",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {/* Your marketplace for high-quality */}
            Twój market dla najwyższej jakości{" "}
            {/* <span className="text-blue-600">digital assets</span>. */}
            <span className="text-blue-600">cyfrowych towarów</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            {/* Welcome to HippoMarket. Every asset is verified to ensure our
            highest quality standards. */}
            Witamy na BAZARKU. Każdy produkt jest weryfikowany, żeby spełniać
            nasze standardy jakości.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/produkty" className={buttonVariants()}>
              {/* <Link href="/products" className={buttonVariants()}> */}
              {/* Browse Treading */}
              Przeglądaj Trendy
            </Link>
            {/* <Button variant="ghost">Our quality promise &rarr; </Button> */}
            <Button variant="ghost">Nasza obietnica jakości &rarr; </Button>
          </div>
        </div>
        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products"
          title="Nowości"
        />
        {/* TO DO LIST PRODUCTS */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3 " />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
