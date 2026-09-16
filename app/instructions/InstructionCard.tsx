type Props = {
  title: string;
  url: string;
};

export default function InstructionCard({ title, url }: Props) {
  return (
    <article className="group flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-emerald-500 transition-all duration-300">
      <div className="p-3">
        <div className="flex items-start gap-2 mb-3">
          <span className="flex items-center justify-center px-2 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold shrink-0">
            Passme
          </span>

          <h2 className="text-base font-semibold text-neutral-100 leading-snug">
            {title}
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg bg-black">
          <iframe
            src={url.replace("watch?v=", "embed/")}
            title={title}
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>
      </div>
    </article>
  );
}
