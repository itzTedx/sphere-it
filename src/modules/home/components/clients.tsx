export const Clients = () => {
  return (
    <section className="container border-y">
      <div className="mx-auto max-w-7xl border-x">
        <div className="space-y-4 rounded-3xl border bg-card px-16 py-10">
          <h3 className="text-center text-title-5">
            Trusted by <span className="text-primary">500+ Leading</span> Organizations
          </h3>
          <ul className="grid grid-cols-7 gap-3">
            {Array.from({ length: 14 }).map((_, i) => (
              <li className="flex aspect-video size-full items-center justify-center rounded-md bg-muted" key={i}>
                Logo {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
