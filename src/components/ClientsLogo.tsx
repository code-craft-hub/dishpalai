import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
const ClientsLogo = ({clientImages}:any) => {
  return (
    <section className="my-16">
      <InfiniteMovingLogos
        items={clientImages}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default ClientsLogo;
