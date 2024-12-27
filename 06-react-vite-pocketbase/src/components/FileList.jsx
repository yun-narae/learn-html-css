import React, { useState, useEffect } from "react";
import pb from "../lib/pocketbase";
import getPbImageURL from "../lib/getPbImageURL"; // getPbImageURL 함수 임포트

const FileList = () => {
    const [imageUrl, setImageUrl] = useState(""); // 이미지 URL 상태 관리
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

    // 모든 파일을 가져오는 함수
    const fetchAllFiles = async () => {
        try {
            // 파일 컬렉션에서 모든 데이터 가져오기
            const files = await pb.collection("files").getFullList(1, {
                autoCancel: false, // 자동 요청 취소 방지
            });
            console.log("모든 파일 데이터:", files);

            // 첫 번째 파일의 이미지 URL 생성
            if (files.length > 0) {
                const firstFile = files[0];
                const imageUrl = getPbImageURL(firstFile, "photo"); // 파일 URL 생성
                setImageUrl(imageUrl);
            } else {
                setImageUrl(""); // 파일이 없으면 URL 비움
            }
        } catch (error) {
            console.error("파일 데이터 불러오기 오류:", error);
        } finally {
            setIsLoading(false); // 로딩 상태 업데이트
        }
    };

    // 컴포넌트 마운트 시 파일 목록 가져오기
    useEffect(() => {
        fetchAllFiles();
    }, []);

    return (
        <div>
            <h2>Uploaded Image</h2>
            {isLoading ? (
                <p>Loading image...</p> // 로딩 중 표시
            ) : imageUrl ? (
                <img src={imageUrl} alt="Uploaded" width="200" /> // 이미지 표시
            ) : (
                <p>No image available.</p> // 이미지 없을 때 메시지
            )}
        </div>
    );
};

export default FileList;
