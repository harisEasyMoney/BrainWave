import TagLine from "./TagLine";

const Heading = ({ tag, className, title, text }) => {
  return (
    <div
      className={`${className} text-center max-w-[50rem] mx-auto mb-12 lg:mb-20`}
    >
      {tag && <TagLine className="mb-4 justify-center ">{tag}</TagLine>}
      {title && <h2 className="h2"> {title}</h2>}
      {text && <p className="text-center body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
