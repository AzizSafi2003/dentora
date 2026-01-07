import Image from "next/image";

function Footer() {
  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Dentora Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">Dentora</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#how_it_works" className="hover:text-foreground">
                  How it works
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-foreground">
                  About
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 Dentora. Built for real people with real dental
            questions.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
