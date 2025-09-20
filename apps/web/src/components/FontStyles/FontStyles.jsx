export function FontStyles() {
  return (
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;0,700;1,400&display=swap");

      .font-geist {
        font-family: "Geist", ui-sans-serif, system-ui, -apple-system,
          "Segoe UI", Inter, Arial;
      }

      .font-instrument-serif {
        font-family: "Instrument Serif", ui-serif, Georgia, serif;
      }
    `}</style>
  );
}
