import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Cursor() {
    const [trail, setTrail] = useState([]); // 음표 위치 배열
    const lastTime = useRef(0); // 마지막 이벤트 시간 저장

    useEffect(() => {
        let id = 0;
        let animationFrame;

        // 공통 마우스/터치 이동 처리 함수
        const handleMove = (x, y) => {
            const now = Date.now();
            if (now - lastTime.current < 50) return; // 너무 자주 호출 방지
            lastTime.current = now;

            cancelAnimationFrame(animationFrame); // 이전 애니메이션 프레임 취소
            animationFrame = requestAnimationFrame(() => {
                const newNote = { id: id++, x, y, createdAt: now };
                setTrail((prev) => [...prev.slice(-3), newNote]); // 음표 3개만 유지
            });
        };

        // 마우스 이벤트
        const mouseMove = (e) => handleMove(e.clientX, e.clientY);

        // 터치 이벤트
        const touchMove = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                handleMove(touch.clientX, touch.clientY);
            }
        };

        // 이벤트 등록
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("touchmove", touchMove);

        // 다른 컴포넌트로 이동 시 이벤트 해제
        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("touchmove", touchMove);
        };
        
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
        <AnimatePresence>
            {trail.map((note) => (
            <motion.div
                key={note.id}
                initial={{ x: note.x, y: note.y, opacity: 1, scale: 1 }}
                animate={{
                y: note.y + 30,
                opacity: 0,
                scale: 0.3,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                position: "fixed",
                left: 0,
                top: 0,
                fontSize: "24px",
                color: "#333",
                pointerEvents: "none",
                }}
            >
                <img
                src="/img/public_cursor_01.svg"
                alt=""
                style={{ width: "20px" }}
                />
            </motion.div>
            ))}
        </AnimatePresence>
        </div>
    );
    }

    export default Cursor;
