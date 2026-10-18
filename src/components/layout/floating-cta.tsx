"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Phone, CalendarCheck, Send } from "lucide-react";

export function FloatingMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#E9EEF1] p-2.5 px-4 shadow-float safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-[#00395C] bg-[#F2F8FB] hover:bg-[#e0f1f8] active:scale-95 transition rounded-xl text-center border border-[#E9EEF1]"
          aria-label="Direct Phone Call to Wada Hospital"
        >
          <Phone className="h-4 w-4 text-[#2E8DBB] mb-1" />
          <span className="text-[11px] font-bold leading-none">Call Hospital</span>
        </a>

        {/* Telegram Channel / Contact */}
        <a
          href={siteConfig.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 text-[#00395C] bg-[#e0f1f8] hover:bg-[#c7e5f3] active:scale-95 transition rounded-xl text-center border border-[#2E8DBB]/30"
          aria-label="Telegram Channel Wada Hospital"
        >
          <Send className="h-4 w-4 text-[#2E8DBB] mb-1" />
          <span className="text-[11px] font-bold leading-none">Telegram</span>
        </a>

        {/* Book Appointment CTA */}
        <Link
          href="/book"
          className="flex flex-col items-center justify-center py-2 px-1 text-white bg-[#2E8DBB] hover:bg-[#1e5e80] active:scale-95 transition rounded-xl text-center shadow-soft"
          aria-label="Book an Appointment at Wada Hospital"
        >
          <CalendarCheck className="h-4 w-4 text-white mb-1" />
          <span className="text-[11px] font-bold leading-none">Book Visit</span>
        </Link>
      </div>
    </div>
  );
}
