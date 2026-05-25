import { PageTemplate } from "@/components/templates/page-template";

export default function ContactPage() {
  return <PageTemplate title="Contact" intro="Tell us about your goals, timeline, and scope.">
    <form className="grid gap-4 max-w-xl">
      <input className="bg-surface border border-white/15 px-4 py-3" placeholder="Name"/>
      <input className="bg-surface border border-white/15 px-4 py-3" placeholder="Email" type="email"/>
      <textarea className="bg-surface border border-white/15 px-4 py-3 min-h-36" placeholder="Project brief"/>
      <button className="bg-accent text-background px-5 py-3 font-medium w-fit">Send inquiry</button>
    </form>
  </PageTemplate>;
}
