import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  reveal = true,
}) {
  const isCentered = align === "center";

  const content = (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base text-body sm:text-lg">{description}</p>
      )}
    </div>
  );

  return reveal ? <Reveal>{content}</Reveal> : content;
}