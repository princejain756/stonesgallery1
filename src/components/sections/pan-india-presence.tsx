"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPinned } from "lucide-react";

import { panIndiaCoverage } from "@/data/pan-india-coverage";

const PanIndiaPresence = () => {
  const [activeRegion, setActiveRegion] = useState(panIndiaCoverage[0].region);

  const region = useMemo(
    () => panIndiaCoverage.find((item) => item.region === activeRegion) ?? panIndiaCoverage[0],
    [activeRegion]
  );

  return (
    <section className="bg-[#0a0a0a] text-white px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Pan-India Coverage</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-[0.2em]">
              Luxury marble, granite &amp; idols delivered to every metro
            </h2>
            <p className="mt-4 text-white/75 max-w-2xl">
              Stones Gallery by Dish Impex LLP (Sy.no, 16/2, hobli, begihalli village, taluk, Jigani, Anekal, Karnataka 560105) services heritage marble hubs like Jaipur and Kishangarh, high-rise
              corridors across Delhi NCR and Mumbai, and coastal resorts from Kochi to Chennai—while shipping custom idols
              and furniture nationwide.
            </p>
          </div>
          <Link
            href="/pages/contact-us"
            className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white/10"
          >
            Share project brief
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3">
              {panIndiaCoverage.map((item) => (
                <button
                  key={item.region}
                  onClick={() => setActiveRegion(item.region)}
                  className={`rounded border px-4 py-3 text-left text-sm uppercase tracking-[0.15em] transition ${
                    item.region === activeRegion
                      ? "border-white bg-white/10 text-white"
                      : "border-white/20 text-white/60 hover:border-white/40"
                  }`}
                >
                  {item.region}
                </button>
              ))}
            </div>

            <div className="rounded-lg border border-white/15 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/60">
                <MapPinned className="h-4 w-4" />
                {region.region}
              </div>
              <h3 className="mt-3 text-2xl font-light tracking-[0.1em]">{region.focus}</h3>
              <p className="mt-3 text-sm text-white/70">
                Serving {region.cities.join(" • ")}
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-white/80 md:grid-cols-2">
                {region.sellingPoints.map((point) => (
                  <li key={point} className="border border-white/10 bg-white/5 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                {region.keywords.slice(0, 6).map((keyword) => (
                  <span key={keyword} className="border border-white/15 px-3 py-1">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">WhatsApp hotline</p>
              <h3 className="mt-2 text-xl font-light tracking-[0.2em]">+91 90356 64747</h3>
              <p className="mt-2 text-sm text-white/70">
                Share drawings from Jaipur, Delhi, Mumbai, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, Kochi, or any
                metro. Our merchandisers respond within 12 working hours.
              </p>
              <a
                href="https://wa.me/919035664747?text=Hi%20Stones%20Gallery%2C%20I%20need%20marble%20%2F%20granite%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center border border-emerald-400 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200 hover:bg-emerald-400/10"
              >
                Message on WhatsApp
              </a>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Popular requests</p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Italian marble &amp; onyx for Delhi NCR, Mumbai, and Hyderabad penthouses</li>
                <li>• Temple sculptures for Jaipur, Chennai, Kochi, and overseas mandirs</li>
                <li>• Stone cladding + parking tiles for Ahmedabad, Pune, and Bengaluru campuses</li>
                <li>• Custom stone furniture + idols shipped via online store pan-India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanIndiaPresence;
