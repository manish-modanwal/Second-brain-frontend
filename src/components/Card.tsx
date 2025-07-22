import ShareIcon from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ title, link, type }: CardProps) => {
  const getYouTubeEmbedLink = (url: string) => {
    let videoId = "";

    // Match standard YouTube links
    const matchRegular = url.match(/v=([^&]+)/);
    if (matchRegular) {
      videoId = matchRegular[1];
    } else {
      // Match youtu.be short links
      const matchShort = url.match(/youtu\.be\/([^?&]+)/);
      if (matchShort) {
        videoId = matchShort[1];
      } else {
        // Match shorts URLs
        const matchShorts = url.match(/shorts\/([^?&]+)/);
        if (matchShorts) {
          videoId = matchShorts[1];
        }
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-4 max-w-72 border-gray-200">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
            <div className="text-gray-500">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ShareIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 rounded-md">
          {type === "youtube" && getYouTubeEmbedLink(link) && (
            <iframe
              className="w-full rounded-lg"
              width="560"
              height="315"
              src={getYouTubeEmbedLink(link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
