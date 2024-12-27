import React, { useState, useEffect } from "react";
import pb from "../lib/pocketbase";
import getPbImageURL from "../lib/getPbImageURL";

const FileList = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController(); // AbortController 생성
        const fetchAllFiles = async () => {
            try {
                const files = await pb.collection("files").getFullList(1, {
                    autoCancel: false,
                    signal: controller.signal, // AbortController와 연결
                });

                const urls = files.map((file) =>
                    getPbImageURL(file, "photo")
                );
                setImageUrls(urls);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("파일 데이터 불러오기 오류:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllFiles();
    }, []);

    return (
        <div>
            <h2>Uploaded Images</h2>
            {isLoading ? (
                <p>Loading images...</p>
            ) : imageUrls.length > 0 ? (
                imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Uploaded ${index + 1}`} width="200" />
                ))
            ) : (
                <p>No images available.</p>
            )}
        </div>
    );
};

export default FileList;
