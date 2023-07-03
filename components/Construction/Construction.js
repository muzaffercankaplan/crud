import Image from "next/image";

const Construction = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "100px" }}>
      <Image
        alt="construction"
        src={"/under-construction.png"}
        width={300}
        height={300}
        loading="lazy"
      />
    </div>
  );
};

export default Construction;
