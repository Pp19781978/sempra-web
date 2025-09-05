import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Factory, Sprout, Phone, Mail, MapPin, ChevronRight, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ------------------------------------------------------------
// SEMPRA.cz – moderní jednostránkový redesign
// Tech: React + Tailwind + shadcn/ui + Framer Motion
// ------------------------------------------------------------
// Poznámka: Odkazy, texty a sekce vycházejí z veřejně dostupných
// informací o SEMPRA PRAHA a.s. (portfolio: šlechtění/semenářství,
// odrůdy lnu a řepky, závody Děčín/Slapy/Litoměřice/Turnov/Mažice).
// Tento komponent lze vložit do Next.js/CRA projektu.
// ------------------------------------------------------------

const nav = [
  { id: "o-nas", label: "O nás" },
  { id: "divize", label: "Divize" },
  { id: "produkty", label: "Odrůdy" },
  { id: "novinky", label: "Novinky" },
  { id: "kontakt", label: "Kontakt" },
];

const divisions = [
  {
    icon: <Factory className="w-6 h-6" />, 
    title: "Děčín – strojírenský závod",
    text: "Žárové zinkování a strojírenská výroba s důrazem na kvalitu (ISO 9001).",
    href: "https://www.sempradecin.cz/",
  },
  {
    icon: <Sprout className="w-6 h-6" />, 
    title: "Slapy u Tábora – polní plodiny",
    text: "Produkce kmínu, lnu a řepky a navazující pěstitelské činnosti.",
    href: "https://www.sempra.cz/slapy/",
  },
  {
    icon: <Sprout className="w-6 h-6" />, 
    title: "Litoměřice – šlechtění ovocných druhů",
    text: "Šlechtění a množení jádrovin/peckovin a podnoží; výzkum a diagnostika.",
    href: "https://www.sempra.cz/litomerice/",
  },
  {
    icon: <Sprout className="w-6 h-6" />, 
    title: "Turnov – jahody, sazenice",
    text: "Tradiční pěstování sazenic a nabídka pro samosběr v sezóně.",
    href: "https://www.sempra.cz/turnov/nabidka.htm",
  },
];

const varieties = [
  {
    name: "Jantar (lněné semeno)",
    description: "Moderní odrůda lnu se zlatavým semenem a výbornou kvalitou.",
    link: "https://www.sempra.cz/linseed/index.html",
  },
  {
    name: "Lužnice (řepka jarní)",
    description: "Prověřená jarní odrůda s vyrovnaným výnosem a vitalitou.",
    link: "https://www.sempra.cz/jarni_repka/index.html",
  },
];

const news = [
  {
    title: "Aktualizace nabídky sazenic a osiv",
    text: "Pro jarní sezónu aktualizujeme katalog dostupných odrůd a výpěstků.",
    date: "březen 2025",
  },
  {
    title: "Investice do technologií žárového zinkování",
    text: "Zvýšení kapacity a kvality povrchových úprav v závodě Děčín.",
    date: "leden 2025",
  },
];

