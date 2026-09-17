import Image from "next/image";
import Link from "next/link";

export function Mark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/anasehir-mark.png"
      alt=""
      width={439}
      height={391}
      className={className}
      priority
    />
  );
}

export function Wordmark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/anasehir-logo.png"
      alt="Anaşehir Koleji"
      width={1384}
      height={416}
      className={className}
      priority
    />
  );
}

export function Badge({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/anasehir-badge.png"
      alt="Anaşehir Koleji"
      width={1093}
      height={1254}
      className={className}
      priority
    />
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center no-underline"
      aria-label="Anaşehir Koleji ana sayfa"
    >
      {compact ? (
        <Mark className="h-10 w-auto" />
      ) : (
        <>
          <Image
            src="/brand/anasehir-mark.png"
            alt=""
            width={439}
            height={391}
            className="h-9 w-auto sm:hidden"
            priority
          />
          <Image
            src="/brand/anasehir-logo.png"
            alt="Anaşehir Koleji"
            width={1384}
            height={416}
            className="hidden h-10 w-auto sm:block lg:h-11"
            priority
          />
        </>
      )}
    </Link>
  );
}
