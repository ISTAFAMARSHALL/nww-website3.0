import Link from "next/link";

export default function LunchDisplay() {
  return (
    <section
      id="features-home"
      className="relative py-12 md:py-20 bg-[#F9F9F9] text-center"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-[#0D1F2D] mb-6">
          We host regular lunch events across different cities.
          <br />
          Join us for impactful lunches in your city.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
          <article>
            <h3 className="mb-4 text-2xl font-bold text-[#F4A690]">Every Tuesday</h3>
            <p className="text-lg text-[#0D1F2D]">New York, NY</p>
          </article>
          <article>
            <h3 className="mb-4 text-2xl font-bold text-[#F4A690]">Every Wednesday</h3>
            <p className="text-lg text-[#0D1F2D]">Hoboken, NJ</p>
          </article>
        </div>
        <div className="mt-8">
          <Link href="/form">
            <p className="inline-block rounded bg-[#546A7B] hover:text-[#F4A690] transition px-12 py-4 text-[#F9F9F9] text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
              Request to Attend
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
