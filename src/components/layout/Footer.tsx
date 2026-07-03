import { Link } from "react-router-dom";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Link to="/" className="font-display text-xl font-semibold text-foreground">
              {site.name}
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              {site.description}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {site.footer.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-border space-y-2">
          <p className="text-sm text-muted-foreground">{site.footer.copyright}</p>
          <p className="text-sm text-muted-foreground">{site.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