export default function SempraRedesign() {
  const [email, setEmail] = useState("");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-stone-900">
      {/* Topbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Leaf className="w-7 h-7" />
              <span className="font-semibold text-xl">SEMPRA PRAHA a.s.</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm hover:text-stone-700">
                  {n.label}
                </button>
              ))}
              <a href="#kontakt" className="ml-2">
                <Button className="rounded-2xl">Kontakt</Button>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Šlechtění, semenářství a průmysl pod jednou střechou
              </h1>
              <p className="mt-4 text-lg text-stone-700 max-w-prose">
                Od roku 1957 rozvíjíme českou tradici šlechtění zelenin, květin a polních plodin. 
                Vyrábíme, testujeme a pečujeme o kvalitu osiv i výpěstků. Součástí skupiny je také 
                strojírenský závod s žárovým zinkováním v Děčíně.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => scrollTo("produkty")} className="rounded-2xl">
                  Prohlédnout odrůdy <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
                <Button variant="secondary" onClick={() => scrollTo("divize")} className="rounded-2xl">
                  Naše divize
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="aspect-[4/3] rounded-2xl bg-white shadow-sm border border-stone-200 p-6 grid grid-cols-2 gap-4">
                <Stat k="1957" v="Založeno" />
                <Stat k="> 65 let" v="tradice" />
                <Stat k="ISO 9001" v="kvalita výroby" />
                <Stat k="> 2" v="odrůdy v portfoliu" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O nás */}
      <section id="o-nas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">O nás</h2>
            <p className="mt-4 text-stone-700">
              SEMPRA PRAHA a.s. patří k významným českým organizacím v oblasti šlechtění a semenářství.
              Věnujeme se šlechtění květin a zelenin, množení a obchodu s ovocnými druhy i vybranými polními plodinami.
              Naše pracoviště se zaměřují také na odborné poradenství, diagnostiku a zkušební činnost.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3"><Leaf className="w-5 h-5 mt-1"/> Šlechtění a množení – květiny, zeleniny, ovocné druhy</li>
              <li className="flex items-start gap-3"><Leaf className="w-5 h-5 mt-1"/> Polní plodiny – kmín, len, řepka</li>
              <li className="flex items-start gap-3"><Leaf className="w-5 h-5 mt-1"/> Diagnostika a testování kvality osiv</li>
              <li className="flex items-start gap-3"><Leaf className="w-5 h-5 mt-1"/> Vzdělávání a poradenství pro pěstitele</li>
            </ul>
          </div>
          <Card className="border-stone-200">
            <CardHeader>
              <CardTitle>Rychlé odkazy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <QuickLink href="https://www.sempra.cz/sempra_index.htm" label="Historie společnosti" />
              <QuickLink href="https://www.sempradecin.cz/" label="SEMPRA Děčín – zinkování" />
              <QuickLink href="https://www.sempra.cz/slapy/" label="Slapy – polní plodiny" />
              <QuickLink href="https://www.sempra.cz/litomerice/" label="Litoměřice – šlechtění" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Divize */}
      <section id="divize" className="bg-stone-50 border-y border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold">Naše divize</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((d, i) => (
              <motion.a
                key={d.title}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow rounded-2xl border-stone-200">
                  <CardHeader className="flex flex-row items-center gap-3">
                    {d.icon}
                    <CardTitle className="text-lg">{d.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-stone-700">{d.text}</p>
                    <span className="inline-flex items-center gap-1 text-sm mt-4">
                      Otevřít web <ExternalLink className="w-4 h-4"/>
                    </span>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Produkty / Odrůdy */}
      <section id="produkty" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:flex md:items-end md:justify-between">
          <h2 className="text-3xl font-bold">Odrůdy a osiva</h2>
          <p className="text-stone-600 mt-2 md:mt-0">Výběr z portfolia. Kompletní přehled na vyžádání.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {varieties.map((v) => (
            <Card key={v.name} className="rounded-2xl border-stone-200">
              <CardHeader>
                <CardTitle className="text-xl">{v.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-700">{v.description}</p>
                <a href={v.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-sm">
                  Detail odrůdy <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Novinky */}
      <section id="novinky" className="bg-stone-50 border-y border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold">Novinky</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {news.map((n) => (
              <Card key={n.title} className="rounded-2xl border-stone-200">
                <CardHeader>
                  <CardTitle>{n.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-700">{n.text}</p>
                  <p className="text-sm text-stone-500 mt-3">{n.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-stone-200 p-6 md:p-10 bg-white shadow-sm">
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-semibold">Katalog & novinky e‑mailem</h3>
              <p className="text-stone-700 mt-2">Zanechte e‑mail a pošleme vám aktuální katalog odrůd a nabídky.</p>
            </div>
            <form className="mt-4 md:mt-0 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="vase@adresa.cz" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-2xl min-w-[260px]" />
              <Button className="rounded-2xl">Odebírat</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <footer id="kontakt" className="bg-stone-900 text-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <Leaf className="w-6 h-6" />
                <span className="font-semibold text-lg">SEMPRA PRAHA a.s.</span>
              </div>
              <p className="mt-4 text-stone-300 max-w-prose">
                Tradice českého šlechtění a semenářství. Pro pěstitele i průmysl.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Kontakt</h4>
              <ul className="space-y-2 text-stone-300">
                <li className="flex items-start gap-2"><Phone className="w-5 h-5 mt-0.5"/> +420 220 416 125</li>
                <li className="flex items-start gap-2"><Mail className="w-5 h-5 mt-0.5"/> info@sempra.cz</li>
                <li className="flex items-start gap-2"><MapPin className="w-5 h-5 mt-0.5"/> U topíren 860/2, 170 00 Praha 7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Dokumenty</h4>
              <ul className="space-y-2 text-stone-300">
                <li><a className="hover:underline" href="#" onClick={(e)=>e.preventDefault()}>Katalog odrůd (PDF)</a></li>
                <li><a className="hover:underline" href="#" onClick={(e)=>e.preventDefault()}>Zásady kvality</a></li>
                <li><a className="hover:underline" href="#" onClick={(e)=>e.preventDefault()}>GDPR & cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-stone-700 text-sm text-stone-400 flex flex-col md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} SEMPRA PRAHA a.s.</p>
            <nav className="flex gap-6 mt-3 md:mt-0">
              {nav.map(n => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-stone-200">{n.label}</button>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-stone-200 p-4 flex flex-col justify-between">
      <div className="text-2xl font-semibold">{k}</div>
      <div className="text-sm text-stone-600">{v}</div>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3 hover:shadow-sm">
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}
