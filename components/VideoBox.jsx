import React, { useState } from "react";
import Image from "next/image";
const VideoBox = ({ embedID }) => {
    const [imageClicked, setImageClicked] = useState(false);

    const onThumbnailClick = () => {
        setImageClicked(true);
    };

    return (
        <div className="embedbox">
            <div className="video">
                {!imageClicked ? (
                    <>
                        <div className="banner">
                            <Image
                                src={`https://img.youtube.com/vi/${embedID}/maxresdefault.jpg`}
                                width={550}
                                height={600}
                                alt="yt thumbnail"
                                className="thumbnail img-fluid"
                            />

                            <Image
                                id="play-button"
                                src="/youtube.png"
                                width={68}
                                height={48}
                                alt="play button"
                                className="play"
                                onClick={onThumbnailClick}
                            />

                        </div>


                    </>
                ) : (
                    <iframe
                        title="youtube video"
                        className="youtube-video"
                        src={`https://www.youtube.com/embed/${embedID}?rel=0&showinfo=0&autoplay=1`}
                        frameBorder="0"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    );
};

export default VideoBox;
