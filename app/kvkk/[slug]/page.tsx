import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/LegalPage";
import { kvkkSubpages } from "@/lib/legal";

export const dynamicParams = false;

export function generateStaticParams() {
  return kvkkSubpages.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/kvkk/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const doc = kvkkSubpages.find((d) => d.slug === slug);
  return { title: doc?.label ?? "KVKK" };
}

export default async function KvkkDocPage(props: PageProps<"/kvkk/[slug]">) {
  const { slug } = await props.params;
  const doc = kvkkSubpages.find((d) => d.slug === slug);
  if (!doc?.file) notFound();
  return <LegalPage file={doc.file} />;
}
