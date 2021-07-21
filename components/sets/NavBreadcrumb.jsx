import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBreadcrumb(props) {
  const router = useRouter();
  const pathName = router.pathname.concat("/");
  const resultado = router.pathname.indexOf("book01") ? router.pathname.replace("book01", "Unit 1 - Getting ready to travel abroad") : null;
  let links = [];
  let link1 = "";
  let label = "";
  var l = 0;

  for (var i = 1; i < pathName.length; i++) {
    link1 = link1.concat(pathName[i]);
    label = label.concat(pathName[i]);
    if (pathName[i] === "/") {
      links.push({});
      links[l].id = l;
      links[l].label = label.replace("/", "");
      links[l].link = link1.replace(label, "");
      links[l].class = "crumbs";

      l++;
      label = "";
    }
  }

  links[l - 1].class = links[l - 1].class + " disabled";

  return (
    <nav>
      {links.map((link) => (
        <Link key={link.id} href={"/" + link.link}>
          <a className={link.class}>{link.label} </a>
        </Link>
      ))}
      <style jsx>{`
        nav {
          padding: 0 0 2rem 0;
        }
        .crumbs {
          font-size: max(16px, 1.5rem);
          font-weight: 600;
        }
        .crumbs:after {
          content: ">>";
          margin: 0 0.5rem;
          font-size: max(25px, 2rem);
          line-height: 0;
        }
        .disabled {
          color: #aaa;
          pointer-events: none;
        }
      `}</style>
    </nav>
  );
}
