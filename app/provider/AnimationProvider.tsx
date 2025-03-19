"use client";
import { AnimatePresence } from "framer-motion";
import {
  useEffect,
  useState,
  Children,
  isValidElement,
  cloneElement,
} from "react";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFirstMounted, setIsFirstMounted] = useState(false);

  useEffect(() => {
    setIsFirstMounted(true);
  }, []);

  // 자식 요소에 명시적인 키 추가
  const childrenWithKeys = Children.map(children, (child, index) => {
    // 유효한 React 엘리먼트인 경우만 키 추가
    if (isValidElement(child)) {
      return cloneElement(child, {
        key: child.key || `child-${index}`,
      });
    }
    return child;
  });

  return (
    <AnimatePresence initial={isFirstMounted}>
      {childrenWithKeys}
    </AnimatePresence>
  );
}
