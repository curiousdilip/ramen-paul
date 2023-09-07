import React, { useState } from "react";

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
                            <img
                                src={`https://img.youtube.com/vi/${embedID}/maxresdefault.jpg`}
                                alt="yt thumbnail"
                                onClick={onThumbnailClick}
                                className="thumbnail"
                            />
                            <img
                                id="play-button"
                                className="play"
                                src="/youtube.png"
                                alt="play button"
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
