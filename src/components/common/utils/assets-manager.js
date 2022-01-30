import React, { useContext, useEffect, useState } from 'react';
// import lobbyBgVideo from "../../../assets/videos/lobby.mp4";
// import auditoriumBgVideo from "../../../assets/videos/AUDITORIUM.mp4";
// import networkingBgVideo from "../../../assets/videos/IMG_0071.mp4";
// import boothHallBgVideo from "../../../assets/videos/booth-hall.mp4";
// import audiLiftVideo from "../../../assets/videos/audi-lift.m4v";
// import audiCloseVideo from "../../../assets/videos/auditorium-closing.mp4";
// import ayubowanVideo from "../../../assets/videos/ayubowan.webm";

const AssetsManager = ({ name }) => {

    const [asset, setAsset] = useState("");

    const lobbyBgVideo = "https://ioneglobe-resources.s3.us-east-2.amazonaws.com/lobby.mp4";
    const networkingBgVideo = "https://ioneglobe-resources.s3.us-east-2.amazonaws.com/IMG_0071.MP4";
    const auditoriumBgVideo = "https://ioneglobe-resources.s3.us-east-2.amazonaws.com/Auditorium+Loop-1.mp4";
    const boothHallBgVideo = "https://ioneglobe-resources.s3.us-east-2.amazonaws.com/FINAL+(STILL)+2.mp4";
    const audiLiftVideo = "https://ioneglobe-resources.s3.us-east-2.amazonaws.com/Lift+4-1.m4v";
    const audiCloseVideo = "https://ioneglobe-resources.s3.us-east-2.amazonaws.com/Auditorium+Closing.mp4";
    const ayubowanVideo = "https://ioneglobe-resources.s3.us-east-2.amazonaws.com/ayubowan.webm";
    
    useEffect(() => {
        if (name === 'lobbyBackgroundVideo') {
            setAsset(lobbyBgVideo)
        }
        if (name === 'auditoriumBackgroundVideo') {
            setAsset(auditoriumBgVideo)
        }
        if (name === 'networkingBackgroundVideo') {
            setAsset(networkingBgVideo)
        }
        if (name === 'boothHallBackgroundVideo') {
            setAsset(boothHallBgVideo)
        }
        if (name === 'audiLiftVideo') {
            setAsset(audiLiftVideo)
        }
        if (name === 'audiCloseVideo') {
            setAsset(audiCloseVideo)
        }
        if (name === 'ayubowanVideo') {
            setAsset(ayubowanVideo)
        }
    })

    return (
        <source src={asset} alt="" />
    );
};

export { AssetsManager }