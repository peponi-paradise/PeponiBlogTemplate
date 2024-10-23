import Image from "next/image";

export default function PersonalCard({
  children,
  className = "",
  personalImage,
  name = "",
  occupation = "",
  responsibility = "",
  company = "",
  additionalInformation = "",
  description = "",
  descriptionLineClamp = false,
  ...props
}) {
  if (personalImage !== undefined) {
    return (
      <ImageCard
        className={className}
        personalImage={personalImage}
        name={name}
        occupation={occupation}
        responsibility={responsibility}
        company={company}
        additionalInformation={additionalInformation}
        description={description}
        descriptionLineClamp={descriptionLineClamp}
        {...props}
      >
        {children}
      </ImageCard>
    );
  } else {
    return (
      <TextCard
        className={className}
        name={name}
        occupation={occupation}
        responsibility={responsibility}
        company={company}
        additionalInformation={additionalInformation}
        description={description}
        descriptionLineClamp={descriptionLineClamp}
        {...props}
      >
        {children}
      </TextCard>
    );
  }
}

function TextCard({
  children,
  className,
  name,
  occupation,
  responsibility,
  company,
  additionalInformation,
  description,
  descriptionLineClamp,
  ...props
}) {
  return (
    <section className={"break-words " + className} {...props}>
      <p className="mb-4 text-2xl font-bold text-slate-200/90">{name}</p>
      <p className="text-sm">{occupation}</p>
      <p className="mb-2 text-sm">
        {responsibility}
        {responsibility != "" && company != "" ? ` @ ` : ""}
        {company}
      </p>
      <p className="text-sm whitespace-pre-wrap">{additionalInformation}</p>
      {children !== undefined && children != "" ? [children] : <></>}
      <p className={descriptionLineClamp == true ? "line-clamp-5" : ""}>
        {description}
      </p>
    </section>
  );
}

function ImageCard({
  children,
  className,
  personalImage,
  name,
  occupation,
  responsibility,
  company,
  additionalInformation,
  description,
  descriptionLineClamp,
  ...props
}) {
  return (
    <section
      className={"grid grid-flow-row gap-4 break-words " + className}
      {...props}
    >
      <div className="flex flex-col gap-4 min-[480px]:flex-row min-[480px]:gap-8">
        <Image
          className="rounded-full object-cover object-center min-[480px]:max-h-64 min-[480px]:max-w-[40%]"
          src={personalImage}
          alt="Personal image"
        />
        <div className="my-auto grow">
          <p className="mb-4 text-2xl font-bold text-slate-200/90">{name}</p>
          <p className="text-sm">{occupation}</p>
          <p className="mb-2 text-sm">
            {responsibility}
            {responsibility != "" && company != "" ? ` @ ` : ""}
            {company}
          </p>
          <p className="text-sm whitespace-pre-wrap">{additionalInformation}</p>
          {children !== undefined && children != "" ? [children] : <></>}
        </div>
      </div>
      <p className={descriptionLineClamp == true ? "line-clamp-5" : ""}>
        {description}
      </p>
    </section>
  );
}
