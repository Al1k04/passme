import subscriptions from "@/data/subscriptions.json";
import InfoModal from "../components/InfoModal";
export default function SubscriptionsPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">PS Plus</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
        {subscriptions.map((sub) => (
          <li
            key={sub.id}
            className="flex flex-col gap-3 bg-neutral-900 border border-neutral-800 p-4 rounded-lg"
          >
            <div>
              <h2 className="text-xl font-bold text-emerald-400">
                {sub.title}
              </h2>
              <span className="text-neutral-400">{sub.duration}</span>
            </div>

            <ul className="list-disc list-inside text-neutral-300">
              {sub.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="mt-2">
              {sub.prices.map((p) => (
                <p key={p.label} className="font-bold">
                  {p.label}:{" "}
                  <span className="text-emerald-400">{p.value} ₾</span>
                </p>
              ))}
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=100093207031308"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto
              bg-neutral-800 p-2 rounded-lg text-center hover:bg-emerald-500
              hover:text-neutral-900 transition-colors"
            >
              შესაძენად დაგვიკავშირდით
            </a>
            <InfoModal />
          </li>
        ))}
      </ul>
    </div>
  );
}
